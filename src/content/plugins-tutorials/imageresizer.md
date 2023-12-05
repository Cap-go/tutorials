# Using @softyde/image-resizer

## Introduction
In this tutorial, we will learn how to use the `@softyde/image-resizer` package to resize images in your application.

## Prerequisites
Before starting this tutorial, make sure you have the following prerequisites:
- Node.js installed on your machine
- Basic knowledge of JavaScript and Node.js

## Installation
You can install the `@softyde/image-resizer` package by running the following command in your project directory:
```
npm install @softyde/image-resizer
```

## Resizing an Image
To resize an image using the `@softyde/image-resizer` package, follow these steps:

1. Import the `resizeImage` function from the package:
```javascript
const { resizeImage } = require('@softyde/image-resizer');
```

2. Call the `resizeImage` function with the path to the original image file and the desired width and height:
```javascript
const imagePath = '/path/to/original/image.jpg';
const width = 800;
const height = 600;

resizeImage(imagePath, width, height)
  .then((resizedImagePath) => {
    // The resized image is saved to the specified path
    console.log("Image successfully resized:", resizedImagePath);
  })
  .catch((error) => {
    console.error("Error resizing image:", error);
  });
```

## Conclusion
In this tutorial, we have learned how to use the `@softyde/image-resizer` package to resize images in your application. By following the steps outlined above, you can easily resize images according to your desired dimensions.

---

**Blog Details:**

---
title: "Using @softyde/image-resizer Package"
description: "Learn how to use the @softyde/image-resizer package to resize images in your application."
created_at: "August 10, 2022"
published: true
slug: imageresizer