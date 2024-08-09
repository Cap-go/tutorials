# capacitor-installer-info

Capacitor plugin to obtain information about the installation source of the application

This plugin ONLY supports Android (methods exist but reject on other platforms when called)! 
This is because there is not an installer for websites, and the installer for iOS/iPadOS apps is always the App Store. 

Note that, if shipping iOS apps for installation on MacOS becomes common, it might be relevant to detect the installation source for iOS apps on MacOS, and jailbroken devices do exist. 

## Install

```bash
npm install capacitor-installer-info
npx cap sync
```

## API

<docgen-index>

* [`getInstallSourceInfo(...)`](#getinstallsourceinfo)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getInstallSourceInfo(...)

```typescript
getInstallSourceInfo(details: Record<string, string> | undefined) => Promise<Record<string, string>>
```

Obtain the installation source information for the given package name using PackageManager.getInstallSourceInfo
Rejects on non-Android platforms. Returned values may vary by Android API level.
Output example:
{
  installingPackageName: "com.android.vending",
  originatingPackageName: "",
  initiatingPackageName: "com.android.vending"
}

When "" (empty string) is returned, the value was null from the PackageManager API.
When no value is returned for a key, the value could not be calculated given the Android API level or for other reasons.

| Param         | Type                                                            | Description                                                                                                        |
| ------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **`details`** | <code><a href="#record">Record</a>&lt;string, string&gt;</code> | : string} \| undefined. If packageName undefined or no object passed, the package name of the current app is used. |

**Returns:** <code>Promise&lt;<a href="#record">Record</a>&lt;string, string&gt;&gt;</code>

**Since:** 6.0.0

--------------------


### Type Aliases


#### Record

Construct a type with a set of properties K of type T

<code>{ [P in K]: T; }</code>

</docgen-api>
