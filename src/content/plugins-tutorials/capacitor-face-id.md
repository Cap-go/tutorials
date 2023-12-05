---
title: "Tutorial: Using the capacitor-face-id Package"
description: "Learn how to use the capacitor-face-id package to integrate face identification in your Capacitor app."
created_at: "2022-08-30"
published: true
slug: "capacitor-face-id"
---

# Tutorial: Using the capacitor-face-id Package

In this tutorial, we will learn how to integrate face identification functionality in a Capacitor app using the capacitor-face-id package. Face identification is a powerful feature that enables users to authenticate themselves by simply scanning their face.

## Prerequisites

Before getting started, make sure you have the following requirements in place:

1. Capacitor installed globally on your machine.
2. A Capacitor app project set up and initialized.

## Step 1: Install the capacitor-face-id Package

To begin, we need to install the capacitor-face-id package in our Capacitor project. Open your project directory in the terminal and run the following command:

```bash
npm install capacitor-face-id
```

This will install the capacitor-face-id package and add it as a dependency in your `package.json` file.

## Step 2: Add Necessary Permissions to Android Manifest and Info.plist

In order to use face identification, we need to add the necessary permissions to the Android manifest and Info.plist files. Open the `android/app/src/main/AndroidManifest.xml` file and add the following permissions inside the `<manifest>` tag:

```xml
<uses-permission android:name="android.permission.USE_BIOMETRIC" />
<uses-permission android:name="android.permission.USE_FINGERPRINT" />
```

Next, open the `ios/App/App/Info.plist` file and add the following key-value pairs inside the `<dict>` tag:

```xml
<key>NSFaceIDUsageDescription</key>
<string>We need your face to authenticate you.</string>
```

These permissions and usage description are required by the operating systems to allow access to the face identification feature.

## Step 3: Import and Initialize the Face ID Plugin

To start using the face identification functionality, we need to import and initialize the face ID plugin in our project. Open the `src/App.js` file and add the following code at the top:

```javascript
import { Plugins } from '@capacitor/core';

const { FaceId } = Plugins;
```

Next, we will initialize the face ID plugin inside the `componentDidMount` lifecycle method. Add the following code inside the component:

```javascript
componentDidMount() {
  FaceId.initialize();
}
```

This method initializes the face ID plugin and prepares it for use.

## Step 4: Implement Face Identification

Now, let's implement the actual face identification functionality. Create a new async function called `scanFace` inside your component:

```javascript
async scanFace() {
  try {
    const result = await FaceId.scan();
    
    if (result.success) {
      console.log('Face identification successful!');
      // Perform actions upon successful identification
    } else {
      console.log('Face identification failed!');
      // Handle identification failure
    }
  } catch (error) {
    console.error('Face identification error:', error);
    // Handle error
  }
}
```

The `scanFace` function uses the `FaceId.scan` method to initiate the face identification process. Upon completion, the result object will contain a `success` boolean indicating whether the identification was successful or not.

## Step 5: Trigger Face Identification

To trigger the face identification process, we can add a button or any other UI element in our component's render method. When the button is clicked, we will call the `scanFace` function.

```javascript
render() {
  return (
    <div>
      <button onClick={this.scanFace}>Scan Face</button>
    </div>
  );
}
```

That's it! You have now successfully implemented face identification in your Capacitor app using the capacitor-face-id package.

## Conclusion

In this tutorial, we learned how to integrate face identification functionality in a Capacitor app using the capacitor-face-id package. We covered the installation process, adding necessary permissions, initializing the plugin, implementing face identification, and triggering the identification process. You can now enhance the security of your app by allowing users to authenticate themselves with their face.

If you encounter any issues or have any further questions, feel free to reach out to the Capacitor community for assistance.

Happy coding!