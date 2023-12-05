---
title: "Using capacitor-phone-hint: A Tutorial"
description: "In this tutorial, we will learn how to use the capacitor-phone-hint package to add phone number hint functionality to your Capacitor app."
created_at: "2021-11-25"
published: true
slug: "capacitor-phone-hint"
---

# Using capacitor-phone-hint: A Tutorial

In this tutorial, we will learn how to use the `capacitor-phone-hint` package to add phone number hint functionality to your Capacitor app.

## Step 1: Installation

First, let's install the `capacitor-phone-hint` package in your Capacitor app. Run the following command in your app's root directory:

```bash
npm install capacitor-phone-hint
```

## Step 2: Import the Plugin

Next, we need to import the plugin in our project. Open the `capacitor.config.ts` file in your app's root directory and add the following import statement:

```typescript
import 'capacitor-phone-hint';
```

## Step 3: Add Phone Hint to an Input Field

Now, let's add the phone number hint functionality to an input field in our app. Open the file where you have the desired input field and add the `phoneHint` directive to it:

```html
<input type="tel" placeholder="Phone Number" [phoneHint]="{ country: 'US' }">
```

Make sure to replace `'US'` with the desired country code.

## Step 4: Build and Run the App

Finally, build and run your Capacitor app to see the phone number hint functionality in action. Use the following command to build your app:

```bash
npx cap build
```

Then, depending on your target platform, run one of the following commands to launch your app:

For iOS:

```bash
npx cap open ios
```

For Android:

```bash
npx cap open android
```

That's it! You have successfully added phone number hint functionality to your Capacitor app using the `capacitor-phone-hint` package.

Remember to consult the package's documentation for more details and customization options.

Happy coding!