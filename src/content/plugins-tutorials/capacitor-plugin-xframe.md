---
title: "Using capacitor-plugin-xframe"
description: "A tutorial on how to use the capacitor-plugin-xframe package to work with X-Frame-Options in Capacitor"
created_at: "2022-05-31"
published: true
slug: "capacitor-plugin-xframe"
---

# Using capacitor-plugin-xframe

In this tutorial, we will learn how to use the capacitor-plugin-xframe package to work with X-Frame-Options in Capacitor. X-Frame-Options is a security feature used to control if a website can be embedded within an iframe.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed globally on your machine. You can install it by running the following command:

```shell
npm install -g @capacitor/core @capacitor/cli
```

## Installing capacitor-plugin-xframe

To install the capacitor-plugin-xframe package in your Capacitor project, follow these steps:

1. Open a terminal and navigate to your Capacitor project directory.

2. Run the following command to install the plugin:

```shell
npm install capacitor-plugin-xframe
```

3. Link the plugin to your project by running the following command:

```shell
npx cap sync
```

## Using capacitor-plugin-xframe

Once the capacitor-plugin-xframe package is installed and linked to your project, you can start using it to work with X-Frame-Options.

### Setting the X-Frame-Options Header

To set the X-Frame-Options header for a specific route or page, you can use the `setXFrameOptions` method provided by the plugin. Here's an example:

```javascript
import { XFrameOptionsPlugin } from 'capacitor-plugin-xframe';

// ...

const setXFrameOptions = async () => {
  try {
    await XFrameOptionsPlugin.setXFrameOptions({ mode: 'DENY' });
    console.log('X-Frame-Options set successfully.');
  } catch (error) {
    console.error('Failed to set X-Frame-Options:', error);
  }
};

setXFrameOptions();
```

In the example above, we set the X-Frame-Options header mode to 'DENY', which will prevent the page from being displayed in an iframe.

### Retrieving the X-Frame-Options Header

To retrieve the current X-Frame-Options header value for a specific route or page, you can use the `getXFrameOptions` method provided by the plugin. Here's an example:

```javascript
import { XFrameOptionsPlugin } from 'capacitor-plugin-xframe';

// ...

const getXFrameOptions = async () => {
  try {
    const result = await XFrameOptionsPlugin.getXFrameOptions();
    console.log('X-Frame-Options:', result.value);
  } catch (error) {
    console.error('Failed to retrieve X-Frame-Options:', error);
  }
};

getXFrameOptions();
```

In the example above, we retrieve the current X-Frame-Options header value and log it to the console.

## Conclusion

In this tutorial, we learned how to use the capacitor-plugin-xframe package to work with X-Frame-Options in Capacitor. By setting the X-Frame-Options header, you can control if a page can be embedded within an iframe, enhancing the security of your application.

Remember to refer to the official capacitor-plugin-xframe documentation for more detailed information and additional features.

Happy coding!