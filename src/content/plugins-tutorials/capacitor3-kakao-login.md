---
title: Using Capacitor3-Kakao-Login Package
description: A tutorial on how to integrate and use the Capacitor3-Kakao-Login package in your Capacitor 3 project for implementing Kakao login functionality.
created_at: 2023-05-04
published: true
slug: capacitor3-kakao-login
---

# Using Capacitor3-Kakao-Login Package

In this tutorial, we will walk through the steps to integrate and use the Capacitor3-Kakao-Login package in your Capacitor 3 project for implementing Kakao login functionality.

## Installation

To get started, first install the `capacitor3-kakao-login` package by running the following commands in your terminal:

```bash
npm install capacitor3-kakao-login
npx cap sync
```

## Android Setup

### Add Kakao Repository to Root `build.gradle`

Add the Kakao repository to the list of repositories in the root `build.gradle` file:

```java

allprojects {
    repositories {
        google()
        jcenter()
        maven { url 'https://devrepo.kakao.com/nexus/content/groups/public/' }
    }
}

```

### Initialize Kakao SDK

Create a `GlobalApplication` class in your Android project to initialize the Kakao SDK:

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

### Add Kakao Keys to `res/string.xml`

Define the Kakao app key, Kakao schema, and Kakao link host in the `res/string.xml` file:

```xml
<string name="kakao_app_key">kkba2d2cf331e7f4a7fdb0c8f3b3cecc</string>
<string name="kakao_scheme">kakaokkba2d2cf331e7f4a7fdb0c8f3b3cecc</string>
<string name="kakaolink_host">kakaolink</string>
```

### Update Android Manifest

Add the Kakao data inside the application tag in your `AndroidManifest.xml` file:

```xml
<meta-data
    android:name="com.kakao.sdk.AppKey"
    android:value="@string/kakao_app_key" />

<activity android:name="com.kakao.sdk.auth.AuthCodeHandlerActivity">
    ...
</activity>

<activity
    android:name="io.ionic.starter.MainActivity"
    ...
</activity>
```

With these configurations in place, you have successfully integrated the Capacitor3-Kakao-Login package into your Capacitor 3 project for Kakao login functionality. Make sure to follow the specific instructions for iOS and other platforms as needed.
