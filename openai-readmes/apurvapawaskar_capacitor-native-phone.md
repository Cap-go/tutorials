# capacitor-native-phone

This plugin allows user to place a phone call

## Install

```bash
npm install capacitor-native-phone
npx cap sync
```

## API

<docgen-index>

* [`makeACall(...)`](#makeacall)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### makeACall(...)

```typescript
makeACall(options: PhoneOptions) => Promise<void>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#phoneoptions">PhoneOptions</a></code> |

--------------------


### Interfaces


#### PhoneOptions

| Prop               | Type                |
| ------------------ | ------------------- |
| **`phone_number`** | <code>string</code> |
| **`country_code`** | <code>string</code> |

</docgen-api>
