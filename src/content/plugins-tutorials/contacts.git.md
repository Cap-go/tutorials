```markdown
---
"title": "How to Use the Capacitor Community Contacts Plugin",
"description": "A tutorial on integrating and utilizing @capacitor-community/contacts plugin with Capacitor in Ionic projects.",
"created_at": "2021-11-19",
"published": true,
"slug": "contacts.git"
---

# How to Use the Capacitor Community Contacts Plugin

This tutorial will guide you on integrating and utilizing the `@capacitor-community/contacts` plugin in your Ionic projects using Capacitor.

## Prerequisites

Ensure your project is set up with Capacitor by following the setup guide [here](https://capacitorjs.com).

```sh
cd my-app
npm install --save @capacitor/core @capacitor/cli
```

Initialize Capacitor

```sh
npx cap init
```

Add the platforms you wish to use.

```sh
npx cap add android
npx cap add ios
npx cap add electron
```

## Installation

Install the `@capacitor-community/contacts` plugin:

```sh
npm i --save @capacitor-community/contacts

# or using yarn
yarn add @capacitor-community/contacts

# or using pnpm
pnpm add @capacitor-community/contacts
```

Sync your project with Capacitor:

```sh
npx cap sync
```

### iOS Configuration

To use the plugin on iOS, you need to add a usage description in your `Info.plist` file:

1. Open Xcode and locate your `Info.plist` file.
2. Add the following entry:
   
```xml
<key>Privacy - Contacts Usage Description</key>
<string>We need access to your contacts in order to do something.</string>
```

### Android Configuration

For Android, you need to add the necessary permissions in your `AndroidManifest.xml`. Add the following permissions before the closing of the `manifest` tag:

```xml
<!-- Required permissions for contacts access -->
<uses-permission android:name="android.permission.READ_CONTACTS" />
<uses-permission android:name="android.permission.WRITE_CONTACTS" />
<uses-permission android:name="android.permission.GET_ACCOUNTS" />
```

## Example Usage

Now, you can start using the `@capacitor-community/contacts` plugin in your Ionic application. Here's a basic example of fetching contacts:

```typescript
import { Plugins } from '@capacitor/core';

const { Contacts } = Plugins;

// Retrieve all contacts
const result = await Contacts.getContacts();

console.log(result);
```

This tutorial provides you with the necessary steps to integrate and utilize the Capacitor Community Contacts plugin in your Ionic project effectively.
```
