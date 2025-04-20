```markdown
---
"title": "Using @aparajita/capacitor-secure-storage Package",
"description": "This tutorial will guide you through using the @aparajita/capacitor-secure-storage package to securely store key/value data on iOS, Android, and the web.",
"created_at": "2023-09-07",
"published": true,
"slug": "capacitor-secure-storage.git"
---

# capacitor-secure-storage

This plugin for [Capacitor 6+](https://capacitorjs.com) provides secure key/value storage on iOS and Android. It can securely store login credentials or any JSON data types.

## Installation

```sh
pnpm add @aparajita/capacitor-secure-storage # npm install, yarn add
```

Not using [pnpm](https://pnpm.js.org)? Give it a try for faster installs and monorepo management.

## Usage

The API documentation can be found [here](src/definitions.ts). Check out the [demo app](https://github.com/aparajita/capacitor-secure-storage-demo) for a complete usage example.

### iOS

Data is stored in the encrypted system keychain on iOS, and it is specific to your app. Remember that iOS does not delete keychain data when an app is deleted.

#### iCloud Keychain Sync

You can synchronize data with iCloud Keychain globally or per operation. This enables sharing secure data (like login credentials) across multiple devices for the same app.

> 👉 iCloud Keychain must be enabled on the device for data sync to work.

To enable or disable sync globally, use `setSynchronize()`. Control per-operation sync by passing a boolean in the `sync` option.

### Android

On Android, data is encrypted with AES in GCM mode and stored in SharedPreferences specific to your app. App deletion removes the data as well.

### Web

Data is stored **unencrypted** in `localStorage` on the web for debugging purposes only. Avoid using this plugin on the web in production.
```
```