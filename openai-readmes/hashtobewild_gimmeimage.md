# gimmeimage

A capacitor plugin that lets you get an unadultered image (in Base64) using the platform specific identifier. This is early-days in the dev and it problably does not work off-the-shelf.

## Install

```bash
npm install @swarmtechnology/gimmeimage
npx cap sync
```
or, if you use yarn...

```bash
yarn add @swarmtechnology/gimmeimage
npx cap sync
```

## API

<docgen-index>

* [`gimmeMediaItem(...)`](#gimmemediaitem)
* [`savePhoto(...)`](#savephoto)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### gimmeMediaItem(...)

```typescript
gimmeMediaItem(options?: GimmeOptions) => Promise<MediaAsset>
```

Get media item from camera roll referenced by the platform specific identifier.

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#gimmeoptions">GimmeOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#mediaasset">MediaAsset</a>&gt;</code>

--------------------


### savePhoto(...)

```typescript
savePhoto(options?: MediaSaveOptions) => Promise<PhotoResponse>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#mediasaveoptions">MediaSaveOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#photoresponse">PhotoResponse</a>&gt;</code>

--------------------


### Interfaces


#### MediaAsset

| Prop                  | Type                                                    | Description                                                             |
| --------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------- |
| **`identifier`**      | <code>string</code>                                     | Platform-specific identifier                                            |
| **`data`**            | <code>string</code>                                     | Data for a photo asset as a base64 encoded string (JPEG only supported) |
| **`creationDate`**    | <code>string</code>                                     | ISO date string for creation date of asset                              |
| **`fullWidth`**       | <code>number</code>                                     | Full width of original asset                                            |
| **`fullHeight`**      | <code>number</code>                                     | Full height of original asset                                           |
| **`thumbnailWidth`**  | <code>number</code>                                     | Width of thumbnail preview                                              |
| **`thumbnailHeight`** | <code>number</code>                                     | Height of thumbnail preview                                             |
| **`type`**            | <code>string</code>                                     | Type of asset                                                           |
| **`location`**        | <code><a href="#medialocation">MediaLocation</a></code> | Location metadata for the asset                                         |


#### MediaLocation

| Prop            | Type                | Description                              |
| --------------- | ------------------- | ---------------------------------------- |
| **`latitude`**  | <code>number</code> | GPS latitude image was taken at          |
| **`longitude`** | <code>number</code> | GPS longitude image was taken at         |
| **`heading`**   | <code>number</code> | Heading of user at time image was taken  |
| **`altitude`**  | <code>number</code> | Altitude of user at time image was taken |
| **`speed`**     | <code>number</code> | Speed of user at time image was taken    |


#### GimmeOptions

| Prop             | Type                | Description                  |
| ---------------- | ------------------- | ---------------------------- |
| **`identifier`** | <code>string</code> | Platform-specific identifier |


#### PhotoResponse

| Prop           | Type                |
| -------------- | ------------------- |
| **`filePath`** | <code>string</code> |


#### MediaSaveOptions

| Prop        | Type                |
| ----------- | ------------------- |
| **`path`**  | <code>string</code> |
| **`album`** | <code>string</code> |

</docgen-api>
