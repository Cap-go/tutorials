# @anuradev/capacitor-contacts

Capacitor plugin to get and modify mobile contacts

## Install

```bash
npm install @anuradev/capacitor-contacts
npx cap sync
```

## API

<docgen-index>

- [`checkPermissions()`](#checkpermissions)
- [`requestPermissions()`](#requestpermissions)
- [`getContacts()`](#getcontacts)
- [`createContact(...)`](#createcontact)
- [`addToExistingContact(...)`](#addtoexistingcontact)
- [`deleteContact(...)`](#deletecontact)
- [`getGroups()`](#getgroups)
- [`getContactGroups()`](#getcontactgroups)
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

### getContacts()

```typescript
getContacts() => Promise<{ contacts: Contact[]; }>
```

**Returns:** <code>Promise&lt;{ contacts: Contact[]; }&gt;</code>

---

### createContact(...)

```typescript
createContact(data: { name?: string; number: string; }) => Promise<void>
```

| Param      | Type                                            |
| ---------- | ----------------------------------------------- |
| **`data`** | <code>{ name?: string; number: string; }</code> |

---

### addToExistingContact(...)

```typescript
addToExistingContact(data: { name?: string; number: string; }) => Promise<void>
```

| Param      | Type                                            |
| ---------- | ----------------------------------------------- |
| **`data`** | <code>{ name?: string; number: string; }</code> |

---

### deleteContact(...)

```typescript
deleteContact(data: { contactId: string; }) => Promise<void>
```

| Param      | Type                                |
| ---------- | ----------------------------------- |
| **`data`** | <code>{ contactId: string; }</code> |

---

### getGroups()

```typescript
getGroups() => Promise<{ groups: Group[]; }>
```

**Returns:** <code>Promise&lt;{ groups: Group[]; }&gt;</code>

---

### getContactGroups()

```typescript
getContactGroups() => Promise<{ [key: string]: Group[]; }>
```

**Returns:** <code>Promise&lt;{ [key: string]: Group[]; }&gt;</code>

---

### Interfaces

#### PermissionStatus

| Prop          | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`display`** | <code><a href="#permissionstate">PermissionState</a></code> |

#### Contact

| Prop                   | Type                        |
| ---------------------- | --------------------------- |
| **`contactId`**        | <code>string</code>         |
| **`displayName`**      | <code>string</code>         |
| **`phoneNumbers`**     | <code>PhoneNumber[]</code>  |
| **`emails`**           | <code>EmailAddress[]</code> |
| **`photoThumbnail`**   | <code>string</code>         |
| **`organizationName`** | <code>string</code>         |
| **`organizationRole`** | <code>string</code>         |
| **`birthday`**         | <code>string</code>         |

#### PhoneNumber

| Prop         | Type                |
| ------------ | ------------------- |
| **`label`**  | <code>string</code> |
| **`number`** | <code>string</code> |

#### EmailAddress

| Prop          | Type                |
| ------------- | ------------------- |
| **`label`**   | <code>string</code> |
| **`address`** | <code>string</code> |

#### Group

| Prop              | Type                |
| ----------------- | ------------------- |
| **`groupId`**     | <code>string</code> |
| **`accountType`** | <code>string</code> |
| **`accountName`** | <code>string</code> |
| **`title`**       | <code>string</code> |

### Type Aliases

#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>

</docgen-api>
