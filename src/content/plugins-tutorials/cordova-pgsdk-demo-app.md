---
title: "Using Cashfree PG Capacitor Package"
description: "A step-by-step tutorial on integrating the Cashfree PG Capacitor package into your Cordova app"
created_at: "2022-01-25"
published: true
slug: cordova-pgsdk-demo-app
---

# Using Cashfree PG Capacitor Package

This tutorial will guide you through the process of integrating the Cashfree PG Capacitor package into your Cordova app. By following these steps, you will be able to easily accept payments in your mobile app using Cashfree's payment gateway.

## Prerequisites

Before starting the integration, make sure you have the following:

1. Cordova environment set up. If not, refer to the official Cordova documentation for instructions on how to set it up.

2. Cashfree account and access to the PG dashboard. If you don't have an account, sign up at [Cashfree](https://www.cashfree.com/) and create your PG account.

## Step 1: Clone the Demo App

To get started, clone the Cashfree PG Cordova Demo App repository by running the following command in your shell:

```shell
git clone https://github.com/cashfree/cordova-pgsdk-demo-app.git
```

## Step 2: Install Dependencies

Navigate to the cloned repository and install the project dependencies by running the following command:

```shell
npm install
cordova plugin add
```

## Step 3: Sync the Project

Once the dependencies are installed, sync the Cordova project by running the following command:

```shell
cordova prepare
```

## Step 4: Configure the App

Navigate to the `www/js` folder and open the `index.js` file. You will need to replace the `APP_ID` and `APP_SECRET` with the credentials from your Cashfree PG dashboard. Additionally, set the `ENV` variable to either 'TEST' or 'PROD' depending on the environment from which you are using the credentials.

## Step 5: Installing the App

### Android

To install the app on an Android device, run the following command:

```shell
cordova run android
```

### iOS

To install the app on an iOS device, run the following command:

```shell
cordova run ios
```

Congratulations! You have successfully integrated the Cashfree PG Capacitor package into your Cordova app. Your mobile app is now ready to accept payments using Cashfree's payment gateway.

Feel free to explore the demo app's code and customize it as per your requirements. Happy coding!

## Conclusion

In this tutorial, we learned how to integrate the Cashfree PG Capacitor package into a Cordova app. We covered the steps from cloning the demo app to configuring the credentials and installing the app on both Android and iOS devices. By following this tutorial, you can easily accept payments in your Cordova app using Cashfree's payment gateway.

If you have any questions or face any issues during the integration process, refer to Cashfree's documentation or reach out to their support team for assistance.