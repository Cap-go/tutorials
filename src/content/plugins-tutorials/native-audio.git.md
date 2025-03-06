---
"title": "Using @capacitor-community/native-audio Package",
"description": "Step-by-step guide on utilizing the @capacitor-community/native-audio package for playing sounds natively using Capacitor.",
"created_at": "2023-10-23",
"published": true,
"slug": "native-audio.git"
---

# Using @capacitor-community/native-audio Package

This tutorial will guide you through utilizing the @capacitor-community/native-audio package to play sounds natively in your Capacitor apps.

## Installation

To get started, first install the package using npm or yarn:

```bash
npm install @capacitor-community/native-audio
```

or

```bash
yarn add @capacitor-community/native-audio
```

Next, synchronize the native files with the following command:

```bash
npx cap sync
```

## Configuration

No additional configuration is required for this plugin.

## Preparation

Place all your audio files in the respective platform folders:
- Android: `android/app/src/assets`
- iOS: `ios/App/App/sounds`
- Web: `assets/sounds`

## Supported Methods

The @capacitor-community/native-audio package provides methods for playing sounds. Visit the [official repository](https://github.com/capacitor-community/native-audio) for more information.

---

This tutorial provides a basic overview of how to use the @capacitor-community/native-audio package. For more advanced usage and customization, refer to the package's documentation and examples.