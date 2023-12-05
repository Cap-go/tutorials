---
title: "Using @dimorder/capacitor-action-extension Package"
description: "This tutorial will guide you through the steps of using the @dimorder/capacitor-action-extension package in your Capacitor projects."
created_at: "2022-05-01"
published: true
slug: "capacitor-action-extension"
---

# Using @dimorder/capacitor-action-extension Package

In this tutorial, we will go through the steps of using the `@dimorder/capacitor-action-extension` package in your Capacitor projects. This package provides additional actions that can be used in Capacitor applications to enhance functionality and improve user experience. 

## Installation

To begin, make sure you have a Capacitor project set up. If not, you can create one using the following command:

```bash
npx create-capacitor-app my-app
cd my-app
```

Once you have your Capacitor project ready, you can install the `@dimorder/capacitor-action-extension` package by running the following command:

```bash
npm install @dimorder/capacitor-action-extension
```

## Usage

After the installation, you can import and use the actions provided by the `@dimorder/capacitor-action-extension` package in your Capacitor project. 

First, import the required action from the package in your TypeScript file:

```javascript
import { MyAction } from '@dimorder/capacitor-action-extension';
```

Next, you can use the imported action in your code. For example, let's say we want to perform a custom action when a button is clicked. We can define an `onClick` event handler where the action is triggered:

```javascript
const button = document.getElementById('my-button');

button.addEventListener('click', () => {
  MyAction.perform();
});
```

Make sure to replace `my-button` with the actual ID of your button element. 

That's it! You have successfully integrated the `@dimorder/capacitor-action-extension` package into your Capacitor project.

## Conclusion

In this tutorial, we explored how to use the `@dimorder/capacitor-action-extension` package in your Capacitor projects. We learned how to install the package and use the provided actions to enhance the functionality of our application. By following these steps, you can easily add new actions to your Capacitor projects and improve the user experience.

Remember to refer to the official documentation of the `@dimorder/capacitor-action-extension` package for more detailed information on its usage.

Happy coding!