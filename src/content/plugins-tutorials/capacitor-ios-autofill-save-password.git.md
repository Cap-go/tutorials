---
"title": "Using capacitor-ios-autofill-save-password Package"
"description": "Guide on integrating and using the capacitor-ios-autofill-save-password package in your Capacitor project."
"created_at": "2022-01-25"
"published": true
"slug": "capacitor-ios-autofill-save-password.git"
---

# Using capacitor-ios-autofill-save-password Package

This tutorial will guide you through the process of integrating and using the `capacitor-ios-autofill-save-password` package in your Capacitor project. 

## Installation

```bash
npm i capacitor-ios-autofill-save-password
npx cap sync
```

## Prerequisite

Before using the package, ensure you have set up your app’s associated domains. For instructions on setting up associated domains, refer to [Supporting Associated Domains](https://developer.apple.com/documentation/safariservices/supporting_associated_domains) in the Apple Developer documentation.

## How to Use

To use the `SavePassword` module provided by the package, follow these steps:

1. Import necessary modules in your project:

   ```typescript
   import { Capacitor } from '@capacitor/core';
   import { SavePassword } from 'capacitor-ios-autofill-save-password';
   ```

2. Implement a login function in your code:

   ```typescript
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

By following these steps, you can seamlessly integrate the `capacitor-ios-autofill-save-password` package into your project and leverage autofill features for password saving on iOS.