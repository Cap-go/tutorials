<h3 align="center">Capacitor Phone Event Usage</h3>
<p align="center"><strong><code>capacitor-phone-event-usage</code></strong></p>
<p align="center">A capacitor plugin to track phone app usage.</p>

## Maintainers

| Maintainer       | GitHub                              | Social                                         |
| ---------------- | ----------------------------------- | ---------------------------------------------- |
| Daniel Leightley | [DrDanL](https://github.com/DrDanL) | [@\_Dr_Daniel](https://twitter.com/_Dr_Daniel) |

Maintenance Status: Actively Maintained.

Hudge credit to [ciitamjadibraheem UsageStats Package](https://github.com/ciitamjadibraheem/UsageStats).

**This is an early release and the plugin requires further development. All contributions welcome.**

## Installation

Using npm:

```bash
npm install capacitor-phone-event-usage
```

Sync native files:

```bash
npx cap sync
```

On Android, register the plugin in your main activity:

```java
import cap.phone.usage.PhoneEventUsage;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(
        savedInstanceState,
        new ArrayList<Class<? extends Plugin>>() {
          {
            // Additional plugins you've installed go here
            // Ex: add(TotallyAwesomePlugin.class);
            add(PhoneEventUsage.class);
          }
        }
      );
  }
}
```

In the Android Manifest add system level permission.

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" xmlns:tools="http://schemas.android.com/tools" package="kcmhr.tsyp.ration">
    <!-- Android app usage system level call -->
    <uses-permission android:name="android.permission.PACKAGE_USAGE_STATS" tools:ignore="ProtectedPermissions"/>
</manifest>

```

## Configuration

No configuration is required for this plugin.

## Examples

You can also clone the repository:

```bash
git clone https://github.com/DrDanL/capacitor-phone-event-usage
git checkout -b capacitor-phone-event-usage
```

## Supported methods

| Name                | Android | iOS | Web |
| :------------------ | :------ | :-- | :-- |
| enable              | ✅      | ❌  | ❌  |
| getPermissionStatus | ✅      | ❌  | ❌  |
| getAppUsage         | ✅      | ❌  | ❌  |

## Usage

Below is an example of how to run the plugin.

```typescript
import { Plugins } from '@capacitor/core';
import 'capacitor-phone-event-usage';
const { PhoneEventUsage, Device, Modals } = Plugins;

@Component(...)
export class MyPage {

  async getPermission() {

    //Direct user to local permission page
    await PhoneEventUsage.enable();
  }

  async checkPermission() {

    const info = await Device.getInfo();
    if (info.platform === "android") {
      //Currently this plugin only works with Android.

      //Check to see if the has has provided permission
      const result = await PhoneEventUsage.getPermissionStatus();

      //Perform action
      }
    } else {
      console.log('iOS platform')
    }
  }

  async getAppUsage() {
    const info = await Device.getInfo();
    if (info.platform === "android") {
      //Currently this plugin only works with Android.

      //Get app usage data - input is the number of days from today
      const result = await PhoneEventUsage.getAppUsage(10);

      //Perform action
      }
    } else {
      console.log('iOS platform')
    }
  }
}

```

## Further info

- [Android](https://developer.android.com/reference/android/app/usage/UsageStats)
