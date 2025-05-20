---
title: Using @capgo/ivs-player Package
description: >-
  Tutorial on how to use the @capgo/ivs-player package for Capacitor apps on
  Android and iOS.
created_at: '2021-09-15'
published: true
slug: ivs-player.git
locale: en
---

# Using @capgo/ivs-player Package

This tutorial will guide you on how to use the @capgo/ivs-player package for your Capacitor apps on Android and iOS.

## Installation

To install the package, run the following commands:

```bash
npm install @capgo/ivs-player
npx cap sync
```

## API

The package provides various API methods to control the IVS player. Some of the key methods include:

- `create(options: { url: string; pip?: boolean; title?: string; ... }) => Promise<void`: Create a new IVS player instance.
- `start()`: Start playing the video.
- `cast()`: Cast the video to another screen.
- `pause()`: Pause the video playback.
- `delete()`: Delete the IVS player instance.
- `getUrl()`: Get the current video URL.
- Other helpful methods for controlling player settings and interactions.

Make sure to refer to the official [AWS IVS Player documentation](https://docs.aws.amazon.com/ivs/latest/userguide/player.html) for more detailed information.

Remember to check the official Capacitor [documentation](https://capacitorjs.com/docs) and [Capgo - Instant updates for Capacitor](https://capgo.app/) for additional resources.
```
