# capacitor-stash-media

Some helper functions for the user to stash (copy, save, etc) media from the app

## Install

```bash
npm install capacitor-stash-media
npx cap sync
```

## API

<docgen-index>

- [`savePhoto(...)`](#savephoto)
- [`copyPhotoToClipboard(...)`](#copyphototoclipboard)
- [`shareImage(...)`](#shareimage)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### savePhoto(...)

```typescript
savePhoto(options: { url: string; }) => Promise<void>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ url: string; }</code> |

---

### copyPhotoToClipboard(...)

```typescript
copyPhotoToClipboard(options: { url: string; }) => Promise<void>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ url: string; }</code> |

---

### shareImage(...)

```typescript
shareImage(options: { url: string; title: string; }) => Promise<void>
```

| Param         | Type                                         |
| ------------- | -------------------------------------------- |
| **`options`** | <code>{ url: string; title: string; }</code> |

---

</docgen-api>
