# Using capacitor-useful-audio package tutorial

---

title: "Using capacitor-useful-audio package"
description: "Learn how to use capacitor-useful-audio package to handle audio in your Capacitor applications."
created_at: "2023-09-22"
published: true
slug: capacitor-useful-audio

---

In this tutorial, we will explore how to use the capacitor-useful-audio package to handle audio in your Capacitor applications.

## Step 1: Installation

To begin, you'll need to install the capacitor-useful-audio package. Open your terminal and navigate to your project directory. Run the following command:

```bash
npm install capacitor-useful-audio
```

This will install the necessary dependencies for using the package.

## Step 2: Importing the Package

Next, you'll need to import the necessary functions from the capacitor-useful-audio package into your project.

```javascript
import { AudioRecorder, AudioPlayer } from 'capacitor-useful-audio';
```

Make sure to import the required functions based on your specific audio requirements.

## Step 3: Recording Audio

To record audio using the capacitor-useful-audio package, you can utilize the `AudioRecorder` function. Here's an example of how to start recording audio:

```javascript
const startRecording = async () => {
  const { filePath } = await AudioRecorder.startRecording();
  console.log(`Recording started. File path: ${filePath}`);
};
```

You can customize the behavior and options of the recorder as per your needs. 

## Step 4: Playing Audio

To play audio using the capacitor-useful-audio package, you can utilize the `AudioPlayer` function. Here's an example of how to play an audio file:

```javascript
const playAudio = async () => {
  const { filePath, duration } = await AudioPlayer.play({
    src: 'path/to/audio/file.mp3',
    loop: false,
    volume: 0.5,
  });
  console.log(`Playing audio. File path: ${filePath}. Duration: ${duration}`);
};
```

You can pass various options to the `play` function like `loop`, `volume`, etc. to customize the audio playback.

## Step 5: Stop Recording or Playback

Both the recording and playback can be stopped using the `stop` function as shown below:

```javascript
AudioRecorder.stopRecording();
AudioPlayer.stop();
```

Make sure to use the appropriate function based on whether you want to stop recording or playback.

That's it! You've now learned how to use the capacitor-useful-audio package to handle audio in your Capacitor applications. Experiment with the different functions and options provided by the package to suit your specific needs.

Happy coding!