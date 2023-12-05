## Tutorial: Using capacitor-welcome-sound Package

Welcome to this tutorial on how to use the `capacitor-welcome-sound` package in your Capacitor app!

### Introduction

The `capacitor-welcome-sound` package is a useful tool that allows you to play a welcome sound when your app starts. Whether you want to create a pleasant user experience or add a touch of branding to your app, this package makes it easy to incorporate a welcoming sound.

In this tutorial, we will cover the following topics:

1. Installation
2. Configuration
3. API Reference
4. Usage Examples

Let's get started!

### Installation

To install the `capacitor-welcome-sound` package, open your terminal and run the following command:

```
npm install capacitor-welcome-sound
```

### Configuration

After installing the package, you need to configure it properly in your Capacitor app.

#### iOS Configuration

For iOS, you need to manually add the welcome sound file to the Xcode project. Follow these steps:

1. Locate the folder `ios/App/App`.
2. Add your welcome sound file (in `.mp3` or `.wav` format) to this folder.
3. Open `ios/App/App/Images.xcassets`.
4. Right-click on an empty area and select "Import from Project..."
5. Choose your welcome sound file and click "Finish".

#### Android Configuration

For Android, you need to add the welcome sound file to the `res/raw` folder. Follow these steps:

1. Locate the folder `android/app/src/main/res`.
2. Open the `raw` folder (create it if it doesn't exist).
3. Add your welcome sound file (in `.mp3` or `.wav` format) to this folder.

### API Reference

The `capacitor-welcome-sound` package provides the following methods:

- `play()`: Plays the welcome sound.

### Usage Examples

To use the `capacitor-welcome-sound` package in your app, follow these examples.

#### TypeScript

```typescript
import { Plugins } from '@capacitor/core';

const { WelcomeSound } = Plugins;

...

WelcomeSound.play();
```

#### JavaScript

```javascript
const { WelcomeSound } = Capacitor.Plugins;

...

WelcomeSound.play();
```

That's it! You have successfully installed and configured the `capacitor-welcome-sound` package in your Capacitor app. Now, your app will play a welcome sound when it starts.

### Conclusion

In this tutorial, we explored how to use the `capacitor-welcome-sound` package to add a welcome sound to your Capacitor app. We covered the installation, configuration, API reference, and usage examples.

I hope you found this tutorial helpful! If you have any further questions, please feel free to ask.

---

title: "Using capacitor-welcome-sound Package"
description: "Learn how to use the capacitor-welcome-sound package to play a welcome sound in your Capacitor app."
created_at: "2022-09-28"
published: true
slug: "capacitor-welcome-sound"
---