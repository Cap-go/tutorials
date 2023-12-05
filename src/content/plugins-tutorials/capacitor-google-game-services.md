---
title: "Using the capacitor-google-game-services Package"
description: "A tutorial on how to use the capacitor-google-game-services package in your Capacitor app."
created_at: "2022-10-20"
published: true
slug: capacitor-google-game-services
---

# Using the capacitor-google-game-services Package

This tutorial will guide you through the process of integrating the `capacitor-google-game-services` package into your Capacitor app. The `capacitor-google-game-services` package allows you to leverage Google Play Games Services in your app, enabling features such as leaderboards, achievements, and real-time multiplayer functionality.

## Installation

To get started, make sure you have Capacitor installed in your project. If not, you can install it globally by running the following command:

```
npm install -g @capacitor/cli
```

Next, navigate to your Capacitor project directory and install the `capacitor-google-game-services` package:

```
npm install capacitor-google-game-services
```

## Configuration

Once the package is installed, you need to configure it with your Google Play Games Services credentials. Follow these steps to set up your project:

1. Go to the [Google Play Console](https://play.google.com/console) and create a new project.

2. Enable the Google Play Games Services API for your project.

3. Generate a configuration file (JSON) that contains your project's credentials.

4. Download the configuration file and save it in your project's directory, preferably under `android/app/` for Android or `ios/App/` for iOS.

## Android Configuration

For Android, you need to update the `google-services.json` file. Move the downloaded file to `android/app/` in your project directory.

Next, open the `AndroidManifest.xml` file located at `android/app/src/main/` and add the following metadata tags under the `<application>` tag:

```xml
<meta-data android:name="com.google.android.gms.games.APP_ID" android:value="@string/app_id" />
<meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="@string/app_id" />
```

Note: Replace `@string/app_id` with the ID from your configuration file.

## iOS Configuration

For iOS, you need to update the `GoogleService-Info.plist` file. Move the downloaded file to the root directory of your Xcode project and add it to all targets.

To initialize the package on iOS, you need to add the following code to your `AppDelegate.swift` file:

```swift
import CapacitorGoogleGameServices

...

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

    ...

    CapacitorGoogleGameServices.setup()

    ...

    return true
}
```

## Usage

With the package installed and configured, you can now use the provided APIs to access various Google Play Games Services features in your app.

For example, to authenticate the user and sign them in to their Google Play Games Services account, use the following code:

```typescript
import { Plugins } from '@capacitor/core';
import 'capacitor-google-game-services';

const { CapacitorGoogleGameServices } = Plugins;

...

async function signIn() {
    const result = await CapacitorGoogleGameServices.signIn();
    
    if (result.success) {
        console.log('Signed in successfully!', result.player);
    } else {
        console.error('Sign-in failed.');
    }
}
```

You can refer to the package documentation for more information on available APIs and features.

## Conclusion

In this tutorial, you learned how to integrate the `capacitor-google-game-services` package into your Capacitor app. By following the steps outlined here, you can enable Google Play Games Services functionality in your app and provide a more engaging gaming experience for your users.

Remember to consult the package documentation for further details and API references. Happy gaming!
