<p align="center"><br><img src="https://avatars.githubusercontent.com/u/63735538" width="128" height="128" /></p>
<h3 align="center">Capacitor Device Locale</h3>
<p align="center">
  Capacitor plugin for getting native device locale
</p>

## Introduction

The Capacitor Device Locale package is a comprehensive solution that enables developers to effortlessly obtain the device locale information from both iOS and Android platforms. With its robust capabilities, this package simplifies the process of retrieving locale data. By integrating this package into your application, you can efficiently access and utilize device-specific locale information.

## Install

```bash
npm install capacitor-device-locale
npx cap sync
```

## API

<docgen-index>

- [`getDeviceLocale()`](#getdevicelocale)
- [`DeviceLocale`](#DeviceLocale)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

Device locale plugin.

### getDeviceLocale()

```typescript
getDeviceLocale() => Promise<DeviceLocale>
```

Get the device locale.

**Returns:** <code>Promise&lt;<a href="#devicelocale">DeviceLocale</a>&gt;</code>

---

### Interfaces

#### DeviceLocale

| Prop                 | Type                | Description                                                         |
| -------------------- | ------------------- | ------------------------------------------------------------------- |
| **`regionCode`**     | <code>string</code> | The region code of the device locale. Example: "US"                 |
| **`country`**        | <code>string</code> | The country of the device locale. Example: "United States"          |
| **`languageCode`**   | <code>string</code> | The language code of the device locale. Example: "en"               |
| **`language`**       | <code>string</code> | The language of the device locale. Example: "English"               |
| **`currencySymbol`** | <code>string</code> | The symbol used for the currency in the device locale. Example: "$" |
| **`currencyCode`**   | <code>string</code> | The currency code of the device locale. Example: "USD"              |
| **`currencyName`**   | <code>string</code> | The name of the currency in the device locale. Example: "US Dollar" |
| **`timezone`**       | <code>string</code> | The timezone of the device locale. Example: "America/New_York"      |

### Usage

```
import { getDeviceLocale, DeviceLocale } from 'capacitor-device-locale';

async function getDeviceLocaleInformation() {
  try {
    const deviceLocale: DeviceLocale = await getDeviceLocale();
    console.log('Device Locale:', deviceLocale);
    // Perform operations with the device locale
  } catch (error) {
    console.error('Error retrieving device locale:', error);
    // Handle error
  }
}

getDeviceLocaleInformation();
```

</docgen-api>
