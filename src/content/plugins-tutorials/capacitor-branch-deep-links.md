---
title: "Using the capacitor-branch-deep-links package"
description: "This tutorial will guide you on how to use the capacitor-branch-deep-links package in your Capacitor app."
created_at: "2022-01-18"
published: true
slug: "capacitor-branch-deep-links"
---

# Using the capacitor-branch-deep-links package

In this tutorial, we will learn how to integrate the capacitor-branch-deep-links package into your Capacitor app to handle deep links using the Branch.io service.

## Prerequisites

Before getting started, make sure you have the following:

- Capacitor installed in your project.
- A Branch.io account and configured deep linking settings.

## Step 1: Install the package

To start using capacitor-branch-deep-links in your Capacitor project, you need to install the package. Open your project's terminal and run the following command:

```
npm install capacitor-branch-deep-links
```

## Step 2: Configure your Branch.io settings

Before you can use capacitor-branch-deep-links, you need to configure your Branch.io settings. Follow the official Branch.io documentation to set up your account and generate the necessary keys and configurations.

## Step 3: Import the package in your Capacitor project

Once the package is installed, you need to import it into your Capacitor project. Open the `capacitor.config.json` file in the root directory of your project and add the following lines:

```json
"plugins": {
  "CapacitorBranchDeepLinks": {
    "appId": "YOUR_BRANCH_APP_ID"
  }
}
```

Replace `YOUR_BRANCH_APP_ID` with your actual Branch.io app ID.

## Step 4: Implement deep link handling

Now it's time to implement the deep link handling in your Capacitor app. Open the `src/app.component.ts` file and import the `CapacitorBranchDeepLinks` package:

```typescript
import { CapacitorBranchDeepLinks } from 'capacitor-branch-deep-links';
```

Next, add the following code inside the `initializeApp` method or any other appropriate method:

```typescript
CapacitorBranchDeepLinks.addListener('deepLinkOpen', (data: any) => {
  console.log(data);
  // Handle the deep link data and perform relevant actions in your app
});
```

Make sure to replace the `console.log(data)` line with your actual logic for processing the deep link data.

## Step 5: Build and test your app

With the deep link handling implemented, build your Capacitor app and test it on a device or emulator. Use a Branch.io deep link to open your app and verify that the deep link data is correctly received and processed.

## Conclusion

In this tutorial, we covered the process of integrating the capacitor-branch-deep-links package into your Capacitor app to handle deep links using the Branch.io service. Make sure to refer to the official documentation of capacitor-branch-deep-links for more advanced usage and customization options.

Remember to update your Branch.io configurations and generate your own deep links for testing and production environments.