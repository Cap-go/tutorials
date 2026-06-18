---
title: "Using @capgo/capacitor-mqtt Package"
description: "A tutorial on integrating the @capgo/capacitor-mqtt package with your Capacitor project for MQTT functionality."
created_at: 2022-03-26
published: true
slug: capacitor-mqtt.git
locale: en
---

## Using @capgo/capacitor-mqtt Package

To integrate the @capgo/capacitor-mqtt package with your Capacitor project, follow these steps:

1. Install the package:
```bash
npm install @capgo/capacitor-mqtt
```

2. Import the plugin in your project:
```typescript
import '@capgo/capacitor-mqtt';
```

3. Use the plugin in your code:
```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorMQTT } = Plugins;

// Example usage to connect to a broker
CapacitorMQTT.connect({
  url: 'tcp://url-to-your-mqtt-broker:port',
  options: {
    username: 'your-username',
    password: 'your-password'
  }
});
```

4. Additional functionalities can be used as per the plugin documentation.

By following these steps, you can successfully integrate the @capgo/capacitor-mqtt package with your Capacitor project for MQTT capabilities.
