# @enertrag/zip

Capacitor archive (zip) share plugin

## Install

```bash
npm install @enertrag/zip
npx cap sync
```

## API

<docgen-index>

- [`isAvailable()`](#isavailable)
- [`shareArchive(...)`](#sharearchive)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isAvailable()

```typescript
isAvailable() => Promise<Available>
```

Checks if the functionality is available on the current platform.

**Returns:** <code>Promise&lt;<a href="#available">Available</a>&gt;</code>

---

### shareArchive(...)

```typescript
shareArchive(options: ZipOptions) => Promise<ZipResult>
```

Creates a zip archive including the content of the specified directory.
The created file will be saved/shared via the os's mechanisms.

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#zipoptions">ZipOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#zipresult">ZipResult</a>&gt;</code>

---

### Interfaces

#### Available

| Prop            | Type                 | Description                        |
| --------------- | -------------------- | ---------------------------------- |
| **`available`** | <code>boolean</code> | true if available, false otherwise |

#### ZipResult

| Prop          | Type                 | Description                                              |
| ------------- | -------------------- | -------------------------------------------------------- |
| **`success`** | <code>boolean</code> | true if the file was successfully saved, false otherwise |

#### ZipOptions

| Prop               | Type                | Description                       |
| ------------------ | ------------------- | --------------------------------- |
| **`sourceDir`**    | <code>string</code> | The uri of the source directory.  |
| **`destFilename`** | <code>string</code> | The name of the destination file. |

</docgen-api>

## License

MIT

Copyright © 2022 ENERTRAG SE
enertrag.com
