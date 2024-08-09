# pdtworki-google-drive

Integration with Google Drive

## Install

```bash
npm install pdtworki-google-drive
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`storeAppData(...)`](#storeappdata)
* [`fetchAppData(...)`](#fetchappdata)
* [`fetchSyncData(...)`](#fetchsyncdata)
* [`hasAppDataOnDrive(...)`](#hasappdataondrive)

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


### storeAppData(...)

```typescript
storeAppData(options: { appData: string; authToken: string; appName: string; syncState: string; }) => Promise<{ status: string; }>
```

| Param         | Type                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------- |
| **`options`** | <code>{ appData: string; authToken: string; appName: string; syncState: string; }</code> |

**Returns:** <code>Promise&lt;{ status: string; }&gt;</code>

--------------------


### fetchAppData(...)

```typescript
fetchAppData(options: { authToken: string; appName: string; }) => Promise<{ appData: string; status: string; }>
```

| Param         | Type                                                 |
| ------------- | ---------------------------------------------------- |
| **`options`** | <code>{ authToken: string; appName: string; }</code> |

**Returns:** <code>Promise&lt;{ appData: string; status: string; }&gt;</code>

--------------------


### fetchSyncData(...)

```typescript
fetchSyncData(options: { authToken: string; appName: string; }) => Promise<{ syncState: string; status: string; newAccessToken: string; }>
```

| Param         | Type                                                 |
| ------------- | ---------------------------------------------------- |
| **`options`** | <code>{ authToken: string; appName: string; }</code> |

**Returns:** <code>Promise&lt;{ syncState: string; status: string; newAccessToken: string; }&gt;</code>

--------------------


### hasAppDataOnDrive(...)

```typescript
hasAppDataOnDrive(options: { authToken: string; }) => Promise<{ result: boolean; status: string; }>
```

| Param         | Type                                |
| ------------- | ----------------------------------- |
| **`options`** | <code>{ authToken: string; }</code> |

**Returns:** <code>Promise&lt;{ result: boolean; status: string; }&gt;</code>

--------------------

</docgen-api>
