# situm-capacitor-plugin-wayfinding

Situm Wayfinding Plugin for Capacitor has been designed to create indoor location applications in the simplest way. It has been built in the top of the Situm SDK.

## Submitting Contributions

You will need to sign a Contributor License Agreement (CLA) before making a submission. [Learn more here.](https://situm.com/contributions/)

## Configuration

First of all, you must configure your Capacitor project. This has been already done for you in [the sample application](https://github.com/situmtech/situm-capacitor-plugin-wayfinding-getting-started), but nonetheless you can read the official [Capacitor documentation](https://capacitorjs.com/docs/getting-started).

Dont forget to add the platforms of your choice:

```bash
your/project/path$ npx cap add <platform>
```

Remember that this module implements the Android and iOS native interfaces but not the web interface as it is intended for use in mobile applications.

To install `situm-capacitor-plugin-wayfinding`, add the next line to your `package.json` file:

```json
"dependencies": {
    "situm-capacitor-plugin-wayfinding": "latest"
```

Then run `npm install` and `npx cap sync` to install packages, copy the web app build and Capacitor configuration file into the native platform project and update the native plugins and dependencies previously referenced:

```bash
your/project/path$ npm install && npx cap sync
```

In your project, add the HTMLElement that will hold the Situm Wayfinding Module (the map div):

```html
<div id="situm-map"></div>
```

The size of this `div` will be the size of the native module. That size must be greater than 0.
Note that right now it is not possible to modify the size or position of the native element, which affects both scrollable elements and screen rotations.

The native map will be drawn behind your HTML. Make sure the background of the parent HTML elements is transparent. For example, in ionic:

```css
ion-content {
  --background: none;
}
```

And finally in your Typescript layer, initialize the module:

```typescript
const librarySettings = {
  user: 'YOUR_SITUM_USER',
  apiKey: 'YOUR_SITUM_APIKEY',
  iosGoogleMapsApiKey: 'YOUR_IOS_GOOGLE_MAPS_APIKEY',
  buildingId: 'YOUR_BUILDING_ID',
  dashboardUrl: 'https://dashboard.situm.com',
  hasSearchView: true,
  searchViewPlaceholder: 'Capacitor WYF',
  useDashboardTheme: false,
  captureTouchEvents: true,
  useRemoteConfig: false,
}
await SitumWayfinding.load(element, librarySettings)
```

A common use case is to integrate this plugin in the lifecycle of a framework like Angular, React or Vue. I such cases, the framework may destroy and recreate the page on which the map div is defined (for example, after navigating). You must call `load(HTMLElement element, ...)` as many times as you need to tell the plugin that the map div has changed (for example, at every call to `ionViewDidEnter` if you are using Ionic's lifecycle callbacks). More information in the section [Frameworks navigation](#frameworks-navigation).

## Requirements:

### Setup your Situm Account

You must set up an account in our [Dashboard](https://dashboard.situm.com), retrieve your API KEY and configure your first building:

1. Go to the [sign in form](http://dashboard.situm.com/accounts/register) and enter your username and password to sign in.
2. Go to the [account section](https://dashboard.situm.com/accounts/profile) and on the bottom, click on “generate one” to generate your API KEY.
3. Go to the [buildings section](http://dashboard.situm.com/buildings) and create your first building.
4. Download Situm Mapping Tool in Play Store (Only Android devices) and calibrate your building. Check out our user guide for detailed information.

### Google Maps API KEY:

A Google Maps API KEY is required for this plugin to work.
More info is available in the official [Google Documentation](https://developers.google.com/maps/documentation/android-sdk/get-api-key).
Make sure to enable your API KEY for the platforms of your choice.

1. iOS: put your API KEY in the `LibrarySettings` object of this example app.

```typescript
const librarySettings = {
          ...
          iosGoogleMapsApiKey: "YOUR_IOS_GOOGLE_MAPS_APIKEY",
          ...
        };
```

2. Android: the Google Maps API KEY must be set in the `AndroidManifest.xml` file (that you will find in the `android/src/main` folder) of your project.

```xml
<meta-data android:name="com.google.android.geo.API_KEY"
    android:value="YOUR_ANDROID_GOOGLE_MAPS_APIKEY"/>
```

### Dependencies:

At this moment this module uses [Capacitor Google Maps](https://github.com/situmtech/capacitor-google-maps). Add this dependency to your `package.json` to let Capacitor add the corresponding native project modules (a fork of the original repository):

```json
"dependencies": {
    "situm-capacitor-googlemaps-native": "0.0.3"
```

#### Android

This module depends on the [Situm Wayfinding for Android visual component](https://situm.com/docs/01-android-quickstart-guide/). You must add the Situm Repository to your project level `build.gradle` file (again, in the `android` folder of your project):

```groovy
allprojects {
    repositories {
        maven { url "https://repo.situm.com/artifactory/libs-release-local" }
        ...
```

The location permission is required in your app level `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

If you are targeting Android Pie devices (or above), add Apache Http Legacy to your `AndroidManifest.xml`:

```xml
<uses-library
  android:name="org.apache.http.legacy"
  android:required="false"/>
```

## Customization:

### Colors

Use the parameter `useDashboardTheme` of `LibrarySettings` to decorate the whole WYF UI with your organization theme.

### Positioning icons

Use the fields `userPositionIcon` and `userPositionArrowIcon` in `LibrarySettings` to set the icons representing the user position (without and with orientation respectively).

The path is relative to the native **android assets folder** and **iOS App folder**. It was inspired in the results of [`npx cap sync`](https://capacitorjs.com/docs/cli/sync) as you will see bellow. For example, for the following tree:

```
android/app/src/main/assets/
|   ...
├── public/
|   ...
|   ├── images
|   │   ├── dot_icon.png
|   │   └── arrow_icon.png
...

ios/App/App/
|   ...
├── public/
|   ...
|   ├── images
|   │   ├── dot_icon.png
|   │   └── arrow_icon.png

```

Will apply the following path:

```typescript
  // LibrarySettings:
  const librarySettings = {
    user: "YOUR_SITUM_USER",
    ...
    userPositionIcon: "public/images/dot_icon.png",
    userPositionArrowIcon: "public/images/arrow_icon.png"
  };
```

You can manually copy the icons in your native projects, or manage them in the web side.
For the latter, your assets folder will vary depending on the UI framework of your choice, for example:

- Angular: see the [assets property for your build options in the documentation](https://angular.io/guide/workspace-config#additional-build-and-test-options).
- Vue: see the [public folder](https://cli.vuejs.org/guide/html-and-static-assets.html#the-public-folder).

In both cases the execution of `npx cap sync` will copy your assets to a predefined `public` folder, as you can see in the following output:

```
$ npx cap sync
...
✔ Copying web assets from dist to android/app/src/main/assets/public
...
✔ Copying web assets from dist to ios/App/App/public
...
```

Check that folders after executing `npx cap sync` to ensure you are setting the correct path to your icons.

Using or not a UI framework is up to you, the rule is to set a path relative to the native assets folders.

## How does this plugin work?

### The map div:

This plugin generates a native map view, and puts it **under the browser** (the map view is not an HTML element). You can specify the size and position of the map view using its containing `<div>` (the map div).

![How it works](images/how_it_works.png?raw=true 'How it works')

The plugin changes the background of the map div to transparent in your application. If any other HTML element is displayed **over or behind** the map div, then it will cover the native map. For example, it is known that Ionic `ion-content` will set a solid background to your contents, so if you put the map div inside an `ion-content` element you will probably need to force its brackground to transparent:

```html
...
<ion-content>
  <div id="situm-map"></div>
  ...
</ion-content>
```

```css
ion-content {
  --background: none;
}
```

### Touch events dispatching:

This plugin adds a native transparent layer over the map that will capture and handle every touch event of your app. Once the map is loaded:

- Every touch event inside the map bounds will be dispathed to the native map.
- Any HTML element **inside the map div** will also receive the same touch events:

```html
<div id="situm-map">
  <!-- The function onOverlayClick() will be called. -->
  <div id="mapOverlay" (click)="onOverlayClick();"><p>HTML element</p></div>
</div>
```

- Any HTML element outside the map bounds will also receive the touch events.
- The plugin will not dispatch touch events to any HTML element defined **outside the map div but inside the map bounds**. You can use the method `setCaptureTouchEvents(false)` to prevent this and handle every touch event in your app. Call `setCaptureTouchEvents(true)` to return the control to the map.

### Frameworks navigation

Common applications will probably use the navigation pattern established by some framework like Angular, React or Vue. It is possible for the framework to recreate the page on which the map div is defined (for example, when the page is removed from the stack). In such cases, the map div HTMLElement reference gets obsolete. As a consecuence, event delegation stops working properly when interacting with HTML elements displayed over the native map.

To solve this inconvenience you can call `load(HTMLElement element, ...)` as many times as you need to refresh the underlying reference and make the plugin work as expected.

## API

- [`load(...)`](#load)
- [`unload()`](#unload)
- [`onPoiSelected(...)`](#onPoiSelected)
- [`onPoiDeselected(...)`](#onPoiDeselected)
- [`onFloorChange(...)`](#onFloorChange)
- [`onNavigationRequested(...)`](#onNavigationRequested)
- [`onNavigationFinished(...)`](#internalOnNavigationFinished)
- [`onNavigationError(...)`](#internalOnNavigationError)
- [`setCaptureTouchEvents(...)`](#setCaptureTouchEvents)
- [`selectBuilding(...)`](#selectBuilding)
- [`selectPoi(...)`](#selectPoi)
- [`navigateToPoi(...)`](#navigateToPoi)
- [`navigateToLocation(...)`](#navigateToLocation)
- [`stopNavigation(...)`](#stopNavigation)
- [`stopPositioning()`](#stopPositioning)
- [Interfaces](#interfaces)

### load

```typescript
load(settings: WayfindingSettings) => Promise<WayfindingResult>
```

| Param          | Type                 |
| -------------- | -------------------- |
| **`settings`** | `WayfindingSettings` |

**Returns:** `Promise<WayfindingResult>`

---

### unload

```typescript
unload() => any
```

**Returns:** `any`

---

### onPoiSelected

Get notified every time a Poi is selected.

```typescript
onPoiSelected(callback: (data: OnPoiSelectedResult) => void)

// Example:
SitumWayfinding.onPoiSelected((result: OnPoiSelectedResult) => {
  console.log(`Selected ${result.poiName} at ${result.buildingName}`);
});
```

**Returns:** `void`

---

### onPoiDeselected

Get notified every time a Poi is deselected.

```typescript
onPoiDeselected(callback: (data: OnPoiDeselectedResult) => void)

// Example:
SitumWayfinding.onPoiDeselected((result: OnPoiDeselectedResult) => {
  console.log(`Deselected poi at ${result.buildingName}`);
});
```

**Returns:** `void`

---

### onFloorChange

Get notified when the floor displayed in the map is changed.

```typescript
onFloorChange(callback: (data: OnFloorChangeResult) => void)

// Example:
SitumWayfinding.onFloorChange((result: OnFloorChangeResult) => {
  console.log(`Floor changed from ${result.fromFloorName} to ${result.toFloorName}`);
});
```

**Returns:** `void`

---

### onNavigationRequested

Get notified when the navigation to a `Poi` or `Location` is requested.

```typescript
onNavigationRequested(callback: (data: OnNavigationResult) => void)

// Example:
SitumWayfinding.onNavigationRequested((result: OnNavigationResult) => {
  console.log(`Navigation requested to ${result.navigation.destination}.`);
});
```

**Returns:** `void`

---

### onNavigationFinished

Get notified when the navigation to a `Poi` or `Location` finishes. Query `NavigationResult.Navigation.status`
to check if the route was canceled or the user reached the destination.

```typescript
onNavigationFinished(callback: (data: OnNavigationResult) => void)

// Example:
SitumWayfinding.onNavigationFinished((result: OnNavigationResult) => {
  console.log(`Navigation to ${result.navigation.destination} finished with status ${result.navigation.status}.`);
});
```

**Returns:** `void`

---

### onNavigationError

Get notified when the floor displayed in the map is changed.

```typescript
onNavigationError(callback: (data: OnNavigationResult) => void)

// Example:
SitumWayfinding.onNavigationError((result: OnNavigationResult) => {
  console.log(`Navigation to ${result.navigation.destination} failed with error ${result.error}`);
});
```

**Returns:** `void`

---

### setCaptureTouchEvents

Use this method to disable the capture of touch events. This is useful to enable events on HTML elements defined outside the map div.

```typescript
setCaptureTouchEvents(options: CaptureTouchEvents)
```

**Returns:** `void`

---

### selectBuilding

Use this method to select a building by identifier.

```typescript
selectBuilding(building: Building)
```

**Returns:** `Promise<void>`

---

### selectPoi

Use this method to select a POI using both building and POI identifiers.

```typescript
selectPoi(poi: Poi)
```

**Returns:** `Promise<void>`

---

### navigateToPoi

Use this method to request navigation to the given POI.

```typescript
navigateToPoi(poi: Poi)
```

**Returns:** `Promise<void>`

---

### navigateToLocation

Use this method to request navigation to a given location, in a given floor.

```typescript
navigateToLocation(location: Point)
```

**Returns:** `Promise<void>`

---

### stopNavigation

Use this method to stop navigation (if it was started).

```typescript
stopNavigation()
```

**Returns:** `Promise<void>`

---

### stopPositioning

Use this method to stop positioning. This method also stops navigation if it was started.

```typescript
stopPositioning()
```

**Returns:** `Promise<void>`

---

### Interfaces

#### WayfindingSettings

| Prop                  | Type              |
| --------------------- | ----------------- |
| **`mapId`**           | `any`             |
| **`librarySettings`** | `LibrarySettings` |
| **`screenInfo`**      | `ScreenInfo`      |

#### LibrarySettings

| Prop                         | Type      | Default |
| ---------------------------- | --------- | ------- |
| **`user`**                   | `String`  |         |
| **`apiKey`**                 | `String`  |         |
| **`iosGoogleMapsApiKey`**    | `String`  |         |
| **`buildingId`**             | `String`  |         |
| **`dashboardUrl?`**          | `String`  |         |
| **`hasSearchView`**          | `Boolean` | true    |
| **`searchViewPlaceholder`**  | `String`  |         |
| **`useDashboardTheme?`**     | `Boolean` | true    |
| **`userPositionIcon?`**      | `String`  |         |
| **`userPositionArrowIcon?`** | `String`  |         |
| **`showPositioningButton?`** | `Boolean` | true    |
| **`captureTouchEvents?`**    | `Boolean` | true    |
| **`useRemoteConfig?`**       | `Boolean` | true    |
| **`showPoiNames?`**          | `Boolean` | true    |
| **`lockCameraToBuilding?`**  | `Boolean` | false   |
| **`enablePoiClustering?`**   | `Boolean` | true    |
| **`maxZoom?`**               | `Number`  | 21      |
| **`minZoom?`**               | `Number`  | 0       |
| **`initialZoom?`**           | `Number`  | 18      |

#### ScreenInfo

| Prop                   | Type     |
| ---------------------- | -------- |
| **`devicePixelRatio`** | `Number` |
| **`x`**                | `Number` |
| **`y`**                | `Number` |
| **`width`**            | `Number` |
| **`height`**           | `Number` |

#### OnPoiSelectedResult

| Prop               | Type     |
| ------------------ | -------- |
| **`buildingId`**   | `String` |
| **`buildingName`** | `String` |
| **`floorId`**      | `String` |
| **`floorName`**    | `String` |
| **`poiId`**        | `String` |
| **`poiName`**      | `String` |

#### OnPoiDeselectedResult

| Prop               | Type     |
| ------------------ | -------- |
| **`buildingId`**   | `String` |
| **`buildingName`** | `String` |

#### OnFloorChangeResult

| Prop                | Type     |
| ------------------- | -------- |
| **`buildingId`**    | `String` |
| **`buildingName`**  | `String` |
| **`fromFloorId`**   | `String` |
| **`fromFloorName`** | `String` |
| **`toFloorId`**     | `String` |
| **`toFloorName`**   | `String` |

#### OnNavigationResult

| Prop             | Type         |
| ---------------- | ------------ |
| **`navigation`** | `Navigation` |
| **`error?`**     | `Error`      |

#### Building

| Prop     | Type     |
| -------- | -------- |
| **`id`** | `String` |

#### Point

| Prop             | Type     |
| ---------------- | -------- |
| **`buildingId`** | `String` |
| **`floorId`**    | `String` |
| **`latitude`**   | `String` |
| **`longitude`**  | `String` |

#### Poi

| Prop             | Type     |
| ---------------- | -------- |
| **`id`**         | `String` |
| **`buildingId`** | `String` |

#### Navigation

| Prop              | Type          | Values                                                  |
| ----------------- | ------------- | ------------------------------------------------------- |
| **`status`**      | `String`      | `REQUESTED`, `ERROR`, `DESTINATION_REACHED`, `CANCELED` |
| **`destination`** | `Destination` |

#### Destination

| Prop              | Type     | Values            |
| ----------------- | -------- | ----------------- |
| **`category`**    | `String` | `POI`, `LOCATION` |
| **`identifier?`** | `String` |
| **`name?`**       | `String` |
| **`point`**       | `Point`  |

#### Error

| Prop          | Type     |
| ------------- | -------- |
| **`code`**    | `String` |
| **`message`** | `String` |

#### CaptureTouchEvents

| Prop                | Type      |
| ------------------- | --------- |
| **`captureEvents`** | `Boolean` |

#### SitumMapOverlays

| Prop           | Type  |
| -------------- | ----- |
| **`overlays`** | `any` |

#### SitumMapOverlay

| Prop         | Type     |
| ------------ | -------- |
| **`x`**      | `Number` |
| **`y`**      | `Number` |
| **`width`**  | `Number` |
| **`height`** | `Number` |
