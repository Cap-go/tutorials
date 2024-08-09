# root-checker

This plugin is used to detect whether a given device is rooted or not

## Install

```bash
npm install root-checker
npx cap sync
```

## API

<docgen-index>

* [`checkRoot()`](#checkroot)
* [`isDeveloperModeEnable()`](#isdevelopermodeenable)
* [`isEmulatorPresent()`](#isemulatorpresent)
* [`getCpuArchitecture()`](#getcpuarchitecture)
* [`openDeveloperSetting()`](#opendevelopersetting)
* [`isADBEnabled()`](#isadbenabled)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### checkRoot()

```typescript
checkRoot() => Promise<{ isRooted: boolean; }>
```

Get information about device root status

**Returns:** <code>Promise&lt;{ isRooted: boolean; }&gt;</code>

**Since:** 1.0.0

--------------------


### isDeveloperModeEnable()

```typescript
isDeveloperModeEnable() => Promise<{ isEnabled: boolean; }>
```

Get whether developer mode is enabled on user device or not

**Returns:** <code>Promise&lt;{ isEnabled: boolean; }&gt;</code>

**Since:** 1.0.0

--------------------


### isEmulatorPresent()

```typescript
isEmulatorPresent() => Promise<{ isEmulator: boolean; }>
```

Get whether the app is being run on an emulator or not

**Returns:** <code>Promise&lt;{ isEmulator: boolean; }&gt;</code>

**Since:** 1.0.0

--------------------


### getCpuArchitecture()

```typescript
getCpuArchitecture() => Promise<{ cpuArch: string; }>
```

Get information about CPU architecture

**Returns:** <code>Promise&lt;{ cpuArch: string; }&gt;</code>

**Since:** 1.1.0

--------------------


### openDeveloperSetting()

```typescript
openDeveloperSetting() => Promise<void>
```

Redirect to user's device's developer setting, usually to turn off developer mode

**Since:** 1.2.0

--------------------


### isADBEnabled()

```typescript
isADBEnabled() => Promise<{ isADBEnabled: boolean; }>
```

Returns whether ADB is enabled in user's device or not

**Returns:** <code>Promise&lt;{ isADBEnabled: boolean; }&gt;</code>

**Since:** 1.2.2

--------------------

</docgen-api>
