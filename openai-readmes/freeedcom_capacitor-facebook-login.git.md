<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="128" height="128" /></p>
<h3 align="center">Capacitor Facebook Login</h3>
<p align="center"><strong><code>@freeedcom/capacitor-facebook-login</code></strong></p>
<p align="center">
  A fork of <a href="https://github.com/capacitor-community/facebook-login">capacitor-community/facebook-login</a>, which contains Limited Login implementation for iOS platform.
</p>

## Installation

```bash
% npm i --save @freeedcom/capacitor-facebook-login
% npx cap update
```

### Versions

Users of Capacitor v5 should use version v5 of the Plugin.

```bash
% npm install @freeedcom/capacitor-facebook-login@5
```

### Android configuration

In file `android/app/src/main/AndroidManifest.xml`, add the following XML elements under `<manifest><application>` :

```xml
<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
<meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
```

In file `android/app/src/main/res/values/strings.xml` add the following lines :

```xml
<string name="facebook_app_id">[APP_ID]</string>
<string name="facebook_client_token">[CLIENT_TOKEN]</string>
```

Don't forget to replace `[APP_ID]` and `[CLIENT_TOKEN]` by your Facebook application Id.

More information can be found here: https://developers.facebook.com/docs/android/getting-started

#### If you have trouble.

Please restart Android Studio, and do clean build.

### iOS configuration

In file `ios/App/App/AppDelegate.swift` add or replace the following:

```swift
import UIKit
import Capacitor
import FBSDKCoreKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        FBSDKCoreKit.ApplicationDelegate.shared.application(
            application,
            didFinishLaunchingWithOptions: launchOptions
        )

        return true
    }

    ...

    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        // Called when the app was launched with a url. Feel free to add additional processing here,
        // but if you want the App API to support tracking app url opens, make sure to keep this call
        if (FBSDKCoreKit.ApplicationDelegate.shared.application(
            app,
            open: url,
            sourceApplication: options[UIApplication.OpenURLOptionsKey.sourceApplication] as? String,
            annotation: options[UIApplication.OpenURLOptionsKey.annotation]
        )) {
            return true;
        } else {
            return ApplicationDelegateProxy.shared.application(app, open: url, options: options)
        }
    }
}
```

Add the following in the `ios/App/App/info.plist` file inside of the outermost `<dict>`:

```xml

<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>fb[APP_ID]</string>
        </array>
    </dict>
</array>
<key>FacebookAppID</key>
<string>[APP_ID]</string>
<key>FacebookClientToken</key>
<string>[CLIENT_TOKEN]</string>
<key>FacebookDisplayName</key>
<string>[APP_NAME]</string>
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>fbapi</string>
    <string>fbapi20130214</string>
    <string>fbapi20130410</string>
    <string>fbapi20130702</string>
    <string>fbapi20131010</string>
    <string>fbapi20131219</string>
    <string>fbapi20140410</string>
    <string>fbapi20140116</string>
    <string>fbapi20150313</string>
    <string>fbapi20150629</string>
    <string>fbapi20160328</string>
    <string>fbauth</string>
    <string>fb-messenger-share-api</string>
    <string>fbauth2</string>
    <string>fbshareextension</string>
</array>
```

More information can be found here: https://developers.facebook.com/docs/facebook-login/ios

### Web configuration

```typescript
import { FacebookLogin } from '@freeedcom/capacitor-facebook-login';

// use hook after platform dom ready
await FacebookLogin.initialize({ appId: '105890006170720' });
```

More information can be found here: https://developers.facebook.com/docs/facebook-login/web
And you must confirm return type at https://github.com/rdlabo/capacitor-facebook-login/blob/master/src/web.ts#L55-L57
not same type for default web facebook login!

## Example

### Login

```ts
import {
  FacebookLogin,
  FacebookLoginResponse,
} from '@freeedcom/capacitor-facebook-login';

const FACEBOOK_PERMISSIONS = [
  'email',
  'user_birthday',
  'user_photos',
  'user_gender',
];
const result = await (<FacebookLoginResponse>(
  FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS })
));

if (result.accessToken) {
  // Login successful.
  console.log(`Facebook access token is ${result.accessToken.token}`);
}
```

### Limited Login (iOS only)

