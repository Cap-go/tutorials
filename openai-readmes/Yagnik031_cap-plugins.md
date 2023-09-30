# scanner

this plugin is combo of flash-light && scanner

## Install

```bash
npm install scanner
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`isAvailable()`](#isavailable)
- [`switchOn(...)`](#switchon)
- [`switchOff()`](#switchoff)
- [`isSwitchedOn()`](#isswitchedon)
- [`prepare()`](#prepare)
- [`hideBackground()`](#hidebackground)
- [`showBackground()`](#showbackground)
- [`startScan()`](#startscan)
- [`stopScan()`](#stopscan)
- [`checkPermission(...)`](#checkpermission)
- [`openAppSettings()`](#openappsettings)
- [Interfaces](#interfaces)

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

---

### isAvailable()

```typescript
isAvailable() => Promise<{ value: boolean; }>
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

---

### switchOn(...)

```typescript
switchOn(options: { intensity?: number; }) => Promise<void>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ intensity?: number; }</code> |

---

### switchOff()

```typescript
switchOff() => Promise<void>
```

---

### isSwitchedOn()

```typescript
isSwitchedOn() => Promise<{ value: boolean; }>
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

---

### prepare()

```typescript
prepare() => Promise<void>
```

---

### hideBackground()

```typescript
hideBackground() => Promise<void>
```

---

### showBackground()

```typescript
showBackground() => Promise<void>
```

---

### startScan()

```typescript
startScan() => Promise<ScanResult>
```

**Returns:** <code>Promise&lt;<a href="#scanresult">ScanResult</a>&gt;</code>

---

### stopScan()

```typescript
stopScan() => Promise<void>
```

---

### checkPermission(...)

```typescript
checkPermission(options: CheckPermissionOptions) => Promise<CheckPermissionResult>
```

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code><a href="#checkpermissionoptions">CheckPermissionOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#checkpermissionresult">CheckPermissionResult</a>&gt;</code>

---

### openAppSettings()

```typescript
openAppSettings() => Promise<void>
```

---

### Interfaces

#### ScanResult

| Prop             | Type                 |
| ---------------- | -------------------- |
| **`hasContent`** | <code>boolean</code> |
| **`content`**    | <code>string</code>  |

#### CheckPermissionResult

| Prop             | Type                 |
| ---------------- | -------------------- |
| **`granted`**    | <code>boolean</code> |
| **`denied`**     | <code>boolean</code> |
| **`asked`**      | <code>boolean</code> |
| **`neverAsked`** | <code>boolean</code> |
| **`restricted`** | <code>boolean</code> |
| **`unknown`**    | <code>boolean</code> |

#### CheckPermissionOptions

| Prop        | Type                 |
| ----------- | -------------------- |
| **`force`** | <code>boolean</code> |

</docgen-api>
