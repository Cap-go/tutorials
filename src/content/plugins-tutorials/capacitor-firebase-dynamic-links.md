---
title: "Using @pantrist/capacitor-firebase-dynamic-links Package"
description: "A tutorial on how to use the @pantrist/capacitor-firebase-dynamic-links package for implementing Firebase Dynamic Links in Capacitor."
created_at: "2022-12-30"
published: true
slug: capacitor-firebase-dynamic-links
---

# Using @pantrist/capacitor-firebase-dynamic-links Package

Firebase Dynamic Links is a powerful feature provided by Google Firebase that allows you to create dynamic links that can redirect users to specific content within your app or on the web. The @pantrist/capacitor-firebase-dynamic-links package provides a Capacitor plugin for integrating Firebase Dynamic Links into your Capacitor project. In this tutorial, we will go through the steps of installing and using this package.

## Installation

To install the @pantrist/capacitor-firebase-dynamic-links package, run the following command in your project directory:

```shell
npm install @pantrist/capacitor-firebase-dynamic-links
```

## Android Configuration

In the `android/app/src/main/java/**/**/MainActivity.java` file of your Capacitor Android project, add the following code to the initialization list:

```java
import com.pantrist.firebase.dynamiclinks.CapacitorFirebaseDynamicLinks;

this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  add(CapacitorFirebaseDynamicLinks.class);
}});
```

For advanced configuration options, please refer to the [official Firebase documentation](https://firebase.google.com/docs/dynamic-links/android/create).

## iOS Configuration

To configure your app to use dynamic links on iOS, follow the steps below:

1. Configure your app to use dynamic links based on the official Firebase documentation.

2. Add the following three steps for iOS:

   - In the Info tab of your app's Xcode project, create a new URL type to be used for Dynamic Links. Set the Identifier field to a unique value and the URL scheme field to be your bundle identifier, which is the default URL scheme used by Dynamic Links.

   - In the Capabilities tab of your app's Xcode project, enable Associated Domains and add the following to the Associated Domains list:

     ```
     applinks:your_dynamic_links_domain
     ```

   - If you want to receive Dynamic Links with a fully-custom domain, in your Xcode project's Info.plist file, create a key called FirebaseDynamicLinksCustomDomains and set it to your app's Dynamic Links URL prefixes.

For detailed instructions, refer to the [official Firebase documentation](https://firebase.google.com/docs/dynamic-links/ios/receive).

## Web Configuraton

The @pantrist/capacitor-firebase-dynamic-links package does not have a web configuration at the moment.

## Usage

First, import the necessary components from the @pantrist/capacitor-firebase-dynamic-links package:

```javascript
import { FirebaseDynamicLinks, LinkConfig } from '@pantrist/capacitor-firebase-dynamic-links';
```

### Listening for Deep Link Open

To listen for the deep link open event, add the following code when your app starts:

```javascript
FirebaseDynamicLinks.addListener('deepLinkOpen', (data) => {
  // Implement your navigation handler here
  console.log(data.url);
});
```

This code adds an event listener that will be triggered whenever a deep link is opened in your app. The `data` parameter contains the URL of the deep link.

### Creating a Dynamic Link

To create a new dynamic link, use the `createDynamicLink` method:

```javascript
const linkConfiguration: LinkConfig = {
  domainUriPrefix: 'https://example.page.link',
  uri: 'https://example.page.link/sharing',
};

FirebaseDynamicLinks.createDynamicLink(linkConfiguration)
  .then((link) => {
    // Use the dynamic link here
    console.log(link);
  })
  .catch((error) => {
    // Handle any errors
    console.error(error);
  });
```

The `linkConfiguration` object contains the configuration for the dynamic link, including the domain URI prefix and the destination URI. The `createDynamicLink` method returns a promise that resolves to the generated dynamic link.

### Creating a Dynamic Short Link

To create a new dynamic short link, use the `createDynamicShortLink` method:

```javascript
const linkConfiguration: LinkConfig = {
  domainUriPrefix: 'https://example.page.link',
  uri: 'https://example.page.link/sharing',
};

FirebaseDynamicLinks.createDynamicShortLink(linkConfiguration)
  .then((shortLink) => {
    // Use the short link here
    console.log(shortLink);
  })
  .catch((error) => {
    // Handle any errors
    console.error(error);
  });
```

The `linkConfiguration` object contains the configuration for the dynamic short link, including the domain URI prefix and the destination URI. The `createDynamicShortLink` method returns a promise that resolves to the generated dynamic short link.

That's it! You have successfully installed and used the @pantrist/capacitor-firebase-dynamic-links package to implement Firebase Dynamic Links in your Capacitor project. Now you can create and handle dynamic links to improve the user experience of your app.

For more information and advanced usage, refer to the official [Firebase Dynamic Links documentation](https://firebase.google.com/docs/dynamic-links).

Remember to properly handle errors and edge cases in your app to provide a smooth experience for your users.
