```
---
"title": "How to Use @recognizebv/capacitor-plugin-msauth Package",
"description": "This tutorial will guide you on how to use the @recognizebv/capacitor-plugin-msauth package for implementing MSAL in your Capacitor project.",
"created_at": "2022-01-30",
"published": true,
"slug": "capacitor-plugin-msauth.git"
---

# How to Use @recognizebv/capacitor-plugin-msauth Package

This tutorial will walk you through the steps to install and utilize the @recognizebv/capacitor-plugin-msauth package in your Capacitor project to enable Microsoft Authentication Library (MSAL) functionalities efficiently.

## Installation

To get started with the @recognizebv/capacitor-plugin-msauth package, follow these installation steps:

1. Begin by adding the package to your project using Yarn:
   
```
yarn add @recognizebv/capacitor-plugin-msauth
```

2. Synchronize the package with your Capacitor project:

```
npx cap sync
```

3. Create an app registration in Microsoft Azure to set up your authentication configuration for iOS/macOS and Android platforms.

4. Include the required configurations specified in the plugin documentation for iOS and Android, such as defining bundle identifiers, package names, key hashes, URL schemes, and keychain groups.

5. Register the plugin in the main activity or AppDelegate of your project.

## Usage

The @recognizebv/capacitor-plugin-msauth package provides two main methods, `login` and `logout`, that you can utilize in your project:

### Login

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

### Logout

// How the logout method can be implemented in your project

By following these steps, you can seamlessly integrate Microsoft Authentication Library (MSAL) into your Capacitor project with the help of the @recognizebv/capacitor-plugin-msauth package.
```