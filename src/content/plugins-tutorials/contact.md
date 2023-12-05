---
title: "Using @diadal/contact Package"
description: "A tutorial on how to use the @diadal/contact package to fetch contacts in a Capacitor3 project."
created_at: "2021-05-25"
published: true
slug: contact
---

# Using @diadal/contact Package

This tutorial will guide you through the process of using the @diadal/contact package in a Capacitor3 project to fetch contacts from a user's device. The @diadal/contact package is a Capacitor3 plugin specifically designed for fetching contacts.

## Prerequisites

Before you start, make sure that you have set up your project with Capacitor. If you haven't done so already, you can follow the documentation on the Capacitor website (https://capacitorjs.com) to get started.

### Installation

To use the @diadal/contact package, you need to install it in your Capacitor3 project. Open your project's terminal and run the following command:

```bash
npm install --save @diadal/contact
```

### Sync

After installing the package, you need to sync your project with Capacitor. Run the following command in your project's terminal:

```bash
npx cap sync
```

### iOS Configuration

For iOS, you need to set a usage description in your info.plist file to access the user's contacts. Open your project in Xcode and locate the info.plist file. Add the following entry:

```
Privacy - Contacts Usage Description
```

Give it a value like:

```
"We need access to your contacts in order to do something."
```

### Android Configuration

For Android, you need to add the necessary permissions in your AndroidManifest.xml file. Open your project in Android Studio or any text editor and add the following permissions before the closing "manifest" tag:

```xml
<uses-permission android:name="android.permission.READ_CONTACTS" />
<uses-permission android:name="android.permission.WRITE_CONTACTS" />
```

Next, import the capContacts class to your MainActivity:

```java
// Initializes the Bridge
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  // Additional plugins you've installed go here
  // Ex: add(TotallyAwesomePlugin.class);
  add(Contacts.class);
}});
```

Make sure to import the capContacts class properly.

## Usage

Once you have installed and configured the @diadal/contact package, you can use the following methods:

### getPermissions()

This method is used to request permission to access the user's contacts. On Android, you must call this method before fetching the contacts.

```javascript
import { Plugins } from '@capacitor/core';

const { ContactsPlugin } = Plugins;

ContactsPlugin.getPermissions()
  .then((result) => {
    // Handle the permission status
    console.log(result);
  })
  .catch((error) => {
    // Handle the error
    console.error(error);
  });
```

### getContacts()

This method is used to fetch the user's contacts.

```javascript
import { Plugins } from '@capacitor/core';

const { ContactsPlugin } = Plugins;

ContactsPlugin.getContacts()
  .then((result) => {
    // Handle the fetched contacts
    console.log(result.contacts);
  })
  .catch((error) => {
    // Handle the error
    console.error(error);
  });
```

With these methods, you can easily fetch the user's contacts in your Capacitor3 project using the @diadal/contact package.

That's it! You have successfully learned how to use the @diadal/contact package to fetch contacts in a Capacitor3 project. Happy coding!