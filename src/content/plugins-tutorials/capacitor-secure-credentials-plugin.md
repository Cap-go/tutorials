---
title: "Using capacitor-secure-credentials-plugin"
description: "A tutorial on how to use the capacitor-secure-credentials-plugin package for secure credential storage in your Capacitor projects."
created_at: "November 18, 2021"
published: true
slug: "capacitor-secure-credentials-plugin"
---

# Using capacitor-secure-credentials-plugin

The **capacitor-secure-credentials-plugin** is a powerful Capacitor plugin that allows you to securely store credentials and sensitive information in your Capacitor projects. In this tutorial, we will walk through the process of setting up and using this plugin in your application.

## Prerequisites

Before we begin, make sure you have the following installed:
- Node.js and npm
- Capacitor CLI

## Installation

To start using the **capacitor-secure-credentials-plugin**, follow these steps:

1. Install the plugin package using npm:

    ```shell
    npm install capacitor-secure-credentials-plugin
    ```

2. Add the plugin to your Capacitor project:

    ```shell
    npx cap plugin add capacitor-secure-credentials-plugin
    ```

3. Sync the plugin with your project:

    ```shell
    npx cap sync
    ```

## Basic Usage

Once the plugin is installed and synced with your project, you can start using it to store and retrieve secure credentials.

### Storing Credentials

To store credentials, you need to provide a service name and the credentials to be stored. Here's an example:

```typescript
import { SecureCredentialsPlugin } from 'capacitor-secure-credentials-plugin';

const storeCredentials = async () => {
  try {
    const credentials = {
      username: 'myUsername',
      password: 'myPassword',
    };

    await SecureCredentialsPlugin.storeCredentials({
      service: 'myService',
      credentials,
    });

    console.log('Credentials stored successfully!');
  } catch (error) {
    console.error('Failed to store credentials:', error);
  }
};
```

### Retrieving Credentials

To retrieve credentials, you only need to provide the service name. Here's an example:

```typescript
import { SecureCredentialsPlugin } from 'capacitor-secure-credentials-plugin';

const retrieveCredentials = async () => {
  try {
    const credentials = await SecureCredentialsPlugin.retrieveCredentials({
      service: 'myService',
    });

    console.log('Retrieved credentials:', credentials);
  } catch (error) {
    console.error('Failed to retrieve credentials:', error);
  }
};
```

## Advanced Usage

The **capacitor-secure-credentials-plugin** offers additional features and options for managing and securing credentials. Please refer to the plugin's official documentation for more information on these advanced usage scenarios.

## Conclusion

In this tutorial, we have learned how to install and use the **capacitor-secure-credentials-plugin** for securely storing credentials in Capacitor projects. With this plugin, you can ensure that sensitive information is stored securely and accessed only when needed.