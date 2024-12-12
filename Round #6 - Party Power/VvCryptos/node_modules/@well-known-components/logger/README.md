# logger component

Simple stdout & stderr logger component. Prints JSON when `NODE_ENV=production`

## Config

### `LOG_LEVEL` configuration

Using the LOG_LEVEL value provided by the IConfigComponent, the following scale is used to filter out the log levels based on the following scale:

"ALL" > "LOG" > "DEBUG" > "INFO" > "WARN" > "ERROR" > "OFF"

Eg:

```typescript
const config: IConfigComponent =
  createConfigComponent({ ...process.env, LOG_LEVEL: "INFO" })

const loggerComponent = createLogComponent({ config })
const logger = getLogger("Test")

logger.info("log some info") // This will be logged
logger.warn("log some warn") // This will be logged
logger.debug("log some debug") // This will NOT be logged
```
