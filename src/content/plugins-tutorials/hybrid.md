---
title: "Using the Krikoo Capacitor Package"
description: "In this tutorial, we will learn how to use the Krikoo Capacitor package to enhance the functionality of your hybrid mobile app."
created_at: "2021-08-27"
published: true
slug: "hybrid"
---

# Using the Krikoo Capacitor Package

In this tutorial, we will guide you through the process of integrating and using the Krikoo Capacitor package in your hybrid mobile app. The Krikoo Capacitor package provides additional functionality and plugins to enhance the capabilities of your app.

## Prerequisites

Before we begin, make sure you have the following:

- Node.js and npm installed on your machine
- Basic knowledge of JavaScript and Capacitor

## Step 1: Create a New Capacitor Project

To get started, let's create a new Capacitor project. Open your terminal and run the following command:

```bash
npx @capacitor/create-app
```

Follow the prompts to create a new Capacitor project. Once the project is created, navigate to the project directory using the `cd` command.

## Step 2: Install the Krikoo Capacitor Package

Next, we need to install the Krikoo Capacitor package. In your project directory, run the following command:

```bash
npm install krikoo-capacitor
```

This will install the Krikoo Capacitor package and its dependencies.

## Step 3: Integrate the Krikoo Capacitor Package

Once the package is installed, we need to integrate it into our project. Open the `capacitor.config.json` file in the root directory of your project and add the following entry to the `plugins` array:

```json
{
  "name": "KrikooPlugin",
  "class": "com.krikoo.capacitor.KrikooPlugin"
}
```

Save the file and proceed to the next step.

## Step 4: Use the Krikoo Capacitor Package

Now that the Krikoo Capacitor package is integrated, you can start using its functionality in your app. Import the required Krikoo Capacitor modules in your JavaScript files and use them according to your app's requirements.

For example, to use the Krikoo Capacitor plugin to display a toast message, you can add the following code snippet to your JavaScript file:

```javascript
import { Plugins } from '@capacitor/core';

const { KrikooPlugin } = Plugins;

// Display a toast message
KrikooPlugin.showToast({ message: 'Hello, world!' });
```

Save your changes and run your app to test the functionality.

## Conclusion

In this tutorial, we have learned how to integrate and use the Krikoo Capacitor package in a hybrid mobile app. The Krikoo Capacitor package provides additional functionality and plugins to enhance the capabilities of your app. Now you can explore the package further and leverage its features to improve your app's user experience.

Remember to refer to the official documentation of the Krikoo Capacitor package for more detailed information on its functionality and usage.

Happy coding!

