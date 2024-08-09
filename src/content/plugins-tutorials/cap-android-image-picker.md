---
title: Using Android Image Picker with Capacitor
description: Step-by-step guide on implementing the androidimagepicker package in your Capacitor project for selecting multiple images and retrieving geo data.
created_at: 2022-02-28
published": true
slug: cap-android-image-picker
---

# Using Android Image Picker with Capacitor

The Android Image Picker is a Capacitor plugin that enables users to select multiple images on an Android device and retrieve geo data. In this tutorial, we will walk through the process of integrating the androidimagepicker package into your Capacitor project.

## Installation

To get started, install the androidimagepicker package using npm and synchronize the Capacitor project:

```bash
npm install androidimagepicker
npx cap sync
```

## Configuration

No additional configuration is required for this plugin.

## Usage

1. Import the necessary plugin from Capacitor:

```typescript
import { Plugins } from  "@capacitor/core";
const { AndroidImagePicker } =  Plugins;
```

2. Implement the image picking functionality in your code:

```typescript
const pickImages = async () => {
  const { files } =  await  AndroidImagePicker.pickImages();
};
```

These steps will enable you to seamlessly integrate image selection and geo data retrieval features in your Android application using the Android Image Picker Capacitor plugin.
