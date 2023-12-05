---
title: "Using the ls-firebase-phoneauth Package"
description: "This tutorial will guide you on how to use the ls-firebase-phoneauth package to implement phone authentication in your Firebase project."
created_at: "2021-08-15"
published: true
slug: "firebasephoneauth"
---

# Using the ls-firebase-phoneauth Package

In this tutorial, we will walk through the process of using the ls-firebase-phoneauth package to implement phone authentication in your Firebase project. The ls-firebase-phoneauth package is a convenient wrapper that simplifies the integration of Firebase phone authentication into your application.

## Prerequisites

Before we begin, make sure you have the following:

1. A Firebase project created and configured. If you haven't done this, please refer to the official Firebase documentation for guidance on how to set up a Firebase project.

2. A basic understanding of React or React Native, as well as knowledge of how to set up a React or React Native project.

## Installation

To install the ls-firebase-phoneauth package, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your project directory.
3. Run the following command to install the package:

```bash
npm install ls-firebase-phoneauth
```

or

```bash
yarn add ls-firebase-phoneauth
```

## Usage

Once you have installed the package, you can start using it in your project. Here's an example of how to implement phone authentication using the ls-firebase-phoneauth package:

1. Import the necessary modules:

```javascript
import { FirebaseAuth } from 'ls-firebase-phoneauth';
```

2. Initialize the FirebaseAuth object with your Firebase project configuration:

```javascript
const firebaseAuth = new FirebaseAuth({
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  // Add other configuration options here
});
```

Make sure to replace `'YOUR_API_KEY'`, `'YOUR_AUTH_DOMAIN'`, and `'YOUR_PROJECT_ID'` with the corresponding values from your Firebase project.

3. Use the `firebaseAuth` object to perform phone authentication actions, such as sending verification codes and verifying user phone numbers. Here's an example of how to send a verification code to a user's phone number:

```javascript
firebaseAuth.sendVerificationCode(phoneNumber)
  .then((verificationId) => {
    // Handle the verification code sent successfully
    console.log('Verification code sent');
    console.log('Verification ID:', verificationId);
  })
  .catch((error) => {
    // Handle any errors that occur during the process
    console.error('Error sending verification code:', error);
  });
```

Replace `phoneNumber` with the user's phone number.

4. To verify the user's phone number with the verification code, use the `verifyPhoneNumber` method:

```javascript
firebaseAuth.verifyPhoneNumber(verificationId, verificationCode)
  .then((userCredential) => {
    // Handle phone number verification success
    console.log('Phone number verified');
    console.log('User credential:', userCredential);
  })
  .catch((error) => {
    // Handle any errors that occur during verification
    console.error('Error verifying phone number:', error);
  });
```

Replace `verificationId` with the verification ID received after sending the verification code, and `verificationCode` with the code entered by the user.

And that's it! You have successfully implemented phone authentication in your Firebase project using the ls-firebase-phoneauth package.

## Conclusion

In this tutorial, we covered the process of using the ls-firebase-phoneauth package to implement phone authentication in your Firebase project. We discussed the installation steps and provided examples of how to send verification codes and verify phone numbers. Now you can easily add phone authentication to your React or React Native application with Firebase.

Remember to refer to the official documentation for the ls-firebase-phoneauth package for more detailed information and additional functionalities.

If you encounter any issues or have any questions, don't hesitate to consult the package's documentation or reach out to the package maintainer for support.

Happy coding!