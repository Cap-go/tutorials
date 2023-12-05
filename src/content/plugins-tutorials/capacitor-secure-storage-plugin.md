---
title: "Using Capacitor Secure Storage Plugin"
description: "Learn how to use the Capacitor Secure Storage plugin to store sensitive data in your Capacitor apps."
created_at: "2022-03-01"
published: true
slug: "capacitor-secure-storage-plugin"
---

# Using Capacitor Secure Storage Plugin

In this tutorial, we will learn how to use the Capacitor Secure Storage plugin to securely store sensitive data in Capacitor apps.

## Step 1: Installation

To get started, make sure you have Capacitor installed globally in your development environment. You can install Capacitor using the following command:

```shell
npm install -g @capacitor/cli
```

Next, navigate to your Capacitor app project and install the Capacitor Secure Storage plugin:

```shell
npm install capacitor-secure-storage-plugin
```

## Step 2: Adding the Plugin to your App

After installing the plugin, you need to add it to your Capacitor app. Run the following command in your project root directory:

```shell
npx cap sync
```

This command will automatically update the native platform files (iOS and Android) to include the necessary configuration for the Capacitor Secure Storage plugin.

## Step 3: Importing and Initializing the Plugin

To use the Capacitor Secure Storage plugin in your app, you need to import and initialize it in your code. Open the file where you want to use the plugin (e.g., a service or a component) and add the following import statement:

```typescript
import 'capacitor-secure-storage-plugin';
```

Next, initialize the plugin by calling the `Capacitor.Plugins.SecureStoragePlugin.init()` method. This method initializes the plugin and prepares it for use. You can add this initialization code in the `ngOnInit()` lifecycle hook of your component or in an appropriate place in your app:

```typescript
import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const { SecureStoragePlugin } = Plugins;
    SecureStoragePlugin.init();
  }

}
```

## Step 4: Storing and Retrieving Data

Now that the Capacitor Secure Storage plugin is initialized, you can start storing and retrieving data securely. The plugin provides methods for storing and retrieving values using a key-value pair approach.

To store a value, use the `SecureStoragePlugin.set()` method. This method takes two parameters: a key and a value. The key is a string that identifies the value, and the value can be any serializable data:

```typescript
import { Plugins } from '@capacitor/core';

const { SecureStoragePlugin } = Plugins;

SecureStoragePlugin.set({ key: 'myKey', value: 'myValue' })
  .then(() => {
    // Value stored successfully
  })
  .catch(error => {
    // Error occurred while storing the value
  });
```

To retrieve a value, use the `SecureStoragePlugin.get()` method. This method takes a key as a parameter and returns a promise that resolves to the corresponding value:

```typescript
SecureStoragePlugin.get({ key: 'myKey' })
  .then(result => {
    const value = result.value;
    // Use the retrieved value
  })
  .catch(error => {
    // Error occurred while retrieving the value
  });
```

## Step 5: Clearing Data

If you need to clear a stored value, you can use the `SecureStoragePlugin.remove()` method. This method takes a key as a parameter and removes the corresponding value from the secure storage:

```typescript
SecureStoragePlugin.remove({ key: 'myKey' })
  .then(() => {
    // Value removed successfully
  })
  .catch(error => {
    // Error occurred while removing the value
  });
```

## Conclusion

In this tutorial, we learned how to use the Capacitor Secure Storage plugin to store and retrieve sensitive data securely in Capacitor apps. We covered the installation process, plugin initialization, storing and retrieving data using key-value pairs, and clearing stored data.

By using the Capacitor Secure Storage plugin, you can ensure that sensitive data in your app is stored securely and protected from unauthorized access.

Remember to consult the plugin's documentation for additional features and capabilities.

Happy coding!