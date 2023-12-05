---
title: "Using capacitor-kakao-plugin"
description: "A tutorial on how to use capacitor-kakao-plugin package"
created_at: "2021-12-09"
published: true
slug: "capacitor-kakao-plugin"
---

# Using capacitor-kakao-plugin

In this tutorial, we will learn how to use the `capacitor-kakao-plugin` package to integrate Kakao services into your Capacitor project.

## Installation

To get started, make sure you have Capacitor installed globally on your machine. If not, you can install it by running the following command:

```bash
npm install -g @capacitor/cli
```

Next, navigate to your Capacitor project directory and install the `capacitor-kakao-plugin` package:

```bash
npm install capacitor-kakao-plugin
```

## Configuration

Once the package is installed, you need to configure the plugin to work with your Kakao application. Follow these steps:

### iOS

1. Open your Xcode project located at `ios/App/App.xcworkspace`.
2. In the AppDelegate.swift file, import the Kakao SDK:

```swift
import KakaoSDKCommon
```

3. Add the following line inside the `application(_:didFinishLaunchingWithOptions:)` method:

```swift
KakaoSDKCommon.initSDK(appKey: "YOUR_KAKAO_APP_KEY")
```

Replace `YOUR_KAKAO_APP_KEY` with the app key you obtained from the Kakao developer portal.

### Android

1. Open your Android project located at `android/app/src/main/java/your/package/name/MainActivity.java`.
2. Import the Kakao SDK:

```java
import com.kakao.sdk.common.KakaoSdk;
```

3. Add the following line inside the `onCreate(Bundle savedInstanceState)` method:

```java
KakaoSdk.init(this, "YOUR_KAKAO_APP_KEY");
```

Replace `YOUR_KAKAO_APP_KEY` with the app key you obtained from the Kakao developer portal.

## Usage

Now that the plugin is installed and configured, you can start using the Kakao services in your app. Here are some examples of common use cases:

### Login with Kakao

```typescript
import { KakaoLoginPlugin } from 'capacitor-kakao-plugin';

const login = async () => {
  const result = await KakaoLoginPlugin.login();
  
  if (result.accessToken) {
    // User is logged in
    // Access token can be used for further API calls
  } else {
    // Login failed
  }
};
```

### Share Content

```typescript
import { KakaoSharePlugin } from 'capacitor-kakao-plugin';

const share = async () => {
  const result = await KakaoSharePlugin.share({
    content: {
      title: 'Hello World',
      imageUrl: 'https://example.com/image.jpg',
      linkUrl: 'https://example.com',
      description: 'Check out this amazing content!'
    }
  });
  
  if (result.success) {
    // Content shared successfully
  } else {
    // Sharing failed
  }
};
```

## Conclusion

In this tutorial, we have learned how to install, configure, and use the `capacitor-kakao-plugin` package to integrate Kakao services into a Capacitor project. We covered login with Kakao and sharing content examples. You can explore more features of the plugin in the official documentation.

I hope you found this tutorial helpful. Happy coding!
