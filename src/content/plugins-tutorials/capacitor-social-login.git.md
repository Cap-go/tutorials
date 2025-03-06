```md
---
"title": "How to Use @capgo/capacitor-social-login Plugin for Social Logins",
"summary": "This tutorial will guide you through the process of using @capgo/capacitor-social-login plugin for implementing social logins with Google, Apple, and Facebook in your Capacitor application.",
"created_at": "2022-02-28",
"published": true,
"slug": "capacitor-social-login.git"
---

# Using @capgo/capacitor-social-login Plugin for Social Logins

The @capgo/capacitor-social-login plugin allows you to implement social logins in your Capacitor application with ease. This tutorial will walk you through the process of setting up social logins with Google, Apple, and Facebook using this plugin.

## Installation

To get started, first install the @capgo/capacitor-social-login plugin by running the following command in your project directory:

```bash
npm install @capgo/capacitor-social-login
npx cap sync
```

## Setting Up Apple Social Login

### Android Configuration

To configure the Apple social login for Android, follow these steps:

1. Call the `initialize` method with the `apple` provider:

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

For iOS, configure the Apple social login by following these steps:

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

## Setting Up Facebook Social Login

### Android Configuration

To configure the Facebook social login for Android, follow these steps:

1. Follow the instructions [here](https://developers.facebook.com/docs/android/getting-started) to set up Facebook login.
2. Call the `initialize` method with the `facebook` provider:

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

For iOS, there is no specific configuration needed for Facebook login.

By following these steps, you can easily set up social logins with Google, Apple, and Facebook using the @capgo/capacitor-social-login plugin in your Capacitor application.
```