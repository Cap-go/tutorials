# @houseninja/capacitor-datadog

Capacitor plugin for Datadog RUM

## Install

```bash
npm install @houseninja/capacitor-datadog
npx cap sync
```

## API

<docgen-index>

- [`init(...)`](#init)
- [`setUserInfo(...)`](#setuserinfo)
- [`addUserExtraInfo(...)`](#adduserextrainfo)
- [`addUserAction(...)`](#adduseraction)
- [`addAttribute(...)`](#addattribute)
- [`removeAttribute(...)`](#removeattribute)
- [`addError(...)`](#adderror)
- [Interfaces](#interfaces)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### init(...)

```typescript
init(clientToken: string, applicationId: string, service: string) => Promise<void>
```

| Param               | Type                |
| ------------------- | ------------------- |
| **`clientToken`**   | <code>string</code> |
| **`applicationId`** | <code>string</code> |
| **`service`**       | <code>string</code> |

---

### setUserInfo(...)

```typescript
setUserInfo(id?: string | undefined, name?: string | undefined, email?: string | undefined, extraInfo?: { [key: string]: string; } | undefined) => Promise<void>
```

| Param           | Type                                    |
| --------------- | --------------------------------------- |
| **`id`**        | <code>string</code>                     |
| **`name`**      | <code>string</code>                     |
| **`email`**     | <code>string</code>                     |
| **`extraInfo`** | <code>{ [key: string]: string; }</code> |

---

### addUserExtraInfo(...)

```typescript
addUserExtraInfo(extraInfo: { [key: string]: string; }) => Promise<void>
```

| Param           | Type                                    |
| --------------- | --------------------------------------- |
| **`extraInfo`** | <code>{ [key: string]: string; }</code> |

---

### addUserAction(...)

```typescript
addUserAction(type: RUMUserActionType, name: string, attributes: { [key: string]: string; }) => Promise<void>
```

| Param            | Type                                                            |
| ---------------- | --------------------------------------------------------------- |
| **`type`**       | <code><a href="#rumuseractiontype">RUMUserActionType</a></code> |
| **`name`**       | <code>string</code>                                             |
| **`attributes`** | <code>{ [key: string]: string; }</code>                         |

---

### addAttribute(...)

```typescript
addAttribute(key: string, value: string) => Promise<void>
```

| Param       | Type                |
| ----------- | ------------------- |
| **`key`**   | <code>string</code> |
| **`value`** | <code>string</code> |

---

### removeAttribute(...)

```typescript
removeAttribute(key: string) => Promise<void>
```

| Param     | Type                |
| --------- | ------------------- |
| **`key`** | <code>string</code> |

---

### addError(...)

```typescript
addError(error: unknown, context?: Context | undefined) => Promise<void>
```

| Param         | Type                                        |
| ------------- | ------------------------------------------- |
| **`error`**   | <code>unknown</code>                        |
| **`context`** | <code><a href="#context">Context</a></code> |

---

### Interfaces

#### Context

### Enums

#### RUMUserActionType

| Members      | Value                 |
| ------------ | --------------------- |
| **`tap`**    | <code>'tap'</code>    |
| **`click`**  | <code>'click'</code>  |
| **`scroll`** | <code>'scroll'</code> |
| **`swipe`**  | <code>'swipe'</code>  |
| **`custom`** | <code>'custom'</code> |

</docgen-api>
