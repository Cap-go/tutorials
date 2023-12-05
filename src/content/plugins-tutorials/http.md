---
title: "Using capacitor-lwy-http Package"
description: "In this tutorial, we will learn how to use the capacitor-lwy-http package to make HTTP requests in a Capacitor app."
created_at: "2022-08-23"
published: true
slug: http
---

# Using capacitor-lwy-http Package

Capacitor is a cross-platform app development framework that allows developers to build web applications that can run on iOS, Android, and the web. The `capacitor-lwy-http` package is a plugin for Capacitor that provides a simple and easy-to-use interface for making HTTP requests in your app.

## Installation

To get started, you need to install the `capacitor-lwy-http` package in your Capacitor project. Open a terminal or command prompt and navigate to your project directory. Then, run the following command:

```bash
npm install capacitor-lwy-http
```

## Configuration

After installing the package, you need to configure it for your specific platform. Capacitor provides different configuration files for each platform (iOS, Android, and web).

### iOS

For iOS, open the Xcode project for your app (located in the `ios` directory) and add the following line to your `Podfile`:

```ruby
pod 'capacitor-lwy-http', :path => '../node_modules/capacitor-lwy-http'
```

Then, run the following command to install the plugin:

```bash
npx cap update
```

### Android

For Android, open the Android project for your app (located in the `android` directory) and add the following line to your `settings.gradle` file:

```groovy
include ':capacitor-lwy-http'
project(':capacitor-lwy-http').projectDir = new File('../node_modules/capacitor-lwy-http/android')
```

Next, open the `build.gradle` file (located in the `android/app` directory) and add the following line to the `dependencies` block:

```groovy
implementation project(':capacitor-lwy-http')
```

Finally, sync your Gradle files by clicking the "Sync Now" button in Android Studio.

### Web

For web, open the `capacitor.config.json` file in your project root and add the following line to the `plugins` array:

```json
{
  "name": "capacitor-lwy-http"
}
```

## Usage

Once you have installed and configured the `capacitor-lwy-http` package, you can start using it in your app. Here's a basic example of how to make a GET request:

```typescript
import { Plugins } from '@capacitor/core';

const { LwyHttp } = Plugins;

async function makeRequest() {
  try {
    const response = await LwyHttp.request({
      method: 'GET',
      url: 'https://api.example.com/data',
    });

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
```

In this example, we import the `LwyHttp` plugin from `@capacitor/core` and use the `request` method to make a GET request to `https://api.example.com/data`. The response is then logged to the console.

You can also make other types of requests such as POST, PUT, and DELETE by changing the `method` value in the request object.

## Conclusion

In this tutorial, we have learned how to use the `capacitor-lwy-http` package to make HTTP requests in a Capacitor app. We covered the installation and configuration process for iOS, Android, and web platforms, as well as provided an example of making a GET request. With this package, you can easily communicate with APIs and retrieve data for your app. Happy coding!