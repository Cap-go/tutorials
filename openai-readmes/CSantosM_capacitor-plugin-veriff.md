# capacitor-plugin-veriff

[![npm version](https://img.shields.io/npm/v/capacitor-plugin-veriff)](https://www.npmjs.com/package/capacitor-plugin-veriff)

Capacitor plugin exposing the [Veriff SDK](https://www.veriff.com/) - Smart and scalable identity verification

## Integration

### Android

Add the maven repository to the `android/build.gradle` application file:

```
allprojects {
    repositories {
		// make sure to add this before other repos
		maven { url "https://cdn.veriff.me/android/" } // <------------ ADD THIS LINE

        google()
        ...
    }
}

```

### iOS

add the required permissions in your Info.plist file

```
<key>NSCameraUsageDescription</key>
<string>Veriff plugin needs camera permissions</string>
<key>NSMicrophoneUsageDescription</key>
<string>Veriff plugin needs microphone permissions</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>Veriff plugin needs poto library access permissions</string>
<key>NFCReaderUsageDescription</key>
<string>Veriff plugin needs NFC permissions</string>
```

## Install

```bash
npm install capacitor-plugin-veriff
npx cap sync
```

The plugin exposes the VERIFF JavaScript namespace which cointains a Veriff end-to-end verification service.

To use this plugin:

In your ionic app:

1. Import the `VeriffPlugin` in your ionic app

```javascript
import { VeriffPlugin } from 'capacitor-plugin-veriff'
```

2. Create a [session verification](https://developers.veriff.com/#/sessions) with your Veriff API KEY.

3. Start the verification process:

We will need the verification sessionUrl to start the Veriff process

```javascript
const sessionUrl = session.verification.url
const configuration = {
  themeColor: '#0F3C32',
}

const options = { sessionUrl, configuration }
try {
  const result = await VeriffPlugin.start(options)
  // The promise returns the VeriffSDK verification result
  console.log('Result: ', result)
} catch (error) {
  console.error('Error starting Veriff ', error)
}
```

## Building

Within root plugin path:

```bash
$ npm run build
```

## Bugs

- [Bug Tracker](https://github.com/CSantosM/capacitor-plugin-veriff/issues)

## API

<docgen-index>

- [`start(...)`](#start)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### start(...)

```typescript
start(params: { sessionUrl: string; configuration: { themeColor: string; }; }) => Promise<{ message: string; status: string; }>
```

| Param        | Type                                                                         |
| ------------ | ---------------------------------------------------------------------------- |
| **`params`** | <code>{ sessionUrl: string; configuration: { themeColor: string; }; }</code> |

**Returns:** <code>Promise&lt;{ message: string; status: string; }&gt;</code>

---

</docgen-api>
