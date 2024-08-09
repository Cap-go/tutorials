# otpless-ionic

Otpless ionic plugin support for android and ios apps

## Install

```bash
npm install otpless-ionic
npx cap sync
```
<br><br>

## Login Page API
<br>

### IONIC
#### Import the OtplessManager

```
import {OtplessManager} from 'otpless-ionic';
```

<br>

#### In your login component create the instance of OtplessManager.

```
let manager = new OtplessManager()
```

#### Call showOtplessLoginPage method on button click or while loading component to launch OTPless sdk
```
let jsonParams = {appId: "APP_ID"}
const data = await manager.showOtplessLoginPage(jsonParams);
```

### IOS
* Go to your application root folder and install pod. Run the below command
```
pod install
```

*  Add below lines in info.plist file
```
<key>CFBundleURLTypes</key>
 <array>
  <dict>
   <key>CFBundleURLSchemes</key> 
   <array>
    <stringotpless.your_app_id_in_lowercase</string> 
   </array>
   <key>CFBundleTypeRole</key>
   <string>Editor</string>
   <key>CFBundleURLName</key>
   <string>otpless</string> 
 </dict>
</array> 
<key>LSApplicationQueriesSchemes</key> 
<array>
 <string>whatsapp</string>
 <string>otpless</string> 
 <string>gootpless</string>
 <string>com.otpless.ios.app.otpless</string> 
 <string>googlegmail</string>
</array>

<key>NSAppTransportSecurity</key>
        <dict>
            <key>NSAllowsArbitraryLoads</key>
            <true/>
            <key>NSExceptionDomains</key>
            <dict>
                <key>80.in.safr.sekuramobile.com</key>
                <dict>
                    <key>NSIncludesSubdomains</key>
                    <true/>
                    <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
                    <true/>
                    <key>NSTemporaryExceptionMinimumTLSVersion</key>
                    <string>TLSv1.1</string>
                </dict>
                <key>partnerapi.jio.com</key>
                <dict>
                    <key>NSIncludesSubdomains</key>
                    <true/>
                    <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
                    <true/>
                    <key>NSTemporaryExceptionMinimumTLSVersion</key>
                    <string>TLSv1.1</string>
                </dict>
            </dict>
        </dict>

```

* Add application method in your AppDelegate

```
import OtplessSDK
```
```
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        if (Otpless.sharedInstance.isOtplessDeeplink(url: url)) {
            Otpless.sharedInstance.processOtplessDeeplink(url: url)
            return true
        }
        return ApplicationDelegateProxy.shared.application(app, open: url, options: options)
    }


}
```
<br>

### Android
* In MainActivity register the plugin, before calling `super.onCreate`.
```
import com.otpless.ionic.OtplessPlugin;
```
```
protected void onCreate(Bundle savedInstanceState) {
  registerPlugin(OtplessPlugin.class);
  super.onCreate(savedInstanceState);
}

@Override
public void onBackPressed() {
    if (OtplessPlugin.onBackPressed(this)) return;
    super.onBackPressed();
}
```

* In AndroidManifest file added the intent filter in activity tag of your MainActivity
```
<intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data
        android:host="otpless"
        android:scheme= "otpless.your_app_id_in_lowercase"/>
</intent-filter>
```

<br><br><br>
## Headless API

### IONIC

* Import the OtplessManager

```
import {OtplessManager} from 'otpless-ionic';
```

<br>

* In your login component create the instance of OtplessManager.

```
let manager = new OtplessManager()
```

* Init the headless sdk in useEffect webhook
```
useEffect(() => {
    manager.initHeadless("APP_ID");
    manager.setHeadlessCallback(onHeadlessResult);
    return () => {
      manager.clearListener();
    }
  }, []);
```

```
const onHeadlessResult = (data: any) => {
    let message: string = JSON.stringify(data);
    console.log(message);
  }
```

#### create phone number request for headless initialization
```
 headlessRequest = {
          "phone": phoneNumber,
          "countryCode": "91"
        }
```
* for verification otp field is required
```
 headlessRequest = {
          "phone": phoneNumber,
          "countryCode": "91",
          "otp": otp
        }
```

#### create email request for headless initialization
```
 headlessRequest = {
          "email": email
        
        }
```
* for verification otp field is required
```
 headlessRequest = {
          "email": email,
          "otp": otp
        }
```

#### create sso request like whatsapp for headless initialization
```
headlessRequest = {
        "channelType": WHATSAPP
      }
```
* for verification otp field is required, in case of magic link no verification call is required, it is handled by sdk when user click on link.
```
headlessRequest = {
        "channelType": WHATSAPP,
        "otp": otp
      }
```


#### call startHeadless result is given in onHeadlessResult method

```
await manager.startHeadless(headlessRequest);
```

### IOS
* Go to your application root folder and install pod. Run the below command
```
pod install
```

*  Add below lines in info.plist file
```
<key>CFBundleURLTypes</key>
 <array>
  <dict>
   <key>CFBundleURLSchemes</key> 
   <array>
    <stringotpless.your_app_id_in_lowercase</string> 
   </array>
   <key>CFBundleTypeRole</key>
   <string>Editor</string>
   <key>CFBundleURLName</key>
   <string>otpless</string> 
 </dict>
</array> 
<key>LSApplicationQueriesSchemes</key> 
<array>
 <string>whatsapp</string>
 <string>otpless</string> 
 <string>gootpless</string>
 <string>com.otpless.ios.app.otpless</string> 
 <string>googlegmail</string>
</array>

<key>NSAppTransportSecurity</key>
        <dict>
            <key>NSAllowsArbitraryLoads</key>
            <true/>
            <key>NSExceptionDomains</key>
            <dict>
                <key>80.in.safr.sekuramobile.com</key>
                <dict>
                    <key>NSIncludesSubdomains</key>
                    <true/>
                    <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
                    <true/>
                    <key>NSTemporaryExceptionMinimumTLSVersion</key>
                    <string>TLSv1.1</string>
                </dict>
                <key>partnerapi.jio.com</key>
                <dict>
                    <key>NSIncludesSubdomains</key>
                    <true/>
                    <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
                    <true/>
                    <key>NSTemporaryExceptionMinimumTLSVersion</key>
                    <string>TLSv1.1</string>
                </dict>
            </dict>
        </dict>

```

* Add application method in your AppDelegate

```
import OtplessSDK
```
```
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        if (Otpless.sharedInstance.isOtplessDeeplink(url: url)) {
            Otpless.sharedInstance.processOtplessDeeplink(url: url)
            return true
        }
        return ApplicationDelegateProxy.shared.application(app, open: url, options: options)
    }


}
```
<br>

### Android
* In MainActivity register the plugin, before calling `super.onCreate`.
```
import com.otpless.ionic.OtplessPlugin;
```
```
protected void onCreate(Bundle savedInstanceState) {
  registerPlugin(OtplessPlugin.class);
  super.onCreate(savedInstanceState);
}

@Override
public void onBackPressed() {
    if (OtplessPlugin.onBackPressed(this)) return;
    super.onBackPressed();
}
```

* In AndroidManifest file added the intent filter in activity tag of your MainActivity
```
<intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data
        android:host="otpless"
        android:scheme= "otpless.your_app_id_in_lowercase"/>
</intent-filter>
```


