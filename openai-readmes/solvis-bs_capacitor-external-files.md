# capacitor-external-files

Plugin to work with external files like on an external sd-card connected over USB-OTG.

## Install

```bash
npm install capacitor-external-files
npx cap sync
```

## API

<docgen-index>

- [`dirChooser()`](#dirchooser)
- [`readDir(...)`](#readdir)
- [`getFileEntry(...)`](#getfileentry)
- [`readFile(...)`](#readfile)
- [`delete(...)`](#delete)
- [`createDir(...)`](#createdir)
- [`writeFile(...)`](#writefile)
- [`copyAssetDir(...)`](#copyassetdir)
- [Interfaces](#interfaces)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### dirChooser()

```typescript
dirChooser() => any
```

**Returns:** <code>any</code>

---

### readDir(...)

```typescript
readDir(options: { root: string; path: string; }) => any
```

| Param         | Type                                         |
| ------------- | -------------------------------------------- |
| **`options`** | <code>{ root: string; path: string; }</code> |

**Returns:** <code>any</code>

---

### getFileEntry(...)

```typescript
getFileEntry(options: { root: string; path: string; }) => any
```

| Param         | Type                                         |
| ------------- | -------------------------------------------- |
| **`options`** | <code>{ root: string; path: string; }</code> |

**Returns:** <code>any</code>

---

### readFile(...)

```typescript
readFile(options: { root: string; path: string; encoding?: Encoding; }) => any
```

| Param         | Type                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------- |
| **`options`** | <code>{ root: string; path: string; encoding?: <a href="#encoding">Encoding</a>; }</code> |

**Returns:** <code>any</code>

---

### delete(...)

```typescript
delete(options: { root: string; path: string; }) => any
```

| Param         | Type                                         |
| ------------- | -------------------------------------------- |
| **`options`** | <code>{ root: string; path: string; }</code> |

**Returns:** <code>any</code>

---

### createDir(...)

```typescript
createDir(options: { root: string; path: string; }) => any
```

| Param         | Type                                         |
| ------------- | -------------------------------------------- |
| **`options`** | <code>{ root: string; path: string; }</code> |

**Returns:** <code>any</code>

---

### writeFile(...)

```typescript
writeFile(options: { root: string; path: string; data: string; encoding?: Encoding; }) => any
```

| Param         | Type                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ root: string; path: string; data: string; encoding?: <a href="#encoding">Encoding</a>; }</code> |

**Returns:** <code>any</code>

---

### copyAssetDir(...)

```typescript
copyAssetDir(options: { assetPath: string; root: string; path: string; }) => any
```

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code>{ assetPath: string; root: string; path: string; }</code> |

**Returns:** <code>any</code>

---

### Interfaces

#### ExtFileEntry

| Prop                   | Type                               |
| ---------------------- | ---------------------------------- |
| **`path`**             | <code>string</code>                |
| **`name`**             | <code>string</code>                |
| **`kind`**             | <code>"file" \| "directory"</code> |
| **`modificationDate`** | <code>number</code>                |

### Enums

#### Encoding

| Members          | Value                    |
| ---------------- | ------------------------ |
| **`UTF8`**       | <code>'utf8'</code>      |
| **`ASCII`**      | <code>'ascii'</code>     |
| **`UTF16`**      | <code>'utf16'</code>     |
| **`ISO_8859_1`** | <code>'iso8859-1'</code> |

</docgen-api>
