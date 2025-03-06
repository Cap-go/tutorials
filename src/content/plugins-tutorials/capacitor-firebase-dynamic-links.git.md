---
"title": "Using @pantrist/capacitor-firebase-dynamic-links Package",
"description": "A tutorial on how to utilize the @pantrist/capacitor-firebase-dynamic-links package with Capacitor for handling Firebase Dynamic Links.",
"created_at": "2022-01-23",
"published": true,
"slug": "capacitor-firebase-dynamic-links.git"
---

# Using @pantrist/capacitor-firebase-dynamic-links Package

The **@pantrist/capacitor-firebase-dynamic-links** package is a powerful tool for integrating Firebase Dynamic Links within your Capacitor app. This tutorial will guide you through the installation process and demonstrate how to make the most of this package.

## Installation

Begin by installing the **@pantrist/capacitor-firebase-dynamic-links** package in your project:

```bash
npm i @pantrist/capacitor-firebase-dynamic-links
```

### Android Configuration

To configure the Android platform, you will need to make changes to your `MainActivity.java` file. Add the plugin to the initialization list as shown below:

```java
import com.pantrist.firebase.dynamiclinks.CapacitorFirebaseDynamicLinks;

this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  add(CapacitorFirebaseDynamicLinks.class);
}});
```

For more advanced options, refer to the [official Firebase Dynamic Links documentation for Android](https://firebase.google.com/docs/dynamic-links/android/create).

### iOS Configuration

For iOS platform configuration, follow the steps outlined in the [Firebase Dynamic Links iOS documentation](https://firebase.google.com/docs/dynamic-links/ios/receive).

### Web

No specific configuration is needed for the Web platform.

## Methods

### Listening for Deep Link Open Event

Use the `addListener` method to set up a listener for the Deep Link Open event. Implement your navigation handler inside the callback function:

```javascript
CapacitorFirebaseDynamicLinks.addListener('deepLinkOpen', (data: { url: string }) => {
    // Implement your navigation handler here
})
```

### Creating a Dynamic Link

Use `createDynamicLink` method to generate a new dynamic link within your application.

### Creating a Dynamic Short Link

The `createDynamicShortLink` method is used to create a new dynamic short link for your application.

By following these steps, you can effectively integrate Firebase Dynamic Links into your Capacitor app using the **@pantrist/capacitor-firebase-dynamic-links** package.