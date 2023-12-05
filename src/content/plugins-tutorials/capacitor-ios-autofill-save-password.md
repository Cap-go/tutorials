---
title: "Using capacitor-ios-autofill-save-password Package"
description: "This tutorial will guide you through the process of using the capacitor-ios-autofill-save-password package to enable autofill and save password functionality in your iOS app."
created_at: "2022-10-20"
published: true
slug: capacitor-ios-autofill-save-password
---

# Using capacitor-ios-autofill-save-password Package

In this tutorial, we will explore how to use the `capacitor-ios-autofill-save-password` package to enable autofill and save password functionality in your iOS app. This package provides a convenient way to integrate with the iOS autofill system and enable users to securely save passwords for your app.

## Prerequisite

Before we dive into the usage of the package, there is one prerequisite you need to fulfill:

- Set up your app’s associated domains. This allows your app to communicate with the iOS autofill system. To learn how to set up your app’s associated domains, refer to the [Supporting Associated Domains](https://developer.apple.com/documentation/safariservices/supporting_associated_domains) guide in the Apple Developer documentation.

## Installation

To get started, you need to install the `capacitor-ios-autofill-save-password` package and sync the capacitor project. Run the following commands in your project's root directory:

```bash
npm i capacitor-ios-autofill-save-password
npx cap sync
```

## Usage

Once the package is installed and your capacitor project is synced, you can start using the `SavePassword` class from the `capacitor-ios-autofill-save-password` package in your code.

Here is an example of how you can use the package to prompt the user to save their login credentials:

```typescript
import { Capacitor } from '@capacitor/core';
import { SavePassword } from 'capacitor-ios-autofill-save-password';

login(username: string, password: string) {
    // Your login logic here

    // Call the plugin if login is successful on iOS
    if (Capacitor.getPlatform() === 'ios') {
        SavePassword.promptDialog({
            username: username,
            password: password,
        })
        .then(() => console.log('promptDialog success'))
        .catch((err) => console.error('promptDialog failure', err));
    }
}
```

In the code above, we check if the current platform is iOS using `Capacitor.getPlatform()`. If it is iOS, we call the `promptDialog` method from the `SavePassword` class, passing the username and password for the current login attempt. The `promptDialog` method prompts the user to save the provided credentials for autofill in future login attempts.

Remember to replace the placeholder `// Your login logic here` with your actual login logic specific to your app.

And that's it! You have successfully integrated the `capacitor-ios-autofill-save-password` package into your iOS app to enable autofill and save password functionality.

Feel free to explore the package's documentation for additional methods and options provided by the `SavePassword` class to further customize the autofill and save password experience in your app.