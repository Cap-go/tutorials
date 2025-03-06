# Capacitor Music Controls Plugin

An update to Cordova Music Controls plugin to support Capacitor 3+

If you are looking to support Capacitor V2:
https://github.com/ingageco/capacitor-music-controls-plugin-for-capacitor-2

## 2.0.0 Update - Plugin Renamed, versioning changed

As of April 2024, the current version of the plugin was renamed from `capacitor-music-controls-plugin-v3` to `capacitor-music-controls-plugin`. The old plugin, that only supported below Capacitor 3, was renamed to `capacitor-music-controls-plugin-for-capacitor-2`. This was done in hopes to avoid future confusion over the version names, and make this current repository easier to find.

I have also bumped the version to version 5, to hopefully stay alongside Capacitor's version.

## 1.1.0 Update - Temporary changes to listening for control events

As of June 2023, Capacitor 4 has a bug on Android 13 notifying the plugin of native events via notifyListeners. See this issue: https://github.com/ionic-team/capacitor/issues/6234

In order to move forward, we changed from using notifyListeners to using triggerJSEvent, which works. This means that in order to correctly listen for events, the listener is created differently on Android than iOS. The player position is also not currently sent with the Android event.

As soon as the bug with notifyListeners is fixed, we will update and revert back to using notifyListeners on Android on a new minor version.

## About

Music controls for Capacitor applications. Display a 'media' notification with play/pause, previous, next buttons, allowing the user to control the play. Handles headset events (plug, unplug, headset button) on Android.

This plugin is forked from the original Cordova plugin which is no longer maintained but which can be found at:
https://github.com/homerours/cordova-music-controls-plugin

## work in progress

PRs for rounding out issues and improving the plugin are welcome.

## Supported platforms

- Android
- iOS

## Installation

- Current release
  `npm install capacitor-music-controls-plugin`

## iOS

Run:
npx cap sync ios

## Android

Run:
npx cap sync android

## Importing the Plugin

```javascript
import { CapacitorMusicControls } from "capacitor-music-controls-plugin";
```

## Methods

- Create the media controls:

```javascript
CapacitorMusicControls.create({
  track: "Time is Running Out", // optional, default : ''
  artist: "Muse", // optional, default : ''
  album: "Absolution", // optional, default: ''
  cover: "albums/absolution.jpg", // optional, default : nothing
  // cover can be a local path (use fullpath 'file:///storage/emulated/...',
  // or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
  // or a remote url ('http://...', 'https://...', 'ftp://...')

  // hide previous/next/close buttons:
  hasPrev: false, // show previous button, optional, default: true
  hasNext: false, // show next button, optional, default: true
  hasClose: true, // show close button, optional, default: false

  // iOS only, all optional
  duration: 60, // default: 0
  elapsed: 10, // default: 0
  hasSkipForward: true, // default: false. true value overrides hasNext.
  hasSkipBackward: true, // default: false. true value overrides hasPrev.
  skipForwardInterval: 15, // default: 15.
  skipBackwardInterval: 15, // default: 15.
  hasScrubbing: false, // default: false. Enable scrubbing from control center progress bar

  // Android only, all optional
  isPlaying: true, // default : true
  dismissable: true, // default : false
  // text displayed in the status bar when the notification (and the ticker) are updated
  ticker: 'Now playing "Time is Running Out"',
  // All icons default to their built-in android equivalents
  // The supplied drawable name, e.g. 'media_play', is the name of a drawable found under android/res/drawable* folders
  playIcon: "media_play",
  pauseIcon: "media_pause",
  prevIcon: "media_prev",
  nextIcon: "media_next",
  closeIcon: "media_close",
  notificationIcon: "notification",
})
  .then(() => {
    // SUCCESS
  })
  .catch((e) => {
    console.log(e);
  });
```

- Update whether the music is playing true/false, as well as the time elapsed (seconds)

```javascript
CapacitorMusicControls.updateIsPlaying({
  isPlaying: true, // affects Android only
  elapsed: timeElapsed, // affects iOS Only
})
  .then(() => {
    // SUCCESS
  })
  .catch((e) => {
    console.log(e);
  });
```

- Listen for events and pass them to your handler function

```javascript
// IOS
CapacitorMusicControls.addListener("controlsNotification", (info: any) => {
  console.log("controlsNotification was fired");
  console.log(info);
  handleControlsEvent(info);
});

// ANDROID (13, see bug above as to why it's necessary)
document.addEventListener("controlsNotification", (event) => {
  console.log("controlsNotification was fired");
  console.log(event);
  const info = { message: event.message, position: 0 };
  handleControlsEvent(info);
});
```

- Example event handler

```javascript
handleControlsEvent(action){

	console.log("hello from handleControlsEvent")
	const message = action.message;

	console.log("message: " + message)

	switch(message) {
		case 'music-controls-next':
			// next
			break;
		case 'music-controls-previous':
			// previous
			break;
		case 'music-controls-pause':
			// paused
			break;
		case 'music-controls-play':
			// resumed
			break;
		case 'music-controls-destroy':
			// controls were destroyed
			break;

		// External controls (iOS only)
		case 'music-controls-toggle-play-pause' :
			// do something
			break;
		case 'music-controls-skip-to':
			// do something
			break;
		case 'music-controls-skip-forward':
			// Do something
			break;
		case 'music-controls-skip-backward':
			// Do something
			break;

		// Headset events (Android only)
		// All media button events are listed below
		case 'music-controls-media-button' :
			// Do something
			break;
		case 'music-controls-headset-unplugged':
			// Do something
			break;
		case 'music-controls-headset-plugged':
			// Do something
			break;
		default:
			break;
	}
}
```

## Thank yous

Thank you to the following people for helping keep this plugin tested and up-to-date via feedback and changes:

NorthFred (https://github.com/northfred)
heffthedev (https://github.com/heffthedev)

## credits & contributions

Original plugin by:
homerours (https://github.com/homerours)

This plugin has integrated much of the changes from the ghenry22 Cordova plugin.
ghenry22 (https://github.com/ghenry22)
ghenry22 successor to Cordova Music Controls (https://github.com/ghenry22/cordova-plugin-music-controls2/)

JumBay did much of the leg work in a fork to get this working on Capacitor 3.
jumbay (https://github.com/jumbay)
https://github.com/wako-app/capacitor-music-controls-plugin

Special thanks to some forks with changes:
trabdin (https://github.com/trabdin)
