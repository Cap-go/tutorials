# Using capacitor-plugin-get-app-info-fork

This tutorial will guide you through the process of using the `capacitor-plugin-get-app-info-fork` package in your Capacitor project.

## Installation

To begin, install the package by running the following command in your project directory:

```bash
npm install capacitor-plugin-get-app-info-fork
```

## Adding the Plugin to Your Project

1. Import the plugin in your desired file:

```javascript
import { Plugins } from '@capacitor/core';
const { GetAppInfo } = Plugins;
```

2. Use the `getInfo` method to retrieve the app information:

```javascript
const getInfo = async () => {
  const appInfo = await GetAppInfo.getInfo();
  console.log('App Info:', appInfo); // Example: { appName: 'MyApp', packageName: 'com.myapp', versionName: '1.0.0', versionCode: 1 }
};
```

3. Call the `getInfo` function whenever you need to retrieve the app information.

```javascript
getInfo();
```

4. Run your project and check the console output for the app information.

Congratulations! You have successfully integrated the `capacitor-plugin-get-app-info-fork` package into your Capacitor project and retrieved the app information.

## Frontmatter

---
title: "Using capacitor-plugin-get-app-info-fork"
description: "A tutorial on how to use the capacitor-plugin-get-app-info-fork package to retrieve app information in a Capacitor project."
created_at: "2022-06-15"
published: true
slug: "capacitor-plugin-get-app-info"
---

Please note that the values in the frontmatter section are example values and should be replaced with the appropriate information for your blog.

That's it! You can now use the `capacitor-plugin-get-app-info-fork` package to easily retrieve app information in your Capacitor project.