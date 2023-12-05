---
title: "Using @atomlessmind/myauth Package"
description: "Learn how to use the @atomlessmind/myauth package to implement authentication in your Capacitor plugin."
created_at: "2022-01-12"
published: true
slug: "myauthcapplugin"
---

# Using @atomlessmind/myauth Package

In this tutorial, we will learn how to use the `@atomlessmind/myauth` package to implement authentication in your Capacitor plugin.

## Installation

To get started, you need to install the `@atomlessmind/myauth` package in your Capacitor project:

```shell
yarn add @atomlessmind/myauth
```

## Usage

The `@atomlessmind/myauth` package provides a simple API for handling authentication. Here's how you can use it in your Capacitor plugin:

1. Import the necessary modules:

```typescript
import { Plugins } from '@capacitor/core';
import { MyAuthPlugin } from '@atomlessmind/myauth';
```

2. Use the `login` method to initiate the authentication flow:

```typescript
const { MyAuthPlugin } = Plugins;

const result = await MyAuthPlugin.login({
  clientId: '<client-id>',
  scopes: ['<scope-1>', '<scope-2>', ...],
});
```

Replace `<client-id>` with your client ID and `<scope-1>`, `<scope-2>`, etc. with the required authentication scopes.

3. Handle the result of the authentication flow:

```typescript
if (result.accessToken) {
  // Authentication successful
  // Access token is available in result.accessToken
} else {
  // Authentication failed
  // Error details are available in result.error
}
```

4. Use the access token for authenticated API calls:

```typescript
// Make API call using the access token
const apiResponse = await fetch('<api-url>', {
  headers: {
    Authorization: `Bearer ${result.accessToken}`,
  },
});

// Handle the API response
const apiData = await apiResponse.json();
console.log(apiData);
```

Replace `<api-url>` with the URL of the API you want to call.

## Conclusion

In this tutorial, we learned how to use the `@atomlessmind/myauth` package to implement authentication in your Capacitor plugin. We covered the installation process, how to initiate the authentication flow, handle the authentication result, and make authenticated API calls using the access token.