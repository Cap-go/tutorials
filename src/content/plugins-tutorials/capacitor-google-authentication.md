---
title: "Using @kim5257/capacitor-google-authentication Package"
description: "This tutorial will guide you through the process of using the @kim5257/capacitor-google-authentication package in your Capacitor project."
created_at: "2022-10-20"
published: true
slug: "capacitor-google-authentication"
---

# Using @kim5257/capacitor-google-authentication Package

In this tutorial, we will learn how to use the @kim5257/capacitor-google-authentication package in a Capacitor project. This package provides a simple and convenient way to integrate Google authentication in your app.

## Installation

To get started, we need to install the @kim5257/capacitor-google-authentication package. Open your terminal and run the following command:

```sh
npm install --save @kim5257/capacitor-google-authentication
```

## Configuration

Once the package is installed, we need to configure it with our Google API credentials. Make sure you have created a project in the Google Cloud Console and have obtained the necessary client ID.

### Adding Client ID

In your Capacitor project, open the `capacitor.config.json` file and add the client ID under the `plugins` section:

```json
{
  "plugins": {
    "@kim5257/capacitor-google-authentication": {
      "webClientId": "YOUR_WEB_CLIENT_ID"
    }
  }
}
```

Replace `YOUR_WEB_CLIENT_ID` with your actual Web Client ID obtained from the Google Cloud Console.

### Enabling Google Sign-In

To enable Google Sign-In in your app, navigate to the iOS and Android configuration files and add the necessary configurations.

#### iOS Configuration

In the `ios/App/App/Info.plist` file, add the following entries:

```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <!-- Add your iOS URL scheme here -->
      <string>YOUR_IOS_URL_SCHEME</string>
    </array>
  </dict>
</array>
<key>GoogleSignInClientID</key>
<string>YOUR_IOS_CLIENT_ID</string>
```

Replace `YOUR_IOS_URL_SCHEME` with your iOS URL scheme and `YOUR_IOS_CLIENT_ID` with your actual iOS client ID.

#### Android Configuration

In the `android/app/src/main/AndroidManifest.xml` file, add the following entries inside the `<application>` tag:

```xml
<meta-data
  android:name="com.google.android.gms.version"
  android:value="@integer/google_play_services_version" />
<meta-data
  android:name="com.google.android.gms.plus.api.APP_PACKAGE"
  android:value="YOUR_PACKAGE_NAME" />
```

Replace `YOUR_PACKAGE_NAME` with your actual package name.

## Usage

Now that we have the @kim5257/capacitor-google-authentication package configured, we can start using it in our app.

### Sign In

To initiate the Google Sign-In process, you can call the `signIn` method from the package:

```javascript
import { GoogleAuth } from '@kim5257/capacitor-google-authentication';

async function signIn() {
  try {
    const user = await GoogleAuth.signIn();
    console.log(user);
    // Handle the signed-in user data
  } catch (error) {
    console.error(error);
    // Handle sign-in error
  }
}
```

The `signIn` method returns a user object containing the user's authentication data. You can use this data to authenticate the user in your app.

### Sign Out

To sign out the user from their Google account, you can call the `signOut` method:

```javascript
import { GoogleAuth } from '@kim5257/capacitor-google-authentication';

async function signOut() {
  try {
    await GoogleAuth.signOut();
    // User successfully signed out
  } catch (error) {
    console.error(error);
    // Handle sign-out error
  }
}
```

The `signOut` method doesn't return any data. It simply signs out the user from their Google account.

## Conclusion

In this tutorial, we learned how to use the @kim5257/capacitor-google-authentication package to integrate Google authentication in a Capacitor project. We covered the installation and configuration steps, as well as the usage of the package for sign-in and sign-out operations.

By following this guide, you should now be able to implement Google authentication in your Capacitor app with ease.