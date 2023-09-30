[![Npm version][npm-version]][npm-url]

[npm-version]: https://img.shields.io/npm/v/@klippa/capacitor-klippa-scanner-sdk.svg
[npm-url]: https://www.npmjs.com/package/@klippa/capacitor-klippa-scanner-sdk

# capacitor-klippa-scanner-sdk

## SDK License

Please be aware you need to have a license to use this SDK.
If you would like to use our scanner, please contact us [here](https://www.klippa.com/en/contact-en/)

## Getting started

### Android

Edit the file `android/build.gradle`, add the Klippa Maven repository:

```maven
allprojects {
    repositories {
        // ... other repositories

        maven {
            credentials {
                username "{your-username}"
                password "{your-password}"
            }
            url "https://custom-ocr.klippa.com/sdk/android/maven"
        }
    }
}
```

Replace the `{your-username}` and `{your-password}` values with the ones provided by Klippa.

### iOS

Edit the file `ios/Podfile`, add the Klippa CocoaPod:

```ruby
// Edit the platform to a minimum of 13.0, our SDK doesn't support earlier iOS versions.
platform :ios, '13.0'

target 'YourApplicationName' do
  # Pods for YourApplicationName
  // ... other pods

  pod 'Klippa-Scanner', podspec: 'https://custom-ocr.klippa.com/sdk/ios/specrepo/{your-username}/{your-password}/KlippaScanner/latest.podspec'
end
```

Replace the `{your-username}` and `{your-password}` values with the ones provided by Klippa.

Edit the file `ios/{project-name}/Info.plist` and add the `NSCameraUsageDescription` value:

```xml
...
<key>NSCameraUsageDescription</key>
<string>Access to your camera is needed to photograph documents.</string>
<key>NSPhotoLibraryAddUsageDescription</key>
<string>Access to your photo library is used to save the images of documents.</string>
...
```

## Ionic

```bash
npm install @klippa/capacitor-klippa-scanner-sdk
npx cap sync
```

Don't forget to run `pod install` in the ios folder when running the iOS app.

## Usage

### Import & Configuration

```typescript
import { KlippaScannerSDK } from '@klippa/capacitor-klippa-scanner-sdk'

// KlippaScanner configuration
const KlippaScannerConfig: CameraConfig = {
  // Required
  license: 'your-license',

  // Optional.
  // Whether to show the icon to enable "multi-document-mode"
  allowMultipleDocuments: false,

  // Whether the "multi-document-mode" should be enabled by default.
  defaultMultipleDocuments: false,

  // Ability to disable/hide the shutter button (only works when a model is supplied as well).
  shutterButton: { allowShutterButton: true, hideShutterButton: false },

  // Whether the crop mode (auto edge detection) should be enabled by default.
  defaultCrop: false,

  // Define the max resolution of the output file. It’s possible to set only one of these values. We will make sure the picture fits in the given resolution. We will also keep the aspect ratio of the image. Default is max resolution of camera.
  imageMaxWidth: 1920,
  imageMaxHeight: 1080,

  // Set the output quality (between 0-100) of the jpg encoder. Default is 100.
  imageMaxQuality: 95,

  deleteButtonText: 'Delete',

  retakeButtonText: 'Retake',

  cancelButtonText: 'Cancel',

  cancelConfirmationMessage: 'Are you sure you want to cancel?',

  cancelAndDeleteImagesButtonText: 'Delete images',

  // Optional. Only affects Android.

  // What the default color conversion will be (grayscale, original, enhanced).
  defaultColor: 'enhanced',

  // Where to put the image results.
  //StoragePath: '/sdcard/scanner',

  // The filename to use for the output images, supports replacement tokens %dateTime% and %randomUUID%.
  //OutputFilename: 'KlippaScannerExample-%dateTime%-%randomUUID%',

  // The threshold sensitive the motion detection is. (lower value is higher sensitivity, default 50).
  imageMovingSensitivityAndroid: 50,

  // Whether to hide or show the rotate button in the Review Screen. (default shown/true)
  userCanRotateImage: true,

  // Whether to hide or show the cropping button in the Review Screen. (default shown/true)
  userCanCropManually: true,

  // Whether to hide or show the color changing button in the Review Screen. (default shown/true)
  userCanChangeColorSetting: true,

  // The primary color of the interface, should be a HEX Color.
  primaryColor: '#52277c',

  // The accent color of the interface, should be a  HEX Color.
  accentColor: '#52277c',

  // The overlay color (when using document detection), should be a  HEX Color.
  overlayColor: '#52277c',

  // The color of the background of the warning message, should be a  HEX Color.
  warningBackgroundColor: '#fff',

  // The color of the text of the warning message, should be a  HEX Color.
  warningTextColor: '#52277c',

  imageLimit: 5,

  // The color of the menu icons when they are enabled, should be a  HEX Color.
  iconEnabledColor: '#9B3BF9',

  // The color of the menu icons when they are disabled, should be a  HEX Color.
  iconDisabledColor: '#bab9bd',

  // The color of the menu icons of the screen where you can review/edit the images, should be a  HEX Color.
  reviewIconColor: '#fff',

  // The amount of opacity for the overlay, should be a float.
  overlayColorAlpha: 0.75,

  // The amount of seconds the preview should be visible for, should be a float.
  previewDuration: 1.0,

  // Whether the camera has a view finder overlay (a helper grid so the user knows where the document should be), should be a Boolean.
  isViewFinderEnabled: true,

  // If you would like to use a custom model for object detection. Model + labels file should be packaged in your bundle.
  // Model: {name: "model", labelsName: "labels"},

  // If you would like to enable automatic capturing of images.
  timer: { allowed: false, enabled: false, duration: 0.4 },

  // To add extra horizontal and / or vertical padding to the cropped image.
  cropPadding: { width: 100, height: 100 },

  // After capture, show a checkmark preview with this success message, instead of a preview of the image.
  success: { message: 'Success', previewDuration: 1 },

  // Whether the camera automatically saves the images to the camera roll. Default true. (iOS version 0.4.2 and up only)
  storeImagesToCameraRoll: false,

  // The threshold sensitive the motion detection is. (lower value is higher sensitivity, default 200).
  imageMovingSensitivityIOS: 200,
}
```

### Starting the scanner

The result of `KlippaScannerSDK.getCameraResult(config: CameraConfig)` is a Promise, so you can get the result with:

```typescript
// Call this in a method (i.e after a button press)
KlippaScannerSDK.getCameraResult(KlippaScannerConfig)
  .then((result) => {
    console.log(`Took ${result.images.length} pictures`)
  })
  .catch((reason) => {
    console.log(reason)
  })
```

The content of the result object is:

```typescript
{
  // Whether the MultipleDocuments option was turned on, so you can save it as default.
  "multipleDocuments": true,

  // Whether the Crop option was turned on, so you can save it as default (Android only).
  "crop": true,

  // What color option was used, so you can save it as default
  "color": "original",

  // An array of images.
  "images": [
    {
      "filePath": "example/path/to/your/image.jpg"
    }
  ]
}
```

The reject reason object has a code and a message, the used codes are:

- E_LICENSE_ERROR
- E_CANCELED
- E_UNKNOWN_ERROR

## How to use a specific version of the SDK?

### Android

Edit the file `android/build.gradle`, add the following:

```maven
allprojects {
  // ... other definitions
  project.ext {
      klippaScannerVersion = "{version}"
  }
}
```

Replace the `{version}` value with the version you want to use.

### iOS

Edit the file `ios/Podfile`, change the pod line of `Klippa-Scanner` and replace `latest.podspec` with `{version}.podspec`, replace the `{version}` value with the version you want to use.

## How to change the colors of the scanner?

### Android

Add or edit the file `android/app/src/main/res/values/colors.xml`, add the following:

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="klippa_scanner_sdk_color_Primary">#2dc36a</color>
    <color name="klippa_scanner_sdk_color_PrimaryDark">#308D53</color>
    <color name="klippa_scanner_sdk_color_Accent">#2dc36a</color>
    <color name="klippa_scanner_sdk_color_Overlay">#2dc36a</color>
    <color name="klippa_scanner_sdk_color_Warning">#BFFF0000</color>
    <color name="klippa_scanner_sdk_color_IconDisabledColor">#80FFFFFF</color>
    <color name="klippa_scanner_sdk_color_IconEnabledColor">#FFFFFFFF</color>
    <color name="klippa_scanner_sdk_color_ReviewIconColor">#FFFFFFFF</color>
</resources>
```

### iOS

Use the following properties in the config when running `getCameraResult`: `primaryColor`, `accentColor`, `overlayColor`, `warningBackgroundColor`, `warningTextColor`, `overlayColorAlpha`, `iconDisabledColor`, `iconEnabledColor`, `reviewIconColor`.

## How to change the texts in the scanner?

### Android

Use the following properties in the config when running `getCameraResult`: `deleteButtonText`, `retakeButtonText`, `cancelButtonText`, `cancelAndDeleteImagesButtonText`, `cancelConfirmationMessage`, `moveCloserMessage`, `imageMovingMessage`, `imageLimitReachedMessage`, `orientationWarningMessage`.

or

Add or edit the file `android/app/src/main/res/values/strings.xml`, add the following:

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="klippa_zoom_message">Move closer to the document</string>
    <string name="klippa_image_limit_reached">You have reached the image limit</string>
    <string name="klippa_success_message">Success</string>
    <string name="klippa_image_moving_message">Moving too much</string>
    <string name="klippa_orientation_warning_message">Hold your phone in portrait mode</string>
    <string name="klippa_delete_button_text">Delete Photo</string>
    <string name="klippa_retake_button_text">Retake Photo</string>
    <string name="klippa_cancel_button_text">Cancel</string>
    <string name="klippa_cancel_delete_images">Delete photos and exit</string>
    <string name="klippa_cancel_confirmation">Delete photos and exit scanner?</string>
</resources>
```

### iOS

Use the following properties in the config when running `getCameraResult`: `imageTooBrightMessage`, `imageTooDarkMessage`, `deleteButtonText`, `retakeButtonText`, `cancelButtonText`, `cancelAndDeleteImagesButtonText`, `cancelConfirmationMessage`, `moveCloserMessage`, `imageMovingMessage`, `imageLimitReachedMessage`, `orientationWarningMessage`, `imageColorOriginalText`, `imageColorGrayscaleText`, `imageColorEnhancedText`.

## Important iOS notes

Older iOS versions do not ship the Swift libraries. To make sure the SDK works on older iOS versions, you can configure the build to embed the Swift libraries using the build setting `EMBEDDED_CONTENT_CONTAINS_SWIFT = YES`.

We started using XCFrameworks from version 0.1.0, if you want to use that version or up, you need CocoaPod version 1.9.0 or higher.

## Important Android notes

When using a custom trained model for object detection, add the following to your app's build.gradle file to ensure Gradle doesn’t compress the models when building the app:

```
android {
    aaptOptions {
        noCompress "tflite"
    }
}
```

## About Klippa

[Klippa](https://www.klippa.com/en) is a scale-up from [Groningen, The Netherlands](https://goo.gl/maps/CcCGaPTBz3u8noSd6) and was founded in 2015 by six Dutch IT specialists with the goal to digitize paper processes with modern technologies.

We help clients enhance the effectiveness of their organization by using machine learning and OCR. Since 2015 more than a 1000 happy clients have been served with a variety of the software solutions that Klippa offers. Our passion is to help our clients to digitize paper processes by using smart apps, accounts payable software and data extraction by using OCR.

## License

The MIT License (MIT)
