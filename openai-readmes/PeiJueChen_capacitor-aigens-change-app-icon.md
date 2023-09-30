# capacitor-aigens-change-app-icon

`for Capacitor V3`

capacitor plugin: help you change app icon dynamically.

## Install

```bash
npm install capacitor-aigens-change-app-icon
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`changeAppIcon(...)`](#changeappicon)

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

### changeAppIcon(...)

```typescript
changeAppIcon(options: { name: string; allNames: string[]; }) => Promise<{ name: string; allNames: string[]; }>
```

| Param         | Type                                               |
| ------------- | -------------------------------------------------- |
| **`options`** | <code>{ name: string; allNames: string[]; }</code> |

**Returns:** <code>Promise&lt;{ name: string; allNames: string[]; }&gt;</code>

---

</docgen-api>

### USE

- this capacitor v3 plugin

```typescript
    import { ChangeAppIcon } from "capacitor-aigens-change-app-icon";
    const allNames = [
      'com.xx.xxx.app.MainActivity',  //main
      'com.xx.xxx.app.1Activity',
      'com.xx.xxx.app.2tivity',
    ]
    const isIos = Capacitor.getPlatform() == 'ios';
    const p = {
        name: isIos ? 'xx' : 'com.xx.xxx.app.1Activity'
        allNames,
    }

    // to main
    // const p = {
    //     name: isIos ? 'main' : 'com.xx.xxx.app.MainActivity'
    //     allNames,
    // }
    ChangeAppIcon.changeAppIcon(p);

```

### Config

- android

```xml
    at your AndroidManifest.xml , under application , add
    <!-- mipmap put your launcher icon -->
    <activity-alias
      android:name=".1Activity"
      android:label="@string/app_name"
      android:icon="@mipmap/1_ic_launcher"
      android:roundIcon="@mipmap/1_ic_launcher_round"
      android:enabled="false"
      android:exported="true"
      android:targetActivity=".MainActivity"
      >
      <intent-filter>
        <action android:name="android.intent.action.MAIN"/>
        <category android:name="android.intent.category.LAUNCHER"/>
      </intent-filter>
    </activity-alias>

    <activity-alias
      android:name=".2Activity"
      android:label="@string/app_name"
      android:icon="@mipmap/2_ic_launcher"
      android:roundIcon="@mipmap/3_ic_launcher_round"
      android:enabled="false"
      android:exported="true"
      android:targetActivity=".MainActivity" >
      <intent-filter>
        <action android:name="android.intent.action.MAIN"/>
        <category android:name="android.intent.category.LAUNCHER"/>
      </intent-filter>
    </activity-alias>

```

```plist
at your app info.plist, add

<key>CFBundleIcons</key>
	<dict>
		<key>CFBundleAlternateIcons</key>
		<dict>
			<key>xx</key>
			<dict>
				<key>CFBundleIconFiles</key>
				<array>
                    <string>1-icon</string>
					<string>1-icon-20</string>
                    <string>1-icon-29</string>
                    <string>1-icon-30</string>
                    <string>1-icon-40</string>
                    <string>1-icon-60</string>
                    <string>1-icon-76</string>
                    <string>1-icon-83.5</string>
                    <string>1-icon-1024</string>
				</array>
				<key>UIPrerenderedIcon</key>
				<false/>
			</dict>
		</dict>
		<key>CFBundlePrimaryIcon</key>
		<dict>
			<key>CFBundleIconFiles</key>
			<array>
				<string></string>
			</array>
			<key>UIPrerenderedIcon</key>
			<false/>
		</dict>
		<key>UINewsstandIcon</key>
		<dict>
			<key>CFBundleIconFiles</key>
			<array>
				<string></string>
			</array>
			<key>UINewsstandBindingType</key>
			<string>UINewsstandBindingTypeMagazine</string>
			<key>UINewsstandBindingEdge</key>
			<string>UINewsstandBindingEdgeLeft</string>
		</dict>
	</dict>

```
