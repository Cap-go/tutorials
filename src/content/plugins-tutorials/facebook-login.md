---
title: "Using @capacitor-community/facebook-login Package"
description: "This tutorial will guide you through the process of using the @capacitor-community/facebook-login package in your Capacitor project."
created_at: "2022-03-15"
published: true
slug: "facebook-login"
---

# Using @capacitor-community/facebook-login Package

The `@capacitor-community/facebook-login` package is a Capacitor community plugin that enables native Facebook Login functionality in your Capacitor projects. This tutorial will guide you through the installation and usage of this package.

## Installation

To install the `@capacitor-community/facebook-login` package, run the following command in your project's root directory:

```bash
npm install --save @capacitor-community/facebook-login
npx cap update
```

## Android Configuration

After installing the package, you need to configure it for Android. Open the `android/app/src/main/AndroidManifest.xml` file and add the following XML elements under the `<manifest><application>` section:

```xml
<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
<meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
```

## Usage

To use the Facebook Login functionality in your app, follow these steps:

1. Import the necessary modules in your TypeScript file:

```typescript
import { Plugins } from '@capacitor/core';
const { FacebookLogin } = Plugins;
```

2. Implement the login flow:

```typescript
async function loginWithFacebook() {
  const result = await FacebookLogin.login(['public_profile', 'email']);
  
  if (result.accessToken) {
    // Use the access token to make API calls or authenticate the user
    console.log('Access Token:', result.accessToken.token);
  } else if (result.error) {
    // Handle errors
    console.error('Error:', result.error);
  }
}
```

3. Call the `loginWithFacebook` function whenever you want to initiate the Facebook Login flow.

```typescript
loginWithFacebook();
```

That's it! You have successfully integrated Facebook Login into your Capacitor project using the `@capacitor-community/facebook-login` package.

In this tutorial, we covered the installation process, Android configuration, and usage of the `@capacitor-community/facebook-login` package. You can now leverage the power of native Facebook Login in your Capacitor applications.

Happy coding!

For more information, refer to the [official documentation](https://github.com/capacitor-community/facebook-login).

