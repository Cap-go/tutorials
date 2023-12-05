---
title: "Using getfeedback-capacitor Package"
description: "A tutorial on how to use the getfeedback-capacitor package to integrate GetFeedback with a Capacitor app."
created_at: "2022-10-20"
published: true
slug: "getfeedback-g4a-capacitor"
---

# Using getfeedback-capacitor Package

In this tutorial, we will learn how to integrate the GetFeedback service with a Capacitor app using the `getfeedback-capacitor` package.

## Installation

To get started, you need to install the `getfeedback-capacitor` package in your Capacitor app. 

```bash
npm install getfeedback-capacitor
```

## Configuration

After installing the package, you need to configure the GetFeedback service in your Capacitor project.

### Step 1: Import the package

In your app's main entry file (e.g., `index.ts` or `main.ts`), import the `getfeedback-capacitor` package.

```typescript
import 'getfeedback-capacitor';
```

### Step 2: Initialize GetFeedback

In the same entry file, initialize the GetFeedback service by calling the `init` method and passing your GetFeedback API key.

```typescript
import { Plugins } from '@capacitor/core';
const { GetFeedback } = Plugins;

GetFeedback.init({
  apiKey: 'YOUR_GETFEEDBACK_API_KEY_HERE',
});
```

Replace `'YOUR_GETFEEDBACK_API_KEY_HERE'` with your actual GetFeedback API key.

## Usage

Once you have configured the GetFeedback service in your Capacitor app, you can start using its features.

### Display a feedback form

To display a feedback form to the user, call the `showFeedbackForm` method.

```typescript
import { Plugins } from '@capacitor/core';
const { GetFeedback } = Plugins;

GetFeedback.showFeedbackForm()
  .then(result => {
    // Handle the result
    console.log(result);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });
```

The `showFeedbackForm` method opens a modal dialog with the feedback form. You can handle the result of the feedback submission in the `then` block and handle any errors in the `catch` block.

### Customization options

The `showFeedbackForm` method also accepts an optional parameter for customization options. You can use these options to customize the appearance and behavior of the feedback form.

```typescript
GetFeedback.showFeedbackForm({
  accentColor: '#FF0000',
  closeButtonVisible: true,
})
  .then(result => {
    // Handle the result
    console.log(result);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });
```

In the example above, we set the accent color to red (`#FF0000`) and enable the close button on the feedback form.

## Conclusion

In this tutorial, we learned how to integrate the GetFeedback service with a Capacitor app using the `getfeedback-capacitor` package. We covered the installation, configuration, and basic usage of the package. You can now easily add feedback forms to your Capacitor app and collect valuable user feedback.

Happy coding!