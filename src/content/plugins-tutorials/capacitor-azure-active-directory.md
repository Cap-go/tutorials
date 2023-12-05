---
title: "Using Capacitor-AAD Package"
description: "A tutorial on how to use the capacitor-aad package for Azure Active Directory authentication in your cross-platform apps and PWAs."
created_at: "2021-10-12"
published: true
slug: "capacitor-azure-active-directory"
---

# Using Capacitor-AAD Package

In this tutorial, we will learn how to use the capacitor-aad package to implement Azure Active Directory authentication in your cross-platform apps and PWAs. 

## Installation

First, let's start by installing the capacitor-aad package. You can install it via NPM or Yarn by running the following command:

```bash
npm install capacitor-aad
```

or 

```bash
yarn add capacitor-aad
```

## Usage

### In JavaScript

To use the capacitor-aad package in a plain JavaScript application, follow these steps:

1. Import the package in your JavaScript file:

```js
import ActiveDirectoryPlugin from '@capacitor/active-directory-plugin'
```

2. Initialize the plugin with your configuration:

```js
const config = {
  clientId: 'YOUR_CLIENT_ID',
}
const activeDirectoryAuth = new ActiveDirectoryPlugin(config)
```

Make sure to replace `YOUR_CLIENT_ID` with your own Azure AD client ID.

3. Use the plugin to trigger the login flow:

```js
activeDirectoryAuth.login()
```

You have now implemented Azure AD authentication in your JavaScript application using the capacitor-aad package!

### Multi-Tenant Support

By default, the capacitor-aad package provides multi-tenant support. This means that any Microsoft account can authenticate to your application. If you want to restrict the authentication to specific tenants, you can provide the `tenant` property in the configuration:

```js
const config = {
  tenant: 'YOUR_TENANT_ID',
  clientId: 'YOUR_CLIENT_ID',
}
```

Replace `YOUR_TENANT_ID` with your desired tenant ID.

### Token Issuers Filtering

If you allow multi-tenant authentication and want to restrict the login to specific tenants, you should implement your own method of filtering the token issuers. This will ensure that only tenants who are allowed to login can access your application.

## Conclusion

In this tutorial, we learned how to use the capacitor-aad package to implement Azure Active Directory authentication in cross-platform apps and PWAs. We covered installation, usage in JavaScript, multi-tenant support, and token issuers filtering. Now you can leverage Azure AD for handling authentication in your applications.

For a full implementation example, you can refer to the [sample](https://github.com/Azure-Samples/active-directory-javascript-singlepageapp-dotnet-webapi) provided by the package.

Remember to always refer to the package documentation and the official Azure AD documentation for detailed information and best practices.

Happy coding!