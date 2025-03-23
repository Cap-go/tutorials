```markdown
---
"title": "Using @capgo/home-indicator Package Tutorial",
"description": "Tutorial on hiding and showing the home button indicator in Capacitor app using @capgo/home-indicator package",
"created_at": "2022-01-31",
"published": true,
"slug": "home-indicator.git"
---

# Using @capgo/home-indicator Package Tutorial

This tutorial will guide you on how to hide and show the home button indicator in your Capacitor app using the @capgo/home-indicator package.

## Installation

To get started, install the package by running the following command in your project:

```bash
npm install @capgo/home-indicator
npx cap sync
```

## Usage

### Hiding the Home Indicator

You can hide the home indicator using the `hide()` method:

```typescript
import { hide } from '@capgo/home-indicator';

hide().then(() => {
  console.log('Home indicator is now hidden');
}).catch((error) => {
  console.error('Error hiding the home indicator:', error);
});
```

### Showing the Home Indicator

To show the home indicator, use the `show()` method:

```typescript
import { show } from '@capgo/home-indicator';

show().then(() => {
  console.log('Home indicator is now shown');
}).catch((error) => {
  console.error('Error showing the home indicator:', error);
});
```

### Checking if Home Indicator is Hidden

You can check the status of the home indicator using the `isHidden()` method:

```typescript
import { isHidden } from '@capgo/home-indicator';

isHidden().then((data) => {
  console.log('Home indicator is hidden:', data.hidden);
}).catch((error) => {
  console.error('Error getting home indicator status:', error);
});
```

### Getting Plugin Version

To get the native plugin version for Capacitor, use the `getPluginVersion()` method:

```typescript
import { getPluginVersion } from '@capgo/home-indicator';

getPluginVersion().then((version) => {
  console.log('Plugin version:', version);
}).catch((error) => {
  console.error('Error getting plugin version:', error);
});
```

By following this tutorial, you can easily manage the home button indicator in your Capacitor app using the @capgo/home-indicator package.
```