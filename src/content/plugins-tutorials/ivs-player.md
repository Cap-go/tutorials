---
title: "Using @capgo/ivs-player Package Tutorial"
description: "This tutorial will guide you through the steps of using the @capgo/ivs-player package to implement an IVS player in your Capacitor app."
created_at: "2022-10-15"
published: true
slug: ivs-player
---

# Using @capgo/ivs-player Package Tutorial

In this tutorial, we will walk you through the process of using the `@capgo/ivs-player` package to integrate an IVS player into your Capacitor app. The `@capgo/ivs-player` package provides a convenient way to leverage the Interactive Video Service (IVS) player functionality in your iOS and Android apps.

## Prerequisites

Before we get started, make sure you have the following:

- Capacitor app set up and running
- Valid AWS credentials with access to IVS

## Installation

To install the `@capgo/ivs-player` package, open your terminal and run the following command:

```bash
npm install @capgo/ivs-player
npx cap sync
```

This will install the package and sync your Capacitor project with the necessary native dependencies.

## Usage

Once you have installed the package, you can import and use it in your code. Here's an example of how to create an IVS player:

```typescript
import { Plugins } from '@capacitor/core';

const { IvsPlayer } = Plugins;

async function createIvsPlayer() {
  const options = {
    url: 'YOUR_IVS_STREAM_URL',
    pip: true,
    // Additional options...
  };

  await IvsPlayer.create(options);
}
```

The `create` function takes an options object as its argument, which specifies the URL of the IVS stream and other optional configurations such as whether to enable picture-in-picture mode (`pip`).

You can also use the various methods provided by the `IvsPlayer` plugin to control the player, such as `start`, `pause`, `setAutoQuality`, etc. Refer to the package documentation for a full list of available methods and their usage.

## Example Project

To see a complete example of using the `@capgo/ivs-player` package in a Capacitor app, you can refer to the following sample projects:

- [react-video-player-app-starter](https://github.com/jepiqueau/react-video-player-app-starter)
- [vite-react-videoplayer-app](https://github.com/jepiqueau/vite-react-videoplayer-app)
- [vue-videoplayer-app](https://github.com/jepiqueau/vue-videoplayer-app-starter)

These projects provide a starting point and showcase how to integrate the IVS player in different frameworks.

## Conclusion

In this tutorial, you learned how to use the `@capgo/ivs-player` package to implement an IVS player in your Capacitor app. You installed the package, created an IVS player, and explored some of the available methods. Now you can start building your own video streaming app using the power of IVS and Capacitor!

If you encounter any issues or have further questions, be sure to check the official package documentation and reach out to the community for support. Happy coding!
