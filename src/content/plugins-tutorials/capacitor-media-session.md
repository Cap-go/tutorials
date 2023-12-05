---
title: "Using @jofr/capacitor-media-session Package Tutorial"
description: "This tutorial will guide you on how to use the @jofr/capacitor-media-session package to enable media sessions and control media playback notifications in your Capacitor apps."
created_at: "2022-12-20"
published: true
slug: capacitor-media-session
---

# Using @jofr/capacitor-media-session Package Tutorial

This tutorial will guide you on how to use the @jofr/capacitor-media-session package to enable media sessions and control media playback notifications in your Capacitor apps.

## Installation

To get started, you'll need to install the @jofr/capacitor-media-session package using npm. Open your terminal and run the following command:

```bash
npm install @jofr/capacitor-media-session
```

After the installation is complete, you'll need to sync the Capacitor project with the newly installed package. Run the following command in your terminal:

```bash
npx cap sync
```

## Usage

The @jofr/capacitor-media-session package provides an API that is modeled after the Media Session Web API. This makes it easy to adapt existing documentation and knowledge of the web standard to use in your Capacitor app.

### Setting Metadata

You can set media metadata using the `setMetadata()` method. This metadata can be used by the platform UI. Here's an example of how to set metadata for a media session:

```javascript
import { MediaSessionPlugin } from '@jofr/capacitor-media-session';

// Set the metadata
MediaSessionPlugin.setMetadata({
  title: 'My Song',
  artist: 'John Doe',
  album: 'Awesome Album',
  artwork: [
    { src: 'path/to/artwork.jpg', sizes: '96x96', type: 'image/jpeg' },
    { src: 'path/to/artwork.jpg', sizes: '256x256', type: 'image/jpeg' }
  ]
});
```

### Setting Playback State

To control the playback state of the media session, you can use the `setPlaybackState()` method. This will determine whether the media playback notification should be shown. Here's an example of how to set the playback state to "playing":

```javascript
import { MediaSessionPlugin } from '@jofr/capacitor-media-session';

// Set the playback state to "playing"
MediaSessionPlugin.setPlaybackState('playing');
```

### Setting Action Handlers

You can also set action handlers to control media playback using hardware media keys or UI controls in the media playback notification. Use the `setActionHandler()` method to define the actions and their corresponding handlers. Here's an example of how to set an action handler for the "play" action:

```javascript
import { MediaSessionPlugin } from '@jofr/capacitor-media-session';

// Set the action handler for the "play" action
MediaSessionPlugin.setActionHandler('play', () => {
  // Handle the "play" action
  console.log('Play button clicked');
});
```

### Setting Position State

If your media session supports seeking or displaying the current playback position, you can use the `setPositionState()` method to update the position state. Here's an example of how to set the position state:

```javascript
import { MediaSessionPlugin } from '@jofr/capacitor-media-session';

// Set the position state
MediaSessionPlugin.setPositionState({
  duration: 120, // Total duration in seconds
  playbackRate: 1, // Current playback rate
  position: 60 // Current playback position in seconds
});
```

## Conclusion

In this tutorial, you learned how to use the @jofr/capacitor-media-session package to enable media sessions and control media playback notifications in Capacitor apps. You learned how to set metadata, control the playback state, set action handlers, and update the position state of the media session. With this knowledge, you can enhance your app's media playback experience and provide a seamless user interface.

For more detailed documentation and examples, refer to the official [documentation](https://github.com/jofr/capacitor-media-session).

Happy coding!
