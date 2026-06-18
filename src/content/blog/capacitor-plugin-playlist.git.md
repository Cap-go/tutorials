```markdown
---
"title": "Tutorial on Using capacitor-plugin-playlist Package"
"description": "A guide on how to utilize the capacitor-plugin-playlist package for managing audio playlists, background support, and lock screen controls in Capacitor 3.0 for Android, iOS, and Web."
"created_at": "September 1, 2022"
"published": true
"slug": "capacitor-plugin-playlist.git"
---


# Capacitor Plugin Playlist Tutorial

This tutorial will walk you through the steps to effectively use the capacitor-plugin-playlist package in your Capacitor 3.0 project. The capacitor-plugin-playlist provides native support for audio playlists, background support, and lock screen controls for Android, iOS, and Web platforms.

## Installation

To install the capacitor-plugin-playlist package, follow these steps:

1. Run the following command in your project directory:

```bash
npm i capacitor-plugin-playlist
npx cap sync
```

2. For web development, include `hls.js` in your build dependencies. If you are using Angular 2+, you can include it in your `angular.json` file:

```json
"scripts": [
  {
    "input": "node_modules/hls.js/dist/hls.min.js"
  }
]
```


## Usage

Once the package is installed, you can start using it to manage audio playlists and enable background support and lock screen controls in your mobile application.

Example usage code snippets will be provided here to demonstrate how you can incorporate the capacitor-plugin-playlist functionalities into your project.

## Additional Notes

- On Android, the package utilizes a wrapper over ExoPlayer called ExoMedia.
- On iOS, a customized AVQueuePlayer is used to provide feedback about track changes and buffering.
- This package is not suitable for rapid-fire, low-latency audio actions like in games. For that purpose, consider using cordova-plugin-nativeaudio.
- Mixing audio is not supported due to lock screen and command center control functionalities. If mixing audio is required, consider an alternative plugin like NativeAudio.

By following this tutorial, you will be able to effectively integrate the capacitor-plugin-playlist package into your Capacitor project and enhance the audio playback experience for your users. Enjoy coding!

```