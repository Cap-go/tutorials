---
title: "Using the demo-capacitor-plugin Package"
description: "A tutorial on how to use the demo-capacitor-plugin package in your Capacitor projects."
created_at: "2022-10-10"
published: true
slug: "capacitor-demo-plugin"
---

# Using the demo-capacitor-plugin Package

In this tutorial, we will learn how to use the demo-capacitor-plugin package to enhance your Capacitor projects. The demo-capacitor-plugin provides helpful features and functionalities that can be easily integrated into your mobile applications.

## Prerequisites

Before starting, make sure you have the following installed:

- Node.js and npm
- Capacitor CLI
- Capacitor project set up

## Step 1: Install the demo-capacitor-plugin Package

To begin, install the demo-capacitor-plugin package into your Capacitor project by running the following command:

```bash
npm install demo-capacitor-plugin
```

## Step 2: Import the Plugin

Next, import the demo-capacitor-plugin into your project. Open the `capacitor.config.json` file and add the following entry under the "plugins" array:

```json
{
  "name": "DemoPlugin",
  "package": "com.example.demoplugin.DemoPlugin"
}
```

## Step 3: Register the Plugin

In your main `MainActivity.java` file, add the following import statement:

```java
import com.example.demoplugin.DemoPlugin;
```

Then, add the plugin registration code inside the `init` function:

```java
public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      add(DemoPlugin.class);
    }});
  }
}
```

## Step 4: Use the Plugin

Now that the demo-capacitor-plugin is installed and registered, you can use its functionalities in your project. Here's an example of how to use the `demoMethod()` function provided by the plugin:

```typescript
import { Plugins } from '@capacitor/core';

const { DemoPlugin } = Plugins;

// Call the demoMethod function
DemoPlugin.demoMethod().then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});
```

## Conclusion

Congratulations! You have successfully learned how to use the demo-capacitor-plugin package in your Capacitor projects. You can now explore the various features and functionalities provided by the plugin and enhance your mobile applications.

Remember to refer to the official documentation of the demo-capacitor-plugin for more detailed information and additional functionalities.

Happy coding!