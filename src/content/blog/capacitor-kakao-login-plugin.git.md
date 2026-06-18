---
"title": "Using Capacitor Kakao Login Plugin",
"description": "Learn how to integrate Kakao login functionality into your Capacitor 3 project with the capacitor3-kakao-login package.",
"created_at": "2023-09-19",
"published": true,
"slug": "capacitor-kakao-login-plugin.git"
---

# Using Capacitor Kakao Login Plugin

In this tutorial, we will walk through the process of integrating Kakao login functionality into your Capacitor 3 project using the `capacitor3-kakao-login` package.

## Installation

Start by installing the `capacitor3-kakao-login` package using npm:

```bash
npm install capacitor3-kakao-login
npx cap sync
```

### Android Setup

1. Add the Kakao repository to the root `build.gradle`:

```gradle
allprojects {
    repositories {
        google()
        jcenter()
        maven { url 'https://devrepo.kakao.com/nexus/content/groups/public/' }
    }
}
```

2. Create a `GlobalApplication` class to initialize the Kakao SDK:

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

3. Add the Kakao `app_key` and `kakao_schema` to the `res/string.xml` file:

```xml
<string name="kakao_app_key">kkba2d2cf331e7f4a7fdb0c8f3b3cecc</string>
<string name="kakao_scheme">kakaokkba2d2cf331e7f4a7fdb0c8f3b3cecc</string>
<string name="kakaolink_host">kakaolink</string>
```

4. Include Kakao data in the `AndroidManifest.xml` file:

```xml
<!-- Inside the application tag -->
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

Remember to check the official Kakao documentation for any updates and additional setup instructions.

You are now ready to start using Kakao login in your Capacitor 3 project!