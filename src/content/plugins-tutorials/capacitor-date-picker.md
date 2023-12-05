---
title: "Using @pantrist/capacitor-date-picker Package"
description: "A tutorial on how to use the @pantrist/capacitor-date-picker package for native Date Picker in Capacitor."
created_at: "2023-10-21"
published: true
slug: "capacitor-date-picker"
---

# Using @pantrist/capacitor-date-picker Package

In this tutorial, we will learn how to use the @pantrist/capacitor-date-picker package to integrate a native Date Picker in Capacitor.

## Installation

To install the package, use either npm or yarn:

```bash
npm install @pantrist/capacitor-date-picker
```

```bash
yarn add @pantrist/capacitor-date-picker
```

After installing the package, make sure to sync the native files using the following command:

```bash
npx cap sync
```

## Usage

The @pantrist/capacitor-date-picker package provides a number of features and configurations for both iOS and Android platforms. Let's explore some of them:

### iOS Configuration

To configure the date picker on iOS, you can use the following options:

- `style`: The style of the date picker.
- `format`: The format of the date to be displayed.
- `locale`: The locale to be used for date formatting.
- `date`: The initial date to be displayed in the picker.
- `mode`: The mode of the picker (e.g., date, time, datetime).
- `theme`: The color theme of the picker.
- `timezone`: The timezone of the picker.
- `min`: The minimum selectable date in the picker.
- `max`: The maximum selectable date in the picker.
- `doneText`: The text for the done button.
- `cancelText`: The text for the cancel button.
- `is24h`: Whether the picker should use the 24-hour format.
- `titleFontColor`: The font color of the picker title.
- `titleBgColor`: The background color of the picker title.
- `bgColor`: The background color of the picker.
- `fontColor`: The font color of the picker.
- `buttonBgColor`: The background color of the picker buttons.
- `buttonFontColor`: The font color of the picker buttons.
- `mergedDateAndTime`: Whether to merge the date and time pickers.

### Android Configuration

To configure the date picker on Android, you can use the following options:

- `format`: The format of the date to be displayed.
- `locale`: The locale to be used for date formatting.
- `date`: The initial date to be displayed in the picker.
- `mode`: The mode of the picker (e.g., date, time, datetime).
- `theme`: The color theme of the picker.
- `timezone`: The timezone of the picker.
- `min`: The minimum selectable date in the picker.
- `max`: The maximum selectable date in the picker.
- `doneText`: The text for the done button.
- `cancelText`: The text for the cancel button.
- `is24h`: Whether the picker should use the 24-hour format.

### Presenting the Date Picker

To present the date picker, use the `present` method and pass the desired configuration options as an object:

```javascript
import { Plugins } from '@capacitor/core';

const { DatePickerPlugin } = Plugins;

// Example configuration
const config = {
  format: "YYYY-MM-DD",
  locale: "en_US",
  date: "2023-10