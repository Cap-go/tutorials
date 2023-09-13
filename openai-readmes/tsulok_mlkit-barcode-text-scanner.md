# mlkit-text-barcode-scanner

Allow capacitor web apps to use Google's MLKit Text recognizer and Barcode scanner

This plugin can scan the camera image for both **Barcodes** and **Texts**. It's up to you whether to enable the feature or not.

**Important note**

- This plugin does not stores previous hits/results. If multiple frames have the same content then the data will be provided to you.

## Install

```bash
npm install mlkit-text-barcode-scanner
npx cap sync
```

### Setup for Android

1. Register the plugin in your main activity

```(kotlin)
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    registerPlugin(MLKitTextRecognizerPlugin.class);
}
```

2. You can build your project

### Setup for iOS

1. After sync open your .xcworkspace file
2. Open Pods target
3. Select MLKitTextRecognition-LatinOCRResources Target
4. Select your development team
5. You can build your project

![iOS Setup](/images/ios_setup.png)

(Until further fix you need to select your team for this target after each sync)

## Example

[See the example instructions here](/example/README.md)

### Text recognition

#### Source:

![Source image](/example/images/sample_text.png)

#### Android result:

![Android text result](/example/images/android_text_result.png)

#### iOS result:

![iOS text result](/example/images/ios_text_result.png)

### Barcode recognition

#### Source:

![Source image](/example/images/sample_barcode.png)

#### Android result:

![Android barcode result](/example/images/android_barcode_result.png)

#### iOS result:

![iOS barcode result](/example/images/ios_barcode_result.png)

## API

<docgen-index>

- [`startRecognizer(...)`](#startrecognizer)
- [`killPlugin(...)`](#killplugin)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startRecognizer(...)

```typescript
startRecognizer(config: RecognizerConfig, callback: FoundRecognizerCallback) => Promise<CallbackID>
```

Starts the plugin with the passed configuration.
Handles the permission checks internally.

The recognizer is not a one time event, it keeps firing the data to you until the user leaves the screen
or you cancel the flow.

If permission is denied, then a custom exception will be thrown from the client

| Param          | Type                                                                        |
| -------------- | --------------------------------------------------------------------------- |
| **`config`**   | <code><a href="#recognizerconfig">RecognizerConfig</a></code>               |
| **`callback`** | <code><a href="#foundrecognizercallback">FoundRecognizerCallback</a></code> |

**Returns:** <code>Promise&lt;string&gt;</code>

---

### killPlugin(...)

```typescript
killPlugin(callbackId: string) => Promise<void>
```

| Param            | Type                |
| ---------------- | ------------------- |
| **`callbackId`** | <code>string</code> |

---

### Interfaces

#### RecognizerConfig

| Prop                   | Type                             | Description                                                                         |
| ---------------------- | -------------------------------- | ----------------------------------------------------------------------------------- |
| **`isLoggingEnabled`** | <code>boolean</code>             | Whether to show plugin logs. If non specified or disabled only errors will be shown |
| **`barcodeScanner`**   | <code>{ allow: boolean; }</code> | Barcode scanner configuration                                                       |
| **`textRecognizer`**   | <code>{ allow: boolean; }</code> | Text recognizer configuration                                                       |

#### FoundRecognizerCallback

| Prop          | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| **`barcode`** | <code><a href="#barcoderecognizerdata">BarCodeRecognizerData</a></code> |
| **`text`**    | <code><a href="#textrecognizerdata">TextRecognizerData</a></code>       |

#### BarCodeRecognizerData

| Prop          | Type                |
| ------------- | ------------------- |
| **`content`** | <code>string</code> |

#### TextRecognizerData

| Prop                       | Type                | Description                                                              |
| -------------------------- | ------------------- | ------------------------------------------------------------------------ |
| **`content`**              | <code>string</code> |                                                                          |
| **`confidencePercentage`** | <code>number</code> | Only Android versions could tell the confidence percentage of the result |

### Type Aliases

#### CallbackID

<code>string</code>

</docgen-api>
