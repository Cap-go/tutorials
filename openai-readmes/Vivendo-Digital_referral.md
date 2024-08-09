# @vivendo/referral

Track App Store and Play Store app installs

## Install

```bash
npm install @vivendo/referral
npx cap sync
```

## API

<docgen-index>

* [`getInstallReferrer(...)`](#getinstallreferrer)
* [`handleOpenUrl(...)`](#handleopenurl)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getInstallReferrer(...)

```typescript
getInstallReferrer(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### handleOpenUrl(...)

```typescript
handleOpenUrl(options: { url: string; }) => Promise<{ url: string; }>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ url: string; }</code> |

**Returns:** <code>Promise&lt;{ url: string; }&gt;</code>

--------------------

</docgen-api>
