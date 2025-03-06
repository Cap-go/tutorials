# @whiteguru/capacitor-plugin-media-capture

Capacitor plugin to capture audio and video

## Install (Capacitor 6.x)

```bash
npm install @whiteguru/capacitor-plugin-media-capture
npx cap sync
```

## or for Capacitor 5.x

```bash
npm install @whiteguru/capacitor-plugin-media-capture@^5.0.1
npx cap sync
```

### or for Capacitor 4.x

```bash
npm install @whiteguru/capacitor-plugin-media-capture@^4.0.1
npx cap sync
```

## iOS

iOS not available jet

## Android

This API requires the following permissions be added to your `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

Read about [Setting Permissions](https://capacitorjs.com/docs/android/configuration#setting-permissions) in the [Android Guide](https://capacitorjs.com/docs/android) for more information on setting Android permissions.

### Variables

This plugin needs `compileSdkVersion = 31` variable (defined in your app's `variables.gradle` file)

## API

<docgen-index>

* [`captureVideo(...)`](#capturevideo)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### captureVideo(...)

```typescript
captureVideo(options: CaptureVideoOptions) => Promise<MediaFileResult>
```

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#capturevideooptions">CaptureVideoOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#mediafileresult">MediaFileResult</a>&gt;</code>

--------------------


### Interfaces


#### MediaFileResult

| Prop       | Type                                            |
| ---------- | ----------------------------------------------- |
| **`file`** | <code><a href="#mediafile">MediaFile</a></code> |


#### MediaFile

| Prop       | Type                | Description                                     |
| ---------- | ------------------- | ----------------------------------------------- |
| **`name`** | <code>string</code> | The name of the file, without path information. |
| **`path`** | <code>string</code> | The full path of the file, including the name.  |
| **`type`** | <code>string</code> | The file's mime type                            |
| **`size`** | <code>number</code> | The size of the file, in bytes.                 |


#### CaptureVideoOptions

| Prop            | Type                                        | Description                                                                                                                                                         |
| --------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`duration`**  | <code>number</code>                         | Maximum duration per video clip.                                                                                                                                    |
| **`quality`**   | <code>'uhd' \| 'fhd' \| 'hd' \| 'sd'</code> | Quality of the video. `uhd` for 4K ultra HD video size (2160p). `fhd` for full HD video size (1080p). `hd` for HD video size (720p). `sd` for SD video size (480p). |
| **`frameRate`** | <code>number</code>                         | Framerate (default 30)                                                                                                                                              |
| **`sizeLimit`** | <code>number</code>                         | Max file size in bytes.                                                                                                                                             |

</docgen-api>
