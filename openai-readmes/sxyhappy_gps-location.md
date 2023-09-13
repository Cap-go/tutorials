# gps-location

Get gps location for ionic capacitor

## Install

```bash
npm install gps-location
npx cap sync
```

### android

AndroidManifest.xml add these

```xml
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-feature android:name="android.hardware.location.gps" />
```

## API

<docgen-index>

- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### Interfaces

#### CurrentLocation

| Prop            | Type                |
| --------------- | ------------------- |
| **`latitude`**  | <code>number</code> |
| **`longitude`** | <code>number</code> |

</docgen-api>
