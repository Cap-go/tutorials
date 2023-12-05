# Using capacitor-holy-pipe package

## Introduction

In this tutorial, we will learn how to use the `capacitor-holy-pipe` package. This package allows you to perform various operations on data using pipes in Capacitor apps.

## Installation

To install the `capacitor-holy-pipe` package, you can use the following command:

```bash
npm install capacitor-holy-pipe
```

## Usage

1. Import the `capacitor-holy-pipe` package in your Capacitor app:

```javascript
import { CapacitorHolyPipe } from 'capacitor-holy-pipe';
```

2. Initialize the `CapacitorHolyPipe` class:

```javascript
const holyPipe = new CapacitorHolyPipe();
```

3. Use the available pipe methods to manipulate data:

### Example: capitalizeFirstLetter

The `capitalizeFirstLetter` method capitalizes the first letter of a string:

```javascript
const result = holyPipe.capitalizeFirstLetter('hello world');
console.log(result); // Output: Hello world
```

### Example: reverseString

The `reverseString` method reverses a given string:

```javascript
const result = holyPipe.reverseString('hello world');
console.log(result); // Output: dlrow olleh
```

### Example: removeWhitespace

The `removeWhitespace` method removes all whitespace from a string:

```javascript
const result = holyPipe.removeWhitespace('hello world');
console.log(result); // Output: helloworld
```

## Conclusion

In this tutorial, we have learned how to use the `capacitor-holy-pipe` package to perform various operations on data using pipes in Capacitor apps. This package provides convenient methods for manipulating strings. Experiment with different methods to achieve the desired results in your Capacitor app.

---
title: "Using capacitor-holy-pipe package"
description: "Learn how to use the capacitor-holy-pipe package to perform various operations on data using pipes in Capacitor apps."
created_at: "2022-01-01"
published: true
slug: "capacitor-holy-pipe"
---