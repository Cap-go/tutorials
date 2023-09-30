# capacitor-sign-in-with-apple

Native Sign In With Apple CapacitorJS Plugin

[![npm](https://img.shields.io/npm/v/@changenode/capacitor-sign-in-with-apple)](https://www.npmjs.com/package/@changenode/capacitor-sign-in-with-apple)

[Get your own badge](https://shields.io/)

## Requirements

This is only designed to work with the current version of Capacitor (4+ as of this writing).

## Install

```bash
npm install @changenode/capacitor-sign-in-with-apple
npx cap sync
```

## API

<docgen-index>

- [`auth()`](#auth)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### auth()

```typescript
auth() => Promise<{ response: SignInWithAppleSuccess | any; }>
```

**Returns:** <code>Promise&lt;{ response: any; }&gt;</code>

---

### Interfaces

#### SignInWithAppleSuccess

| Prop                    | Type                |
| ----------------------- | ------------------- |
| **`user`**              | <code>string</code> |
| **`state`**             | <code>string</code> |
| **`email`**             | <code>string</code> |
| **`givenName`**         | <code>string</code> |
| **`familyName`**        | <code>string</code> |
| **`identityToken`**     | <code>string</code> |
| **`authorizationCode`** | <code>string</code> |

</docgen-api>

# Sample Usage

This is a snippet illustrating how I am using this code in my SvelteKit code. I imagine it's largely the same for Ionic - if anyone wants to post a snippet for Ionic feel free to do so in the GitHub Discussions and I'll include and/or link.

```ts
<script lang="ts">
	import { Capacitor } from '@capacitor/core';

	import {SignInWithApple} from 'capacitor-sign-in-with-apple';

	let device: any;
	let r: any;
	let e: any;

	async function auth() {
		device = Capacitor.getPlatform();

		SignInWithApple.auth()
			.then((response: any) => {
				console.log(response);
				r = response;
			})
			.catch((response: any) => {
				console.error(response);
				e = response;
			});
	}

	auth();
</script>
```

The plugin currently is only intended for use on iOS. It would be possible to implement
Sign in with Apple on Android and via the web using Apple's REST and/or JavaScript SDKs, but that's out of scope for this plugin. If you do implement that functionality in another
plugin let me know and I can include a link.

# Errors & Troubleshooting

Unfortunately debugging issues with Sign in with Apple can be difficult. If you run into challenges with a simple "Hello World" app double-check the following:

- The app id (e.g. com.example.my.App) is correct everywhere
- The Sign in with Apple capability is set for the app - debug, release, etc.
- The profiles are set up correctly in XCode
- The app id is correctly associated with the Sign in with Apple info in the Apple developer portal

## Reach out to Apple if Necessary

If everything is set up correctly you can still run into errors due to [mis]configuration on the Apple end of things. One symptom of this is the app will bring up the native dialog in the simulator and on the real device and appear to work but then fail with a large red exclaimation point and the message "Sign Up Not Completed" in the native dialog. You won't get anything in log files until you hit cancel, and then you will get a pretty generic error code that won't show up in Google searches.

As of this writing as part of your Apple Developer fee you get two dev tech support incidents. If you are certain that you have set up everything in your app correctly and you still get Sign Up Not Completed errors, I highly recommending using one of your support incidents to resolve the issue.

# History

Based on the implementation by [rlfrahm](https://github.com/rlfrahm/capacitor-apple-login). I also looked through the various public forks of that branch and incorporated some of the changes I found.

Significant changes:

- Rebuilt the project from scratch using the latest Capacitor 4 [plugin generator](https://capacitorjs.com/docs/plugins/creating-plugins).
- Updated to use the most recent Swift bindings for auth from Apple
- Added a TypeScript definition to match the resulting success data from Apple

# Notes

As of this writing I'm able to use Sign in with Apple in an iPad-on-Apple Silicon build target via XCode, which is much faster/easier than using the iOS Simulator.
