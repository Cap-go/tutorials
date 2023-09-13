<h1 align="center" style="color: crimson; font-weight: bold;">WORK IN PROGRESS, DO NOT USE</h1>
<h2 align="center">Capacitor Music Control</h2>
<p align="center"><strong><code>capacitor-music-control</code></strong></p>
<p align="center">
  This is <i>aspiring to be</i> a <a href="https://capacitor.ionicframework.com">Capacitor</a> plugin that allows you to play a mp3 audio on all systems, whie also displaing a media notification like the one in the image on both <strong>Android</strong> and <strong>iOS</strong>.
</p>

This plugin is forked from a fork of the original Cordova plugin that can be found here:
https://github.com/ingageco/capacitor-music-controls-plugin

## Observations

- This currently **only works on Android**
- Custom cover images are not implemented yet
- There's many bugs for sure

## Installation

```console
yarn add capacitor-music-control
```

Sync native files to capacitor:

```bash
npx cap sync
```

## Configuration

If you don't want a notification or auto-play you can add this to your capacitor config file.
Default is `true` for both

**_This only affects android_**

```json
[...]
"plugins": {
	"MusicControl": {
		showNotification: false,
		autoPlay: false
	}
}
[...]
```

## Using your own icon

The notification will try to use the resource named **cmc_small_icon** located on the app project. If it's not there, the play icon will be used

## Usage

```typescript
import { MusicControl } from 'capacitor-music-control'
```

### Available methods

```typescript
// creates the media player and starts loading the music file
MusicControl.create({
	track: "cool music",
	url: "https://random.site/music.mp3",
	album: "album name",
	artist: "artist name"
	autoPlay: false //default is true, only works on web
});

// toggles play/pause, state is handled by the plugin
MusicControl.togglePlayPause();

// stops the whole thing
MusicControl.destroy();

```

### Events

```typescript
import { MusicControlEvents } from 'capacitor-music-control'

// isPlaying
MusicControl.addListener(MusicControlEvents.IS_PLAYING, (data: { isPlaying: boolean }) => {
  // triggered whenever the music is played or stopped
})

// songFinished
MusicControl.addListener(MusicControlEvents.FINISHED, (data: { isPlaying: boolean }) => {
  // triggered whenever the music ends
})

// mediaActions
MusicControl.addListener(MusicControlEvents.NOTIFICATION_ACTIONS, (data: { action: 'play' | 'pause' | 'previous' | 'next' | 'destroy' }) => {
  // triggered when the user interacts with the notification
})

// timeUpdated
MusicControl.addListener(MusicControlEvents.TIME_UPDATED, (data: { currentTime: number }) => {
  // track the music progress in seconds
})

// musicLoaded
MusicControl.addListener(MusicControlEvents.MUSIC_LOADED, (data: { duration: number }) => {
  // triggered when the music file is done loading
})

// mediaSessionActions
MusicControl.addListener('mediaSessionActions', (data: { action: 'play' | 'pause' | 'previous' | 'next' }) => {
  // triggered trough the media session, currently not implemented
})
```

## Credits

Original plugin by [ingageco](https://github.com/ingageco)

Original _cordova_ plugin by [homerours](https://github.com/homerours)

Documentation shamelessly copied from [capacitor-community](https://github.com/capacitor-community)
