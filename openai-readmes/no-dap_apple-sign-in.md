# Capacitor Sign in With Apple
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

| Maintainer | GitHub | Social | Sponsoring Company |
| -----------| -------| -------| -------------------|
| Max Lynch | [mlynch](https://github.com/mlynch) | [@maxlynch](https://twitter.com/maxlynch) | Ionic |

Maintenance Status: Partially Maintained (help wanted)

## Installation

- `npm i @capacitor-community/apple-sign-in`

## Usage (iOS)

```ts
import { Plugins } from '@capacitor/core'
import { ResponseSignInWithApplePlugin } from '@capacitor-community/apple-sign-in';

const { SignInWithApple } = Plugins

try {
  const response: ResponseSignInWithApplePlugin = await SignInWithApple.Authorize()
} catch (e) {
}
```

## Instructions (Android/Web)

The plugin currently works for iOS only. It's made only to pass Apple's new terms. Add the Apple button only after you've checked that the user is on iOS device. Web support is planned for Apple's JS support ([help wanted!](https://github.com/capacitor-community/apple-sign-in/issues/1)).

```ts
const { Device } = Plugins

let device = await Device.getInfo()

if (device.platform === 'ios') {
  // Show the button with SignInWithApple.Authorize()
}
```

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