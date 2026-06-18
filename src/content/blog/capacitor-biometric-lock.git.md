```markdown
---
"title": "Tutorial on Using the Capacitor Biometric Lock Package"
"description": "This tutorial will guide you through the process of integrating and using the Capacitor Biometric Lock package in your Capacitor project."
"created_at": "2023-10-21"
"published": true
"slug": "capacitor-biometric-lock.git"
---

# Tutorial on Using the Capacitor Biometric Lock Package

To integrate the Capacitor Biometric Lock package into your Capacitor project, follow these steps:

1. Install the Capacitor Biometric Lock package by running:
   ```
   npm install capacitor-biometric-lock
   ```

2. Import the Biometric Lock plugin in your project:
   ```typescript
   import { BiometricLock } from 'capacitor-biometric-lock';
   ```

3. Initialize the Biometric Lock plugin:
   ```typescript
   const biometricLock = new BiometricLock();
   biometricLock.init();
   ```

4. Use the Biometric Lock methods to enable biometric authentication in your app.

That's it! You've successfully integrated the Capacitor Biometric Lock package into your project.
```
```