# How to Use capacitor-jitsi-meet Package

The `capacitor-jitsi-meet` package allows you to make video calls through the Jitsi video platform in your Ionic Capacitor applications. Follow the steps below to use this package in your project.

## Installation

1. Open your project in the terminal.

2. Install the `capacitor-jitsi-meet` package by running the following command:

```bash
npm install capacitor-jitsi-meet
```

3. Import the `Jitsi` module in your code:

For Capacitor 3:

```javascript
import { Jitsi } from 'capacitor-jitsi-meet';
```

For Capacitor 1 and 2:

```javascript
import { Plugins } from '@capacitor/core';
import 'capacitor-jitsi-meet';

const { Jitsi } = Plugins;
```

## Usage

You can now use the `Jitsi` module to join a conference. Here's an example of how to use it:

```javascript
const result = await Jitsi.joinConference({
    // required parameters
    roomName: 'room1', // room identifier for the conference
    url: 'https://meet.jit.si', // endpoint of the Jitsi Meet video bridge

    // recommended settings for production build
    featureFlags: {
        'recording.enabled': false,
        'live-streaming.enabled': false,
        'android.screensharing.enabled': false
    },

    // optional parameters
    subject: 'My Video Room',
    displayName: 'John Doe',
    email: 'john.doe@example.com',
    avatarURL: 'https://example.com/avatar.jpg',
    startWithAudioMuted: true,
    startWithVideoMuted: false,
    chatEnabled: false,
    inviteEnabled: false,

    // advanced parameters (optional)
    token: 'your-jwt-authentication-token',
    configOverrides: { 'p2p.enabled': false },
});
```

Make sure to replace the values in the example with your own.

That's it! You have successfully integrated the `capacitor-jitsi-meet` package into your Ionic Capacitor application. You can now make video calls using the Jitsi platform.