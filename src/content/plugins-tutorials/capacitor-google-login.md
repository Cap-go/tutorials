---
title: "Using the @fullmeasure.io/capacitor-google-login Package"
description: "A tutorial on how to use the @fullmeasure.io/capacitor-google-login package for Google login in Capacitor"
created_at: "2022-01-25"
published: true
slug: capacitor-google-login
---

# Using the @fullmeasure.io/capacitor-google-login Package

In this tutorial, we will learn how to use the `@fullmeasure.io/capacitor-google-login` package to implement Google login in a Capacitor application. This package provides a simple and straightforward way to integrate Google login functionality into your app.

## Installation

To get started, we need to install the `@fullmeasure.io/capacitor-google-login` package. Open your terminal and run the following command:

```sh
npm install --save @fullmeasure.io/capacitor-google-login
```

## Setup

Once the package is installed, we need to update our Capacitor dependencies. Run the following command to update Capacitor:

```sh
npx cap update
```

## Configuration

After updating Capacitor, we can proceed with the configuration of the package. The configuration involves registering the plugin and initializing it with the required credentials.

### Web Configuration

In your web application, import the `GoogleLogin` class from the `@fullmeasure.io/capacitor-google-login` package and initialize it with your Google client ID and the desired scopes:

```javascript
import { GoogleLogin } from '@fullmeasure.io/capacitor-google-login';

GoogleLogin.initialize({
  clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
});
```

Make sure to replace `YOUR_CLIENT_ID` with your actual Google client ID.

### Native Configuration

For native platforms like iOS and Android, additional configuration steps are required.

#### iOS Configuration

To configure Google login for iOS, follow these steps:

1. Create a client ID for iOS in the Google Cloud Console.
2. Obtain the client ID and iOS URL scheme.
3. Add the iOS URL scheme to the `Info.plist` file of your iOS app. The URL scheme should be added as the value of the `REVERSED_CLIENT_ID` key in the `URL types` section.
4. Set the client ID in the `capacitor.config.json` file or download the `GoogleService-Info.plist` file and copy it to the `ios/App/App` folder of your app.

#### Android Configuration

To configure Google login for Android, follow these steps:

1. Create a client ID for Android in the Google Cloud Console.
2. Obtain the client ID.
3. Set the client ID in the `capacitor.config.json` file.

## Usage

With the package installed and configured, we can now proceed with using the Google login functionality in our app.

### Web Usage

In your web application, you can use the `GoogleLogin.signIn()` method to initiate the login process:

```javascript
GoogleLogin.signIn()
  .then((user) => {
    console.log('User:', user);
    // Handle the logged-in user
  })
  .catch((error) => {
    console.error('Error:', error);
    // Handle the error
  });
```

### Native Usage

For native platforms, we need to handle the login process differently.

#### iOS Usage

In your iOS app, you can use the `GoogleLogin.signIn()` method to initiate the login process:

```swift
import Capacitor
import CapacitorGoogleLogin

@objc(GoogleLoginPlugin)
public class GoogleLoginPlugin: CAPPlugin {
  @objc func signIn(_ call: CAPPluginCall) {
    GoogleLogin.signIn { (response, error) in
      if let error = error {
        call.reject(error.localizedDescription)
      } else if let response = response {
        let result = JSObject([
          "idToken": response.idToken,
          "accessToken": response.accessToken,
          // Add any other required properties
        ])
        call.resolve(result)
      } else {
        call.reject("Unknown error")
      }
    }
  }
}
```

#### Android Usage

In your Android app, you can use the `GoogleLogin.signIn()` method to initiate the login process:

```java
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginResult;
import com.getcapacitor.annotation.CapacitorPlugin;
import io.fullmeasure.capacitorgooglelogin.GoogleLogin;

@CapacitorPlugin(name = "GoogleLogin")
public class GoogleLoginPlugin extends com.getcapacitor.plugin.CapacitorPlugin {

    @PluginMethod
    public void signIn(PluginCall call) {
        GoogleLogin.signIn(new GoogleLoginCallback() {
            @Override
            public void onSuccess(GoogleSignInAccount account) {
                JSObject result = new JSObject();
                result.put("idToken", account.getIdToken());
                result.put("accessToken", account.getAccessToken());
                // Add any other required properties
                call.resolve(result);
            }

            @Override
            public void onFailure(Exception e) {
                call.reject(e.getMessage());
            }
        });
    }
}
```

## Conclusion

In this tutorial, we have learned how to install, configure, and use the `@fullmeasure.io/capacitor-google-login` package for Google login in a Capacitor application. We covered both web and native platforms and provided code examples for each platform. Now you can integrate Google login functionality into your app and enhance the user experience.