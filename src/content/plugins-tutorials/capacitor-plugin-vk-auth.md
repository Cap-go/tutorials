---
title: "Using Capacitor Plugin VK Auth"
description: "A tutorial on how to use the @lukasandreano/capacitor-vk-auth package for VK authentication in Capacitor."
created_at: "2021-07-01"
published: true
slug: "capacitor-plugin-vk-auth"
---

# Using Capacitor Plugin VK Auth

The @lukasandreano/capacitor-vk-auth package provides an easy way to implement VK authentication in your Capacitor project. This tutorial will guide you through the process of installing the package, setting up your VK app, and using the plugin to authenticate users.

## Install

To get started, you need to install the @lukasandreano/capacitor-vk-auth package. You can do this using either Yarn or NPM:

```console
yarn add @lukasandreano/capacitor-vk-auth
```

or

```console
npm install @lukasandreano/capacitor-vk-auth --save
```

## Setup VK APP

Before you can start using the plugin, you need to set up your VK app in the VK Developer Portal. Here are the steps to do that:

1. Go to [vk.com/dev](https://vk.com/dev) and log in to your VK account.
2. Create a Standalone-application by clicking on the "Create application" button.
3. Fill in the required fields and click "Connect application" to create your VK app.

<p align="center">
<img src=".github/img/working-settings.jpg" width="600" alt="VK App Settings">
</p>

## Android Setup

For Android, you need to add the VK app ID to your project's `app/res/values/strings.xml` file. Open the file and add the following line:

```xml
<string name="vk_app_id">YOUR_APP_ID</string>
```

Replace `YOUR_APP_ID` with the ID of your VK app.

## iOS Setup

For iOS, you need to add the VK app ID to your project's `Info.plist` file. Open the file and add the following key-value pair:

```xml
<key>VK_APP_ID</key>
<string>YOUR_APP_ID</string>
```

Replace `YOUR_APP_ID` with the ID of your VK app.

## Using the Plugin

Once you have installed the package and set up your VK app, you can start using the @lukasandreano/capacitor-vk-auth plugin in your Capacitor project. Here is an example of how to use the plugin:

```javascript
import { Plugins } from '@capacitor/core';

const { VKAuth } = Plugins;

VKAuth.initWithId({ id: 'YOUR_APP_ID' });

VKAuth.auth({ scope: ['offline'] });

VKAuth.addListener('vkAuthFinished', (info) => {
  console.log('vkAuthFinished was fired', JSON.stringify(info, null, 2));
});
```

Replace `YOUR_APP_ID` with the ID of your VK app.

The `initWithId` method initializes the VKAuth plugin with your app ID. The `auth` method initiates the VK authentication process with the specified scope, in this example, 'offline'. The `addListener` method listens for the 'vkAuthFinished' event, which is fired when the authentication process is completed.

## Conclusion

In this tutorial, you learned how to use the @lukasandreano/capacitor-vk-auth package to implement VK authentication in your Capacitor project. You learned how to install the package, set up your VK app, and use the plugin to authenticate users. Now, you can easily integrate VK authentication into your Capacitor app and provide a seamless login experience for your users.