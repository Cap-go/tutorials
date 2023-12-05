---
title: "Using cordova-plugin-admobpro for Mobile Ads"
description: "Learn how to integrate AdMob ads into your Cordova mobile app using the cordova-plugin-admobpro package."
created_at: "2022-10-19"
published: true
slug: "cordova-admob-pro"
---

## Introduction

In this tutorial, we will explore how to use the cordova-plugin-admobpro package to integrate AdMob ads into your Cordova mobile applications. AdMob is a mobile advertising platform provided by Google, which allows you to monetize your app by displaying ads to users.

We will cover the following topics:

1. Installation and Setup
2. Creating Ad Unit IDs
3. Displaying Banner Ads
4. Showing Interstitial Ads
5. Handling Ad Events

By the end of this tutorial, you will have a clear understanding of how to incorporate AdMob ads into your Cordova app and start earning revenue.

## Prerequisites

Before proceeding, make sure you have the following prerequisites:

- Cordova CLI installed on your machine
- An active AdMob account
- The cordova-plugin-admobpro package added to your Cordova project

If you haven't set up your development environment or installed the necessary tools, please refer to the official Cordova documentation for instructions.

## Step 1: Installation and Setup

To get started, create a new Cordova project or open an existing one. Then, install the cordova-plugin-admobpro package using the Cordova CLI:

```bash
cordova plugin add cordova-plugin-admobpro
```

This command will download and install the plugin into your project.

## Step 2: Creating Ad Unit IDs

Next, you need to create Ad Unit IDs for your banner and interstitial ads. These IDs are specific to your AdMob account and will be used to identify the ads displayed in your app.

To create Ad Unit IDs, follow these steps:

1. Log in to your AdMob account.
2. Navigate to the "Apps" section.
3. Click on "Add App" and enter the necessary details for your app.
4. Once your app is added, select it from the list and click on "Ad units" in the left sidebar.
5. Click on "New Ad Unit" and choose the ad format (banner or interstitial).
6. Follow the instructions to create the ad unit and take note of the generated ID.

Repeat the process for both banner and interstitial ad units. You will need these IDs later when integrating ads into your app.

## Step 3: Displaying Banner Ads

The cordova-plugin-admobpro package provides a simple API to display banner ads in your Cordova app. To display a banner ad, follow these steps:

1. Open your main JavaScript file (e.g., `index.js`).
2. Add the following code inside the `deviceready` event listener:

```javascript
if (AdMob) {
  AdMob.createBanner({
    adId: 'Your_Banner_Ad_Unit_ID',
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    autoShow: true
  });
}
```

Replace `'Your_Banner_Ad_Unit_ID'` with the actual Ad Unit ID for your banner ad.

3. Save the file and rebuild your Cordova project.

Now, when you run your app on a device, you should see the banner ad displayed at the bottom