---
title: "Using @tommycto/capacitor-simple-image-cache package"
description: "A tutorial on how to use the @tommycto/capacitor-simple-image-cache package to cache images in a Capacitor app."
created_at: "2022-01-01"
published: true
slug: capacitor-simple-image-cache
---

# Using @tommycto/capacitor-simple-image-cache package

In this tutorial, we will learn how to use the `@tommycto/capacitor-simple-image-cache` package to cache images in a Capacitor app.

## Prerequisites

Before getting started, make sure you have the following prerequisites installed and set up:

- Node.js and npm
- Capacitor CLI
- Capacitor project setup

## Installation

To begin, we need to install the `@tommycto/capacitor-simple-image-cache` package in our Capacitor project. Run the following command in your project's root directory:

```bash
npm install @tommycto/capacitor-simple-image-cache
```

## Configuration

Once the package is installed, we need to configure it in our project. Open the `capacitor.config.json` file and add the following entry under the `plugins` section:

```json
"Plugins": {
  "SimpleImageCache": {
    "appId": "YOUR_APP_IDENTIFIER"
  }
}
```

Replace `YOUR_APP_IDENTIFIER` with your Capacitor app's identifier.

## Usage

Now that the package is installed and configured, we can start using it to cache images in our app. 

First, import the `SimpleImageCache` module into your desired component:

```typescript
import { Plugins } from '@capacitor/core';
const { SimpleImageCache } = Plugins;
```

Next, use the `storeImage` method to cache an image:

```typescript
await SimpleImageCache.storeImage({
  url: 'https://example.com/image.jpg',
  key: 'image-key',
  storageDirectory: 'cache'
});
```

The `url` parameter specifies the URL of the image you want to cache.
The `key` parameter is a unique identifier for the cached image.
The `storageDirectory` parameter specifies the directory where the image should be stored (e.g., `cache`, `documents`, `tmp`).

To retrieve the cached image, use the `getImage` method:

```typescript
const image = await SimpleImageCache.getImage({
  key: 'image-key'
});
console.log(image.path);
```

The `key` parameter should match the key used when caching the image.

## Conclusion

In this tutorial, we learned how to use the `@tommycto/capacitor-simple-image-cache` package to cache images in a Capacitor app. We installed the package, configured it in the Capacitor project, and demonstrated how to cache and retrieve images using the provided methods.

Feel free to explore the package's documentation for more advanced options and functionalities.

Remember to regularly update the cached images to ensure the latest content is displayed in your app. Happy coding!