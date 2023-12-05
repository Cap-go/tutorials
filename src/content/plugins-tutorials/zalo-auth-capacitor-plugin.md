---
title: "Using Zalo Auth Capacitor Plugin"
description: "A tutorial on how to use the zalo-auth-capacitor-plugin package to authenticate with Zalo in CapacitorJS."
created_at: "2022-10-13"
published: true
slug: "zalo-auth-capacitor-plugin"
---

# Using Zalo Auth Capacitor Plugin

In this tutorial, we will learn how to use the zalo-auth-capacitor-plugin package to authenticate with Zalo in a CapacitorJS project.

## Installation

To get started, we need to install the zalo-auth-capacitor-plugin package and perform some configuration steps.

```bash
npm install zalo-auth-capacitor-plugin
npx cap sync
```

## iOS Configuration

### 1. Update Podfile

Inside the `ios/App/Podfile` of your project, add the following line inside the `target 'App'` section:

```ruby
pod 'ZaloSDK'
```

### 2. Update AppDelegate.swift

In the `ios/App/App/AppDelegate.swift` file, make the following changes:

#### Import ZaloSDK

Add the following import statement at the top of the file:

```swift
import ZaloSDK
```

#### Initialize ZaloSDK

Inside the `didFinishLaunchingWithOptions` method, add the following code:

```swift
ZaloSDK.sharedInstance()?.initialize(withAppId: "APP_ID_FROM_ZALO_DEVELOPER")
```

#### Handle Open URL

Inside the `open` method, add the following code:

```swift
if url.absoluteString.hasPrefix("zalo-APP_ID_FROM_ZALO_DEVELOPER") {
    return ((ZDKApplicationDelegate.sharedInstance()?.application(app, open: url, options: options)) != nil)
}
```

## Android Configuration

### 1. Update build.gradle

Inside the `android/src/build.gradle` file, add the following lines inside the `dependencies` section:

```java
implementation "com.zing.zalo.zalosdk:core:+"
implementation "com.zing.zalo.zalosdk:auth:+"
implementation "com.zing.zalo.zalosdk:openapi:+"
```

### 2. Update MainActivity.java

In the `android/src/main/java/..../MainActivity.java` file, make the following changes:

#### Import ZaloSDK

Add the import statement for `ZaloSDK` class:

```java
import com.zing.zalo.zalosdk.oauth.ZaloSDK;
```

#### Register Plugin

Inside the callback of `this.init(savedInstanceState, ....)`, add the following line:

```java
add(com.rin.zaloauth.ZaloAuthCapacitorPlugin.class);
```

#### Handle onActivityResult

Inside the `onActivityResult` method, add the following line after `super.onActivityResult(requestCode, resultCode, data)`:

```java
ZaloSDK.Instance.onActivityResult(this, requestCode, resultCode, data);
```

## Usage

Now, let's see how to use the Zalo Auth Capacitor Plugin in your code.

```javascript
import { Plugins } from '@capacitor/core';

const { ZaloAuthCapacitorPlugin } = Plugins;

// Authenticate with Zalo
ZaloAuthCapacitorPlugin.authenticate()
  .then(response => {
    // Authentication successful
    console.log(response.accessToken);
  })
  .catch(error => {
    // Authentication failed
    console.error(error);
  });
```

That's it! You have successfully integrated Zalo authentication in your CapacitorJS project using the zalo-auth-capacitor-plugin.

I hope this tutorial was helpful in getting you started with the zalo-auth-capacitor-plugin. Happy coding!