[Limited Login](https://developers.facebook.com/docs/facebook-login/limited-login/) is a type of login, which is limited in terms of tracking users, with smaller set of [available permissions](https://developers.facebook.com/docs/facebook-login/limited-login/ios) It returns an `AuthenticationToken` that wraps an OpenID Connect token, which client then needs to [validate](https://developers.facebook.com/docs/facebook-login/limited-login/token/validating). The token already contains all the requested data, so interaction with Graph API is not required.

```ts
import {
  FacebookLogin,
  FacebookLimitedLoginResponse,
} from '@freeedcom/capacitor-facebook-login';
import { v4 as uuidv4 } from 'uuid';

const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_gender'];
const result = await (<FacebookLimitedLoginResponse>(
  FacebookLogin.loginLimitedly({
    permissions: FACEBOOK_PERMISSIONS,
    nonce: uuidv4(),
  })
));

if (result.authenticationToken) {
  // Login successful.
  console.log(
    `Facebook authentication token is ${result.authenticationToken.token}`,
  );
}
```

### Logout

```ts
import { FacebookLogin } from '@freeedcom/capacitor-facebook-login';

await FacebookLogin.logout();
```

### CurrentAccessToken

```ts
import {
  FacebookLogin,
  FacebookLoginResponse,
} from '@freeedcom/capacitor-facebook-login';

const result = await (<FacebookLoginResponse>(
  FacebookLogin.getCurrentAccessToken()
));

if (result.accessToken) {
  console.log(`Facebook access token is ${result.accessToken.token}`);
}
```

### Current authentication token (Limited Login, iOS only)

```ts
import {
  FacebookLogin,
  FacebookCurrentAuthenticationTokenResponse,
} from '@freeedcom/capacitor-facebook-login';

const result = await (<FacebookCurrentAuthenticationTokenResponse>(
  FacebookLogin.getCurrentAuthenticationToken()
));

if (result.authenticationToken) {
  console.log(
    `Facebook authentication token is ${result.authenticationToken.token}`,
  );
}
```

### getProfile

```ts
import {
  FacebookLogin,
  FacebookLoginResponse,
} from '@freeedcom/capacitor-facebook-login';

const result = await FacebookLogin.getProfile<{
  email: string;
}>({ fields: ['email'] });

console.log(`Facebook user's email is ${result.email}`);
```

## API

<docgen-index>

* [`initialize(...)`](#initialize)
* [`login(...)`](#login)
* [`loginLimitedly(...)`](#loginlimitedly)
* [`logout()`](#logout)
* [`reauthorize()`](#reauthorize)
* [`getCurrentAccessToken()`](#getcurrentaccesstoken)
* [`getCurrentAuthenticationToken()`](#getcurrentauthenticationtoken)
* [`getProfile(...)`](#getprofile)
* [`logEvent(...)`](#logevent)
* [`setAutoLogAppEventsEnabled(...)`](#setautologappeventsenabled)
* [`setAdvertiserTrackingEnabled(...)`](#setadvertisertrackingenabled)
* [`setAdvertiserIDCollectionEnabled(...)`](#setadvertiseridcollectionenabled)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options: Partial<FacebookConfiguration>) => Promise<void>
```

| Param         | Type                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#partial">Partial</a>&lt;<a href="#facebookconfiguration">FacebookConfiguration</a>&gt;</code> |

--------------------


### login(...)

```typescript
login(options: { permissions: string[]; }) => Promise<FacebookLoginResponse>
```

| Param         | Type                                    |
| ------------- | --------------------------------------- |
| **`options`** | <code>{ permissions: string[]; }</code> |

**Returns:** <code>Promise&lt;<a href="#facebookloginresponse">FacebookLoginResponse</a>&gt;</code>

--------------------


### loginLimitedly(...)

```typescript
loginLimitedly(options: { permissions: string[]; nonce: string; }) => Promise<FacebookLimitedLoginResponse>
```

| Param         | Type                                                   |
| ------------- | ------------------------------------------------------ |
| **`options`** | <code>{ permissions: string[]; nonce: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#facebooklimitedloginresponse">FacebookLimitedLoginResponse</a>&gt;</code>

--------------------


### logout()

```typescript
logout() => Promise<void>
```

--------------------


### reauthorize()

```typescript
reauthorize() => Promise<FacebookLoginResponse>
```

**Returns:** <code>Promise&lt;<a href="#facebookloginresponse">FacebookLoginResponse</a>&gt;</code>

--------------------


### getCurrentAccessToken()

```typescript
getCurrentAccessToken() => Promise<FacebookCurrentAccessTokenResponse>
```

**Returns:** <code>Promise&lt;<a href="#facebookcurrentaccesstokenresponse">FacebookCurrentAccessTokenResponse</a>&gt;</code>

--------------------


### getCurrentAuthenticationToken()

```typescript
getCurrentAuthenticationToken() => Promise<FacebookCurrentAuthenticationTokenResponse>
```

**Returns:** <code>Promise&lt;<a href="#facebookcurrentauthenticationtokenresponse">FacebookCurrentAuthenticationTokenResponse</a>&gt;</code>

--------------------


### getProfile(...)

```typescript
getProfile<T extends Record<string, unknown>>(options: { fields: readonly string[]; }) => Promise<T>
```

| Param         | Type                                        |
| ------------- | ------------------------------------------- |
| **`options`** | <code>{ fields: readonly string[]; }</code> |

**Returns:** <code>Promise&lt;T&gt;</code>

--------------------


### logEvent(...)

```typescript
logEvent(options: { eventName: string; }) => Promise<void>
```

| Param         | Type                                |
| ------------- | ----------------------------------- |
| **`options`** | <code>{ eventName: string; }</code> |

--------------------


### setAutoLogAppEventsEnabled(...)

```typescript
setAutoLogAppEventsEnabled(options: { enabled: boolean; }) => Promise<void>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

--------------------


### setAdvertiserTrackingEnabled(...)

```typescript
setAdvertiserTrackingEnabled(options: { enabled: boolean; }) => Promise<void>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

--------------------


### setAdvertiserIDCollectionEnabled(...)

```typescript
setAdvertiserIDCollectionEnabled(options: { enabled: boolean; }) => Promise<void>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

--------------------


### Interfaces


#### FacebookConfiguration

| Prop                   | Type                 |
| ---------------------- | -------------------- |
| **`appId`**            | <code>string</code>  |
| **`autoLogAppEvents`** | <code>boolean</code> |
| **`xfbml`**            | <code>boolean</code> |
| **`version`**          | <code>string</code>  |
| **`locale`**           | <code>string</code>  |


#### FacebookLoginResponse

| Prop                             | Type                                                        |
| -------------------------------- | ----------------------------------------------------------- |
| **`accessToken`**                | <code><a href="#accesstoken">AccessToken</a> \| null</code> |
| **`recentlyGrantedPermissions`** | <code>string[]</code>                                       |
| **`recentlyDeniedPermissions`**  | <code>string[]</code>                                       |


#### AccessToken

| Prop                      | Type                  |
| ------------------------- | --------------------- |
| **`applicationId`**       | <code>string</code>   |
| **`declinedPermissions`** | <code>string[]</code> |
| **`expires`**             | <code>string</code>   |
| **`isExpired`**           | <code>boolean</code>  |
| **`lastRefresh`**         | <code>string</code>   |
| **`permissions`**         | <code>string[]</code> |
| **`token`**               | <code>string</code>   |
| **`userId`**              | <code>string</code>   |


#### FacebookLimitedLoginResponse

| Prop                      | Type                                                                        |
| ------------------------- | --------------------------------------------------------------------------- |
| **`authenticationToken`** | <code><a href="#authenticationtoken">AuthenticationToken</a> \| null</code> |


#### AuthenticationToken

| Prop        | Type                |
| ----------- | ------------------- |
| **`token`** | <code>string</code> |


#### FacebookCurrentAccessTokenResponse

| Prop              | Type                                                        |
| ----------------- | ----------------------------------------------------------- |
| **`accessToken`** | <code><a href="#accesstoken">AccessToken</a> \| null</code> |


#### FacebookCurrentAuthenticationTokenResponse

| Prop                      | Type                                                                        |
| ------------------------- | --------------------------------------------------------------------------- |
| **`authenticationToken`** | <code><a href="#authenticationtoken">AuthenticationToken</a> \| null</code> |


### Type Aliases


#### Partial

Make all properties in T optional

<code>{ [P in keyof T]?: T[P]; }</code>


#### Record

Construct a type with a set of properties K of type T

<code>{ [P in K]: T; }</code>

</docgen-api>
