# @bazumax/capacitor-firebase-storage

Firebase Storage support for Android & iOS

## Install

Npm

```bash
npm install @bazumax/capacitor-firebase-storage
npx cap sync
```

Yarn

```bash
yarn add @bazumax/capacitor-firebase-storage
npx cap sync
```

## Example

Call `uploadFile` to open image picker and upload image to Storage

```typescript
import { FirebaseStorage } from '@bazumax/capacitor-firebase-storage'

const event = await FirebaseStorage.addListener('onUploadStateChanged', async ({ state }) => {
  const messages = {
    compressing: 'Compressing...',
    uploading: 'Uploading to Firebase...',
  }
  console.log('[FirebaseStorage] state: ' + messages[state])
})

try {
  const { url } = await FirebaseStorage.uploadFile({
    withImagePicker: true,
    title: 'Select avatar',
    storagePath: `/users/avatars/${state.uid}`,
    compress: true,
  })

  // Do anymore with public url
  // ....
} finally {
  // Unsubscribe event when all work done!
  event.remove()
}
```

## API

<docgen-index>

- [`uploadFile(...)`](#uploadfile)
- [`deleteFile(...)`](#deletefile)
- [`getDownloadUrl(...)`](#getdownloadurl)
- [`watchFileCreation(...)`](#watchfilecreation)
- [`addListener(string, ...)`](#addlistenerstring-)
- [`removeAllListeners()`](#removealllisteners)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### uploadFile(...)

```typescript
uploadFile(options: UploadFileOptions) => Promise<UploadFileResults>
```

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#uploadfileoptions">UploadFileOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#uploadfileresults">UploadFileResults</a>&gt;</code>

---

### deleteFile(...)

```typescript
deleteFile(options: { path: string; }) => Promise<{ message: string; }>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ path: string; }</code> |

**Returns:** <code>Promise&lt;{ message: string; }&gt;</code>

---

### getDownloadUrl(...)

```typescript
getDownloadUrl(options: { path: string; }) => Promise<{ url: string; }>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ path: string; }</code> |

**Returns:** <code>Promise&lt;{ url: string; }&gt;</code>

---

### watchFileCreation(...)

```typescript
watchFileCreation(options: { path: string; }) => Promise<{ url: string; }>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ path: string; }</code> |

**Returns:** <code>Promise&lt;{ url: string; }&gt;</code>

---

### addListener(string, ...)

```typescript
addListener(eventName: string, listenerFunc: ListenerCallback) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                          |
| ------------------ | ------------------------------------------------------------- |
| **`eventName`**    | <code>string</code>                                           |
| **`listenerFunc`** | <code><a href="#listenercallback">ListenerCallback</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

---

### Interfaces

#### UploadFileResults

| Prop      | Type                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |

#### UploadFileOptions

| Prop                  | Type                 |
| --------------------- | -------------------- |
| **`withImagePicker`** | <code>boolean</code> |
| **`title`**           | <code>string</code>  |
| **`storagePath`**     | <code>string</code>  |

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

### Type Aliases

#### ListenerCallback

<code>(err: any, ...args: any[]): void</code>

</docgen-api>
