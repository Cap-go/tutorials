# Using `@capacitor/http` Package

In this tutorial, we will learn how to use the `@capacitor/http` package in your Capacitor app.

## Prerequisites

Before we get started, make sure you have the following installed:

- Capacitor 2.0 or above
- `@capacitor/http` package in your Capacitor project

## Installation

To install the `@capacitor/http` package, run the following command in your project directory:

```bash
npm install @capacitor/http
```

## Usage

1. Import the `@capacitor/http` package in your TypeScript file:

```typescript
import { Plugins } from '@capacitor/core';
const { Http } = Plugins;
```

2. Make an HTTP request using the `Http.request()` method. Here's an example of making a GET request:

```typescript
async function makeHttpRequest() {
  try {
    const response = await Http.request({
      method: 'GET',
      url: 'https://api.example.com/data',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

makeHttpRequest();
```

3. You can also make other types of requests such as POST, PUT, and DELETE. Just modify the `method` property accordingly.

```typescript
const response = await Http.request({
  method: 'POST',
  url: 'https://api.example.com/data',
  headers: {
    'Content-Type': 'application/json',
  },
  data: {
    name: 'John Doe',
    email: 'john@example.com',
  },
});
```

4. To handle file uploads, you can use the `multipartFormData` property. Here's an example:

```typescript
const response = await Http.request({
  method: 'POST',
  url: 'https://api.example.com/upload',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  multipartFormData: [
    {
      name: 'file',
      filename: 'image.jpg',
      data: base64EncodedImage,
      contentType: 'image/jpeg',
    },
    {
      name: 'name',
      data: 'John Doe',
    },
  ],
});
```

## Conclusion

In this tutorial, we learned how to use the `@capacitor/http` package to make HTTP requests in a Capacitor app. We covered installation, basic usage for GET and POST requests, and handling file uploads.

Now you can leverage the power of `@capacitor/http` to interact with APIs and retrieve data in your Capacitor apps.

Frontmatter:
```
---
title: "Using @capacitor/http Package"
description: "Learn how to use the @capacitor/http package in your Capacitor app to make HTTP requests."
created_at: "2021-05-12"
published: true
slug: "capacitor-plugin-http"
---
```

Remember to replace the values in double quotes with the appropriate content.

That's all for this tutorial! Happy coding!