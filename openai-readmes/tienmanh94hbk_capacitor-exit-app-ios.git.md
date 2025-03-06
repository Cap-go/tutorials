# capacitor-exit-app-ios

Capacitor plugin to force quit app on Ios

> ### Notice
>
> This plugin may not be allowed upon apple review.

## Method
| method            | info                                          | platform    |
| ----------------- | --------------------------------------------- | ----------- |
| `killApp()  `     | force quit app every where call it            | ios         |

## Usage

```$xslt
import {Plugins} from '@capacitor/core';
const { ExitAppIosPlugin } = Plugins;

//
//
    if (this.platform.is('android')) {
      navigator['app'].exitApp();
    } else {
      ExitAppIosPlugin.killApp().then();
    }
//
//
```

## iOS setup

- `sudo gem install cocoapods` _(once a time)_
- `ionic start my-cap-app --capacitor`
- `cd my-cap-app`
- `mkdir www && touch www/index.html`
- `npx cap add ios`
- `npm i capacitor-exit-app-ios`
- `npx cap sync ios` _(always do sync after a plugin install)_
- `npx cap open ios`

* sign your app at xcode (general tab)

## Github

https://github.com/tienmanh94hbk/capacitor-exit-app-ios

## Cheers 🍻

## Follow me [@Facebook](https://www.facebook.com/manh.do.186)

## License

MIT

