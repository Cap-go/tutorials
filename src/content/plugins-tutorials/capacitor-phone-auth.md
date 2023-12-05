---
title: "Using the capacitor-phone-auth Package"
description: "In this tutorial, we will learn how to use the capacitor-phone-auth package to implement phone authentication in your Capacitor app."
created_at: "October 19, 2022"
published: true
slug: "capacitor-phone-auth"
---

# Using the capacitor-phone-auth Package

[Capacitor](https://capacitorjs.com/) is a cross-platform app runtime that allows you to build web apps that run natively on iOS, Android, and other platforms. The `capacitor-phone-auth` package provides a simple way to implement phone authentication in your Capacitor app, using SMS verification.

In this tutorial, we will walk through the process of installing the `capacitor-phone-auth` package, configuring it in your project, and using it to authenticate users via their phone numbers.

## Prerequisites

Before starting, make sure you have the following prerequisites installed:

- Node.js and npm (Node Package Manager)
- Capacitor CLI

## Step 1: Install the capacitor-phone-auth Package

To install the `capacitor-phone-auth` package, open your terminal and navigate to your project directory. Run the following command:

```bash
npm install capacitor-phone-auth
```

This will download and install the package in your project.

## Step 2: Configure the Package

Next, we need to configure the `capacitor-phone-auth` package in our project. Open the `capacitor.config.json` file in the root directory of your project, and add the following lines:

```json
"plugins": {
  "PhoneAuth": {
    "ios": {
      "clientId": "YOUR_IOS_CLIENT_ID"
    },
    "android": {
      "clientId": "YOUR_ANDROID_CLIENT_ID"
    }
  }
}
```

Replace `YOUR_IOS_CLIENT_ID` and `YOUR_ANDROID_CLIENT_ID` with the respective client IDs obtained from the Firebase Console. These client IDs are used for authentication with Firebase.

## Step 3: Import and Use the Package

Now that we have installed and configured the `capacitor-phone-auth` package, we can import it into our project and start using it for phone authentication.

First, import the `PhoneAuth` plugin at the top of your JavaScript or TypeScript file:

```javascript
import { Plugins } from '@capacitor/core';

const { PhoneAuth } = Plugins;
```

To trigger phone authentication, you can use the following code:

```javascript
async function authenticateWithPhoneNumber(phoneNumber) {
  try {
    const response = await PhoneAuth.authenticate(phoneNumber);
    if (response.success) {
      // User successfully verified their phone number
      console.log('Phone number verified!');
    } else {
      // Error occurred during authentication
      console.error('Phone number verification failed:', response.error);
    }
  } catch (error) {
    // Exception occurred during authentication
    console.error('Phone number verification failed:', error);
  }
}
```

In the `authenticateWithPhoneNumber` function, we invoke the `PhoneAuth.authenticate` method with the `phoneNumber` parameter. This method initiates the SMS verification process and returns a response object.

If the verification is successful, the `success` property of the response object will be true, and you can proceed with any additional logic for authenticated users. Otherwise, the `error` property will contain the error message.

## Conclusion

In this tutorial, we learned how to use the `capacitor-phone-auth` package to implement phone authentication in your Capacitor app. We covered the installation, configuration, and usage of the package, allowing you to verify phone numbers and authenticate users securely.

Remember, phone authentication is just one aspect of user authentication in your app. You may need to implement additional security measures and backend integration to fully authenticate and authorize users in your app.

I hope this tutorial has been helpful in getting you started with the `capacitor-phone-auth` package. Happy coding!