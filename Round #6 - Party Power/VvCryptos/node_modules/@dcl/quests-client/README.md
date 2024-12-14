<p align="center">
  <a href="https://decentraland.org">
    <img alt="Decentraland" src="https://decentraland.org/images/logo.png" width="60" />
  </a>
</p>
<h1 align="center">
  Quests Client - SDK7
</h1>

Quests Client for SDK7 is a [RPC Client](https://github.com/decentraland/rpc 'Decentraland RPC repository') which interacts with the [Quests Server](https://github.com/decentraland/quests/ 'Decentraland Quests repository') to track quests states and send events to make progress.

# Setup

If you want to contribute to this project, you will need to install the dependencies and build the project.

Start by installing NPM dependecies:

```console
$ npm install
```

The project uses the Quests Service [proto definition](./src/protocol/quests.proto) to generate the code required to compile, so before start the development, make sure you run:

```console
$ make build
```

# Usage

This library is intended to be used in a Decentraland Scene and uses SDK7 features like user authentication to initialize the client.

You can find the documentation to start using the library [here](https://docs.decentraland.org/creator/quests/sdk-client/).

## Install

Add dependency to your project

```console
$ npm add @dcl/quests-client
```

## Example

Create the Quests Client inside the `executeTask` and if the wallet based authentication is OK you will be ready to use the client to subscribe to updates or send new events that may make progress on a quest.

For this example we registered two observables to make use of the client from any other part of your code: `questEventsObservable` and `questStartObservable`

```typescript
executeTask(async () => {
  // retrieve websocket url from env
  const ws = 'wss://quests-rpc.decentraland.zone'

  const questID = 'q123-u456-e789-s012-t345'

  // create quests client
  try {
    const client = await createQuestsClient(ws, questID)

    questEventsObservable.on('message', async (action) => {
      await client.sendEvent({ action })
    })

    questStartObservable.on('start', async () => {
      await client.startQuest()
    })

    client.onStarted((quest) => {
      // update your state here or react to the quest started event
    })

    client.onUpdate((quest) => {
      // update your state here or react to the quest updates
    })

    // retrieve all quest instances and their state
    const userInstance = client.getQuestInstance()
    ...
  } catch (e) {
    console.log(`[Your Scene] connection to ${ws} failed! ${e}`)
  }
})
```

### Scene Example: Quests Tracking

In this [repository](https://github.com/decentraland/pickup-quest-scene) you may find a scene that makes use of all the Quests Client features.

Or you can go and check out the library documentation [here](https://docs.decentraland.org/creator/quests/sdk-client/)