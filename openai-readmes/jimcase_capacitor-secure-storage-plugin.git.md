# Capacitor Secure Storage Plugin

[![NPM Version](https://img.shields.io/npm/v/%40jimcase%2Fcapacitor-secure-storage-plugin)](https://www.npmjs.com/package/@jimcase/capacitor-secure-storage-plugin)
[![NPM Downloads](https://img.shields.io/npm/dy/%40jimcase%2Fcapacitor-secure-storage-plugin)](https://www.npmjs.com/package/@jimcase/capacitor-secure-storage-plugin)
![NPM Unpacked Size (with version)](https://img.shields.io/npm/unpacked-size/%40jimcase%2Fcapacitor-secure-storage-plugin/latest)
![GitHub last commit](https://img.shields.io/github/last-commit/jimcase/capacitor-secure-storage-plugin)
[![GitHub branch check runs](https://img.shields.io/github/check-runs/jimcase/capacitor-secure-storage-plugin/main)]([URL](https://github.com/jimcase/capacitor-secure-storage-plugin/actions))

Capacitor plugin for storing string values securly on iOS and Android.

## How to install

### Capacitor 6

```
npm install @jimcase/capacitor-secure-storage-plugin
```

### Capacitor 5

```
npm install @jimcase/capacitor-secure-storage-plugin@1.0.2
```

### Older versions

For version lower than 5 please refer to https://github.com/martinkasa/capacitor-secure-storage-plugin

## Compatibility

### iOS 15.0+
### Android API Level 29+

## Usage

```typescript
import { SecureStoragePlugin } from '@jimcase/capacitor-secure-storage-plugin';
```
## Example

```ts
const key = 'username';
const value = 'hellokitty2';

SecureStoragePlugin.set({ key, value })
  .then(success => console.log(success))
```

```ts
const key = 'username';
SecureStoragePlugin.get({ key })
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log('Item with specified key does not exist.');
  });
```

```ts
async getUsername(key: string) {
  return await SecureStoragePlugin.get({ key });
}
```

## API

<docgen-index>

* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### Interfaces


#### SecureStoragePluginInterface

| Prop              | Type                                                                                                                                                                 |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`get`**         | <code>(options: { key: string; accessibility?: string; group?: string; isSynchronizable?: boolean; }) =&gt; Promise&lt;{ value: string; }&gt;</code>                 |
| **`set`**         | <code>(options: { key: string; value: string; accessibility?: string; group?: string; isSynchronizable?: boolean; }) =&gt; Promise&lt;{ value: boolean; }&gt;</code> |
| **`remove`**      | <code>(options: { key: string; accessibility?: string; group?: string; isSynchronizable?: boolean; }) =&gt; Promise&lt;{ value: boolean; }&gt;</code>                |
| **`clear`**       | <code>(options?: { accessibility?: string; group?: string; isSynchronizable?: boolean; }) =&gt; Promise&lt;{ value: boolean; }&gt;</code>                            |
| **`keys`**        | <code>(options?: { accessibility?: string; group?: string; }) =&gt; Promise&lt;{ value: string[]; }&gt;</code>                                                       |
| **`getPlatform`** | <code>() =&gt; Promise&lt;{ value: string; }&gt;</code>                                                                                                              |

</docgen-api>

## Platform specific information

### iOS

This plugin uses the SimpleKeychain Swift library for iOS.

### Android

On Android, it is implemented using AndroidKeyStore, SharedPreferences, and EncryptedSharedPreferences for enhanced security. This approach uses modern encryption standards to ensure data security on devices with Android Marshmallow and above.

### Web

There is no secure storage in browser (not because it is not implemented by this plugin, but it does not exist at all). Values are stored in LocalStorage, but they are at least base64 encoded. Plugin adds 'cap*sec*' prefix to keys to avoid conflicts with other data stored in LocalStorage.
