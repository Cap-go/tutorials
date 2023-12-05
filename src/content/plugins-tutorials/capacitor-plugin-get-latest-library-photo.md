# How to Use the dellos7-capacitor-plugin-get-latest-library-photo Package

---

title: "Using the dellos7-capacitor-plugin-get-latest-library-photo Package"
description: "A step-by-step guide on how to use the dellos7-capacitor-plugin-get-latest-library-photo package to fetch the latest library photo"
created_at: "2022-10-18"
published: true
slug: "capacitor-plugin-get-latest-library-photo"

---

The dellos7-capacitor-plugin-get-latest-library-photo package is a Capacitor plugin that allows you to fetch the latest photo from the library on your device. This can be extremely useful when building mobile applications that require access to the device's photo library.

In this tutorial, we will walk you through the process of installing and using the dellos7-capacitor-plugin-get-latest-library-photo package in your Capacitor project.

## Prerequisites

Before getting started, make sure you have the following:

- Node.js and npm installed on your development machine
- Capacitor and the Capacitor CLI installed globally
- An existing Capacitor project set up

If you haven't installed Capacitor or created a Capacitor project yet, please refer to the official Capacitor documentation for instructions.

## Step 1: Install the Package

To begin, navigate to your Capacitor project's root directory in your terminal or command prompt. Then, run the following command to install the dellos7-capacitor-plugin-get-latest-library-photo package:

```bash
npm install dellos7-capacitor-plugin-get-latest-library-photo
```

This will add the package as a dependency to your project.

## Step 2: Configure the Plugin

Next, open your project's main `capacitor.config.json` file and add the dellos7-capacitor-plugin-get-latest-library-photo plugin to the `plugins` array:

```json
{
  "plugins": {
    "dellos7-capacitor-plugin-get-latest-library-photo": {
      "someOption": "someValue"
    }
  }
}
```

Replace `"someOption"` and `"someValue"` with any configuration options you want to set for the plugin. Consult the plugin's documentation for a list of available options and their descriptions.

## Step 3: Use the Plugin

Now that the package is installed and configured, you can use it in your code. Import the plugin into your project and call the `getLatestLibraryPhoto` function to retrieve the latest photo from the library.

```typescript
import { Plugins } from '@capacitor/core';

const { GetLatestLibraryPhoto } = Plugins;

// Inside an async function:
async function fetchLatestLibraryPhoto() {
  const result = await GetLatestLibraryPhoto.getPhoto();
  console.log(result.photoUrl);
}
```

The `getPhoto` function returns a promise that resolves with an object containing the `photoUrl` property. This URL can be used to display or manipulate the retrieved photo in your application.

## Step 4: Build and Run

After implementing the code to use the dellos7-capacitor-plugin-get-latest-library-photo package, you're ready to build and run your application. Use the following commands to build and run your project on the target platform:

```bash
npx cap build
npx cap open <platform>
```

Replace `<platform>` with `ios`, `android`, or `electron` depending on your target platform.

## Conclusion

Congratulations! You have successfully installed and used the dellos7-capacitor-plugin-get-latest-library-photo package in your Capacitor project. You can now fetch the latest photo from the device's library with ease. Feel free to explore additional features and options provided by the plugin's documentation to enhance your application further.

Happy coding!