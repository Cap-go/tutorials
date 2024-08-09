# capacitor-check-vpn

Check is vpn workins

## Install

```bash
npm i capacitor-check-vpn
npx cap sync
```

## API

<docgen-index>

* [`getVpnStatus()`](#getvpnstatus)
* [`echo(...)`](#echo)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getVpnStatus()

```typescript
getVpnStatus() => Promise<{ vpnStatus: string | undefined; }>
```

**Returns:** <code>Promise&lt;{ vpnStatus: string; }&gt;</code>

--------------------


### echo(...)

```typescript
echo(options: { value: string | undefined; }) => Promise<{ value: string | undefined; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------

</docgen-api>
