# capacitor-chunk-upload

Chunk upload for iOS, Android, and web

## Install

```bash
npm install capacitor-chunk-upload
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`uploadFile(...)`](#uploadfile)
* [`addListener('uploadStarted', ...)`](#addlisteneruploadstarted)
* [`addListener('uploadProgressChanged', ...)`](#addlisteneruploadprogresschanged)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### uploadFile(...)

```typescript
uploadFile(options: UploadOptions) => Promise<void>
```

Upload a file via chunk

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#uploadoptions">UploadOptions</a></code> |

--------------------


### addListener('uploadStarted', ...)

```typescript
addListener(eventName: 'uploadStarted', listenerFunc: () => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listens for event: upload started

| Param              | Type                         |
| ------------------ | ---------------------------- |
| **`eventName`**    | <code>'uploadStarted'</code> |
| **`listenerFunc`** | <code>() =&gt; void</code>   |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('uploadProgressChanged', ...)

```typescript
addListener(eventName: 'uploadProgressChanged', listenerFunc: (progress: { percentage: number; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listens for event: upload progress changed

| Param              | Type                                                        |
| ------------------ | ----------------------------------------------------------- |
| **`eventName`**    | <code>'uploadProgressChanged'</code>                        |
| **`listenerFunc`** | <code>(progress: { percentage: number; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

Removes all listeners

--------------------


### Interfaces


#### UploadOptions

Upload option

| Prop          | Type                                    | Description                                                        |
| ------------- | --------------------------------------- | ------------------------------------------------------------------ |
| **`url`**     | <code>string</code>                     | The URL to upload to                                               |
| **`blob`**    | <code>Blob</code>                       | The file to upload. Only available on Web.                         |
| **`path`**    | <code>string</code>                     | The path of the file to upload. Only available on Android and iOS. |
| **`headers`** | <code>{ [key: string]: string; }</code> | Addition headers to send with the request                          |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
