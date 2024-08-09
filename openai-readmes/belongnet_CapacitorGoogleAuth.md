<h1 align="center">CapacitorGoogleAuth</h1>

<p align="center">
<img src="assets/cover.gif" alt="cover" height="521">
</p>

<p align="center"><strong><code>@belongnet/capacitor-google-auth</code></strong></p>
<p align="center"><strong>CAPACITOR 6</strong></p>
<p align="center">
Capacitor plugin for Google Auth.
</p>
<br>
<p align="center">
<a href="https://www.npmjs.com/package/@belongnet/capacitor-google-auth"><img alt="npm" src="https://img.shields.io/npm/v/@belongnet/capacitor-google-auth"></a> <a href="https://www.npmjs.com/package/@belongnet/capacitor-google-auth"><img alt="npm" src="https://img.shields.io/npm/dt/@belongnet/capacitor-google-auth"></a> <a href="https://www.npmjs.com/package/@belongnet/capacitor-google-auth"><img alt="npm" src="https://img.shields.io/npm/dw/@belongnet/capacitor-google-auth"></a> <a href="https://libraries.io/npm/@belongnet%2Fcapacitor-google-auth"><img alt="Dependents (via libraries.io)" src="https://img.shields.io/librariesio/dependents/npm/@belongnet/capacitor-google-auth"></a> <a href="https://packagephobia.com/result?p=@belongnet/capacitor-google-auth"><img alt="install size" src="https://packagephobia.com/badge?p=@belongnet/capacitor-google-auth"></a>
</p>

## Install

#### 1. Install package

```sh
npm i --save @belongnet/capacitor-google-auth

# pnpm
pnpm add @belongnet/capacitor-google-auth

# yarn
yarn add @belongnet/capacitor-google-auth
```

#### 2. Update capacitor deps

```sh
npx cap update
```

## Updating

