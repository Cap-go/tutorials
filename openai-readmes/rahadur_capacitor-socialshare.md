# [Capacitor SocialShare](https://github.com/rahadur/capacitor-socialshare.git)

Capacitor SocialShare is a native `ShareActionProvider` & `SharingViewController` implementation for IOS & Android. Now you can use this package as a [Ionic Capacitor](https://capacitor.ionicframework.com) Plugin in your App.

## Suported

- [x] Android
- [ ] IOS
- [ ] Electron

## Installation

`npm install --save capacitor-socialshare`

## Getting Start

```typescript
import { Plugins } from '@capacitor/core'

import { ShareOption } from 'capacitor-socialshare' // Import SocialShare Modules

// Assign Parameters

shareOption: ShareOption = {
  subject: 'YOUR SUBJECT',

  body: 'YOUR MESSAGE BODY',

  url: 'YOUR APP/PLAY STORE URL',
}

// Use Plugin Method

Plugins.SocialShare.share(this.shareOption).then(
  (res) => {
    console.log(res.value)
  },
  (err) => {
    console.log(err)
  },
)
```

## Methods

| Status | Name                               | Parameter   | Return                    | Descrription                                                    |
| ------ | ---------------------------------- | ----------- | ------------------------- | --------------------------------------------------------------- |
| - [x]  | share(option: ShareOption)         | ShareOption | Promise<{value: boolean}> | It will show `Share Intent` in Android & `Share Action` in IOS. |
| - [ ]  | shareViaEmail(option: ShareOption) | ShareOption | Promise<{value: boolean}> | It will share App usigin list of email.                         |

## Interfaces

```typescript
interface ShareOption {
  subject?: string

  body?: string

  url?: string
}
```

## Screenshot

| Android      | IOS          |
| ------------ | ------------ |
| Comming soon | Comming soon |

## Contributing

- Star this repository
- Open issue for feature requests

## Roadmap

- [Capacitor Plugins](https://capacitor.ionicframework.com/docs/plugins/)

- [IOS](https://capacitor.ionicframework.com/docs/plugins/ios/)

- [Android](https://capacitor.ionicframework.com/docs/plugins/android/)

## License:

Capacitor SocialShare is [MIT licensed](./LICENSE).
