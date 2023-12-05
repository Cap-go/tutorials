---
title: "Tutorial: Using capacitor-heartland-form Package"
description: "In this tutorial, we will learn how to use the capacitor-heartland-form package to integrate the Heartland payment gateway into your Capacitor app."
created_at: "2021-10-20"
published: true
slug: capacitor-heartland-form
---

# Tutorial: Using capacitor-heartland-form Package

In this tutorial, we will learn how to use the `capacitor-heartland-form` package to integrate the Heartland payment gateway into your Capacitor app.

## Prerequisites

Before we start, make sure you have the following prerequisites:

- Node.js and npm installed on your machine.
- A Capacitor app set up and configured.

## Installation

To get started, let's install the `capacitor-heartland-form` package. Open your terminal and navigate to your Capacitor app directory. Run the following command:

```bash
npm install capacitor-heartland-form
```

This will install the package and its dependencies into your project.

## Configuration

Next, we need to configure the Heartland payment gateway. Follow the steps below:

1. Sign up for a Heartland payment gateway account if you don't already have one.
2. Retrieve your Heartland API credentials from the Heartland developer portal.
3. Open your Capacitor app's `capacitor.config.json` file and add the following configuration:

```json
{
  "plugins": {
    "HeartlandForm": {
      "apiToken": "YOUR_API_TOKEN",
      "apiSecret": "YOUR_API_SECRET"
    }
  }
}
```

Replace `YOUR_API_TOKEN` and `YOUR_API_SECRET` with your actual Heartland API credentials.

## Usage

Now that we have the capacitor-heartland-form package installed and configured, let's see how to use it in our app.

First, import the `HeartlandForm` API from the `capacitor-heartland-form` package in your JavaScript file:

```javascript
import { HeartlandForm } from 'capacitor-heartland-form';
```

Next, you can use the `HeartlandForm` API methods to process payments. For example, to initialize the payment form, you can call the `initializeForm` method:

```javascript
HeartlandForm.initializeForm({
  formId: 'payment-form',
  onSuccess: (token) => {
    // Handle successful payment
  },
  onError: (error) => {
    // Handle payment error
  }
});
```

In the code above, we provide the `formId` of the HTML form element that contains the payment details. We also define callbacks for `onSuccess` and `onError` to handle the payment result.

## Conclusion

In this tutorial, we learned how to use the `capacitor-heartland-form` package to integrate the Heartland payment gateway into a Capacitor app. We installed the package, configured the Heartland API credentials, and demonstrated how to use the `HeartlandForm` API methods to process payments.

Feel free to explore the capacitor-heartland-form package further to customize and enhance the payment integration in your app.

That's it! You can now start accepting payments securely using the Heartland payment gateway in your Capacitor app.

