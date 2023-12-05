---
title: "Using capacitor-awesome-fetch Package"
description: "This tutorial provides a guide on how to use the capacitor-awesome-fetch package in your Capacitor app."
created_at: "2022-01-15"
published: true
slug: awesomefetch
---

# Using capacitor-awesome-fetch Package

In this tutorial, we will learn how to use the `capacitor-awesome-fetch` package in a Capacitor app. The `capacitor-awesome-fetch` package is a plugin that provides an easy-to-use API for making HTTP requests in Capacitor apps.

## Installation

To get started, we need to install the `capacitor-awesome-fetch` package in our Capacitor app. Open your terminal and run the following command:

```bash
npm install capacitor-awesome-fetch
```

## Usage

Once the package is installed, we can start using it in our app. Import the `capacitor-awesome-fetch` package in your JavaScript or TypeScript file:

```javascript
import { CapacitorAwesomeFetch } from 'capacitor-awesome-fetch';
```

### Making GET Requests

To make a GET request, we can use the `get()` method provided by the `CapacitorAwesomeFetch` class. Here's an example:

```javascript
const response = await CapacitorAwesomeFetch.get('https://api.example.com/data');
console.log(response.data);
```

### Making POST Requests

To make a POST request, we can use the `post()` method provided by the `CapacitorAwesomeFetch` class. Here's an example:

```javascript
const requestData = {
  name: 'John Doe',
  email: 'john@example.com'
};

const response = await CapacitorAwesomeFetch.post('https://api.example.com/users', requestData);
console.log(response.data);
```

### Handling Errors

The `capacitor-awesome-fetch` package also supports error handling. You can use try-catch blocks to handle errors thrown by the package. Here's an example:

```javascript
try {
  const response = await CapacitorAwesomeFetch.get('https://api.example.com/data');
  console.log(response.data);
} catch (error) {
  console.error('An error occurred:', error);
}
```

## Conclusion

In this tutorial, we learned how to use the `capacitor-awesome-fetch` package to make HTTP requests in a Capacitor app. We saw how to install the package, make GET and POST requests, and handle errors. This package provides a convenient way to interact with external APIs in Capacitor apps.