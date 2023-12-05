---
title: "Using Capacitor Google Auth"
description: "A tutorial on how to use the capacitor-google-auth package for Google authentication in Capacitor"
created_at: "2021-07-10"
published: true
slug: "capacitor-google-auth"
---

# Using Capacitor Google Auth

In this tutorial, we will learn how to use the `capacitor-google-auth` package for Google authentication in Capacitor.

## Installation

To get started, you need to install the `@codetrix-studio/capacitor-google-auth` package. Open your terminal and run the following command:

```shell
npm install --save @codetrix-studio/capacitor-google-auth
```

Next, update the Capacitor dependencies by running:

```shell
npx cap update
```

## Initialization

To use the plugin in a web application, you need to manually initialize it by providing the necessary configuration options. Here is an example:

```typescript
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

GoogleAuth.initialize({
  clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  grantOfflineAccess: true,
});
```

Make sure to replace `YOUR_CLIENT_ID` with your actual client ID obtained from the Google Developers Console. You can also specify the desired scopes and set the `grantOfflineAccess` option if needed.

In an Angular application, you can initialize the plugin in the `AppComponent` constructor:

```typescript
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

constructor() {
  this.initializeApp();
}

initializeApp() {
  this.platform.ready().then(() => {
    GoogleAuth.initialize({
      clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
      grantOfflineAccess: true,
    });
  });
}
```

## Sign-In

To trigger the Google sign-in process, you can call the `signIn` method:

```typescript
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

async function googleSignIn() {
  let googleUser = await GoogleAuth.signIn();
  // Handle the signed-in user data
}
```

Once the sign-in process is complete, you will have access to the user's data. You can use this data as needed in your application.

## Conclusion

In this tutorial, we have learned how to use the `capacitor-google-auth` package for Google authentication in Capacitor. We covered the installation process, initialization steps, and the sign-in process. You can now integrate Google authentication into your Capacitor applications with ease.

Feel free to explore the official documentation for more advanced features and customization options.
