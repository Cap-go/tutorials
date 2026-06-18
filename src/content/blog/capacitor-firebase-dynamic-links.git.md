---
"title": "Using @pantrist/capacitor-firebase-dynamic-links Package",
"description": "Step-by-step guide on integrating and utilizing the @pantrist/capacitor-firebase-dynamic-links package in your Capacitor project.",
"created_at": "2022-03-10",
"published": true,
"slug": "capacitor-firebase-dynamic-links.git"
---

# Tutorial: Using @pantrist/capacitor-firebase-dynamic-links Package

This tutorial will guide you through the process of integrating and utilizing the @pantrist/capacitor-firebase-dynamic-links package within your Capacitor project. Firebase Dynamic Links provide a seamless way to direct users to your app, whether it's installed or not.

## Installation

To get started, install the package using npm:

```bash
npm i @pantrist/capacitor-firebase-dynamic-links
```

### Android Configuration

In your `android/app/src/main/java/**/**/MainActivity.java` file, add the plugin to the initialization list:

```java
import com.pantrist.firebase.dynamiclinks.CapacitorFirebaseDynamicLinks;

this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  add(CapacitorFirebaseDynamicLinks.class);
}});
```

### iOS Configuration

Configure your iOS app to use dynamic links by following the Firebase documentation:
[Configure iOS Apps for Dynamic Links](https://firebase.google.com/docs/dynamic-links/ios/receive)

### Web Configuration

No additional steps are required for the web platform.

## Listener and Methods

### Add Listener for Deep Link Open

Add the following method at the app start to listen for the dynamic link and implement your navigation handler:

```javascript
CapacitorFirebaseDynamicLinks.addListener('deepLinkOpen', (data: { url: string }) => {
  // Implement your navigation handler here
})
```

### Create Dynamic Link

Use the `createDynamicLink` method to generate a new dynamic link.

### Create Dynamic Short Link

Utilize the `createDynamicShortLink` method to create a new dynamic short link for your app.

Follow the instructions in this tutorial to seamlessly integrate Firebase Dynamic Links into your Capacitor project and enhance user experience.