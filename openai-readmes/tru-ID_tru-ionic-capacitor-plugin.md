# tru.ID Plugin for Ionic & Capacitor.

## Installation

```bash
npm install @tru_id/tru-plugin-ionic-capacitor
ionic build
ionic cap sync
```

For Android, update the following in `android/build.gradle` to:

```gradle
allprojects {
    repositories {
        google()
        jcenter()
        maven {
            url "https://gitlab.com/api/v4/projects/22035475/packages/maven"
        }
    }
}
```

Update the following in `android/app/build.gradle` to:

```gradle
dependencies {
      implementation "com.squareup.okhttp3:okhttp:4.9.0"
      implementation "org.jetbrains.kotlinx:kotlinx-serialization-json:1.2.2
}
```

Add the plugin to your app's `MainActivity` `onCreate` method:

```java
import com.trupluginioniccapacitor.TruPluginIonicCapacitorPlugin;

@Override
public void onCreate(Bundle savedInstance){
    super.onCreate(savedInstance);
    registerPlugin(TruPluginIonicCapacitorPlugin.class);
}
```

```kotlin
import com.trupluginioniccapacitor.TruPluginIonicCapacitorPlugin

 public override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        registerPlugin(TruPluginIonicCapacitorPlugin::class.java)
    }
```

## Compatibility

- Minimum Android SDK: TruSDK requires a minimum API level of 21 (Android 5).
- Compile Android SDK: TruSDK requires you to compile against API 30 (Android 11 or later).
- Minimun deployment target for iOS is iOS 12.
- Minimum Swift version is 5.3.

## Usage

```tsx
import { TruPluginIonicCapacitor } from '@tru_id/tru-plugin-ionic-capacitor'

// Test if the device mobile network is currently supported
const reachabilityDetails = await TruPluginIonicCapacitor.isReachable()

// Make a GET request using the cellular connection to the tru.ID check URL
const checkDetails = await TruPluginIonicCapacitor.check({ url: check_url })

console.log('Check results', checkDetails.result)

console.log('Reachability details', reachabilityDetails.result)
```
