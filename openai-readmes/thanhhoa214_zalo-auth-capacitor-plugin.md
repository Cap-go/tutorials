# zalo-auth-capacitor-plugin

Zalo Authenticate through CapacitorJS

Currently, I don't plan for maintainance. Instead, mail to me (thanhthanhhoa123@gmail.com) if need any help. Thanks for using my plugins!

### 🎉 Happy to check your Pull Request at anytime.

<br/>
<br/>

## Installation:

```bash
npm install zalo-auth-capacitor-plugin
npx cap sync
```

## Configuration:

### 1. iOS:

#### 1. In `ios/App/Podfile`:

Inside `target 'App'`, append:

```pod
target 'App' do
  capacitor_pods
  # Add your Pods here
  ...
  pod 'ZaloSDK'
  ...
end
```

#### 2. In `ios/App/App/AppDelegate.swift`:

1. Add to import list:

```swift
import ZaloSDK
```

2. Inside `AppDelegate` class, take changes in 2 methods below:

```swift
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    ...
    ZaloSDK.sharedInstance()?.initialize(withAppId: "APP_ID_FROM_ZALO_DEVELOPER");
    ...
    return true
  }
```

```swift
  func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
    ...
    if CAPBridge.handleOpenUrl(url, options) {
      if url.absoluteString.hasPrefix("zalo-APP_ID_FROM_ZALO_DEVELOPER") {
        return ((ZDKApplicationDelegate.sharedInstance()?.application(app, open: url, options: options)) != nil);
      }
    }
    ...
    return false;
  }
```

#### 2. In `ios/App/App/Info.plist`:

Append or fill out these lines:

```xml
...
<key>CFBundleURLTypes</key>
<array>
  ...
  <dict>
    <key>CFBundleTypeRole</key>
    <string>Editor</string>
    <key>CFBundleURLName</key>
    <string>zalo</string>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>zalo-APP_ID_FROM_ZALO_DEVELOPER</string>
    </array>
  </dict>
  ...
</array>
...
```

### 2. Android:

#### 1. In `android/src/build.gradle`:

Inside `dependencies { ... }`, append:

```java
implementation "com.zing.zalo.zalosdk:core:+"
implementation "com.zing.zalo.zalosdk:auth:+"
implementation "com.zing.zalo.zalosdk:openapi:+"
```

#### 2. In `android/src/main/java/..../MainActivity.java`:

1. Import class.
   ```java
   import com.zing.zalo.zalosdk.oauth.ZaloSDK;
   ```
2. In the callback of `this.init(savedInstanceState, ....), append:
   ```java
   add(com.rin.zaloauth.ZaloAuthCapacitorPlugin.class);
   ```
3. In `onActivityResult` method, under `super.onActivityResult(requestCode, resultCode, data);` append:
   ```java
   ZaloSDK.Instance.onActivityResult(this, requestCode, resultCode, data);
   ```

#### 3. In `android/src/main/res/values/strings.xml`:

Inside `resources`, create Zalo App on [Zalo Developer](https://developers.zalo.me/), get back `APP_ID` (may be similar `42735613396xxxx150`):

```xml
<resources>
    ...
    <string name="zalo_app_id">APP_ID_FROM_ZALO_DEVELOPER</string>
    <string name="zalo_login_protocol_scheme">zalo-APP_ID_FROM_ZALO_DEVELOPER</string>
    ...
</resources>
```

#### 4. In `android/src/main/AndroidManifest.xml`:

1. Add `name` attribute to your application.

```xml
<application
    android:name="com.zing.zalo.zalosdk.oauth.ZaloSDKApplication"
    ...
>
    ...
    <meta-data
        android:name="com.zing.zalo.zalosdk.appID"
        android:value="@string/zalo_app_id"
    />
    <activity
        android:name="com.zing.zalo.zalosdk.oauth.BrowserLoginActivity"
    >
        <intent-filter>
            <action android:name="android.intent.action.VIEW" />
            <category android:name="android.intent.category.DEFAULT" />
            <category android:name="android.intent.category.BROWSABLE" />
            <data android:scheme="@string/zalo_login_protocol_scheme" />
        </intent-filter>
    </activity>

    ...
</application>
```

#### 5. Create Zalo Service for using in your application: (web has not implemented yet)

```typescript
import { Injectable } from '@angular/core'
import { Plugins } from '@capacitor/core'
import { isPlatform } from '@ionic/angular'
import { ShareInput, ZaloAuthCapacitorPlugin, ZaloAuthCapacitorPluginPlugin } from 'zalo-auth-capacitor-plugin'

@Injectable({ providedIn: 'root' })
export class LoginZaloService {
  private _zaloLogin: ZaloAuthCapacitorPluginPlugin

  constructor() {
    this._setupZaloLogin()
  }
  async login() {
    return this._zaloLogin.login()
  }
  async getUserProfileFromZalo() {
    return this._zaloLogin.getUserProfile()
  }
  logout() {
    return this._zaloLogin.logout()
  }
  share(input: ShareInput) {
    return this._zaloLogin.share(input)
  }
  private _setupZaloLogin() {
    if (isPlatform('desktop')) {
      this._zaloLogin = ZaloAuthCapacitorPlugin
    } else {
      this._zaloLogin = Plugins.ZaloAuthCapacitorPlugin as ZaloAuthCapacitorPluginPlugin
    }
  }
}
```

### 3. Web

#### 1. Register Callback URL in https://deverloper.zalo.me/app/YourAppID/login

#### 2. Set up URL Login with Zalo in Login page

```javascript
appID = '*********************'
redirectURI = `Your Callback URL`
zaloLogin = `https://oauth.zaloapp.com/v3/permission?app_id=${appID}&redirect_uri=${redirectURI}&state=${anything}`
```

#### 3. Set up page Redirect

```javascript
const url = new URL(getURL)
const uid = url.searchParams.get('uid') //ID of user
const code = url.searchParams.get('code') //OAuthCode
const state = url.searchParams.get('state') //state in step 2
```
