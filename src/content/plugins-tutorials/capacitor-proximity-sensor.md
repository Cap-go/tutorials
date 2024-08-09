```md
---
"title": "Using Capacitor Proximity Sensor Plugin"
"summary": "This markdown tutorial will guide you on how to use the Capacitor Proximity Sensor Plugin in your Ionic application."
"created_at": "2022-01-05"
"published": true
slug: capacitor-proximity-sensor
---

# Using Capacitor Proximity Sensor Plugin

To start using the Capacitor Proximity Sensor Plugin, follow these steps:

## Installation

First, install the `@anuradev/capacitor-proximity` package by running the following command:

```bash
npm install @anuradev/capacitor-proximity
npx cap sync
```

## API Usage

### Enabling Proximity Sensor

```typescript
import { Plugins } from '@capacitor/core';

const enableProximitySensor = async () => {
  await Plugins.Proximity.enable();
};
```

### Disabling Proximity Sensor

```typescript
import { Plugins } from '@capacitor/core';

const disableProximitySensor = async () => {
  await Plugins.Proximity.disable();
};
```

Now you can customize and integrate the Capacitor Proximity Sensor Plugin into your Ionic application!
```
