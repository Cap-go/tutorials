---
title: "Using the wallpaper-helper package"
description: "A tutorial on how to use the wallpaper-helper package to set wallpapers on Android with Ionic"
created_at: "2021-10-04"
published: true
slug: "wallpaper-helper"
---

# Using the wallpaper-helper package

The wallpaper-helper package is a utility that allows you to set wallpapers on Android using Ionic. This tutorial will guide you through the installation and usage of the package.

## Installation

To install the wallpaper-helper package, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your Ionic project directory.
3. Run the following command:

```bash
npm install wallpaper-helper
npx cap sync
```

This will install the wallpaper-helper package and synchronize the changes with Capacitor.

## Usage

Once the package is installed, you can use it to set wallpapers on Android devices. There are two ways to define a wallpaper: using a base64 image or using an image located in the `main/res/drawable` path.

### Base64 Image

To set a wallpaper using a base64 image, follow these steps:

1. Import the necessary plugins:

```javascript
import { Plugins } from '@capacitor/core';
const { Wallpaper } = Plugins;
```

2. Use the `setBase64` method to set the wallpaper:

```javascript
Wallpaper.setBase64({
  base64: "<base64 value of the image>",
  data: "<type of image>"
}).then(result => {
  console.log("Wallpaper set successfully", result);
}).catch(error => {
  console.error("Failed to set wallpaper", error);
});
```

Make sure to replace `<base64 value of the image>` with the actual base64 value of the image and `<type of image>` with the appropriate image type (e.g., `'data:image/png;base64,'`).

### Drawable Image

To set a wallpaper using an image located in the `main/res/drawable` path, follow these steps:

1. Import the necessary plugins:

```javascript
import { Plugins } from '@capacitor/core';
const { Wallpaper } = Plugins;
```

2. Use the `setImage` method to set the wallpaper:

```javascript
Wallpaper.setImage({
  name: "<name of the image>"
}).then(result => {
  console.log("Wallpaper set successfully", result);
}).catch(error => {
  console.error("Failed to set wallpaper", error);
});
```

Replace `<name of the image>` with the actual name of the image file located in the `main/res/drawable` path.

## Conclusion

In this tutorial, we learned how to use the wallpaper-helper package to set wallpapers on Android devices with Ionic. You can now easily customize the wallpapers in your Ionic app to provide a personalized user experience.