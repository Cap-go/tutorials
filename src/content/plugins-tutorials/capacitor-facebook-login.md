# Using @rdlabo/capacitor-facebook-login Package

## Introduction

In this tutorial, we will learn how to use the `@rdlabo/capacitor-facebook-login` package to implement Facebook login functionality in a Capacitor application. This package provides a convenient way to integrate Facebook login into your app, allowing users to securely login with their Facebook credentials.

## Prerequisites

Before we begin, make sure you have the following prerequisites installed:

- Node.js and npm
- Capacitor CLI
- A Facebook Developer account and an app registered with Facebook

## Step 1: Install the Package

To get started, open your Terminal or Command Prompt and navigate to your Capacitor project's root directory. Run the following command to install the `@rdlabo/capacitor-facebook-login` package:

```bash
npm install @rdlabo/capacitor-facebook-login
```

## Step 2: Configure your App on Facebook Developers

Next, you need to configure your app on the Facebook Developer portal. Follow these steps:

1. Log in to your Facebook Developer account and go to the [My Apps](https://developers.facebook.com/apps) section.
2. Click on the "Create App" button and provide a name for your app.
3. Select the platform as "Website" and click on "Create App ID".
4. In the "Settings" section of your app, go to the "Basic" tab and note down your App ID.

## Step 3: Configure Capacitor

To use the Facebook Login package, you need to configure Capacitor with your Facebook App ID. Open the `capacitor.config.json` file in your project's root directory and add the following lines:

```json
{
  "plugins": {
    "FacebookLogin": {
      "appId": "YOUR_FACEBOOK_APP_ID"
    }
  }
}
```

Replace `YOUR_FACEBOOK_APP_ID` with the App ID you obtained in Step 2.

## Step 4: Import and Initialize the Plugin

In your application code, import the `FacebookLogin` plugin and initialize it by calling the `initialize` method. Make sure to do this after the `deviceready` event has been fired. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';

const { FacebookLogin } = Plugins;

document.addEventListener('deviceready', async () => {
  const result = await FacebookLogin.initialize();
  console.log(result);
});
```

## Step 5: Implement Facebook Login

Now, you can implement the Facebook login functionality in your app. To do this, call the `login` method of the `FacebookLogin` plugin. Here's an example:

```javascript
document.getElementById('login-button').addEventListener('click', async () => {
  const result = await FacebookLogin.login(['public_profile', 'email']);
  console.log(result);
});
```

Make sure to replace `'login-button'` with the ID of your login button element.

## Step 6: Handle the Login Result

After the user completes the login process, you will receive a login result containing the user's access token and other information. You can handle this result as per your application's requirements. Here's an example:

```javascript
document.addEventListener('deviceready', async () => {
  const result = await FacebookLogin.initialize();

  if (result.success) {
    const { accessToken, userId } = result;
    // Handle the login success
  } else {
    // Handle the login failure
  }
});
```

## Conclusion

Congratulations! You have successfully learned how to use the `@rdlabo/capacitor-facebook-login` package to implement Facebook login in your Capacitor app. You can now allow users to login with their Facebook credentials and enhance the user experience of your application.

---

title: "Using the @rdlabo/capacitor-facebook-login Package"
description: "Learn how to implement Facebook login in a Capacitor application using @rdlabo/capacitor-facebook-login package."
created_at: "2022-10-28"
published: true
slug: "capacitor-facebook-login"
