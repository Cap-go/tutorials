---
title: "Using the capacitor-action-sheet-better Package"
description: "A tutorial on how to use the capacitor-action-sheet-better package in your Capacitor app"
created_at: "2022-02-22"
published: true
slug: "capacitor-action-sheet-better"
---

# Using the capacitor-action-sheet-better Package

In this tutorial, we will learn how to use the `capacitor-action-sheet-better` package to create customizable action sheets in your Capacitor app.

## Installation

To get started, first install the `capacitor-action-sheet-better` package using npm:

```bash
npm install capacitor-action-sheet-better
```

## Usage

Once installed, you can import the `ActionSheet` plugin from `capacitor-action-sheet-better` in your TypeScript file:

```typescript
import { Plugins } from '@capacitor/core';
import 'capacitor-action-sheet-better';

const { ActionSheet } = Plugins;
```

## Showing an Action Sheet

To show an action sheet, you can call the `showActions` method provided by the `ActionSheet` plugin. This method takes an options object as a parameter:

```typescript
const options = {
  title: 'Choose an action',
  message: 'What would you like to do?',
  options: ['Option 1', 'Option 2', 'Option 3']
};

const result = await ActionSheet.showActions(options);

if (result.index != null) {
  // Handle selected option
  console.log('Selected option:', options.options[result.index]);
} else {
  // Action sheet dismissed
  console.log('Action sheet dismissed');
}
```

The `showActions` method returns a promise that resolves to the selected option index when an option is clicked, or `null` if the action sheet is dismissed.

## Customization

You can customize the appearance and behavior of the action sheet by providing additional options:

```typescript
const options = {
  title: 'Choose an action',
  message: 'What would you like to do?',
  options: ['Option 1', 'Option 2', 'Option 3'],
  destructiveIndex: 2,
  cancelButtonIndex: 3,
  style: {
    titleTextColor: '#FF0000',
    messageTextColor: '#00FF00',
    optionTextColor: '#0000FF',
    optionBackgroundColor: '#FFFFFF',
    cancelButtonTextColor: '#FF00FF',
    cancelButtonBackgroundColor: '#000000',
    destructiveButtonTextColor: '#FFFF00',
    destructiveButtonBackgroundColor: '#00FFFF'
  }
};

const result = await ActionSheet.showActions(options);
```

The `destructiveIndex` option can be used to specify a destructive action that will be displayed with different styling. The `cancelButtonIndex` option can be used to specify a cancel button that will be displayed at the bottom of the action sheet.

The `style` option allows you to customize the text and background colors of the different elements in the action sheet.

## Conclusion

In this tutorial, we explored how to use the `capacitor-action-sheet-better` package to create customizable action sheets in Capacitor apps. We learned how to install the package, show an action sheet, and customize its appearance and behavior.

Now you can enhance the user experience of your Capacitor app by using the `capacitor-action-sheet-better` package. Happy coding!