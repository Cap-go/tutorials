---
title: "Using capacitor-ota-assets Package"
description: "This tutorial will guide you on how to use the capacitor-ota-assets package to download assets in your Capacitor app."
created_at: "2022-05-06"
published: true
slug: "capacitor-ota-assets"
---

# Using capacitor-ota-assets Package

The capacitor-ota-assets package allows you to download assets in your Capacitor app. This can be useful for dynamically fetching resources, such as images or media files, from a remote source.

## Installation

To install the capacitor-ota-assets package, run the following command in your project directory:

```bash
npm install capacitor-ota-assets
npx cap sync
```

## API

The capacitor-ota-assets package provides the following API:

<docgen-index></docgen-index>

<docgen-api>
<!-- run docgen to generate docs from the source -->
<!-- More info: https://github.com/ionic-team/capacitor-docgen -->
</docgen-api>

## Example Usage

Here's an example of how you can use the capacitor-ota-assets package in your app:

```typescript
import { PluginListenerHandle } from '@capacitor/core';
import { OtaAssetsPlugin } from 'capacitor-ota-assets';

const otaAssetsPlugin = new OtaAssetsPlugin();

// Download an asset
otaAssetsPlugin.downloadAsset({
  url: 'https://example.com/image.png',
  filename: 'image.png',
  directory: 'assets/images'
}).then(() => {
  console.log('Asset downloaded successfully');
}).catch((error) => {
  console.error('Error downloading asset:', error);
});

// Listen to download progress
const progressListener: PluginListenerHandle = otaAssetsPlugin.addListener('downloadProgress', (progress) => {
  console.log('Download progress:', progress);
});

// Remove the progress listener
progressListener.remove();
```

In the above example, we create an instance of the OtaAssetsPlugin and use it to download an asset from a given URL. The downloaded asset will be saved with the specified filename in the specified directory. We also demonstrate how to listen to download progress by adding a listener for the 'downloadProgress' event.

Please refer to the [API documentation](#api) for more information on the available methods and events provided by the capacitor-ota-assets package.

This tutorial has covered the basic usage of the capacitor-ota-assets package. You can now explore more advanced features and customize it according to your specific app requirements.

Remember to regularly check the [capacitor-ota-assets repository](https://github.com/your-username/capacitor-ota-assets) for any updates or new features.

Happy coding!