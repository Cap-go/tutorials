# How to Use `@capgo/camera-preview` Package

In this tutorial, we will walk you through the process of using the `@capgo/camera-preview` package. This package allows you to interact with the camera from your JavaScript and HTML code in a Capacitor project.

## Step 1: Install the Package

To get started, install the `@capgo/camera-preview` package using either `yarn` or `npm`. Open your terminal and run the following command:

```bash
yarn add @capgo/camera-preview

# or 

npm install @capgo/camera-preview
```

Once the installation is complete, synchronize the package with your project by running:

```bash
npx cap sync
```

## Step 2: Configure Android and iOS Permissions

To use the camera in your Android app, you need to add the camera permission to your `AndroidManifest.xml` file. Open the file located at `android/app/src/main/AndroidManifest.xml` and add the following line before the closing `</manifest>` tag:

```xml
<uses-permission android:name="android.permission.CAMERA" />
```

For iOS, you will need to add two permissions to your `Info.plist` file. Open the file located at `ios/App/App/Info.plist` and add the following keys:

- `NSCameraUsageDescription`: Add a description for using the camera.
- `NSMicrophoneUsageDescription`: Add a description for using the microphone (if applicable).

## Step 3: Register the Web Platform (Optional)

If you plan to use the camera preview in your web app, you need to register the web platform. Open the `app.module.ts` file in your Ionic project and add the following line:

```typescript
import '@capgo/camera-preview';
```

## Step 4: Start the Camera Preview

To start the camera preview, call the `start` method from the `@capgo/camera-preview` package in your JavaScript code. The `start` method accepts an options object to configure the camera preview. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';

const { CameraPreview } = Plugins;

const options = {
  position: 'front',
  parent: 'cameraPreview',
  previewSize: {
    width: 300,
    height: 400
  }
};

CameraPreview.start(options)
  .then(() => console.log('Camera preview started successfully'))
  .catch(error => console.error('Failed to start camera preview', error));
```

In this example, we set the camera position to `front` (to use the front-facing camera), specify the parent element with the ID `cameraPreview`, and set a custom preview size of 300x400 pixels.

## Step 5: Interact with the Camera Preview

Once the camera preview is started, you can interact with it using the available methods provided by the `@capgo/camera-preview` package. Some of the commonly used methods include:

- `capture()`: Capture a photo using the camera.
- `setFlashMode(mode: string)`: Set the flash mode to `on`, `off`, or `auto`.
- `flip()`: Flip the camera to the other side (front to back or vice versa).
- `startRecordVideo()`: Start recording a video using the camera.
- `stopRecordVideo()`: Stop recording the current video.

You can find a full list of available methods and their usage in the [documentation](https://github.com/Cap-go/capgo/blob/main/packages/camera-preview/README.md#methods).

## Conclusion

In this tutorial, you learned how to use the `@capgo/camera-preview` package to interact with the camera in your Capacitor project. You installed the package, configured Android and iOS permissions, started the camera preview, and explored some of the available methods. Now you can integrate camera functionality into your app with ease.