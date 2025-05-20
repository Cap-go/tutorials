---
title: Using @capacitor-community/screen-brightness Package Tutorial
description: >-
  Step-by-step guide on how to use the @capacitor-community/screen-brightness
  package to control screen brightness on iOS and Android devices.
created_at: '2022-01-25'
published: true
slug: screen-brightness.git
locale: en
---

# Using @capacitor-community/screen-brightness Package

This tutorial will guide you on how to utilize the `@capacitor-community/screen-brightness` package to control screen brightness on iOS and Android devices. Follow the steps below to get started:

## Installation

To begin, install the `@capacitor-community/screen-brightness` package by running the following command in your terminal:

```bash
npm install @capacitor-community/screen-brightness
npx cap sync
```

## Usage

Import the `ScreenBrightness` module in your TypeScript file to start using the screen brightness functionality:

```typescript
import { ScreenBrightness } from '@capacitor-community/screen-brightness';

// Set the brightness level
const brightness = 0.5;
await ScreenBrightness.setBrightness({ brightness });

// Get the current brightness level
const { brightness: currentBrightness } = await ScreenBrightness.getBrightness();
```

By following these steps, you can easily control the screen brightness using the `@capacitor-community/screen-brightness` package in your Capacitor project.
