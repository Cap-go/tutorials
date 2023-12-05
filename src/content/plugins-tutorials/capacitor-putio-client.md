---
title: "Tutorial: Using Capacitor Putio Client Package"
description: "Learn how to use the Capacitor Putio Client package to interact with the Put.io API in your Capacitor app."
created_at: "2021-07-20"
published: true
slug: "capacitor-putio-client"
---

# Tutorial: Using Capacitor Putio Client Package

In this tutorial, we will learn how to use the Capacitor Putio Client package to interact with the Put.io API in your Capacitor app.

## Step 1: Install the Capacitor Putio Client Package

To get started, navigate to your Capacitor project directory and install the Capacitor Putio Client package using npm:

```bash
npm install capacitor-putio-client
```

## Step 2: Import the Capacitor Plugins

Next, open your `src/app/app.component.ts` file and import the necessary Capacitor plugins:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorPutioClient } = Plugins;
```

## Step 3: Authenticate with Put.io

Before accessing any Put.io functionality, we need to authenticate with our Put.io account. Add the following code snippet to your desired component:

```typescript
async authenticate() {
  try {
    const { token } = await CapacitorPutioClient.authenticate({
      client_id: 'YOUR_PUTIO_CLIENT_ID',
      client_secret: 'YOUR_PUTIO_CLIENT_SECRET',
      redirect_uri: 'YOUR_REDIRECT_URI',
    });

    console.log('Authentication successful!');
    console.log('Access Token:', token);
  } catch (error) {
    console.error('Authentication failed:', error);
  }
}
```
Replace `YOUR_PUTIO_CLIENT_ID`, `YOUR_PUTIO_CLIENT_SECRET`, and `YOUR_REDIRECT_URI` with your own Put.io credentials.

## Step 4: Use Put.io API Methods

Now that we are authenticated, we can use the different methods provided by the Capacitor Putio Client package to interact with the Put.io API. Here are a few examples:

- Get Account Info:

  ```typescript
  async getAccountInfo() {
    try {
      const { info } = await CapacitorPutioClient.getAccountInfo();

      console.log('Account Info:', info);
    } catch (error) {
      console.error('Failed to get account info:', error);
    }
  }
  ```

- List Files:

  ```typescript
  async listFiles() {
    try {
      const { files } = await CapacitorPutioClient.listFiles();

      console.log('Files:', files);
    } catch (error) {
      console.error('Failed to list files:', error);
    }
  }
  ```

- Create Folder:

  ```typescript
  async createFolder() {
    try {
      const { folder } = await CapacitorPutioClient.createFolder({
        name: 'New Folder',
      });

      console.log('New Folder:', folder);
    } catch (error) {
      console.error('Failed to create folder:', error);
    }
  }
  ```

- Upload File:

  ```typescript
  async uploadFile() {
    try {
      const { file } = await CapacitorPutioClient.uploadFile({
        filePath: 'path/to/file',
      });

      console.log('Uploaded File:', file);
    } catch (error) {
      console.error('Failed to upload file:', error);
    }
  }
  ```

Feel free to explore the official Capacitor Putio Client documentation for more available methods and their respective parameters.

## Conclusion

In this tutorial, we have learned how to install and use the Capacitor Putio Client package to interact with the Put.io API in your Capacitor app. We covered the authentication process, as well as some common API methods. Now, you can leverage the power of Put.io in your Capacitor project.

Happy coding!