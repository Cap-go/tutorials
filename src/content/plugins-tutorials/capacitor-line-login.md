---
title: "Using the capacitor-line-login package"
description: "This tutorial will guide you through the process of using the capacitor-line-login package to integrate LINE Login into your Capacitor app."
created_at: "2021-10-15"
published: true
slug: "capacitor-line-login"
---

# Using the capacitor-line-login package

In this tutorial, we will walk you through the steps to integrate LINE Login into your Capacitor app using the capacitor-line-login package. LINE Login allows users to log in to your app using their LINE account credentials.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- Capacitor installed in your project.
- An existing LINE developer account.
- Knowledge of Capacitor and JavaScript.

## Step 1: Install the Package

Start by installing the capacitor-line-login package in your project:

```bash
npm install capacitor-line-login
```

## Step 2: Configure LINE Login in the LINE Developers Console

Next, you need to set up LINE Login in the LINE Developers Console. Follow these steps:

1. Log in to the [LINE Developers Console](https://developers.line.biz/console/) with your LINE developer account.
2. Create a new channel or select an existing channel for your app.
3. Enable the LINE Login feature for your channel.
4. Configure the necessary settings such as Callback URL and Permissions.
5. Make note of your Channel ID and Channel Secret, as you will need them in the next step.

## Step 3: Configure the Plugin

Now, let's configure the capacitor-line-login plugin in your Capacitor project. Open the `capacitor.config.json` file and add the following configuration:

```json
{
  "plugins": {
    "LineLogin": {
      "channelId": "<YOUR_CHANNEL_ID>",
      "channelSecret": "<YOUR_CHANNEL_SECRET>",
      "redirectUri": "<YOUR_REDIRECT_URI>"
    }
  }
}
```

Replace `<YOUR_CHANNEL_ID>`, `<YOUR_CHANNEL_SECRET>`, and `<YOUR_REDIRECT_URI>` with the corresponding values from your LINE channel configuration.

## Step 4: Implement LINE Login in Your App

To implement LINE Login in your app, you will need to write some code. Here is an example of how to use the capacitor-line-login plugin in your JavaScript/TypeScript code:

```javascript
import { Plugins } from '@capacitor/core';

const { LineLogin } = Plugins;

async function loginWithLine() {
  try {
    const result = await LineLogin.login();
    const { accessToken } = result;

    // Use the access token for further API requests or authentication
    // logic in your app

    // ...
  } catch (error) {
    console.error('Failed to login with LINE:', error);
  }
}
```

In the code above, we import the `Plugins` object from `@capacitor/core` and then use the `LineLogin` plugin to initiate the login process. The `login` method returns an object that contains the access token, which you can use for further API requests or authentication logic in your app.

You can also handle errors by catching any exceptions that may occur during the login process.

## Step 5: Handle the Login Callback

After the user logs in with LINE, you need to handle the login callback in your app. This typically involves verifying the received access token and performing any necessary actions, such as storing the user's information or redirecting to a different page.

Here is an example of how to handle the login callback in your app:

```javascript
import { Plugins } from '@capacitor/core';

const { App } = Plugins;

App.addListener('appUrlOpen', (data) => {
  const { url } = data;

  // Check if the URL matches the redirect URI set in the LINE Developers Console
  if (url.startsWith('<YOUR_REDIRECT_URI>')) {
    // Parse the URL to extract the access token
    const accessToken = extractAccessToken(url);

    // Use the access token for further API requests or authentication logic in your app

    // ...
  }
});

function extractAccessToken(url) {
  // Implement the logic to extract the access token from the URL
  // and return it

  // ...
}
```

In the code above, we use the `App` plugin from `@capacitor/core` to listen for the `appUrlOpen` event. When the event is triggered, we check if the URL matches the redirect URI set in the LINE Developers Console. If it does, we extract the access token from the URL and use it for further API requests or authentication logic in our app.

Make sure to implement the `extractAccessToken` function according to the URL structure and query parameter format of the LINE Login callback.

## Conclusion

Congratulations! You have successfully integrated LINE Login into your Capacitor app using the capacitor-line-login package. Users can now log in to your app using their LINE account credentials. Feel free to explore additional features and customization options provided by the plugin to enhance the login experience for your users.

Remember to refer to the official documentation of the capacitor-line-login package for more detailed information and advanced usage.

