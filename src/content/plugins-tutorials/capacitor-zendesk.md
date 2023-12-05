---
title: "Using Capacitor-Zendesk Package"
description: "A tutorial on how to use the Capacitor-Zendesk package in your Capacitor apps"
created_at: "2021-11-02"
published: true
slug: "capacitor-zendesk"
---

# Using Capacitor-Zendesk Package

In this tutorial, we will learn how to use the Capacitor-Zendesk package in your Capacitor apps. The Capacitor-Zendesk package allows you to easily integrate the Zendesk SDK into your apps, enabling you to provide customer support and ticketing functionality.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

1. Capacitor installed in your project. If you don't have Capacitor installed, you can install it by running the following command:

   ```
   npm install -g @capacitor/cli
   ```

2. An existing Zendesk account. If you don't have one, you can sign up for a free trial on the Zendesk website.

## Installation

To install the Capacitor-Zendesk package, open your terminal and navigate to your Capacitor project's root directory. Then run the following command:

```
npm install capacitor-zendesk
```

This will install the Capacitor-Zendesk package and its dependencies in your project.

## Configuration

Once the package is installed, you need to configure it with your Zendesk credentials. Open the `capacitor.config.json` file in your project's root directory and add the following configuration:

```json
{
  ...
  "plugins": {
    "ZendeskPlugin": {
      "url": "https://your-zendesk-subdomain.zendesk.com",
      "appId": "your-zendesk-app-id",
      "clientId": "your-zendesk-client-id"
    }
  }
}
```

Make sure to replace the values for `"url"`, `"appId"`, and `"clientId"` with your own Zendesk subdomain, app ID, and client ID respectively.

## Usage

Now that the Capacitor-Zendesk package is installed and configured, you can start using its functionality in your app. Here are some examples of common use cases:

### Initialize Zendesk SDK

To initialize the Zendesk SDK, add the following code to your app's entry file (e.g., `src/index.ts`):

```typescript
import { Plugins } from '@capacitor/core';

const { ZendeskPlugin } = Plugins;

ZendeskPlugin.initialize();
```

This will initialize the Zendesk SDK with the configured credentials.

### Show Help Center

To show the Help Center in your app, add the following code to the appropriate component file:

```typescript
import { Plugins } from '@capacitor/core';

const { ZendeskPlugin } = Plugins;

ZendeskPlugin.showHelpCenter();
```

This will open the Help Center UI within your app, allowing users to browse and search for help articles.

### Show Ticket Create Screen

To show the ticket creation screen in your app, add the following code to the appropriate component file:

```typescript
import { Plugins } from '@capacitor/core';

const { ZendeskPlugin } = Plugins;

ZendeskPlugin.showTicketCreate();
```

This will open the ticket creation UI within your app, allowing users to submit support tickets.

## Conclusion

In this tutorial, we have learned how to use the Capacitor-Zendesk package to integrate the Zendesk SDK into your Capacitor apps. We covered the installation, configuration, and usage of the package for common use cases such as initializing the SDK, showing the Help Center, and creating support tickets. With this knowledge, you can enhance your apps with robust customer support and ticketing functionality using Zendesk.

Now you are ready to provide an excellent customer support experience to your app users with the power of Capacitor-Zendesk!

Happy coding!