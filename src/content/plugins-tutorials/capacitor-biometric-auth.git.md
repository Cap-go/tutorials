---
"title": "Using @aparajita/capacitor-biometric-auth Package"
"description": "Learn how to integrate biometric authentication using the @aparajita/capacitor-biometric-auth package in your Capacitor app."
"created_at": "July 30, 2022"
"published": true
"slug": "capacitor-biometric-auth.git"
---

# Using @aparajita/capacitor-biometric-auth Package

To integrate biometric authentication using the @aparajita/capacitor-biometric-auth package in your Capacitor app, follow these steps:

1. Install the package:
   ```bash
   npm install @aparajita/capacitor-biometric-auth
   ```

2. Import the plugin in your project:

   ```typescript
   import 'capacitor-biometric-auth';
   ```

3. Request biometric authentication:

   ```typescript
   import { Plugins } from '@capacitor/core';

   const { BiometricAuth } = Plugins;

   const authenticate = async () => {
     const { authenticated } = await BiometricAuth.authenticate();
     if (authenticated) {
       console.log('Authentication successful');
     } else {
       console.log('Authentication failed');
     }
   };

   authenticate();
   ```

4. Handle the biometric authentication result as needed in your app.

This is a basic guide on how to use the @aparajita/capacitor-biometric-auth package in your Capacitor app for biometric authentication.
```
```