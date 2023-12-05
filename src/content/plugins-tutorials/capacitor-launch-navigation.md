---
title: "Using the capacitor-launch-navigation package"
description: "This tutorial will guide you through the process of using the capacitor-launch-navigation package in your Capacitor app."
created_at: "2022-02-22"
published: true
slug: capacitor-launch-navigation
---

# Using the capacitor-launch-navigation package

The `capacitor-launch-navigation` package is a powerful tool that allows you to launch specific navigation actions in your Capacitor app. Whether you want to open a specific URL, deep link, or even another app, this package has got you covered.

In this tutorial, we will cover the following topics:

1. Installing the `capacitor-launch-navigation` package.
2. Configuring the necessary permissions.
3. Launching a URL in the app's default browser.
4. Handling deep linking in your app.
5. Opening another app using a custom URL scheme.

Let's get started!

## Step 1: Installing the package

To install the `capacitor-launch-navigation` package, run the following command in your project directory:

```bash
npm install capacitor-launch-navigation
```

## Step 2: Configuring Permissions

Depending on the type of navigation you want to perform, you may need to configure additional permissions in your app. Make sure to check the documentation of the specific navigation action you want to perform.

## Step 3: Launching a URL in the app's default browser

To launch a URL in the app's default browser, you can use the `openUrl` function from the `capacitor-launch-navigation` package. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';

const { LaunchNavigation } = Plugins;

async function openUrlInBrowser(url: string) {
  await LaunchNavigation.openUrl({ url });
}
```

## Step 4: Handling deep linking in your app

If you want to handle deep linking in your app, you can use the `addListener` function from the `capacitor-launch-navigation` package. This allows your app to respond to specific URLs or schema that are associated with your app. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';

const { LaunchNavigation } = Plugins;

LaunchNavigation.addListener('appUrlOpen', (data: any) => {
  console.log('Received deep link', data.url);
});
```

## Step 5: Opening another app using a custom URL scheme

In some cases, you may want to open another app using a custom URL scheme. With the `capacitor-launch-navigation` package, you can do that easily. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';

const { LaunchNavigation } = Plugins;

async function openAppWithScheme(scheme: string) {
  await LaunchNavigation.openUrl({ url: `${scheme}://` });
}
```

That's it! You've learned how to use the `capacitor-launch-navigation` package to perform various navigation actions in your Capacitor app.

I hope you found this tutorial helpful. If you have any questions, feel free to ask!

Remember to check the official Capacitor documentation and the `capacitor-launch-navigation` package documentation for more details and advanced usage.

Happy coding!