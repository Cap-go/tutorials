---
title: "Using Capacitor Plugin MS Auth Package"
description: "Step-by-step tutorial on how to use the @recognizebv/capacitor-plugin-msauth package for Capacitor applications to implement MSAL."
created_at: "2022-02-03"
published: true
slug: capacitor-plugin-msauth.git
---

# How to Use @recognizebv/capacitor-plugin-msauth Package

This tutorial will guide you through the process of installing and utilizing the @recognizebv/capacitor-plugin-msauth package in your Capacitor application to integrate Microsoft Authentication Library (MSAL) for authentication purposes. 

## Installation

Follow these steps to set up the package in your project:

1. Begin by installing the package using Yarn:
   ```
   yarn add @recognizebv/capacitor-plugin-msauth
   ```

2. Synchronize the Capacitor project:
   ```
   npx cap sync
   ```

3. Create an app registration:
   - Access the Azure portal, go to Authentication, and select Add platform for iOS/macOS.
   - Provide the bundle identifier which can be found in Xcode under the General tab of your project.
   - Repeat the above steps for Android, ensuring to use the name defined in the `AndroidManifest.xml`.
   - Generate a hash for your key, as you will need this later.

...

## Usage

Once you have successfully installed the package, utilize it in your project through the following steps:

1. Import the necessary dependencies:
   ```typescript
   import { Plugins } from '@capacitor/core'
   
   const { MsAuthPlugin } = Plugins
   ```

2. Implement the `login` method with your required parameters:
   ```typescript
   const result = await MsAuthPlugin.login({
     clientId: '<client id>',
     tenant: '<tenant, defaults to common>',
     domainHint: '<domainHint>',
     scopes: ['<scopes, defaults to no scopes>'],
     keyHash: '<Android only, the key hash as obtained above>',
   })
   ```

3. Additional usage guidelines...

By following the steps outlined in this tutorial, you can seamlessly integrate the @recognizebv/capacitor-plugin-msauth package into your Capacitor application, enabling secure authentication using Microsoft services.