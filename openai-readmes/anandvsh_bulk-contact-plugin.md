# bulk-contact

Allow to save multiple contact detail in ionic capacitor

## Install

```bash
npm install bulk-contact
npx cap sync
```

## Example

    BulkContact.getPermissions().then(permissionResponse => {
      if (permissionResponse) {
        if (permissionResponse.granted) {
          for (const currentContact of contactList) {
            BulkContact.saveContact({
              name: currentContact.name,
              mobile: currentContact.mobile
            }).then(() => {
              console.log('contact saved');
            }).catch((exception) => {
              console.log(exception);
            });
          }
        } else {
          console.log('permission denied');
        }
      }
    });

## API

<docgen-index>

- [`getPermissions()`](#getpermissions)
- [`getContacts()`](#getcontacts)
- [`saveContact(...)`](#savecontact)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getPermissions()

```typescript
getPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

---

### getContacts()

```typescript
getContacts() => Promise<{ contacts: Contact[]; }>
```

**Returns:** <code>Promise&lt;{ contacts: Contact[]; }&gt;</code>

---

### saveContact(...)

```typescript
saveContact(contact: NewContact) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`contact`** | <code><a href="#newcontact">NewContact</a></code> |

---

### Interfaces

#### PermissionStatus

| Prop          | Type                 |
| ------------- | -------------------- |
| **`granted`** | <code>boolean</code> |

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

#### NewContact

New contact schema.

| Prop         | Type                |
| ------------ | ------------------- |
| **`name`**   | <code>string</code> |
| **`mobile`** | <code>string</code> |

</docgen-api>
