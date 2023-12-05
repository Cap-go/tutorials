---
title: "Using @capacitor-community/date-picker Package"
description: "A tutorial on how to use the @capacitor-community/date-picker package for native date picker in Capacitor"
created_at: "2021-10-25"
published: true
slug: "date-picker"
---

# Using @capacitor-community/date-picker Package

In this tutorial, we will learn how to use the `@capacitor-community/date-picker` package to implement a native date picker in Capacitor.

## Installation

To install the package, open your terminal and run the following command:

Using npm:

```
npm install @capacitor-community/date-picker
```

Using yarn:

```
yarn add @capacitor-community/date-picker
```

Next, sync the native files with the following command:

```
npx cap sync
```

## Usage

1. Import the `DatePicker` module and the `DatePickerTheme` type in your JavaScript/TypeScript file:

```js
import { DatePicker } from '@capacitor-community/date-picker';
import type { DatePickerTheme } from '@capacitor-community/date-picker/src';
```

2. Use the `DatePicker.present` method to present the date picker:

```js
const selectedTheme: DatePickerTheme = 'light';

DatePicker.present({
  mode: 'date',
  locale: 'en_US',
  date: '2021-10-25',
  theme: selectedTheme,
}).then(date => {
  // Handle selected date
  console.log(date.value);
});
```

In the above example, we set the `mode` to `'date'` to display only the date picker. You can also use `'time'` or `'dateAndTime'` for different modes.

The `locale` option allows you to specify the desired locale for the date picker.

The `date` option sets the initial selected date in the picker.

The `theme` option accepts a `DatePickerTheme` value. You can choose between `'light'` or `'dark'` themes.

3. Run the app and test the date picker functionality.

## Advanced Configurations

The `@capacitor-community/date-picker` package provides additional configuration options that can be used within the `present` method or in the `capacitor.config.json` file.

Some of the common options include:

- `format`: Sets the desired date format. By default, it is set to `"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"`.
- `min`: Sets the minimum allowed date.
- `max`: Sets the maximum allowed date.
- `doneText`: Sets the text for the "Done" button.
- `cancelText`: Sets the text for the "Cancel" button.

You can find more information about the available options in the `definitions.ts` file of the `@capacitor-community/date-picker` package.

## Conclusion

In this tutorial, we explored how to use the `@capacitor-community/date-picker` package to implement a native date picker in Capacitor. We covered the installation process, basic usage, and some advanced configurations.

You can now enhance your Capacitor app by adding a user-friendly date picker using the `@capacitor-community/date-picker` package.