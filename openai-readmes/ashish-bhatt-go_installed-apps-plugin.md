# installed-apps

Gets a list of installed applications

## Install

```bash
npm install installed-apps
npx cap sync
```

## API

<docgen-index>

* [`getInstalledApps()`](#getinstalledapps)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getInstalledApps()

```typescript
getInstalledApps() => Promise<{ value: string; }>
```

This method returns all the installed applications in your device!
It returns JSON string containing an array of objects having the following structure:
```json
[{
  "packageName": "",
  "encodedIcon": "" -- Base64 encoded string
}]
```
NOTE: Currently only supported for Android

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------

</docgen-api>
