---
title: "Tutorial: Using capacitor-kakao-login-plugin"
description: "Learn how to integrate kakao login into your Capacitor 3 project using the capacitor-kakao-login-plugin package."
created_at: "2022-08-30"
published: true
slug: "capacitor-kakao-login-plugin"
---

# Tutorial: Using capacitor-kakao-login-plugin

In this tutorial, we will guide you through the process of integrating kakao login into your Capacitor 3 project using the capacitor-kakao-login-plugin package.

## Installation

First, you need to install the capacitor-kakao-login-plugin package. Open your terminal and run the following command:

```bash
npm install capacitor-kakao-login-plugin
npx cap sync
```

## Android Configuration

To configure the package for Android, you need to make a few adjustments to your project.

1. Add the Kakao repository to the root `build.gradle` file:

   ```groovy
   allprojects {
       repositories {
           google()
           jcenter()
           maven { url 'https://devrepo.kakao.com/nexus/content/groups/public/' }
       }
   }
   ```

2. Create a global application class (`GlobalApplication.java`) if you don't have one already. Add the following code to initialize the Kakao SDK:

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

3. Add the Kakao app key and Kakao schema to your `res/strings.xml` file:

   ```xml
   <string name="kakao_app_key">kkba2d2cf331e7f4a7fdb0c8f3b3cecc</string>
   <string name="kakao_scheme">kakaokkba2d2cf331e7f4a7fdb0c8f3b3cecc</string>
   <string name="kakaolink_host">kakaolink</string>
   ```

4. Add the Kakao data inside the `<application>` tag in your `AndroidManifest.xml` file:

   ```xml
   <manifest xmlns:android="http://schemas.android.com/apk/res/android"
       package="io.ionic.starter">

       <!-- Add this line to query the KakaoTalk package -->
       <queries>
           <package android:name="com.kakao.talk" />
       </queries>

       <application
           android:name=".GlobalApplication"
           android:allowBackup="true"
           android:icon="@mipmap/ic_launcher"
           android:label="@string/app_name"
           android:roundIcon="@mipmap/ic_launcher_round"
           android:supportsRtl="true"
           android:theme="@style/AppTheme">

           <!-- Add the Kakao app key -->
           <meta-data
               android:name="com.kakao.sdk.AppKey"
               android:value="@string/kakao_app_key" />

           <!-- Add the AuthCodeHandlerActivity for Kakao login -->
           <activity android:name="com.kakao.sdk.auth.AuthCodeHandlerActivity">
               <intent-filter>
                   <action android:name="android.intent.action.VIEW" />

                   <category android:name="android.intent.category.DEFAULT" />
                   <category android:name="android.intent.category.BROWSABLE" />

                   <!-- Add the Kakao schema -->
                   <data
                       android:host="oauth"
                       android:scheme="@string/kakao_scheme" />
               </intent-filter>
           </activity>

           <!-- Add your MainActivity and configure it for Kakao deep linking -->
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

                   <!-- Add the Kakao schema and host for deep linking -->
                   <data
                       android:host="@string/kakaolink_host"
                       android:scheme="@string/kakao_scheme" />
               </intent-filter>

               <!-- Add your other intent filters if any -->
               <intent-filter>
                   <action android:name="android.intent.action.MAIN" />
                   <category android:name="android.intent.category.LAUNCHER" />
               </intent-filter>

           </activity>

       </application>
   </manifest>
   ```

## Usage

Now that you have installed and configured the capacitor-kakao-login-plugin package, you can start using it in your Capacitor 3 project.

1. Import the plugin in your project:

   ```typescript
   import { Plugins } from '@capacitor/core';
   const { KakaoLogin } = Plugins;
   ```

2. Use the plugin methods to implement the kakao login functionality. For example, you can use the `login()` method to initiate the login process:

   ```typescript
   const kakaoLogin = async () => {
       try {
           const result = await KakaoLogin.login();
           console.log(result);
           // Handle the login result
       } catch (error) {
           console.error(error);
           // Handle the error
       }
   };
   ```

3. Customize the login process according to your application's logic. You can use the received user data to authenticate the user and grant access to your app's features.

That's it! You have successfully integrated kakao login into your Capacitor 3 project using the capacitor-kakao-login-plugin package.

Remember to test your implementation thoroughly and handle any potential errors or edge cases.

Happy coding!