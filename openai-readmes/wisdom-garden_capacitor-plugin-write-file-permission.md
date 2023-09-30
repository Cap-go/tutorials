Capacitor Android `android.permission.WRITE_EXTERNAL_STORAGE`, `android.permission.MANAGE_EXTERNAL_STORAGE` permission sometimes requested at runtime. but Capacitor built in [Permission](https://capacitorjs.com/docs/apis/permissions) not support WRITE_EXTERNAL_STORAGE. so DIY. Android 11+ is supported.

# Install

```bash
yarn add capacitor-plugin-write-file-permission
```

or

```bash
npm install capacitor-plugin-write-file-permission
```

# Usage

AndroidManifest.xml

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.MANAGE_EXTERNAL_STORAGE" />
```

```javascript
import { Plugins } from "@capacitor/core";
import { WriteFilePermissionPlugin } from "capacitor-plugin-write-file-permission";


const WriteFilePermission = Plugins.WriteFilePermission as WriteFilePermissionPlugin;

const permission = await WriteFilePermission.check({ permissionName: "WriteExternalStorage" });

if (!permission.result) {
  await WriteFilePermission.request({ permissionName: "WriteExternalStorage" });
}

```
