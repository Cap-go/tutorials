---
title: "Using capacitor-plugin-print-angular"
description: "A tutorial on how to use the capacitor-plugin-print-angular package for printing in Angular applications."
created_at: "2021-09-20"
published: true
slug: "printingangular"
---

# Using capacitor-plugin-print-angular

In this tutorial, we will learn how to use the capacitor-plugin-print-angular package to enable printing functionality in Angular applications.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and npm
- Angular CLI
- Capacitor CLI

## Installation

To install the capacitor-plugin-print-angular package, run the following command in your Angular project directory:

```bash
npm install capacitor-plugin-print-angular
```

## Setting Up Capacitor

Before we can use the plugin in our Angular project, we need to set up Capacitor. If you haven't installed Capacitor yet, run the following command:

```bash
npm install -g @capacitor/core @capacitor/cli
```

Next, initialize Capacitor in your project:

```bash
npx cap init
```

## Adding the Plugin to Your Project

To add the capacitor-plugin-print-angular plugin to your project, run the following command:

```bash
npx cap add print
```

This command will add the necessary platform-specific code for Android and iOS.

## Android Setup

To enable printing functionality on Android, follow these steps:

1. Open the `MainActivity` file located at `android/app/src/main/java/{your-package-name}/MainActivity.java`.
2. Import the necessary packages:

```java
import androidx.annotation.NonNull;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.lequyettien.capacitor.plugin.print.PrintPlugin;
```

3. Add the `PrintPlugin` class to the list of `plugins`:

```java
public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Initializes the Bridge
        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {
            {
                // Add this line
                add(PrintPlugin.class);
            }
        });
    }
}
```

## iOS Setup

To enable printing functionality on iOS, follow these steps:

1. Open the `AppDelegate` file located at `ios/App/AppDelegate.swift`.
2. Import the necessary packages:

```swift
import Capacitor
import PrintPlugin
```

3. Add the `PrintPlugin` class to the list of `plugins` in the `load` method:

```swift
func load() {
    ...

    let appDelegate = AppPlugin()

    // Add this line
    appDelegate.pluginRegistrars += [PrintPlugin.self]

    ...
}
```

## Printing a Document

Now that the plugin is set up in your project, you can start printing documents. Here's an example of how to print a document using the capacitor-plugin-print-angular package:

```typescript
import { PrintPlugin } from 'capacitor-plugin-print-angular';

...

async printDocument() {
  try {
    const result = await PrintPlugin.print({
      content: '<h1>Hello, World!</h1>',
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

In the example above, we use the `print` method from the `PrintPlugin` class to print the provided HTML content.

## Conclusion

In this tutorial, we learned how to install and use the capacitor-plugin-print-angular package to enable printing functionality in Angular applications. You can now easily print documents from your Angular project using this plugin.

Remember to consult the official documentation of the capacitor-plugin-print-angular package for more advanced usage and customization options.

Happy printing!