# pjamm-plugin-background

Background Service Plugin

## Install

```bash
npm install pjamm-plugin-background
npx cap sync
```

## API

<docgen-index>

- [`taskBeforeExit()`](#taskbeforeexit)
- [`taskFinish(...)`](#taskfinish)
- [`enableBackgroundFetch()`](#enablebackgroundfetch)
- [`enableBackgroundFetch()`](#enablebackgroundfetch)
- [`disableBackgroundFetch()`](#disablebackgroundfetch)
- [`sendBackgroundExitData()`](#sendbackgroundexitdata)
- [`sendBatteryData()`](#sendbatterydata)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### taskBeforeExit()

```typescript
taskBeforeExit() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

---

### taskFinish(...)

```typescript
taskFinish(options: FinishOptions) => void
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#finishoptions">FinishOptions</a></code> |

---

### enableBackgroundFetch()

```typescript
enableBackgroundFetch() => void
```

---

### enableBackgroundFetch()

```typescript
enableBackgroundFetch() => void
```

---

### disableBackgroundFetch()

```typescript
disableBackgroundFetch() => void
```

---

### sendBackgroundExitData()

```typescript
sendBackgroundExitData() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

---

### sendBatteryData()

```typescript
sendBatteryData() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

---

### Interfaces

#### FinishOptions

| Prop         | Type                |
| ------------ | ------------------- |
| **`taskId`** | <code>string</code> |

</docgen-api>
