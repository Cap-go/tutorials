---
"title": "Using Capacitor Background Geolocation Package",
"description": "A markdown tutorial on how to use @transistorsoft/capacitor-background-geolocation package in your Capacitor project.",
"created_at": "2023-10-06",
"published": true,
"slug": "capacitor-background-geolocation-git"
---

## Installing the Plugin

Capacitor 3+ is required for using the `@transistorsoft/capacitor-background-geolocation` package.

### With yarn

```bash
$ yarn add @transistorsoft/capacitor-background-geolocation
$ yarn add @transistorsoft/capacitor-background-fetch
$ npx cap sync
```

### With npm

```console
$ npm install @transistorsoft/capacitor-background-geolocation --save
$ npm install @transistorsoft/capacitor-background-fetch --save
$ npx cap sync
```

## Setup Guides

### iOS
- [Required iOS Setup](help/INSTALL-IOS.md)

### Android
- [Required Android Setup](help/INSTALL-ANDROID.md)

## Configure your license

1. Login to the Customer Dashboard to generate an application key: [www.transistorsoft.com/shop/customers](http://www.transistorsoft.com/shop/customers)
![Dashboard](dashboard_image_url)

2. Add your license key to `android/app/src/main/AndroidManifest.xml`:

```diff
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.transistorsoft.backgroundgeolocation.react">

    <application
        android:name=".MainApplication"
        android:allowBackup="true"
        android:label="@string/app_name"
        android:icon="@mipmap/ic_launcher"
        android:theme="@style/AppTheme">
    
        <!-- capacitor-background-geolocation license -->
+       <meta-data android:name="com.transistorsoft.locationmanager.license" android:value="YOUR_LICENSE_KEY_HERE" />
        .
        .
        .
    </application>
</manifest>
```

## Using the Plugin

Ensure you import the package in your JavaScript/TypeScript file:

```javascript
import BackgroundGeolocation from "@transistorsoft/capacitor-background-geolocation";
```

## Example

Follow these steps to use `BackgroundGeolocation`:
1. Wire up event-listeners.
2. `#ready` the plugin.
3. `#start` the plugin.

Note: Do not execute any API method requiring location-services before the callback to `#ready` executes.

```javascript
// No! .ready() has not resolved.
BackgroundGeolocation.getCurrentPosition(options);
BackgroundGeolocation.start();

BackgroundGeolocation.ready(config).then((state) => {
    // Yes! .ready() has now resolved.
    BackgroundGeolocation.getCurrentPosition(options);
    BackgroundGeolocation.start();
});
```