---
title: "Using @evehr/capacitor-jailbreak-root-detection Package"
description: "A tutorial on how to use the @evehr/capacitor-jailbreak-root-detection package to detect jailbreak or root status in a Capacitor app"
created_at: "2022-10-20"
published: true
slug: "capacitor-jailbreak-root-detection"
---

# Using @evehr/capacitor-jailbreak-root-detection Package

In this tutorial, we will learn how to use the `@evehr/capacitor-jailbreak-root-detection` package to detect jailbreak or root status in a Capacitor app.

## Installation

To get started, we need to install the `@evehr/capacitor-jailbreak-root-detection` package. Open your terminal and navigate to your Capacitor project's root directory. Then, run the following command:

```bash
npm install @evehr/capacitor-jailbreak-root-detection
```

This will install the package and its dependencies in your project.

## Setup

After installing the package, we need to configure it in our Capacitor project.

1. In your project's root directory, locate the `capacitor.config.json` file.
2. Open the file and find the `plugins` object.
3. Add the following entry to the `plugins` object:

```json
{
  "name": "@evehr/capacitor-jailbreak-root-detection"
}
```

Your `capacitor.config.json` file should now include the entry for `@evehr/capacitor-jailbreak-root-detection`.

## Usage

Now that the package is installed and configured, we can use its features to detect jailbreak or root status in our app.

1. Import the `CapacitorJailbreakRootDetection` plugin in your TypeScript file:

```typescript
import { CapacitorJailbreakRootDetection } from '@evehr/capacitor-jailbreak-root-detection';
```

2. Use the `isJailbroken` method to check if the device is jailbroken or rooted:

```typescript
const isJailbroken = await CapacitorJailbreakRootDetection.isJailbroken();
if (isJailbroken) {
  console.log("Device is jailbroken or rooted.");
} else {
  console.log("Device is not jailbroken or rooted.");
}
```

The `isJailbroken` method returns a boolean value indicating whether the device is jailbroken or rooted.

## Conclusion

In this tutorial, we learned how to use the `@evehr/capacitor-jailbreak-root-detection` package to detect jailbreak or root status in a Capacitor app. By following the installation and setup steps, and using the provided `isJailbroken` method, you can easily incorporate jailbreak or root detection functionality in your Capacitor project.