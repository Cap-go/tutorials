# capacitor-gallery

Plugin to grab assets from device filesystems. Any contributions are welcome!

## Requirements

You need to include following permissions in Android Manifest:

```
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

You need to configure info.plist for ios build:

- Privacy - Photo Library Additions Usage Description
- Privacy - Photo Library Usage Description

## Install

```bash
npm install capacitor-gallery
npx cap sync
```

### Video Examples

<p align="center">
  <img src="https://github.com/fede4ka1245/CapacitorGallery/blob/main/ios_example.gif" height="520px" width="250px" />
  <img src="https://github.com/fede4ka1245/CapacitorGallery/blob/main/android_example.gif" height="520px" width="250px" />
</p>

### Code Example

```javascript
CapacitorGallery.getGalleryItems({
  quantity: 20,
  offset: 0,
}).then((result) => {
  console.log(result)
})
```

Instead of loading all assets you can use offset to split all assets by groups and load them as you need them. See an [example](https://github.com/fede4ka1245/CapacitorGallery/tree/main/example)

## API

<docgen-index>

- [`getGalleryItems(...)`](#getgalleryitems)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getGalleryItems(...)

```typescript
getGalleryItems(options: GetGalleryItemsOptions) => Promise<GetGalleryItemsResponse>
```

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code><a href="#getgalleryitemsoptions">GetGalleryItemsOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#getgalleryitemsresponse">GetGalleryItemsResponse</a>&gt;</code>

---

### Interfaces

#### GetGalleryItemsResponse

| Prop                  | Type                       |
| --------------------- | -------------------------- |
| **`count`**           | <code>number</code>        |
| **`results`**         | <code>GalleryItem[]</code> |
| **`nextOffset`**      | <code>number</code>        |
| **`nextMaxQuantity`** | <code>number</code>        |

#### GalleryItem

| Prop               | Type                |
| ------------------ | ------------------- |
| **`id`**           | <code>string</code> |
| **`base64Image`**  | <code>string</code> |
| **`creationDate`** | <code>string</code> |

#### GetGalleryItemsOptions

| Prop           | Type                |
| -------------- | ------------------- |
| **`quantity`** | <code>number</code> |
| **`offset`**   | <code>number</code> |

</docgen-api>
