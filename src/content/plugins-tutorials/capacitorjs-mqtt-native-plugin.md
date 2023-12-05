---
title: "Using capacitor-mqtt-native-plugin"
description: "A tutorial on how to use the capacitor-mqtt-native-plugin package to connect to an MQTT broker and send/receive messages in CapacitorJS-powered Android apps."
created_at: "2021-09-30"
published: true
slug: "capacitorjs-mqtt-native-plugin"
---

# Using capacitor-mqtt-native-plugin

This tutorial will guide you through the process of using the capacitor-mqtt-native-plugin package to connect to an MQTT broker and send/receive messages in CapacitorJS-powered Android apps.

## Installation

To install the plugin, run the following command:

```bash
npm install capacitor-mqtt-native-plugin
npx cap sync
```

## Examples

In this section, we will provide examples of how to use the capacitor-mqtt-native-plugin in your CapacitorJS project using TypeScript.

### Connect to an MQTT Broker

To connect to an MQTT broker, you can use the `connect()` method provided by the plugin. Here's an example of how to connect to an MQTT broker:

```typescript
import { MqttBridge } from 'capacitor-mqtt-native-plugin';

const connectionOptions = {
  serverURI: 'tcp://broker.example.com',
  port: 1883,
  clientId: 'my-client-id',
  // Add other connection options as needed
};

MqttBridge.connect(connectionOptions)
  .then(() => {
    console.log('Connected to the MQTT broker');
  })
  .catch((error: any) => {
    console.error('Failed to connect to the MQTT broker:', error);
  });
```

### Disconnect from the MQTT Broker

To disconnect from the MQTT broker, you can use the `disconnect()` method provided by the plugin. Here's an example of how to disconnect from the MQTT broker:

```typescript
import { MqttBridge } from 'capacitor-mqtt-native-plugin';

MqttBridge.disconnect()
  .then(() => {
    console.log('Disconnected from the MQTT broker');
  })
  .catch((error: any) => {
    console.error('Failed to disconnect from the MQTT broker:', error);
  });
```

### Subscribe to an MQTT Topic

To subscribe to an MQTT topic, you can use the `subscribe()` method provided by the plugin. Here's an example of how to subscribe to an MQTT topic:

```typescript
import { MqttBridge } from 'capacitor-mqtt-native-plugin';

const topic = 'my/topic';

MqttBridge.subscribe(topic)
  .then(() => {
    console.log('Subscribed to the MQTT topic:', topic);
  })
  .catch((error: any) => {
    console.error('Failed to subscribe to the MQTT topic:', topic, error);
  });
```

### Publish to an MQTT Topic

To publish a message to an MQTT topic, you can use the `publish()` method provided by the plugin. Here's an example of how to publish a message to an MQTT topic:

```typescript
import { MqttBridge } from 'capacitor-mqtt-native-plugin';

const topic = 'my/topic';
const message = 'Hello, MQTT!';

MqttBridge.publish(topic, message)
  .then(() => {
    console.log('Published message to the MQTT topic:', topic);
  })
  .catch((error: any) => {
    console.error('Failed to publish message to the MQTT topic:', topic, error);
  });
```

### Listen to Incoming Messages

To listen to incoming messages from the MQTT broker, you can use the `addMessageArrivedListener()` method provided by the plugin. Here's an example of how to listen to incoming messages:

```typescript
import { MqttBridge } from 'capacitor-mqtt-native-plugin';

MqttBridge.addMessageArrivedListener((topic, message) => {
  console.log('Received message from MQTT topic:', topic);
  console.log('Message:', message);
});
```

### Listen to Connection Events

To listen to connection events (e.g., connect complete event, connection lost event), you can use the corresponding methods provided by the plugin. Here's an example:

```typescript
import { MqttBridge } from 'capacitor-mqtt-native-plugin';

// Connect complete event
MqttBridge.addConnectCompleteListener(() => {
  console.log('Connect complete');
});

// Connection lost event
MqttBridge.addConnectionLostListener((error) => {
  console.error('Connection lost:', error);
});
```

That's it! You have now learned how to use the capacitor-mqtt-native-plugin to connect to an MQTT broker and send/receive messages in CapacitorJS-powered Android apps. Feel free to explore more functionality provided by the plugin and adapt it to your specific project requirements. Happy coding!