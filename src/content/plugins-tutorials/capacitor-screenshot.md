---
title: "Using Capacitor Screenshot Package"
description: "This tutorial will guide you on how to use the Capacitor Screenshot package to capture screenshots in a Capacitor-powered app."
created_at: "2021-09-26"
published: true
slug: capacitor-screenshot
---

# Using Capacitor Screenshot Package

In this tutorial, we will learn how to use the Capacitor Screenshot package to capture screenshots in a Capacitor-powered app.

## Getting Started

Before we begin, make sure you have the following prerequisites installed:

- Node.js
- Capacitor

To create a new Capacitor project, run the following commands in your terminal:

```bash
npx @capacitor/create-app
cd your-app
```

Next, add the Capacitor Screenshot package to your project:

```bash
npm install @capacitor/screenshot
npx cap sync
```

## Taking a Screenshot

Now that the Capacitor Screenshot package is installed, we can start taking screenshots in our app.

First, import the required Screenshot plugin from `@capacitor/screenshot`:

```javascript
import { Plugins } from '@capacitor/core';

const { Screenshot } = Plugins;
```

Next, you can use the `capture()` method to capture a screenshot:

```javascript
const { imageData } = await Screenshot.capture();
```

The `imageData` variable will contain the base64-encoded image data of the screenshot.

## Saving the Screenshot

To save the screenshot to the device's photo gallery, you can use the `save()` method:

```javascript
await Screenshot.save({
  path: 'my-screenshot.jpg',
  result: 'base64',
});
```

The `path` parameter specifies the filename and extension of the saved screenshot, while the `result` parameter determines the format of the saved image data.

## Displaying the Screenshot

You can display the screenshot in your app by converting the base64 image data to an `<img>` element:

```javascript
const screenshotImage = document.createElement('img');
screenshotImage.src = `data:image/jpeg;base64,${imageData}`;
document.body.appendChild(screenshotImage);
```

## Conclusion

In this tutorial, we learned how to use the Capacitor Screenshot package to capture and save screenshots in a Capacitor-powered app. We also saw how to display the captured screenshots in our app. Feel free to explore the Capacitor Screenshot documentation for more advanced features and options.

Remember to sync your project with Capacitor after making any changes:

```bash
npx cap sync
```

That's it! You are now ready to integrate screenshot functionality into your Capacitor app using the Capacitor Screenshot package. Happy coding!
