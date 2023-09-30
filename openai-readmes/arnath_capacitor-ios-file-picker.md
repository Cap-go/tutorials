# capacitor-ios-file-picker

Allows picking one or more files/directories on iOS, including files from outside your app's sandbox. Under the covers, we use the iOS UIDocumentPickerViewController and security-scoped URLs to accomplish this.

## Install

```bash
npm install capacitor-ios-file-picker
npx cap sync
```

## API

<docgen-index>

- [`chooseDirectory()`](#choosedirectory)
- [`accessDirectory(...)`](#accessdirectory)
- [`releaseDirectory(...)`](#releasedirectory)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### chooseDirectory()

```typescript
chooseDirectory() => Promise<UrlBookmark>
```

**Returns:** <code>Promise&lt;<a href="#urlbookmark">UrlBookmark</a>&gt;</code>

---

### accessDirectory(...)

```typescript
accessDirectory(options: UrlBookmark) => Promise<SecureUrl>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#urlbookmark">UrlBookmark</a></code> |

**Returns:** <code>Promise&lt;<a href="#secureurl">SecureUrl</a>&gt;</code>

---

### releaseDirectory(...)

```typescript
releaseDirectory(options: UrlBookmark) => Promise<void>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#urlbookmark">UrlBookmark</a></code> |

---

### Interfaces

#### UrlBookmark

| Prop              | Type                |
| ----------------- | ------------------- |
| **`urlBookmark`** | <code>string</code> |

#### SecureUrl

| Prop      | Type                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |

</docgen-api>
