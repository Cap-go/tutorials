# multiplatform-biometric-auth

Plugin para autenticar con metodos biometricos

## Install

```bash
npm install multiplatform-biometric-auth
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`deviceSupportBiometricLogin()`](#devicesupportbiometriclogin)

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

### deviceSupportBiometricLogin()

```typescript
deviceSupportBiometricLogin() => Promise<{ value: boolean; }>
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

---

</docgen-api>
