---
title: "Using @rea.ch/capacitor-native-share Package"
description: "In this tutorial, we will learn how to use the @rea.ch/capacitor-native-share package in Capacitor to implement native sharing functionality in your app."
created_at: "2022-01-10"
published: true
slug: "capacitor-native-share"
---

# Using @rea.ch/capacitor-native-share Package

In this tutorial, we will learn how to use the `@rea.ch/capacitor-native-share` package in Capacitor to implement native sharing functionality in your app.

## Prerequisites

Before we get started, make sure you have the following installed:

- Capacitor CLI (version 3.1.0 or later)
- @rea.ch/capacitor-native-share package (version 1.0.0 or later)
- Capacitor core package (version 3.1.0 or later)

## Step 1: Install the Package

To begin, open your terminal and navigate to your project directory. Run the following command to install the `@rea.ch/capacitor-native-share` package:

```bash
npm install @rea.ch/capacitor-native-share
```

## Step 2: Configure Capacitor

Next, we need to configure Capacitor to recognize the `@rea.ch/capacitor-native-share` package. Open the `capacitor.config.json` file in your project and add the following entry to the `plugins` array:

```json
{
  "name": "CapacitorNativeShare",
  "path": "@rea.ch/capacitor-native-share"
}
```

## Step 3: Import and Initialize the Package

In your app's entry file, import and initialize the `@rea.ch/capacitor-native-share` package. You can do this in the `src/main.ts` file for a Vue or Angular project, or in the `src/index.tsx` file for a React project.

For example, in a Vue project:

```javascript
import { registerWebPlugin } from '@capacitor/core';
import CapacitorNativeShare from '@rea.ch/capacitor-native-share';

registerWebPlugin(CapacitorNativeShare);
```

## Step 4: Implement Native Sharing

Now that the package is installed and configured, you can use it to implement native sharing in your app. Here's an example of how you can use the `share()` method provided by the `@rea.ch/capacitor-native-share` package:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorNativeShare } = Plugins;

// ...

async function shareContent() {
  try {
    const result = await CapacitorNativeShare.share({
      title: 'My App',
      text: 'Check out this cool app!',
      url: 'https://example.com/my-app',
    });
    console.log('Sharing succeeded:', result);
  } catch (error) {
    console.error('Sharing failed:', error);
  }
}
```

In the example above, we call the `share()` method and pass an object with the sharing parameters: `title`, `text`, and `url`. The method returns a promise that resolves with a result object if the sharing is successful, or rejects with an error object if the sharing fails.

## Conclusion

In this tutorial, we learned how to use the `@rea.ch/capacitor-native-share` package in Capacitor to implement native sharing functionality in your app. With this package, you can easily allow users to share content from your app to other apps installed on their devices, such as social media apps or messaging apps.

Remember to consult the official documentation of `@rea.ch/capacitor-native-share` for additional options and usage details.

Happy coding!