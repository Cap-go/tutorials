# @taretmch/capacitor-auth0

Native Auth0 SDK wrappter for capacitor

## Install

```bash
npm install @taretmch/capacitor-auth0
npx cap sync
```

### For iOS

Setup Auth0 domain & clientId at `ios/App/App/Auth0.plist`.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>ClientId</key>
    <string>{AUTH0_CLIENT_ID}</string>
    <key>Domain</key>
    <string>{AUTH0_DOMAIN}</string>
</dict>
</plist>
```

Setup Custom URL Scheme at `Info.plist`.

```xml
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>${PRODUCT_BUNDLE_IDENTIFIER}</string>
        </array>
    </dict>
</array>
```

capacitor-auth0 uses [Auth0.swift](https://github.com/auth0/Auth0.swift) internally. For more information, see Auth0.swift quickstart guide.

### For Android

Setup Auth0 domain & clientId at `android/app/src/main/res/values/strings.xml`.

```xml
<?xml version='1.0' encoding='utf-8'?>
<resources>
    <string name="com_auth0_domain">{AUTH0_DOMAIN}</string>
    <string name="com_auth0_client_id">{AUTH0_CLIENT_ID}</string>
</resources>
```

Add manifestPlaceholders at `android/app/build.gradle`.

```gradle
android {
    ...
    defaultConfig {
        ...
        manifestPlaceholders = [auth0Domain: "@string/com_auth0_domain", auth0Scheme: "demo"]
    }
}
```

capacitor-auth0 uses [Auth0.Android](https://github.com/auth0/Auth0.Android) internally. For more information, see Auth0.Android quickstart guide.

### For Web

capacitor-auth0 has no implementation for web. You can use [auth0-spa-js](https://github.com/auth0/auth0-spa-js) instead.

## API

<docgen-index>

* [`load()`](#load)
* [`login()`](#login)
* [`logout()`](#logout)
* [`isAuthenticated()`](#isauthenticated)
* [`getUserInfo()`](#getuserinfo)
* [`getCredentials()`](#getcredentials)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

Capacitor Auth0 Plugin

### load()

```typescript
load() => Promise<Auth0User>
```

Load auth0 plugin.
Get the authenticated user profile and update the credentials
using the refresh token if the access token is expired.
For android, initialize the plugin with your Auth0 configuration.
Return undefined if the user is not authenticated.

**Returns:** <code>Promise&lt;<a href="#auth0user">Auth0User</a>&gt;</code>

--------------------


### login()

```typescript
login() => Promise<Auth0User>
```

Web Auth: Login with Auth0.

**Returns:** <code>Promise&lt;<a href="#auth0user">Auth0User</a>&gt;</code>

--------------------


### logout()

```typescript
logout() => Promise<void>
```

Web Auth: Logout from Auth0.

--------------------


### isAuthenticated()

```typescript
isAuthenticated() => Promise<{ result: boolean; }>
```

Check if the user is authenticated.

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

--------------------


### getUserInfo()

```typescript
getUserInfo() => Promise<Auth0User>
```

Get the authenticated user profile.
If the access token is expired, yield new credentials using the refresh token.
Throws an error if the user is not authenticated.

**Returns:** <code>Promise&lt;<a href="#auth0user">Auth0User</a>&gt;</code>

--------------------


### getCredentials()

```typescript
getCredentials() => Promise<Credentials>
```

Get credentials and yield new credentials using the refresh token if the access token is expired.
Return undefined if the user is not authenticated.

**Returns:** <code>Promise&lt;<a href="#credentials">Credentials</a>&gt;</code>

--------------------


### Interfaces


#### Auth0User

Auth0 user profile.

| Prop        | Type                | Description |
| ----------- | ------------------- | ----------- |
| **`id`**    | <code>string</code> | User ID.    |
| **`name`**  | <code>string</code> | User name.  |
| **`email`** | <code>string</code> | User email. |


#### Credentials

Auth0 credentials.

| Prop               | Type                | Description                                                                                                                                      |
| ------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`idToken`**      | <code>string</code> | Identity token that contains user profile information.                                                                                           |
| **`accessToken`**  | <code>string</code> | Access token for Auth0 API.                                                                                                                      |
| **`expiresAt`**    | <code>string</code> | Access token expiration date. Once expired, the access token can no longer be used to access an API and a new access token needs to be obtained. |
| **`scope`**        | <code>string</code> | Granted scopes for the access token. Undefined if no scope is granted.                                                                           |
| **`refreshToken`** | <code>string</code> | Refresh token that can be used to request a new access token without signin again. Undefined if no refresh token is granted.                     |
| **`tokenType`**    | <code>string</code> | Type of received token.                                                                                                                          |

</docgen-api>
