---
"title": "Using Capacitor-Kakao-Login-Plugin",
"description": "A tutorial on integrating the Capacitor-Kakao-Login-Plugin package for Kakao login in a Capacitor 3 project.",
"created_at": "2021-12-01",
"published": true,
"slug": "capacitor-kakao-login-plugin.git"
---

# Using Capacitor-Kakao-Login-Plugin

In this tutorial, we will learn how to integrate the Capacitor-Kakao-Login-Plugin package for Kakao login in a Capacitor 3 project. The Capacitor-Kakao-Login plugin provides the functionality to authenticate users using Kakao accounts in your mobile application.

## Step 1: Installation

First, install the `capacitor3-kakao-login` package in your Capacitor 3 project:

```bash
npm install capacitor3-kakao-login
npx cap sync
```

## Step 2: Android Configuration

To set up the Kakao login plugin for Android, you'll need to add the Kakao repository to your root `build.gradle` file. Update the repositories section as follows:

```gradle
allprojects {
    repositories {
        google()
        jcenter()
        maven { url 'https://devrepo.kakao.com/nexus/content/groups/public/' }
    }
}
```

Next, initialize the Kakao SDK in your Android application by creating a `GlobalApplication` class. Add the following code to your `GlobalApplication.java` file:

```java
package io.ionic.starter;

import android.app.Application;

import com.fumi.capacitor3_kakao_login.Capacitor3KakaoLoginPlugin;

public class GlobalApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        Capacitor3KakaoLoginPlugin.initKakaoSdk(this,getString(R.string.kakao_app_key));
    }

}
```

Make sure to replace `kakao_app_key` and `kakao_scheme` with your specific Kakao key and scheme in the `res/string.xml` file.

Finally, add necessary Kakao data inside the `<application>` tag of your `AndroidManifest.xml` file. This includes the Kakao app key, scheme, and additional configurations for Kakao login.

## Step 3: Initialize Kakao Login

After setting up the Android configurations, you can now initialize Kakao Login in your application. Use the Capacitor3KakaoLoginPlugin to handle Kakao login functionalities in your Capacitor project.

This tutorial covers the basic setup for integrating the Capacitor-Kakao-Login-Plugin. For more advanced configurations and implementations, refer to the plugin's official documentation.

By following these steps, you can successfully integrate Kakao login into your Capacitor 3 project using the Capacitor-Kakao-Login-Plugin.