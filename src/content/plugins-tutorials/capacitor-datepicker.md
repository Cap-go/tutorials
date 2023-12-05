---
title: "Using Capacitor Date Picker Package"
description: "Learn how to use the Capacitor Date Picker package to add native date picker functionality to your Capacitor-powered app."
created_at: "2022-09-14"
published: true
slug: "capacitor-datepicker"
---

# Using Capacitor Date Picker Package

In this tutorial, we will learn how to use the Capacitor Date Picker package to add native date picker functionality to your Capacitor-powered app. The Capacitor Date Picker package is a community plugin that provides a simple way to incorporate a date picker into your app, allowing users to select a date easily.

## Installation

To get started, we need to install the Capacitor Date Picker package. Open your terminal and navigate to your project directory. Then, run the following command:

```bash
npm install @capacitor-community/date-picker
```

This will install the Capacitor Date Picker package and add it to your project's dependencies.

## Sync Native Files

Next, we need to sync the native files to ensure the Capacitor Date Picker package is correctly integrated into your app. Run the following command in your terminal:

```bash
npx cap sync
```

This will sync the native files and make sure any changes made during the installation process are applied.

## Importing the Capacitor Date Picker Package

Before we can use the Capacitor Date Picker package in our app, we need to import it in our code. In your desired script file, add the following import statement:

```typescript
import '@capacitor-community/date-picker';
import { Capacitor } from '@capacitor/core';
```

## Using the Capacitor Date Picker

Once the Capacitor Date Picker package is imported, we can start using it to display and capture date values. Here's an example of how to display the date picker:

```typescript
const showDatePicker = async () => {
  const result = await Capacitor.Plugins.DatePickerPlugin.showDatePicker();
  if (result && result.value) {
    const selectedDate = new Date(result.value);
    // Do something with the selected date
  }
};
```

In the example above, we define a function called `showDatePicker`. Inside this function, we call `Capacitor.Plugins.DatePickerPlugin.showDatePicker` to display the date picker. The function returns a promise, and when resolved, we can access the selected date from the `result` object.

## Setting Up Date Picker Options

The Capacitor Date Picker package also allows us to customize the appearance and behavior of the date picker. We can pass options to the `showDatePicker` function to configure various settings. Here's an example:

```typescript
const showDatePickerWithOptions = async () => {
  const options = {
    title: 'Select a Date',
    mode: 'date',
    minimumDate: new Date('2000-01-01'),
    maximumDate: new Date('2022-12-31'),
    initialDate: new Date(),
    theme: 'dark'
  };

  const result = await Capacitor.Plugins.DatePickerPlugin.showDatePicker(options);
  if (result && result.value) {
    const selectedDate = new Date(result.value);
    // Do something with the selected date
  }
};
```

In the above example, we define a function called `showDatePickerWithOptions`. Inside this function, we create an options object that specifies the title, mode, minimum date, maximum date, initial date, and theme of the date picker. We then pass this options object to the `showDatePicker` function.

## Conclusion

Congratulations! You have successfully learned how to use the Capacitor Date Picker package to add native date picker functionality to your Capacitor-powered app. You can now enhance your app's user experience by allowing users to easily select dates using the native date picker.

Remember to check out the official documentation of the Capacitor Date Picker package for more advanced options and customization possibilities.

Happy coding!