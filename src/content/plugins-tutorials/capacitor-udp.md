Sure, here is a markdown tutorial for using the `@nws/capacitor-udp` package:

---

---
title: "Using @nws/capacitor-udp package"
description: "A tutorial on how to use the @nws/capacitor-udp package in Capacitor apps."
created_at: "2022-04-15"
published: true
slug: capacitor-udp
---

# Using @nws/capacitor-udp package

In this tutorial, we will learn how to use the `@nws/capacitor-udp` package to enable UDP communication in Capacitor apps.

## Installation

To get started, let's install the `@nws/capacitor-udp` package. Open your terminal and run the following command in your project directory:

```bash
npm install @nws/capacitor-udp
```

## Configuration

Once the package is installed, we need to configure it for our app. 

### iOS

For iOS, open your app's `ios/App/App/AppDelegate.swift` file and add the following import statement:

```swift
import CapacitorUDP
```

Then, add the following code inside the `application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool` method:

```swift
let plugin = CAPPluginCall(named: "CapacitorUDP")
let bridge = bridge.bridge(byAddingPlugin: plugin)
```

This will initialize the UDP plugin in your iOS app.

### Android

For Android, open your app's `android/app/src/main/java/com/example/app/MainActivity.java` file and add the following import statement:

```java
import com.nws.capacitorudp.CapacitorUDP;
```

Then, add the following code inside the `import com.getcapacitor.BridgeActivity;` class:

```java
CapacitorUDP registerPlugin(Bridge bridge) {
    return bridge.registerPlugin(CapacitorUDP.class);
}
```

This will initialize the UDP plugin in your Android app.

## Usage

Now that the package is installed and configured, we can start using it in our app.

### Sending UDP Packets

To send a UDP packet, use the following code:

```javascript
import { Plugins } from '@capacitor/core';
const { CapacitorUDP } = Plugins;

CapacitorUDP.send({
  address: '192.168.0.1',
  port: 5000,
  data: 'Hello, UDP!'
});
```

This code sends a UDP packet to the specified address and port with the provided data.

### Receiving UDP Packets

To receive UDP packets, use the following code:

```javascript
import { Plugins } from '@capacitor/core';
const { CapacitorUDP } = Plugins;

CapacitorUDP.startListening({
  port: 5000
});

CapacitorUDP.addListener('udpMessageReceived', (data) => {
  console.log('Received UDP packet:', data);
});
```

This code starts listening for UDP packets on the specified port and adds a listener for the `udpMessageReceived` event. Whenever a UDP packet is received, the listener function will be called with the packet data.

## Conclusion

In this tutorial, we learned how to use the `@nws/capacitor-udp` package to enable UDP communication in Capacitor apps. We covered the installation, configuration, and basic usage of the package. You can now incorporate UDP functionality into your Capacitor apps.

Make sure to visit the official documentation of `@nws/capacitor-udp` for more advanced usage and options.

---

Please note that the above tutorial is a basic example and might need additional configuration or customization based on your specific use case. Always refer to the official documentation of the package for detailed instructions.

I hope this tutorial helps you get started with using the `@nws/capacitor-udp` package in your Capacitor apps!