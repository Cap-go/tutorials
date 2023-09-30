# Android

This package adds BroadcastReceiver to your app and use it to store the Install Referrer from Google Play install link (via SharedPreferences).

## Get the install referrer using Capacitor

Just use Storage to get the referrer value:

```javascript
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

...

const ret = await Storage.get({ key: 'referrer' });
console.log('referrer: ', ret.value);
```

## How to test it?

Connect your device, allow USB debuginng and open a console to execute adb shell command:

```bash
$ adb shell
$ am broadcast -a com.android.vending.INSTALL_REFERRER -n <package-name>/com.eladcohen.capainstallref.Receiver --es "referrer" "YEHAAA"
```

## Use on Google Play

Just put referrer query string after your package id, like this:
https://play.google.com/store/apps/details?id=com.eladcohen.ghfollower&referrer=YEHAAA

# TODO

- [x] Android
- [ ] iOS
