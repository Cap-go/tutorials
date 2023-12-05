---
title: "Using capacitor-kakaotalk-login Package"
description: "A tutorial on how to use the capacitor-kakaotalk-login package to implement KakaoTalk login functionality in your Capacitor app."
created_at: "2022-10-13"
published: true
slug: capacitor-kakaotalk-login
---

# Using capacitor-kakaotalk-login Package

This tutorial will guide you through the process of integrating KakaoTalk login functionality into your Capacitor app using the capacitor-kakaotalk-login package. By following these steps, you will be able to allow users to log in to your app using their KakaoTalk accounts.

## Prerequisites

Before you begin, make sure you have the following set up:

- Capacitor 3 installed in your project.
- An existing Capacitor app.

## Installation

To install the capacitor-kakaotalk-login package, run the following command:

```bash
npm install capacitor-kakaotalk-login
npx cap sync
```

## Android Configuration

### Add Kakao Repository

In the root `build.gradle` file of your Android project, add the Kakao repository by appending the following code to the `allprojects` block:

```groovy
allprojects {
    repositories {
        google()
        jcenter()
        maven { url 'https://devrepo.kakao.com/nexus/content/groups/public/' }
    }
}
```

### Initialize Kakao SDK

Create a new class `GlobalApplication` and add the following code to initialize the Kakao SDK:

```java
package io.ionic.starter;

import android.app.Application;
import com.fumi.capacitor3_kakao_login.Capacitor3KakaoLoginPlugin;

public class GlobalApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        Capacitor3KakaoLoginPlugin.initKakaoSdk(this, getString(R.string.kakao_app_key));
    }
}
```

### Add Kakao App Key and Kakao Schema

In the `res/values/strings.xml` file, add the Kakao App Key and Kakao Schema as string resources:

```xml
<string name="kakao_app_key">kkba2d2cf331e7f4a7fdb0c8f3b3cecc</string>
<string name="kakao_scheme">kakaokkba2d2cf331e7f4a7fdb0c8f3b3cecc</string>
<string name="kakaolink_host">kakaolink</string>
```

### Add Kakao Data to AndroidManifest.xml

Inside the `<application>` element of the `AndroidManifest.xml` file, add the following Kakao data:

```xml
<queries>
    <package android:name="com.kakao.talk" />
</queries>

<meta-data
    android:name="com.kakao.sdk.AppKey"
    android:value="@string/kakao_app_key" />

<activity android:name="com.kakao.sdk.auth.AuthCodeHandlerActivity">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data
            android:host="oauth"
            android:scheme="@string/kakao_scheme" />
    </intent-filter>
</activity>

<activity
    android:name="io.ionic.starter.MainActivity"
    android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale|smallestScreenSize|screenLayout|uiMode"
    android:label="@string/title_activity_main"
    android:launchMode="singleTask"
    android:theme="@style/AppTheme.NoActionBarLaunch">

    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data
            android:host="@string/kakaolink_host"
            android:scheme="@string/kakao_scheme" />
    </intent-filter>

    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>

</activity>
```

## Usage

You can now import and use the `capacitor-kakaotalk-login` plugin in your Capacitor app. Here's an example of how to implement KakaoTalk login:

```typescript
import { Plugins } from "@capacitor/core";
const { KakaoLogin } = Plugins;

...

async loginWithKakao() {
    try {
        const result = await KakaoLogin.login();
        const { accessToken, refreshToken } = result;
        // Process the login result
    } catch (error) {
        // Handle error
    }
}

...
```

In the above code, the `KakaoLogin.login()` method is used to initiate the login process. The login result contains the access token and refresh token, which can be used for further API calls or user authentication.

That's it! You have successfully integrated KakaoTalk login into your Capacitor app using the capacitor-kakaotalk-login package.

Remember to handle any errors and implement the necessary logic based on the login result.

Happy coding!