<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="128" height="128" /></p>
<h3 align="center">Check Play Services</h3>
<p align="center"><strong><code>check-play-services</code></strong></p>
<p align="center">
  Capacitor plugin to check the availability of Google Play services.
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2020?style=flat-square" />
  <a href="https://github.com/capacitor-community/example/actions?query=workflow%3A%22CI%22"><img src="https://img.shields.io/github/workflow/status/capacitor-community/example/CI?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@capacitor-community/example"><img src="https://img.shields.io/npm/l/@capacitor-community/example?style=flat-square" /></a>
<br>
  <a href="https://www.npmjs.com/package/@capacitor-community/example"><img src="https://img.shields.io/npm/dw/@capacitor-community/example?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@capacitor-community/example"><img src="https://img.shields.io/npm/v/@capacitor-community/example?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors-"><img src="https://img.shields.io/badge/all%20contributors-0-orange?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
</p>

# Check Play Services

This plugin relies on the [`isGooglePlayServicesAvailable`](https://developers.google.com/android/reference/com/google/android/gms/common/GoogleApiAvailability.html#isGooglePlayServicesAvailable%28android.content.Context%29) method of the native [`GoogleApiAvailability`](https://developers.google.com/android/reference/com/google/android/gms/common/GoogleApiAvailability.html) helper class and can be used to check whether Google Play services are available on the device (e.g. before attempting Google native authentication).

## Maintainers

| Maintainer | GitHub                                  | Social                            |
| ---------- | --------------------------------------- | --------------------------------- |
| Tim        | [timmedia](https://github.com/timmedia) | [@t8tv](https://twitter.com/t8tv) |

## Installation

```bash
npm install check-play-services
npx cap sync
```

## Usage

```javascript
import { CheckPlayServices } from 'check-play-services'

const { status } = await CheckPlayServices.getAvailability()
const { available } = await CheckPlayServices.isAvailable()
```

## API

<docgen-index>

- [`getAvailability()`](#getavailability)
- [`isAvailable()`](#isavailable)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getAvailability()

```typescript
getAvailability() => Promise<{ status: AvailabilityStatus; }>
```

Checks whether Google Play services are available, returns the status code.

**Returns:** <code>Promise&lt;{ status: <a href="#availabilitystatus">AvailabilityStatus</a>; }&gt;</code>

**Since:** 1.0.0

---

### isAvailable()

```typescript
isAvailable() => Promise<{ available: boolean; }>
```

Check that Google Play services are enabled.

**Returns:** <code>Promise&lt;{ available: boolean; }&gt;</code>

**Since:** 1.0.0

---

### Enums

#### AvailabilityStatus

| Members                               | Value           |
| ------------------------------------- | --------------- |
| **`SUCCESS`**                         | <code>0</code>  |
| **`SERVICE_MISSING`**                 | <code>1</code>  |
| **`SERVICE_UPDATING`**                | <code>18</code> |
| **`SERVICE_VERSION_UPDATE_REQUIRED`** | <code>2</code>  |
| **`SERVICE_DISABLED`**                | <code>3</code>  |
| **`SERVICE_INVALID`**                 | <code>9</code>  |

</docgen-api>
