---
"title": "Using @capacitor-community/apple-sign-in Package",
"description": "This tutorial will guide you through the process of integrating the @capacitor-community/apple-sign-in package into your Capacitor project for enabling Sign in With Apple feature on both iOS and web platforms.",
"created_at": "2022-01-25",
"published": true,
"slug": "apple-sign-in-git"
---

# Using @capacitor-community/apple-sign-in Package

This tutorial will walk you through the steps of incorporating the `@capacitor-community/apple-sign-in` package into your Capacitor project to enable the Sign in With Apple feature on iOS and web platforms.

## Installation

To get started, install the `@capacitor-community/apple-sign-in` package by running the following command:

```bash
npm i @capacitor-community/apple-sign-in
```

## Usage (iOS, Web)

First, import the necessary modules and declare the required options:

```typescript
import { Plugins } from '@capacitor/core';
import { SignInWithApple, SignInWithApplePluginResponse, SignInWithAppleOptions } from '@capacitor-community/apple-sign-in';

registerWebPlugin(SignInWithApple);

let options: SignInWithAppleOptions = {
  clientId: 'com.your.webservice',
  redirectURI: 'https://www.yourfrontend.com/login',
  scope: 'email name',
  state: '12345',
  nonce: 'nonce',
};
```

Next, you can utilize these options to implement the `SignInWithApple` functionality within your application.

This tutorial should help you in seamlessly integrating the Sign in With Apple feature using the `@capacitor-community/apple-sign-in` package in your project.