---
title: "Using @alitajs/http Package"
description: "A tutorial on how to use the @alitajs/http package for native HTTP requests in Capacitor applications."
created_at: "2021-05-24"
published: true
slug: alitajs-native-http
---

# Using @alitajs/http Package

The `@alitajs/http` package is a Capacitor community plugin that provides support for native HTTP requests, file download/uploads, and cookie management. In this tutorial, we will explore the usage of this package in Capacitor applications.

## Installation

To install the `@alitajs/http` package, run the following command:

```bash
npm install @alitajs/http
npx cap sync
```

If you are using Capacitor 2.x, you need to install a version less than 1.0.0. You can do that by specifying the version in your `package.json` or installing like this:

```bash
npm install @alitajs/http@0.x
```

## Configuration

In most cases, no configuration is required for this plugin. However, if your Android application connects using self-signed certificates or without encryption, you may need to configure network security. See [Network security configuration](https://developer.android.com/training/articles/security-config) for more information.

## Usage

To use the `@alitajs/http` package in your Capacitor application, follow these steps:

1. Import the `Http` module in your TypeScript file:

```typescript
import { Http } from '@alitajs/http';
```

2. Make an HTTP GET request:

```typescript
const doGet = async () => {
  const options = {
    url: 'https://example.com/my/api',
    headers: { 'X-Fake-Header': 'Max was here' },
    params: { size: 'XL' },
  };

  const response = await Http.get(options);
};
```

3. Make an HTTP POST request:

```typescript
const doPost = async () => {
  const options = {
    url: 'https://example.com/my/api',
    headers: { 'X-Fake-Header': 'Thomas was here' },
    data: { foo: 'bar', cool: true },
  };

  const response = await Http.post(options);
};
```

Note: The `data` field in the POST request can be a raw JavaScript object, but it must be JSON serializable.

That's it! You have successfully learned how to use the `@alitajs/http` package for making native HTTP requests in Capacitor applications.

Feel free to explore other methods and functionalities provided by the package to suit your specific requirements.