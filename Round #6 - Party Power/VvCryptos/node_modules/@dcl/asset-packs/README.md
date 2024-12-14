## asset-packs

This repo holds all the asset packs for the Editor and Web Editor. When the repo is deployed, all the files are hashed and uploaded to an S3 bucket under `contents/:hash` and an npm package `@dcl/asset-packs` is published with a `catalog.json` that holds all the asset packs and assets data, and their contents point to the hashes in the bucket. Also a `bin/index.js` is compiled and published along in the npm package, which must be included in scenes that make use of Smart Items. The bucket is accessible through the `builder-items.decentraland.*` via Cloudflare.

### Production

- npm: `@dcl/asset-packs@latest`

- cdn: `https://builder-items.decentraland.org/contents/:hash`

### Development

- npm: `@dcl/asset-packs@next`

- cdn: `https://builder-items.decentraland.zone/contents/:hash`

### Deployment

Every push to the `main` branch will be deployed to the development environemnt.

Every [release](https://github.com/decentraland/asset-packs/releases) will be deployed to the production environment.

### Local Development

You can develop this repo locally and test it within the Web Editor by doing the following:

Go to this repo in your machine and do this:
1. Run `npm run start` to watch for changes and start the SDK7 dev server (on port `8000` by default).
2. On a new terminal, run `docker-compose up` to start the local content server on `http://localhost:9000/asset-packs`
2. On a new terminal, run `npm run upload` to upload all assets to your local content server (copy the `.env.example` into `.env` if you haven't done that before).
3. Run `npm link` to allow other projects to symlink to this one.
4. Copy the path to the `bin/index.js` in this repo (something like `/Users/my-user/path/to/asset-packs/bin/index.js`).

Go the `js-sdk-toolchain` repo in your machine and do this:
1. Run `cd packages/@dcl/inspector`.
2. Run `npm link @dcl/asset-packs` to symlink to your local repository
3. Run `npm start` to start a local dev server. It should start by default on port `8000` but since we are already using it for the SDK7 dev server, it will start on port `8001`.

Go to the `builder` repo in your machine and do this:

1. Set the `REACT_APP_INSPECTOR_PORT` env var in `.env` to be `8001` (this is the `@dcl/inspector` dev server we started in the previous section).
2. Set the `REACT_APP_BIN_INDEX_JS_DEV_PORT` to the port where the SDK7 started running in the first section (by defualt `8000`).
3. Set the `REACT_APP_BIN_INDEX_JS_DEV_PATH` env var in `.env` to the path to the `bin/index.js` that you copied in the first section.
4. Set the `INSPECTOR_CONTENT_URL` variable in `src/config/env/[dev|stg|prod].json` to be `http://localhost:9000/asset-packs` (this is the content server we started in the first section).
5. Run `npm start` to start the builder local server which should start on port `3000`

Now you are all set, you can start developing the SDK7 scene in this repo, use it from the local Builder and test it by previewing the scene, which should use your local Builder Server serving the development javascript files.

### Troubleshooting

#### Missing `@dcl/ecs` dependency
This package has a dependency on `@dcl/ecs` for several types. This is package is not added as a dependency even though it should be, because this causes an issue when installing `@dcl/sdk@next` on a scene. The problem is the following dependency chains:

1) `@dcl/sdk` -> `@dcl/ecs`
2) `@dcl/sdk` -> `@dcl/sdk-commands` -> `@dcl/inspector` -> `@dcl/asset-packs` -> `@dcl/ecs`

When a user installs `@dcl/sdk@next` on as scene, that updates `@dcl/ecs` from 1) but not the one from 2) and due to the clash npm stores the `@latest` version on the top level of node_modules and the `@next` version only whithin the `@dcl/sdk/node_modules`. This can cause runtime issues.

So we decisded to remove the explicit dependency of `@dcl/ecs` from the `@dcl/asset-packs` package, and that allows users to install `@dcl/sdk@next` or upgrade versions without problems. 
The downside is that if this package is used in some project where `@dcl/ecs` is not available, it's going to break. This package is not meant to be used outside of a Decentraland scene anyway so that shouldn't be a problem.
