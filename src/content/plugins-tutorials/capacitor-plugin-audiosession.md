---
title: "Using @studiokloek/capacitor-plugin-audiosession"
description: "A tutorial on how to use the @studiokloek/capacitor-plugin-audiosession package in Capacitor"
created_at: "2022-12-05"
published: true
slug: "capacitor-plugin-audiosession"
---

# Using @studiokloek/capacitor-plugin-audiosession

In this tutorial, we will learn how to use the @studiokloek/capacitor-plugin-audiosession package in Capacitor to manage audio sessions in your mobile app. The audio session allows you to control and configure how your app interacts with audio on the device.

## Installation

To get started, follow these steps to install the @studiokloek/capacitor-plugin-audiosession package in your Capacitor project:

1. Open your project's root folder in the terminal.
2. Run the following command to install the package:

```shell
npm install @studiokloek/capacitor-plugin-audiosession
```

## Configuring the Plugin

After installing the package, you need to configure the plugin in your Capacitor project. Follow these steps to set it up:

1. Open the `capacitor.config.json` file in your project's root folder.
2. Add the following entry under the `plugins` section:

```json
{
  "name": "@studiokloek/capacitor-plugin-audiosession"
}
```

3. Save the file.

## Using the Plugin

Once the plugin is installed and configured, you can start using it in your app. Here are some examples of how to use the @studiokloek/capacitor-plugin-audiosession package:

### Starting an Audio Session

To start an audio session, use the `start` method of the plugin. This will initialize the audio session and make it active:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorPluginAudiosession } = Plugins;

async function startAudioSession() {
  try {
    await CapacitorPluginAudiosession.start();
    console.log('Audio session started');
  } catch (error) {
    console.error('Failed to start audio session', error);
  }
}

startAudioSession();
```

### Setting Audio Categories

You can set the audio category of the session using the `setCategory` method. This allows you to specify the desired behavior for your app's audio:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorPluginAudiosession } = Plugins;

async function setAudioCategory() {
  try {
    await CapacitorPluginAudiosession.setCategory('ambient');
    console.log('Audio category set to "ambient"');
  } catch (error) {
    console.error('Failed to set audio category', error);
  }
}

setAudioCategory();
```

### Controlling Audio Output

The plugin also provides methods to control the audio output of the session. For example, you can route audio to the device's speaker using the `setOutputToSpeaker` method:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorPluginAudiosession } = Plugins;

async function setAudioOutputToSpeaker() {
  try {
    await CapacitorPluginAudiosession.setOutputToSpeaker();
    console.log('Audio output set to speaker');
  } catch (error) {
    console.error('Failed to set audio output to speaker', error);
  }
}

setAudioOutputToSpeaker();
```

These are just some examples of how you can use the @studiokloek/capacitor-plugin-audiosession package in your Capacitor app. Refer to the package documentation for more details and additional methods.

## Conclusion

In this tutorial, we learned how to install and use the @studiokloek/capacitor-plugin-audiosession package in a Capacitor project. We covered how to configure the plugin, start an audio session, set audio categories, and control the audio output. You can now integrate advanced audio features into your mobile app using the capabilities provided by this plugin. Happy coding!