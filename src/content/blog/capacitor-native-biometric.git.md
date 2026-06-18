```markdown
---
"title": "How to Use @capgo/capacitor-native-biometric Package"
"description": "A tutorial on integrating and utilizing the @capgo/capacitor-native-biometric package in your Capacitor project."
"created_at": "June 23, 2022"
"published": true
"slug": "capacitor-native-biometric.git"
---

# How to Use @capgo/capacitor-native-biometric Package

This tutorial will guide you on how to integrate and utilize the @capgo/capacitor-native-biometric package in your Capacitor project.

## Step 1: Installation

First, you need to install the @capgo/capacitor-native-biometric package by running the following command:

```bash
npm install @capgo/capacitor-native-biometric
```

## Step 2: Importing

Next, import the necessary modules from the package in the file where you intend to use biometric functionality:

```javascript
import { BiometricPlugin } from '@capgo/capacitor-native-biometric';
```

## Step 3: Using Biometric Features

You can now utilize the various biometric features provided by the package in your application. For example, you can use fingerprints or face recognition for authentication and authorization.

```javascript
// Example code snippet for biometric authentication
BiometricPlugin.authenticate().then(() => {
  // Authentication successful
}).catch((error) => {
  // Handle authentication failure
  console.error('Biometric authentication error:', error);
});
```

## Conclusion

In this tutorial, you learned how to integrate and use the @capgo/capacitor-native-biometric package in your Capacitor project. Experiment with the provided biometric features and enhance the security of your application.
```
```