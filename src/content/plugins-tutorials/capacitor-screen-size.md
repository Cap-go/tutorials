---
title: "Using the capacitor-screen-size Package"
description: "In this tutorial, we will learn how to use the capacitor-screen-size package to obtain the screen dimensions of a device."
created_at: "2021-11-25"
published: true
slug: "capacitor-screen-size"
---

# Using the capacitor-screen-size Package

The `capacitor-screen-size` package provides an easy way to retrieve the screen dimensions of a device using Capacitor. This can be useful when you need to adapt your app's layout or display different content based on the size of the screen.

## Installation

To get started, you'll need to install the `capacitor-screen-size` package in your Capacitor project. You can do this by running the following command:

```bash
npm install capacitor-screen-size
```

## Usage

Once the package is installed, you can import it into your project and use it to retrieve the screen dimensions. Here's an example of how you can do this:

```typescript
import { Plugins } from '@capacitor/core';

const { ScreenSize } = Plugins;

const getScreenSize = async () => {
  const size = await ScreenSize.get();
  console.log('Screen Size:', size);
};

getScreenSize();
```

In the code above, we import the `ScreenSize` plugin from the `@capacitor/core` package. We then use the `get()` method to retrieve the screen dimensions, which returns an object with `width` and `height` properties representing the screen size in pixels.

You can use these values to dynamically adjust your app's layout or implement responsive behavior based on the screen size. For example, you could conditionally render different components or apply different styles based on whether the screen is a phone, tablet, or desktop.

## Conclusion

In this tutorial, we learned how to use the `capacitor-screen-size` package to obtain the screen dimensions of a device using Capacitor. We saw how to install the package, import it into our project, and retrieve the screen size using the `ScreenSize` plugin. We also discussed how to use the screen dimensions to adapt the app's layout and implement responsive behavior.

Now you have the knowledge to effectively utilize the `capacitor-screen-size` package in your Capacitor projects.