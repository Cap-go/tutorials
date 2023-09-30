# @studiokloek/capacitor-plugin-mediacapture

This capacitor plugin allows iOS applications to capture media from the camera and microphone.

## Install

```bash
npm install @studiokloek/capacitor-plugin-mediacapture
npx cap sync
```

## API

<docgen-index>

- [`checkPermissions()`](#checkpermissions)
- [`requestPermissions(...)`](#requestpermissions)
- [`startCameraSession(...)`](#startcamerasession)
- [`stopCameraSession()`](#stopcamerasession)
- [`showCameraPreview(...)`](#showcamerapreview)
- [`hideCameraPreview(...)`](#hidecamerapreview)
- [`startCameraRecording(...)`](#startcamerarecording)
- [`stopCameraRecording()`](#stopcamerarecording)
- [`grabCameraImage(...)`](#grabcameraimage)
- [`startMicrophoneSession(...)`](#startmicrophonesession)
- [`stopMicrophoneSession()`](#stopmicrophonesession)
- [`startMicrophoneRecording(...)`](#startmicrophonerecording)
- [`stopMicrophoneRecording()`](#stopmicrophonerecording)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

---

### requestPermissions(...)

```typescript
requestPermissions(permissions?: MediaCapturePluginPermissions | undefined) => Promise<PermissionStatus>
```

| Param             | Type                                                                                    |
| ----------------- | --------------------------------------------------------------------------------------- |
| **`permissions`** | <code><a href="#mediacapturepluginpermissions">MediaCapturePluginPermissions</a></code> |

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

---

### startCameraSession(...)

```typescript
startCameraSession(options: CameraSessionOptions) => Promise<boolean>
```

| Param         | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **`options`** | <code><a href="#camerasessionoptions">CameraSessionOptions</a></code> |

**Returns:** <code>Promise&lt;boolean&gt;</code>

---

### stopCameraSession()

```typescript
stopCameraSession() => Promise<boolean>
```

**Returns:** <code>Promise&lt;boolean&gt;</code>

---

### showCameraPreview(...)

```typescript
showCameraPreview(options: CameraPreviewShowOptions) => Promise<boolean>
```

| Param         | Type                                                                          |
| ------------- | ----------------------------------------------------------------------------- |
| **`options`** | <code><a href="#camerapreviewshowoptions">CameraPreviewShowOptions</a></code> |

**Returns:** <code>Promise&lt;boolean&gt;</code>

---

### hideCameraPreview(...)

```typescript
hideCameraPreview(options: CameraPreviewHideOptions) => Promise<boolean>
```

| Param         | Type                                                                          |
| ------------- | ----------------------------------------------------------------------------- |
| **`options`** | <code><a href="#camerapreviewhideoptions">CameraPreviewHideOptions</a></code> |

**Returns:** <code>Promise&lt;boolean&gt;</code>

---

### startCameraRecording(...)

```typescript
startCameraRecording(options: StartCameraRecordingOptions) => Promise<boolean>
```

| Param         | Type                                                                                |
| ------------- | ----------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#startcamerarecordingoptions">StartCameraRecordingOptions</a></code> |

**Returns:** <code>Promise&lt;boolean&gt;</code>

---

### stopCameraRecording()

```typescript
stopCameraRecording() => Promise<undefined | CameraRecordingResult>
```

**Returns:** <code>Promise&lt;<a href="#camerarecordingresult">CameraRecordingResult</a>&gt;</code>

---

### grabCameraImage(...)

```typescript
grabCameraImage(options: GrabCameraImageOptions) => Promise<undefined | GrabCameraImageResult>
```

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code><a href="#grabcameraimageoptions">GrabCameraImageOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#grabcameraimageresult">GrabCameraImageResult</a>&gt;</code>

---

### startMicrophoneSession(...)

```typescript
startMicrophoneSession(options: MicrophoneSessionOptions) => Promise<boolean>
```

| Param         | Type                                                                          |
| ------------- | ----------------------------------------------------------------------------- |
| **`options`** | <code><a href="#microphonesessionoptions">MicrophoneSessionOptions</a></code> |

**Returns:** <code>Promise&lt;boolean&gt;</code>

---

### stopMicrophoneSession()

```typescript
stopMicrophoneSession() => Promise<boolean>
```

**Returns:** <code>Promise&lt;boolean&gt;</code>

---

### startMicrophoneRecording(...)

```typescript
startMicrophoneRecording(options: StartMicrophoneRecordingOptions) => Promise<boolean>
```

| Param         | Type                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#startmicrophonerecordingoptions">StartMicrophoneRecordingOptions</a></code> |

**Returns:** <code>Promise&lt;boolean&gt;</code>

---

### stopMicrophoneRecording()

```typescript
stopMicrophoneRecording() => Promise<undefined | MicrophoneRecordingResult>
```

**Returns:** <code>Promise&lt;<a href="#microphonerecordingresult">MicrophoneRecordingResult</a>&gt;</code>

---

### Interfaces

#### PermissionStatus

| Prop             | Type                                                                                |
| ---------------- | ----------------------------------------------------------------------------------- |
| **`camera`**     | <code><a href="#mediacapturepermissionstate">MediaCapturePermissionState</a></code> |
| **`photos`**     | <code><a href="#mediacapturepermissionstate">MediaCapturePermissionState</a></code> |
| **`microphone`** | <code><a href="#mediacapturepermissionstate">MediaCapturePermissionState</a></code> |

#### MediaCapturePluginPermissions

| Prop              | Type                                      |
| ----------------- | ----------------------------------------- |
| **`permissions`** | <code>MediaCapturePermissionType[]</code> |

#### CameraSessionOptions

| Prop                  | Type                 |
| --------------------- | -------------------- |
| **`video`**           | <code>boolean</code> |
| **`audio`**           | <code>boolean</code> |
| **`preset`**          | <code>string</code>  |
| **`position`**        | <code>string</code>  |
| **`fullFramePhotos`** | <code>boolean</code> |

#### CameraPreviewShowOptions

| Prop                       | Type                                                                  |
| -------------------------- | --------------------------------------------------------------------- |
| **`frame`**                | <code>{ x: number; y: number; width: number; height: number; }</code> |
| **`useDeviceOrientation`** | <code>boolean</code>                                                  |
| **`gravity`**              | <code>string</code>                                                   |
| **`fadeDuration`**         | <code>number</code>                                                   |

#### CameraPreviewHideOptions

| Prop               | Type                |
| ------------------ | ------------------- |
| **`fadeDuration`** | <code>number</code> |

#### StartCameraRecordingOptions

| Prop                       | Type                 |
| -------------------------- | -------------------- |
| **`autoSave`**             | <code>boolean</code> |
| **`useDeviceOrientation`** | <code>boolean</code> |
| **`duration`**             | <code>number</code>  |

#### CameraRecordingResult

| Prop      | Type                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |

#### GrabCameraImageResult

| Prop      | Type                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |

#### GrabCameraImageOptions

| Prop                  | Type                 |
| --------------------- | -------------------- |
| **`autoSave`**        | <code>boolean</code> |
| **`autoOrientation`** | <code>boolean</code> |
| **`autoAdjust`**      | <code>boolean</code> |

#### MicrophoneSessionOptions

| Prop                | Type                 |
| ------------------- | -------------------- |
| **`sampleRate`**    | <code>number</code>  |
| **`reuseRecorder`** | <code>boolean</code> |
| **`numChannels`**   | <code>number</code>  |

#### StartMicrophoneRecordingOptions

| Prop           | Type                |
| -------------- | ------------------- |
| **`duration`** | <code>number</code> |

#### MicrophoneRecordingResult

| Prop      | Type                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |

### Type Aliases

#### MediaCapturePermissionState

<code><a href="#permissionstate">PermissionState</a> | 'limited'</code>

#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>

#### MediaCapturePermissionType

<code>'camera' | 'photos' | 'microphone'</code>

</docgen-api>
