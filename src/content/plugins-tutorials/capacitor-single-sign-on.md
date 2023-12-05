---
title: "Using @teammaestro/capacitor-single-signon Package"
description: "This tutorial will guide you on how to use the @teammaestro/capacitor-single-signon package to implement single sign-on in your Capacitor app."
created_at: "2022-10-18"
published: true
slug: "capacitor-single-sign-on"
---

# Using @teammaestro/capacitor-single-signon Package

In this tutorial, we will learn how to use the `@teammaestro/capacitor-single-signon` package to implement single sign-on functionality in a Capacitor app.

## Prerequisites

Before we begin, make sure you have the following:

1. A Capacitor project set up. If you don't have one, you can create a new project using the Capacitor CLI.
2. Basic knowledge of Capacitor and how to integrate plugins into your app.

## Step 1: Install the Package

To get started, install the `@teammaestro/capacitor-single-signon` package into your Capacitor project. Run the following command in your project's root directory:

```
npm install @teammaestro/capacitor-single-signon
```

## Step 2: Configure the Package

Next, we need to configure the package to work with your application's authentication provider. 

1. Open your project's `capacitor.config.json` file.
2. Add the following configuration to the `plugins` section:

```json
{
  "plugins": {
    "SingleSignOn": {
      "clientId": "YOUR_CLIENT_ID",
      "redirectUrl": "YOUR_REDIRECT_URL"
    }
  }
}
```

Replace `YOUR_CLIENT_ID` with your authentication provider's client ID and `YOUR_REDIRECT_URL` with the redirect URL for your app.

## Step 3: Implement Single Sign-On

Now that the package is installed and configured, we can implement single sign-on functionality in our app.

1. Import the `SingleSignOn` plugin into your project's code:

```typescript
import { Plugins } from '@capacitor/core';

const { SingleSignOn } = Plugins;

```

2. Use the `SingleSignOn.login()` method to initiate the single sign-on process:

```typescript
SingleSignOn.login().then(result => {
  // Handle successful login
}).catch(error => {
  // Handle login error
});
```

The `login()` method opens the authentication provider's login page and returns a result containing the user's authentication token upon successful login.

3. To handle the result of the login process, add appropriate code in the success and error callbacks.

```typescript
SingleSignOn.login().then(result => {
  // Handle successful login
  const { accessToken } = result;
  // Use the access token for further authentication or API calls
}).catch(error => {
  // Handle login error
  console.error(error);
});
```

In the success callback, you can retrieve the user's access token from the `result` object and use it for further authentication or API calls.

That's it! You have successfully implemented single sign-on using the `@teammaestro/capacitor-single-signon` package in your Capacitor app.

## Conclusion

In this tutorial, we learned how to use the `@teammaestro/capacitor-single-signon` package to implement single sign-on functionality in a Capacitor app. We covered the installation, configuration, and usage of the package, allowing users to authenticate with their preferred authentication provider.

Remember to refer to the official documentation of the `@teammaestro/capacitor-single-signon` package for more detailed information and additional features.

