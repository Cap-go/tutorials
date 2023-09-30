# capacitor-contacts

read, write, delete contacts

## Install

```bash
npm install a-capacitor-contacts
npx cap sync
```

## API

<docgen-index>

- [`getContacts(...)`](#getcontacts)
- [`getContactByName(...)`](#getcontactbyname)
- [`addNewContact(...)`](#addnewcontact)
- [`deleteContact(...)`](#deletecontact)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getContacts(...)

```typescript
getContacts(options?: getContactsOpt | undefined) => Promise<{ results: any[]; }>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#getcontactsopt">getContactsOpt</a></code> |

**Returns:** <code>Promise&lt;{ results: any[]; }&gt;</code>

---

### getContactByName(...)

```typescript
getContactByName(options: getContactsByNameOpt) => Promise<{ results: any[]; }>
```

| Param         | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **`options`** | <code><a href="#getcontactsbynameopt">getContactsByNameOpt</a></code> |

**Returns:** <code>Promise&lt;{ results: any[]; }&gt;</code>

---

### addNewContact(...)

```typescript
addNewContact(options: addNewContact) => Promise<{ results: any[]; }>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#addnewcontact">addNewContact</a></code> |

**Returns:** <code>Promise&lt;{ results: any[]; }&gt;</code>

---

### deleteContact(...)

```typescript
deleteContact(options: contactUid) => Promise<{ results: any[]; }>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#contactuid">contactUid</a></code> |

**Returns:** <code>Promise&lt;{ results: any[]; }&gt;</code>

---

### Interfaces

#### getContactsOpt

| Prop           | Type                 | Description                                                                        |
| -------------- | -------------------- | ---------------------------------------------------------------------------------- |
| **`getEmail`** | <code>boolean</code> | getEmail if pass true its also search saved email address along with mobile number |
| **`getPhoto`** | <code>boolean</code> | return saved photo in base64 string                                                |

#### getContactsByNameOpt

| Prop           | Type                 | Description                                                                        |
| -------------- | -------------------- | ---------------------------------------------------------------------------------- |
| **`name`**     | <code>string</code>  |                                                                                    |
| **`getEmail`** | <code>boolean</code> | getEmail if pass true its also search saved email address along with mobile number |
| **`getPhoto`** | <code>boolean</code> | return saved photo in base64 string                                                |

#### addNewContact

| Prop               | Type                | Description          |
| ------------------ | ------------------- | -------------------- |
| **`displayName`**  | <code>string</code> | Display contact name |
| **`mobileNumber`** | <code>string</code> | mobile number        |
| **`homeNumber`**   | <code>string</code> |                      |
| **`workNumber`**   | <code>string</code> |                      |
| **`emailID`**      | <code>string</code> |                      |
| **`company`**      | <code>string</code> |                      |
| **`jobTitle`**     | <code>string</code> |                      |

#### contactUid

| Prop            | Type                |
| --------------- | ------------------- |
| **`contactID`** | <code>string</code> |

</docgen-api>
