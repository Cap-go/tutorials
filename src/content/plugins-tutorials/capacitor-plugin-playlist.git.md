---
"title": "How to Use capacitor-plugin-playlist Package"
"description": "A tutorial on integrating and using the capacitor-plugin-playlist package in your projects for handling audio playlists, background support, and lock screen controls."
"created_at": "2022-03-07"
"published": true
"slug": "capacitor-plugin-playlist.git"
---

# capacitor-plugin-playlist Tutorial

## Introduction

The capacitor-plugin-playlist package is a powerful plugin for Capacitor 3.0 that provides native support for audio playlists, background functionality, and lock screen controls on Android, iOS, and Web platforms. In this tutorial, we will guide you on how to install and utilize this plugin in your projects.

## Installation

To get started, follow these steps to install the capacitor-plugin-playlist package:

```bash
npm i capacitor-plugin-playlist
npx cap sync
```

### For Web

If you are working with a web project, make sure to include `hls.js` in your build by running the following commands:

```bash
npm i hls.js
```

Then, add the following configuration to your `angular.json` file:

```json
"scripts": [
  {
    "input": "node_modules/hls.js/dist/hls.min.js"
  }
]
```

### On Android

In the Android platform, you need to make the following additions to your `build.gradle` file:

```gradle
ext {
    exoPlayerVersion = "2.9.6"
    supportLibVersion = "28.0.0"
}
```

Update your `AndroidManifest.xml` with the following permissions and service configurations:

```xml
<uses-permission android:name="android.permission.WAKE_LOCK" />
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
<application
    android:name="org.dwbn.plugins.playlist.App"
>
    <service android:enabled="true" android:exported="false"
             android:name="org.dwbn.plugins.playlist.service.MediaService">
    </service>
</application>
```

To use Glide for image loading in the notification center, create a file named `MyAppGlideModule.java` with the following content:

```java
package org.your.package.namespace;

import com.bumptech.glide.annotation.GlideModule;
import com.bumptech.glide.module.AppGlideModule;

@GlideModule
public final class MyAppGlideModule extends AppGlideModule {}
```

## Usage

Once you have successfully installed the capacitor-plugin-playlist package, you can start using it in your project to handle audio playlists, background support, and lock screen controls. Refer to the package documentation for detailed usage instructions.

## Conclusion

Congratulations! You have learned how to integrate and use the capacitor-plugin-playlist package in your Capacitor projects. Enjoy seamless audio playlist management with native support on Android, iOS, and Web platforms.
```
```