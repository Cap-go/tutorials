# capacitor-biometric-lock

Lock and unlock an app with biometrics

## Install

```bash
npm install capacitor-biometric-lock
npx cap sync
```

## API

<docgen-index>

* [`configure(...)`](#configure)
* [`getConfiguration()`](#getconfiguration)
* [`getBiometricMethod()`](#getbiometricmethod)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### configure(...)

```typescript
configure(options?: BiometricLockConfiguration | undefined) => Promise<void>
```

Set plugin configuration

| Param         | Type                                                                              |
| ------------- | --------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#biometriclockconfiguration">BiometricLockConfiguration</a></code> |

**Since:** 1.0.0

--------------------


### getConfiguration()

```typescript
getConfiguration() => Promise<BiometricLockConfiguration>
```

Get plugin configuration

**Returns:** <code>Promise&lt;<a href="#biometriclockconfiguration">BiometricLockConfiguration</a>&gt;</code>

**Since:** 1.0.0

--------------------


### getBiometricMethod()

```typescript
getBiometricMethod() => Promise<BiometricMethodResult>
```

Get primary biometric method

**Returns:** <code>Promise&lt;<a href="#biometricmethodresult">BiometricMethodResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### Interfaces


#### BiometricLockConfiguration

Persisted configuration of the plugin

| Prop                   | Type                 | Description                  |
| ---------------------- | -------------------- | ---------------------------- |
| **`enabled`**          | <code>boolean</code> |                              |
| **`timeoutInSeconds`** | <code>number</code>  |                              |
| **`appName`**          | <code>string</code>  |                              |
| **`retryButtonColor`** | <code>string</code>  | Hex color code e.g. "00ffee" |


#### BiometricMethodResult

| Prop                  | Type                                                        |
| --------------------- | ----------------------------------------------------------- |
| **`biometricMethod`** | <code><a href="#biometricmethod">BiometricMethod</a></code> |


### Enums


#### BiometricMethod

| Members                         | Value          | Description                                     |
| ------------------------------- | -------------- | ----------------------------------------------- |
| **`none`**                      | <code>0</code> | No biometry is available                        |
| **`touchId`**                   | <code>1</code> | iOS Touch ID is available                       |
| **`faceId`**                    | <code>2</code> | iOS Face ID is available                        |
| **`fingerprintAuthentication`** | <code>3</code> | Android fingerprint authentication is available |
| **`faceAuthentication`**        | <code>4</code> | Android face authentication is available        |
| **`irisAuthentication`**        | <code>5</code> | Android iris authentication is available        |

</docgen-api>
