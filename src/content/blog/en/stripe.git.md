---
title: Using @capacitor-community/stripe Package Tutorial
description: >-
  A step-by-step guide on how to use the @capacitor-community/stripe package for
  implementing native Stripe functionality in a Capacitor project.
created_at: 'October 14, 2021'
published: true
slug: stripe.git
locale: en
---

# Using @capacitor-community/stripe Package Tutorial

This tutorial will guide you through the process of using the @capacitor-community/stripe package to implement native Stripe functionality in your Capacitor project. 

## Installation

First, install the package using npm:

```bash
npm install @capacitor-community/stripe
```

or using yarn:

```bash
yarn add @capacitor-community/stripe
```

Then, sync the native files:

```bash
npx cap sync
```

## Configuration

### iOS

Follow all the necessary Stripe instructions under the ["Configure your app"](https://stripe.com/docs/terminal/sdk/ios#configure) section.

### Android

Add the `ACCESS_FINE_LOCATION` permission to your app's manifest file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    package="com.stripe.example.app">
    
    <!-- Add ACCESS_FINE_LOCATION permission here -->
</manifest>
```

## Implementation

Now you are ready to implement the Stripe functionality in your Capacitor project using the @capacitor-community/stripe package. Follow the documentation provided by the package to integrate payments using Stripe.

### Example Usage

Here is an example of how you can use the package in your project:

```javascript
import { Plugins } from '@capacitor/core';
const { Stripe } = Plugins;

const stripe = new Stripe();

// Use Stripe methods for payment processing
```

This tutorial covers the basic installation and configuration steps for using the @capacitor-community/stripe package in your Capacitor project. For advanced features and customization, refer to the package's official documentation.
```
```
