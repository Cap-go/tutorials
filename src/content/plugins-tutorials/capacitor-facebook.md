---
title: "Using Capacitor Facebook Package"
description: "A tutorial on how to use the capacitor-facebook package in your Capacitor app"
created_at: "2021-10-25"
published: true
slug: "capacitor-facebook"
---

# Using Capacitor Facebook Package

## Introduction

In this tutorial, we will learn how to integrate the `capacitor-facebook` package into your Capacitor app to enable Facebook authentication and other Facebook-related functionalities.

## Prerequisites

Before we begin, make sure you have the following:

- Node.js and npm installed on your machine
- Capacitor CLI installed globally
- A Facebook Developer account and an associated Facebook app

## Step 1: Create a Capacitor App

First, let's create a new Capacitor app. Open your terminal and run the following commands:

```bash
npx create-capacitor-app my-app
cd my-app
```

## Step 2: Install the Capacitor Facebook Package

Next, let's install the `capacitor-facebook` package. Run the following command in your project's root directory:

```bash
npm install capacitor-facebook
```

## Step 3: Configure your Facebook App

To use the `capacitor-facebook` package, you need to configure your Facebook app. Follow these steps:

1. Go to the [Facebook Developers](https://developers.facebook.com/) website and log in with your Facebook account.
2. Create a new app by clicking on the "My Apps" dropdown menu and selecting "Create App".
3. Choose the "WWW" platform and enter a name for your app.
4. On the left sidebar, click on "Settings" and then "Basic".
5. Note down the `App ID` for later use.

## Step 4: Configure the Capacitor Facebook Plugin

In this step, we will configure the Capacitor Facebook plugin in your Capacitor app's configuration files.

1. Open the `capacitor.config.json` file in the root directory of your Capacitor app.
2. Find the `"plugins"` property and add a new entry for the Capacitor Facebook plugin:

```json
"plugins": {
  ...
  "CapacitorFacebook": {
    "appId": "YOUR_APP_ID"
  }
}
```

Replace `YOUR_APP_ID` with the `App ID` of your Facebook app.

## Step 5: Implement Facebook Authentication

With the Capacitor Facebook package and your Facebook app configured, you can now implement Facebook authentication in your app.

1. Import the Capacitor Facebook plugin in your JavaScript/TypeScript file:

```javascript
import { Plugins } from '@capacitor/core';
const { CapacitorFacebook } = Plugins;
```

2. Implement the login functionality, for example:

```javascript
// Trigger Facebook login
async function loginWithFacebook() {
  const result = await CapacitorFacebook.login();
  
  if (result.accessToken) {
    // User is logged in, you can now use the access token
    console.log('Access Token:', result.accessToken.token);
  } else {
    // User cancelled the login process
    console.log('Login cancelled.');
  }
}
```

3. Call the `loginWithFacebook()` function as needed, for example, on a button click event handler.

## Step 6: Additional Functionality

The `capacitor-facebook` package provides additional functionalities for Facebook integration, such as retrieving user profile information, logging out, and more. Please refer to the [official documentation](https://github.com/capacitor-community/facebook) for more details and examples.

## Conclusion

Congratulations! You have successfully integrated the `capacitor-facebook` package into your Capacitor app and implemented Facebook authentication. You can now further explore the capabilities of the package and enhance your app's Facebook integration.

Remember to refer to the [official documentation](https://github.com/capacitor-community/facebook) for more details and advanced usage scenarios.

Happy coding!