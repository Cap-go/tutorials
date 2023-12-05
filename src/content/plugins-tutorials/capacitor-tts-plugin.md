---
title: "Getting Started with Capacitor TTS Plugin"
description: "Learn how to use the Capacitor TTS plugin to add text-to-speech functionality to your Ionic applications."
created_at: "2022-10-20"
published: true
slug: "capacitor-tts-plugin"
---

# Getting Started with Capacitor TTS Plugin

The Capacitor TTS plugin allows you to add text-to-speech functionality to your Ionic applications. This tutorial will guide you through the installation process and show you how to use the plugin to convert text into spoken words.

## Installation

To get started, open your terminal and navigate to your Ionic project directory. Then, use the following command to install the Capacitor TTS plugin:

```bash
npm install capacitor-tts-plugin
```

## Usage

Once the plugin is installed, you can import it into your Ionic application and use its functions. Here's an example of how to use the `speak` function to convert text into speech:

```typescript
import { Options, CapacitorTts } from 'capacitor-tts-plugin';

// Create options for speech synthesis
const options: Options = {
    text: 'Hello world',
    locale: 'en-GB',
    rate: 0.5,
    cancel: true
}

// Call the speak function
CapacitorTts.speak(options).then(() => {
    console.log('Speaking finished!');
}).catch((error) => {
    console.log(error);
});
```

In the code above, we import the necessary classes and define the options for speech synthesis. We then call the `speak` function and handle the promise to perform actions after the speech is finished or if there is an error.

To stop the speech synthesis, you can use the `stopSpeaking` function:

```typescript
CapacitorTts.stopSpeaking().then(() => {
    console.log('Speaking stopped!');
}).catch((error) => {
    console.log(error);
});
```

## Additional Android Setup

If you are using Android, there is an additional step required. After installing the plugin, you need to import and add it to your `MainActivity.java` file.

```java
import com.tvgb.cpt.CapacitorTtsPlugin;

public class MainActivity extends BridgeActivity {
   	
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        registerPlugin(CapacitorTtsPlugin.class);
    }
}
```

## Conclusion

In this tutorial, you learned how to install and use the Capacitor TTS plugin in your Ionic applications. You can now add text-to-speech functionality to your app and customize options such as locale, speech rate, and cancellation.

Feel free to explore the [official documentation](https://github.com/tvgb/capacitor-tts-plugin) for more advanced usage and customization options.