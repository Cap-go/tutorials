# imagemetadata

Capacitor plugin to get image metadata, specifically creation date from images stored on phone.

## Install

```bash
npm install imagemetadata
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`getImagesBetweenDates(...)`](#getimagesbetweendates)
* [`getMetadata(...)`](#getmetadata)
* [`logCrashlyticsMessage(...)`](#logcrashlyticsmessage)

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


### getImagesBetweenDates(...)

```typescript
getImagesBetweenDates(options: { validFrom: number; validTo: number; }) => Promise<{ imagePaths: string[]; }>
```

| Param         | Type                                                 |
| ------------- | ---------------------------------------------------- |
| **`options`** | <code>{ validFrom: number; validTo: number; }</code> |

**Returns:** <code>Promise&lt;{ imagePaths: string[]; }&gt;</code>

--------------------


### getMetadata(...)

```typescript
getMetadata(options: { filePath: string; }) => Promise<{ creationDate: number; }>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ filePath: string; }</code> |

**Returns:** <code>Promise&lt;{ creationDate: number; }&gt;</code>

--------------------


### logCrashlyticsMessage(...)

```typescript
logCrashlyticsMessage(options: { message: string; }) => Promise<void>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ message: string; }</code> |

--------------------

</docgen-api>
