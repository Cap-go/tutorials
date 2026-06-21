---
title: How to Use @capacitor-community/tap-jacking Package
description: A step-by-step guide on integrating and using the @capacitor-community/tap-jacking package in a Capacitor project.
created_at: 2023-10-12
published: true
slug: tap-jacking.git
locale: en
---

# Integrating @capacitor-community/tap-jacking Package in Capacitor App

In this tutorial, we will walk through the process of integrating the `@capacitor-community/tap-jacking` package into your Capacitor project to prevent tap-jacking vulnerabilities.

## Step 1: Installation

First, install the package using npm or yarn:

```bash
npm install @capacitor-community/tap-jacking
```

or

```bash
yarn add @capacitor-community/tap-jacking
```

## Step 2: Importing the Package

In your Capacitor project, import the `tapJacking` module in the `capacitor.config.json` file:

```json
{
  "plugins": {
    "TapJacking": {
      "packageName": "@capacitor-community/tap-jacking",
      "packageVersion": "latest"
    }
  }
}
```

## Step 3: Initialization

Initialize the `tapJacking` module in your Capacitor application to enable tap-jacking protection:

```typescript
import { Plugins } from '@capacitor/core';

const { TapJacking } = Plugins;

// Enable tap-jacking protection
TapJacking.enable();
```

## Step 4: Configuration

You can configure the tap-jacking protection level as needed. For example, you can adjust the threshold value by calling the `setThreshold` method:

```typescript
// Set a custom threshold value
TapJacking.setThreshold(70);
```

## Step 5: Testing

Finally, test your application to ensure that the tap-jacking protection is active and working as expected. Verify that the specified configuration settings meet your security requirements.

That's it! You have successfully integrated the `@capacitor-community/tap-jacking` package into your Capacitor project to safeguard against tap-jacking vulnerabilities.

Feel free to explore more features and customization options provided by the package based on your project's requirements.