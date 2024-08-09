# capacitor-zip4j

capacitor plugin for zip4j (android only)

## Install

```bash
npm install capacitor-zip4j
npx cap sync
```

## API

<docgen-index>

* [`extractAll(...)`](#extractall)
* [`extractFile(...)`](#extractfile)
* [`removeFiles(...)`](#removefiles)
* [`renameFile(...)`](#renamefile)
* [`mergeSplitFiles(...)`](#mergesplitfiles)
* [`getAllFileNames(...)`](#getallfilenames)
* [`isEncrypted(...)`](#isencrypted)
* [`isSplitArchive(...)`](#issplitarchive)
* [`setComment(...)`](#setcomment)
* [`getComment(...)`](#getcomment)
* [`containsFile(...)`](#containsfile)
* [`addFiles(...)`](#addfiles)
* [`addFolder(...)`](#addfolder)
* [`createSplitZipFile(...)`](#createsplitzipfile)
* [`addListener('extractAllProgressEvent' | 'renameFileProgressEvent' | 'removeFilesProgressEvent' | 'mergeSplitFilesProgressEvent' | 'setCommentProgressEvent' | 'addFilesProgressEvent' | 'addFolderProgressEvent' | 'createSplitZipFileProgressEvent', ...)`](#addlistenerextractallprogressevent--renamefileprogressevent--removefilesprogressevent--mergesplitfilesprogressevent--setcommentprogressevent--addfilesprogressevent--addfolderprogressevent--createsplitzipfileprogressevent)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### extractAll(...)

```typescript
extractAll(options: { zipFilePath: string; destDirectory: string; password?: string; }) => Promise<{ message: string; }>
```

| Param         | Type                                                                            |
| ------------- | ------------------------------------------------------------------------------- |
| **`options`** | <code>{ zipFilePath: string; destDirectory: string; password?: string; }</code> |

**Returns:** <code>Promise&lt;{ message: string; }&gt;</code>

--------------------


### extractFile(...)

```typescript
extractFile(options: { zipFilePath: string; destDirectory: string; fileName: string; newFileName: string; password?: string; }) => Promise<{ message: string; }>
```

| Param         | Type                                                                                                                   |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ zipFilePath: string; destDirectory: string; fileName: string; newFileName: string; password?: string; }</code> |

**Returns:** <code>Promise&lt;{ message: string; }&gt;</code>

--------------------


### removeFiles(...)

```typescript
removeFiles(options: { zipFilePath: string; fileNames: string[]; password?: string; }) => Promise<{ message: string; }>
```

| Param         | Type                                                                          |
| ------------- | ----------------------------------------------------------------------------- |
| **`options`** | <code>{ zipFilePath: string; fileNames: string[]; password?: string; }</code> |

**Returns:** <code>Promise&lt;{ message: string; }&gt;</code>

--------------------


### renameFile(...)

```typescript
renameFile(options: { zipFilePath: string; oldFile: string; newFile: string; password?: string; }) => Promise<{ message: string; }>
```

| Param         | Type                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------ |
| **`options`** | <code>{ zipFilePath: string; oldFile: string; newFile: string; password?: string; }</code> |

**Returns:** <code>Promise&lt;{ message: string; }&gt;</code>

--------------------


### mergeSplitFiles(...)

```typescript
mergeSplitFiles(options: { zipFilePath: string; newZipFilePath: string; password?: string; }) => Promise<{ message: string; }>
```

| Param         | Type                                                                             |
| ------------- | -------------------------------------------------------------------------------- |
| **`options`** | <code>{ zipFilePath: string; newZipFilePath: string; password?: string; }</code> |

**Returns:** <code>Promise&lt;{ message: string; }&gt;</code>

--------------------


### getAllFileNames(...)

```typescript
getAllFileNames(options: { zipFilePath: string; password?: string; }) => Promise<{ names: string[]; }>
```

| Param         | Type                                                     |
| ------------- | -------------------------------------------------------- |
| **`options`** | <code>{ zipFilePath: string; password?: string; }</code> |

**Returns:** <code>Promise&lt;{ names: string[]; }&gt;</code>

--------------------


### isEncrypted(...)

```typescript
isEncrypted(options: { zipFilePath: string; }) => Promise<{ isEncrypted: boolean; }>
```

| Param         | Type                                  |
| ------------- | ------------------------------------- |
| **`options`** | <code>{ zipFilePath: string; }</code> |

**Returns:** <code>Promise&lt;{ isEncrypted: boolean; }&gt;</code>

--------------------


### isSplitArchive(...)

```typescript
isSplitArchive(options: { zipFilePath: string; password?: string; }) => Promise<{ isSplitArchive: boolean; }>
```

| Param         | Type                                                     |
| ------------- | -------------------------------------------------------- |
| **`options`** | <code>{ zipFilePath: string; password?: string; }</code> |

**Returns:** <code>Promise&lt;{ isSplitArchive: boolean; }&gt;</code>

--------------------


### setComment(...)

```typescript
setComment(options: { zipFilePath: string; comment: string; password?: string; }) => Promise<{ message: string; }>
```

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code>{ zipFilePath: string; comment: string; password?: string; }</code> |

**Returns:** <code>Promise&lt;{ message: string; }&gt;</code>

--------------------


### getComment(...)

```typescript
getComment(options: { zipFilePath: string; password?: string; }) => Promise<{ comment: string; }>
```

| Param         | Type                                                     |
| ------------- | -------------------------------------------------------- |
| **`options`** | <code>{ zipFilePath: string; password?: string; }</code> |

**Returns:** <code>Promise&lt;{ comment: string; }&gt;</code>

--------------------


### containsFile(...)

```typescript
containsFile(options: { zipFilePath: string; fileName: string; password?: string; }) => Promise<{ contains: boolean; }>
```

| Param         | Type                                                                       |
| ------------- | -------------------------------------------------------------------------- |
| **`options`** | <code>{ zipFilePath: string; fileName: string; password?: string; }</code> |

**Returns:** <code>Promise&lt;{ contains: boolean; }&gt;</code>

--------------------


### addFiles(...)

```typescript
addFiles(options: { zipFilePath: string; files: string[]; password?: string; }) => Promise<{ message: string; }>
```

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code>{ zipFilePath: string; files: string[]; password?: string; }</code> |

**Returns:** <code>Promise&lt;{ message: string; }&gt;</code>

--------------------


### addFolder(...)

```typescript
addFolder(options: { zipFilePath: string; folder: string; password?: string; }) => Promise<{ message: string; }>
```

| Param         | Type                                                                     |
| ------------- | ------------------------------------------------------------------------ |
| **`options`** | <code>{ zipFilePath: string; folder: string; password?: string; }</code> |

**Returns:** <code>Promise&lt;{ message: string; }&gt;</code>

--------------------


### createSplitZipFile(...)

```typescript
createSplitZipFile(options: { zipFilePath: string; files: string[]; splitLength: number; password?: string; }) => Promise<{ message: string; }>
```

| Param         | Type                                                                                           |
| ------------- | ---------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ zipFilePath: string; files: string[]; splitLength: number; password?: string; }</code> |

**Returns:** <code>Promise&lt;{ message: string; }&gt;</code>

--------------------


### addListener('extractAllProgressEvent' | 'renameFileProgressEvent' | 'removeFilesProgressEvent' | 'mergeSplitFilesProgressEvent' | 'setCommentProgressEvent' | 'addFilesProgressEvent' | 'addFolderProgressEvent' | 'createSplitZipFileProgressEvent', ...)

```typescript
addListener(eventName: 'extractAllProgressEvent' | 'renameFileProgressEvent' | 'removeFilesProgressEvent' | 'renameFileProgressEvent' | 'mergeSplitFilesProgressEvent' | 'setCommentProgressEvent' | 'addFilesProgressEvent' | 'addFolderProgressEvent' | 'createSplitZipFileProgressEvent', listenerFunc: (obj: { progress: number; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                                                                                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`eventName`**    | <code>'extractAllProgressEvent' \| 'renameFileProgressEvent' \| 'removeFilesProgressEvent' \| 'mergeSplitFilesProgressEvent' \| 'setCommentProgressEvent' \| 'addFilesProgressEvent' \| 'addFolderProgressEvent' \| 'createSplitZipFileProgressEvent'</code> |
| **`listenerFunc`** | <code>(obj: { progress: number; }) =&gt; void</code>                                                                                                                                                                                                         |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
