# capacitor-secure-storage

Work with Secure Storage for iOS, Android

## Install

```bash
npm install capacitor-secure-storage
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
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


### Interfaces


#### SecureStorageGetItemRequest

| Prop      | Type                |
| --------- | ------------------- |
| **`key`** | <code>string</code> |


#### SecureStorageGetItemResult

| Prop       | Type                        |
| ---------- | --------------------------- |
| **`data`** | <code>string \| null</code> |


#### SecureStorageSetItemRequest

| Prop       | Type                |
| ---------- | ------------------- |
| **`key`**  | <code>string</code> |
| **`data`** | <code>string</code> |

</docgen-api>
