---
title: "Using capacitor-jok-helper package"
description: "This tutorial will guide you through the process of using the capacitor-jok-helper package in your Capacitor app."
created_at: "2022-10-27"
published: true
slug: "capacitor-jok-helper"
---

# Using capacitor-jok-helper package

In this tutorial, we will learn how to use the `capacitor-jok-helper` package to enhance our Capacitor app with jokes. The `capacitor-jok-helper` package provides a simple way to fetch and display jokes in your app.

## Installation

To start using the `capacitor-jok-helper` package, you need to install it in your Capacitor project. Open your terminal and run the following command:

```bash
npm install capacitor-jok-helper
```

## Initialization

After installing the package, we need to initialize it in our app. Open your app's main file (e.g., `app.ts` or `index.ts`) and import the `capacitor-jok-helper` module:

```javascript
import { registerPlugin } from '@capacitor/core';
import { CapacitorJokHelper } from 'capacitor-jok-helper';

const jokHelper = registerPlugin<CapacitorJokHelper>('CapacitorJokHelper');
```

## Fetching a Joke

Now that we have initialized the `capacitor-jok-helper` package, we can fetch a random joke. To do this, use the following code:

```javascript
const joke = await jokHelper.fetchRandomJoke();
console.log(joke);
```

The `fetchRandomJoke` function returns a promise that resolves with a random joke. You can then log the joke to the console or use it in your app as needed.

## Displaying a Joke

To display the fetched joke in your app's UI, you can use the following code:

```javascript
const jokeElement = document.getElementById('joke');
jokeElement.innerText = joke;
```

In the above code, we assume you have an HTML element with the id `joke` in your app's UI. We retrieve that element and set its `innerText` property to the fetched joke.

## Conclusion

In this tutorial, we learned how to use the `capacitor-jok-helper` package to fetch and display jokes in a Capacitor app. We covered the installation process, initialization, fetching a random joke, and displaying it in the app's UI. With the `capacitor-jok-helper` package, you can easily add some fun and entertainment to your app.

Remember to check the official documentation of `capacitor-jok-helper` for more advanced features and additional customization options.