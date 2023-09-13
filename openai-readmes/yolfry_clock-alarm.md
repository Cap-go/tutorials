# clock-alarm

This capacitor add-on allows you to create an alarm clock for iOS and Android

## Install

```bash
npm install clock-alarm
npx cap sync
```

## Add code (iOS)

The code is automatically added with npx cap sync.

## Add code (Android)

The code is automatically added with npx cap sync.

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`setAlarm(...)`](#setalarm)
- [`removeAlarm(...)`](#removealarm)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)
- [Enums](#enums)

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

### setAlarm(...)

```typescript
setAlarm(options: AlarmOptions) => Promise<alarmResult>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#alarmoptions">AlarmOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#alarmresult">alarmResult</a>&gt;</code>

---

### removeAlarm(...)

```typescript
removeAlarm(options: { id: number; }) => Promise<{ result: boolean; }>
```

| Param         | Type                         |
| ------------- | ---------------------------- |
| **`options`** | <code>{ id: number; }</code> |

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

---

### Interfaces

#### alarmResult

| Prop         | Type                 |
| ------------ | -------------------- |
| **`result`** | <code>boolean</code> |

#### AlarmOptions

| Prop          | Type                                            | Description                                                                                                                    |
| ------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **`id`**      | <code>number</code>                             |                                                                                                                                |
| **`at`**      | <code>string</code>                             | .toISOString() Fecha y hora en formato "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'". Ejemplo: "2023-06-18T15:15:00" at: Date().toISOString() |
| **`message`** | <code>string</code>                             |                                                                                                                                |
| **`every`**   | <code><a href="#everytype">everyType</a></code> |                                                                                                                                |
| **`count`**   | <code>number</code>                             |                                                                                                                                |
| **`repeats`** | <code>boolean</code>                            |                                                                                                                                |
| **`Weekday`** | <code><a href="#weekday">Weekday</a></code>     |                                                                                                                                |
| **`hour`**    | <code>number</code>                             |                                                                                                                                |
| **`minute`**  | <code>number</code>                             |                                                                                                                                |

### Type Aliases

#### everyType

<code>'year' | 'month' | 'two-weeks' | 'week' | 'day' | 'hour' | 'minute' | 'second'</code>

### Enums

#### Weekday

| Members         | Value          |
| --------------- | -------------- |
| **`Sunday`**    | <code>1</code> |
| **`Monday`**    | <code>2</code> |
| **`Tuesday`**   | <code>3</code> |
| **`Wednesday`** | <code>4</code> |
| **`Thursday`**  | <code>5</code> |
| **`Friday`**    | <code>6</code> |
| **`Saturday`**  | <code>7</code> |

</docgen-api>
