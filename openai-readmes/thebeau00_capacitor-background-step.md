# capacitor-background-step

capacitor plugin for counting step works in background.

## Platform caution

This capacitor plugin is only for android project.

## IOS

I recommend [cordova health plugin](https://github.com/dariosalvi78/cordova-plugin-health).
But cordova health plugin is not recommended on android device. Because it needs installing Google Fit App.

## Install

```bash
npm install capacitor-background-step
ionic cap sync
ionic cap build android

```

## Modify main AndroidManifest.xml in Android studio

```
    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme"
        android:exported="true"> <!-- Add android:exported="true" -->
```

```
        <!-- Add service & receiver tags in application tag -->
        <service
          android:name="com.naeiut.plugins.backgroundstep.StepCountBackgroundService"
          android:enabled="true"
          android:exported="true"></service>

        <receiver
          android:name="com.naeiut.plugins.backgroundstep.RestartService"
          android:enabled="true"
          android:exported="false"
          android:label="RestartServiceWhenStopped"
          android:permission="android.permission.RECEIVE_BOOT_COMPLETED">
          <intent-filter>
            <action android:name="RestartService" />
          </intent-filter>
        </receiver>
```

```
    <!-- Add 2 lines -->
    <uses-permission android:name="android.permission.ACTIVITY_RECOGNITION" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
```

## Modify MainActivity.java in Android studio

```
public class MainActivity extends BridgeActivity {

  // Add onCreate & onRequestPermissionsResult Method
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // check & gain permission & start service
    int permission = ContextCompat.checkSelfPermission(this, Manifest.permission.ACTIVITY_RECOGNITION);
    if(permission == PackageManager.PERMISSION_GRANTED) {
      // start service
      BackgroundstepPlugin.startService(this,this);
      BackgroundstepPlugin.startServiceViaWorker(this);
    }
    else {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
        requestPermissions(new String[]{Manifest.permission.ACTIVITY_RECOGNITION},1);
      }
    }

  }

  @Override
  public void onRequestPermissionsResult(int requestCode, String permissions[], int[] grantResults) {
    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    switch (requestCode) {
      case 1: {
        // start service after gaining permission
        BackgroundstepPlugin.startService(this,this);
        BackgroundstepPlugin.startServiceViaWorker(this);
      }
    }
  }

}
```

## Configure notification

You can set some values in android/src/main/res directory.

## Usage

```
import { Backgroundstep } from 'capacitor-background-step';

...

Backgroundstep.getToday().then((data:any) => {
  console.log('Today step total:',data);
});

Backgroundstep.getStepData({ sDateTime: '2022-07-29 06:00:00', eDateTime: '2022-07-29 09:00:00'}).then((data:any) => {
  console.log('3 Hours total:',data);
});

```

## API

Method 'echo' is not concern to this plugin.

<docgen-index>

- [`echo(...)`](#echo)
- [`getToday()`](#gettoday)
- [`getStepData(...)`](#getstepdata)
- [Interfaces](#interfaces)

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

### getToday()

```typescript
getToday() => Promise<StepDataInterface>
```

**Returns:** <code>Promise&lt;<a href="#stepdatainterface">StepDataInterface</a>&gt;</code>

---

### getStepData(...)

```typescript
getStepData(term: { sDateTime: string; eDateTime: string; }) => Promise<StepDataInterface>
```

| Param      | Type                                                   |
| ---------- | ------------------------------------------------------ |
| **`term`** | <code>{ sDateTime: string; eDateTime: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#stepdatainterface">StepDataInterface</a>&gt;</code>

---

### Interfaces

#### StepDataInterface

| Prop        | Type                |
| ----------- | ------------------- |
| **`count`** | <code>number</code> |

</docgen-api>

# Step counting note

```
https://github.com/Park9eon/background-step-counter

The above repository stores count & SQLITE work well, but it does not provide background service.

```

# Background service note

```
https://gist.github.com/varunon9/f2beec0a743c96708eb0ef971a9ff9cd
https://github.com/varunon9/DynamicWallpaper/tree/always_running_service

The background service will work only if you use WorkManager.
```
