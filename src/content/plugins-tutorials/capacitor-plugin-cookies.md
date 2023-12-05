---
title: "Using capacitor-plugin-cookies"
description: "A tutorial on how to use the capacitor-plugin-cookies package"
created_at: "2021-10-27"
published: true
slug: capacitor-plugin-cookies
---

# Using capacitor-plugin-cookies

In this tutorial, we will learn how to use the capacitor-plugin-cookies package to manage cookies in your Capacitor application.

## Installation

First, make sure you have Capacitor installed globally. If not, you can install it using the following command:

```bash
npm install -g @capacitor/core @capacitor/cli
```

Next, install the capacitor-plugin-cookies package in your project:

```bash
npm install capacitor-plugin-cookies
```

## Register the Plugin

To use the capacitor-plugin-cookies package in your Capacitor project, you need to register the plugin.

Open your `capacitor.config.json` file and add the following entry to the `plugins` array:

```json
{
  "name": "CookiesPlugin",
  "path": "node_modules/capacitor-plugin-cookies"
}
```

## Usage

### Set a Cookie

To set a cookie, you can use the `setCookie` method provided by the plugin. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';

const { CookiesPlugin } = Plugins;

// Set a cookie
await CookiesPlugin.setCookie({
  name: 'myCookie',
  value: 'exampleValue',
  domain: 'example.com',
  path: '/',
  expires: new Date().getTime() + 3600 * 1000, // Set the expiration time to 1 hour from now
  secure: true, // If set to true, the cookie will only be sent over HTTPS
  httpOnly: false // If set to true, the cookie will only be accessible via HTTP requests
});
```

### Get a Cookie

To get the value of a cookie, you can use the `getCookie` method. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';

const { CookiesPlugin } = Plugins;

// Get a cookie
const cookie = await CookiesPlugin.getCookie('myCookie');
console.log(cookie.value); // Log the cookie value
```

### Delete a Cookie

To delete a cookie, you can use the `deleteCookie` method. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';

const { CookiesPlugin } = Plugins;

// Delete a cookie
await CookiesPlugin.deleteCookie('myCookie');
```

## Conclusion

In this tutorial, we have learned how to install and use the capacitor-plugin-cookies package to manage cookies in a Capacitor application. You can now set, get, and delete cookies using the provided methods.