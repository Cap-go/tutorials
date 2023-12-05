---
title: "Using the capacitor-stash-media Package"
description: "A tutorial on how to use the capacitor-stash-media package to manage media files in your Capacitor project."
created_at: "2021-11-01"
published: true
slug: "capacitor-stash-media"
---

# Using the capacitor-stash-media Package

In this tutorial, we will learn how to use the capacitor-stash-media package to manage media files in your Capacitor project. The capacitor-stash-media package provides a simple and efficient way to select and manipulate media files such as images and videos.

## Installation

To get started, let's install the capacitor-stash-media package in your Capacitor project. Open your project's terminal and run the following command:

```shell
npm install capacitor-stash-media
```

This command will install the capacitor-stash-media package and save it as a dependency in your `package.json` file.

## Importing

Once the installation is complete, you need to import the capacitor-stash-media package in your project's code. Open the file where you want to use the package and add the following import statement:

```javascript
import { StashMedia } from 'capacitor-stash-media';
```

Make sure to import the `StashMedia` class from the `capacitor-stash-media` package.

## Selecting a Video

To select a video using the capacitor-stash-media package, you can call the `selectVideo()` method provided by the `StashMedia` class. This method opens the native video picker interface, allowing the user to choose a video from their device. Here's an example of how to use the `selectVideo()` method:

```javascript
const videoFile = await StashMedia.selectVideo();
console.log(videoFile.path);
console.log(videoFile.duration);
```

The `selectVideo()` method returns a `Promise` that resolves to an object containing information about the selected video file. In the example above, we store the result in the `videoFile` variable. You can access properties such as `path` and `duration` of the selected video file.

## Conclusion

In this tutorial, we explored the basics of using the capacitor-stash-media package to select videos in your Capacitor project. You learned how to install the package, import it into your project, and use the `selectVideo()` method to choose a video. You can now integrate the capacitor-stash-media package into your project to handle media files efficiently.

Remember to check the official documentation of the capacitor-stash-media package for more advanced features and customizations.

Feel free to experiment with the capacitor-stash-media package and explore its capabilities further. Happy coding!