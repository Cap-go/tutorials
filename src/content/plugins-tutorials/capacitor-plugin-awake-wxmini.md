---
title: "Using capacitor-plugin-awake-wxmini"
description: "A tutorial on how to use the capacitor-plugin-awake-wxmini package to integrate WeChat Mini Programs into your app"
created_at: "2021-09-28"
published: true
slug: capacitor-plugin-awake-wxmini
---

# Using capacitor-plugin-awake-wxmini

The **capacitor-plugin-awake-wxmini** package allows you to integrate WeChat Mini Programs into your Capacitor app. With this plugin, you can launch a WeChat Mini Program from your app and have it return to your app after the user has completed their actions within the mini program.

## Prerequisites

Make sure you have the following installed and set up:

- Capacitor: Follow the [Capacitor installation guide](https://capacitorjs.com/docs/getting-started/installation) to set up Capacitor in your project.
- WeChat Developer Account: You'll need to [register as a WeChat developer](https://open.weixin.qq.com/) and obtain the necessary credentials to use WeChat Mini Programs.

## Installation

To install the **capacitor-plugin-awake-wxmini** package, run the following command in your project:

```bash
npm install capacitor-plugin-awake-wxmini --save
```

## Android Configuration

To use the plugin on Android, you'll need to make some additional configuration changes.

1. Open the `MainActivity.java` file in your Android project.

2. Import the plugin at the beginning of the file:

   ```java
   import com.brainy.awakewxmini.AwakeWxMiniPlugin;
   ```

3. Inside the `MainActivity` class, add the plugin to the `add` method:

   ```java
   add(AwakeWxMiniPlugin.class);
   ```

## Usage

The `awake` method is used to launch a WeChat Mini Program from your app. It requires an `AwakeOptions` object as a parameter, which contains the necessary information to launch the mini program.

Here's an example of how to use the `awake` method:

```javascript
import { Plugins } from '@capacitor/core';

const { AwakeWxMiniPlugin } = Plugins;

AwakeWxMiniPlugin.awake({
  appId: "YOUR_APP_ID",
  miniId: "YOUR_MINI_PROGRAM_ID",
  path: "/path",
  type: 0,
});
```

Replace `YOUR_APP_ID` with your WeChat App ID and `YOUR_MINI_PROGRAM_ID` with the original ID of your WeChat Mini Program. The `path` parameter is optional and represents the specific path in the mini program to open. The `type` parameter defines the type of mini program to open (0 for the official version, 1 for the development version, and 2 for the trial version).

## Handling Mini Program Return

To handle the return from the WeChat Mini Program to your app, you need to follow these steps:

1. Create a new package named `wxapi` at the same level as your `MainActivity` file.

2. Inside the `wxapi` package, create a new Java class named `WXEntryActivity` with the following content:

   ```java
   package com.your.package.wxapi;

   import android.app.Activity;
   import android.content.Intent;
   import android.os.Bundle;
   import android.util.Log;

   import com.brainy.awakewxmini.AwakeWxMiniPlugin;
   import com.getcapacitor.PluginCall;
   import com.tencent.mm.opensdk.modelbase.BaseResp;

   public class WXEntryActivity extends Activity {
     @Override
     public void onCreate(Bundle savedInstanceState) {
       super.onCreate(savedInstanceState);
       Intent intent = getIntent();
       AwakeWxMiniPlugin.handleIntent(intent);
     }

     @Override
     protected void onNewIntent(Intent intent) {
       super.onNewIntent(intent);
       setIntent(intent);
     }

     @Override
     public void onResp(BaseResp resp) {
       super.onResp(resp);
       PluginCall call = AwakeWxMiniPlugin.getCall();
       if (call != null) {
         // Handle the returned data from the mini program
         // You can access the data using `resp` object
         call.resolve();
       }
       finish();
     }
   }
   ```

3. Replace `com.your.package` with the actual package name of your app.

4. Make sure that the package name and class name match the package and class name mentioned in your app's `AndroidManifest.xml` file.

## Conclusion

In this tutorial, you learned how to integrate WeChat Mini Programs into your Capacitor app using the **capacitor-plugin-awake-wxmini** package. You installed the package, configured it for Android, and used the `awake` method to launch a mini program. You also learned how to handle the return from the mini program in your app.

Explore the plugin's documentation for more advanced usage and additional options available.