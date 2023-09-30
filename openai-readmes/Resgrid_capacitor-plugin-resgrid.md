# capacitor-plugin-resgrid

Capacitor plugin for using parts of the Resgrid system

## Install

```bash
npm install capacitor-plugin-resgrid
npx cap sync
```

## API

<docgen-index>

- [`start(...)`](#start)
- [`stop()`](#stop)
- [`showModal()`](#showmodal)
- [`checkPermissions()`](#checkpermissions)
- [`requestPermissions()`](#requestpermissions)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### start(...)

```typescript
start(options: ResgridPluginStartOptions) => Promise<void>
```

| Param         | Type                                                                            |
| ------------- | ------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#resgridpluginstartoptions">ResgridPluginStartOptions</a></code> |

---

### stop()

```typescript
stop() => Promise<void>
```

---

### showModal()

```typescript
showModal() => Promise<void>
```

---

### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;any&gt;</code>

---

### requestPermissions()

```typescript
requestPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;any&gt;</code>

---

### Interfaces

#### ResgridPluginStartOptions

| Prop                            | Type                              | Description                                       |
| ------------------------------- | --------------------------------- | ------------------------------------------------- |
| **`token`**                     | <code>string</code>               |                                                   |
| **`url`**                       | <code>string</code>               |                                                   |
| **`type`**                      | <code>number</code>               | Type of headset to use. 0 = Audio Only, 1 = Video |
| **`title`**                     | <code>string</code>               |                                                   |
| **`defaultMic`**                | <code>string</code>               |                                                   |
| **`defaultSpeaker`**            | <code>string</code>               |                                                   |
| **`apiUrl`**                    | <code>string</code>               |                                                   |
| **`canConnectToVoiceApiToken`** | <code>string</code>               |                                                   |
| **`rooms`**                     | <code>ResgridPluginRooms[]</code> |                                                   |

#### ResgridPluginRooms

| Prop        | Type                |
| ----------- | ------------------- |
| **`name`**  | <code>string</code> |
| **`id`**    | <code>string</code> |
| **`token`** | <code>string</code> |

</docgen-api>
