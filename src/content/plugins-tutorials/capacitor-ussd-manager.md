---
title: "Using @veelit/capacitor-ussd-manager Package"
description: "This tutorial will guide you on how to use the @veelit/capacitor-ussd-manager package in your Capacitor app."
created_at: "2021-11-01"
published: true
slug: capacitor-ussd-manager
---

# Using @veelit/capacitor-ussd-manager Package

In this tutorial, we will learn how to use the `@veelit/capacitor-ussd-manager` package to manage USSD operations in your Capacitor app.

## Installation

To begin, install the `@veelit/capacitor-ussd-manager` package in your Capacitor project. Open your terminal and run the following command:

```bash
npm install @veelit/capacitor-ussd-manager
```

## Setup

Once the package is installed, you need to configure it in your project.

### Android Configuration

For Android, open `android/app/src/main/java/<your-package-name>/MainActivity.java` and import the required packages:

```java
import com.veelit.capacitor.ussdmanager.CapacitorUssdManager;
```

Next, add `CapacitorUssdManager` to the list of Capacitor plugins in the `initialize` method:

```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    ...
    add(CapacitorUssdManager.class);
    ...
}});
```

### iOS Configuration

For iOS, open `ios/App/AppDelegate.swift` and import the required packages:

```swift
import VeelitCapacitorUssdManager
```

Next, add `VeelitCapacitorUssdManager` to the list of Capacitor plugins:

```swift
let capacitorUssdManager = VeelitCapacitorUssdManager()
appDelegate.registerPlugin(capacitorUssdManager)
```

## Usage

Now that the package is installed and configured, let's see how we can use it in our app.

### Sending USSD Requests

To send a USSD request, you can use the `sendUssdRequest` method. Here is an example:

```typescript
import { CapacitorUssdManager } from '@veelit/capacitor-ussd-manager';

const sendUssdRequest = async () => {
  try {
    const result = await CapacitorUssdManager.sendUssdRequest('*123#');
    console.log('USSD response:', result);
  } catch (error) {
    console.error('USSD request failed:', error);
  }
};

sendUssdRequest();
```

In the above example, we import the `CapacitorUssdManager` from the package and use the `sendUssdRequest` method to send a USSD request. The response will be logged to the console.

### Listening for USSD Events

You can also listen for USSD events using the `addUssdListener` method. Here is an example:

```typescript
import { CapacitorUssdManager, UssdEvent } from '@veelit/capacitor-ussd-manager';

const addUssdListener = () => {
  CapacitorUssdManager.addUssdListener((event: UssdEvent) => {
    console.log('Received USSD event:', event);
  });
};

addUssdListener();
```

In the above example, we use the `addUssdListener` method to register a callback function that will be invoked whenever a USSD event is received. The event details will be logged to the console.

## Conclusion

In this tutorial, we learned how to install, configure, and use the `@veelit/capacitor-ussd-manager` package in a Capacitor app. We explored sending USSD requests and listening for USSD events. You can now use this package to handle USSD operations in your app effectively.