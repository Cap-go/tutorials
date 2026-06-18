---
"title": "Using @capgo/capacitor-social-login Package Tutorial",
"description": "A detailed guide on how to use the @capgo/capacitor-social-login package for implementing social logins in your Capacitor project.",
"created_at": "2021-11-09",
"published": true,
"slug": "capacitor-social-login"

# Using @capgo/capacitor-social-login Package Tutorial

To integrate social logins into your Capacitor project, you can use the `@capgo/capacitor-social-login` package. This tutorial will guide you through the process of setting up Google, Apple, and Facebook social logins in your app.

## Installation

Start by installing the package using npm:

```bash
npm install @capgo/capacitor-social-login
npx cap sync
```

## Apple Login Configuration

1. Obtain the necessary credentials for Apple login by following [this guide](https://github.com/Cap-go/capacitor-social-login/blob/main/docs/setup_apple.md).
2. Set up the redirect URL as shown in [this image](https://github.com/Cap-go/capacitor-social-login/blob/main/docs/apple_redirect_url.png).

### Android Configuration

For Android, you need a server to receive the callback from Apple login. Use the following code to initialize and log in with the Apple provider:

```typescript
await SocialLogin.initialize({
  apple: {
    clientId: 'your-client-id',
    redirectUrl: 'your-redirect-url',
  },
});

const res = await SocialLogin.login({
  provider: 'apple',
  options: {
    scopes: ['email', 'name'],
  },
});
```

### iOS Configuration

Initialize and log in with the Apple provider using the following code:

```typescript
await SocialLogin.initialize({
  apple: {
    clientId: 'your-client-id',
  },
});

const res = await SocialLogin.login({
  provider: 'apple',
  options: {
    scopes: ['email', 'name'],
  },
});
```

## Facebook Login Configuration

Follow the instructions in [this guide](https://github.com/Cap-go/capacitor-social-login/blob/main/docs/setup_facebook.md) to set up Facebook login.

### Android Configuration

After setting up Facebook, initialize and log in with the Facebook provider using the following code:

```typescript
await SocialLogin.initialize({
  facebook: {
    appId: 'your-app-id',
    clientToken: 'your-client-token',
  },
});

const res = await SocialLogin.login({
  provider: 'facebook',
  options: {
    permissions: ['email', 'public_profile'],
  },
});
```

### iOS Configuration

For iOS, use the same initialization code as for Android to set up and log in with the Facebook provider.

---

This tutorial provides you with step-by-step instructions on integrating social logins using the @capgo/capacitor-social-login package into your Capacitor project.