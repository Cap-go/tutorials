# ya-locator-plugin

Plug-in for the capacitor to determine the location of the device according to cellular and Wi-Fi networks
via [Yandex locator](https://yandex.ru/dev/locator/) without using GPS

### <strong>Only android</strong>

## Install

```bash
npm install ya-locator-plugin
npx cap sync
```

## API

<docgen-index>

- [`requestCoordinates(...)`](#requestcoordinates)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### requestCoordinates(...)

```typescript
requestCoordinates(options: { version: string; url: string; api_key: string; }) => Promise<{ version: string; url: string; api_key: string; }>
```

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code>{ version: string; url: string; api_key: string; }</code> |

**Returns:** <code>Promise&lt;{ version: string; url: string; api_key: string; }&gt;</code>

---

</docgen-api>

### Listener

Plugin emitting event <strong>"currentLocation"</strong> current coordinates mobile device

`{
"position": {
"latitude": 55.743675,
"longitude": 37.5646301,
"altitude": 0.0,
"precision": 701.71643,
"altitude_precision": 30.0,
"type": "gsm"
}
}`

Add listener in your code

`(VerYaLocator as any).addListener('currentLocation', (data: any) => {
console.log('currentLocation', data);
})`
