---
title: "Using @gameleap/capacitor-chromecast Package"
description: "In this tutorial, we will learn how to use the @gameleap/capacitor-chromecast package to integrate Chromecast functionality into a Capacitor app."
created_at: "2022-07-12"
published: true
slug: capacitor-chromecast
---

# Using @gameleap/capacitor-chromecast Package

The @gameleap/capacitor-chromecast package is a powerful tool for integrating Chromecast functionality into your Capacitor app. With this package, you can easily cast audio, video, and images from your app to a Chromecast device.

In this tutorial, we will cover the following topics:

1. Installation
2. Initializing the Chromecast Plugin
3. Casting Media
4. Listening to Cast Events
5. Error Handling

## 1. Installation

To get started, let's install the @gameleap/capacitor-chromecast package into our Capacitor project. Open your terminal and navigate to your project directory. Then, run the following command:

```bash
npm install @gameleap/capacitor-chromecast
```

## 2. Initializing the Chromecast Plugin

Once the package is installed, we need to initialize the Chromecast plugin in our app. In your main project file (e.g., `app.ts`), import the plugin and add the initialization code:

```typescript
import '@gameleap/capacitor-chromecast';

Capacitor.Plugins.Chromecast.initialize();
```

## 3. Casting Media

To cast media from your app to a Chromecast device, you can use the `castMedia` method provided by the @gameleap/capacitor-chromecast package. Here's an example of how to cast a video:

```typescript
import { Plugins } from '@capacitor/core';

const { Chromecast } = Plugins;

async function castVideo(url: string, title: string) {
  try {
    await Chromecast.castMedia({
      type: 'video',
      url,
      title,
    });
    console.log('Video cast successfully');
  } catch (error) {
    console.error('Failed to cast video:', error);
  }
}
```

## 4. Listening to Cast Events

The @gameleap/capacitor-chromecast package provides a set of events that you can listen to in order to handle casting-related events. Here's an example of how to listen to the `ChromecastStatus` event:

```typescript
import { Plugins } from '@capacitor/core';

const { Chromecast } = Plugins;

Chromecast.addListener('ChromecastStatus', (status) => {
  console.log('Chromecast status:', status);
});
```

## 5. Error Handling

It's important to handle any errors that may occur during the casting process. The @gameleap/capacitor-chromecast package provides an `onError` event that you can listen to. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';

const { Chromecast } = Plugins;

Chromecast.addListener('ChromecastError', (error) => {
  console.error('Chromecast error:', error);
});
```

That's it! You now have the basic knowledge of using the @gameleap/capacitor-chromecast package to integrate Chromecast functionality into your Capacitor app. Happy casting!
