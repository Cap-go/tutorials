```md
---
"title": "Using capacitor-plugin-camera Package"
"description": "A tutorial on how to integrate and use the capacitor-plugin-camera package in your Ionic application."
"created_at": "November 18, 2021"
"published": true
"slug": "capacitor-plugin-camera.git"
---

# Using capacitor-plugin-camera Package

In this tutorial, we will walk through the steps to integrate and use the capacitor-plugin-camera package in your Ionic application.

## Setting Up

Ensure you have Capacitor installed globally on your system by running the following command:

```cmd
npm install -g @capacitor/core @capacitor/cli
```

## Installing the Plugin

To add the camera plugin to your Ionic project, follow these steps:

```cmd
$ npm install capacitor-plugin-camera
```

## Usage

### Taking a Picture

To capture a picture using the camera, use the following code snippet:

```typescript
import { Camera } from 'capacitor-plugin-camera';

const takePicture = async () => {
  const image = await Camera.getPhoto();
  console.log('Image captured:', image);
};
```

### Capturing a Video

To record a video using the camera, you can use the following method:

```typescript
import { Camera } from 'capacitor-plugin-camera';

const recordVideo = async () => {
  const video = await Camera.getVideo();
  console.log('Video recorded:', video);
};
```

## Additional Configurations

You can customize the camera settings by providing options when calling the `getPhoto()` or `getVideo()` methods. Here's an example with options:

```typescript
const options = {
  quality: 90,
  allowEditing: true,
};

const image = await Camera.getPhoto(options);
```

## Conclusion

By following this tutorial, you should now be able to seamlessly integrate the capacitor-plugin-camera package into your Ionic application and utilize camera functionalities. Happy coding!
```