```markdown
---
"title": "Using @capgo/capacitor-autofill-save-password Package Tutorial",
"description": "This blog post provides a step-by-step guide on how to use the @capgo/capacitor-autofill-save-password package in your Capacitor project to enable autofill and saving passwords on iOS.",
"created_at": "2023-09-08",
"published": true,
"slug": "capacitor-autofill-save-password.git"
---

# Using @capgo/capacitor-autofill-save-password Package Tutorial

To save passwords and enable autofill on iOS in your Capacitor projects, you can use the **@capgo/capacitor-autofill-save-password** package. Follow the steps below to integrate this feature into your app.

## Installation

```bash
npm i @capgo/capacitor-autofill-save-password
npx cap sync
```

## Prerequisite

Before using this package, ensure that you have set up your app's associated domains. Check out [Supporting Associated Domains](https://developer.apple.com/documentation/safariservices/supporting_associated_domains) in the Apple Developer document for guidance.

## How to Use

```typescript
import { Capacitor } from '@capacitor/core';
import { SavePassword } from '@capgo/capacitor-autofill-save-password';

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

That's it! By following these steps, you can easily enable autofill and save passwords on iOS using the **@capgo/capacitor-autofill-save-password** package.
```