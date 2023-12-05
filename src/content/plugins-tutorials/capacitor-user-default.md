---
title: "Using @nadlowebagentur/capacitor-user-default package"
description: "This tutorial will guide you through the process of using the @nadlowebagentur/capacitor-user-default package in your Capacitor app."
created_at: "2022-01-01"
published: true
slug: "capacitor-user-default"
---

# Using @nadlowebagentur/capacitor-user-default package

The `@nadlowebagentur/capacitor-user-default` package provides a simple and efficient way to manage user settings and preferences in your Capacitor app. In this tutorial, we will cover the installation process and demonstrate how to use the package to store and retrieve user settings.

## Installation

To install the `@nadlowebagentur/capacitor-user-default` package, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your Capacitor app's root directory.
3. Run the following command:

```bash
npm install @nadlowebagentur/capacitor-user-default
```

This will add the package as a dependency in your project.

## Basic Usage

Once you have installed the package, you can start using it in your app. Here's a basic example of how to store and retrieve user settings:

```typescript
import { Plugins } from '@capacitor/core';

const { UserDefault } = Plugins;

// Storing user settings
async function storeUserSettings() {
  try {
    await UserDefault.set({ key: 'theme', value: 'dark' });
    console.log('User settings stored successfully.');
  } catch (error) {
    console.error('Failed to store user settings.', error);
  }
}

// Retrieving user settings
async function getUserSettings() {
  try {
    const result = await UserDefault.get({ key: 'theme' });
    console.log('User settings:', result.value);
  } catch (error) {
    console.error('Failed to retrieve user settings.', error);
  }
}
```

In the above example, we use the `set` method to store the user's preferred theme as 'dark'. We then use the `get` method to retrieve the stored value.

You can use the `@nadlowebagentur/capacitor-user-default` package to store and retrieve various user settings, such as language preferences, app preferences, or any other customizable options.

## Conclusion

In this tutorial, we have learned how to install and use the `@nadlowebagentur/capacitor-user-default` package in a Capacitor app. We covered the basic usage of storing and retrieving user settings. You can now utilize this package to enhance the user experience by providing customizable options and preferences in your app.

Remember to refer to the official documentation of `@nadlowebagentur/capacitor-user-default` for more advanced usage and additional features.

Give it a try in your next Capacitor project!
