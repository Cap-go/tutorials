# Using capacitor-native-settings-extended package

In this tutorial, we will learn how to use the `capacitor-native-settings-extended` package in a Capacitor app. The `capacitor-native-settings-extended` package provides additional settings for your Capacitor app beyond what is available in the default Capacitor Settings API.

## Installation

To get started, let's install the `capacitor-native-settings-extended` package in your Capacitor app:

```bash
npm install capacitor-native-settings-extended
```

## Configuration

Once the package is installed, we need to configure it in our project. Open the `capacitor.config.json` file in the root of your project and add the following configuration:

```json
{
  "plugins": {
    "Settings": {
      "ios": {
        "preferKeychain": true
      },
      "android": {}
    }
  }
}
```

In this configuration, we enable the `preferKeychain` setting for iOS devices, which allows storing settings securely in the Keychain.

## Usage

Once the package is installed and configured, you can start using its features in your app. Here are a few examples:

### Get a Setting Value

To retrieve the value of a setting, use the `get` method:

```typescript
import { Plugins } from '@capacitor/core';

const { Settings } = Plugins;

async function getSettingValue() {
  const value = await Settings.get({ key: 'settingKey' });
  console.log('Setting Value:', value);
}
```

### Set a Setting Value

To set the value of a setting, use the `set` method:

```typescript
import { Plugins } from '@capacitor/core';

const { Settings } = Plugins;

async function setSettingValue() {
  await Settings.set({ key: 'settingKey', value: 'settingValue' });
  console.log('Setting Value set successfully');
}
```

### Remove a Setting

To remove a setting, use the `remove` method:

```typescript
import { Plugins } from '@capacitor/core';

const { Settings } = Plugins;

async function removeSetting() {
  await Settings.remove({ key: 'settingKey' });
  console.log('Setting removed successfully');
}
```

## Conclusion

In this tutorial, we have learned how to use the `capacitor-native-settings-extended` package to enhance the settings functionality in our Capacitor app. We covered the installation process, configuration, and basic usage examples. Now you can take advantage of the extended settings capabilities provided by this package in your own projects.

---
title: "Using the capacitor-native-settings-extended package"
description: "Learn how to enhance the settings functionality in your Capacitor app using the capacitor-native-settings-extended package."
created_at: "2021-08-15"
published: true
slug: "capacitor-native-settings-extended"
---