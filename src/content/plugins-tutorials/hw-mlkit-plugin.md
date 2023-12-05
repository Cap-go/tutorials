---
title: "Using the HWMLKit Package"
description: "In this tutorial, you will learn how to use the HWMLKit package to implement ML Kit functionality in your Capacitor project."
created_at: "2022-10-20"
published: true
slug: "hw-mlkit-plugin"
---

# Using the HWMLKit Package

In this tutorial, we will guide you through the process of using the HWMLKit package to implement ML Kit functionality in your Capacitor project.

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Conclusion](#conclusion)

## Introduction
The HWMLKit package is a collection of Capacitor plugins that enable the use of the ML Kit SDKs in Capacitor[^1]. With HWMLKit, you can easily integrate machine learning models and advanced computer vision features into your Capacitor applications.

## Installation
To get started with the HWMLKit package, follow these steps:

1. Install the HWMLKit plugin by running the following command in your Capacitor project directory:
   ```shell
   npm install @hwmlkit/plugin
   ```

2. Next, integrate the plugin into your Capacitor project by running the following command:
   ```shell
   npx cap sync
   ```

Congratulations! You have successfully installed the HWMLKit plugin in your Capacitor project.

## Usage
Once you have installed the HWMLKit plugin, you can start using ML Kit functionality in your application. Here are a few examples of how to use the plugin:

### Text Recognition
To perform text recognition in an image, use the `textRecognition` method:
```typescript
import { TextRecognitionPlugin } from '@hwmlkit/plugin';

// ...

const result = await TextRecognitionPlugin.textRecognition({ image: imageUrl });
console.log(result);
```
This will return the recognized text in the provided image.

### Object Detection
To perform object detection in an image, use the `objectDetection` method:
```typescript
import { ObjectDetectionPlugin } from '@hwmlkit/plugin';

// ...

const result = await ObjectDetectionPlugin.objectDetection({ image: imageUrl });
console.log(result);
```
This will return the detected objects and their bounding boxes in the provided image.

## Conclusion
In this tutorial, we have explored the HWMLKit package and learned how to use it to implement ML Kit functionality in a Capacitor project. With the HWMLKit plugin, you can easily integrate powerful machine learning and computer vision features into your applications.

Remember to refer to the official documentation and plugin repositories for more information and detailed usage instructions.

Happy coding!

## References
[^1]: [HWMLKit GitHub Repository](https://github.com/hwmlkit-team/hwmlkit)
