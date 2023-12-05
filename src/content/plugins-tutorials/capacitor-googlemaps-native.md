---
title: "Using the @capacitor-community/capacitor-googlemaps-native Package"
description: "A tutorial on how to use the @capacitor-community/capacitor-googlemaps-native package to integrate native Google Maps functionality into your Capacitor app."
created_at: "2022-01-06"
published: true
slug: "capacitor-googlemaps-native"
---

# Using the @capacitor-community/capacitor-googlemaps-native Package

In this tutorial, we will explore how to use the `@capacitor-community/capacitor-googlemaps-native` package to integrate native Google Maps functionality into your Capacitor app. This package utilizes the native Google Maps SDKs for Android and iOS, providing improved performance and offline caching capabilities.

## Prerequisites

Before getting started, make sure you have the following prerequisites:

- Capacitor CLI installed globally: `npm install -g @capacitor/cli`
- Capacitor project created: `npx @capacitor/cli create`

## Installation

To install the package, run the following command in your Capacitor project's root directory:

```bash
npm install @capacitor-community/capacitor-googlemaps-native
```

## Configuration

After installing the package, you need to configure the native Google Maps SDKs for Android and iOS. Follow the steps below:

### Android Configuration

1. Open the `android/app/src/main/java/[YOUR_PACKAGE_NAME]/MainActivity.java` file.

2. Import the necessary packages:

```java
import com.getcapacitor.community.googlemaps.GoogleMaps;
```

3. Add the `GoogleMaps` plugin to the list of plugins in the `init` method:

```java
public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Add additional plugins here
      // ...

      // Add the GoogleMaps plugin
      add(GoogleMaps.class);
    }});
  }
}
```

4. Save the file and rebuild your Android project:

```bash
npx cap sync android
```

### iOS Configuration

1. Open the `ios/App/App/AppDelegate.swift` file.

2. Import the necessary packages:

```swift
import CapacitorCommunityGoogleMaps
```

3. Add the `GoogleMaps` plugin to the `application` method:

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  // ...

  // Register the Google Maps plugin
  let ___ = GoogleMaps.self

  // ...

  return true
}
```

4. Save the file and rebuild your iOS project:

```bash
npx cap sync ios
```

## Usage

Now that you have installed and configured the `@capacitor-community/capacitor-googlemaps-native` package, you can start using it in your project. Follow the examples in the official documentation [here](https://capacitor-community.github.io/google-maps/#/api) to learn how to integrate different Google Maps features, such as displaying a map, adding markers, and handling user interactions.

## Conclusion

In this tutorial, we covered the installation and configuration of the `@capacitor-community/capacitor-googlemaps-native` package. We also discussed how to use the package to integrate native Google Maps functionality into your Capacitor app. Now you can start building feature-rich maps in your app with improved performance and offline caching capabilities.

For more details and advanced usage, refer to the official documentation [here](https://capacitor-community.github.io/google-maps/).

Happy mapping!