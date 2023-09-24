# How to Use capacitor-plugin-playlist

The `capacitor-plugin-playlist` package is a Capacitor 3.0 plugin that provides native support for audio playlists, background support, and lock screen controls on Android, iOS, and Web platforms. This tutorial will guide you through the process of installing and using the plugin in your Capacitor project.

## Installation

1. Install the `capacitor-plugin-playlist` package by running the following command:

   ```
   npm i capacitor-plugin-playlist
   ```

2. Sync your Capacitor project to update the native dependencies by running the following command:

   ```
   npx cap sync
   ```

3. If you are targeting the Web platform, you need to include `hls.js` in your build. Install it by running the following command:

   ```
   npm i hls.js
   ```

4. For Angular 2+ projects, add the following configuration to your `angular.json` file inside the `architect => build => options` section:

   ```json
   "scripts": [
     {
       "input": "node_modules/hls.js/dist/hls.min.js"
     }
   ]
   ```

5. For Android platform, you need to make some modifications in your Android project.

   - Add the following additional configuration to your `build.gradle` file:

     ```groovy
     ext {
         exoPlayerVersion = "2.9.6"
         supportLibVersion = "28.0.0"
     }
     ```

   - Edit the `AndroidManifest.xml` file and add the following permissions:

     ```xml
     <uses-permission android:name="android.permission.WAKE_LOCK" />
     <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
     ```

     Also, add the following service declaration inside the `<application>` tag:

     ```xml
     <service android:enabled="true" android:exported="false"
              android:name="org.dwbn.plugins.playlist.service.MediaService">
     </service>
     ```

   - To use Glide image loading for the notification center, create a file `MyAppGlideModule.java` with the following content:

     ```java
     package org.your.package.namespace;

     import com.bumptech.glide.annotation.GlideModule;
     import com.bumptech.glide.module.AppGlideModule;
     ```

## Usage

Now that you have installed the `capacitor-plugin-playlist` package, you can start using it in your Capacitor project. Here's a basic example to get you started:

1. Import the plugin at the top of your TypeScript file:

   ```typescript
   import { Plugins } from '@capacitor/core';
   const { PlaylistPlugin } = Plugins;
   ```

2. Use the plugin in your code. Here's an example of playing a playlist:

   ```typescript
   // Create a playlist
   const playlist = [
     {
       url: 'https://example.com/song1.mp3',
       title: 'Song 1',
       artist: 'Artist 1'
     },
     {
       url: 'https://example.com/song2.mp3',
       title: 'Song 2',
       artist: 'Artist 2'
     }
   ];

   // Play the playlist
   PlaylistPlugin.play({ playlist });
   ```

3. You can also control the playback using other methods provided by the plugin. For example, to pause the playback:

   ```typescript
   PlaylistPlugin.pause();
   ```

   And to resume the playback:

   ```typescript
   PlaylistPlugin.resume();
   ```

   Refer to the plugin documentation for more details on the available methods and their usage.

## Conclusion

In this tutorial, you learned how to install and use the `capacitor-plugin-playlist` package in your Capacitor project. You can now leverage the native support for audio playlists, background support, and lock screen controls in your app. Explore the plugin's documentation to discover more advanced features and customization options.