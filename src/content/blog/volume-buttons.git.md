---
"title": "Using @capacitor-community/volume-buttons Package",
"description": "Learn how to use the @capacitor-community/volume-buttons package to listen to hardware volume button presses in your Capacitor app.",
"created_at": "2022-01-17",
"published": true,
"slug": "volume-buttons-git"
---

# Using @capacitor-community/volume-buttons

In this tutorial, we will explore how to use the `@capacitor-community/volume-buttons` package to listen to hardware volume button presses in your Capacitor app.

## Installation

To get started, install the package using npm:

```bash
npm install @capacitor-community/volume-buttons
npx cap sync
```

## Usage

Import the plugin in your code:

```javascript
import { VolumeButtons } from '@capacitor-community/volume-buttons';
```

### Check if Watching

You can check if the volume buttons are being watched:

```javascript
const watching = await VolumeButtons.isWatching();
```

### Watch Volume Buttons

You can start watching the volume buttons and listen for events:

```javascript
VolumeButtons.watchVolume((result) => {
    console.log('Volume Button Event:', result);
});
```

### Clear Watch

To stop watching the volume buttons:

```javascript
VolumeButtons.clearWatch();
```

That's it! You have now learned how to use the `@capacitor-community/volume-buttons` package in your Capacitor app to listen to hardware volume button presses.