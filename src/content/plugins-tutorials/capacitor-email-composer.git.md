```markdown
---
"title": "How to Use Capacitor Email Composer Package",
"description": "A tutorial on using the capacitor-email-composer package to open a native E-Mail Composer within your Capacitor App.",
"created_at": "2021-10-15",
"published": true,
"slug": "capacitor-email-composer.git"
---

## Installation

```bash
npm install capacitor-email-composer
npx cap sync
```

### Attachments

You can add attachments to the draft mail by using the `attachments` option in the `open(...)` method.

#### Device Storage

The path to the files must be defined absolute from the root of the file system. On Android the user has to allow the app first to read from external storage!

```ts
import { EmailComposer } from 'capacitor-email-composer'

EmailComposer.open({
  attachments: [{
    type: 'absolute',
    path: 'storage/sdcard/icon.png' // Android
  }]
})
```

#### Native resources

Each app has a resource folder, e.g. the res folder for Android apps or the Resource folder for iOS apps. The following example shows how to attach the app icon from within the app's resource folder.

```ts
import { EmailComposer } from 'capacitor-email-composer'

EmailComposer.open({
  attachments: [{
    type: 'resource',
    path: 'icon.png'
  }]
})
```

#### Assets

The path to the files must be defined relative from the root of the mobile web app assets folder, which is located under the build folder.

```ts
import { EmailComposer } from 'capacitor-email-composer'

EmailComposer.open({
  attachments: [{
    type: 'asset',
    path: '/icon/favicon.png' // starting slash is important
  }]
})
```

#### Base64

```

```