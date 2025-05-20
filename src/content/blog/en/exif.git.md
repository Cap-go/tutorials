---
title: Using @capacitor-community/exif Package Tutorial
description: >-
  Learn how to use the @capacitor-community/exif package in your Capacitor
  project to read and set image EXIF metadata
created_at: '2023-01-17'
published: true
slug: exif.git
locale: en
---

# Using @capacitor-community/exif Package Tutorial

In this tutorial, you will learn how to use the @capacitor-community/exif package in your Capacitor project to read and set image EXIF metadata.

## Installation

To get started, first install the package using npm:

```bash
npm install @capacitor-community/exif
npx cap sync
```

## Set Coordinates

You can set the coordinates to the image EXIF metadata using the `setCoordinates` method. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';
const { Exif } = Plugins;

Exif.setCoordinates({
  longitude: 40.7128,
  latitude: -74.0060,
});
```

## Get Coordinates

You can also get the coordinates from the image EXIF metadata using the `getCoordinates` method. Here's how you can do it:

```typescript
import { Plugins } from '@capacitor/core';
const { Exif } = Plugins;

const coordinates = await Exif.getCoordinates();
console.log('Coordinates:', coordinates);
```

That's it! Now you know how to use the @capacitor-community/exif package in your Capacitor project to interact with image EXIF metadata.
```
