---
title: "Using @start9labs/capacitor-http Package"
description: "This tutorial will guide you through the process of using the @start9labs/capacitor-http package to make HTTP requests in your Capacitor app."
created_at: "2022-10-13"
published: true
slug: "http-api-proxy"
---

# Using @start9labs/capacitor-http Package

The `@start9labs/capacitor-http` package is a useful tool that allows you to make HTTP requests in your Capacitor app. In this tutorial, we will walk through the process of installing the package and making basic HTTP requests.

## Installation

To get started, you need to install the `@start9labs/capacitor-http` package. Open your terminal and navigate to your project directory. Run the following command:

```bash
npm install @start9labs/capacitor-http
```

## Configuration

Once the package is installed, you need to configure it in your Capacitor project. Open the `capacitor.config.json` file and add the following entry under the `plugins` section:

```json
"Plugins": {
  "CapacitorHttp": {
    "config": {
      "baseURL": "https://api.example.com",
      "timeout": 5000
    }
  }
}
```

Make sure to replace `"https://api.example.com"` with the base URL of your API.

## Making HTTP Requests

With the `@start9labs/capacitor-http` package set up, you can now start making HTTP requests. 

To send a GET request, use the following code:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorHttp } = Plugins;

async function makeGETRequest() {
  try {
    const response = await CapacitorHttp.request({
      url: "/users",
      method: "GET"
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

makeGETRequest();
```

To send a POST request, use the following code:

```javascript
async function makePOSTRequest() {
  const data = {
    name: "John Doe",
    email: "john.doe@example.com"
  };

  try {
    const response = await CapacitorHttp.request({
      url: "/users",
      method: "POST",
      data
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

makePOSTRequest();
```

You can also include query parameters in your request by appending them to the URL. For example:

```javascript
const response = await CapacitorHttp.request({
  url: "/users?status=active",
  method: "GET"
});
```

## Conclusion

In this tutorial, we learned how to use the `@start9labs/capacitor-http` package to make HTTP requests in a Capacitor app. We covered the installation process, configuration, and making GET and POST requests. With this knowledge, you can now integrate HTTP functionality into your Capacitor projects with ease.