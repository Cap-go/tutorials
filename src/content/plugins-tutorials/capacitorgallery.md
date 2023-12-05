---
title: "Using the capacitor-gallery package"
description: "In this tutorial, we will learn how to use the capacitor-gallery package to implement a gallery in your Capacitor app."
created_at: "2022-10-20"
published: true
slug: "capacitorgallery"
---

# Using the capacitor-gallery package

The capacitor-gallery package allows you to easily implement a gallery feature in your Capacitor app. With this package, you can display images, videos, and other media files in a gallery format, providing a seamless user experience.

In this tutorial, we will cover the following steps:

1. Installing the capacitor-gallery package
2. Setting up the Capacitor project
3. Implementing the gallery feature
4. Customizing the gallery appearance
5. Handling user interactions

Let's get started!

## Step 1: Installing the capacitor-gallery package

To install the capacitor-gallery package, open your terminal or command prompt and navigate to your Capacitor project directory. Then, run the following command:

```bash
npm install capacitor-gallery
```

This will install the capacitor-gallery package and add it as a dependency in your project.

## Step 2: Setting up the Capacitor project

Before using the capacitor-gallery package, make sure your Capacitor project is properly set up. If you haven't created a Capacitor project yet, you can use the following command to create one:

```bash
npx @capacitor/create-app
```

Once your project is set up, you can proceed to the next step.

## Step 3: Implementing the gallery feature

To implement the gallery feature, we will need to import the `Gallery` class from the capacitor-gallery package. Open the file where you want to use the gallery and add the following code at the top:

```javascript
import { Plugins } from '@capacitor/core';
const { Gallery } = Plugins;
```

Now, we can use the `Gallery` class to display the gallery in our app. Here's an example of how to use it:

```javascript
const gallery = new Gallery();
const mediaFiles = [
  // Add your media files here
];
gallery.show({
  media: mediaFiles,
});
```

In the above example, `mediaFiles` is an array of media file URIs that you want to display in the gallery. You can add your own media files by providing their URIs in the array.

## Step 4: Customizing the gallery appearance

The capacitor-gallery package provides various options to customize the appearance of the gallery. You can pass these options as a second argument to the `show` method. Here's an example:

```javascript
gallery.show({
  media: mediaFiles,
}, {
  showFullscreenButton: true,
  showShareButton: true,
});
```

In the above example, we enable the fullscreen and share buttons in the gallery. You can explore other available options in the capacitor-gallery documentation.

## Step 5: Handling user interactions

The capacitor-gallery package also allows you to handle user interactions with the gallery, such as when an image is clicked or when the gallery is closed. You can use event listeners to capture these interactions. Here's an example:

```javascript
gallery.addListener('imageClick', (index) => {
  // Handle image click event
});

gallery.addListener('galleryClosed', () => {
  // Handle gallery closed event
});
```

In the above example, we add event listeners for the `'imageClick'` and `'galleryClosed'` events. You can replace the placeholder code with your own logic to handle these events.

That's it! You have successfully implemented the capacitor-gallery package in your Capacitor app. Now you can display a gallery of media files and customize its appearance and behavior according to your requirements.

Remember to refer to the capacitor-gallery documentation for more detailed information and additional features.

Happy coding!