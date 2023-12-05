---
title: "Using @jeepq/capacitor Package"
description: "This tutorial will guide you on how to use the @jeepq/capacitor package in your Capacitor app."
created_at: "2022-10-03"
published: true
slug: "jeep"
---

# Using @jeepq/capacitor Package

The `@jeepq/capacitor` package is a useful tool for enhancing your Capacitor app with additional features and functionality. In this tutorial, we will walk through the steps to integrate and utilize this package in your project.

## Step 1: Install the Package

To begin, let's start by installing the `@jeepq/capacitor` package in your Capacitor project. Open your terminal and navigate to the root directory of your project. Run the following command:

```bash
npm install @jeepq/capacitor
```

This will download and install the package along with its dependencies.

## Step 2: Import the Package

Once the installation is complete, you need to import the package in your project. Open the file where you want to use the `@jeepq/capacitor` package and add the following import statement:

```javascript
import { JeepQPlugin } from '@jeepq/capacitor';
```

This will allow you to use the functionalities provided by the package in your code.

## Step 3: Configure the Plugin

Next, you need to configure the plugin in your Capacitor project. Open the `capacitor.config.json` file in the root directory of your project and add the following code:

```json
{
  "plugins": {
    "JeepQPlugin": {
      "someConfigOption": "value"
    }
  }
}
```

Replace `someConfigOption` with the actual configuration option you want to set for the plugin.

## Step 4: Use the Package

Now that the package is installed, imported, and configured, you can start using its functionalities in your code. Refer to the package's documentation or API reference to learn about the available methods and options.

Here's an example of how you can use a method from the `@jeepq/capacitor` package:

```javascript
import { JeepQPlugin } from '@jeepq/capacitor';

...

const result = await JeepQPlugin.someMethod();
console.log(result);
```

Replace `someMethod` with the actual method you want to use from the package.

## Conclusion

Congratulations! You have successfully integrated and utilized the `@jeepq/capacitor` package in your Capacitor app. You can now leverage its powerful features and functionalities to enhance your app's capabilities.

Remember to refer to the package's documentation for more details and explore the various options available. Happy coding!