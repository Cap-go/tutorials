# capacitor-greatday-camera

The capacitor plugin for camera function

## Install

```bash
npm install capacitor-greatday-camera
npx cap sync
```

## API

<docgen-index>

* [`getCamera(...)`](#getcamera)
* [`getCameraSwap(...)`](#getcameraswap)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getCamera(...)

```typescript
getCamera(options?: CameraPluginOptions | undefined) => Promise<{ result: string; }>
```

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#camerapluginoptions">CameraPluginOptions</a></code> |

**Returns:** <code>Promise&lt;{ result: string; }&gt;</code>

--------------------


### getCameraSwap(...)

```typescript
getCameraSwap(options?: CameraPluginOptions | undefined) => Promise<{ result: string; }>
```

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#camerapluginoptions">CameraPluginOptions</a></code> |

**Returns:** <code>Promise&lt;{ result: string; }&gt;</code>

--------------------


### Interfaces


#### CameraPluginOptions

| Prop                 | Type                 |
| -------------------- | -------------------- |
| **`photoName`**      | <code>string</code>  |
| **`quality`**        | <code>string</code>  |
| **`maxSize`**        | <code>string</code>  |
| **`isFacingBack`**   | <code>boolean</code> |
| **`disablePreview`** | <code>boolean</code> |
| **`showFaceArea`**   | <code>boolean</code> |

</docgen-api>
