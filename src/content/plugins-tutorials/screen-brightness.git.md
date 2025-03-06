```md
---
"title": "Using @capacitor-community/screen-brightness Package Tutorial"
"description": "Learn how to control screen brightness on iOS and Android devices using @capacitor-community/screen-brightness package."
"created_at": "2022-02-22"
"published": true
"slug": "screen-brightness.git"
---

# Using @capacitor-community/screen-brightness Package Tutorial

In this tutorial, we will learn how to control the screen brightness on iOS and Android devices using the @capacitor-community/screen-brightness package. This package allows you to set and get the brightness level of the device's screen.

## Installation

First, install the package using npm:

```bash
npm install @capacitor-community/screen-brightness
npx cap sync
```

## Usage

```typescript
import { ScreenBrightness } from '@capacitor-community/screen-brightness';

// Set the brightness level
const brightness = 0.5;
await ScreenBrightness.setBrightness({ brightness });

// Get the current brightness level
const { brightness: currentBrightness } = await ScreenBrightness.getBrightness();
```

That's it! You can now control the screen brightness on your iOS and Android devices using the @capacitor-community/screen-brightness package.
```