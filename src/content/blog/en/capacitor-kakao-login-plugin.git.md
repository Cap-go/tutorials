---
title: Using Capacitor Kakao Login Plugin
description: >-
  A tutorial on implementing Kakao login functionality in Capacitor 3
  applications
created_at: '2022-01-28'
published: true
slug: capacitor-kakao-login-plugin.git
locale: en
---

# capacitor-kakao-login-plugin Tutorial

## Introduction
This tutorial will guide you through the process of integrating Kakao login in Capacitor 3 applications using the `capacitor-kakao-login-plugin`.

## Installation

```bash
npm install capacitor3-kakao-login
npx cap sync
```

## Android Setup
1. Add the Kakao repository to the root build.gradle file:
```groovy
allprojects {
    repositories {
        google()
        jcenter()
        maven { url 'https://devrepo.kakao.com/nexus/content/groups/public/' }
    }
}
```

2. Create a Global Application class for initializing the Kakao SDK:
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

3. Add Kakao app_key, kakao_schema, and kakaolink_host in res/values/strings.xml:
```xml
<string name="kakao_app_key">kkba2d2cf331e7f4a7fdb0c8f3b3cecc</string>
<string name="kakao_scheme">kakaokkba2d2cf331e7f4a7fdb0c8f3b3cecc</string>
<string name="kakaolink_host">kakaolink</string>
```

4. Add Kakao data inside the application tag in AndroidManifest.xml:
```xml
<!-- AndroidManifest.xml -->
<application
    android:name=".GlobalApplication"
    ...>

    <meta-data
        android:name="com.kakao.sdk.AppKey"
        android:value="@string/kakao_app_key" />

    <!-- Kakao AuthCodeHandlerActivity -->
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

    <!-- Your App's Main Activity -->
    <activity
        android:name="io.ionic.starter.MainActivity"
        ...>
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
</application>
```

## Usage
You can now use the Kakao login functionality provided by the `capacitor-kakao-login-plugin`.

```typescript
import { Plugins } from '@capacitor/core';
const { Capacitor3KakaoLogin } = Plugins;

// Example: Logging in with Kakao
const login = async () => {
  const result = await Capacitor3KakaoLogin.login();
  console.log('Kakao login result:', result);
};
```

This concludes the tutorial on using the `capacitor-kakao-login-plugin` in Capacitor 3 applications. Happy coding!
```
