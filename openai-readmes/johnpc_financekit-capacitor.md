# @johnpc/financekit-capacitor

Enable iOS FinanceKit capabilities for Capacitor apps

## Install

```bash
npm install @johnpc/financekit-capacitor
npx cap sync
```

## API

<docgen-index>

* [`transactions()`](#transactions)
* [`accounts()`](#accounts)
* [`requestAuthorization()`](#requestauthorization)
* [`authorizationStatus()`](#authorizationstatus)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### transactions()

```typescript
transactions() => Promise<{ value: { amount: number; id: string; merchantName: string; date: number; status: number; description: string; type: number; }[]; }>
```

**Returns:** <code>Promise&lt;{ value: { amount: number; id: string; merchantName: string; date: number; status: number; description: string; type: number; }[]; }&gt;</code>

--------------------


### accounts()

```typescript
accounts() => Promise<{ name: string; id: string; }[]>
```

**Returns:** <code>Promise&lt;{ name: string; id: string; }[]&gt;</code>

--------------------


### requestAuthorization()

```typescript
requestAuthorization() => Promise<void>
```

--------------------


### authorizationStatus()

```typescript
authorizationStatus() => Promise<{ value: { status: number; }; }>
```

**Returns:** <code>Promise&lt;{ value: { status: number; }; }&gt;</code>

--------------------

</docgen-api>
