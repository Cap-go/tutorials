---
title: "Using capacitor-native-http Package"
description: "This tutorial will guide you through the process of using the capacitor-native-http package for making HTTP requests in your Capacitor app."
created_at: "2021-09-28"
published: true
slug: "capacitor-native-http"
---

# Using capacitor-native-http Package

This blog post will walk you through the steps to use the capacitor-native-http package in your Capacitor app. The capacitor-native-http package allows you to make HTTP requests from your app directly without relying on the WebView of Capacitor.

## Prerequisites

Before getting started, make sure you have the following prerequisites:

1. Capacitor is installed in your project. You can install Capacitor by running the following command:

   ```bash
   npm install --save @capacitor/core @capacitor/cli
   ```

2. Create a new Capacitor project if you haven't already done so. You can create a new Capacitor project by running the following command:

   ```bash
   npx cap init
   ```

3. Ensure that you have the capacitor-http plugin installed in your project. You can install it by running the following command:

   ```bash
   npm install --save capacitor-http
   ```

## Usage

Once you have completed the above prerequisites, you can start using the capacitor-native-http package in your Capacitor app.

### Step 1: Import the Plugin

First, import the capacitor-native-http package in the file where you want to use it. You can do this by adding the following import statement at the top of the file:

```typescript
import { Plugins } from '@capacitor/core';
const { CapacitorNativeHttp } = Plugins;
```

### Step 2: Make HTTP Requests

Next, you can use the `CapacitorNativeHttp` object to make HTTP requests. Here's an example of making a GET request:

```typescript
async function makeGetRequest() {
  try {
    const response = await CapacitorNativeHttp.request({
      method: 'GET',
      url: 'https://api.example.com/data',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <YOUR_ACCESS_TOKEN>'
      },
    });

    console.log('Response:', response.data);

  } catch (error) {
    console.error('Error:', error);
  }
}
```

You can customize the request by specifying additional options like headers, body, etc.

### Step 3: Handling the Response

The HTTP request will return a response object containing the response data, status code, headers, etc. You can handle the response as needed in your app. In the above example, the response data is logged to the console.

### Step 4: Error Handling

In case of any error during the HTTP request, you can handle the error by catching it in the `catch` block. In the above example, any error will be logged to the console.

## Conclusion

In this tutorial, you learned how to use the capacitor-native-http package to make HTTP requests in your Capacitor app. You also learned how to handle the response and error cases. Now you can integrate API calls into your Capacitor app seamlessly using capacitor-native-http.

Remember to refer to the official documentation of capacitor-native-http for more detailed information and additional features.

Happy coding!