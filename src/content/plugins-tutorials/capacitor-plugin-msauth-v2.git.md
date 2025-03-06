---
"title": "How to Use @velocitycubed/capacitor-plugin-msauth-v2 Package",
"description": "This blog post provides a tutorial on how to use the @velocitycubed/capacitor-plugin-msauth-v2 package, which implements MSAL for Capacitor.",
"created_at": "2023-09-25",
"published": true,
"slug": "capacitor-plugin-msauth-v2.git"
---

# Using @velocitycubed/capacitor-plugin-msauth-v2 Package

This tutorial will guide you through the process of integrating and using the `@velocitycubed/capacitor-plugin-msauth-v2` package. This package provides an implementation of MSAL for Capacitor, enabling authentication functionalities in your Ionic applications.

## Installation

To get started with the `@velocitycubed/capacitor-plugin-msauth-v2` package, follow the steps below:

1. **Install the Package:**

   ```sh
   yarn add @velocitycubed/capacitor-plugin-msauth-v2
   ```

2. **Sync the Capacitor Project:**

   After adding the package, sync the Capacitor project to ensure the package is integrated correctly.

3. **Create App Registration:**

   - **iOS:**
     - Add a platform in the app registration for iOS/macOS.
     - Provide the bundle identifier.
     - Generate a key hash for your key and include it in the configuration.
     - Add a new keychain group named `com.microsoft.adalcache`.
     - Configure URL schemes in the `Info.plist` file.
   
   - **Android:**
     - Add a platform in the app registration for Android.
     - Add the necessary configuration to the `AndroidManifest.xml` file.
     - Include the required snippet in the `build.gradle` file in the `android/` folder.

4. **Register Plugin:**

   Ensure that you register the plugin in your main activity.

## Usage

The `@velocitycubed/capacitor-plugin-msauth-v2` package offers simple methods for authentication. Here's how you can use them in your application:

### 1. Login

To initiate the login process, use the following TypeScript code snippet:

```typescript
import { Plugins } from '@capacitor/core'

const { MsAuthPlugin } = Plugins

const result = await MsAuthPlugin.login({
  clientId: '<client id>',
  tenant: '<tenant, defaults to common>',
  domainHint: '<domainHint>',
  scopes: ['<scopes, defaults to no scopes>'],
  keyHash: '<Android only, the key hash as obtained above>',
})
```

This section provides the basic steps to install and use the `@velocitycubed/capacitor-plugin-msauth-v2` package in your Capacitor project. Make sure to follow each step carefully to leverage the authentication capabilities provided by MSAL for Capacitor.

Happy coding!