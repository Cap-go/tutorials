---
title: "Using @frontegg/ionic-capacitor Package"
description: "A guide on how to use the @frontegg/ionic-capacitor package for integrating Frontegg user management features in an Ionic Capacitor application."
created_at: "2021-11-15"
published: true
slug: "frontegg-ionic-capacitor"
---

# Using @frontegg/ionic-capacitor Package

The @frontegg/ionic-capacitor package allows you to integrate Frontegg user management features in your Ionic Capacitor application. This guide will walk you through the steps required to set up and configure the package in your project.

## Table of Contents

- [Project Requirements](#project-requirements)
- [Getting Started](#getting-started)
   - [Prepare Frontegg Workspace](#prepare-frontegg-workspace)
   - [Setup Hosted Login](#setup-hosted-login)
   - [Add @frontegg/ionic-capacitor Package](#add-frontegg-ionic-capacitor-package)
   - [Configure Your Application](#configure-your-application)
- [Setup iOS Project](#setup-ios-project)
   - [Create Frontegg plist File](#create-frontegg-plist-file)
   - [Configure iOS Associated Domain](#configure-ios-associated-domain)
- [Setup Android Project](#setup-android-project)
   - [Set Minimum SDK Version](#set-minimum-sdk-version)
   - [Configure Build Config Fields](#configure-build-config-fields)
   - [Configure Android AssetLinks](#configure-android-assetlinks)
- [Usages](#usages)
   - [Ionic with Angular](#ionic-with-angular)
   - [Login with Frontegg](#login-with-frontegg)
   - [Check if User is Authenticated](#check-if-user-is-authenticated)

## Project Requirements

Before getting started, ensure that your project meets the following requirements:

- Minimum iOS deployment version: **14**
- Minimum Android SDK version: **26**

## Getting Started

### Prepare Frontegg Workspace

1. Navigate to [Frontegg Portal Settings](https://portal.frontegg.com/development/settings).
2. If you don't have an application, follow the integration steps after signing up.
3. Copy the FronteggDomain from [Frontegg Portal Domain](https://portal.frontegg.com/development/settings/domains) for future steps.

### Setup Hosted Login

1. Navigate to [Login Method Settings](https://portal.frontegg.com/development/authentication/hosted).
2. Toggle the Hosted login method.
3. Add `{{IOS_BUNDLE_IDENTIFIER}}://{{FRONTEGG_BASE_URL}}/ios/oauth/callback`.
4. Add `{{ANDROID_PACKAGE_NAME}}://{{FRONTEGG_BASE_URL}}/android/oauth/callback`.
5. Replace `IOS_BUNDLE_IDENTIFIER` with your application identifier.
6. Replace `FRONTEGG_BASE_URL` with your Frontegg base URL.
7. Replace `ANDROID_PACKAGE_NAME` with your Android package name.

### Add @frontegg/ionic-capacitor Package

1. Add Capacitor to your Ionic project if it doesn't already exist:

   ```bash
   ionic integrations enable capacitor
   ```

2. Use a package manager (npm or yarn) to install the @frontegg/ionic-capacitor package:

   **NPM:**
   ```bash
   npm install -s @frontegg/ionic-capacitor
   ```

   **Yarn:**
   ```bash
   yarn add @frontegg/ionic-capacitor
   ```

### Configure Your Application

1. Create or modify the `capacitor.config.ts` file in your project:

   ```typescript 
   import { CapacitorConfig } from '@capacitor/cli';

   const config: CapacitorConfig = {
     appId: '{YOUR_APPLICATION_ID}',
     appName: '{YOUR_APPLICATION_NAME}',
     webDir: 'www',
     server: {
       androidScheme: 'https'
     },
     ios: {
       path: 'ios',
     },
     android: {
       path: 'android',
     },
   };
   
   export default config;
   ```

2. Add the iOS and Android projects to your Ionic app (if not already added) by running the following commands:

   ```bash
   npx cap add ios
   npx cap add android
   ```

## Setup iOS Project

### Create Frontegg plist File

TODO: Add setup instructions for creating the Frontegg plist file in the iOS project.

### Configure iOS Associated Domain

TODO: Add instructions for configuring the iOS associated domain for Frontegg.

## Setup Android Project

### Set Minimum SDK Version

TODO: Add instructions for setting the minimum SDK version in the Android project.

### Configure Build Config Fields

TODO: Add instructions for configuring the build config fields in the Android project.

### Configure Android AssetLinks

TODO: Add instructions for configuring Android AssetLinks for Frontegg.

## Usages

### Ionic with Angular

TODO: Add examples and instructions for using @frontegg/ionic-capacitor with Ionic and Angular.

### Login with Frontegg

TODO: Add examples and instructions for implementing login with Frontegg using @frontegg/ionic-capacitor.

### Check if User is Authenticated

TODO: Add examples and instructions for checking if a user is authenticated using @frontegg/ionic-capacitor.

That's it! You have now successfully integrated the @frontegg/ionic-capacitor package in your Ionic Capacitor application. Enjoy the Frontegg user management features in your app!

Remember to refer to the official documentation and consult the Frontegg support team if you encounter any issues or need further assistance.