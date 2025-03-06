---
"title": "Using capacitor-ios-autofill-save-password Package Tutorial",
"description": "This tutorial will guide you through the installation, prerequisites, and usage of the capacitor-ios-autofill-save-password package in your Capacitor project.",
"created_at": "2023-04-11",
"published": true,
"slug": "capacitor-ios-autofill-save-password.git"
---

### Installation
```bash
npm i capacitor-ios-autofill-save-password
npx cap sync
```

### Prerequisite
Before using this package, you must set up your app’s associated domains. To learn how to set up associated domains for your app, refer to [Supporting Associated Domains](https://developer.apple.com/documentation/safariservices/supporting_associated_domains) in the Apple Developer documentation.

### How to Use
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

This tutorial provides a step-by-step guide to installing and using the capacitor-ios-autofill-save-password package in your Capacitor project for iOS applications.