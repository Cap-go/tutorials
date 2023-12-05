---
title: "Using cordova-plugin-advanced-websocket-types"
description: "Learn how to use the cordova-plugin-advanced-websocket-types package to work with websockets in Cordova."
created_at: "2022-04-26"
published: true
slug: "cordova-plugin-advanced-websocket-types"
---

# Using cordova-plugin-advanced-websocket-types

In this tutorial, we will learn how to use the `cordova-plugin-advanced-websocket-types` package to work with websockets in Cordova. This package provides additional typescript typings for the `cordova-plugin-advanced-websocket` plugin, allowing for better code completion and type checking in your Cordova projects.

## Installation

First, you need to install the necessary packages. Open your terminal and run the following commands:

```console
ionic cordova plugin add cordova-plugin-advanced-websocket
npm i --save-dev cordova-plugin-advanced-websocket-types
```

This will install the `cordova-plugin-advanced-websocket` plugin and the `cordova-plugin-advanced-websocket-types` package as a dev dependency in your project.

## Usage

Once the packages are installed, you can start using the `cordova-plugin-advanced-websocket-types` package in your TypeScript or Ionic project.

```typescript
import {
  CordovaWebsocketOptions
} from 'cordova-plugin-advanced-websocket-types';

const wsOptions: CordovaWebsocketOptions = {
  url: 'wss://echo.websocket.org',
  timeout: 5000,
  pingInterval: 10000,
  headers: {Authorization: `Bearer ${accessToken}`},
  acceptAllCerts: false
};

window.CordovaWebsocketPlugin.wsConnect(
  wsOptions, 
  event => { // CordovaWebsocketEvent
    console.log(`Received callback from WebSocket: ${event?.callbackMethod}`);
  }, 
  success => { // CordovaWebsocketSuccess
    console.log(`Connected to WebSocket with id: ${success.webSocketId}`);
  },
  error => { // CordovaWebsocketError
    console.log(`Failed to connect to WebSocket: code: ${error?.code}, reason: ${error?.reason}`, error?.exception);
  }
);
```

In the above code snippet, we import the necessary types from the `cordova-plugin-advanced-websocket-types` package. Then, we define the websocket options and call the `wsConnect` function from the `CordovaWebsocketPlugin` object. We pass in the options, event callback, success callback, and error callback functions. Inside the callbacks, you can perform your desired logic based on the received events, successful connection, or connection error.

## More Reading

For more information on the `cordova-plugin-advanced-websocket-types` package and the `cordova-plugin-advanced-websocket` plugin, you can refer to the following resources:

- [cordova-plugin-advanced-websocket-types on npm](https://www.npmjs.com/package/cordova-plugin-advanced-websocket-types)
- [cordova-plugin-advanced-websocket on npm](https://www.npmjs.com/package/cordova-plugin-advanced-websocket)
- [cordova-plugin-advanced-websocket on GitHub](https://github.com/)

By following this tutorial, you should now be able to use the `cordova-plugin-advanced-websocket-types` package to work with websockets in your Cordova projects. Happy coding!
