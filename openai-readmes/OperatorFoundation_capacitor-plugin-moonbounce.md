# capacitor-plugin-moonbounce

A Capacitor plugin for the Moonbounce VPN library.

## Install

```bash
npm install capacitor-plugin-moonbounce
npx cap sync
```

## API

<docgen-index>

- [`checkPermissions()`](#checkpermissions)
- [`requestPermissions()`](#requestpermissions)
- [`startVPN(...)`](#startvpn)
- [`stopVPN()`](#stopvpn)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

---

### requestPermissions()

```typescript
requestPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

---

### startVPN(...)

```typescript
startVPN(options: { serverIP: string; serverPort: number; disallowedApp: string; excludeIP: string; }) => Promise<void>
```

| Param         | Type                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------ |
| **`options`** | <code>{ serverIP: string; serverPort: number; disallowedApp: string; excludeIP: string; }</code> |

---

### stopVPN()

```typescript
stopVPN() => Promise<void>
```

---

### Interfaces

#### PermissionStatus

| Prop                | Type                                                        |
| ------------------- | ----------------------------------------------------------- |
| **`vpnConnection`** | <code><a href="#permissionstate">PermissionState</a></code> |

### Type Aliases

#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>

</docgen-api>
