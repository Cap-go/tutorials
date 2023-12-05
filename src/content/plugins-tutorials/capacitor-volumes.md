## Blog Tutorial: Using @ottimis/capacitor-volumes Package

---

---
title: "Using @ottimis/capacitor-volumes Package"
description: "A tutorial on how to use the @ottimis/capacitor-volumes package to manage volumes in a Capacitor app"
created_at: "2022-02-22"
published: true
slug: capacitor-volumes
---

In this tutorial, we will explore how to use the `@ottimis/capacitor-volumes` package to manage volumes in a Capacitor app. The `@ottimis/capacitor-volumes` package provides a set of Capacitor plugins that allow you to control the volume levels of various audio streams on both iOS and Android platforms.

### Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and npm
- Capacitor CLI

### Step 1: Create a Capacitor App

First, let's create a new Capacitor app. Open your terminal and run the following commands:

```bash
npx @capacitor/create-app
cd my-capacitor-app
```

### Step 2: Install the @ottimis/capacitor-volumes Package

Next, we need to install the `@ottimis/capacitor-volumes` package. Run the following command in your terminal:

```bash
npm install @ottimis/capacitor-volumes
```

### Step 3: Configure the Capacitor Plugin

To use the `@ottimis/capacitor-volumes` package in your app, you need to configure it in the `capacitor.config.json` file. Open the file and add the following lines:

```json
"plugins": {
  "VolumePlugin": {
    "packageName": "@ottimis/capacitor-volumes",
    "swiftPath": "ios/App/App/Plugins/VolumePlugin.swift",
    "nativePackageName": "com.ottimis.capacitorvolumes"
  }
}
```

### Step 4: Import and Initialize the Capacitor Plugin

In your app's entry file (e.g., `index.js` or `main.ts`), import and initialize the `@ottimis/capacitor-volumes` plugin. This will allow you to use its methods throughout your app.

```javascript
import { Plugins } from '@capacitor/core';

const { VolumePlugin } = Plugins;

// Initialize the plugin
VolumePlugin.initialize();
```

### Step 5: Using the Capacitor Plugin

You are now ready to start using the `@ottimis/capacitor-volumes` plugin in your app. The plugin provides several methods to control the volume levels of different audio streams. Here are some examples:

#### Get the Current Volume Level

```javascript
const currentVolume = await VolumePlugin.getCurrentVolume();
console.log('Current volume level:', currentVolume);
```

#### Set the Volume Level

```javascript
// Set the volume level to 50%
await VolumePlugin.setVolume(0.5);
```

#### Increase or Decrease the Volume

```javascript
// Increase the volume by 10%
await VolumePlugin.increaseVolume(0.1);

// Decrease the volume by 20%
await VolumePlugin.decreaseVolume(0.2);
```

### Conclusion

In this tutorial, we have explored how to use the `@ottimis/capacitor-volumes` package to manage volumes in a Capacitor app. We learned how to install the package, configure the Capacitor plugin, import and initialize the plugin, and use its methods to control the volume levels.

Feel free to experiment with the `@ottimis/capacitor-volumes` package in your own Capacitor app. Refer to the package's documentation for more detailed usage instructions and additional features.

Happy coding!