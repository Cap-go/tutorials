---
title: "Tutorial: Using @assimalign/msal-capacitor-plugin"
description: "Learn how to use the @assimalign/msal-capacitor-plugin package for web, iOS, and Android authentication."
created_at: "2021-09-30"
published: true
slug: "assim-js-packages"
---

# Tutorial: Using @assimalign/msal-capacitor-plugin

In this tutorial, we will learn how to use the `@assimalign/msal-capacitor-plugin` package for web, iOS, and Android authentication. This package provides a solution for integrating MSAL (Microsoft Authentication Library) into your Capacitor projects.

## Installation

To get started, you'll need to install the `@assimalign/msal-capacitor-plugin` package. Open your terminal and navigate to your project directory. Then run the following command:

```bash
npm install @assimalign/msal-capacitor-plugin
```

## Configuration

Before you can use the MSAL Capacitor plugin, you'll need to configure it with your Azure AD tenant information.

1. Open your project's `capacitor.config.json` file.

2. Locate the `"plugins"` section in the file and add the following entry:

```json
{
  "name": "@assimalign/msal-capacitor-plugin",
  "appId": "YOUR_APP_ID",
  "authority": "YOUR_AUTHORITY",
  "redirectUri": "YOUR_REDIRECT_URI"
}
```

Replace `YOUR_APP_ID` with your Azure AD application ID, `YOUR_AUTHORITY` with your Azure AD authority URL, and `YOUR_REDIRECT_URI` with the redirect URI of your application.

## Usage

Now that the plugin is installed and configured, you can use it in your code to authenticate users.

Import the `MsalPlugin` object from the `@assimalign/msal-capacitor-plugin` package:

```typescript
import { MsalPlugin } from '@assimalign/msal-capacitor-plugin';
```

Create an instance of the `MsalPlugin` class:

```typescript
const msalPlugin = new MsalPlugin();
```

Use the `login` method to initiate the authentication process:

```typescript
msalPlugin.login()
  .then((result) => {
    // Handle successful login
  })
  .catch((error) => {
    // Handle login error
  });
```

The `login` method will open a login dialog for the user to enter their credentials and authenticate.

You can also use the `getToken` method to retrieve an access token for making API requests:

```typescript
msalPlugin.getToken()
  .then((token) => {
    // Use the access token for API requests
  })
  .catch((error) => {
    // Handle token retrieval error
  });
```

The `getToken` method will automatically refresh the token if it has expired or is about to expire.

## Conclusion

In this tutorial, we have learned how to use the `@assimalign/msal-capacitor-plugin` package for web, iOS, and Android authentication. We covered installation, configuration, and basic usage of the plugin. Now you can integrate MSAL into your Capacitor projects and provide secure authentication for your users.

Remember to consult the official documentation for more advanced features and customization options offered by the plugin.

Happy coding!