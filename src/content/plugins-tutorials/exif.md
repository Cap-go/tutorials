```md
---
title: Using @capacitor-community/exif package Tutorial
description: This tutorial will guide you on how to use the @capacitor-community/exif package to interact with image EXIF metadata.
created_at: 2022-04-06
published: true
slug: exif
---

# Using @capacitor-community/exif package Tutorial

This tutorial will guide you on how to use the `@capacitor-community/exif` package to interact with image EXIF metadata.

## Installation

To install the package, run the following command:

```bash
npm install @capacitor-community/exif
npx cap sync
```

## Configuration

Ensure that the following project variable (defined in your app's `variables.gradle` file) is set correctly:

```
androidxExifInterfaceVersion: version of androidx.exifinterface:exifinterface (default: 1.3.6)
```

## API

### `setCoordinates(...)`

Set the coordinates to the image EXIF metadata.

```typescript
setCoordinates(options: SetCoordinatesOptions) => Promise<void>
```

### `getCoordinates(...)`

Retrieve the coordinates from the image EXIF metadata.

```typescript
getCoordinates(options: GetCoordinatesOptions) => Promise<Coordinates>
```

## Supported Platforms

- iOS
- Android

```
