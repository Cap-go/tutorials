---
title: "Using capacitor-widgetsbridge-plugin Package"
description: "A tutorial on how to use the capacitor-widgetsbridge-plugin package to enhance your Capacitor application."
created_at: "2021-10-15"
published: true
slug: "capacitor-widgetsbridge-plugin"
---

# Using capacitor-widgetsbridge-plugin Package

In this tutorial, we will explore how to use the `capacitor-widgetsbridge-plugin` package to enhance your Capacitor application.

## Prerequisites

Before we get started, make sure you have the following prerequisites installed:

- Node.js and npm
- Capacitor

## Step 1: Install the Package

To begin, install the `capacitor-widgetsbridge-plugin` package in your Capacitor project:

```shell
npm install capacitor-widgetsbridge-plugin
```

## Step 2: Generate a Capacitor Plugin

Next, create a new Capacitor plugin using the Capacitor CLI:

```shell
npx cap plugin:generate
```

Follow the prompts to provide the necessary details for your plugin, such as the plugin name, ID, class name, description, and git repository.

## Step 3: Implement the Plugin Functionality

After generating the plugin, navigate to its source code and implement the desired functionality using the `capacitor-widgetsbridge-plugin` package.

You can refer to the official Capacitor guides for web, iOS, and Android to understand how to integrate the plugin into each platform:

- [Capacitor Web/PWA Plugin Guide](https://capacitorjs.com/docs/plugins/web)
- [Capacitor iOS Plugin Guide](https://capacitorjs.com/docs/plugins/ios)
- [Capacitor Android Plugin Guide](https://capacitorjs.com/docs/plugins/android)

## Step 4: Local Testing

To test the plugin locally during development, you can link the plugin folder to your app project using the `npm link` command.

1. Within the plugin folder, run the following command to create a symbolic link:

```shell
npm link
```

2. Navigate to your app project and link the plugin:

```shell
npm link capacitor-widgetsbridge-plugin
```

3. Finally, install the plugin in your app project:

```shell
npm install capacitor-widgetsbridge-plugin
```

## Step 5: Usage in Capacitor App

Once you have implemented and tested the plugin, you can use it in your Capacitor app.

Import the plugin in your app's code and call its functions based on your requirements.

```javascript
import { Plugins } from '@capacitor/core';

const { WidgetsBridgePlugin } = Plugins;

// Example usage of the plugin
const data = await WidgetsBridgePlugin.fetchData('example');
console.log(data);
```

That's it! You have successfully integrated and used the `capacitor-widgetsbridge-plugin` package in your Capacitor application.

## Conclusion

In this tutorial, you learned how to use the `capacitor-widgetsbridge-plugin` package to enhance your Capacitor application. You explored the installation process, generating a Capacitor plugin, implementing the plugin functionality, local testing, and usage in a Capacitor app.

Now you can leverage the capabilities of the `capacitor-widgetsbridge-plugin` package to enhance your app with additional features and functionality. Happy coding!