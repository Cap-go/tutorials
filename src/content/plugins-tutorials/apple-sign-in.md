# Using @capacitor-community/apple-sign-in

This tutorial will guide you through the process of using the `@capacitor-community/apple-sign-in` package in your Capacitor project. This package allows you to integrate Sign in with Apple functionality into your app.

## Prerequisites

Before getting started, make sure you have the following:

- Capacitor installed
- Capacitor project set up

## Installation

To install the `@capacitor-community/apple-sign-in` package, run the following command:

```
npm install @capacitor-community/apple-sign-in
```

## Usage

1. Import the necessary modules and classes:

```typescript
import { Plugins } from '@capacitor/core';
import {
  SignInWithApple,
  SignInWithAppleResponse,
  SignInWithAppleOptions,
} from '@capacitor-community/apple-sign-in';
```

2. Register the `SignInWithApple` plugin for web usage:

```typescript
registerWebPlugin(SignInWithApple);
```

3. Set up your options for Sign in with Apple:

```typescript
let options: SignInWithAppleOptions = {
  clientId: 'com.your.webservice',
  redirectURI: 'https://www.yourfrontend.com/login',
  scopes: 'email name',
  state: '12345',
  nonce: 'nonce',
};
```

4. Call the `authorize` method to initiate the Sign in with Apple flow:

```typescript
SignInWithApple.authorize(options)
  .then((result: SignInWithAppleResponse) => {
    // Handle user information
    // Validate token with server and create new session
  })
  .catch((error) => {
    // Handle error
  });
```

## Instructions for iOS

- Make sure you have setup the Sign in with Apple capability in your Xcode project.
- Ensure that you have added the appropriate entitlements and capabilities for Sign in with Apple.
- You may need to configure additional settings in your Apple Developer account to enable Sign in with Apple.

## Instructions for Android

The `@capacitor-community/apple-sign-in` package does not currently support Android. It is only available for iOS and web platforms.

## Conclusion

Congratulations! You have successfully learned how to integrate Sign in with Apple functionality into your Capacitor project using the `@capacitor-community/apple-sign-in` package. You can now allow users to sign in using their Apple accounts in your app.