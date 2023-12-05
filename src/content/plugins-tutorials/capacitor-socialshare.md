---
title: "Using capacitor-socialshare package"
description: "Learn how to use the capacitor-socialshare package to enable social sharing in your Ionic Capacitor app."
created_at: "2022-03-15"
published: true
slug: "capacitor-socialshare"
---

# Using capacitor-socialshare package

In this tutorial, we will learn how to use the capacitor-socialshare package to enable social sharing in your Ionic Capacitor app.

## Installation

To get started, we need to install the capacitor-socialshare package. Open your terminal or command prompt and run the following command:

```shell
npm install --save capacitor-socialshare
```

This command will install the package and save it as a dependency in your project's `package.json` file.

## Importing the module

Once the package is installed, we can import the necessary modules in our TypeScript file. Open the file where you want to use the capacitor-socialshare package and add the following code at the top:

```typescript
import { Plugins } from '@capacitor/core';
import { ShareOption } from 'capacitor-socialshare';
```

This code imports the required modules from the capacitor-core and capacitor-socialshare packages.

## Sharing content

To share content using the capacitor-socialshare package, we need to define the sharing options and call the `share` method. Let's add the following code to share a message and a URL:

```typescript
shareOption: ShareOption = {
  subject: 'YOUR SUBJECT',
  body: 'YOUR MESSAGE BODY',
  url: 'YOUR APP/PLAY STORE URL',
};

Plugins.SocialShare.share(this.shareOption)
  .then((res) => {
    console.log(res.value);
  })
  .catch((err) => {
    console.log(err);
  });
```

Make sure to replace `'YOUR SUBJECT'`, `'YOUR MESSAGE BODY'`, and `'YOUR APP/PLAY STORE URL'` with your own values.

The `share` method will show the share intent on Android devices and the share action on iOS devices.

## Conclusion

Congratulations! You have successfully learned how to use the capacitor-socialshare package to enable social sharing in your Ionic Capacitor app. With this package, you can easily share content with other apps installed on the user's device.

Remember to check the [official documentation](https://github.com/rahadur/capacitor-socialshare) for more information and additional features provided by the capacitor-socialshare package.