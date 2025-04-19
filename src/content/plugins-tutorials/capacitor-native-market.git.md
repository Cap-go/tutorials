---
"title": "Using @capgo/native-market Package"
"description": "A markdown tutorial on how to use the @capgo/native-market package, providing step-by-step instructions and code snippets for integrating and utilizing its features in a Capacitor project."
"created_at": "2022-01-23"
"published": true
"slug": "capacitor-native-market-git"
---

# Using @capgo/native-market Package

In this tutorial, we will walk through the process of using the `@capgo/native-market` package in a Capacitor project. The `@capgo/native-market` package is a Capacitor community plugin that allows you to interact with the native market for the Play Store and App Store. We will cover installation, configuration, supported methods, and usage examples.

## Installation

To install the `@capgo/native-market` package, you can use npm or yarn:

```bash
npm install @capgo/native-market
```

or

```bash
yarn add @capgo/native-market
```

After installing the package, make sure to sync the native files by running:

```bash
npx cap sync
```

## Configuration

There is no additional configuration required for this plugin.

## Supported Methods

The `@capgo/native-market` package provides the following supported methods:

- `openStoreListing`
- `openDevPage`
- `openCollection`
- `openEditorChoicePage`
- `search`

Each method has different functionalities for interacting with the native market apps.

## Usage

Below are examples of how to use each supported method:

### `openStoreListing`

This method will launch a link in the Play Store or App Store for a specific app ID.

```typescript
import { NativeMarket } from '@capgo/native-market';

NativeMarket.openStoreListing({
  appId: 'com.example.app',
  country: 'IT',
});
```

### `openDevPage`

This method will deep-link directly to a developer's page in the Play Store.

```typescript
import { NativeMarket } from '@capgo/native-market';

NativeMarket.openDevPage({
  devId: '5700313618786177705',
});
```

### `openCollection`

This method will link users to a collection or top charts in the Play Store.

```typescript
import { NativeMarket } from '@capgo/native-market';

NativeMarket.openCollection({
  name: 'featured',
});
```

### `openEditorChoicePage`

This method will link users to an Editor's choice page in the Play Store.

```typescript
import { NativeMarket } from '@capgo/native-market';

NativeMarket.openEditorChoicePage({
  editorChoice: 'editorial_fitness_apps_us',
});
```

### `search`

This method will link users to a custom search query in the Play Store.

```typescript
import { NativeMarket } from '@capgo/native-market';

NativeMarket.search({
  terms: 'capacitor',
});
```

By following the steps outlined in this tutorial, you can seamlessly integrate and use the `@capgo/native-market` package in your Capacitor project.