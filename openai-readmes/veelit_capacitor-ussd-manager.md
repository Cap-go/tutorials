# capacitor-ussd-manager

The plugin allows the use of the `Android TelephonyManager UssdResponseCallBack` method to dial ussd short codes programmatically and get the response text asynchronously.

**Note**: This only supports USSD codes that are not session based (i.e where user input is not required after dialling the code).

## Install

```bash
npm install @veelit/capacitor-ussd-manager
npx cap sync
```

## Permissions

Add the following permission to your `AndroidManifest.xml`

```
<uses-permission android:name="android.permission.CALL_PHONE" />
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`requestUssdPermission()`](#requestussdpermission)
- [`callUssd(...)`](#callussd)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                                |
| ------------- | ----------------------------------- |
| **`options`** | `<code>`{ value: string; }`</code>` |

**Returns:** `<code>`Promise&lt;{ value: string; }&gt;`</code>`

---

### requestUssdPermission()

```typescript
requestUssdPermission() => Promise<void>
```

---

### callUssd(...)

```typescript
callUssd(options: { value: string; }) => Promise<{ result: string; code: string; }>
```

| Param         | Type                                |
| ------------- | ----------------------------------- |
| **`options`** | `<code>`{ value: string; }`</code>` |

**Returns:** `<code>`Promise&lt;{ result: string; code: string; }&gt;`</code>`

---

### Example Usage

```typescript
import { UssdManager } from '@veelit/capacitor-ussd-manager'

const callUssdCode = async (shortCode: string) => {
  try {
    await UssdManager.requestUssdPermission()
    const res = await UssdManager.callUssd({ value: shortCode })
    setUssdResponse(res)
  } catch (error: any) {
    setUssdResponse(JSON.parse(error?.message))
  }
}
```
