```markdown
---
"title": "Tutorial: Using Capacitor Community Apple Sign-In Package",
"description": "This tutorial covers how to use the @capacitor-community/apple-sign-in package to enable Sign in With Apple functionality in Capacitor projects. It includes step-by-step instructions and code snippets for integration on iOS and web platforms.",
"created_at": "2021-09-29",
"published": true,
"slug": "apple-sign-in.git"
---

# Tutorial: Using Capacitor Community Apple Sign-In Package

This tutorial will guide you through the process of integrating the Capacitor Community Apple Sign-In package into your Capacitor projects to enable seamless Sign in With Apple functionality on both iOS and web platforms.

### Installation

To begin, you need to install the `@capacitor-community/apple-sign-in` package. You can do this by running the following command:

```bash
npm i @capacitor-community/apple-sign-in
```

### Usage (iOS, Web)

```typescript
import { Plugins } from '@capacitor/core'
import { SignInWithApple, SignInWithApplePluginResponse, SignInWithAppleOptions } from '@capacitor-community/apple-sign-in'

registerWebPlugin(SignInWithApple)

let options: SignInWithAppleOptions = {
  clientId: 'com.your.webservice',
  redirectURI: 'https://www.yourfrontend.com/login',
  scope: 'email name',
  state: '12345',
  nonce: 'nonce',
}

// Call the Apple Sign-In function
const authenticateWithApple = async () => {
  const response: SignInWithApplePluginResponse = await SignInWithApple.authorize(options)

  // Process the response here
}
```

This example code snippet shows how to set up the necessary options for the Apple Sign-In functionality using the Capacitor Community package. Feel free to customize the options according to your application's requirements.
```