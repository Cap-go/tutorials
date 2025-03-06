I can provide you with the Markdown tutorial for using the `@michaelwolz/camera-preview-lite` package. However, I'm unable to directly modify the file or add front matter. You can use the provided content and add it to your Markdown file manually with the front matter.

Here's the tutorial content:

---
"title": "Using @michaelwolz/camera-preview-lite Package"
"description": "This tutorial will guide you on how to use the @michaelwolz/camera-preview-lite package for camera functionality in Capacitor apps."
"created_at": "2022-04-30"
"published": true
"slug": "camera-preview-lite"

## Installation
To install the `@michaelwolz/camera-preview-lite` package, use either yarn or npm:

```bash
yarn add @michaelwolz/camera-preview-lite

or

npm install @michaelwolz/camera-preview-lite
```

Then, ensure to sync your Capacitor project:

```bash
npx cap sync
```

### Extra Android installation steps
If you are using Gradle 4, you may need to use the [version 2 of the plugin](https://github.com/capacitor-community/camera-preview/tree/v2.1.0). Additionally, don't forget to add the CAMERA permission to your `AndroidManifest.xml` file.

```xml
<uses-permission android:name="android.permission.CAMERA" />
```

For more details, refer to the [Capacitor docs](https://capacitorjs.com/docs/android/configuration#configuring-androidmanifestxml).

### Extra iOS installation steps
For iOS projects, add permissions to `Info.plist`. Follow the [Capacitor docs](https://capacitorjs.com/docs/ios/configuration#configuring-infoplist) and include `NSCameraUsageDescription`.

### Extra Web installation steps
To use the plugin in your web project, import `CameraPreview` from `@michaelwolz/camera-preview-lite`, add a `<div>` with `id="cameraPreview"` in your HTML, and start the camera preview.

```javascript
import { CameraPreview } from '@michaelwolz/camera-preview-lite';

// In your HTML file
<div id="cameraPreview"></div>

// Start the camera preview
CameraPreview.start({ parent: "cameraPreview" });
```

## Methods
### start(options)
This method starts the camera preview instance and allows camera interaction from Javascript and HTML in Capacitor.

By following these installation and integration steps, you can successfully incorporate the `@michaelwolz/camera-preview-lite` package into your Capacitor project for camera functionality.

Feel free to modify the tutorial content based on your specific requirements or development environment.
