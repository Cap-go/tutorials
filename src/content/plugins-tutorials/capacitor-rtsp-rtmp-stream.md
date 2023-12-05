---
title: "Capacitor RTSP RTMP Stream Tutorial"
description: "Learn how to use the capacitor-rtsp-rtmp-stream package to stream RTSP and RTMP video in your Capacitor app."
created_at: "2022-07-14"
published: true
slug: capacitor-rtsp-rtmp-stream
---

# Capacitor RTSP RTMP Stream Tutorial

In this tutorial, we will learn how to use the `capacitor-rtsp-rtmp-stream` package to stream RTSP and RTMP video in your Capacitor app. This package provides a simple way to integrate streaming capabilities into your app using Capacitor.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor CLI
- Capacitor Core

## Installing the Package

To get started, install the `capacitor-rtsp-rtmp-stream` package by running the following command:

```bash
npm install capacitor-rtsp-rtmp-stream
```

## Configuring the Package

Once the package is installed, we need to configure it. Open your Capacitor app's `capacitor.config.json` file and add the following entry under the `"plugins"` section:

```json
{
  "name": "RTSPRTMPStream",
  "ios": {
    "swizzle": true
  }
}
```

This step ensures that the plugin is properly registered with Capacitor.

## Importing and Using the Package

Now that the package is installed and configured, we can import and use it in our application.

First, import the `RTSPRTMPStream` module by adding the following line to your component file:

```javascript
import { Plugins } from '@capacitor/core';

const { RTSPRTMPStream } = Plugins;
```

Next, you can use various methods provided by the `RTSPRTMPStream` module to handle streaming functionality.

For example, to start streaming a video from an RTSP source, use the `startRTSPStream()` method:

```javascript
RTSPRTMPStream.startRTSPStream({ url: 'rtsp://example.com/stream' })
  .then(() => {
    console.log('Streaming started');
  })
  .catch((error) => {
    console.error('Failed to start streaming:', error);
  });
```

Similarly, you can use the `startRTMPStream()` method to start streaming from an RTMP source:

```javascript
RTSPRTMPStream.startRTMPStream({ url: 'rtmp://example.com/stream' })
  .then(() => {
    console.log('Streaming started');
  })
  .catch((error) => {
    console.error('Failed to start streaming:', error);
  });
```

Remember to handle any errors that may occur while starting or stopping the streams.

## Conclusion

In this tutorial, we learned how to use the `capacitor-rtsp-rtmp-stream` package to stream RTSP and RTMP video in a Capacitor app. We covered the installation, configuration, and basic usage of the package.

Now you can integrate streaming capabilities into your Capacitor app and enhance the user experience by providing real-time video streaming functionalities.