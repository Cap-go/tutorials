---
title: "Using the open-subscription-settings Package"
description: "A tutorial on how to use the open-subscription-settings package to open the subscription settings of a native platform within your application."
created_at: "2021-10-20"
published: true
slug: "capacitor-plugin-open-subscription-settings"
---

# Using the open-subscription-settings Package

This tutorial will guide you through the process of using the `open-subscription-settings` package to open the subscription settings of a native platform within your application. This package allows users to easily access and manage their subscriptions without leaving the app.

## Installation

To get started, you will need to install the `open-subscription-settings` package. Open your terminal and run the following command:

```bash
npm install open-subscription-settings
npx cap sync
```

## Usage

Import the `triggerOpenSettings` and `triggerOpenSubscriptions` functions from the package like this:

```javascript
import { triggerOpenSettings, triggerOpenSubscriptions } from 'open-subscription-settings';
```

### Opening Subscription Settings

To open the subscription settings of the native platform, you can use the `triggerOpenSettings` function. This function will open the settings page where users can manage their subscriptions. Here's an example of how to use it:

```javascript
triggerOpenSettings()
  .then(() => {
    console.log('Subscription settings opened successfully');
  })
  .catch((error) => {
    console.error('Failed to open subscription settings:', error);
  });
```

### Opening Subscriptions

In addition to opening the settings page, you can also directly open the subscriptions page using the `triggerOpenSubscriptions` function. This function will take the user directly to the subscription management page. Here's an example of how to use it:

```javascript
triggerOpenSubscriptions()
  .then(() => {
    console.log('Subscriptions opened successfully');
  })
  .catch((error) => {
    console.error('Failed to open subscriptions:', error);
  });
```

## Conclusion

The `open-subscription-settings` package provides a simple and convenient way to open the subscription settings of the native platform within your application. By following the steps outlined in this tutorial, you can easily integrate subscription management functionality into your app and enhance the user experience.