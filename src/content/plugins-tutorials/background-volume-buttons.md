---
title: "Using the Background Volume Buttons Package"
description: "Learn how to use the background-volume-buttons package to control audio volume in the background of your app."
created_at: "2022-10-14"
published: true
slug: background-volume-buttons
---

# Using the Background Volume Buttons Package

In this tutorial, we will learn how to use the background-volume-buttons package to control audio volume even when your app is running in the background. This package is particularly useful for audio streaming or music player apps where users may want to adjust the volume without having to bring the app to the foreground.

## Prerequisites

Before getting started, make sure you have the following:

- Node.js and npm installed on your machine.
- A React Native or Expo project set up and running.

## Step 1: Install the Package

To begin, open your terminal and navigate to the root directory of your React Native or Expo project. Run the following command to install the background-volume-buttons package:

```bash
npm install background-volume-buttons
```

## Step 2: Configure the Package

In the file where you want to use the background volume buttons feature, import the package:

```javascript
import BackgroundVolumeButtons from 'background-volume-buttons';
```

Next, initialize the package by calling the `BackgroundVolumeButtons.initialize()` method. This method will start listening for volume button events in the background.

```javascript
BackgroundVolumeButtons.initialize();
```

## Step 3: Use the Volume Buttons

Now that the package is configured, you can use the volume buttons to control the audio volume even when your app is in the background. The package provides two helper functions: `BackgroundVolumeButtons.increaseVolume()` and `BackgroundVolumeButtons.decreaseVolume()`, which you can call to adjust the volume programmatically.

Here's an example of how you can use these functions in your app:

```javascript
import BackgroundVolumeButtons from 'background-volume-buttons';

function App() {
  const handleIncreaseVolume = () => {
    BackgroundVolumeButtons.increaseVolume();
  };

  const handleDecreaseVolume = () => {
    BackgroundVolumeButtons.decreaseVolume();
  };

  return (
    <View>
      <Button title="Increase Volume" onPress={handleIncreaseVolume} />
      <Button title="Decrease Volume" onPress={handleDecreaseVolume} />
    </View>
  );
}
```

## Step 4: Clean up

When your app is no longer using the background volume buttons feature, it's important to clean up by calling the `BackgroundVolumeButtons.cleanup()` method. This will stop listening for volume button events and release any resources used by the package.

```javascript
BackgroundVolumeButtons.cleanup();
```

## Conclusion

In this tutorial, we learned how to use the background-volume-buttons package to control audio volume in the background of your app. We covered the installation and configuration of the package, as well as using the volume buttons to adjust the volume programmatically. Remember to clean up the package when you're done using it to ensure proper resource management.

Now you can enhance your audio streaming or music player app by allowing users to control the volume even when the app is running in the background. Happy coding!