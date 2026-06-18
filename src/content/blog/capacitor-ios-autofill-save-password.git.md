---
"title": "Using capacitor-ios-autofill-save-password Package",
"description": "This tutorial will guide you on how to integrate and use the capacitor-ios-autofill-save-password package in your Capacitor project. The package allows you to prompt users to save their login information for autofill on iOS devices.",
"created_at": "2022-01-15",
"published": true,
"slug": "capacitor-ios-autofill-save-password.git"
---

## Installation
To begin using the capacitor-ios-autofill-save-password package, first install it by running the following commands in your project directory:

```bash
npm i capacitor-ios-autofill-save-password
npx cap sync
```

## Prerequisite
Before using the package, ensure that you have set up your app’s associated domains. Follow the instructions in [Supporting Associated Domains](https://developer.apple.com/documentation/safariservices/supporting_associated_domains) in the Apple Developer document.

## How to Use
After setting up the package and your associated domains, you can integrate it into your app to prompt users to save their login information for autofill on iOS devices. 

Here is a basic example of how you can use the SavePassword plugin in your project:

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

By following these steps and integrating the capacitor-ios-autofill-save-password package, you can enhance the user experience on your iOS app by enabling autofill options for login credentials.