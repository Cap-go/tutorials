# capacitor-map-link

Open the map app of the user's choice with a specific location.

```bash
npm install capacitor-map-link @capacitor/action-sheet capacitor-linking
npx cap sync
```

## Using the showLocation Function

Using the `showLocation` function will show an action sheet (@capacitor/action-sheet)

```typescript
import { CapMapLink } from 'capacitor-map-link';

CapMapLink.showLocation({
  latitude: 38.8976763,
  longitude: -77.0387185,
  sourceLatitude: -8.0870631, // optionally specify starting location for directions
  sourceLongitude: -34.8941619, // required if sourceLatitude is specified
  title: 'The White House', // optional
  googleForceLatLon: false, // optionally force GoogleMaps to use the latlon for the query instead of the title
  googlePlaceId: 'ChIJGVtI4by3t4kRr51d_Qm_x58', // optionally specify the google-place-id
  alwaysIncludeGoogle: true, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
  dialogTitle: 'This is the dialog Title', // optional (default: 'Open in Maps')
  dialogMessage: 'This is the amazing dialog Message', // optional (default: 'What app would you like to use?')
  cancelText: 'This is the cancel button text', // optional (default: 'Cancel')
  appsWhiteList: ['google-maps'], // optionally you can set which apps to show (default: will show all supported apps installed on device)
  naverCallerName: 'com.example.myapp', // to link into Naver Map You should provide your appname which is the bundle ID in iOS and applicationId in android.
  appTitles: { 'google-maps': 'My custom Google Maps title' }, // optionally you can override default app titles
  app: 'uber', // optionally specify specific app to use
  directionsMode: 'walk', // optional, accepted values are 'car', 'walk', 'public-transport' or 'bike'
});
```

## Adding URL Schemes to `Info.plist`

To ensure your app can properly handle URL schemes, you need to add the required schemes to the `Info.plist` file of your iOS project. This allows the app to check and open URLs with these schemes.

### Example `Info.plist`

Here is an example of how your `Info.plist` should look with the URL schemes added:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    ...
    <key>LSApplicationQueriesSchemes</key>
    <array>
        <string>maps</string>
        <string>comgooglemaps</string>
        <string>citymapper</string>
        <string>uber</string>
        <string>lyft</string>
        <string>transit</string>
        <string>truckmap</string>
        <string>waze</string>
        <string>yandexnavi</string>
        <string>moovit</string>
        <string>yandexmaps</string>
        <string>yandextaxi</string>
        <string>kakaomap</string>
        <string>tmap</string>
        <string>szn-mapy</string>
        <string>mapsme</string>
        <string>osmandmaps</string>
        <string>gett</string>
        <string>nmap-disabled</string>
        <string>dgis</string>
        <string>lftgpas</string>
        <string>petalmaps</string>
        <string>com.sygic.aura</string>
    </array>
    ...
</dict>
</plist>
```

## Adding URL Schemes to `AndroidManifest.xml`

To ensure your app can properly handle URL schemes, you need to add the required schemes to the `AndroidManifest.xml` file of your Android project. This allows the app to check and open URLs with these schemes.

### Example `AndroidManifest.xml`

Here is an example of how your `AndroidManifest.xml` should look with the URL schemes added:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.app">

    <queries>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="http" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="https" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="geo" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="google.navigation" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="applemaps" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="citymapper" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="uber" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="lyft" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="transit" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="truckmap" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="waze" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="yandexnavi" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="moovit" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="yandexmaps" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="yandextaxi" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="kakaomap" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="tmap" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="mapycz" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="mapsme" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="osmand.geo" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="gett" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="nmap" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="dgis" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="lftgpas" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="petalmaps" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="com.sygic.aura" />
        </intent>
    </queries>

    <application
        android:name=".MainApplication"
        android:label="@string/app_name"
        android:icon="@mipmap/ic_launcher">
        ...
    </application>
</manifest>
```

## Install

```bash
npm install capacitor-map-link @capacitor/action-sheet capacitor-linking
npx cap sync
```

## API

<docgen-index>

- [`showLocation(...)`](#showlocation)
- [`getApps(...)`](#getapps)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### showLocation(...)

```typescript
showLocation(options: ShowLocationProps) => Promise<any>
```

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#showlocationprops">ShowLocationProps</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### getApps(...)

```typescript
getApps(options: GetAppsProps) => Promise<GetAppsResponse[]>
```

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#showlocationprops">ShowLocationProps</a></code> |

**Returns:** <code>Promise&lt;GetAppsResponse[]&gt;</code>

---

### Interfaces

#### ShowLocationProps

| Prop                      | Type                                                                                                                      | Description                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **`latitude`**            | <code>string \| number</code>                                                                                             |                                                                    |
| **`longitude`**           | <code>string \| number</code>                                                                                             |                                                                    |
| **`address`**             | <code>string \| null</code>                                                                                               | latitude and longitude will be ignored if the address field is set |
| **`sourceLatitude`**      | <code>number \| null</code>                                                                                               |                                                                    |
| **`sourceLongitude`**     | <code>number \| null</code>                                                                                               |                                                                    |
| **`appleIgnoreLatLon`**   | <code>boolean</code>                                                                                                      |                                                                    |
| **`alwaysIncludeGoogle`** | <code>boolean</code>                                                                                                      |                                                                    |
| **`googleForceLatLon`**   | <code>boolean</code>                                                                                                      |                                                                    |
| **`googlePlaceId`**       | <code>string \| number</code>                                                                                             |                                                                    |
| **`title`**               | <code>string \| null</code>                                                                                               |                                                                    |
| **`app`**                 | <code><a href="#mapid">MapId</a> \| null</code>                                                                           |                                                                    |
| **`dialogTitle`**         | <code>string \| null</code>                                                                                               |                                                                    |
| **`dialogMessage`**       | <code>string \| null</code>                                                                                               |                                                                    |
| **`cancelText`**          | <code>string \| null</code>                                                                                               |                                                                    |
| **`appsWhiteList`**       | <code>string[] \| null</code>                                                                                             |                                                                    |
| **`appTitles`**           | <code><a href="#partial">Partial</a>&lt;<a href="#record">Record</a>&lt;<a href="#mapid">MapId</a>, string&gt;&gt;</code> |                                                                    |
| **`naverCallerName`**     | <code>string</code>                                                                                                       |                                                                    |
| **`directionsMode`**      | <code><a href="#directionmode">DirectionMode</a></code>                                                                   |                                                                    |

### Type Aliases

#### MapId

<code>'apple-maps' | 'google-maps' | 'citymapper' | 'uber' | 'lyft' | 'transit' | 'truckmap' | 'waze' | 'yandex' | 'moovit' | 'yandex-maps' | 'yandex-taxi' | 'kakaomap' | 'tmap' | 'mapycz' | 'maps-me' | 'osmand' | 'gett' | 'navermap' | 'dgis' | 'liftago' | 'petalmaps' | 'sygic'</code>

#### Partial

Make all properties in T optional

<code>{
[P in keyof T]?: T[P];
}</code>

#### Record

Construct a type with a set of properties K of type T

<code>{
[P in K]: T;
}</code>

#### DirectionMode

<code>'car' | 'walk' | 'public-transport' | 'bike'</code>

#### GetAppsResponse

<code>{ id: <a href="#mapid">MapId</a>; name: string; /\*_ function to link user to map app _/ open: () =&gt; Promise&lt;string | null&gt;; }</code>

#### GetAppsProps

<code><a href="#showlocationprops">ShowLocationProps</a></code>

</docgen-api>
