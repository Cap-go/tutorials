---
title: "Tutorial: Using @capacitor-community/apple-sign-in Package"
description: "Learn how to integrate Sign in with Apple feature in your Capacitor app using @capacitor-community/apple-sign-in package"
created_at: "2022-10-15"
published: true
slug: "apple-sign-in"
---

# Tutorial: Using @capacitor-community/apple-sign-in Package

In this tutorial, we will learn how to integrate the Sign in with Apple feature in your Capacitor app using the @capacitor-community/apple-sign-in package. Sign in with Apple provides a secure and privacy-focused way for users to sign in to your app using their Apple ID.

## Installation

To get started, you need to install the @capacitor-community/apple-sign-in package. Open your terminal and run the following command:

```bash
npm install @capacitor-community/apple-sign-in
```

## Usage

Once the package is installed, you can import the necessary components and start using the Sign in with Apple feature in your app.

```typescript
import {
  SignInWithApple,
  SignInWithAppleResponse,
  SignInWithAppleOptions,
} from '@capacitor-community/apple-sign-in';

const options: SignInWithAppleOptions = {
  clientId: 'com.your.webservice',
  redirectURI: 'https://www.yourfrontend.com/login',
  scopes: 'email name',
  state: '12345',
  nonce: 'nonce',
};

SignInWithApple.authorize(options)
  .then((result: SignInWithAppleResponse) => {
    // Handle user information
    // Validate token with server and create new session
  })
  .catch((error) => {
    // Handle error
  });
```

In the code snippet above, we import the necessary components from the @capacitor-community/apple-sign-in package. We define the options for the Sign in with Apple process, including the client ID, redirect URI, scopes, state, and nonce. We then call the `authorize` method to initiate the Sign in with Apple process.

Make sure to replace the `clientId` and `redirectURI` values with the appropriate values for your app.

## Conclusion

Congratulations! You have successfully learned how to integrate the Sign in with Apple feature in your Capacitor app using the @capacitor-community/apple-sign-in package. This allows your users to sign in using their Apple ID, providing a secure and privacy-focused authentication method.

Remember to handle the user information and validate the token with your server to create a new session for the signed-in user.

For more information and advanced usage, refer to the official documentation of the @capacitor-community/apple-sign-in package.

Happy coding!