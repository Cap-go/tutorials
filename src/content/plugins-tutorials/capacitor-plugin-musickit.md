---
title: "Using the capacitor-plugin-musickit Package"
description: "Learn how to integrate and utilize the capacitor-plugin-musickit package in your Capacitor projects."
created_at: "2022-01-21"
published: true
slug: capacitor-plugin-musickit
---

# Using the capacitor-plugin-musickit Package

The capacitor-plugin-musickit package allows you to integrate and utilize Apple's MusicKit APIs in your Capacitor projects. With this plugin, you can access various MusicKit functionalities such as playing music, getting user library information, and managing playlists.

In this tutorial, we will cover the following topics:

1. Installation and Setup
2. Initializing MusicKit
3. Requesting User Authorization
4. Playing Music
5. Getting User Library Information
6. Managing Playlists

Let's get started!

## 1. Installation and Setup

To begin, install the capacitor-plugin-musickit package by running the following command:

```bash
npm install capacitor-plugin-musickit
```

After the installation is complete, integrate the plugin into your Capacitor project by following these steps:

1. Import the plugin in your main module or app component:
```typescript
import { Plugins } from '@capacitor/core';
const { MusicKitPlugin } = Plugins;
```

2. Register the plugin with Capacitor:
```typescript
import '@capacitor-community/music-kit/dist/esm';
```

3. Initialize the plugin in your project:
```typescript
async function initMusicKit() {
  const result = await MusicKitPlugin.initialize();
  // Handle result
}
```

## 2. Initializing MusicKit

After the plugin is set up, you need to initialize MusicKit with your developer token and configuration file. Follow these steps:

1. Generate a MusicKit token from the Apple Developer portal.

2. Place the generated token file in your project's root directory.

3. Initialize MusicKit in your code:
```typescript
async function initMusicKit() {
  const result = await MusicKitPlugin.initialize({
    tokenPath: 'path/to/your/token',
    appBundleId: 'your.app.bundle.id',
  });
  // Handle result
}
```

## 3. Requesting User Authorization

Before accessing the user's library and playing music, you need to request user authorization.

1. Request authorization from the user:
```typescript
async function requestAuthorization() {
  const result = await MusicKitPlugin.requestAuthorization();
  // Handle result
}
```

2. Check the user's authorization status:
```typescript
async function checkAuthorizationStatus() {
  const result = await MusicKitPlugin.checkAuthorizationStatus();
  // Handle result
}
```

## 4. Playing Music

Now that you have initialized MusicKit and obtained user authorization, you can start playing music.

1. Play a specific song using its identifier:
```typescript
async function playSong(songIdentifier: string) {
  const result = await MusicKitPlugin.playSong(songIdentifier);
  // Handle result
}
```

2. Play a playlist by its identifier:
```typescript
async function playPlaylist(playlistIdentifier: string) {
  const result = await MusicKitPlugin.playPlaylist(playlistIdentifier);
  // Handle result
}
```

## 5. Getting User Library Information

You can retrieve information about the user's library, such as their playlists and recently played items.

1. Get the user's playlists:
```typescript
async function getUserPlaylists() {
  const result = await MusicKitPlugin.getUserPlaylists();
  // Handle result
}
```

2. Get the user's recently played items:
```typescript
async function getRecentlyPlayed() {
  const result = await MusicKitPlugin.getRecentlyPlayed();
  // Handle result
}
```

## 6. Managing Playlists

MusicKit also allows you to create, modify, and delete playlists.

1. Create a new playlist:
```typescript
async function createPlaylist(playlistName: string) {
  const result = await MusicKitPlugin.createPlaylist(playlistName);
  // Handle result
}
```

2. Add a song to a playlist:
```typescript
async function addSongToPlaylist(playlistIdentifier: string, songIdentifier: string) {
  const result = await MusicKitPlugin.addSongToPlaylist(playlistIdentifier, songIdentifier);
  // Handle result
}
```

3. Remove a song from a playlist:
```typescript
async function removeSongFromPlaylist(playlistIdentifier: string, songIdentifier: string) {
  const result = await MusicKitPlugin.removeSongFromPlaylist(playlistIdentifier, songIdentifier);
  // Handle result
}
```

That's it! You have now learned how to integrate and use the capacitor-plugin-musickit package in your Capacitor projects. You can explore the complete set of functions provided by the plugin in their [official documentation](https://github.com/capacitor-community/music-kit).

Feel free to experiment with the plugin and enhance your apps with powerful MusicKit features. Happy coding!