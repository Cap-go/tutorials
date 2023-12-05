---
title: "Using the alert-capacitor Package"
description: "In this tutorial, we will learn how to use the alert-capacitor package to display alerts in a Capacitor app."
created_at: "2021-10-15"
published: true
slug: "alert-capacitor"
---

# Using the alert-capacitor Package

The alert-capacitor package is a convenient way to display alert dialogs in your Capacitor app. It provides a simple API for creating and showing alerts with customizable options.

## Installation

To install the alert-capacitor package, run the following command:

```bash
npm install alert-capacitor
```

## Importing and Initializing

To use the package in your app, import and initialize it as follows:

```javascript
import { Plugins } from "@capacitor/core";
import { AlertCapacitor } from "alert-capacitor";

const { Alert } = Plugins;

const alertCapacitor = new AlertCapacitor();
```

## Showing an Alert

To display an alert dialog with a message and optional buttons, use the `show` method of the `AlertCapacitor` instance:

```javascript
alertCapacitor.show({
  title: "Alert",
  message: "This is an example alert.",
  buttons: [
    {
      text: "Ok",
      handler: () => {
        // Ok button was clicked
      }
    }
  ]
});
```

You can customize the title, message, and buttons of the alert as needed. The `handler` function of a button will be called when it is clicked.

## Conclusion

In this tutorial, we learned how to use the alert-capacitor package to display alerts in a Capacitor app. We covered the installation process, importing and initializing the package, and showing a basic alert dialog. With this knowledge, you can easily add alerts to your Capacitor app and enhance the user experience.

Remember to refer to the official documentation of the alert-capacitor package for more advanced usage and customization options.