```markdown
---
title: Guide to Using @vivendo/referral Package
description: This markdown tutorial provides a comprehensive guide on how to use the @vivendo/referral package in your Capacitor project to track app installs and handle open URLs.
created_at: 2022-02-18
published: true
slug: referral
---

# Using @vivendo/referral Package

This tutorial will guide you through the process of using the `@vivendo/referral` package in your Capacitor project to track app installs and handle open URLs.

## Installation

You can install the `@vivendo/referral` package using npm. Make sure to sync Capacitor after installation.

```bash
npm install @vivendo/referral
npx cap sync
```

## API

The `@vivendo/referral` package provides the following API methods:

- `getInstallReferrer(options: { value: string; }) => Promise<{ value: string; }>`
- `handleOpenUrl(options: { url: string; }) => Promise<{ url: string; }>`

### getInstallReferrer

This method allows you to get the install referrer using the specified options.

### handleOpenUrl

This method handles opening URLs based on the provided URL.

## Usage

To get the install referrer, you can use the following code snippet:

```javascript
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

...

const ret = await Storage.get({ key: 'referrer' });
console.log('referrer: ', ret.value);
```

## Testing

To test the installation referrer, you can use the following command in your console:

```bash
$ adb shell
$ am broadcast -a com.android.vending.INSTALL_REFERRER -n <package-name>/com.eladcohen.capainstallref.Receiver --es "referrer" "YEHAAA"
```

## Google Play

You can append the referrer query string after your package ID on Google Play to track the referrer.

Example:
https://play.google.com/store/apps/details?id=com.eladcohen.ghfollower&referrer=YEHAAA

Thank you for using the @vivendo/referral package in your project!
```
```
