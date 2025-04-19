# capacitor-cyrillic-ocr

OCR plugin with Cyrillic support (MLKit Vision on iOS and Tesseract4Android)

I was using amazing Capacitor plugin @pantrist/capacitor-plugin-ml-kit-text-recognition. It's based on Google's MLKit and it works great. But after a while realized, that it doesn't support any of the Cyrillic languages. So I decided to create new plugin based on Tesseract for Android and MLKit Vision for iOS.

Use this plugin only if you need support for languages and scripts that are not supported by the Google MLKit. I am not planning to maintain it much more than it's needed for my Capacitor app.

## Install

```bash
npm install capacitor-cyrillic-ocr
npx cap sync
```

## iOS

You don't have to do anything for iOS.

## Android

### Tesseract Trained Data files

For the Android, you will need to have the Tesseract language files in the Data directory of your app in a folder called `tessdata`. You can download them from [here](https://github.com/tesseract-ocr/tessdata/tree/4.0.0) and add them to the filesystem before using the plugin.

Since the files can be quite big, the best way is to download them and save them after the app is installed. On the first run, for example.

Another issue I had with the file sizes, especially English dictionary is that it’s too big to be handled by the official Capacitor Filesystem plugin. Android application crashes with Out of memory error. I can recommend to use [Capacitor Blob Writer](https://www.npmjs.com/package/capacitor-blob-writer) plugin which is working correctly for me.

```typescript
import write_blob from 'capacitor-blob-writer';

...

const file = await fetch(
  'https://raw.githubusercontent.com/tesseract-ocr/tessdata/master/eng.traineddata',
);
if (file) {
  await write_blob({
    path: '/tessdata/eng.traineddata',
    blob: file.blob(),
    directory: Directory.Data,
    fast_mode: true,
  });
} else {
  alert('Could not download OCR library file ' + filesToDownload[i]);
}
```

### Repository

To install properly Tessaract4Android libraries, it is needed to add the following repository to your `/android/app/build.gradle` file:

```java
repositories {
    ...
    maven { url 'https://jitpack.io' }
}
```

And... that should be enough. If you have any issues, please let me know.

## Usage

To retrieve the text from an image, you need to pass the image as base64 string to the plugin.

Let’s say, you have an image somewhere in the filesystem.
You can use Capacitor’s Filesystem plugin to read it as base64 string.
Then you should pass it to the plugin, along with the languages you want to recognize as an array of strings.
Languages are a three-letter ISO language codes, you can get from [here](https://en.wikipedia.org/wiki/ISO_639-2). For example, for Bulgarian it’s `bul`, for English it’s `eng`.

`orientation` is optional (default is 'up', and yet not sure it will be supported in Android, maybe will be removed in future)

```typescript
import { CapacitorOCR } from 'capacitor-cyrillic-ocr';
import { Filesystem } from '@capacitor/filesystem';

...

const fileData64 = await Filesystem.readFile({ path: 'path/to/file.jpg' });
const result = await CapacitorOCR.recognize({
  base64Image: fileData64.data,
  orientation: 'up',
  languages: ['bul', 'eng'],
});

console.log(result);
```

## API

<docgen-index>

- [`recognize(...)`](#recognize)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### recognize(...)

```typescript
recognize(options: CapacitorOCROptions) => Promise<CapacitorOCRResult[]>
```

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#capacitorocroptions">CapacitorOCROptions</a></code> |

**Returns:** <code>Promise&lt;CapacitorOCRResult[]&gt;</code>

---

### Interfaces

#### CapacitorOCRResult

| Prop             | Type                            |
| ---------------- | ------------------------------- |
| **`text`**       | <code>string</code>             |
| **`lines`**      | <code>CapacitorOCRLine[]</code> |
| **`confidence`** | <code>number</code>             |

#### CapacitorOCRLine

| Prop             | Type                                                          |
| ---------------- | ------------------------------------------------------------- |
| **`text`**       | <code>string</code>                                           |
| **`bbox`**       | <code><a href="#capacitorocrbbox">CapacitorOCRBBox</a></code> |
| **`words`**      | <code>CapacitorOCRWord[]</code>                               |
| **`confidence`** | <code>number</code>                                           |

#### CapacitorOCRBBox

| Prop     | Type                |
| -------- | ------------------- |
| **`x0`** | <code>number</code> |
| **`y0`** | <code>number</code> |
| **`x1`** | <code>number</code> |
| **`y1`** | <code>number</code> |

#### CapacitorOCRWord

| Prop             | Type                                                          |
| ---------------- | ------------------------------------------------------------- |
| **`text`**       | <code>string</code>                                           |
| **`bbox`**       | <code><a href="#capacitorocrbbox">CapacitorOCRBBox</a></code> |
| **`confidence`** | <code>number</code>                                           |

#### CapacitorOCROptions

| Prop              | Type                                             |
| ----------------- | ------------------------------------------------ |
| **`base64Image`** | <code>string</code>                              |
| **`orientation`** | <code>'up' \| 'down' \| 'left' \| 'right'</code> |
| **`languages`**   | <code>string[]</code>                            |

</docgen-api>
