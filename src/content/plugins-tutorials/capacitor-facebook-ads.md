---
title: "Using Capacitor Facebook Ads"
description: "A tutorial on how to use the capacitor-facebook-ads package in your Capacitor app."
created_at: "2021-05-25"
published: true
slug: "capacitor-facebook-ads"
---

# Using Capacitor Facebook Ads

In this tutorial, we will learn how to integrate and use the capacitor-facebook-ads package in your Capacitor app. The capacitor-facebook-ads package provides a simple way to display Facebook ads in your app.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- Capacitor installed in your app.
- An active Facebook Developer account.
- A registered app on the Facebook Developer portal.

## Step 1: Install the Package

To use the capacitor-facebook-ads package, you need to install it in your Capacitor app. Open your terminal or command prompt and navigate to your app's root directory. Run the following command:

```bash
npm install capacitor-facebook-ads
```

This will install the capacitor-facebook-ads package and its dependencies in your app.

## Step 2: Integrate the Package

After installing the package, you need to integrate it into your app. Open your app's main TypeScript file (usually `src/app.ts`) and import the capacitor-facebook-ads plugin:

```typescript
import 'capacitor-facebook-ads';
```

This will ensure that the plugin is properly loaded and available for use in your app.

## Step 3: Configure Facebook Ads

To use Facebook ads in your app, you need to configure your Facebook app's settings. Open your Facebook Developer account and navigate to your app's settings.

- Enable Facebook Audience Network.
- Obtain your Facebook app's placement ID and other required information.

## Step 4: Display an Ad

Now that the capacitor-facebook-ads package is integrated and configured, you can display an ad in your app. First, import the `Plugins` object from Capacitor in your TypeScript file:

```typescript
import { Plugins } from '@capacitor/core';
```

Then, use the `FacebookAds` plugin to display an ad:

```typescript
const { FacebookAds } = Plugins;

FacebookAds.showAd({
  placementId: 'your-placement-id',
});
```

Make sure to replace `'your-placement-id'` with your actual Facebook app's placement ID.

That's it! With these steps, you have successfully integrated and used the capacitor-facebook-ads package in your Capacitor app.

## Conclusion

In this tutorial, we learned how to use the capacitor-facebook-ads package to display Facebook ads in a Capacitor app. We covered the installation process, integration steps, configuration of Facebook app settings, and displaying an ad. Now, you can monetize your app using Facebook ads and maximize your revenue. Happy coding!