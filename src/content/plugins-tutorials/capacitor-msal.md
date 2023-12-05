---
title: "Using capacitor-msal package"
description: "A tutorial on how to use the capacitor-msal package for authentication in Capacitor apps"
created_at: "2021-10-21"
published: true
slug: "capacitor-msal"
---

# Using capacitor-msal package

This tutorial will guide you through the process of setting up and using the capacitor-msal package for authentication in your Capacitor apps.

## Installation

To get started, you need to install the capacitor-msal package using NPM or Yarn. Open your project's terminal and run the following command:

```bash
npm install capacitor-msal
```

## Configuration

After installing the capacitor-msal package, you need to configure it with your authentication settings. Create a new file named `msal.config.json` in the root of your project and add the following configuration:

```json
{
  "auth": {
    "clientId": "YOUR_CLIENT_ID",
    "authority": "YOUR_AUTHORITY",
    "redirectUri": "YOUR_REDIRECT_URI"
  }
}
```

Replace `YOUR_CLIENT_ID`, `YOUR_AUTHORITY`, and `YOUR_REDIRECT_URI` with your actual values. These values can be obtained from your Azure Active Directory (AAD) or any other authentication provider you are using.

## Initializing the Plugin

To use the capacitor-msal plugin in your app, you need to initialize it first. Open the `capacitor.config.json` file and add the following to the `plugins` section:

```json
{
  "plugins": {
    "CapacitorMsal": {
      "webPlugin": "CapacitorMsalWeb",
      "config": {
        "msalConfigFile": "msal.config.json"
      }
    }
  }
}
```

## Authenticating Users

Once the capacitor-msal plugin is initialized, you can start authenticating users in your app. Import the `CapacitorMsal` class and use the `login` method to authenticate a user:

```typescript
import { CapacitorMsal } from 'capacitor-msal';

async function login() {
  try {
    const result = await CapacitorMsal.login();
    const accessToken = result.accessToken;
    // Use the access token for further API calls or other tasks
  } catch (error) {
    console.error('Authentication failed:', error);
  }
}
```

The `login` method returns an object with the `accessToken` property containing the access token for the authenticated user.

## Logging Out Users

To log out a user, use the `logout` method:

```typescript
import { CapacitorMsal } from 'capacitor-msal';

async function logout() {
  try {
    await CapacitorMsal.logout();
    // Perform any additional logout tasks
  } catch (error) {
    console.error('Logout failed:', error);
  }
}
```

## Final Words

In this tutorial, you learned how to install and configure the capacitor-msal package for authentication in Capacitor apps. You also learned how to authenticate users and log them out using the capacitor-msal plugin.

Explore the plugin's documentation for more information on additional features and customization options. Happy coding!

For more information, you can refer to the official [capacitor-msal documentation](https://github.com/PLACEHOLDER_LINK) and [MSAL official documentation](https://github.com/PLACEHOLDER_LINK).