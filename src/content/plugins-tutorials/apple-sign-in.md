# Using @capacitor-community/apple-sign-in

This tutorial will guide you through the process of using the `@capacitor-community/apple-sign-in` package to implement Sign in With Apple functionality in your Capacitor project.

## Installation

To install the package, run the following command in your project's root directory:

```shell
npm i @capacitor-community/apple-sign-in
```

## Usage

### Setting up the Plugin

The first step is to import the necessary classes and functions from the package:

```typescript
import { Plugins } from "@capacitor/core";
import {
  SignInWithApple,
  SignInWithApplePluginResponse,
  SignInWithAppleOptions,
} from "@capacitor-community/apple-sign-in";
```

Next, register the plugin for web usage:

```typescript
registerWebPlugin(SignInWithApple);
```

### Authorizing with Sign in With Apple

To authorize a user with Sign in With Apple, you need to call the `SignInWithApple.authorize` method. Here's an example:

```typescript
let options: SignInWithAppleOptions = {
  clientId: "com.your.webservice",
  redirectURI: "https://www.yourfrontend.com/login",
  scope: "email name",
  state: "12345",
  nonce: "nonce",
};

SignInWithApple.authorize(options)
  .then((result: SignInWithApplePluginResponse) => {
    // Handle user information
    // Validate token with server and create new session
  })
  .catch((error) => {
    // Handle error
  });
```

In the above example, you need to provide the following options:

- `clientId`: The identifier of your web service. This is separate from your app service id. If you do not have this id, you must create one and link it to your app in your Apple Developer account.
- `redirectURI`: The URL that the web sign in is called from.
- `scope`: The scopes you want to authorize.
- `state`: A value that you can use to track the state of the authorization request.
- `nonce`: A cryptographic nonce that you can use to validate the authenticity of the response.

The `SignInWithApple.authorize` method returns a promise that resolves with a `SignInWithApplePluginResponse` object containing user information.

### Handling Errors

If there is an error during the authorization process, the `catch` block will be executed. You can handle the error in this block. For example:

```typescript
.catch((error) => {
  console.error("Error signing in with Apple:", error);
});
```

## Conclusion

In this tutorial, you learned how to use the `@capacitor-community/apple