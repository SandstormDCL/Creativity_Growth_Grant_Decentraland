# @dcl/rpc

## Main engine of change

`decentraland-rpc` was the first repository we build to create the decentraland explorer (the game client and SDK).
It is probably the only thing that is left from that time, even though it passed the test of time very well we often make suboptimal decisions because the way it works.
It is time to start reconsidering what things we have been sacrificing, even without noticing, that may be of a greater value in the future 5 years of Decentraland.

This is a non-exhaustive list of considerations for this new protocol:

- Most of the time, it will be a in-memory transport, that is, communication between processes or threads. Not over a network wire.
- While we use an in-browser approach for the Explorer, browser optimizations must be taken into account
  - Transferable objects between Workers and Renderer threads, `SharedArrayBuffers` when possible.
  - Not serialize everything to JSON back-and-forth
  - Remove stacked layers, optimize function calls and object allocations
  - Copying slices of ArrayBuffers is heavily optimized in browsers
- Unity will only care about ArrayBuffers written to its memory, there will be no need to use JSON in the main threads
- We may want to run several scenes in the same worker, multiplexing should be part of the initial design.
- To maintain a healthy anti corruption layer (ACL), any kind of application should find the the RPC library useful. Not only the decentraland Explorer and scenes.

### Design requirements

- Notifications will evolve into streams, nowadays subscribing to an event is difficult to reason and hard to code
- RPC Definition may leverage GRPC code generation to document the protocol itself
- Remote procedures must be initialized by requesting a module
- Module-based remote calls did prove themselves useful with time, to organize the remote calls we may continue using modules. Rename classes to modules.

### Notice

- Even though this document will be written using protocol buffers, the implementation may use a smaller and faster hand-made protocol for performance.
- Message payloads may or may not use protocol buffers

#### Start a RPC session and load a module to call a remote procedure

```sequence
participant Client as C
participant Server (Remote) as S
note over C: Port lifecycle
C->C: createPort(name)
C->S: CreatePort {message_id,name}
S->S: createPortAdapter(port_id, name)\nConfigure modules for the named port
S->C: CreatePortResponse {message_id,port_id}
note over C: Modules lifecycle
C->S: LoadModule {port_id,module_name}
S->C: LoadModuleResponse {port_id,module_id,procedures[]}
C->C: Create wrapper for module_id\nusing all the exposed procedures
```

## RPC messages

The RPC communications resemble JSON-RPC, the main differences are:

- The `method` field is now called `procedure_id` (and it is a number)
- `module_id` was removed
- `payload` can be anything (serialized)

#### Regular RPC call from Scene to Kernel

```sequence
participant Scene (client) as C
participant Kernel (server) as S
C->S: Request {procedure_id, payload}
S->C: Response {message_id, payload}
```

#### Getting an async stream (closed by client)

```sequence
participant Scene (client) as C
participant Kernel (server) as S
C->S: Request {message_id}
S->C: Response {message_id,streaming=true,seqId=0}
C->C: Generate async iterator for {message_id}
C->S: StreamMessage {ack=true,message_id,seqId=0}
note over C: Ask for a new item to be generated using ack=true
S-->C: StreamMessage {message_id,payload,seqId=1}
C->S: StreamMessage {ack=true,message_id,seqId=1}
note over C: Close the message by responding\nthe last ACK with ack=true,closed=true
S-->C: StreamMessage {message_id,payload,seqId=2}
C->S: StreamMessage {ack=true,message_id,seqId=2,closed=true}
S->S: Close async Generator
C->C: Close async Iterator
S-->C: StreamMessage {message_id,closed=true}
C->C: Close async iterator
```


#### Getting an async stream (closed by server)

The server will send a special StreamMessage with a new SeqId to tell the client that a stream (generator)
was closed

# Implementation of the interfaces

Nowadays the current RPC uses classes in the server side to keep track of the methods that can be called.
The classes are requested from the client using a similar mechanism as the previously defined, we now call them modules.
The classes used to implement a special interface in order to comply with the library, the semantics and the conventions of
those interfaces are hard to get while reading the code. The approach of this new library will be more
"verbosic" in order to allow the developers to understand what happens behind the curtain, and placing
them in control of the combinatorial semantics of the library.

## Simplest use case - Remote jobs

```typescript
// worker.ts

import { createRpcRpcClient } from "@dcl/rpc"

const rpcClient = createRpcClient(WebSocketTransport("wss://server:1234"))
const client = await rpcClient.createPort("scene")

const jobsRpc = await client.loadModule("JobQueue")

for await (const job of jobsRpc.getJobs()) {
  const result = await doJob(job)
  await jobsRpc.sendJobResult(getSuccessMessagePayload(job, result))
}
```

```typescript
// server

import {createRpcServer} from '@dcl/rpc'

// create the rpcServer to start handling transports
const rpcServer = createRpcServer()

rpcServer.onPort(port => {
    if (port.name == 'scene') {
        port.registerModule('JobQueue', createJobQueue)
    }
})

async function createJobQueue(port) {
    return {
        // ================================================
        // Send jobs
        // ================================================
        async * getJobs(workerPort) {
            while (true) {
                yield async getNextJob()
            }
        },
        // ================================================
        // Receive resolved jobs
        // ================================================
        async sendJobResult(workerPort, payload) {
            // do something with payload
        }
    }
}

WebSocketServerTransport(1234).onConnection(transport => {
    rpcServer.addTransport(transport)
})

```

## Advanced use cases

```typescript

server.registerModule('EngineModule', {
    // =====================================================================
    // Advanced use case: Subscribe to a tick, happens once every 16ms aprox
    // =====================================================================
    async * getTickStream(sceneWorker) {
        let i = 0

        while (true) {
            await sleep(16)
            if (yield i++) {
                // stop if the channel is closed
                break
            }
        }
    }
})

server.registerModule('InputModule', {
    // ============================================
    // Advanced use case: Subscribe to input events
    // ============================================
    async * getInputEventStream(sceneWorker) {
        while (true) {
            // https://stackoverflow.com/questions/51045136/how-can-i-use-a-event-emitter-as-an-async-generator
            const asyncStream = new AsyncStream()

            const observer = inputEvents.on('input', event => {
                asyncStream.push(serialize(event))
            })

            for async (let event in asyncStream) {
                if (yield event) {
                    // stop if the channel is closed
                    break;
                }
            }

            // release the observer
            inputEvents.off(observer)
        }
    }
})
```

## Design considerations

1. The transport is the abstraction (represents the media layer)
2. Every packet has a `port_id`, to route the message to its correspondent instances (session layer, cluster management)
   1. Default cluster coordinator uses `port_id = 0`
3. Every message sends a blob payload. Code may be generated to understand the blob (application layer)

## Semantics of stream messages

- Streams share the same `messageId`
- Every message of the stream has an incremental `sequenceId`
- Streams have ACKs for each `sequenceId*messageId`
- The ACK message is an algebraic type: `Ack(messageId,sequenceId)` and `AckClose(messageId,sequenceId)`
- Messages of the stream are implemented using generators in mind, that is to support backpressure and to avoid network congestion
- The first message of a stream also carries the first element of the stream
- The `AckClose(messageId,sequenceId)` message carries no element, it is emitted right after the last element in the stream
