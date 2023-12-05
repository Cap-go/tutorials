---
title: "Using the Stripe Bluetooth Reader"
description: "This tutorial will guide you through the process of using the Stripe Bluetooth Reader with your application."
created_at: "2022-10-10"
published: true
slug: "stripe-bluetooth-reader"
---

# Using the Stripe Bluetooth Reader

In this tutorial, we will go through the steps to use the Stripe Bluetooth Reader with your application. The Stripe Bluetooth Reader is a device that allows you to accept card payments using Bluetooth technology.

## Prerequisites

Before we begin, make sure you have the following:

- A Stripe account
- A compatible mobile device
- The Stripe Bluetooth Reader

## Step 1: Install the Package

First, you need to install the `stripe-bluetooth-reader` package. You can do this by running the following command:

```bash
npm install stripe-bluetooth-reader
```

or

```bash
yarn add stripe-bluetooth-reader
```

## Step 2: Set Up the Bluetooth Connection

To use the Stripe Bluetooth Reader, you need to establish a Bluetooth connection between your mobile device and the reader. Follow these steps:

1. Turn on the Stripe Bluetooth Reader by pressing and holding the power button until the LED light starts blinking.
2. Enable Bluetooth on your mobile device and navigate to the Bluetooth settings.
3. Scan for available devices and select the Stripe Bluetooth Reader from the list.
4. Follow the on-screen prompts to pair and connect the reader to your mobile device.

## Step 3: Initialize the Stripe Bluetooth Reader

Once the Bluetooth connection is established, you need to initialize the Stripe Bluetooth Reader in your application. This step typically involves obtaining the necessary API keys from your Stripe account and setting up the necessary configurations. Consult the documentation of the `stripe-bluetooth-reader` package for the specific instructions.

## Step 4: Accept Card Payments

With the Stripe Bluetooth Reader initialized, you can now start accepting card payments. This typically involves displaying a payment form to the user and handling the payment request on your server. Again, consult the documentation of the `stripe-bluetooth-reader` package for the specific instructions on how to implement this.

## Step 5: Handle Transaction Responses

After a card payment is made, you will receive a response from the Stripe Bluetooth Reader. This response typically contains information such as the payment status and the transaction details. You should handle these responses accordingly based on your application's logic. Refer to the documentation of the `stripe-bluetooth-reader` package for more details on how to handle transaction responses.

## Conclusion

In this tutorial, we have learned how to use the Stripe Bluetooth Reader with your application. We covered the installation of the `stripe-bluetooth-reader` package, setting up the Bluetooth connection, initializing the reader, accepting card payments, and handling transaction responses. With this knowledge, you can now integrate the Stripe Bluetooth Reader into your application and start accepting card payments.