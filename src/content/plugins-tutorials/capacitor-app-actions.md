---
title: "Tutorial: Using @koodos/capacitor-app-actions package"
description: "In this tutorial, we will learn how to use the @koodos/capacitor-app-actions package to enhance your Capacitor app with custom actions."
created_at: "2021-10-16"
published: true
slug: "capacitor-app-actions"
---

# Tutorial: Using @koodos/capacitor-app-actions package

In this tutorial, we will explore how to leverage the power of the @koodos/capacitor-app-actions package to enhance your Capacitor app with custom actions. 

## Prerequisites

Before we begin, make sure you have the following:

- Node.js installed on your machine
- Capacitor set up in your project

## Step 1: Installation

To get started, we need to install the @koodos/capacitor-app-actions package. Open your terminal and navigate to your project directory. Run the following command:

```bash
npm install @koodos/capacitor-app-actions
```

This will install the package and add it to your project's dependencies.

## Step 2: Importing the package

Next, we need to import the @koodos/capacitor-app-actions package in our code. Open the file where you want to use the package and add the following import statement:

```typescript
import { AppActionsPlugin } from '@koodos/capacitor-app-actions';
```

## Step 3: Initializing the plugin

Before we can use the package, we need to initialize it. Add the following code snippet to initialize the plugin:

```typescript
const appActions = new AppActionsPlugin();
appActions.initialize();
```

## Step 4: Using custom actions

Now that we have initialized the plugin, we can start using custom actions in our Capacitor app. Custom actions allow you to perform platform-specific tasks that are not covered by the default Capacitor API.

For example, let's say we want to show a toast message on iOS when a button is clicked. We can define a custom action for this:

```typescript
appActions.defineCustomAction({
  name: 'showToast',
  async callback({message}) {
    if (Capacitor.isPluginAvailable('Toast')) {
      await Toast.show({
        text: message,
        duration: 'short'
      });
    }
  }
});
```

In this code snippet, we define a custom action called `showToast` that takes a `message` parameter. Inside the callback function, we check if the `Toast` plugin is available (since it's only available on iOS). If it is available, we show a toast message with the provided text.

Now, we can call this custom action in our app:

```typescript
appActions.callCustomAction('showToast', {message: 'Hello from custom action!'});
```

This will trigger the custom action and show a toast message with the text 'Hello from custom action!' on iOS.

## Conclusion

In this tutorial, we have learned how to use the @koodos/capacitor-app-actions package to add custom actions to your Capacitor app. Custom actions give you the flexibility to extend the functionality of your app beyond what is provided by the default Capacitor API. Experiment with different custom actions and explore the possibilities for your app!

Remember to consult the official documentation of the @koodos/capacitor-app-actions package for more details and advanced usage.

Happy coding!