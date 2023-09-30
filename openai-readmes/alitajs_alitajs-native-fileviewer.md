# @alitajs/fileviewer

Documents and images viewer

## Install

```bash
npm install @alitajs/fileviewer
npx cap sync
```

### iOS

- in Xcode, open `Info.plist` and add a new Information Property like `Privacy - Photo Library Usage Description` and set a value to `We need to write photos`. This is required to have the `Share`of images and the `create Movie` working.

## API

<docgen-index>

- [`openDocument(...)`](#opendocument)
- [`previewImage(...)`](#previewimage)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### openDocument(...)

```typescript
openDocument(options: OpenDocumentOptions) => Promise<void>
```

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#opendocumentoptions">OpenDocumentOptions</a></code> |

---

### previewImage(...)

```typescript
previewImage(options: PreviewImageOptions) => Promise<PreviewImageResult>
```

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#previewimageoptions">PreviewImageOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#previewimageresult">PreviewImageResult</a>&gt;</code>

---

### Interfaces

#### OpenDocumentOptions

| Prop           | Type                | Description  |
| -------------- | ------------------- | ------------ |
| **`filePath`** | <code>string</code> | 文件本地路径 |

#### PreviewImageResult

| Prop             | Type                 | Description                                                 |
| ---------------- | -------------------- | ----------------------------------------------------------- |
| **`result`**     | <code>boolean</code> | result set to true when successful else false               |
| **`message`**    | <code>string</code>  | a returned message                                          |
| **`imageIndex`** | <code>number</code>  | Result <a href="#image">Image</a> index at closing returned |

#### PreviewImageOptions

| Prop            | Type                                                    | Description                                                |
| --------------- | ------------------------------------------------------- | ---------------------------------------------------------- |
| **`images`**    | <code>Image[]</code>                                    | List of image                                              |
| **`options`**   | <code><a href="#vieweroptions">ViewerOptions</a></code> | Viewer options (optional)                                  |
| **`mode`**      | <code>'gallery' \| 'slider' \| 'one'</code>             | Viewer mode ("gallery","slider","one") (default "slider")  |
| **`startFrom`** | <code>number</code>                                     | Viewer image index to start from for mode ("slider","one") |

#### Image

| Prop        | Type                | Description          |
| ----------- | ------------------- | -------------------- |
| **`url`**   | <code>string</code> | image url            |
| **`title`** | <code>string</code> | image title optional |

#### ViewerOptions

| Prop                     | Type                                                  | Description                                                                          |
| ------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **`share`**              | <code>boolean</code>                                  | display the share button (default true)                                              |
| **`title`**              | <code>boolean</code>                                  | display the image title if any (default true)                                        |
| **`transformer`**        | <code>string</code>                                   | transformer Android "zoom", "depth" or "none" (default "zoom")                       |
| **`spancount`**          | <code>number</code>                                   | Grid span count (default 3)                                                          |
| **`maxzoomscale`**       | <code>number</code>                                   | Max Zoom Scale (default 3)                                                           |
| **`compressionquality`** | <code>number</code>                                   | Compression Quality for Sharing <a href="#image">Image</a> range [0-1] (default 0.8) |
| **`divid`**              | <code>string</code>                                   | Div HTML Element Id (Web only) (default 'photoviewer-container')                     |
| **`movieoptions`**       | <code><a href="#movieoptions">MovieOptions</a></code> | Movie Options iOS only                                                               |

#### MovieOptions

| Prop            | Type                | Description                                                              |
| --------------- | ------------------- | ------------------------------------------------------------------------ |
| **`name`**      | <code>string</code> | Movie Name (default "myMovie") iOS only                                  |
| **`imagetime`** | <code>number</code> | <a href="#image">Image</a> Time Duration in Seconds (default 3) iOS only |
| **`mode`**      | <code>string</code> | Movie Mode "portrait" / "landscape" (default "landscape") iOS only       |
| **`ratio`**     | <code>string</code> | Movie Ratio "4/3" / "16/9" (default "16/9") iOS only                     |

</docgen-api>

## How to use this plugin in existing native project

### ios

in `Podfile`

```ruby
pod 'AlitajsBarcode'
```

### android

in `build.gradle`

```java
repositories {
  ...
  maven { url 'https://jitpack.io' }
}

dependencies {
  implementation 'com.github.alitajs:alitajs-native-barcode:Tag'
}
```
