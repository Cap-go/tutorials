---
title: "Using the @teamhive/capacitor-email Package"
description: "A tutorial on how to use the @teamhive/capacitor-email package in your Capacitor app."
created_at: "2022-01-01"
published: true
slug: capacitor-email
---

# Using the @teamhive/capacitor-email Package

In this tutorial, we will learn how to use the `@teamhive/capacitor-email` package in your Capacitor app. The package provides functionality to send emails using Capacitor plugins.

## Prerequisites

Before we get started, make sure you have the following:

- Capacitor installed in your project.
- An existing Capacitor app set up.

## Step 1: Install the package

To begin, we need to install the `@teamhive/capacitor-email` package. Open your terminal and run the following command:

```bash
npm install @teamhive/capacitor-email
```

## Step 2: Register the plugin

After installing the package, we need to register it with Capacitor. Open your `capacitor.config.json` file and add the following entry under the `plugins` section:

```json
{
  "plugins": {
    "Email": {
      "ios": "TeamHiveCapacitorEmail",
      "android": "com.teamhive.capacitoremail.Email"
    }
  }
}
```

## Step 3: Create an email template

Next, let's create a basic email template. Create a new file called `email-template.html` and add the following content:

```html
<!DOCTYPE html>
<html>

<head>
  <title>My App - Email</title>
</head>

<body>
  <h1>Hello,</h1>
  <p>This is an example email template for my app.</p>
  <p>Regards,</p>
  <p>Your Name</p>
</body>

</html>
```

Feel free to customize the content of the email template to suit your needs.

## Step 4: Send an email

Now that we have everything set up, let's send an email using the `@teamhive/capacitor-email` package. In your code, import the `Email` plugin from Capacitor:

```javascript
import { Plugins } from '@capacitor/core';

const { Email } = Plugins;
```

To send an email, use the `Email.open` method and pass in the necessary parameters:

```javascript
Email.open({
  to: 'recipient@example.com',
  subject: 'Greetings from my app!',
  body: 'Check out this cool feature in my app.',
  isHtml: true,
  attachments: ['path/to/attachment.pdf'],
  templateFile: 'path/to/email-template.html'
});
```

Make sure to replace the placeholder values with the actual email address, subject, body, and file paths.

That's it! You have successfully integrated the `@teamhive/capacitor-email` package into your Capacitor app and sent an email.

## Conclusion

In this tutorial, we learned how to use the `@teamhive/capacitor-email` package to send emails in a Capacitor app. We covered the installation process, plugin registration, creating an email template, and sending an email with attachments. Feel free to explore more features of the package and customize the email template as per your app's requirements.

Remember to check the official documentation of the `@teamhive/capacitor-email` package for more detailed information and advanced usage. Happy emailing!