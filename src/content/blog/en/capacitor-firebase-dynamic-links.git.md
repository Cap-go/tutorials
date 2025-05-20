---
title: Using Capacitor Firebase Dynamic Links Plugin
description: >-
  A step-by-step guide on how to integrate and utilize the
  @pantrist/capacitor-firebase-dynamic-links plugin in your Capacitor project
  for deep linking functionality.
created_at: '2022-02-23'
published: true
slug: capacitor-firebase-dynamic-links.git
locale: en
---

# Using Capacitor Firebase Dynamic Links Plugin

This tutorial will walk you through the process of integrating and using the @pantrist/capacitor-firebase-dynamic-links package in your Capacitor project to enable Firebase Dynamic Links functionality.

## Installation

To begin, install the @pantrist/capacitor-firebase-dynamic-links package by running the following command in your project directory:

```sh
npm i @pantrist/capacitor-firebase-dynamic-links
```

### Android Configuration

In your Android project, make sure to add the plugin to the initialization list in the `MainActivity.java` file:

```java
import com.pantrist.firebase.dynamiclinks.CapacitorFirebaseDynamicLinks;

this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{

  add(CapacitorFirebaseDynamicLinks.class);

}});
```

For advanced configuration options, refer to the [official Firebase Dynamic Links documentation](https://firebase.google.com/docs/dynamic-links/android/create).

### iOS Configuration

Configure your iOS app to use dynamic links by following the instructions in the [iOS setup guide](https://firebase.google.com/docs/dynamic-links/ios/receive).

## Usage

### Adding a Listener for Deep Link Open Event

Add the following code snippet to start listening for the 'deepLinkOpen' event when the app launches:

```javascript
CapacitorFirebaseDynamicLinks.addListener('deepLinkOpen', (data: { url: string }) => {
    // Implement your navigation handler here
})
```

### Creating a New Dynamic Link

To create a new dynamic link, use the `createDynamicLink` method with the appropriate configuration.

### Creating a New Dynamic Short Link

Similarly, you can create a new dynamic short link using the `createDynamicShortLink` method with the required configuration.

By following these steps, you can seamlessly integrate Firebase Dynamic Links into your Capacitor project for improved deep linking capabilities.
```
