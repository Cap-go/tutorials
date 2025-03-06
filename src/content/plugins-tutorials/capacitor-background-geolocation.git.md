---
"title": "Using Capacitor Background Geolocation",
"description": "Step-by-step guide on how to use the @transistorsoft/capacitor-background-geolocation package in a Capacitor app.",
"created_at": "2022-01-20",
"published": true,
"slug": "capacitor-background-geolocation"

## Installing the Plugin

:warning: Capacitor 3+ required.

### With `yarn`

```bash
$ yarn add @transistorsoft/capacitor-background-geolocation
$ yarn add @transistorsoft/capacitor-background-fetch
$ npx cap sync
```

### With `npm`

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

1. Login to Customer Dashboard to generate an application key:
   [www.transistorsoft.com/shop/customers](http://www.transistorsoft.com/shop/customers)
   ![](https://gallery.mailchimp.com/e932ea68a1cb31b9ce2608656/images/b2696718-a77e-4f50-96a8-0b61d8019bac.png)

2. Add your license-key to `android/app/src/main/AndroidManifest.xml`:

```diff
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.transistorsoft.backgroundgeolocation.react">

  <application
    android:name=".MainApplication"
    android:allowBackup="true"
    android:label="@string/app_name"
    android:icon="@mipmap/ic_launcher"
    android:theme="@style/AppTheme">

    <!-- capacitor-background-geolocation licence -->
+     <meta-data android:name="com.transistorsoft.locationmanager.license" android:value="YOUR_LICENCE_KEY_HERE" />
    .
    .
    .
  </application>
</manifest>
```

## Using the plugin

```javascript
import BackgroundGeolocation from '@transistorsoft/capacitor-background-geolocation'
```

## Example

There are three main steps to using `BackgroundGeolocation`

1. Wire up event-listeners.
2. `#ready` the plugin.
3. `#start` the plugin.

:warning: Do not execute _any_ API method which will require accessing location-services until the callback to **`#ready`** executes (eg: `#getCurrentPosition`, `#watchPosition`, `#start`).

```javascript
// NO!  .ready() has not resolved.
BackgroundGeolocation.getCurrentPosition(options)
BackgroundGeolocation.start()

BackgroundGeolocation.ready(config).then((state) => {
  // YES -- .ready() has now resolved.
  BackgroundGeolocation.getCurrentPosition(options)
  BackgroundGeolocation.start()
})

```