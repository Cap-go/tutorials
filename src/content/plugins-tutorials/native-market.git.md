```markdown
---
"title": "Using Native Market Plugin in Capacitor",
"description": "A tutorial on how to use the @capacitor-community/native-market package in your Capacitor projects. Learn how to integrate features like opening store listings, developer pages, collections, and more.",
"created_at": "October 21, 2021",
"published": true,
"slug": "native-market"
---

# How to Use @capacitor-community/native-market Plugin

In this tutorial, we will cover how to integrate the @capacitor-community/native-market package into your Capacitor project to leverage features for interacting with native markets like the Play Store and App Store.

## Installation

To install the package using npm, run the following command:

```bash
npm install @capacitor-community/native-market
```

If you prefer using yarn, you can install the package with:

```bash
yarn add @capacitor-community/native-market
```

After installing the package, make sure to sync the native files with the following command:

```bash
npx cap sync
```

## Configuration

No additional configuration is required for using this plugin.

## Supported Methods

The @capacitor-community/native-market plugin provides several methods that are supported across different platforms:

- `openStoreListing`: Opens the store listing page for a specified app.
- `openDevPage`: Deep-links to a developer's page in the app store.
- `openCollection`: Links users to a specific collection or top charts in the app store.
- `openEditorChoicePage`: Directs users to the Editor's choice page in the app store.
- `search`: Allows users to perform a custom search query in the app store.

## Usage

Here is an example of how you can use the @capacitor-community/native-market plugin in your Capacitor project:

```typescript
import { NativeMarket } from '@capacitor-community/native-market';
import { Capacitor } from '@capacitor/core';

// Open store listing for a specific app
let appId = 'com.example.app';
if (Capacitor.getPlatform() === 'android') {
  appId = 'io.ionic.ioniconf';
}
NativeMarket.openStoreListing({ appId });

// Other methods like openDevPage, openCollection, openEditorChoicePage, and search can be used similarly
```

By following this tutorial, you can enhance your Capacitor apps with seamless interactions with native markets using the @capacitor-community/native-market plugin.
```