# capacitor-plugin-zendesk-support

This page gives you the basic steps for getting up and running with the Support SDK.

## Install

```bash
npm install capacitor-plugin-zendesk-support
npx cap sync
```

## API

<docgen-index>

- [`initialize(...)`](#initialize)
- [`setAnonymousIdentity(...)`](#setanonymousidentity)
- [`setIdentity(...)`](#setidentity)
- [`showHelpCenter(...)`](#showhelpcenter)
- [`showTicketRequest(...)`](#showticketrequest)
- [`showUserTickets()`](#showusertickets)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options: InitializeOptions) => Promise<void>
```

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#initializeoptions">InitializeOptions</a></code> |

---

### setAnonymousIdentity(...)

```typescript
setAnonymousIdentity(options: AnonymousOptions) => Promise<void>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#anonymousoptions">AnonymousOptions</a></code> |

---

### setIdentity(...)

```typescript
setIdentity(option: IdentityOption) => Promise<void>
```

| Param        | Type                                                      |
| ------------ | --------------------------------------------------------- |
| **`option`** | <code><a href="#identityoption">IdentityOption</a></code> |

---

### showHelpCenter(...)

```typescript
showHelpCenter(options?: HelpCenterOptions | undefined) => Promise<void>
```

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#helpcenteroptions">HelpCenterOptions</a></code> |

---

### showTicketRequest(...)

```typescript
showTicketRequest(options?: TicketRequestOptions | undefined) => Promise<void>
```

| Param         | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **`options`** | <code><a href="#ticketrequestoptions">TicketRequestOptions</a></code> |

---

### showUserTickets()

```typescript
showUserTickets() => Promise<void>
```

---

### Interfaces

#### InitializeOptions

| Prop             | Type                 |
| ---------------- | -------------------- |
| **`zendeskUrl`** | <code>string</code>  |
| **`appId`**      | <code>string</code>  |
| **`clientId`**   | <code>string</code>  |
| **`debugLog`**   | <code>boolean</code> |

#### AnonymousOptions

| Prop        | Type                |
| ----------- | ------------------- |
| **`name`**  | <code>string</code> |
| **`email`** | <code>string</code> |

#### IdentityOption

| Prop        | Type                |
| ----------- | ------------------- |
| **`token`** | <code>string</code> |

#### HelpCenterOptions

| Prop           | Type                  |
| -------------- | --------------------- |
| **`groupBy`**  | <code>string</code>   |
| **`groupIds`** | <code>number[]</code> |
| **`labels`**   | <code>string[]</code> |

#### TicketRequestOptions

| Prop          | Type                  |
| ------------- | --------------------- |
| **`subject`** | <code>string</code>   |
| **`tags`**    | <code>string[]</code> |
| **`fields`**  | <code>string[]</code> |

</docgen-api>
