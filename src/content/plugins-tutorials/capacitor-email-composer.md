---
title: "Using capacitor-email-composer Package"
description: "Learn how to use the capacitor-email-composer package to open a native E-Mail Composer within your Capacitor app."
created_at: "2022-01-01"
published: true
slug: "capacitor-email-composer"
---

# Using capacitor-email-composer Package

The capacitor-email-composer package allows you to easily open a native E-Mail Composer within your Capacitor app. This means that users can compose and send emails directly from your app without having to switch to their email client. In this tutorial, we will walk you through the process of installing the capacitor-email-composer package and using it to open the E-Mail Composer.

## Installation

To get started, you need to install the capacitor-email-composer package in your Capacitor app. Open your terminal and run the following command:

```bash
npm install capacitor-email-composer
npx cap sync
```

This will install the package and sync the native projects in your Capacitor app.

## Opening the E-Mail Composer

Once the capacitor-email-composer package is installed, you can use its `open()` method to open the E-Mail Composer. Here's an example:

```typescript
import { EmailComposer } from 'capacitor-email-composer';

EmailComposer.open({
  // Specify the email details
  to: 'john@example.com',
  cc: 'jane@example.com',
  subject: 'Hello',
  body: 'This is the body of the email',

  // Add attachments if needed
  attachments: [
    {
      type: 'absolute',
      path: 'storage/sdcard/icon.png', // Android
    },
    {
      type: 'resource',
      path: 'icon.png',
    },
    {
      type: 'asset',
      path: '/icon/favicon.png',
    },
    {
      type: 'base64',
      name: 'image.jpg',
      data: 'base64-encoded-image-data',
    }
  ]
});
```

In this example, we are specifying the email details such as the recipients, subject, and body. You can also add attachments by providing their type (e.g., `absolute`, `resource`, `asset`, or `base64`) and the corresponding path or base64-encoded data.

## Conclusion

Congratulations! You have learned how to use the capacitor-email-composer package to open a native E-Mail Composer within your Capacitor app. Now you can allow your app users to compose and send emails directly from your app. Happy coding!

Remember to check the [official documentation](https://www.npmjs.com/package/capacitor-email-composer) for more details and options available in the capacitor-email-composer package.