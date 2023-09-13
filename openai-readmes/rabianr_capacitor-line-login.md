# capacitor-line-login

Capacitor plugin to support LINE Login

## Versions

This plugin is for Capacitor 4.

## Installation

```bash
npm install capacitor-line-login
npx cap sync
```

### Web

Not supported.

### Android

No further steps are required.

### iOS

Update the following:

`./ios/App/App/Info.plist`:

```diff
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CFBundleDevelopmentRegion</key>
    <string>en</string>
    [...]
+   <key>CFBundleURLTypes</key>
+       <array>
+           <dict>
+               <key>CFBundleTypeRole</key>
+               <string>Editor</string>
+               <key>CFBundleURLSchemes</key>
+               <array>
+                   <string>line3rdp.$(PRODUCT_BUNDLE_IDENTIFIER)</+tring>
+               </array>
+           </dict>
+       </array>
+   <key>LSApplicationQueriesSchemes</key>
+   <array>
+       <string>lineauth2</string>
+   </array>
</dict>
</plist>
```

`./ios/App/App/AppDelegate.swift`:

```diff
import UIKit
import Capacitor
+import LineSDK
[...]
    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        // Called when the app was launched with a url. Feel free to add additional processing here,
        // but if you want the App API to support tracking app url opens, make sure to keep this call
+       if LoginManager.shared.application(app, open: url) {
+           return true
+       }
        return ApplicationDelegateProxy.shared.application(app, open: url, options: options)
    }
```

## Usage

```typescript
import { LineLogin, LoginResult } from 'capacitor-line-login'
```

```typescript
LineLogin.setup({ channelId: 'CHANNEL_ID' })
[...]
LineLogin.login()
    .then(({ code, data }: LoginResult) => {
        // ...
    })
    .catch(({ code, message }) => {
        // ...
    })
```

## API

<docgen-index>

- [`setup(...)`](#setup)
- [`login()`](#login)
- [`logout()`](#logout)
- [`getAccessToken()`](#getaccesstoken)
- [`refreshAccessToken()`](#refreshaccesstoken)
- [`verifyAccessToken()`](#verifyaccesstoken)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setup(...)

```typescript
setup(options: SetupOptions) => Promise<void>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#setupoptions">SetupOptions</a></code> |

---

### login()

```typescript
login() => Promise<LoginResult>
```

**Returns:** <code>Promise&lt;<a href="#loginresult">LoginResult</a>&gt;</code>

---

### logout()

```typescript
logout() => Promise<Result>
```

**Returns:** <code>Promise&lt;<a href="#result">Result</a>&gt;</code>

---

### getAccessToken()

```typescript
getAccessToken() => Promise<GetAccessTokenResult>
```

**Returns:** <code>Promise&lt;<a href="#getaccesstokenresult">GetAccessTokenResult</a>&gt;</code>

---

### refreshAccessToken()

```typescript
refreshAccessToken() => Promise<GetAccessTokenResult>
```

**Returns:** <code>Promise&lt;<a href="#getaccesstokenresult">GetAccessTokenResult</a>&gt;</code>

---

### verifyAccessToken()

```typescript
verifyAccessToken() => Promise<Result>
```

**Returns:** <code>Promise&lt;<a href="#result">Result</a>&gt;</code>

---

### Interfaces

#### SetupOptions

| Prop            | Type                |
| --------------- | ------------------- |
| **`channelId`** | <code>string</code> |

#### LoginResult

| Prop       | Type                                                                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`data`** | <code>{ accessToken: string; estimatedExpirationTimeMillis: number; userID: string; email?: string; displayName: string; pictureUrl?: string; }</code> |

#### Result

| Prop       | Type                                                  |
| ---------- | ----------------------------------------------------- |
| **`code`** | <code>'SUCCESS' \| 'CANCEL' \| 'UNKNOWN_ERROR'</code> |

#### GetAccessTokenResult

| Prop       | Type                                                                         |
| ---------- | ---------------------------------------------------------------------------- |
| **`data`** | <code>{ accessToken: string; estimatedExpirationTimeMillis: number; }</code> |

</docgen-api>
