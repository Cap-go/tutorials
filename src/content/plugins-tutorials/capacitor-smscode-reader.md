---
title: "Tutorial: Using the capacitor-smscode-reader package"
description: "A step-by-step guide on how to use the capacitor-smscode-reader package"
created_at: "2021-07-14"
published: true
slug: "capacitor-smscode-reader"
---

# Tutorial: Using the capacitor-smscode-reader package

In this tutorial, we will learn how to use the `capacitor-smscode-reader` package to easily read SMS verification codes in your Capacitor app.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor CLI (`npm install -g capacitor`)
- Android Studio or Xcode (depending on the target platform)
- Node.js and npm

## Step 1: Create a new Capacitor project

First, let's create a new Capacitor project. Open your terminal and navigate to the desired folder where you want to create the project. Run the following commands:

```bash
npx @capacitor/cli create
```

Follow the prompts to set up the project name, package name, and app package ID. Choose the "blank" template when prompted.

## Step 2: Install the capacitor-smscode-reader package

Once the project is created, navigate to the project folder and install the `capacitor-smscode-reader` package:

```bash
npm install capacitor-smscode-reader
```

## Step 3: Configure the package for each platform

### Android

Open the `android/app/src/main/java/your/package/MainActivity.java` file. Import the `com.mooveit.library.FakeSMS` package and add the following lines inside the `onCreate` method:

```java
import com.mooveit.library.FakeSMS;
...
@Override
public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    registerPlugin(CapacitorSmsCodeReader.class);
    FakeSMS.startReception(this);
    ...
}
```

### iOS

Open the `ios/App/AppDelegate.swift` file. Import the `CapacitorSmsCodeReader` package and add the following lines inside the `application(_:didFinishLaunchingWithOptions:)` method:

```swift
import CapacitorSmsCodeReader
...
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    // Override point for customization after application launch.
    
    let viewController = ... // Your view controller
    CapacitorSmsCodeReader.registerPlugin(viewController)
    ...
    return true
}
```

## Step 4: Add the SMS code reader functionality

In your project's main component or page, import the `capacitor-smscode-reader` package:

```javascript
import { Plugins } from '@capacitor/core';
const { SmsCodeReader } = Plugins;
```

To read the SMS verification code, use the `SmsCodeReader.getVerificationCode()` method. This method returns a promise that resolves with the code if found, or rejects if the code cannot be retrieved.

```javascript
SmsCodeReader.getVerificationCode()
  .then((result) => {
    const code = result.code;
    console.log('Verification code:', code);
    // Use the code for verification or further processing
  })
  .catch((error) => {
    console.error('Failed to retrieve verification code:', error);
  });
```

## Step 5: Test the functionality

You can now build and run your app on the desired platform to test the SMS code reader functionality. Make sure the device or emulator has the necessary permissions to read SMS messages.

## Conclusion

In this tutorial, we have learned how to use the `capacitor-smscode-reader` package to easily read SMS verification codes in a Capacitor app. This package provides a convenient way to automate the code retrieval process and improve the user experience.

Feel free to explore the official documentation of `capacitor-smscode-reader` for more advanced features and customization options.

Remember to update the frontmatter values for the title, description, created_at, published, and slug fields based on your blog requirements.