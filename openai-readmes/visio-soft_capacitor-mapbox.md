# capacitor-mapbox-navigation

This is a plugin for mapbox navigation tested with capacitor 3.

Android implementation has not been done yet, Only ios version has been developed.

## RoadMap

- Bridge event binding.
- Android Implementation

## Install

First you will need to generate token over [Mapbox](https://docs.mapbox.com/help/getting-started/access-tokens/).

**Configure your secret token.**

Your secret token enables you to download the SDK directly from Mapbox. To use your secret token, you will need to store it in a .netrc file in your home directory (not your project folder). This approach helps avoid accidentally exposing your secret token by keeping it out of your application's source code. Depending on your environment, you may have this file already, so check first before creating a new one.

The **.netrc** file is a plain text file that is used in certain development environments to store credentials used to access remote servers. The login should always be mapbox. It should not be your personal username used to create the secret token. To set up the credentials required to download the SDK, add the following entry to your .netrc file:

```bash
machine api.mapbox.com
login mapbox
password YOUR_SECRET_MAPBOX_ACCESS_TOKEN
```

To configure your public access token, open your project's **Info.plist** file and add a **MBXAccessToken** key whose value is your public access token.

```bash
npm install capacitor-mapbox-navigation
npx cap sync
```

## Permission

In order for the SDK to track the user’s location as they move along the route, set **NSLocationWhenInUseUsageDescription** to:

Shows your location on the map and helps improve the map.

Users expect the SDK to continue to track the user’s location and deliver audible instructions even while a different application is visible or the device is locked. Go to the Signing & Capabilities tab. Under the Background Modes section, enable “**Audio, AirPlay, and Picture in Picture**” and “**Location updates**”. (Alternatively, add the audio and location values to the **UIBackgroundModes** array in the Info tab.)

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`show(...)`](#show)
- [`history()`](#history)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### show(...)

```typescript
show(options: MapboxNavOptions) => Promise<void>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#mapboxnavoptions">MapboxNavOptions</a></code> |

---

### history()

```typescript
history() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

---

### Interfaces

#### MapboxNavOptions

| Prop          | Type                          |
| ------------- | ----------------------------- |
| **`routes`**  | <code>LocationOption[]</code> |
| **`mapType`** | <code>string</code>           |

#### LocationOption

| Prop            | Type                |
| --------------- | ------------------- |
| **`latitude`**  | <code>number</code> |
| **`longitude`** | <code>number</code> |

</docgen-api>
