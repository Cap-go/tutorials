# Using @capgo/capacitor-shake Package

## Introduction

In this tutorial, we will learn how to use the `@capgo/capacitor-shake` package in your Capacitor project. This package allows you to detect shake events on your device.

## Prerequisites

Before starting this tutorial, make sure you have the following prerequisites:

- Capacitor project set up and configured
- Basic knowledge of TypeScript and JavaScript

## Installation

To install the `@capgo/capacitor-shake` package in your Capacitor project, follow these steps:

1. Navigate to your project directory in the terminal.
2. Run the following command to install the package:

   ```bash
   npm install @capgo/capacitor-shake
   ```

3. Import the package in your project:

   ```typescript
   import '@capgo/capacitor-shake';
   ```

## Usage

Once you have installed and imported the `@capgo/capacitor-shake` package, you can start using it in your project.

### Shake Event Detection

To detect shake events on your device, follow these steps:

1. Add the following code to wherever you want to detect shake events in your project:

   ```typescript
   import { Plugins } from '@capacitor/core';

   const { Shake } = Plugins;

   // Register shake event listener
   Shake.addListener('shakeDetected', () => {
     // Do something when shake is detected
   });
   ```

2. Run your Capacitor project on a device or emulator.

3. When a shake event occurs, the `'shakeDetected'` event will be triggered, and the provided callback function will be executed.

   ```typescript
   Shake.addListener('shakeDetected', () => {
     console.log('Shake detected!');
   });
   ```

### Shake Sensitivity

By default, the shake sensitivity is set to `'medium'`. However, you can adjust the sensitivity level according to your requirements. To do this, use the `setSensitivity` method from the `Shake` plugin:

```typescript
Shake.setSensitivity('high');
```

The available sensitivity options are:

- `'low'`: Low sensitivity
- `'medium'`: Medium sensitivity (default)
- `'high'`: High sensitivity

## Conclusion

In this tutorial, we have learned how to use the `@capgo/capacitor-shake` package for detecting shake events in a Capacitor project. We have also explored how to adjust the shake sensitivity level. By leveraging this package, you can add shake event functionality to your application and enhance the user experience.

---
title: "Using @capgo/capacitor-shake Package"
description: "Learn how to use the @capgo/capacitor-shake package to detect shake events in a Capacitor project."
created_at: "2022-01-01"
published: true
slug: "capacitor-shake"
---