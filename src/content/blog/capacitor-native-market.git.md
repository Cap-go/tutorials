```markdown
---
"title": "How to Use the @capgo/native-market Package in Capacitor Apps"
"description": "Learn how to integrate the @capgo/native-market plugin in your Capacitor applications to access the native market for Play Store and App Store."
"created_at": "2022-01-10"
"published": true
"slug": "capacitor-native-market.git"
---

# Using @capgo/native-market Plugin in Capacitor Apps

This tutorial will guide you through the process of integrating the @capgo/native-market plugin in your Capacitor applications to enable access to the native market for both the Play Store and App Store.

## Installation

To install the @capgo/native-market package, you can use npm or yarn. Run the following command in your project directory:

```bash
npm install @capgo/native-market
```

or

```bash
yarn add @capgo/native-market
```

After installing the package, make sure to sync the native files using the following command:

```bash
npx cap sync
```

## Configuration

No additional configuration is required for this plugin.

## Supported Methods

The @capgo/native-market plugin provides the following methods that you can use in your Capacitor app:

- `openStoreListing`: Opens the app listing on the Play Store or App Store.
- `openDevPage`: Deep-links to the developer page on the Play Store.
- `openCollection`: Links to a specific collection or top charts.
- `openEditorChoicePage`: Links to the Editor's choice page.
- `search`: Conducts a custom search query in the Play Store or App Store.

## Usage

Here is an example of how you can use these methods in your TypeScript code:

```typescript
import { NativeMarket } from '@capgo/native-market';

// Open the store listing
NativeMarket.openStoreListing({
  appId: 'com.example.app',
  country: 'IT',
});

// Deep-link to developer page
NativeMarket.openDevPage({
  devId: '5700313618786177705',
});

// Link to a collection
NativeMarket.openCollection({
  name: 'featured',
});

// Link to Editor's choice page
NativeMarket.openEditorChoicePage({
  editorChoice: 'editorial_fitness_apps_us',
});

// Perform a search
NativeMarket.search({
  terms: 'capacitor',
});
```

By following this tutorial, you can seamlessly integrate the @capgo/native-market package in your Capacitor apps for enhanced access to the native market for both Android and iOS platforms.
```