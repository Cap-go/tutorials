---
title: "Using @diadal/signin-with-apple package"
description: "Learn how to use the @diadal/signin-with-apple package to implement Sign In With Apple in your Capacitor 3 project."
created_at: "2022-11-29"
published: true
slug: signin-with-apple
---

# Using @diadal/signin-with-apple package

In this tutorial, we will learn how to use the `@diadal/signin-with-apple` package to implement Sign In With Apple in your Capacitor 3 project. Sign In With Apple provides a secure and privacy-focused way for users to authenticate in your application using their Apple ID.

## Installation

To begin, make sure you have Capacitor 3 installed in your project. If not, you can install it by running the following command:

```bash
npm install @capacitor/core@3.0.0
```

Once Capacitor 3 is installed, you can install the `@diadal/signin-with-apple` package by running the following command:

```bash
npm install @diadal/signin-with-apple
```

## Usage

First, we need to import the necessary modules from the package:

```javascript
import { SigninWithApple, AppleSignResponse, AppleSignOptions } from '@diadal/signin-with-apple';
```

Next, we can define the options for Sign In With Apple:

```javascript
const options: AppleSignOptions = {
  clientId: 'app.example',
  redirectURI: 'https://example.com/auth/apple/callback',
  scopes: 'email name',
  state: '********',
  nonce: '**********',
};
```

Make sure to replace the values accordingly. The `clientId` should be a unique identifier for your application, `redirectURI` should be the URL where Apple will redirect the user after authentication, `scopes` should be a string of requested scopes, `state` and `nonce` should be unique random strings.

To initiate the Sign In With Apple flow, we can call the `authorize` method:

```javascript
SigninWithApple.authorize(options)
  .then((result: AppleSignResponse) => {
    console.log('Authentication successful:', result);
    // Perform necessary actions with the received data
  })
  .catch((error: any) => {
    console.error('Authentication failed:', error);
    // Handle error cases
  });
```

The `authorize` method returns a promise that resolves to an `AppleSignResponse` object containing the authentication result. You can perform further actions with the received data, such as logging in the user or retrieving additional information.

## Conclusion

In this tutorial, we have learned how to use the `@diadal/signin-with-apple` package to implement Sign In With Apple in a Capacitor 3 project. Sign In With Apple provides a secure and privacy-focused authentication method for your application. Make sure to customize the options according to your project's requirements and handle the received data accordingly.

Happy coding!