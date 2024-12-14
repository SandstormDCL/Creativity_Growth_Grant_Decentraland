# metrics

`npm i @well-known-components/metrics`

## Configuration via config component

Here is a list of configuration keys that may be used by this component:

- `WKC_METRICS_PUBLIC_PATH`: `string` path to expose metrics, default: `/metrics`
- `WKC_METRICS_BEARER_TOKEN`: `string` bearer token to protect metrics, default: _not set_
- `WKC_METRICS_COLLECT_DEFAULT`: `"true" | "false"` collect default nodejs metrics, default: `true`
- `WKC_METRICS_RESET_AT_NIGHT`: `"true" | "false"` resets all user-defined metrics every day at 00.00 UTC, default: false

## Define your metrics in a static file

```ts
// src/metrics.ts

import { IMetricsComponent } from "@well-known-components/interfaces"
import { validateMetricsDeclaration } from "@well-known-components/metrics"

export const metricDeclarations = {
  // register all http-server metrics
  ...getDefaultHttpMetrics(),
  // IMetricsComponent.SummaryType
  // IMetricsComponent.HistogramType
  // IMetricsComponent.GaugeType
  // IMetricsComponent.CounterType
  user_counter: {
    type: IMetricsComponent.CounterType,
    help: "Count calls to /user/:userId",
    labelNames: ["userId"],
  },
}

// type assertions
validateMetricsDeclaration(metricDeclarations)
```

## Define the component

```ts
// src/components.ts

import { metricDeclarations } from "./metrics"

export async function initComponents(): Promise<AppComponents> {
  ...
  // const config
  // const server
  const metrics = await createMetricsComponent(metricDeclarations, {config})
  await instrumentHttpServerWithMetrics({ metrics, config, server })

  return { ...components, metrics }
}
```

## Register metrics

```ts
export async function userIdHandler(context: { components: Pick<AppComponents, "metrics"> }) {
  const {
    components: { metrics },
  } = context

  metrics.increment("user_counter", { userId: Math.random() })
  // metrics.decrement("user_counter", { userId: Math.random() })
  // metrics.observe("user_counter", { userId: Math.random() }, 1)
  // metrics.reset("user_counter")

  return {}
}
```

## Migrating from 1.0.0 to 2.0.0

A few things must be taken into account since it is a breaking change

- The metrics component does not automatically instrument an http server, it should be done manually via `instrumentHttpServerWithMetrics`
- And thus, the default metricsDeclaration also don't include the default http metrics, it can be composed with those metrics via `metricsDeclaration = { ...getDefaultHttpMetrics(), ...yourMetrics }`
