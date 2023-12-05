---
title: "Using the capacitor-yooga-zoop-sdk Package"
description: "Learn how to use the capacitor-yooga-zoop-sdk package in your Capacitor app."
created_at: "2022-02-09"
published: true
slug: "capacitor-yooga-zoop-sdk"
---

# Using the capacitor-yooga-zoop-sdk Package

In this tutorial, we will guide you through the process of using the `capacitor-yooga-zoop-sdk` package in your Capacitor app. The `capacitor-yooga-zoop-sdk` package allows you to integrate the Yooga Zoop SDK into your app, enabling you to access various features and functionalities offered by the Yooga Zoop platform.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- Capacitor CLI installed globally on your system.
- A Capacitor app set up and configured.

If you haven't already installed the Capacitor CLI, you can do so by running the following command:

```bash
npm install -g @capacitor/cli
```

For setting up a new Capacitor app, you can use the Capacitor Create App command:

```bash
npx @capacitor/cli create
```

## Installation

To install the `capacitor-yooga-zoop-sdk` package, navigate to your Capacitor app's root directory and run the following command:

```bash
npm install capacitor-yooga-zoop-sdk
```

## Integration Steps

Now that you have installed the `capacitor-yooga-zoop-sdk` package, follow these steps to integrate it into your Capacitor app:

1. Open your project's `capacitor.config.json` file.

2. Add the following inside the `"plugins"` section:

```json
{
  "name": "YoogaZoop",
  "path": "node_modules/capacitor-yooga-zoop-sdk"
}
```

3. Save the changes to the `capacitor.config.json` file.

4. Open your project's root `index.html` file and add the following script tag inside the `<head>` section:

```html
<script src="https://cdn.yoogazoop.com/sdk/yooga-zoop-sdk.min.js"></script>
```

5. Save the changes to the `index.html` file.

6. You can now access the Yooga Zoop SDK methods and features by importing and using the `YoogaZoop` object in your code. For example:

```javascript
import { Plugins } from '@capacitor/core';

const { YoogaZoop } = Plugins;

// Use YoogaZoop methods here
```

## Example Usage

Here is an example of how you can use the `capacitor-yooga-zoop-sdk` package in your Capacitor app:

```javascript
import { Plugins } from '@capacitor/core';

const { YoogaZoop } = Plugins;

async function initializeYoogaZoopSdk() {
  try {
    // Initialize the Yooga Zoop SDK
    await YoogaZoop.initializeSDK('YOUR_API_KEY', 'YOUR_APP_ID');

    // Authenticate the user
    await YoogaZoop.login('USER_ID', 'USER_TOKEN');

    // Retrieve user information
    const userInfo = await YoogaZoop.getUserInfo();
    console.log(userInfo);

    // Perform other Yooga Zoop SDK operations
    // ...

  } catch (error) {
    console.error(error);
  }
}
```

In this example, we first import the `YoogaZoop` object from the `@capacitor/core` package. We then define an `initializeYoogaZoopSdk` function that makes use of various Yooga Zoop SDK methods such as `initializeSDK`, `login`, and `getUserInfo`. You can customize this example code according to your specific use case.

That's it! You have successfully integrated the `capacitor-yooga-zoop-sdk` package into your Capacitor app and learned how to use it.

## Conclusion

In this tutorial, we covered the steps required to use the `capacitor-yooga-zoop-sdk` package in your Capacitor app. We walked through the installation process, integration steps, and provided an example of using the Yooga Zoop SDK methods.

Now you can leverage the features offered by the Yooga Zoop platform and enhance your Capacitor app with advanced functionality. Happy coding!