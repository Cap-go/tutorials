---
title: "Using Capacitor Video Picker Package"
description: "Learn how to use the choose-video package in Capacitor to select a video"
created_at: "2022-04-14"
published: true
slug: "capacitor-ios-choose-video"
---

# Using the Capacitor choose-video Package

In this tutorial, we will learn how to use the choose-video package in Capacitor to select a video from the device's gallery. This package provides a simple and efficient way to integrate video selection functionality into your Capacitor applications.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- Capacitor version 2 or higher installed in your project.
- The choose-video package installed in your Capacitor project.

## Installation

To install the choose-video package, run the following command in your Capacitor project directory:

```shell
npm install capacitor-choose-video
```

## Usage

1. Import the choose-video package in your JavaScript or TypeScript file:

```javascript
import { Plugins } from '@capacitor/core';
const { ChooseVideo } = Plugins;
```

2. Use the `ChooseVideo` plugin to open the video picker:

```javascript
ChooseVideo.show().then(result => {
  // Handle the selected video
}).catch(error => {
  // Handle error
});
```

3. Handle the selected video in the promise result:

```javascript
ChooseVideo.show().then(result => {
  const videoPath = result.path;
  const videoThumbnail = result.thumbnail;
  // Use the selected video path and thumbnail as needed
}).catch(error => {
  // Handle error
});
```

4. Optionally, you can set additional options for the video picker:

```javascript
ChooseVideo.show({
  quality: 80, // Set the video quality (0-100)
  duration: 30, // Set the maximum duration in seconds
}).then(result => {
  // Handle the selected video
}).catch(error => {
  // Handle error
});
```

That's it! You have successfully integrated the choose-video package into your Capacitor project. Now you can use the video picker to select videos from the device's gallery.

## Conclusion

In this tutorial, we have learned how to use the choose-video package in Capacitor to select a video. We covered the installation process, basic usage, handling selected videos, and additional options for the video picker. You are now equipped with the knowledge to implement video selection functionality in your Capacitor applications.

Happy coding!