If need migrate to different Capacitor versions [see instruction for migrate plugin to new version](#migration-guide).

## Usage

### WEB

Register plugin and manually initialize

```ts
import { GoogleAuth } from '@belongnet/capacitor-google-auth';

// use hook after platform dom ready
GoogleAuth.initialize({
  clientId: 'CLIENT_ID.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  grantOfflineAccess: true,
});
```

or if need use meta tags (Optional):

```html
<meta name="google-signin-client_id" content="{your client id here}" />
<meta name="google-signin-scope" content="profile email" />
```

#### Options

- `clientId` - The app's client ID, found and created in the Google Developers Console.
- `scopes` – same as [Configure](#Configure) scopes
- `grantOfflineAccess` – boolean, default `false`, Set if your application needs to refresh access tokens when the user is not present at the browser.

Use it

```ts
GoogleAuth.signIn();
```

#### Angular

init hook

```ts
// app.component.ts
constructor() {
  this.initializeApp();
}

initializeApp() {
  this.platform.ready().then(() => {
    GoogleAuth.initialize()
  })
}
```

sign in function

```ts
import { GoogleAuth } from "@belongnet/capacitor-google-auth";
import { Auth, GoogleAuthProvider, signInWithCredential } from '@angular/fire/auth';

async googleSignIn() {
  let googleUser = await GoogleAuth.signIn();

  /*
    If you use Firebase you can forward and use the logged in Google user like this:
  */
  constructor(private auth: Auth){}

  const googleUser = await GoogleAuth.signIn();
  const _credential = GoogleAuthProvider.credential(googleUser.authentication.idToken);
  return signInWithCredential(this.auth, _credential);
}
```

#### Vue 3

```vue
<script setup lang="ts">
import { defineComponent, onMounted } from 'vue';
import { GoogleAuth } from '@belongnet/capacitor-google-auth';

onMounted(() => {
  GoogleAuth.initialize();
});

async function logIn() {
  const response = await GoogleAuth.signIn();
  console.log(response);
}
</script>
```

or see more [CapacitorGoogleAuth-Vue3-example](https://github.com/reslear/CapacitorGoogleAuth-Vue3-example)

### iOS

1. Create in Google cloud console credential **Client ID for iOS** and get **Client ID** and **iOS URL scheme**

2. Add **identifier** `REVERSED_CLIENT_ID` as **URL schemes** to `Info.plist` from **iOS URL scheme**<br>
   (Xcode: App - Targets/App - Info - URL Types, click plus icon)

3. Set **Client ID** one of the ways:
   1. Set in `capacitor.config.json`
      - `iosClientId` - specific key for iOS
      - `clientId` - or common key for Android and iOS
   2. Download `GoogleService-Info.plist` file with `CLIENT_ID` and copy to **ios/App/App** necessarily through Xcode for indexing.

plugin first use `iosClientId` if not found use `clientId` if not found use value `CLIENT_ID` from file `GoogleService-Info.plist`

Maybe need re-check structure manually in `Info.plist`, it should be like this:

```xml
  <key>CFBundleURLTypes</key>
  <array>
		<dict>
			<key>CFBundleURLName</key>
			<string>REVERSED_CLIENT_ID</string>
			<key>CFBundleURLSchemes</key>
			<array>
				<string>com.googleusercontent.apps.xxxxxx-xxxxxxxxxxxxxxxxxx</string>
			</array>
		</dict>
	</array>
```

Is you don't use capacitor config, you can set clientId in `initialize` method specifically for platform:

```ts
    clientId:
      Capacitor.getPlatform() === 'ios'
        ? import.meta.env.VITE_GOOGLE_CLIENT_ID_IOS
        : import.meta.env.VITE_GOOGLE_CLIENT_ID,
```

### Android

Set **Client ID** :

1. In `capacitor.config.json`

   - `androidClientId` - specific key for Android
   - `clientId` - or common key for Android and iOS

2. or set inside your `strings.xml`

plugin first use `androidClientId` if not found use `clientId` if not found use value `server_client_id` from file `strings.xml`

```xml
<resources>
  <string name="server_client_id">Your Web Client Key</string>
</resources>
```

Changing Play Services Auth version (Optional) :

This plugin uses `com.google.android.gms:play-services-auth:21.2.0` by default, you can override it providing `gmsPlayServicesAuthVersion` at `variables.gradle`

**Refresh method**

This method should be called when the app is initialized to establish if the user is currently logged in. If true, the method will return an accessToken, idToken and an empty refreshToken.

```ts
checkLoggedIn() {
    GoogleAuth.refresh()
        .then((data) => {
            if (data.accessToken) {
                this.currentTokens = data;
            }
        })
        .catch((error) => {
            if (error.type === 'userLoggedOut') {
                this.signin()
            }
        });
}
```

## Configure

| Name                     | Type     | Description                                                                                                                   |
| ------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| clientId                 | string   | The app's client ID, found and created in the Google Developers Console.                                                      |
| iosClientId              | string   | Specific client ID key for iOS                                                                                                |
| androidClientId          | string   | Specific client ID key for Android                                                                                            |
| scopes                   | string[] | Scopes that you might need to request to access Google APIs<br>https://developers.google.com/identity/protocols/oauth2/scopes |
| serverClientId           | string   | This ClientId used for offline access and server side handling                                                                |
| forceCodeForRefreshToken | boolean  | Force user to select email address to regenerate AuthCode <br>used to get a valid refreshtoken (work on iOS and Android)      |

Provide configuration in root `capacitor.config.json`

```json
{
  "plugins": {
    "GoogleAuth": {
      "scopes": ["profile", "email"],
      "serverClientId": "xxxxxx-xxxxxxxxxxxxxxxxxx.apps.googleusercontent.com",
      "forceCodeForRefreshToken": true
    }
  }
}
```

or in `capacitor.config.ts`

```ts
/// <reference types="'@belongnet/capacitor-google-auth'" />

const config: CapacitorConfig = {
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: 'xxxxxx-xxxxxxxxxxxxxxxxxx.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
```

#### Note: scopes can be configured under <code><a href="#initialize">initialize</a></code> function.

## API

<docgen-index>

- [`initialize(...)`](#initialize)
- [`signIn()`](#signin)
- [`refresh()`](#refresh)
- [`signOut()`](#signout)
- [Interfaces](#interfaces)

</docgen-index>
<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options?: InitOptions) => any
```

Initializes the GoogleAuthPlugin, loading the gapi library and setting up the plugin.

| Param         | Type                                                | Description                        |
| ------------- | --------------------------------------------------- | ---------------------------------- |
| **`options`** | <code><a href="#initoptions">InitOptions</a></code> | - Optional initialization options. |

**Returns:** <code>any</code>

**Since:** 3.1.0

---

### signIn()

```typescript
signIn() => any
```

Initiates the sign-in process and returns a Promise that resolves with the user information.

**Returns:** <code>any</code>

---

### refresh()

```typescript
refresh() => any
```

Refreshes the authentication token and returns a Promise that resolves with the updated authentication details.

**Returns:** <code>any</code>

---

### signOut()

```typescript
signOut() => any
```

Signs out the user and returns a Promise.

**Returns:** <code>any</code>

---

### Interfaces

#### InitOptions

| Prop                     | Type                 | Description                                                                                                                                      | Default            | Since |
| ------------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ----- |
| **`clientId`**           | <code>string</code>  | The app's client ID, found and created in the Google Developers Console. Common for Android or iOS. The default is defined in the configuration. |                    | 3.1.0 |
| **`scopes`**             | <code>{}</code>      | Specifies the scopes required for accessing Google APIs The default is defined in the configuration.                                             |                    |       |
| **`grantOfflineAccess`** | <code>boolean</code> | Set if your application needs to refresh access tokens when the user is not present at the browser. In response use `serverAuthCode` key         | <code>false</code> | 3.1.0 |

#### User

| Prop                 | Type                                                      | Description                                                         |
| -------------------- | --------------------------------------------------------- | ------------------------------------------------------------------- |
| **`id`**             | <code>string</code>                                       | The unique identifier for the user.                                 |
| **`email`**          | <code>string</code>                                       | The email address associated with the user.                         |
| **`name`**           | <code>string</code>                                       | The user's full name.                                               |
| **`familyName`**     | <code>string</code>                                       | The family name (last name) of the user.                            |
| **`givenName`**      | <code>string</code>                                       | The given name (first name) of the user.                            |
| **`imageUrl`**       | <code>string</code>                                       | The URL of the user's profile picture.                              |
| **`serverAuthCode`** | <code>string</code>                                       | The server authentication code.                                     |
| **`authentication`** | <code><a href="#authentication">Authentication</a></code> | The authentication details including access, refresh and ID tokens. |

#### Authentication

| Prop               | Type                | Description                                      |
| ------------------ | ------------------- | ------------------------------------------------ |
| **`accessToken`**  | <code>string</code> | The access token obtained during authentication. |
| **`idToken`**      | <code>string</code> | The ID token obtained during authentication.     |
| **`refreshToken`** | <code>string</code> | The refresh token.                               |

</docgen-api>

## License

[MIT](./LICENSE)
