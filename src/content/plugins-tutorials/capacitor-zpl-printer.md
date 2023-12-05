---
title: "Using the capacitor-zpl-printer package"
description: "This tutorial provides a step-by-step guide on how to use the capacitor-zpl-printer package to print ZPL labels using Capacitor."
created_at: "2022-02-22"
published: true
slug: "capacitor-zpl-printer"
---

# Using the capacitor-zpl-printer package

In this tutorial, we will learn how to use the capacitor-zpl-printer package to print ZPL labels using Capacitor. The capacitor-zpl-printer package allows you to easily generate and print ZPL labels from your Capacitor app.

## Step 1: Installation

To get started, install the capacitor-zpl-printer package by running the following command in your project directory:

```bash
npm install capacitor-zpl-printer
```

This will install the package and its dependencies.

## Step 2: Importing the package

Next, import the capacitor-zpl-printer package into your project. Open the file where you want to use the package and add the following import statement:

```javascript
import { ZPLPrinter } from 'capacitor-zpl-printer';
```

## Step 3: Generating and printing ZPL labels

Now that you have imported the capacitor-zpl-printer package, you can start generating and printing ZPL labels. The ZPLPrinter object provides various methods for generating and printing labels.

Here is an example of how to generate a simple ZPL label:

```javascript
const zplLabel = ZPLPrinter.generateLabel((label) => {
    label.text('Hello, World!', 100, 100, {
        fontSize: 24,
        fontWeight: 'bold',
    });
});

console.log(zplLabel);
```

In the above example, we use the `generateLabel` method to create a new label. We then use the `text` method to add a text element with the text "Hello, World!" at coordinates (100, 100). We can also specify additional styling options such as font size and weight.

To print the generated label, you can use the `print` method:

```javascript
ZPLPrinter.print(zplLabel)
    .then(() => {
        console.log('Label printed successfully!');
    })
    .catch((error) => {
        console.error('Failed to print label:', error);
    });
```

The `print` method takes the generated ZPL label as a parameter and initiates the printing process. It returns a promise that resolves when the label is printed successfully, or rejects with an error if the printing process fails.

## Conclusion

In this tutorial, we have learned how to use the capacitor-zpl-printer package to generate and print ZPL labels using Capacitor. With the help of the package, you can easily integrate ZPL label printing into your Capacitor app. Happy printing!

Make sure to check out the official [capacitor-zpl-printer documentation](https://github.com/your-username/capacitor-zpl-printer) for more information and additional features.