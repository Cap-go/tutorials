---
"title": "Using @capgo/native-market Plugin: A Markdown Tutorial",
"description": "Learn how to use the @capgo/native-market package in your Capacitor app to interact with the native Play Store and App Store markets.",
"created_at": "2022-01-26",
"published": true,
"slug": "capacitor-native-market-git"
---

# Using @capgo/native-market Plugin: A Markdown Tutorial

This tutorial will guide you through the process of using the @capgo/native-market plugin in your Capacitor application. The plugin enables you to interact with the native Play Store and App Store markets seamlessly.

## Installation

To install the @capgo/native-market package, you can use either npm or yarn:

```bash
npm install @capgo/native-market
```

or

```bash
yarn add @capgo/native-market
```

Once the package is installed, make sure to sync the native files by running:

```bash
npx cap sync
```

For iOS and Android platforms, no further action is required after syncing the native files.

## Usage

The @capgo/native-market package provides several methods for interacting with the native markets. Here are some of the supported methods:

- `openStoreListing`: Launches a link in the Play Store or App Store.
- `openDevPage`: Deep-links directly to a Play Store or App Store developer page.
- `openCollection`: Links users to a specific collection or top charts.
- `openEditorChoicePage`: Links users to the Editor's choice page.
- `search`: Allows users to perform a custom search query in the Play Store or App Store.

You can utilize these methods in your Capacitor app by importing the `NativeMarket` module from `@capgo/native-market` and calling the respective methods with the required parameters.

```typescript
import { NativeMarket } from '@capgo/native-market';

// Example Usage of openStoreListing method
NativeMarket.openStoreListing({
  appId: 'com.example.app',
  country: 'US',
});

// Example Usage of openDevPage method
NativeMarket.openDevPage({
  devId: '5700313618786177705',
});

// Example Usage of openCollection method
NativeMarket.openCollection({
  name: 'topselling_free',
});

// Example Usage of openEditorChoicePage method
NativeMarket.openEditorChoicePage({
  editorChoice: 'editorial_fitness_apps_us',
});

// Example Usage of search method
NativeMarket.search({
  terms: 'capacitor',
});
```

By following this tutorial, you can seamlessly integrate native market functionality into your Capacitor app using the @capgo/native-market package.