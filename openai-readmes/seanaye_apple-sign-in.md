# Capacitor Sign in With Apple

# FORK INFORMATION

This fork supports both capacitor ios sign in with apple and sign in with apple on web.

### Installation

`npm i @seanaye/apple-sign-in`
or
`yarn add @seanaye/apple-sign-in`

### Example (works on web and ios)

```ts
//sign-in.ts

import { Plugins } from '@capacitor/core'

const webService = com.myapp.auth // this must be the WEB service id from apple.
// This is separate from your app service id. If you do not have this id you must create one and link it to your app in your apple developer account

const { SignInWithApple } = Plugins

const opts = {
  clientId: webService,
  redirectURI: `${process.env.conf.appUrl}/login`, // the url that the web sign in is called from
  scopes: 'email name', // scopes you want to authorize
  state: '', // im not entirely sure what this field does
}

async function signIn() {
  const res = await SignInWithApple.authorize(opts)
}
```

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Capacitor plugin to support [Sign in With Apple](https://developer.apple.com/sign-in-with-apple/get-started/)

<!-- Badges -->
<a href="https://npmjs.com/package/@capacitor-community/apple-sign-in">
  <img src="https://img.shields.io/npm/v/@capacitor-community/apple-sign-in.svg">
</a>
<a href="https://npmjs.com/package/@capacitor-community/apple-sign-in">
  <img src="https://img.shields.io/npm/l/@capacitor-community/apple-sign-in.svg">
</a>

## Maintainers

| Maintainer             | GitHub                                      | Social                                      | Sponsoring Company |
| ---------------------- | ------------------------------------------- | ------------------------------------------- | ------------------ |
| Max Lynch              | [mlynch](https://github.com/mlynch)         | [@maxlynch](https://twitter.com/maxlynch)   | Ionic              |
| Jose "Pilito" Martinez | [epicshaggy](https://github.com/epicshaggy) | [@pilito_he](https://twitter.com/pilito_he) |                    |

Maintenance Status: Partially Maintained (help wanted)

## Installation

- `npm i @capacitor-community/apple-sign-in`

## Usage (iOS, Web)

```ts
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

Plugins.SignInWithApple.authorize(options)
  .then((result: SignInWithAppleResponse) => {
    // Handle user information
    // Validate token with server and create new session
  })
  .catch((error) => {
    // Handle error
  })
```

###

## Instructions (Android)

In development.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://rdlabo.jp"><img src="https://avatars1.githubusercontent.com/u/9690024?v=4" width="100px;" alt=""/><br /><sub><b>Masahiko Sakakibara</b></sub></a><br /><a href="https://github.com/capacitor-community/apple-sign-in/commits?author=rdlabo" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
