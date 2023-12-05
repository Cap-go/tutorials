---
title: "Using capacitor-recent-photos-picker Package"
description: "This tutorial will guide you through the process of using the capacitor-recent-photos-picker package to select recent photos on Capacitor."
created_at: "2022-10-26"
published: true
slug: "capacitor-recent-photos-picker"
---

# Using capacitor-recent-photos-picker Package

In this tutorial, we will learn how to use the capacitor-recent-photos-picker package to select recent photos on Capacitor.

## Step 1: Installation

To get started, you need to install the capacitor-recent-photos-picker package. Open your terminal and run the following command:

```bash
npm install capacitor-recent-photos-picker
```

## Step 2: Importing the Package

Next, you need to import the capacitor-recent-photos-picker package in your project's code. Open the file where you want to use the package and add the following import statement:

```typescript
import { RecentPhotosPicker } from 'capacitor-recent-photos-picker';
```

## Step 3: Using the Package

Once the package is installed and imported, you can start using it to select recent photos. The capacitor-recent-photos-picker package provides a `selectPhotos` method that allows you to choose recent photos from the device's photo library.

Here's an example of how to use the `selectPhotos` method:

```typescript
const photos = RecentPhotosPicker.selectPhotos();
console.log(photos);
```

The `selectPhotos` method returns an array of selected photos. You can then perform further operations with the selected photos, such as displaying them in your app or uploading them to a server.

## Conclusion

In this tutorial, we learned how to use the capacitor-recent-photos-picker package to select recent photos on Capacitor. By following the steps outlined in this tutorial, you should now be able to integrate the package into your Capacitor project and implement photo selection functionality.

Happy coding!