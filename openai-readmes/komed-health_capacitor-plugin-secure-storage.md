# capacitor-plugin-secure-storage

Capacitor plugin for storing string values securely on Android.

## How to install

```
npm install @komed/capacitor-plugin-secure-storage
```

### Android

You have to register plugins manually in MainActivity class of your app.

https://capacitor.ionicframework.com/docs/plugins/android/#export-to-capacitor

```
import com.komedhealth.plugin.CapacitorSecureStoragePlugin;

...

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(CapacitorSecureStoragePlugin.class);
    }});
  }
}
```

## Usage

In a component where you want to use this plugin add to or modify imports:

```
import { Plugins } from '@capacitor/core';

const { CapacitorSecureStoragePlugin } = Plugins;
```

## Methods

- **get**(options: { key: string }): Promise<{ value: string | null }>
  - if item with specified key does not exist, rerturns null value

* **set**(options: { key: string; value: string }): Promise< void >
* **remove**(options: { key: string }): Promise< void >
* **clear**(): Promise< void >
* **key**() : Promise<{ keys: string[] }>
  - returns array of all existing keys

## Example

```
const key = 'name';
const value = 'charlie';

await CapacitorSecureStoragePlugin.set({ key, value })
```

```
const key = 'name';
const data = CapacitorSecureStoragePlugin.get({ key })
console.log(data);
console.log(data.value);
```

## Platform specific information

### Android

On Android it is implemented by [AndroidX Security Library](https://developer.android.com/reference/androidx/security/crypto/package-summary)

In order to use this plugin we need to migrate app to the AndroidX.
More information about migration can be found here.
https://developer.android.com/jetpack/androidx/migrate#migrate_an_existing_project_using_android_studio

##### Warning

For Android minSdk must be >= 23, in order to use the plugin.

### Web

There is no secure storage in browser (not because it is not implemented by this plugin, but it does not exist at all). Values are stored in LocalStorage, but they are at least base64 encoded. Plugin adds **cap*sec*** prefix to keys to avoid conflicts with other data stored in LocalStorage.
