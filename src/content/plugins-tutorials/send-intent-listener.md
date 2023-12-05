---
title: "Using the Send Intent Listener Package"
description: "A tutorial on how to use the Send Intent Listener package in Capacitor to receive data from other apps on Android"
created_at: "2022-09-15"
published: true
slug: "send-intent-listener"
---

# Using the Send Intent Listener Package

The Send Intent Listener package is a helpful plugin for Capacitor that allows your Android application to receive data from other apps through the Android share menu or share sheet. This tutorial will guide you through the process of setting up and using this plugin in your Capacitor project.

## Installation

To get started, you'll need to install the Send Intent Listener package from npm. Open your terminal and navigate to your Capacitor project directory. Then, run the following command:

```bash
npm install capacitor-plugin-send-intent
```

## Configuration

Once the package is installed, you'll need to register the plugin in your Android Capacitor app. Open the `MainActivity.java` file located at `your-project-name/android/app/src/main/java/com/yourdomain/yourproject/MainActivity.java`. 

Add the following import statement at the top of the file:

```java
import com.gustavosanjose.sendintentplugin.SendIntent;
```

Then, modify the `MainActivity` class to extend `BridgeActivity`:

```java
public class MainActivity extends BridgeActivity {
  // ...
}
```

Inside the `onCreate` method of `MainActivity`, add the following code to register the Send Intent Listener plugin:

```java
@Override
public void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  // ...

  // Register Send Intent Listener plugin
  registerPlugin(SendIntent.class);
}
```

That's it for the configuration! Your Capacitor Android app is now ready to receive data from other apps using the Send Intent Listener plugin.

## Usage

To use the Send Intent Listener package in your JavaScript code, you'll need to import it and call the `checkSendIntentReceived` method. Here's an example:

```js
import { SendIntent } from 'capacitor-plugin-send-intent';

SendIntent.checkSendIntentReceived()
  .then((result) => {
    if (result) {
      console.log('SendIntent received');
      console.log(JSON.stringify(result));
    }
  })
  .catch((error) => {
    console.error(error);
  });
```

In the example above, `checkSendIntentReceived` is called to check if a Send Intent was received. If a Send Intent was received, the result will be logged to the console.

You can also use the received data to perform other actions in your app. For example, if the received data is a file, you can use Capacitor's Filesystem plugin to read its content. Here's an example:

```js
import { SendIntent } from 'capacitor-plugin-send-intent';
import { Filesystem } from '@capacitor/filesystem';

SendIntent.checkSendIntentReceived()
  .then((result) => {
    if (result && result.url) {
      const decodedUrl = decodeURIComponent(result.url);
      Filesystem.readFile({ path: decodedUrl })
        .then((content) => {
          console.log(content.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  })
  .catch((error) => {
    console.error(error);
  });
```

In this example, if a Send Intent is received and it contains a URL, the URL is decoded and passed to the `readFile` method of the Filesystem plugin to read the file's content. The content is then logged to the console.

## Conclusion

The Send Intent Listener package provides a convenient way to receive data from other apps in your Capacitor Android app. By following the steps in this tutorial, you can easily integrate this functionality into your project.

Remember to close the send-intent-activity after processing the Send Intent in your app to avoid app state issues or trigger the same intent again. You can use the `finish` method provided by the Send Intent Listener package for this purpose.

I hope this tutorial has been helpful in getting you started with the Send Intent Listener package. Happy coding!