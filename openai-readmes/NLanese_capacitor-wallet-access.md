# capacitor-wallet-access

Used to gain access to a user's wallet on their device. This allows access to the cards, passes, or tickets a user will have in their wallet, but this does NOT include the capacity to create new passes

## Install

```bash
npm install capacitor-wallet-access
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`getWallet(...)`](#getwallet)
* [`generatePass(...)`](#generatepass)

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


### getWallet(...)

```typescript
getWallet(options: { value: string[]; }) => Promise<{ cards: any[]; }>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ value: string[]; }</code> |

**Returns:** <code>Promise&lt;{ cards: any[]; }&gt;</code>

--------------------


### generatePass(...)

```typescript
generatePass(options: { passConfig: object; passObject: object; miscData?: object; }) => Promise<{ newPass: string; }>
```

| Param         | Type                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| **`options`** | <code>{ passConfig: object; passObject: object; miscData?: object; }</code> |

**Returns:** <code>Promise&lt;{ newPass: string; }&gt;</code>

--------------------

</docgen-api>
