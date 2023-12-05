# Tutorial: Using @jirokun/capacitor-simple-subscription Package

---

## Introduction

In this tutorial, we will explore how to use the `@jirokun/capacitor-simple-subscription` package in your Capacitor project. This package provides easy-to-use subscription management functionality for your mobile application. We will cover the installation process, basic usage, and key features of the package.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor project set up and initialized
- Node.js and npm installed on your machine

## Installation

To install the `@jirokun/capacitor-simple-subscription` package, follow these steps:

1. Open your terminal or command prompt.

2. Navigate to your project directory.

3. Run the following command to install the package:

   ```bash
   npm install @jirokun/capacitor-simple-subscription
   ```

4. Once the installation is complete, you can import the package in your project:

   ```javascript
   import { SimpleSubscription } from '@jirokun/capacitor-simple-subscription';
   ```

## Basic Usage

Now let's explore the basic usage of the `@jirokun/capacitor-simple-subscription` package:

1. Initialize the subscription manager:

   ```javascript
   const subscription = new SimpleSubscription();
   ```

2. Subscribe to a product:

   ```javascript
   const productId = 'your_product_id';
   const result = await subscription.subscribe(productId);
   ```

   The `subscribe` method will prompt the user to complete the subscription. The result will indicate whether the subscription was successful or not.

3. Check if the user has an active subscription:

   ```javascript
   const hasSubscription = await subscription.hasActiveSubscription();
   ```

   The `hasActiveSubscription` method will return a boolean value indicating whether the user has an active subscription.

4. Cancel a subscription:

   ```javascript
   const cancelResult = await subscription.cancelSubscription();
   ```

   The `cancelSubscription` method will cancel the user's subscription. The result will indicate whether the cancellation was successful or not.

## Key Features

The `@jirokun/capacitor-simple-subscription` package offers several key features to simplify subscription management in your application:

- Easy installation and setup
- Simple API for subscription management
- Support for various payment gateways
- Built-in methods for checking subscription status and cancellation

---

This concludes our tutorial on using the `@jirokun/capacitor-simple-subscription` package. We have covered the installation process, basic usage, and key features of the package. You are now ready to integrate subscription functionality into your Capacitor project.

Please refer to the official documentation of the package for more detailed information and advanced usage scenarios.

---
---
---
---

title: "Tutorial: Using @jirokun/capacitor-simple-subscription Package"
description: "Learn how to use the @jirokun/capacitor-simple-subscription package to manage subscriptions in your Capacitor application."
created_at: "2021-10-01"
published: true
slug: capacitor-simple-subscription