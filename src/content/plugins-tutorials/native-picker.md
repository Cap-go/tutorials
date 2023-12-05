---
title: "Using cap-native-picker Package"
description: "A tutorial on using the cap-native-picker package to implement a native date picker in your Capacitor app."
created_at: "2023-09-18"
published: true
slug: "native-picker"
---

# Using cap-native-picker Package

In this tutorial, we will explore how to use the `cap-native-picker` package to implement a native date picker in your Capacitor app. The `cap-native-picker` package makes it easy to add a date picker functionality to your app, providing a native and user-friendly experience for selecting dates.

## Installation

To get started, follow these steps to install the `cap-native-picker` package into your Capacitor project:

1. Open a command-line interface and navigate to your project directory.
2. Run the following command to install the package:

   ```bash
   npm install cap-native-picker
   ```

3. Once the installation is complete, sync the native files with the Capacitor project:

   ```bash
   npx cap sync
   ```

## Usage

To use the `cap-native-picker` package in your project, follow these steps:

1. Import the package in your TypeScript file:

   ```typescript
   import 'cap-native-picker';
   import { Plugins } from '@capacitor/core';

   const { NativePicker } = Plugins;
   ```

2. To open the native date picker, use the `showDatePicker` method provided by the `NativePicker` plugin:

   ```typescript
   const openDatePicker = async () => {
     const { value } = await NativePicker.showDatePicker();
     console.log('Selected date:', value);
   };
   ```

3. You can customize the date picker by passing additional options to the `showDatePicker` method. For example, to set the initial date in the date picker:

   ```typescript
   const openDatePicker = async () => {
     const { value } = await NativePicker.showDatePicker({
       date: new Date(2023, 8, 18), // Set initial date to September 18, 2023
     });
     console.log('Selected date:', value);
   };
   ```

4. Finally, call the `openDatePicker` function in response to a user action, such as a button click:

   ```html
   <button ion-button (click)="openDatePicker()">Open Date Picker</button>
   ```

That's it! You have successfully implemented a native date picker in your Capacitor app using the `cap-native-picker` package.

## Conclusion

In this tutorial, we learned how to use the `cap-native-picker` package to implement a native date picker in a Capacitor app. By following the step-by-step instructions, you should now be able to integrate a user-friendly date picker into your app and enhance the user experience. Feel free to explore the package documentation for more customization options and features.