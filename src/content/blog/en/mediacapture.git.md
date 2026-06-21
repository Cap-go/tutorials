---
title: Using the Media Capture Package
description: A tutorial on how to use the @capacitor-community/media package for saving and retrieving photos and videos.
created_at: 2022-08-20
published: true
slug: mediacapture.git
locale: en
---

## Getting Started

The `@capacitor-community/media` package is a Capacitor plugin for saving and retrieving photos and videos, as well as managing photo albums. Follow the steps below to integrate and use this plugin in your Capacitor project.

### Installation

First, install the `@capacitor-community/media` package using npm:

```bash
npm install @capacitor-community/media
```

After installing the package, sync your project by running:

```bash
ionic cap sync
```

### Migrating to Plugin Version 7

If you are migrating from plugin version 6 to version 7 or higher, note the changes related to permissions on Android. Update your `AndroidManifest.xml` and `capacitor.config.ts` files accordingly as mentioned in the documentation.

### Basic Usage

1. Import the `MediaPlugin` from the `@capacitor-community/media` package in your project:

```typescript
import { MediaPlugin } from '@capacitor-community/media';
```

2. To capture media such as photos or videos, you can use the `captureMedia` method provided by the plugin. Here's an example of capturing an image:

```typescript
const profilePic = await MediaPlugin.captureMedia({
  mediaType: 'image',
  quality: 90,
});
```

3. You can also save media files to a specific album using the `saveMedia` method. Below is an example of saving a photo to a custom album:

```typescript
await MediaPlugin.saveMedia({
  path: profilePic.path,
  album: 'MyCustomAlbum',
});
```

4. To retrieve the saved media files, you can use the `getMedia` method. Here's an example of fetching all the photos from a specific album:

```typescript
const albumPhotos = await MediaPlugin.getMedia({
  mediaType: 'image',
  album: 'MyCustomAlbum',
});
```

### Additional Functionality

The `@capacitor-community/media` package provides additional methods for working with media files, managing albums, and more. Refer to the [official documentation](https://www.npmjs.com/package/@capacitor-community/media) for detailed information on all available methods and options.

## Conclusion

Using the `@capacitor-community/media` package, you can easily incorporate media capture and management features into your Capacitor project. Explore the capabilities of this plugin to enhance the functionality of your app with photo and video handling capabilities.