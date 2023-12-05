---
title: "How to Use the thaiid-reader-plugin Package"
description: "A step-by-step guide on using the thaiid-reader-plugin package to read Thai Smart Cards."
created_at: "2021-09-22"
published: true
slug: "thaiid-reader-plugin"
---

# How to Use the thaiid-reader-plugin Package

In this tutorial, we will learn how to use the `thaiid-reader-plugin` package to read Thai Smart Cards in your Ionic or Capacitor application. The `thaiid-reader-plugin` package provides a set of APIs that allows you to interact with a Thai Smart Card reader and retrieve the card's information.

## Prerequisites

Before we begin, make sure that you have the following prerequisites installed on your machine:

- Node.js (version 12 or later)
- NPM (Node Package Manager)

## Step 1: Install the Package

To install the `thaiid-reader-plugin` package, open your terminal or command prompt and run the following command:

```bash
npm install thaiid-reader-plugin
```

This will install the package and its dependencies into your project.

## Step 2: Sync Capacitor

If you are using Capacitor as the underlying framework for your Ionic application, you need to sync Capacitor with the newly installed package. To do this, run the following command in your terminal or command prompt:

```bash
npx cap sync
```

This will synchronize the package with your Capacitor project.

## Step 3: Using the API

The `thaiid-reader-plugin` package provides several methods that you can use to interact with the Thai Smart Card reader. Here are some of the most commonly used methods:

### `reader()`

This method reads the Thai Smart Card and returns its information. Here is an example usage:

```javascript
import { reader } from 'thaiid-reader-plugin';

const cardInfo = await reader();
console.log(cardInfo);
```

### `findReader()`

This method finds the Thai Smart Card reader device. It returns the name or identifier of the reader. Here is an example usage:

```javascript
import { findReader } from 'thaiid-reader-plugin';

const readerName = await findReader();
console.log(readerName);
```

### `getNameReader()`

This method retrieves the name of the Thai Smart Card reader. Here is an example usage:

```javascript
import { getNameReader } from 'thaiid-reader-plugin';

const readerName = await getNameReader();
console.log(readerName);
```

### `powerOn()`

This method powers on the Thai Smart Card reader. Here is an example usage:

```javascript
import { powerOn } from 'thaiid-reader-plugin';

await powerOn();
console.log('Reader powered on');
```

### `close()`

This method closes the connection to the Thai Smart Card reader. Here is an example usage:

```javascript
import { close } from 'thaiid-reader-plugin';

await close();
console.log('Connection closed');
```

## Conclusion

In this tutorial, we have learned how to use the `thaiid-reader-plugin` package to read Thai Smart Cards in your Ionic or Capacitor application. We covered the installation process, synchronization with Capacitor, and the usage of the package's API methods. You can now integrate Thai Smart Card reading capabilities into your application with ease using the `thaiid-reader-plugin` package.