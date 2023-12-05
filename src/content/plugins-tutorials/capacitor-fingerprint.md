# Using the @capgo/capacitor-fingerprint package

## Frontmatter

---
title: "Capacitor Fingerprint Tutorial"
description: "Learn how to use the @capgo/capacitor-fingerprint package to implement fingerprint authentication in your Capacitor app."
created_at: "2021-10-15"
published: true
slug: capacitor-fingerprint
---

## Introduction

In this tutorial, we will learn how to use the @capgo/capacitor-fingerprint package to implement fingerprint authentication in your Capacitor app. Fingerprint authentication provides a convenient and secure way for users to authenticate themselves on mobile devices.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- Capacitor installed in your project
- An Android or iOS device or emulator with fingerprint support

## Installation

To use the @capgo/capacitor-fingerprint package, you need to install it in your Capacitor project. 

```bash
npm install @capgo/capacitor-fingerprint
```

## Configuration

### Android Configuration

To configure the @capgo/capacitor-fingerprint package for Android, you need to add the following permissions and features to your AndroidManifest.xml file:

```xml
<uses-permission android:name="android.permission.USE_FINGERPRINT"/>
<uses-feature android:name="android.hardware.fingerprint" android:required="true"/>
```

### iOS Configuration

To configure the @capgo/capacitor-fingerprint package for iOS, you need to add the following key to your Info.plist file:

```xml
<key>NSFaceIDUsageDescription</key>
<string>We need your fingerprint to authenticate you.</string>
```

## Usage

### Import the Plugin

To use the @capgo/capacitor-fingerprint package in your code, you first need to import it:

```typescript
import { Fingerprint } from '@capgo/capacitor-fingerprint';
```

### Check Fingerprint Availability

You can check if the device supports fingerprint authentication using the `isAvailable` method:

```typescript
Fingerprint.isAvailable()
  .then((result) => {
    if (result.available === true) {
      console.log('Fingerprint authentication is available');
    } else {
      console.log('Fingerprint authentication is not available');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

### Authenticate with Fingerprint

To authenticate a user with their fingerprint, you can use the `authenticate` method:

```typescript
Fingerprint.authenticate()
  .then((result) => {
    if (result.authenticated === true) {
      console.log('Fingerprint authentication successful');
    } else {
      console.log('Fingerprint authentication failed');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

## Conclusion

In this tutorial, we have learned how to use the @capgo/capacitor-fingerprint package to implement fingerprint authentication in a Capacitor app. Fingerprint authentication provides a convenient and secure way for users to authenticate themselves on mobile devices.