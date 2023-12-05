---
title: "Using @brahmaesolutions/native Package"
description: "A tutorial on how to use the @brahmaesolutions/native package in Capacitor"
created_at: "2021-10-25"
published: true
slug: capacitor-native-plugins
---

# Using @brahmaesolutions/native Package

The `@brahmaesolutions/native` package is an Android native plugin for Ionic using Capacitor. It provides additional functionality and access to native device features. In this tutorial, we will walk through the installation and usage of this package in your Capacitor project.

## Installation

To begin using the `@brahmaesolutions/native` package, follow the steps below:

1. Install the package using npm or yarn:
   ```bash
   npm install @brahmaesolutions/native
   # or
   yarn add @brahmaesolutions/native
   ```

2. After installing the package, sync the project with Capacitor:
   ```bash
   npx cap sync
   ```

3. Next, open the main activity file of your Capacitor project (`MainActivity.java`) located in the `android/app/src/main/java/com/your-project-id` directory.

4. Import the `CustomPlugin` class from the `com.brahma.plugins.custom` package:
   ```diff
   package io.ionic.starter;
   + import com.brahma.plugins.custom.CustomPlugin;
   
   import android.os.Bundle;
   
   import com.getcapacitor.BridgeActivity;
   import com.getcapacitor.Plugin;
   
   import java.util.ArrayList;
   
   public class MainActivity extends BridgeActivity {
       @Override
       public void onCreate(Bundle savedInstanceState) {
           super.onCreate(savedInstanceState);
       
           // Initializes the Bridge
           this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
               // Additional plugins you have installed go here
   +           add(CustomPlugin.class);
           }});
       }
   
   }
   ```

The `@brahmaesolutions/native` package is now installed and configured in your Capacitor project.

## Usage

Once the package is installed, you can access its API in your project. The package provides two methods: `echo` and `getContacts`.

### echo

The `echo` method allows you to send a string value to the native plugin and receive a response.

```typescript
import { CustomPlugin } from '@brahmaesolutions/native';

CustomPlugin.echo({ value: 'Hello World' }).then((response: any) => {
    console.log(response);
});
```

### getContacts

The `getContacts` method retrieves the device contacts based on the provided filter.

```typescript
import { CustomPlugin } from '@brahmaesolutions/native';

CustomPlugin.getContacts('').then((contacts: any) => {
    console.log(contacts);
});
```

In the example above, we are retrieving all contacts from the device. You can optionally provide a filter string to narrow down the search.

That's it! You have successfully installed and utilized the `@brahmaesolutions/native` package in your Capacitor project.

Feel free to explore and utilize the various features and methods provided by the package to enhance your Ionic application with native capabilities!

I hope this tutorial was helpful. If you have any questions or encounter any issues, please let me know.

Happy coding!