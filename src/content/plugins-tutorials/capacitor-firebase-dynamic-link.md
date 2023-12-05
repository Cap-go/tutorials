---
title: "Tutorial: Using capacitor-firebase-dynamic-link package"
description: "Learn how to use the capacitor-firebase-dynamic-link package to integrate Firebase Dynamic Links into your Capacitor app."
created_at: "2022-07-07"
published: true
slug: capacitor-firebase-dynamic-link
---

# Tutorial: Using capacitor-firebase-dynamic-link package

In this tutorial, we will guide you on how to use the `capacitor-firebase-dynamic-link` package to integrate Firebase Dynamic Links into your Capacitor app. Firebase Dynamic Links allow you to generate dynamic links that can redirect users to specific content within your app or website.

## Prerequisites

Before we begin, make sure you have the following:

- Node.js and npm installed on your machine.
- A Firebase project set up.

## Step 1: Install the package

First, install the `capacitor-firebase-dynamic-link` package by running the following command:

```bash
npm i @turnoutt/capacitor-firebase-dynamic-links
```

## Step 2: Android Configuration

### Update MainActivity.java

In your Android project's `MainActivity.java` file, add the plugin to the initialization list. Open the file and look for the following section:

```java
import com.turnoutt.firebase.dynamiclinks.CapacitorFirebaseDynamicLinks;

this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{

  add(CapacitorFirebaseDynamicLinks.class);
}});
```

Add the following line inside the `add` method:

```java
add(CapacitorFirebaseDynamicLinks.class);
```

### Add Firebase Credentials

Download the `google-services.json` file from your Firebase project console. Then, move the file into your Capacitor Android project directory at `android/app/`.

Update the `AndroidManifest.xml` file in your Android project with the following details:

```xml
<meta-data android:name="PLUMB5_ACCOUNT_ID" android:value="---Account Id---" />
<meta-data android:name="PLUMB5_API_KEY" android:value="---App Key---" />
<meta-data android:name="PLUMB5_BASE_URL" android:value="---Base URL---" />
```

## Step 3: iOS Configuration

### Configure your app for dynamic links

To use dynamic links on iOS, follow the steps in the Firebase documentation: [Configure your app to use dynamic links on iOS](https://firebase.google.com/docs/dynamic-links/ios/receive).

### Add Firebase Credentials

Download the `GoogleService-Info.plist` file from your Firebase project console. Move the file into your Xcode project as instructed by Firebase, making sure to add it to all targets.

## Step 4: Initialize the plugin

To start using the `capacitor-firebase-dynamic-link` plugin, you need to initialize it and add a listener to handle incoming dynamic links. Open your app's main file (e.g., `app.component.ts`) and import the plugin:

```typescript
import { CapacitorFirebaseDynamicLinks } from '@turnoutt/capacitor-firebase-dynamic-links';
```

Initialize the plugin by adding the following code in the appropriate location (e.g., in the constructor of the main component):

```typescript
CapacitorFirebaseDynamicLinks.addListener('deepLinkOpen', (data) => {
  // Implement your navigation handler here
});
```

## Step 5: Create a dynamic link

To create a new dynamic link, use the `createDynamicLink` method provided by the plugin. This method takes a `linkConfiguration` object as a parameter, which specifies the properties of the dynamic link.

Here's an example of how to create a dynamic link:

```typescript
const linkConfiguration = {
  domainUriPrefix: 'https://example.page.link',
  link: 'https://example.com',
  androidPackageName: 'com.example.app',
  iOSBundleId: 'com.example.app',
  socialMetaTagInfo: {
    socialTitle: 'Example Title',
    socialDescription: 'Check out this app!',
    socialImageUri: 'https://example.com/image.jpg',
  },
};

const dynamicLink = await CapacitorFirebaseDynamicLinks.createDynamicLink(linkConfiguration);

console.log('Dynamic link:', dynamicLink);
```

## Step 6: Create a dynamic short link

If you prefer a shorter URL for your dynamic link, you can create a dynamic short link using the `createDynamicShortLink` method. This method has the same `linkConfiguration` parameter as the `createDynamicLink` method.

Here's an example of how to create a dynamic short link:

```typescript
const linkConfiguration = {
  domainUriPrefix: 'https://example.page.link',
  link: 'https://example.com',
  androidPackageName: 'com.example.app',
  iOSBundleId: 'com.example.app',
  socialMetaTagInfo: {
    socialTitle: 'Example Title',
    socialDescription: 'Check out this app!',
    socialImageUri: 'https://example.com/image.jpg',
  },
};

const dynamicShortLink = await CapacitorFirebaseDynamicLinks.createDynamicShortLink(linkConfiguration);

console.log('Dynamic short link:', dynamicShortLink);
```

That's it! You have successfully integrated Firebase Dynamic Links into your Capacitor app using the `capacitor-firebase-dynamic-link` package. Now you can dynamically generate links and handle incoming deep links in your app.

For more details on advanced configuration options and usage, refer to the official documentation: [Firebase Dynamic Links](https://firebase.google.com/docs/dynamic-links)

Happy coding!