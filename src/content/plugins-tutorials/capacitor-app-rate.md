---
title: "Using the capacitor-app-rate Package"
description: "A tutorial on how to use the capacitor-app-rate package to add rating functionality to your Capacitor app."
created_at: "2022-01-01"
published: true
slug: capacitor-app-rate
---

# Using the capacitor-app-rate Package

In this tutorial, we will learn how to use the capacitor-app-rate package to add rating functionality to your Capacitor app.

## Step 1: Installing capacitor-app-rate

To get started, we need to install the capacitor-app-rate package. Open your terminal and run the following command:

```bash
npm install capacitor-app-rate
```

This will install the capacitor-app-rate package in your project.

## Step 2: Importing the Plugin

Next, we need to import the capacitor-app-rate plugin in our project. Open the file where you want to use the plugin and add the following import statement at the top:

```javascript
import { AppRate } from 'capacitor-app-rate';
```

## Step 3: Using the Plugin

Now that we have imported the plugin, we can use its functionality in our app. Here's an example of how to show a rating prompt to the user:

```javascript
const showRatingPrompt = async () => {
  await AppRate.promptForRating();
};
```

In the above code, we define a function `showRatingPrompt` that calls the `promptForRating` method of the `AppRate` object.

## Step 4: Customizing the Prompt

The capacitor-app-rate package allows you to customize the rating prompt according to your app's needs. Here's an example of how to customize the prompt:

```javascript
const showRatingPrompt = async () => {
  const options = {
    appName: 'My App',
    promptTitle: 'Enjoying My App?',
    promptMessage: 'If you enjoy using My App, please take a moment to rate it.',
    cancelButtonLabel: 'No, Thanks',
    rateButtonLabel: 'Rate Now',
    laterButtonLabel: 'Remind Me Later',
    promptAtLaunch: true
  };

  await AppRate.promptForRating(options);
};
```

In the above code, we define an `options` object with various properties like `promptTitle`, `promptMessage`, `cancelButtonLabel`, etc. These properties allow you to customize the text and labels in the rating prompt.

## Step 5: Handling User Actions

After the rating prompt is shown, the user can perform different actions like rating the app, dismissing the prompt, or choosing to rate later. Here's how you can handle these user actions:

```javascript
const handleRatingPrompt = async () => {
  const { action } = await AppRate.handleUserRating();

  if (action === 'rated') {
    // User has rated the app
    console.log('User has rated the app');
  } else if (action === 'dismissed') {
    // User has dismissed the prompt
    console.log('User has dismissed the prompt');
  } else if (action === 'remind-later') {
    // User has chosen to rate later
    console.log('User has chosen to rate later');
  }
};
```

In the above code, we define a function `handleRatingPrompt` that calls the `handleUserRating` method of the `AppRate` object. It returns an object with the `action` property indicating the user's action.

## Conclusion

In this tutorial, we have learned how to use the capacitor-app-rate package to add rating functionality to your Capacitor app. We covered the installation process, importing the plugin, showing a rating prompt, customizing the prompt, and handling user actions. You can now enhance your app by integrating user ratings and feedback.