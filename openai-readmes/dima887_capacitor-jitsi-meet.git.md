# Jitsi Meet Capacitor Plugin for Ionic Apps
<img src="https://img.shields.io/npm/v/capacitor-jitsi-meet?style=flat-square" />

This Capacitor plugin is created to make video calls through the free, open-sourced Jitsi video platform (https://meet.jit.si) on iOS and Android.

## Compatibility to Capacitor Versions

<table>
  <thead>
    <tr>
      <th>Capacitor</th>
      <th>capacitor-jitsi-meet</th>
      <th>supported</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        v7
      </td>
      <td>
        >= 7.0.0
      </td>
      <td>
        current
      </td>
    </tr>
  </tbody>
</table>

Follow the [Capacitor doc to upgrade to the latest Capacitor version](https://capacitorjs.com/docs). Read the [Jitsi Meet developer doc](https://jitsi.github.io/handbook/docs/category/developer-guide) for additional information on self-hosting your own videobridge and other SDK features.

## Embedding in web applications

This plugin does not currently support web implementation. We recommend using the Jitsi iFrame API (https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe) for full web implementation.

## Usage

1. Install the plugin

Install from NPM (release build):
```
npm i @dima887/capacitor-jitsi-meet
```
2. use it as a [Capacitor Plugin](https://capacitorjs.com/docs/getting-started#adding-capacitor-to-your-app).
```javascript

import { Jitsi } from "@dima887/capacitor-jitsi-meet";

const result = await Jitsi.joinConference({
    // required parameters
    roomName: 'room1', // room identifier for the conference
    url: 'https://meet.jit.si', // endpoint of the Jitsi Meet video bridge

    // recommended settings for production build. see full list of featureFlags in the official Jitsi Meet SDK documentation
    featureFlags: {
        'prejoinpage.enabled': false, // go straight to the meeting and do not show the pre-join page
        'recording.enabled': false, // disable as it requires Dropbox integration
        'live-streaming.enabled': false, // 'sign in on Google' button not yet functional
        'android.screensharing.enabled': false, // experimental feature, not fully production ready
    },

    // optional parameters
    subject: string, // name of the video room
    displayName: string, // user's display name
    email: string, // user's email
    avatarURL: string, // user's avatar url
    startWithAudioMuted: true, // start with audio muted, default: false
    startWithVideoMuted: false, // start with video muted, default: false
    chatEnabled: false, // enable Chat feature, default: true
    inviteEnabled: false, // enable Invitation feature, default: true

    // advanced parameters (optional)
    token: string, // jwt authentication token
    configOverrides: { 'p2p.enabled': false }, // see list of config overrides in the official Jitsi Meet SDK documentation
});
console.log(result) // { success: true }

window.addEventListener('onConferenceJoined', () => {
    // do things here
});
window.addEventListener('onConferenceTerminated', () => {
    // do things here
});
window.addEventListener('onConferenceLeft', () => {
    // do things here
});
window.addEventListener('onChatMessageReceived', (data: any) => {
    // console.log("message", JSON.stringify(data))
    // {"isTrusted":false,"senderId":"00b50123","isPrivate":"false","message":"this is the message","timestamp":"2024-09-16T18:53:34Z"}
});
window.addEventListener('onParticipantsInfoRetrieved', (data: any) => {
    // console.log("participant info", JSON.stringify(data));
    //{"isTrusted":false,"participantsInfo":"[{participantId=00b50123, name=My Name, role=moderator, avatarUrl=https://xxx.png, isLocal=true}
});

const result = await Jitsi.leaveConference()
console.log(result) // { success: true }
```

3. Build the project

```
$ npm run build
```

4. Follow the deployment instructions for [Android](android/README.md) and [iOS](ios/README.md).

## New Features (Fork)

### Custom Toolbar Buttons

```javascript
const result = await Jitsi.joinConference({
    // required parameters
    roomName: 'room1', // room identifier for the conference
    url: 'https://meet.jit.si', // endpoint of the Jitsi Meet video bridge

    // optional parameters
    configOverrides: {
        customToolbarButtons: [
            {
                icon: 'https://w7.pngwing.com/pngs/987/537/png-transparent-download-downloading-save-basic-user-interface-icon-thumbnail.png',
                id: 'btn1',
                text: 'Button one'
            },
            {
                icon: 'https://w7.pngwing.com/pngs/987/537/png-transparent-download-downloading-save-basic-user-interface-icon-thumbnail.png',
                id: 'btn2',
                text: 'Button two'
            }
        ]
    },
});

const handleCustomButton = async (event) => {
    try {
        const { id, text } = event;
        if (id === 'btn1') {
            console.log(id, text);
            // do things here
        } else if (id === 'btn2') {
            console.log(id, text);
            // do things here
        }
    } catch (e) {
        console.error('Error parsing custom button event:', e);
    }
};

window.addEventListener('onCustomButtonPressed', handleCustomButton);
```

### Picture-in-Picture (PiP)
```javascript
await Jitsi.enterPictureInPictureMode();
```

### iOS-only: hideConference() / showConference()
You can programmatically hide/show the native Jitsi UI on iOS without ending the call:
```javascript
await Jitsi.hideConference();
await Jitsi.showConference();
```

## Official Jitsi-Meet SDK Documentation

This plugin uses the Jitsi Meet SDK. See the [Jitsi Meet SDK documentation](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-ios-sdk), and the lists of [feature flags](https://jitsi.github.io/handbook/docs/dev-guide/mobile-feature-flags) and [config overrides](https://github.com/jitsi/jitsi-meet/blob/master/config.js).

## Sample React App for Android

You can see a [React Demo App](https://github.com/calvinckho/react-capacitor-jitsi-meet-sample) which runs the Jitsi meeting on the Android device

## Feature Requests, Jitsi SDK UI Customizations, Picture-In-Picture Mode Implementation

For feature requests, create an issue with a label 'feature request'. I also offer paid consultation services, such as SDK UI customization, and helping you implement the [Picture-in-Picture mode of the video view](https://ds.ivr.solutions/media/pip_demo.mp4). To submit a request, create an issue and add the label 'sdk customization' or 'pip implementation'.

## Using the Latest SDK Version

Jitsi releases new SDK versions fairly frequently. Help is appreciated to update the plugin to use the latest SDKs, and to test it on actual projects. Follow the instructions below to update the plugin, then create a PR. I will release it on NPM once it is thoroughly tested.

### iOS folder:

in /CapacitorJitsiMeet.podspec, change s.dependency 'JitsiMeetSDK' with the latest version number

in /ios/Plugin/Podfile, update line 10 and line 25 with the latest version number


### Android folder:

in /capacitor-jitsi-meet/android/build.gradle, update line 55 with the latest version number
```
implementation ('org.jitsi.react:jitsi-meet-sdk:[version number]') { transitive = true }
```

## Production Jitsi Server Configuration
https://meet.jitsi.si is designed for testing purposes when used with the Jitsi API. According to Jitsi, it is not intended for production use. Meetings created with this server will be limited to 5 minutes. In addition, also note that [fully anonymous meetings are no longer possible](https://jitsi.org/blog/authentication-on-meet-jit-si/) under the Jitsi Meet API when using this server.

The examples here use `url: 'https://meet.jit.si'` for the Jitsi server, but this server is only intended for test usage.

For production usage, one should either use a self-hosted server, or use [JaaS](https://jaas.8x8.vc/), Jitsi-as-a-Service. This latter service can be found at https://jaas.8x8.vc/.

To use JaaS with this plugin use: `url: 'https://8x8.vc/'` when initializing via the start() function. For embedding in web applications (a browser), use the iFrame API, not this plugin. You will need to load the iFrame javascript from `https://8x8.vc/libs/external_api.min.js'`. 

The usage of JaaS requires an account and a payment method. At the time of this writing, 25 users are permitted per month for free, and after that one must pay.

Further information:

https://jitsi.org/api/

https://jitsi.org/blog/authentication-on-meet-jit-si/

https://community.jitsi.org/t/authentication-on-meet-jit-si/125922/53


## Acknowledgements

This plugin enables web and mobile apps to implement video conferencing feature for free. The Jitsi Meet mobile SDKs are actively maintained by Jitsi. Video bridges for multi-user video conferencing is powered by [Jitsi Meet](https://meet.jit.si), or you can run [your own video bridge](https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-start).
