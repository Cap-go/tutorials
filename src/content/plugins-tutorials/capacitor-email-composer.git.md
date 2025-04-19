```markdown
---
"title": "Using Capacitor-Email-Composer Package",
"description": "Tutorial on how to use the capacitor-email-composer package for opening a native E-mail Composer within a Capacitor app.",
"created_at": "2023-11-03",
"published": true,
"slug": "capacitor-email-composer.git"
---

# Using Capacitor-Email-Composer Package

The `capacitor-email-composer` package allows you to open a native E-mail Composer within your Capacitor app, making it easy to integrate email functionality. Below is a tutorial on how to use this package effectively.

## Installation

To install the `capacitor-email-composer` package, run the following commands:

```bash
npm install capacitor-email-composer
npx cap sync
```

## Adding Attachments

You can add attachments to the draft email by utilizing the `attachments` option in the `open(...)` method. The following are the different types of attachments you can add:

### Device Storage

```ts
import { EmailComposer } from 'capacitor-email-composer'

EmailComposer.open({
  attachments: [{
    type: 'absolute',
    path: 'storage/sdcard/icon.png' // Android
  }]
})
```

### Native Resources

```ts
import { EmailComposer } from 'capacitor-email-composer'

EmailComposer.open({
  attachments: [{
    type: 'resource',
    path: 'icon.png'
  }]
})
```

### Assets

```ts
import { EmailComposer } from 'capacitor-email-composer'

EmailComposer.open({
  attachments: [{
    type: 'asset',
    path: '/icon/favicon.png'
  }]
})
```

### Base64

```ts
import { EmailComposer } from 'capacitor-email-composer'

EmailComposer.open({
  attachments: [{
    type: 'base64',
    path: '...',
    name: 'image.png'
  }]
})
```

## API

The `capacitor-email-composer` package provides the following API methods:

- `hasAccount()`: Checks if an email account is set up on the device.
- `open(...)`: Opens the email composer with options like recipients, subject, body, CC, BCC, and attachments.

For more detailed usage and examples, refer to the [official documentation](https://www.npmjs.com/package/capacitor-email-composer).

## Changelog

Stay updated with the latest changes and versions by checking the [changelog](#).
```