---
title: Using @capacitor-community/native-market Package Tutorial
description: >-
  A tutorial on how to use the @capacitor-community/native-market package in
  Capacitor apps. Learn how to open store listings, developer pages,
  collections, editor's choice pages, and custom search queries.
created_at: '2022-01-12'
published: true
slug: native-market.git
locale: en
---

# Using @capacitor-community/native-market Package Tutorial

This tutorial will guide you on how to integrate and use the `@capacitor-community/native-market` package in your Capacitor apps. 

## Installation

To install the package using npm, run:

```
npm install @capacitor-community/native-market
```

To install the package using yarn, run:

```
yarn add @capacitor-community/native-market
```

Remember to sync the native files after installation:

```
npx cap sync
```

## Usage

```typescript
import { NativeMarket } from '@capacitor-community/native-market';
import { Capacitor } from '@capacitor/core';

// Open store listing
let appId = 'id1622127552';
if (Capacitor.getPlatform() === 'android') {
  appId = 'io.ionic.ioniconf';
}
NativeMarket.openStoreListing({
  appId: appId,
});

// Open developer page
NativeMarket.openDevPage({
  devId: '5700313618786177705',
});

// Open collection
NativeMarket.openCollection({
  name: 'featured',
});

// Open Editor's choice page
NativeMarket.openEditorChoicePage({
  editorChoice: 'editorial_fitness_apps_us',
});

// Search in store
NativeMarket.search({
  terms: 'capacitor',
});
```

This tutorial covers the basic installation and usage of the `@capacitor-community/native-market` package. Feel free to explore more options and customize the usage according to your app requirements.
```
