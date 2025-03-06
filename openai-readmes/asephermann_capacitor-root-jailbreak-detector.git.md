# capacitor-root-jailbreak-detector

Capacitor Plugin Root/Jailbreak Detection

## Install

```bash
npm install capacitor-root-jailbreak-detector
npx cap sync
```

## API

<docgen-index>

* [`isRooted()`](#isrooted)
* [`isRootedWithBusyBox()`](#isrootedwithbusybox)
* [`isRootedWithEmulator()`](#isrootedwithemulator)
* [`isRootedWithBusyBoxWithEmulator()`](#isrootedwithbusyboxwithemulator)
* [`isDetectRootManagementAppsRooted()`](#isdetectrootmanagementappsrooted)
* [`isDetectPotentiallyDangerousAppsRooted()`](#isdetectpotentiallydangerousappsrooted)
* [`isTestKeysRooted()`](#istestkeysrooted)
* [`isCheckForBusyBoxBinaryRooted()`](#ischeckforbusyboxbinaryrooted)
* [`isCheckForSuBinaryRooted()`](#ischeckforsubinaryrooted)
* [`isCheckSuExistsRooted()`](#ischecksuexistsrooted)
* [`isCheckForRWPathsRooted()`](#ischeckforrwpathsrooted)
* [`isCheckForDangerousPropsRooted()`](#ischeckfordangerouspropsrooted)
* [`isCheckForRootNativeRooted()`](#ischeckforrootnativerooted)
* [`isDetectRootCloakingAppsRooted()`](#isdetectrootcloakingappsrooted)
* [`isSelinuxFlagInEnabled()`](#isselinuxflaginenabled)
* [`isExistBuildTagsRooted()`](#isexistbuildtagsrooted)
* [`doesSuperuserApkExistRooted()`](#doessuperuserapkexistrooted)
* [`isExistSUPathRooted()`](#isexistsupathrooted)
* [`isCheckDirPermissionsRooted()`](#ischeckdirpermissionsrooted)
* [`isCheckExecutingCommandsRooted()`](#ischeckexecutingcommandsrooted)
* [`isCheckInstalledPackagesRooted()`](#ischeckinstalledpackagesrooted)
* [`isCheckforOverTheAirCertificatesRooted()`](#ischeckforovertheaircertificatesrooted)
* [`isRunningOnEmulatorRooted()`](#isrunningonemulatorrooted)
* [`isRunningOnEmulator()`](#isrunningonemulator)
* [`simpleCheckEmulatorRooted()`](#simplecheckemulatorrooted)
* [`simpleCheckSDKBF86Rooted()`](#simplechecksdkbf86rooted)
* [`simpleCheckQRREFPHRooted()`](#simplecheckqrrefphrooted)
* [`simpleCheckBuildRooted()`](#simplecheckbuildrooted)
* [`checkGenymotionRooted()`](#checkgenymotionrooted)
* [`checkGenericRooted()`](#checkgenericrooted)
* [`checkGoogleSDKRooted()`](#checkgooglesdkrooted)
* [`getDeviceInfo()`](#getdeviceinfo)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isRooted()

```typescript
isRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isRootedWithBusyBox()

```typescript
isRootedWithBusyBox() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isRootedWithEmulator()

```typescript
isRootedWithEmulator() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isRootedWithBusyBoxWithEmulator()

```typescript
isRootedWithBusyBoxWithEmulator() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isDetectRootManagementAppsRooted()

```typescript
isDetectRootManagementAppsRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isDetectPotentiallyDangerousAppsRooted()

```typescript
isDetectPotentiallyDangerousAppsRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isTestKeysRooted()

```typescript
isTestKeysRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isCheckForBusyBoxBinaryRooted()

```typescript
isCheckForBusyBoxBinaryRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isCheckForSuBinaryRooted()

```typescript
isCheckForSuBinaryRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isCheckSuExistsRooted()

```typescript
isCheckSuExistsRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isCheckForRWPathsRooted()

```typescript
isCheckForRWPathsRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isCheckForDangerousPropsRooted()

```typescript
isCheckForDangerousPropsRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isCheckForRootNativeRooted()

```typescript
isCheckForRootNativeRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isDetectRootCloakingAppsRooted()

```typescript
isDetectRootCloakingAppsRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isSelinuxFlagInEnabled()

```typescript
isSelinuxFlagInEnabled() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isExistBuildTagsRooted()

```typescript
isExistBuildTagsRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### doesSuperuserApkExistRooted()

```typescript
doesSuperuserApkExistRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isExistSUPathRooted()

```typescript
isExistSUPathRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isCheckDirPermissionsRooted()

```typescript
isCheckDirPermissionsRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isCheckExecutingCommandsRooted()

```typescript
isCheckExecutingCommandsRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isCheckInstalledPackagesRooted()

```typescript
isCheckInstalledPackagesRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isCheckforOverTheAirCertificatesRooted()

```typescript
isCheckforOverTheAirCertificatesRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isRunningOnEmulatorRooted()

```typescript
isRunningOnEmulatorRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### isRunningOnEmulator()

```typescript
isRunningOnEmulator() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### simpleCheckEmulatorRooted()

```typescript
simpleCheckEmulatorRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### simpleCheckSDKBF86Rooted()

```typescript
simpleCheckSDKBF86Rooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### simpleCheckQRREFPHRooted()

```typescript
simpleCheckQRREFPHRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### simpleCheckBuildRooted()

```typescript
simpleCheckBuildRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### checkGenymotionRooted()

```typescript
checkGenymotionRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### checkGenericRooted()

```typescript
checkGenericRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### checkGoogleSDKRooted()

```typescript
checkGoogleSDKRooted() => Promise<{ isRooted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

--------------------


### getDeviceInfo()

```typescript
getDeviceInfo() => Promise<DeviceInfo>
```

**Returns:** <code>Promise&lt;<a href="#deviceinfo">DeviceInfo</a>&gt;</code>

--------------------


### Interfaces


#### DeviceInfo

| Prop                | Type                |
| ------------------- | ------------------- |
| **`DEVICE`**        | <code>string</code> |
| **`MODEL`**         | <code>string</code> |
| **`MANUFACTURER`**  | <code>string</code> |
| **`BRAND`**         | <code>string</code> |
| **`BOARD`**         | <code>string</code> |
| **`HARDWARE`**      | <code>string</code> |
| **`PRODUCT`**       | <code>string</code> |
| **`FINGERPRINT`**   | <code>string</code> |
| **`HOST`**          | <code>string</code> |
| **`USER`**          | <code>string</code> |
| **`OSNAME`**        | <code>string</code> |
| **`OSVERSION`**     | <code>string</code> |
| **`V_INCREMENTAL`** | <code>string</code> |
| **`V_RELEASE`**     | <code>string</code> |
| **`V_SDK_INT`**     | <code>string</code> |

</docgen-api>
