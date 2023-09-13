# Using @capacitor-community/apple-sign-in package

This tutorial will guide you through the process of using the `@capacitor-community/apple-sign-in` package in your Capacitor project.

## Installation

1. Install the package using npm:

```
npm install @capacitor-community/apple-sign-in
```

2. Sync your Capacitor project:

```
npx cap sync
```

## Configuration

### iOS

1. Open your Xcode project.

2. In the Capabilities pane, enable the "Sign In with Apple" capability.

3. In the Info.plist file, add the following key-value pair:

   ```
   <key>NSAppleMusicUsageDescription</key>
   <string>[Your description of why you need Apple Sign In]</string>
   ```

### Android

No additional configuration is required for Android.

## Usage

1. Import the `AppleSignIn` module in your code:

```typescript
import { AppleSignIn } from '@capacitor-community/apple-sign-in';
```

2. Check if the user's device supports Sign in with Apple:

```typescript
const isAvailable = await AppleSignIn.isAvailable();
```

3. If Sign in with Apple is available, perform the sign-in process:

```typescript
if (isAvailable) {
  const response = await AppleSignIn.signIn();
  console.log(response);
}
```

The `response` object will contain the user's Apple ID information.

4. To sign out the user, call the `signOut` method:

```typescript
await AppleSignIn.signOut();
```

## Conclusion

You have now learned how to use the `@capacitor-community/apple-sign-in` package in your Capacitor project. Sign in with Apple can provide a seamless and secure authentication experience for your users.