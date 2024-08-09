# capacitor-pdf-helper

PDF Helper

## Install

```bash
npm install capacitor-pdf-helper
npx cap sync
```

## API

<docgen-index>

* [`open(...)`](#open)
* [`close()`](#close)
* [`readPDFAnnotations(...)`](#readpdfannotations)
* [`getImageListFromResources()`](#getimagelistfromresources)
* [`getImageFromAnnotation(...)`](#getimagefromannotation)
* [`getImageFromResources(...)`](#getimagefromresources)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### open(...)

```typescript
open(options: IOpenOptions) => Promise<IPHDocumentInfo>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#iopenoptions">IOpenOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#iphdocumentinfo">IPHDocumentInfo</a>&gt;</code>

--------------------


### close()

```typescript
close() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### readPDFAnnotations(...)

```typescript
readPDFAnnotations(options: IOpenOptions) => Promise<IPHAnnotation[]>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#iopenoptions">IOpenOptions</a></code> |

**Returns:** <code>Promise&lt;IPHAnnotation[]&gt;</code>

--------------------


### getImageListFromResources()

```typescript
getImageListFromResources() => Promise<IPHResourceImage[]>
```

**Returns:** <code>Promise&lt;IPHResourceImage[]&gt;</code>

--------------------


### getImageFromAnnotation(...)

```typescript
getImageFromAnnotation(options: optionsImagesFromAnnotation) => Promise<IPHImageMetadata>
```

| Param         | Type                                                                                |
| ------------- | ----------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#optionsimagesfromannotation">optionsImagesFromAnnotation</a></code> |

**Returns:** <code>Promise&lt;<a href="#iphimagemetadata">IPHImageMetadata</a>&gt;</code>

--------------------


### getImageFromResources(...)

```typescript
getImageFromResources(pidx: number, keyname: string) => Promise<IPHImageMetadata>
```

| Param         | Type                |
| ------------- | ------------------- |
| **`pidx`**    | <code>number</code> |
| **`keyname`** | <code>string</code> |

**Returns:** <code>Promise&lt;<a href="#iphimagemetadata">IPHImageMetadata</a>&gt;</code>

--------------------


### Interfaces


#### IPHDocumentInfo

| Prop            | Type                |
| --------------- | ------------------- |
| **`pdfId`**     | <code>string</code> |
| **`pageCount`** | <code>number</code> |


#### IOpenOptions

| Prop      | Type                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |


#### IPHAnnotation

| Prop                  | Type                 |
| --------------------- | -------------------- |
| **`docFgId`**         | <code>string</code>  |
| **`fgId`**            | <code>string</code>  |
| **`name`**            | <code>string</code>  |
| **`type`**            | <code>string</code>  |
| **`contents`**        | <code>string</code>  |
| **`pageIndex`**       | <code>number</code>  |
| **`annotationIndex`** | <code>number</code>  |
| **`creationDate`**    | <code>string</code>  |
| **`modifyDate`**      | <code>string</code>  |
| **`hasImage`**        | <code>boolean</code> |
| **`updated`**         | <code>number</code>  |


#### IPHResourceImage

| Prop            | Type                |
| --------------- | ------------------- |
| **`pageIndex`** | <code>number</code> |
| **`keyName`**   | <code>string</code> |
| **`metadata`**  | <code>any</code>    |


#### IPHImageMetadata

| Prop           | Type                |
| -------------- | ------------------- |
| **`imageUri`** | <code>string</code> |
| **`mimeType`** | <code>string</code> |


#### optionsImagesFromAnnotation

| Prop       | Type                |
| ---------- | ------------------- |
| **`pidx`** | <code>number</code> |
| **`aidx`** | <code>number</code> |

</docgen-api>
