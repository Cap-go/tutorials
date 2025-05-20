---
title: Using @capgo/home-indicator Package Tutorial
description: >-
  This tutorial will guide you through using the @capgo/home-indicator package
  to hide and show the home button indicator in your Capacitor app on Android
created_at: '2022-02-14'
published: true
slug: home-indicator.git
locale: en
---

# Using @capgo/home-indicator Package Tutorial

In this tutorial, you will learn how to use the @capgo/home-indicator package to hide and show the home button indicator in your Capacitor app on Android.

## Setup

First, install the package in your project by running the following command:

```bash
npm install @capgo/home-indicator
npx cap sync
```

## Usage

### Import the Package

In your project file, import the package:

```typescript
import { Plugins } from '@capacitor/core';
const { HomeIndicator } = Plugins;
```

### Hide the Home Indicator

You can hide the home indicator using the following code:

```typescript
// Hide the home indicator
HomeIndicator.hide();
```

### Show the Home Indicator

To show the home indicator, use the following code:

```typescript
// Show the home indicator
HomeIndicator.show();
```

### Check if Home Indicator is Hidden

You can also check if the home indicator is hidden by calling:

```typescript
const result = await HomeIndicator.isHidden();
console.log('Is Home Indicator Hidden:', result.hidden);
```

### Get Plugin Version

To get the native Capacitor plugin version, you can use:

```typescript
const version = await HomeIndicator.getPluginVersion();
console.log('Plugin Version:', version.version);
```

That's it! You have now successfully integrated the @capgo/home-indicator package into your Capacitor app to manage the home button indicator.
```
