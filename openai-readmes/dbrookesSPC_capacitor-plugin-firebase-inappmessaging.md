# capacitor-plugin-firebase-in-app-messaging

Add In-App Messaging to Ionic Apps

## Install

```bash
npm install capacitor-plugin-firebase-in-app-messaging
npx cap sync
```

## Usage

To enable in-app messaging and start recieving content from Firebase, make sure you have also installed and initialised Firebase core, and Firebase analytics

Instructions to enable debugging mode and to use the "Test on Device" feature are here [Get started with Firebase In-App Messaging](https://firebase.google.com/docs/in-app-messaging/get-started?platform=ios)

Supporting event listeners to react to interactions with content is a work in progress, but will eventually allow subscribing to:

```
messageDismissed
messageClicked
impressionDetected
displayError
```
