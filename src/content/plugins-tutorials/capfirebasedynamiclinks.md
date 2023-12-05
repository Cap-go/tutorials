---
title: "Using cap-firebase-dynamic-links Package"
description: "A tutorial on how to use the cap-firebase-dynamic-links package to create and handle dynamic links in Capacitor applications."
created_at: "2021-09-23"
published: true
slug: capfirebasedynamiclinks
---

# Using cap-firebase-dynamic-links Package

In this tutorial, we will explore how to use the cap-firebase-dynamic-links package to create and handle dynamic links in Capacitor applications. Dynamic links are deep links that can redirect users to specific content within your app, even if the app is not installed on their device. This can be useful for various scenarios such as sharing content, inviting users, or tracking marketing campaigns.

## Installation

To get started, install the cap-firebase-dynamic-links package using npm:

```bash
npm i @turnoutt/capacitor-firebase-dynamic-links
```

### Android Configuration

In the `android/app/src/main/java/**/**/MainActivity.java` file, add the plugin to the initialization list:

```java
import com.turnoutt.firebase.dynamiclinks.CapacitorFirebaseDynamicLinks;

this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{

  add(CapacitorFirebaseDynamicLinks.class);

}});
```

For advanced options, refer to the [Firebase Dynamic Links Android documentation](https://firebase.google.com/docs/dynamic-links/android/create).

### iOS Configuration

Configure your app to use dynamic links based on the official Firebase documentation. Follow the steps provided in the [Firebase Dynamic Links iOS documentation](https://firebase.google.com/docs/dynamic-links/ios/receive).

## Usage

### Creating Dynamic Links

To create a new dynamic link, you can use the `createDynamicLink` method provided by the cap-firebase-dynamic-links package. This method accepts a `LinkConfig` object as an argument, which contains the configuration parameters for the dynamic link.

Here's an example of creating a dynamic link:

```javascript
import { FirebaseDynamicLinks, LinkConfig } from '@turnoutt/capacitor-firebase-dynamic-links';

function createDynamicLink() {
  const config: LinkConfig = {
    domainUriPrefix: 'https://example.page.link',
    uri: 'https://example.page.link/sharing',
  };
  
  FirebaseDynamicLinks.createDynamicLink(config)
    .then(link => {
      console.log("Dynamic link created:", link.value);
    })
    .catch(error => {
      console.error("Error creating dynamic link:", error);
    });
}
```

### Creating Dynamic Short Links

In addition to regular dynamic links, you can also create dynamic short links using the `createDynamicShortLink` method. This method works similar to `createDynamicLink` but generates a shorter URL for the dynamic link.

Here's an example of creating a dynamic short link:

```javascript
import { FirebaseDynamicLinks, LinkConfig } from '@turnoutt/capacitor-firebase-dynamic-links';

function createDynamicShortLink() {
  const config: LinkConfig = {
    domainUriPrefix: 'https://example.page.link',
    uri: 'https://example.page.link/sharing',
  };
  
  FirebaseDynamicLinks.createDynamicShortLink(config)
    .then(link => {
      console.log("Dynamic short link created:", link.value);
    })
    .catch(error => {
      console.error("Error creating dynamic short link:", error);
    });
}
```

### Handling Deep Link Open

To listen for deep link open events in your app, you can use the `addListener` method provided by the cap-firebase-dynamic-links package. This method allows you to define a callback function that will be called when a dynamic link is opened.

Here's an example of listening for deep link open events:

```javascript
import { FirebaseDynamicLinks } from '@turnoutt/capacitor-firebase-dynamic-links';

function listenToDeepLinkOpen() {
  FirebaseDynamicLinks.addListener('deepLinkOpen', (data) => {
    console.log("Deep link opened:", data.url);
    
    // Implement your navigation handler
    // Redirect the user to the appropriate content within your app
  });
}
```

## Conclusion

In this tutorial, we covered the basics of using the cap-firebase-dynamic-links package to create and handle dynamic links in Capacitor applications. You learned how to install the package, configure it for Android and iOS, and use the available methods to create dynamic links and handle deep link open events. Dynamic links can greatly enhance the user experience by allowing seamless content sharing and navigation within your app.