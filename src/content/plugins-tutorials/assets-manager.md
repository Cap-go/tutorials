---
title: "Using rotel-assets-manager Package"
description: "A tutorial on how to use the rotel-assets-manager package to manage assets in your app."
created_at: "2021-09-15"
published: true
slug: assets-manager
---

# Using rotel-assets-manager Package

This tutorial will guide you through the process of using the `rotel-assets-manager` package to efficiently manage assets in your app.

## Installation

First, install the `rotel-assets-manager` package using npm:

```bash
npm install rotel-assets-manager
```

## Basic Usage

Once installed, you can import and utilize the functionality provided by the package in your application.

### Importing the Package

To use the `rotel-assets-manager` package, import it into your project:

```javascript
import { AssetManager } from 'rotel-assets-manager';
```

### Downloading Assets

To download assets, use the `downloadAssets` method:

```javascript
const assetManager = new AssetManager();

assetManager.downloadAssets('https://example.com/assets', '/path/to/save')
  .then(() => {
    console.log('Assets downloaded successfully!');
  })
  .catch((error) => {
    console.error('Failed to download assets:', error);
  });
```

The `downloadAssets` method takes two parameters: the URL of the assets and the local path to save them.

### Updating Assets

To update assets, use the `updateAssets` method:

```javascript
const assetManager = new AssetManager();

assetManager.updateAssets('https://example.com/assets', '/path/to/save')
  .then(() => {
    console.log('Assets updated successfully!');
  })
  .catch((error) => {
    console.error('Failed to update assets:', error);
  });
```

The `updateAssets` method works similar to `downloadAssets` but allows you to update existing assets.

## Additional Functionality

The `rotel-assets-manager` package provides additional functionality for managing assets. Please refer to the package documentation for more details.

That's it! You have learned the basics of using the `rotel-assets-manager` package to manage assets in your app. Happy coding!
