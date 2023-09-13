# capacitor-thinmoo-ble

Conexion via bluetooth para los dispositivos Thinmoo

## Install

```bash
npm install capacitor-thinmoo-ble
npx cap sync
```

## API

<docgen-index>

- [`open(...)`](#open)
- [`addListener('openSuccess', ...)`](#addlisteneropensuccess)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### open(...)

```typescript
open(options: { devSn: string; miniEkey: string; value?: string; connection_services?: string; services?: string; characteristic_read?: string; characteristic_write?: string; }) => Promise<{ success: boolean; }>
```

| Param         | Type                                                                                                                                                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ devSn: string; miniEkey: string; value?: string; connection_services?: string; services?: string; characteristic_read?: string; characteristic_write?: string; }</code> |

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

---

### addListener('openSuccess', ...)

```typescript
addListener(eventName: 'openSuccess', listenerFunc: (data: OpenSuccessData) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                           |
| ------------------ | ------------------------------------------------------------------------------ |
| **`eventName`**    | <code>'openSuccess'</code>                                                     |
| **`listenerFunc`** | <code>(data: <a href="#opensuccessdata">OpenSuccessData</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

#### OpenSuccessData

| Prop           | Type                 |
| -------------- | -------------------- |
| **`success`**  | <code>boolean</code> |
| **`devSn`**    | <code>string</code>  |
| **`miniEkey`** | <code>string</code>  |

</docgen-api>
