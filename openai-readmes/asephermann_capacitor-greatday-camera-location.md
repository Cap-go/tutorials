# capacitor-greatday-camera-location

The capacitor plugin for camera with location funtion

## Install

```bash
npm install capacitor-greatday-camera-location
npx cap sync
```

## API

<docgen-index>

- [`getLocationCamera(...)`](#getlocationcamera)
- [`getLocationCameraSwap(...)`](#getlocationcameraswap)
- [`getLocationRadiusCamera(...)`](#getlocationradiuscamera)
- [`getLocationRadiusCameraSwap(...)`](#getlocationradiuscameraswap)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getLocationCamera(...)

```typescript
getLocationCamera(options?: LocationCameraOptions | undefined) => Promise<any>
```

| Param         | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| **`options`** | <code><a href="#locationcameraoptions">LocationCameraOptions</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### getLocationCameraSwap(...)

```typescript
getLocationCameraSwap(options?: LocationCameraOptions | undefined) => Promise<any>
```

| Param         | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| **`options`** | <code><a href="#locationcameraoptions">LocationCameraOptions</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### getLocationRadiusCamera(...)

```typescript
getLocationRadiusCamera(options?: LocationRadiusCameraOptions | undefined) => Promise<any>
```

| Param         | Type                                                                                |
| ------------- | ----------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#locationradiuscameraoptions">LocationRadiusCameraOptions</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### getLocationRadiusCameraSwap(...)

```typescript
getLocationRadiusCameraSwap(options?: LocationRadiusCameraOptions | undefined) => Promise<any>
```

| Param         | Type                                                                                |
| ------------- | ----------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#locationradiuscameraoptions">LocationRadiusCameraOptions</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### Interfaces

#### LocationCameraOptions

| Prop            | Type                |
| --------------- | ------------------- |
| **`photoName`** | <code>string</code> |
| **`quality`**   | <code>string</code> |
| **`maxSize`**   | <code>string</code> |

#### LocationRadiusCameraOptions

| Prop              | Type                 |
| ----------------- | -------------------- |
| **`photoName`**   | <code>string</code>  |
| **`quality`**     | <code>string</code>  |
| **`maxSize`**     | <code>string</code>  |
| **`location`**    | <code>string</code>  |
| **`label1`**      | <code>string</code>  |
| **`label2`**      | <code>string</code>  |
| **`showAddress`** | <code>boolean</code> |

</docgen-api>
