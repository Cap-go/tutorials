---
title: "Using the capacitor-plugin-send-intent Package"
description: "A tutorial on how to use the capacitor-plugin-send-intent package for sharing data between Android apps in an Ionic Capacitor application."
created_at: "2021-09-21"
published: true
slug: "capacitor-plugin-send-intent"
---

# Using the capacitor-plugin-send-intent Package

In this tutorial, we will learn how to use the capacitor-plugin-send-intent package to share data between Android applications in an Ionic Capacitor application. This package allows you to listen for data sent from other apps via the Android share menu or share sheet.

## Installation

Before we begin, make sure you have Ionic Capacitor installed in your project. You can install the capacitor-plugin-send-intent package using npm:

```bash
npm install capacitor-plugin-send-intent
```

## Configuration

Once the package is installed, you need to register it in your Android Capacitor app. Open the `MainActivity.java` file located at `your-project-name/android/app/src/main/java/com/yourdomain/yourproject/MainActivity.java`.

Import the `SendIntent` class:

```java
import com.gustavosanjose.sendintentplugin.SendIntent;
```

Then, inside the `onCreate` method of the `MainActivity` class, add the registration code:

```java
@Override
public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Register SendIntent plugin
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
        add(SendIntent.class);
    }});
}
```

## Usage

Now that the package is installed and configured, let's look at how to use it in your Ionic application.

Import the `SendIntent` class:

```typescript
import { SendIntent } from 'capacitor-plugin-send-intent';
```

To listen for incoming data, use the `checkSendIntentReceived` method:

```typescript
SendIntent.checkSendIntentReceived().then((result: any) => {
    if (result) {
        console.log('SendIntent received');
        console.log(JSON.stringify(result));
    }
    if (result.url) {
        let resultUrl = decodeURIComponent(result.url);
        // Use Capacitor's Filesystem plugin to read the file
        Filesystem.readFile({ path: resultUrl })
            .then((content) => {
                console.log(content.data);
            })
            .catch((err) => console.error(err));
    }
}).catch(err => console.error(err));
```

The `checkSendIntentReceived` method returns a Promise that resolves with the result object containing the received data. If data is received, it will be logged to the console. If the received data includes a URL, you can use Capacitor's Filesystem plugin to read the file content.

## Android Considerations

On Android, it is recommended to close the send-intent activity after processing the received data. This can be done using the `finish` method:

```typescript
SendIntent.finish();
```

Closing the send-intent activity helps avoid app state issues and ensures the intent is not triggered again if the app reloads from idle mode.

If you want to stay in your app after receiving the send-intent, you can use deep links. Refer to the [GitHub issue](https://github.com/carsten-klaffke/send-intent/issues/69#issuecomment-1544619608) for more information.

## Conclusion

In this tutorial, we learned how to use the capacitor-plugin-send-intent package for listening and processing incoming data shared from other Android applications. We also saw how to read file content using Capacitor's Filesystem plugin. By following the installation and configuration steps, you can easily incorporate data sharing functionality into your Ionic Capacitor application.

Remember to consult the package's documentation and GitHub repository for more information and updates.