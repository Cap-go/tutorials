---
title: "Using @selfpay/capacitor-firebase-dynamic-links package"
description: "A tutorial on how to use the @selfpay/capacitor-firebase-dynamic-links package to generate dynamic links in Capacitor applications."
created_at: "2021-09-29"
published: true
slug: "fork-external-capacitor-firebase-dynamic-links"
---

# Using @selfpay/capacitor-firebase-dynamic-links package

This tutorial will guide you on how to use the `@selfpay/capacitor-firebase-dynamic-links` package to generate dynamic links in Capacitor applications.

## Installation

To install the package, run the following command:

```bash
npm i @selfpay/capacitor-firebase-dynamic-links
```

## Android Configuration

To configure the package for Android, perform the following steps:

1. In the `android/app/src/main/java/**/**/MainActivity.java` file, add the plugin to the initialization list:

```java
import com.selfpay.firebase.dynamiclinks.CapacitorFirebaseDynamicLinks;

this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  add(CapacitorFirebaseDynamicLinks.class);
}});
```

2. For advanced options, refer to the [Firebase Dynamic Links Android documentation](https://firebase.google.com/docs/dynamic-links/android/create).

## iOS Configuration

To configure the package for iOS, follow these steps:

1. Configure your app to use dynamic links. Refer to the [Firebase Dynamic Links iOS documentation](https://firebase.google.com/docs/dynamic-links/ios/receive) for detailed instructions.

## Web

This package does not have a web implementation.

## Usage

### Listening for Deep Link Open

To listen for a deep link open event when the app starts, use the `addListener` method with the event name `'deepLinkOpen'`. Implement your navigation handler inside the callback function.

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorFirebaseDynamicLinks } = Plugins;

CapacitorFirebaseDynamicLinks.addListener('deepLinkOpen', (data) => {
  // Implement your navigation handler
});
```

### Creating a Dynamic Link

To create a new dynamic link, use the `createDynamicLink` method with a `LinkConfig` object as the parameter.

```javascript
const linkConfiguration = {
  domainUriPrefix: 'https://example.page.link',
  link: 'https://www.example.com',
  androidPackageName: 'com.example.android',
  iosBundleId: 'com.example.ios',
};

CapacitorFirebaseDynamicLinks.createDynamicLink(linkConfiguration);
```

### Creating a Dynamic Short Link

To create a new dynamic short link, use the `createDynamicShortLink` method with a `LinkConfig` object as the parameter.

```javascript
const linkConfiguration = {
  domainUriPrefix: 'https://example.page.link',
  link: 'https://www.example.com',
  androidPackageName: 'com.example.android',
  iosBundleId: 'com.example.ios',
};

CapacitorFirebaseDynamicLinks.createDynamicShortLink(linkConfiguration);
```

That's it! You have now learned how to use the `@selfpay/capacitor-firebase-dynamic-links` package to generate dynamic links in your Capacitor application.

Remember to configure the package for Android and iOS as mentioned earlier in the tutorial to ensure proper functionality.