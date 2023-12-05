---
title: "Using @capacitor-community/native-market Package"
description: "Learn how to use the @capacitor-community/native-market package to integrate native market functionality into your Capacitor app."
created_at: "2022-01-14"
published: true
slug: "native-market"
---

# Using @capacitor-community/native-market Package

The `@capacitor-community/native-market` package is a Capacitor community plugin that allows you to integrate native market functionality into your Capacitor app. With this plugin, you can open the app's store listing, navigate to the developer's page, open a collection or top charts, explore the Editor's Choice page, and perform custom searches.

## Installation

To install the `@capacitor-community/native-market` package, open your terminal and run the following command:

```bash
npm install @capacitor-community/native-market
```

or

```bash
yarn add @capacitor-community/native-market
```

After installing the package, sync the native files by running the following command:

```bash
npx cap sync
```

## Usage

Import the `NativeMarket` class from the `@capacitor-community/native-market` package and the `Capacitor` class from `@capacitor/core` in your application's TypeScript file:

```typescript
import { NativeMarket } from "@capacitor-community/native-market";
import { Capacitor } from "@capacitor/core";
```

### Opening the App Store Listing

To launch the link to the Play Store or App Store listing of your application, use the `openStoreListing` method:

```typescript
NativeMarket.openStoreListing({
  appId: "YOUR_APP_ID_HERE",
});
```

Replace `"YOUR_APP_ID_HERE"` with the ID of your application. For example, on Android, the app ID might be something like `"io.ionic.ioniconf"`, while on iOS, it might be something like `"id1622127552"`. You can use the `Capacitor.getPlatform()` method to determine the platform and select the appropriate app ID.

### Opening the Developer's Page

To deep-link directly to the Play Store or App Store developer page, use the `openDevPage` method:

```typescript
NativeMarket.openDevPage({
  devId: "YOUR_DEVELOPER_ID_HERE",
});
```

Replace `"YOUR_DEVELOPER_ID_HERE"` with the developer ID. For example, the developer ID could be `"5700313618786177705"`.

### Opening a Collection or Top Charts

To link users to a collection or top charts, use the `openCollection` method:

```typescript
NativeMarket.openCollection({
  name: "COLLECTION_NAME_HERE",
});
```

Replace `"COLLECTION_NAME_HERE"` with the name of the collection or top charts. You can refer to the [Android documentation](https://developer.android.com/distribute/marketing-tools/linking-to-google-play#OpeningCollection) for available options on Android.

### Opening the Editor's Choice Page

To link users to the Editor's Choice page, use the `openEditorChoicePage` method:

```typescript
NativeMarket.openEditorChoicePage({
  editorChoice: "YOUR_EDITOR_CHOICE_HERE",
});
```

Replace `"YOUR_EDITOR_CHOICE_HERE"` with the ID of the editor's choice. For example, the editor's choice ID could be `"editorial_fitness_apps_us"`.

### Performing a Custom Search

To link users to a custom search query, use the `search` method:

```typescript
NativeMarket.search({
  terms: "YOUR_SEARCH_TERMS_HERE",
});
```

Replace `"YOUR_SEARCH_TERMS_HERE"` with the terms you want to search in the Play Store or App Store.

## Conclusion

In this tutorial, you learned how to use the `@capacitor-community/native-market` package to integrate native market functionality into your Capacitor app. You can now open the app's store listing, navigate to the developer's page, open a collection, explore the Editor's Choice page, and perform custom searches. Incorporating these features into your app can enhance the user experience and make it easier for users to discover and download your app.