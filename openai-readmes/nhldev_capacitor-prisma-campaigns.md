# capacitor-prisma-campaigns

Capacitor plugin for Prisma Campaigns integration.
For more information, please visit: http://docs.prismacampaigns.com/en/

## WARNING

This is a work in progress. IOS and web functionality are not implemented yet.

## Install

```bash
npm install capacitor-prisma-campaigns
npx cap sync
```

## API

<docgen-index>

- [`Load(...)`](#load)
- [`Subscribe(...)`](#subscribe)
- [`SyncPage(...)`](#syncpage)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### Load(...)

```typescript
Load(options: PrismaConfiguration) => Promise<any>
```

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#prismaconfiguration">PrismaConfiguration</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### Subscribe(...)

```typescript
Subscribe(options: PrismaPushToken) => Promise<void>
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#prismapushtoken">PrismaPushToken</a></code> |

---

### SyncPage(...)

```typescript
SyncPage(options: any) => Promise<any>
```

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### Interfaces

#### PrismaConfiguration

| Prop             | Type                |
| ---------------- | ------------------- |
| **`server`**     | <code>string</code> |
| **`port`**       | <code>string</code> |
| **`appToken`**   | <code>string</code> |
| **`customerId`** | <code>string</code> |
| **`protocol`**   | <code>string</code> |

#### PrismaPushToken

| Prop                    | Type                |
| ----------------------- | ------------------- |
| **`registrationToken`** | <code>string</code> |

</docgen-api>
