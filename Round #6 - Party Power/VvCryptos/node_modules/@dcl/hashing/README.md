# @dcl/hashing

Hashing functions to calculate Decentraland Content Identifiers

- `hashV1(arg): Promise<string>`: `ba` prefixed hashes _are_ IPFSv1 hashes. Calculating hashes for files should generate the same result as an IPFS node.
- **DEPRECATED** `hashV0(arg): Promise<string>`: `Qm` prefixed hashes _are not_ IPFSv0 hashes, although it uses the same encoding (Qm...). These

`npm i @dcl/hashing`

```ts
import { hashV1 } from '@dcl/hashing'

// use with Node.js Buffers or Uint8Array
cid = await hashV1(fs.readFileSync('file'))

// use with fs.ReadStream
cid = await hashV1(fs.createReadStream('file'))

// => bafybeibdik2ihfpcdi7aaaguptwcoc5msav7uhn5hu54xlq2pdwkh5arzy
```
