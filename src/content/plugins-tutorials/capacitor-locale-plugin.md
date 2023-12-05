---
title: "Using the capacitor-locale-plugin package"
description: "A tutorial on how to use the capacitor-locale-plugin package to manage locales in Capacitor apps"
created_at: "2022-10-01"
published: true
slug: capacitor-locale-plugin
---

# Using the capacitor-locale-plugin package

In this tutorial, we will learn how to use the capacitor-locale-plugin package to manage locales in Capacitor apps. The capacitor-locale-plugin provides a convenient way to access and set the current locale in your app.

## Installation

To begin, make sure you have Capacitor installed globally:

```shell
npm install -g @capacitor/core @capacitor/cli
```

Next, install the capacitor-locale-plugin package:

```shell
npm install capacitor-locale-plugin
```

## Usage

### 1. Register the plugin

To start using the capacitor-locale-plugin, you need to register it in your app's main file. Open your app's entry file (usually `index.ts` or `main.ts`) and import the plugin:

```typescript
import { registerLocalePlugin } from 'capacitor-locale-plugin';

registerLocalePlugin();
```

### 2. Get the current locale

You can use the `getLocale` method to retrieve the current locale:

```typescript
import { getLocale } from 'capacitor-locale-plugin';

const locale = await getLocale();
console.log('Current locale:', locale);
```

The `getLocale` method returns a promise that resolves to the current locale.

### 3. Set the locale

To set the locale, use the `setLocale` method:

```typescript
import { setLocale } from 'capacitor-locale-plugin';

// Set the locale to 'en-US'
await setLocale('en-US');
```

The `setLocale` method also returns a promise that resolves once the locale has been set.

## Conclusion

In this tutorial, we explored how to use the capacitor-locale-plugin package to manage locales in Capacitor apps. We learned how to install the package, register the plugin, get the current locale, and set the locale.

By using the capacitor-locale-plugin, you can easily add multilingual support to your Capacitor apps and provide a localized experience to your users.

I hope this tutorial was helpful. Happy coding!

For more information, you can refer to the [capacitor-locale-plugin documentation](https://github.com/example/capacitor-locale-plugin).