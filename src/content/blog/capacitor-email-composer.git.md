```markdown
---
"title": "How to Use Capacitor Email Composer Plugin in Your Capacitor App",
"description": "Learn how to use the Capacitor Email Composer Plugin to open a native E-Mail Composer within your Capacitor App. This tutorial covers installation, adding attachments, different attachment types, and more.",
"created_at": "2022-08-25",
"published": true,
"slug": "capacitor-email-composer.git"
---

# How to Use Capacitor Email Composer Plugin

The Capacitor Email Composer Plugin allows you to open a native E-Mail Composer within your Capacitor App. This tutorial will guide you through the installation process and show you how to add attachments in various formats.

## Installation

To install the Capacitor Email Composer Plugin, run the following command in your Capacitor project:

```bash
npm install capacitor-email-composer
npx cap sync
```

## Adding Attachments

You can add attachments to the draft email by using the `attachments` option in the `open(...)` method. There are several types of attachments you can include:

### Device Storage

To include a file from the device storage, use the following:

```typescript
import { EmailComposer } from 'capacitor-email-composer'

EmailComposer.open({
  attachments: [{
    type: 'absolute',
    path: 'storage/sdcard/icon.png' // Android
  }]
})
```

### Native Resources

Attach a file from the app's resource folder with the following example:

```typescript
import { EmailComposer } from 'capacitor-email-composer'

EmailComposer.open({
  attachments: [{
    type: 'resource',
    path: 'icon.png'
  }]
})
```

### Assets

For files located in the mobile web app assets folder, use the following format:

```typescript
import { EmailComposer } from 'capacitor-email-composer'

EmailComposer.open({
  attachments: [{
    type: 'asset',
    path: '/icon/favicon.png'
  }]
})
```

### Base64

Include a base64 encoded file as an attachment:

```typescript
import { EmailComposer } from 'capacitor-email-composer'

EmailComposer.open({
  attachments: [{
    type: 'base64',
    path: 'data:image/png;base64,base64encodedstring',
    name: 'image.png'
  }]
})
```

This tutorial covers the basic usage of the Capacitor Email Composer Plugin in your Capacitor App. For more advanced features and options, refer to the official documentation.
```