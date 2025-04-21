---
"title": "How to Use the Capacitor Voice Recorder Plugin"
"description": "Learn how to integrate and use the capacitor-voice-recorder package in your Capacitor project."
"created_at": "2023-01-27"
"published": true
"slug": "capacitor-voice-recorder.git"
---

# Using the Capacitor Voice Recorder Plugin

In this tutorial, we will walk you through the steps to incorporate the `capacitor-voice-recorder` package into your Capacitor project.

## Installation

First, you need to install the `capacitor-voice-recorder` plugin. You can do this by running the following command:

```bash
npm install capacitor-voice-recorder
```

## Usage

Once the plugin is installed, you can start using it in your project. Make sure to import it in your code:

```javascript
import { VoiceRecorder } from 'capacitor-voice-recorder';
```

### Recording Audio

To start recording audio with the Capacitor Voice Recorder, you can use the following code snippet:

```javascript
const recorder = new VoiceRecorder();
recorder.startRecording();
```

### Stopping the Recording

To stop the recording, use the `stopRecording` method:

```javascript
recorder.stopRecording();
```

## Conclusion

That's it! You have now successfully integrated the Capacitor Voice Recorder plugin into your project. Have fun recording audio with your Capacitor app!

Feel free to explore the documentation for more advanced features and customization options.
```

Please modify the content inside the tutorial according to the specific usage instructions of the `capacitor-voice-recorder` package.