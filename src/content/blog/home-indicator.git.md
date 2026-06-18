```markdown
---
"title": "Using @capgo/home-indicator Package Tutorial"
"description": "This tutorial provides step-by-step instructions on how to use the @capgo/home-indicator package in a Capacitor app. It includes details on hiding and showing the home button indicator in your app."
"created_at": "2022-01-16"
"published": true
"slug": "home-indicator.git"
---

# Using @capgo/home-indicator Package Tutorial

In this tutorial, we will learn how to use the @capgo/home-indicator package to hide and show the home button indicator in a Capacitor app. 

## Step 1: Installation

To get started, install the @capgo/home-indicator package by running the following command:

```bash
npm install @capgo/home-indicator
npx cap sync
```

## Step 2: Import the Package

In your TypeScript file where you want to use the package, import the necessary functions:

```typescript
import { Plugins } from '@capacitor/core';
const { HomeIndicator } = Plugins;
```

## Step 3: Hiding and Showing the Home Indicator

You can now use the following functions provided by the package:

### Hide the Home Indicator

```typescript
const hideHomeIndicator = async () => {
  await HomeIndicator.hide();
};
```

### Show the Home Indicator

```typescript
const showHomeIndicator = async () => {
  await HomeIndicator.show();
};
```

### Check Home Indicator Status

You can also check if the home indicator is currently hidden or not:

```typescript
const checkHomeIndicatorStatus = async () => {
  const { hidden } = await HomeIndicator.isHidden();
  console.log('Home Indicator is hidden:', hidden);
};
```

And that's it! You can now effectively manage the visibility of the home button indicator in your Capacitor app using the @capgo/home-indicator package.
```
```