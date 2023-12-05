---
title: "Using the capacitor-flashlight Package"
description: "This tutorial will guide you on how to use the capacitor-flashlight package in your application."
created_at: "2022-10-15"
published: true
slug: "capacitor-flashlight"
---

# Using the capacitor-flashlight Package

The capacitor-flashlight package allows you to control the flashlight of a device using Capacitor. With this package, you can easily turn the flashlight on and off programmatically in your application.

## Installation

To use the capacitor-flashlight package, you need to install it first. Follow these steps to install the package in your Capacitor project:

1. Open your terminal or command prompt.
2. Navigate to your Capacitor project directory.
3. Run the following command to install the package:

   ```bash
   npm install capacitor-flashlight
   ```

4. Once the installation is complete, the package is ready to be used in your application.

## Usage

To use the capacitor-flashlight package in your application, follow the steps below:

1. Import the `Flashlight` class from the `capacitor-flashlight` package:

   ```javascript
   import { Flashlight } from 'capacitor-flashlight';
   ```

2. Initialize the `Flashlight` class and create an instance of it:

   ```javascript
   const flashlight = new Flashlight();
   ```

3. To turn on the flashlight, use the `turnOn()` method:

   ```javascript
   flashlight.turnOn()
     .then(() => {
       console.log('Flashlight turned on');
     })
     .catch((error) => {
       console.error('Failed to turn on the flashlight:', error);
     });
   ```

4. To turn off the flashlight, use the `turnOff()` method:

   ```javascript
   flashlight.turnOff()
     .then(() => {
       console.log('Flashlight turned off');
     })
     .catch((error) => {
       console.error('Failed to turn off the flashlight:', error);
     });
   ```

5. That's it! You have successfully used the capacitor-flashlight package to control the flashlight in your application.

## Conclusion

In this tutorial, you learned how to install and use the capacitor-flashlight package. You can now easily turn the flashlight on and off programmatically in your Capacitor application. Enjoy exploring the possibilities with the capacitor-flashlight package!

Remember to refer to the official documentation of capacitor-flashlight for more advanced features and options.