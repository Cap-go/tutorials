---
"title": "Using @capgo/capacitor-social-login Package"
"description": "This markdown tutorial will guide you on how to use the @capgo/capacitor-social-login package for social logins including Google, Apple, and Facebook. It includes installation instructions, configuration steps for Android and iOS, and additional resources for setting up the social logins."
"created_at": "2023-10-12"
"published": true
"slug": "capacitor-social-login.git"
---

## Getting Started with @capgo/capacitor-social-login

[@capgo/capacitor-social-login](https://www.npmjs.com/package/@capgo/capacitor-social-login) is a comprehensive package that allows you to implement social authentication in your Capacitor applications. Here's how you can get started with this package:

### Installation

First, install the package using npm:

```bash
npm install @capgo/capacitor-social-login
npx cap sync
```

### Apple Configuration

For Apple, follow these steps:

1. [Obtain the credentials](https://github.com/Cap-go/capacitor-social-login/blob/main/docs/setup_apple.md).
2. [Set up the redirect URL](https://github.com/Cap-go/capacitor-social-login/blob/main/docs/apple_redirect_url.png).

#### Android Configuration

To configure Apple login on Android, you need to:

```typescript
await SocialLogin.initialize({
  apple: {
    clientId: 'your-client-id',
    redirectUrl: 'your-redirect-url'
  }
});
const res = await SocialLogin.login({
  provider: 'apple',
  options: {
    scopes: ['email', 'name']
  }
});
```

#### iOS Configuration

To configure Apple login on iOS, use:

```typescript
await SocialLogin.initialize({
  apple: {
    clientId: 'your-client-id'
  }
});
const res = await SocialLogin.login({
  provider: 'apple',
  options: {
    scopes: ['email', 'name']
  }
});
```

### Facebook Configuration

#### Android Setup

Follow the detailed instructions [here](https://developers.facebook.com/docs/android/getting-started) to set up Facebook login on Android. Then, configure the plugin:

```typescript
await SocialLogin.initialize({
  facebook: {
    appId: 'your-app-id',
    clientToken: 'your-client-token'
  }
});
const res = await SocialLogin.login({
  provider: 'facebook',
  options: {
    permissions: ['email', 'public_profile']
  }
});
```

#### iOS Setup

For iOS, simply initialize and login with Facebook using:

```typescript
await SocialLogin.initialize({
  facebook: {
    appId: 'your-app-id',
    clientToken: 'your-client-token'
  }
});
const res = await SocialLogin.login({
  provider: 'facebook',
  options: {
    permissions: ['email', 'public_profile']
  }
});
```

This tutorial covers the basic setup for @capgo/capacitor-social-login. For more advanced configurations and social login options, refer to the official documentation.