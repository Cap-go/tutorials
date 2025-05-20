---
title: Using Capacitor Plugin MS Auth Package
description: >-
  Markdown tutorial on how to use the @recognizebv/capacitor-plugin-msauth
  package for Microsoft authentication.
created_at: 'September 21, 2021'
published: true
slug: capacitor-plugin-msauth-git
locale: en
---

# Using Capacitor Plugin MS Auth Package

## Installation

To install the `@recognizebv/capacitor-plugin-msauth` package, follow these steps:
- Add the package by running `yarn add @recognizebv/capacitor-plugin-msauth`
- Synchronize the Capacitor project by running `npx cap sync`
- Create an app registration in Azure AD

## Configuration

Follow these steps to configure your app for iOS and Android:

### iOS Configuration

1. In the Azure AD app registration, add iOS/macOS as a platform with your bundle identifier.
2. Create a key hash for your key and configure the `Info.plist` file as shown in the setup guide.
3. Add a new keychain group named `com.microsoft.adalcache` to your Xcode project.
4. Include the necessary code changes in your iOS project's files.

### Android Configuration

1. Configure the Android Manifest file as per the setup guide, making sure to include your package name and key hash.
2. Update the `build.gradle` file in the `android/` directory with relevant repository information.
3. Register the plugin in the main activity of your Android application.

## Usage

The usage of this plugin is straightforward with only two methods available:

1. **Login**: Initiate the login process by calling the `login` method on the plugin.
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

2. **Logout**: To log out, simply call the `logout` method on the plugin.

That's it! You are now ready to use the Capacitor Plugin MS Auth Package for Microsoft authentication in your mobile app.
```
