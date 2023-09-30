# capacitor-google-play-availability

A capacitor plugin which is a wrapper for google play availability api that allows to check for google play services availability and enabling it if it's available

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2023?style=flat-square" />
  <a href="https://www.npmjs.com/package/@cartona/capacitor-google-play-availability"><img src="https://img.shields.io/npm/l/@cartona/capacitor-google-play-availability?style=flat-square" /></a>
<br>
  <a href="https://www.npmjs.com/package/@cartona/capacitor-google-play-availability"><img src="https://img.shields.io/npm/dw/@cartona/capacitor-google-play-availability?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@cartona/capacitor-google-play-availability"><img src="https://img.shields.io/npm/v/@cartona/capacitor-google-play-availability?style=flat-square" /></a>
  <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors"><img src="https://img.shields.io/badge/all%20contributors-1-orange?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Install

```bash
npm install capacitor-google-play-availability
npx cap sync
```

## API

<docgen-index>

- [`isGooglePlayServicesAvailable()`](#isgoogleplayservicesavailable)
- [`makeGooglePlayServicesAvailable()`](#makegoogleplayservicesavailable)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isGooglePlayServicesAvailable()

```typescript
isGooglePlayServicesAvailable() => Promise<{ available: boolean; }>
```

Retrieve google play services availability status

**Returns:** <code>Promise&lt;{ available: boolean; }&gt;</code>

---

### makeGooglePlayServicesAvailable()

```typescript
makeGooglePlayServicesAvailable() => Promise<{ enabled: boolean; }>
```

Retrieve enabling google play services available request result

**Returns:** <code>Promise&lt;{ enabled: boolean; }&gt;</code>

---

</docgen-api>
