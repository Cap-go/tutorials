```markdown
---
"title": "How to Use @capacitor-community/contacts Package",
"description": "Learn how to use the @capacitor-community/contacts package to fetch contacts in your Capacitor project.",
"created_at": "2023-09-14",
"published": true,
"slug": "contacts.git"
---

# How to Use @capacitor-community/contacts Package

The @capacitor-community/contacts package is a Capacitor community plugin for fetching contacts. This tutorial will guide you on how to use this package to retrieve contacts in your Capacitor project.

## Prerequisites

Before using this package, make sure you have set up your project with Capacitor. If you haven't done so, follow these steps:

1. Navigate to your project directory:
   ```sh
   cd my-app
   ```

2. Install @capacitor/core and @capacitor/cli:
   ```sh
   npm install --save @capacitor/core @capacitor/cli
   ```

3. Initialize Capacitor:
   ```sh
   npx cap init
   ```

4. Add the platforms you want to use. For example, to add Android, iOS, and Electron support:
   ```sh
   npx cap add android
   npx cap add ios
   npx cap add electron
   ```

## Installation

To install the @capacitor-community/contacts package, run the following command in your project:

```sh
npm i --save @capacitor-community/contacts

# or using yarn
yarn add @capacitor-community/contacts

# or using pnpm
pnpm add @capacitor-community/contacts
```

After installing the package, don't forget to sync your Capacitor project:

```sh
npx cap sync
```

### iOS Setup

To use the package on iOS, add a usage description in your info.plist. Open xCode, search for your info.plist file, and add the following entry:

```
Privacy - Contacts Usage Description
```

Provide a suitable description such as: 
```
"We need access to your contacts to do something."
```

### Android Notes

For Android, you need to add permissions in your AndroidManifest.xml file. Add the following permissions just before the closing of the "manifest" tag:
```
<!-- Add necessary permissions here -->
```

Happy coding with @capacitor-community/contacts!

```