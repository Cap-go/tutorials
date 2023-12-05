---
title: "Using @subratpalhar92/capci-permission Package"
description: "This tutorial will guide you through the steps to use the @subratpalhar92/capci-permission package in your Capacitor project."
created_at: "2021-10-21"
published: true
slug: "capcipermission"
---

# Using @subratpalhar92/capci-permission Package

The `@subratpalhar92/capci-permission` package provides functionality to manage and request permissions for your Capacitor project. This tutorial will guide you through the installation and usage of this package in your project.

## Installation

To install the `@subratpalhar92/capci-permission` package, run the following command in your project directory:

```
npm i @subratpalhar92/capci-permission
```

## Sync

After installing the package, sync your Capacitor project to apply the changes:

```
npx cap sync
```

## Android Notes

For Android, you need to add a permission in your `AndroidManifest.xml` file. Open the file and add the following permission inside the "manifest" tag before the closing of the tag:

```xml
<uses-permission android:name="android.permission.QUERY_ALL_PACKAGES"/>
```

Next, import the `capContacts` class to your `MainActivity`:

```java
// Initializes the Bridge
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  // Additional plugins you've installed go here
  // Ex: add(TotallyAwesomePlugin.class);
  add(NumOfActiveAppsPlugin.class)
}});
```

With the package installed and the necessary configurations made, you can now use the permissions functionality provided by `@subratpalhar92/capci-permission` in your Capacitor project.

Remember to consult the package's documentation for more detailed information on how to use the different methods and features provided.

That's it! You have now learned how to use the `@subratpalhar92/capci-permission` package in your Capacitor project. Happy coding!