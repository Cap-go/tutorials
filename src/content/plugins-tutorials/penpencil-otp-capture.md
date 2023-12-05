# Using the `penpencil-otp-capture` Package

## Introduction
In this tutorial, we will learn how to use the `penpencil-otp-capture` package to capture OTP (One-Time Password) in our application. OTP is commonly used for user verification and authentication purposes. The `penpencil-otp-capture` package provides an easy and efficient way to capture OTP entered by the user.

## Prerequisites
Before we get started, make sure you have the following prerequisites:
- Node.js and npm installed on your machine.
- An existing JavaScript or TypeScript project where you want to integrate OTP capture functionality.
- Basic knowledge of JavaScript or TypeScript.

## Step 1: Installation
To install the `penpencil-otp-capture` package, run the following command in your project directory:

```
npm install penpencil-otp-capture
```

## Step 2: Importing the Package
In the file where you want to use the OTP capture functionality, import the `penpencil-otp-capture` package:

```javascript
import { OtpCapture } from 'penpencil-otp-capture';
```

## Step 3: Initializing OtpCapture
Create an instance of the `OtpCapture` class and initialize it with the required configurations:

```javascript
const otpCapture = new OtpCapture({
  // Your configuration options here
});
```

## Step 4: Binding Events
To capture OTP entered by the user, you need to bind event handlers to the input fields. The `OtpCapture` class provides the `bindEvents` method for this purpose. Call the `bindEvents` method with the respective input field selectors:

```javascript
otpCapture.bindEvents({
  otpInputSelector: '#otp-input',
  submitButtonSelector: '#submit-button',
});
```

## Step 5: Handling OTP Capture
To handle the captured OTP, you can listen to the `otpCaptured` event emitted by the `OtpCapture` instance. Use the `on` method to listen and provide a callback function:

```javascript
otpCapture.on('otpCaptured', (otp) => {
  console.log('Captured OTP:', otp);
});
```

## Step 6: Cleanup
When you no longer need the OTP capture functionality, make sure to clean up the event listeners by calling the `cleanup` method:

```javascript
otpCapture.cleanup();
```

## Conclusion
In this tutorial, we learned how to use the `penpencil-otp-capture` package to capture OTP in our application. We covered installation, initialization, event binding, OTP capture handling, and cleanup. Now you can easily integrate OTP capture functionality into your project and enhance the user verification experience.

---

---
title: "Using the penpencil-otp-capture Package"
description: "Learn how to use the penpencil-otp-capture package to capture OTP (One-Time Password) in your application."
created_at: "2022-01-01"
published: true
slug: "penpencil-otp-capture"
---