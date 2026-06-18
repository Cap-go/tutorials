```markdown
---
"title": "Using @capgo/capacitor-android-usagestatsmanager Package",
"description": "Learn how to utilize the @capgo/capacitor-android-usagestatsmanager package in your Capacitor project for accessing app usage statistics on Android devices.",
"created_at": "2022-01-15",
"published": true,
"slug": "capacitor-android-usagestatsmanager.git"
---

# Using @capgo/capacitor-android-usagestatsmanager Package

In this tutorial, we will explore how to incorporate the `@capgo/capacitor-android-usagestatsmanager` package into your Capacitor project to access app usage statistics on Android devices.

## Installation

First, install the package using npm:

```bash
npm install @capgo/capacitor-android-usagestatsmanager
npx cap sync
```

## Usage

### Request Usage Stats Permission

To access usage stats, you need to request permission from the user. Update your AndroidManifest.xml to include:

```xml
<uses-permission android:name="android.permission.PACKAGE_USAGE_STATS" tools:ignore="ProtectedPermissions" />
```

### Query App Usage

You can query app usage data using the following example function:

```javascript
import { Plugins } from '@capacitor/core';
const { AndroidUsageStatsManager } = Plugins;

const getAppUsageStats = async () => {
  try {
    const stats = await AndroidUsageStatsManager.getUsageStats();
    console.log(stats);
  } catch (error) {
    console.error(error);
  }
};

getAppUsageStats();
```

## Conclusion

By following this tutorial, you should now be able to integrate the `@capgo/capacitor-android-usagestatsmanager` package into your Capacitor project and retrieve app usage statistics on Android devices.
```