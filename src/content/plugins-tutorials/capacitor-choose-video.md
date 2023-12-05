---
title: "Tutorial: Using capacitor-choose-video Package"
description: "Learn how to use the capacitor-choose-video package to select a video with Capacitor."
created_at: "2022-09-01"
published: true
slug: capacitor-choose-video
---

# Tutorial: Using capacitor-choose-video Package

In this tutorial, we will guide you through the process of using the `capacitor-choose-video` package to select a video using Capacitor. This package provides a simple and efficient way to fetch videos from the device's gallery or camera roll.

## Prerequisites
Before starting with the tutorial, make sure you have the following prerequisites installed:
- Node.js
- Capacitor

## Installation
To get started, install the `capacitor-choose-video` package by running the following command in your project directory:

```shell
npm install capacitor-choose-video
```

## Usage
1. Import the `capacitor-choose-video` package in your project:

```javascript
import { Plugins } from '@capacitor/core';
const { ChooseVideo } = Plugins;
```

2. Add a button or any interactive element to trigger the video selection process. In this example, we will use a button element:

```html
<button onclick="selectVideo()">Select Video</button>
```

3. Implement the `selectVideo` function in your JavaScript code. This function will invoke the `capacitor-choose-video` plugin and handle the response:

```javascript
// Function to handle video selection
async function selectVideo() {
  const result = await ChooseVideo.select();
  
  // Retrieve the selected video URL
  const videoUrl = result.videoUrl;
  
  // Perform further operations with the selected video
  // For example, you can display the video or upload it to a server
}
```

4. Build and run your project. Make sure to follow the appropriate build and run commands for your target platform (Android or iOS).

5. When the "Select Video" button is clicked, the video selection process will be triggered. The user will be prompted to choose a video from their device's gallery or camera roll.

6. Upon selecting a video, the `result` object will contain the `videoUrl` property, which holds the URL of the selected video. You can use this URL to perform any desired operations, such as displaying the video or uploading it to a server.

And that's it! You have successfully implemented the `capacitor-choose-video` package in your Capacitor project.

Happy coding!