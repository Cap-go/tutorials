# Using @codetrix-studio/capacitor-google-auth Package Tutorial

The @codetrix-studio/capacitor-google-auth package is a Capacitor plugin for Google Auth. This tutorial will guide you through the process of installing and using this package in your Capacitor project.

## Installation

Follow these steps to install the @codetrix-studio/capacitor-google-auth package:

1. Open your terminal and navigate to your project directory.
2. Run the following command to install the package:

```sh
npm i --save @codetrix-studio/capacitor-google-auth
```

3. Update the Capacitor dependencies by running:

```sh
npx cap update
```

## Usage

### Web

To use the @codetrix-studio/capacitor-google-auth package in a web project, follow these steps:

1. Import the GoogleAuth class from the package:

```ts
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
```

2. Manually initialize the plugin by calling the `initialize` function after the platform DOM is ready:

```ts
GoogleAuth.initialize({
  clientId: 'CLIENT_ID.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  grantOfflineAccess: true,
});
```

3. Use the plugin functions as needed. For example, to sign in with Google:

```ts
GoogleAuth.signIn();
```

### Angular

To use the @codetrix-studio/capacitor-google-auth package in an Angular project, follow these steps:

1. Import the GoogleAuth class from the package:

```ts
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
```

2. Initialize the plugin in the `initializeApp` method in your `app.component.ts` file:

```ts
constructor() {
  this.initializeApp();
}

initializeApp() {
  this.platform.ready().then(() => {
    GoogleAuth.initialize();
  });
}
```

3. Use the plugin functions as needed. For example, to sign in with Google:

```ts
async googleSignIn() {
  let googleUser = await GoogleAuth.signIn();
  // Use the user data as needed
}
```

### Vue 3

To use the @codetrix-studio/capacitor-google-auth package in a Vue 3 project, follow these steps:

1. Import the GoogleAuth class from the package in your Vue component:

```vue
import { GoogleAuth }