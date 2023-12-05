---
title: "Using cap-play-install-referrer Package"
description: "This tutorial will guide you on how to use the cap-play-install-referrer package in your Android app."
created_at: "2022-01-21"
published: true
slug: "capplayinstallreferrer"
---

# Using cap-play-install-referrer Package

The cap-play-install-referrer package is a Capacitor plugin that allows you to capture the referrer value passed when an Android app is installed using the Play Install Referrer API. This can be useful for tracking the source of app installations and attributing them to specific marketing campaigns or referral links.

## Installation

To install the cap-play-install-referrer package, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your project directory.
3. Run the following command to install the package:

```bash
npm install cap-play-install-referrer
npx cap sync
```

## Usage

To use the cap-play-install-referrer package in your Android app, follow these steps:

1. Import the CapPlayInstallReferrer module from the cap-play-install-referrer package:

```javascript
import { CapPlayInstallReferrer } from 'cap-play-install-referrer';
```

2. Call the `GetReferrer()` method to retrieve the install referrer information:

```javascript
CapPlayInstallReferrer.GetReferrer().then((resp) => {
  try {
    let data = JSON.stringify(resp);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
});
```

The `GetReferrer()` method returns a Promise that resolves to the install referrer information. You can handle the response in the `.then()` block and access the referrer, clickTimestamp, and installBeginTimestamp values.

## Example

Here's an example of how you can use the cap-play-install-referrer package in your Android app:

```javascript
import { CapPlayInstallReferrer } from 'cap-play-install-referrer';

// Retrieve the install referrer information
CapPlayInstallReferrer.GetReferrer().then((resp) => {
  try {
    let data = JSON.stringify(resp);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
});
```

In this example, the `GetReferrer()` method is called to retrieve the install referrer information. The response is then logged to the console.

## Testing the Install Referrer

To test the install referrer functionality, you can use the `adb shell` command to simulate an install with a referrer value. Follow these steps:

1. Connect your Android device to your computer and enable USB debugging.
2. Open a terminal or command prompt on your computer.
3. Execute the following commands:

```bash
$ adb shell
$ am broadcast -a com.android.vending.INSTALL_REFERRER -n <package-name>/com.eladcohen.capainstallref.Receiver --es "referrer" "YOUR_REFERRER_CODE"
```

Replace `<package-name>` with the package name of your app and `"YOUR_REFERRER_CODE"` with the referrer code you want to test.

## Use on Google Play

To use the cap-play-install-referrer package with Google Play, you can add the referrer query string to your app's Google Play Store URL. Simply append `&referrer=YOUR_REFERRER_CODE` to the end of the URL. For example:

```
https://play.google.com/store/apps/details?id=com.example.myapp&referrer=YOUR_REFERRER_CODE
```

Replace `com.example.myapp` with your app's package ID and `"YOUR_REFERRER_CODE"` with the desired referrer code.

---

That's it! You've learned how to use the cap-play-install-referrer package in your Android app to capture install referrer information. Happy coding!