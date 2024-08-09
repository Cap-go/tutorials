# capacitor-icloud-documents

Capacitor iCloud Documents

## Install

```bash
npm install capacitor-icloud-documents
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`readFile(...)`](#readfile)
* [`readFileB64(...)`](#readfileb64)
* [`removeFile(...)`](#removefile)
* [`writeFile(...)`](#writefile)
* [`mkdir(...)`](#mkdir)
* [`stat(...)`](#stat)
* [`fileExist(...)`](#fileexist)
* [`readdir(...)`](#readdir)
* [`initUbiquitousContainer()`](#initubiquitouscontainer)
* [`syncToCloud(...)`](#synctocloud)

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


### readFile(...)

```typescript
readFile(options: { filePath: string; }) => Promise<{ fileStream: string; }>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ filePath: string; }</code> |

**Returns:** <code>Promise&lt;{ fileStream: string; }&gt;</code>

--------------------


### readFileB64(...)

```typescript
readFileB64(options: { filePath: string; }) => Promise<{ fileStream: string; }>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ filePath: string; }</code> |

**Returns:** <code>Promise&lt;{ fileStream: string; }&gt;</code>

--------------------


### removeFile(...)

```typescript
removeFile(options: { filePath: string; }) => Promise<{ result: string; url: string; }>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ filePath: string; }</code> |

**Returns:** <code>Promise&lt;{ result: string; url: string; }&gt;</code>

--------------------


### writeFile(...)

```typescript
writeFile(options: { filePath: string; data: string; overwrite?: boolean; }) => Promise<{ result: string; url: string; }>
```

| Param         | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **`options`** | <code>{ filePath: string; data: string; overwrite?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ result: string; url: string; }&gt;</code>

--------------------


### mkdir(...)

```typescript
mkdir(options: { path: string; }) => Promise<{ result: string; url: string; }>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ path: string; }</code> |

**Returns:** <code>Promise&lt;{ result: string; url: string; }&gt;</code>

--------------------


### stat(...)

```typescript
stat(options: { path: string; }) => Promise<{ type: 'Directory' | 'File'; size: number; modificationDate: string; creationDate: string; }>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ path: string; }</code> |

**Returns:** <code>Promise&lt;{ type: 'Directory' | 'File'; size: number; modificationDate: string; creationDate: string; }&gt;</code>

--------------------


### fileExist(...)

```typescript
fileExist(options: { path: string; }) => Promise<{ result: boolean; }>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ path: string; }</code> |

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

--------------------


### readdir(...)

```typescript
readdir(options: { path: string; }) => Promise<{ result: string[]; }>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ path: string; }</code> |

**Returns:** <code>Promise&lt;{ result: string[]; }&gt;</code>

--------------------


### initUbiquitousContainer()

```typescript
initUbiquitousContainer() => Promise<void>
```

--------------------


### syncToCloud(...)

```typescript
syncToCloud(options: { filePath: string; destinationFolder: string; }) => Promise<{ url: string; }>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code>{ filePath: string; destinationFolder: string; }</code> |

**Returns:** <code>Promise&lt;{ url: string; }&gt;</code>

--------------------

</docgen-api>
