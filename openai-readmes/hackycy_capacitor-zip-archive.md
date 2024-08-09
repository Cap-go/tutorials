# capacitor-zip-archive

<p>
  <a href="https://www.npmjs.com/package/capacitor-zip-archive">
    <img src="https://img.shields.io/npm/v/capacitor-zip-archive.svg?sanitize=true" alt="Version" />
  </a>
</p>

📱 Zip archive utility for capacitor

## Install

```bash
npm install capacitor-zip-archive
npx cap sync
```

## API

<docgen-index>

* [`zip(...)`](#zip)
* [`unzip(...)`](#unzip)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### zip(...)

```typescript
zip(options: ZipFileOptions) => Promise<void>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#zipfileoptions">ZipFileOptions</a></code> |

--------------------


### unzip(...)

```typescript
unzip(options: UnzipOptions) => Promise<void>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#unzipoptions">UnzipOptions</a></code> |

--------------------


### Interfaces


#### ZipFileOptions

| Prop               | Type                  | Description               |
| ------------------ | --------------------- | ------------------------- |
| **`srcFilePaths`** | <code>string[]</code> | The paths of source files |
| **`zipFilePath`**  | <code>string</code>   | The path of ZIP file      |


#### UnzipOptions

| Prop              | Type                | Description                       |
| ----------------- | ------------------- | --------------------------------- |
| **`zipFilePath`** | <code>string</code> | The path of ZIP file              |
| **`destDirPath`** | <code>string</code> | The path of destination directory |

</docgen-api>

# Thanks

- [ZipArchive](https://github.com/ZipArchive/ZipArchive)
- [AndroidUtilCode](https://github.com/Blankj/AndroidUtilCode)