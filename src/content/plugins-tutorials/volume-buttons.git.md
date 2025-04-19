---
"title": "Using Volume Buttons Plugin in Capacitor"
"description": "Learn how to integrate and use the @capacitor-community/volume-buttons package in your Capacitor projects."
"created_at": "August 4, 2022"
"published": true
"slug": "volume-buttons.git"
---

# Using Volume Buttons Plugin in Capacitor

This tutorial will guide you on how to integrate and use the `@capacitor-community/volume-buttons` package in your Capacitor projects.

## Installation

To begin using the Volume Buttons Plugin, first, install the package using npm:

```bash
npm install @capacitor-community/volume-buttons
npx cap sync
```

## API

The Volume Buttons Plugin provides the following API methods:

### `isWatching()`

Check if the plugin is currently watching for volume button events.

### `watchVolume(...)`

Start watching for volume button events.

### `clearWatch()`

Clear the volume button event watch.

## Sample Usage

```typescript
import { VolumeButtons } from '@capacitor-community/volume-buttons';

// Watch for volume button events
VolumeButtons.watchVolume().then(() => {
  console.log('Watching volume buttons');
});

// Check if currently watching
VolumeButtons.isWatching().then((isWatching) => {
  console.log('Is watching:', isWatching);
});

// Clear the watch
VolumeButtons.clearWatch().then(() => {
  console.log('Volume button watch cleared');
});
```

Incorporate these methods into your Capacitor project to enable volume button event handling.

Happy coding!
```