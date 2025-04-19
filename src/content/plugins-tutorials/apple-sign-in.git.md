---
"title": "Using @capacitor-community/apple-sign-in Package Tutorial",
"description": "This tutorial will guide you on how to use the @capacitor-community/apple-sign-in package for implementing Sign in With Apple feature in your Capacitor application. It includes step-by-step instructions and code examples for installation and usage.",
"created_at": "2022-01-07",
"published": true,
"slug": "apple-sign-in"

# Using @capacitor-community/apple-sign-in Package Tutorial

To incorporate Sign in With Apple functionality into your Capacitor application, you can utilize the `@capacitor-community/apple-sign-in` package. Follow the steps below to quickly integrate this feature into your project.

## Installation

Begin by installing the `@capacitor-community/apple-sign-in` package using npm or yarn:

```bash
npm i @capacitor-community/apple-sign-in
# or
yarn add @capacitor-community/apple-sign-in
```

## Usage

### 1. Import Required Plugins

In your TypeScript file (e.g., `sign-in.ts`), import the necessary plugins from Capacitor:

```typescript
import { Plugins } from '@capacitor/core'
import { SignInWithApple, SignInWithApplePluginResponse, SignInWithAppleOptions } from '@capacitor-community/apple-sign-in'
```

### 2. Registration (Web)

Register the `SignInWithApple` plugin for web usage:

```typescript
import { registerWebPlugin } from '@capacitor/core'
registerWebPlugin(SignInWithApple)
```

### 3. Define Options for Sign In

Set up the options required for the Sign in With Apple request:

```typescript
let options: SignInWithAppleOptions = {
  clientId: 'your_web_service_id',
  redirectURI: 'https://www.yourfrontend.com/login',
  scope: 'email name',
  state: '12345',
  nonce: 'nonce',
}
```

### 4. Perform Sign In

Execute the Sign in With Apple request using the defined options:

```typescript
const res = await SignInWithApple.authorize(options)
```

By following these steps, you can enable Sign in With Apple functionality in your Capacitor application seamlessly.

Remember to adjust the configuration values such as `clientId`, `redirectURI`, `scope`, `state`, and `nonce` based on your application's requirements.
