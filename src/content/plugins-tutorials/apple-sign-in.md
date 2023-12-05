---
title: "Using @capacitor-community/apple-sign-in Package"
description: "A tutorial on how to use the @capacitor-community/apple-sign-in package for implementing Sign in With Apple in your Capacitor app."
created_at: "2021-09-29"
published: true
slug: "apple-sign-in"
---

# Using @capacitor-community/apple-sign-in Package

The @capacitor-community/apple-sign-in package provides a convenient way to integrate Sign in With Apple functionality into your Capacitor app. In this tutorial, we will walk through the steps of installing and using this package.

## Installation

To get started, install the package using npm or yarn:

```bash
npm i @capacitor-community/apple-sign-in
```

or

```bash
yarn add @capacitor-community/apple-sign-in
```

## Usage

Once the package is installed, you can import the necessary modules and configure the options for Sign in With Apple.

```ts
import { Plugins } from '@capacitor/core'
import { SignInWithApple, SignInWithAppleOptions } from '@capacitor-community/apple-sign-in'

// Register the Sign in With Apple plugin for iOS and web
registerWebPlugin(SignInWithApple)

// Set the options for Sign in With Apple
const options: SignInWithAppleOptions = {
  clientId: 'com.your.webservice',
  redirectURI: 'https://www.yourfrontend.com/login',
  scope: 'email name',
  state: '12345',
  nonce: 'nonce',
}
```

Note: Replace `'com.your.webservice'` with your own service ID obtained from your Apple Developer Account.

Next, you can call the `authorize` method to initiate the Sign in With Apple flow.

```ts
async function signInWithApple() {
  const res = await SignInWithApple.authorize(options)
  console.log(res)
}
```

When the user taps on the Sign in With Apple button in your app, they will be presented with a login prompt. After signing in, the plugin will return an object with the user information, including the user's email and name if allowed by the scopes.

That's it! You've successfully integrated Sign in With Apple into your Capacitor app using the @capacitor-community/apple-sign-in package.

## Conclusion

In this tutorial, we learned how to install and use the @capacitor-community/apple-sign-in package to implement Sign in With Apple in a Capacitor app. This functionality provides a secure and convenient way for users to sign in to your app using their Apple ID.