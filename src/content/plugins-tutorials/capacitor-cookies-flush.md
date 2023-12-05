---
title: "Using capacitor-cookies-flush package"
description: "This tutorial provides a step-by-step guide to using the capacitor-cookies-flush package in your Capacitor app."
created_at: "2021-10-28"
published: true
slug: capacitor-cookies-flush
---

# Using capacitor-cookies-flush package

In this tutorial, we will learn how to use the `capacitor-cookies-flush` package in a Capacitor app. The `capacitor-cookies-flush` package provides a convenient way to manage and flush cookies in your app.

## Installation

To begin, make sure you have created a Capacitor app and have installed the necessary dependencies. Then, install the `capacitor-cookies-flush` package by running the following command in your terminal:

```bash
npm install capacitor-cookies-flush
```

## Importing the Package

Next, import the `capacitor-cookies-flush` package into your project. Open the file where you want to use the package and add the following import statement:

```javascript
import 'capacitor-cookies-flush';
```

## Flushing Cookies

To flush cookies in your Capacitor app, use the `CookiesFlush` object provided by the `capacitor-cookies-flush` package. Here's an example of how to flush all cookies:

```javascript
import { Plugins } from '@capacitor/core';

const { CookiesFlush } = Plugins;

CookiesFlush.flushAllCookies()
  .then(() => {
    console.log('Cookies flushed successfully');
  })
  .catch((error) => {
    console.error('Failed to flush cookies', error);
  });
```

You can also flush cookies for a specific domain using the `flushCookiesForDomain` method:

```javascript
CookiesFlush.flushCookiesForDomain('example.com')
  .then(() => {
    console.log('Cookies for example.com flushed successfully');
  })
  .catch((error) => {
    console.error('Failed to flush cookies for example.com', error);
  });
```

## Conclusion

In this tutorial, we learned how to use the `capacitor-cookies-flush` package to manage and flush cookies in a Capacitor app. We covered the installation process, importing the package, and the usage of the `CookiesFlush` object to flush cookies. By following this guide, you should now be able to effectively manage cookies in your Capacitor app using the `capacitor-cookies-flush` package.