# Using @proteansoftware/capacitor-pesdk Package

## Introduction

In this tutorial, we will explore how to use the `@proteansoftware/capacitor-pesdk` package to integrate the PhotoEditor SDK into a Capacitor application. We will cover the installation process, basic usage, and some common functionalities provided by the package.

## Prerequisites

Before proceeding with this tutorial, ensure that you have the following:

- Node.js and npm installed on your machine.
- A basic understanding of Capacitor and its usage.

## Installation

To get started, we need to install the `@proteansoftware/capacitor-pesdk` package. Open your terminal and run the following command:

```bash
npm install @proteansoftware/capacitor-pesdk
```

## Usage

Once the installation is complete, we can start using the `@proteansoftware/capacitor-pesdk` package in our Capacitor application.

First, let's import and initialize the PESDK module in your project:

```javascript
import { Plugins } from '@capacitor/core';

const { Pesdk } = Plugins;
```

### Opening the PhotoEditor

To open the PhotoEditor, we can use the `Pesdk.openEditor` method. This method takes an `options` object as a parameter, which allows us to customize the editor's appearance and behavior.

Here's an example of how to open the PhotoEditor with some basic options:

```javascript
Pesdk.openEditor({
  imageUri: 'file:///path/to/image.jpg',
  tools: [
    'adjust',
    'crop',
    'filter',
    'text',
    'sticker',
    'brush',
    'focus',
    'effects',
    'overlay',
    'frame',
    'rotate',
    'flip',
  ],
  export: {
    fileFormat: 'jpg',
    quality: 90,
    outputType: 'DISPLAY',
  },
});
```

In the example above, we specify the `imageUri` to the path of the image we want to edit. We also define an array of `tools` to be displayed in the editor. Finally, we configure the export settings using the `export` object.

### Customizing the Editor

The `@proteansoftware/capacitor-pesdk` package provides a wide range of customization options for the PhotoEditor. These options include modifying the toolbar, adding custom UI elements, changing the editor's theme, and more.

For detailed documentation on all available customization options, please refer to the [official documentation](https://docs.photoeditorsdk.com/guides/html5/v5/introduction/customization/options/).

## Conclusion

In this tutorial, we learned how to use the `@proteansoftware/capacitor-pesdk` package to integrate the PhotoEditor SDK into a Capacitor application. We covered the installation process, basic usage, and explored some customization options provided by the package.

With the PhotoEditor SDK and Capacitor, you can now easily incorporate powerful photo editing capabilities into your mobile application.

---

---
title: "Using @proteansoftware/capacitor-pesdk Package Tutorial"
description: "Learn how to use @proteansoftware/capacitor-pesdk package to integrate PhotoEditor SDK into your Capacitor application."
created_at: "2021-12-01"
published: true
slug: "capacitor-pesdk"

---

**Note**: This tutorial was created on December 1st, 2021.