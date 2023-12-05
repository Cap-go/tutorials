---
title: "Using cap-remote-plugin Package"
description: "A tutorial on how to use the cap-remote-plugin package in your Capacitor apps."
created_at: "2021-10-21"
published: true
slug: cap-remote-plugin
---

# Using cap-remote-plugin Package

In this tutorial, we will learn how to use the cap-remote-plugin package in your Capacitor apps. The cap-remote-plugin allows you to load and use Capacitor plugins dynamically at runtime, without having to rebuild your app.

## Prerequisites

Before we get started, make sure you have the following installed:

- Capacitor CLI: `npm install -g @capacitor/cli`
- cap-remote-plugin: `npm install cap-remote-plugin`

## Setup

To use the cap-remote-plugin in your Capacitor app, you need to do the following steps:

### 1. Install the cap-remote-plugin package

Run the following command in your app's root directory to install the cap-remote-plugin package:

```bash
npm install cap-remote-plugin
```

### 2. Add the plugin to your app's main file

In your app's main file, import the cap-remote-plugin:

```javascript
import { addPlugins, registerWebPlugin } from "@capacitor/core";
import { CapacitorRemotePlugin } from "cap-remote-plugin";

// Register the cap-remote-plugin as a web plugin
registerWebPlugin(CapacitorRemotePlugin);

// Add any other plugins you want to use
addPlugins([CapacitorRemotePlugin]);
```

### 3. Load plugins dynamically

To load plugins dynamically using cap-remote-plugin, use the following code:

```javascript
import { Plugins } from "@capacitor/core";

// Get a reference to the cap-remote-plugin
const capRemotePlugin = Plugins.CapacitorRemotePlugin;

// Load a specific plugin dynamically
const pluginName = "my-plugin";
capRemotePlugin.loadPlugin({ source: "npm", name: pluginName }).then(() => {
  // Plugin is loaded and ready to use
});
```

That's it! You have successfully set up and used the cap-remote-plugin package in your Capacitor app.

## Conclusion

In this tutorial, we learned how to use the cap-remote-plugin package to dynamically load and use Capacitor plugins at runtime. This allows you to add or remove plugins from your app without having to rebuild it. Enjoy the flexibility and power of cap-remote-plugin in your Capacitor projects!

I hope you found this tutorial helpful. If you have any questions or feedback, please let me know. Happy coding!