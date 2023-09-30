# Capacitor Google Auth plugin

### Install

```bash
npm i capacitor-google-auth

npx cap update
```

### iOS

Make sure you have `GoogleService-Info.plist` with `CLIENT_ID`

Add `REVERSED_CLIENT_ID` as url scheme to `Info.plist`

### Android

Inside your `strings.xml`

```xml
<resources>
  <string name="server_client_id">Your Web Client Key</string>
</resources>
```

Import package inside your `MainActivity`

```java
import com.rediska1114.plugins.GoogleAuth;

```

Register plugin inside your `MainActivity.onCreate`

```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  add(GoogleAuth.class);
}});
```

### Configure

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

Note : `forceCodeForRefreshToken` force user to select email address to regenerate AuthCode used to get a valid refreshtoken (work on iOS and Android) (This is used for offline access and serverside handling)

# Available methods:

- `signIn()`
- `refresh()` (iOS only)
- `signOut()`

# Usage example:

1. In your module (e.g. `app.module.ts`)

```ts
...
import { GoogleAuth } from 'capacitor-google-auth'

@NgModule({
	...
	providers: [
		...
		GoogleAuth,
	],
})
export class AppModule {}

```

2. In your component or service (e.g. `auth.service.ts`)

```ts
...
import { GoogleAuth } from 'capacitor-google-auth'

@Injectable()
export class AuthService {
	constructor(private googleAuth: GoogleAuth, private api: ApiService) {}

    async googleSignIn() {
		const googleUser = await this.googleAuth.signIn();
		const { token } = await this.api.signInWithGoogle(googleUser)
	}
}

```
