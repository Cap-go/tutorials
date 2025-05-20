---
title: Using @capacitor-community/contacts Package
description: >-
  A comprehensive guide on integrating @capacitor-community/contacts package in
  your Capacitor project.
created_at: '2022-10-10'
published: true
slug: contacts.git
locale: en
---

# Using @capacitor-community/contacts Package

**Contacts** is a Capacitor community plugin that allows you to fetch contacts in your Ionic app.

## Prerequisites

Ensure that your project is set up with Capacitor:

```sh
cd my-app
npm install --save @capacitor/core @capacitor/cli
```

Initialize Capacitor:

```sh
npx cap init
```

Add the platforms you want to use:

```sh
npx cap add android
npx cap add ios
npx cap add electron
```

## Installation

Install the `@capacitor-community/contacts` package:

```sh
npm i --save @capacitor-community/contacts

# or using Yarn
yarn add @capacitor-community/contacts

# or using pnpm
pnpm add @capacitor-community/contacts
```

Sync the changes with your project:

```sh
npx cap sync
```

### iOS Setup

For iOS, you must set a usage description in your info.plist file. Open Xcode, search for your info.plist file, and add the following entry:

**Privacy - Contacts Usage Description**

Give it a value like:

```
"We need access to your contacts in order to do something."
```

### Android Setup

For Android, you need to add permissions in your AndroidManifest.xml file. Add the following permissions before the closing of the "manifest" tag.

## Demo

For a working Ionic app example using the **Contacts** plugin, you can check out this repository: [CapContactsDemo](https://github.com/byrdsandbytes/capContactsDemo)

## Maintainers

- **Jonathan Gerber / Byrds & Bytes GmbH**
  - GitHub: [idrimi](https://github.com/idrimi)
  - Company: [Byrds & Bytes GmbH](https://github.com/byrdsandbytes)

### Maintenance Status: Actively Maintained

```

```
