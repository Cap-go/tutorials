---
title: "Using capacitor-plugin-photo-library"
description: "Learn how to use the capacitor-plugin-photo-library package to access and manage photos on your device."
created_at: "2022-02-25"
published: true
slug: capacitor-plugin-photo-library
---

# Using capacitor-plugin-photo-library

In this tutorial, we will learn how to use the `capacitor-plugin-photo-library` package to access and manage photos on your device.

## Step 1: Install Capacitor

Before we can start using any Capacitor plugin, we need to install Capacitor itself. Follow the steps below to install Capacitor globally on your system:

```bash
npm install -g @capacitor/core @capacitor/cli
```

## Step 2: Create a New Capacitor Project

If you haven't already created a Capacitor project, you can create a new one by running the following commands:

```bash
npx cap init [appName] [appId]
cd [appName]
```

Replace `[appName]` with the desired name of your application and `[appId]` with a unique identifier for your app.

## Step 3: Install the Photo Library Plugin

Next, we need to install the `capacitor-plugin-photo-library` package. Run the following command in your Capacitor project directory:

```bash
npm install capacitor-plugin-photo-library
```

## Step 4: Add the Photo Library Plugin to Your Project

Now that we have the plugin installed, we need to add it to our Capacitor project. Run the following command to add the plugin to your project's Capacitor configuration:

```bash
npx cap sync
```

## Step 5: Import and Use the Photo Library Plugin

In your application code, import the `Plugins` module from `@capacitor/core` and the `PhotoLibrary` module from `capacitor-plugin-photo-library`. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';
const { PhotoLibrary } = Plugins;
```

You can now use the `PhotoLibrary` module to access and manage photos on your device. For example, you can use the `getPhotos` method to retrieve a list of photos from the device's photo library:

```typescript
async function getPhotos() {
  const result = await PhotoLibrary.getPhotos();
  console.log('Photos:', result.photos);
}

getPhotos();
```

## Step 6: Build and Run Your App

After adding the plugin and writing your code, you can build and run your application using the following commands:

```bash
npx cap build
npx cap open [platform]
```

Replace `[platform]` with the platform you want to run your app on, such as `ios` or `android`.

Congratulations! You have successfully learned how to use the `capacitor-plugin-photo-library` package to access and manage photos on your device.

Feel free to explore the documentation of the plugin to learn about additional functionalities and methods it provides.