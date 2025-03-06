```markdown
---
"title": "Using @capgo/nativegeocoder Package Tutorial",
"description": "Step-by-step guide on how to use the @capgo/nativegeocoder package for Capacitor plugins, including installation instructions and API usage.",
"created_at": "2022-02-22",
"published": true,
"slug": "capacitor-nativegeocoder.git"
---

# Using @capgo/nativegeocoder Package Tutorial

Capacitor plugin for native forward and reverse geocoding.

## Installation

```bash
npm install @capgo/nativegeocoder
npx cap sync
```

Then import it into your code:

```javascript
import { NativeGeocoder } from '@capgo/nativegeocoder';
```

## iOS

Apple requires privacy descriptions to be specified in `Info.plist` for location information:

- `NSLocationAlwaysUsageDescription` (`Privacy - Location Always Usage Description`)
- `NSLocationWhenInUseUsageDescription` (`Privacy - Location When In Use Usage Description`)

Read about [Configuring `Info.plist`](https://capacitorjs.com/docs/ios/configuration#configuring-infoplist) in the [iOS Guide](https://capacitorjs.com/docs/ios) for setting iOS permissions in Xcode.

## Android

This API requires the following permissions to be added to your `AndroidManifest.xml`:

```xml
<!-- Geolocation API -->
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-feature android:name="android.hardware.location.gps" />
```

## API

### reverseGeocode(...)

```typescript
reverseGeocode(options: reverseOptions) => any
```

Convert latitude and longitude to an address

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#reverseoptions">reverseOptions</a></code> |

**Returns:** <code>any</code>

**Since:** 0.0.1

### forwardGeocode(...)

```typescript
forwardGeocode(options: ForwardOptions) => any
```

Convert an address to latitude and longitude

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#forwardoptions">ForwardOptions</a></code> |

**Returns:** <code>any</code>

**Since:** 0.0.1

### Interfaces

#### reverseOptions
```
