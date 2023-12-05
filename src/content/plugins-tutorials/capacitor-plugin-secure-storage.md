---
title: "Using @komed/capacitor-plugin-secure-storage"
description: "A tutorial on how to use the @komed/capacitor-plugin-secure-storage package for secure storage in Capacitor"
created_at: "2021-09-28"
published: true
slug: "capacitor-plugin-secure-storage"
---

# Using @komed/capacitor-plugin-secure-storage

In this tutorial, we will learn how to use the `@komed/capacitor-plugin-secure-storage` package to store string values securely in Capacitor.

## Installation

To start using the `@komed/capacitor-plugin-secure-storage` package, you first need to install it in your project. Open your terminal and run the following command:

```
npm install @komed/capacitor-plugin-secure-storage
```

## Android Setup

In order to use the plugin on Android, you need to register the plugin manually in the `MainActivity` class of your app. Open the `MainActivity.java` file in your Android project and add the following code:

```java
import com.komedhealth.plugin.CapacitorSecureStoragePlugin;

...

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      add(CapacitorSecureStoragePlugin.class);
    }});
  }
}
```

## Usage

Once the package is installed and the Android setup is done, you can start using the `@komed/capacitor-plugin-secure-storage` plugin in your components.

### Importing the Plugin

In the component where you want to use the plugin, import the necessary plugins from the `@capacitor/core` package:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorSecureStoragePlugin } = Plugins;
```

### Storing a Value

To store a value securely, use the `set` method of the `CapacitorSecureStoragePlugin` object. Here's an example:

```typescript
const key = 'name';
const value = 'charlie';

await CapacitorSecureStoragePlugin.set({ key, value });
```

### Retrieving a Value

To retrieve a stored value, use the `get` method of the `CapacitorSecureStoragePlugin` object. Here's an example:

```typescript
const key = 'name';
const data = await CapacitorSecureStoragePlugin.get({ key });

console.log(data.value);
```

### Removing a Value

To remove a stored value, use the `remove` method of the `CapacitorSecureStoragePlugin` object. Here's an example:

```typescript
const key = 'name';

await CapacitorSecureStoragePlugin.remove({ key });
```

### Clearing All Values

To clear all stored values, use the `clear` method of the `CapacitorSecureStoragePlugin` object. Here's an example:

```typescript
await CapacitorSecureStoragePlugin.clear();
```

### Getting All Keys

To get an array of all existing keys, use the `key` method of the `CapacitorSecureStoragePlugin` object. Here's an example:

```typescript
const keys = await CapacitorSecureStoragePlugin.key();

console.log(keys);
```

## Platform Specific Information

### Android

On Android, the `@komed/capacitor-plugin-secure-storage` plugin uses the [AndroidX Security Library](https://developer.android.com/reference/androidx/security/crypto/package-summary) for secure storage. To use this plugin, you need to migrate your app to AndroidX. More information about migration can be found [here](https://developer.android.com/jetpack/androidx/migrate#migrate_an_existing_project_using_android_studio). Please note that the minimum SDK version for Android is 23.

### Web

There is no secure storage available in the browser, so the `@komed/capacitor-plugin-secure-storage` plugin stores values in LocalStorage. However, these values are at least base64 encoded for added security. The plugin also adds a `'cap_sec_'` prefix to the keys to avoid conflicts with other data stored in LocalStorage.

That's it! You have now learned how to use the `@komed/capacitor-plugin-secure-storage` package for secure storage in Capacitor. Happy coding!