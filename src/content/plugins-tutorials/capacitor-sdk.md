---
title: "Using capacitor-gleap-plugin"
description: "A tutorial on how to use the capacitor-gleap-plugin package"
created_at: "2022-10-25"
published: true
slug: "capacitor-sdk"
---

# Using capacitor-gleap-plugin

This tutorial will guide you through the process of using the capacitor-gleap-plugin package in your Capacitor project.

## Installation

To get started, you need to install the capacitor-gleap-plugin package. Open your terminal and run the following command:

```bash
npm install capacitor-gleap-plugin
```

## Adding the Plugin to your Project

Next, you need to add the plugin to your Capacitor project. Run the following command in your terminal:

```bash
npx cap plugin add capacitor-gleap-plugin
```

This will add the capacitor-gleap-plugin to your project.

## Configuring the Plugin

Before you can use the capacitor-gleap-plugin, you need to configure it. Open the `Capacitor.config.json` file in your project and add the following configuration:

```json
{
  "plugins": {
    "CapacitorGleapPlugin": {
      "apiKey": "YOUR_API_KEY"
    }
  }
}
```

Replace `YOUR_API_KEY` with your actual Gleap API key.

## Using the Plugin

Now that everything is set up, you can start using the capacitor-gleap-plugin in your code. Import the plugin at the top of your file:

```javascript
import { CapacitorGleapPlugin } from 'capacitor-gleap-plugin';
```

You can then call the various functions provided by the plugin. For example, to start a Gleap session, use the following code:

```javascript
CapacitorGleapPlugin.startSession();
```

Make sure to consult the plugin documentation for a full list of available functions and their usage.

## Conclusion

In this tutorial, you learned how to install, configure, and use the capacitor-gleap-plugin package in your Capacitor project. You can now take advantage of Gleap's analytics and user feedback features in your app. Happy coding!

Remember to check the [capacitor-gleap-plugin documentation](https://github.com/example/capacitor-gleap-plugin) for more information and detailed usage instructions.