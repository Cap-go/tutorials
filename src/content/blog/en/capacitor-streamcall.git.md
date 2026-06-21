---
title: Using Capacitor Stream Call Package
description: A tutorial on how to use the @capgo/capacitor-stream-call package in your Capacitor app.
created_at: 2022-02-20
published: true
slug: capacitor-streamcall.git
locale: en
---

### Introduction

In this tutorial, we will walk through the process of integrating the @capgo/capacitor-stream-call package into your Capacitor application to enable streaming calls. 

### Prerequisites

Before you begin, make sure you have a Capacitor project set up and ready to go. If you haven't already created a Capacitor project, you can do so by following the official Capacitor documentation.

### Installation

To get started, install the @capgo/capacitor-stream-call package by running the following command:

```bash
npm install @capgo/capacitor-stream-call
```

### Configuration

After installing the package, you need to configure it in your Capacitor project. Open your Capacitor project and locate the `capacitor.config.json` file. Add the following configuration to enable the streaming call functionality:

```json
{
  "plugins": {
    "StreamCall": {
      "someConfigKey": "someConfigValue"
    }
  }
}
```

Replace `"someConfigKey"` and `"someConfigValue"` with the appropriate configuration for your application.

### Usage

Now that you have installed and configured the package, you can start using it in your application. Here is an example of how you can make a streaming call using the @capgo/capacitor-stream-call package:

```typescript
import { StreamCall } from '@capgo/capacitor-stream-call';

const stream = new StreamCall();
stream.open('http://example.com/stream', (data) => {
  console.log('Received data:', data);
});

// To close the stream
// stream.close();
```

In the example above, we create a new `StreamCall` object and open a connection to a streaming endpoint. The callback function will be called whenever new data is received from the stream. Don't forget to close the stream when it is no longer needed by calling `stream.close()`.

### Conclusion

Congratulations! You have successfully integrated the @capgo/capacitor-stream-call package into your Capacitor application and made a streaming call. Feel free to explore more features provided by the package to enhance the streaming experience in your app.