# Capacitor (Multi-) Photopicker Plugin

[![version](https://img.shields.io/github/package-json/v/enertrag/photopicker)](https://github.com/enertrag/photopicker)
[![npm](https://img.shields.io/npm/v/@enertrag/photopicker.svg)](https://www.npmjs.com/package/@enertrag/photopicker)
[![issues](https://img.shields.io/github/issues/enertrag/photopicker)](https://github.com/enertrag/photopicker/issues)
[![license](https://img.shields.io/github/license/enertrag/photopicker)](https://github.com/enertrag/photopicker/blob/main/LICENSE)

The Photopicker API allows the user to select one or more photos from the system-wide media library.

The selected photos can be (down)scaled and compressed. The data is provided in the form of temporary files in the user's cache directory. The API provides the URIs of the processed photos.

In order to use the photos in a Capacitor application, they have to be moved from the cache directory to the final storage location.

## Installation

```bash
npm install @enertrag/photopicker
```

_(Of course, the usual Capacitor procedure <code>npx cap sync</code> must be executed afterwards.)_

## iOS Notes

**_Important:_** **this plugin requires iOS 14 or later.**

iOS requires the following usage description be added and filled out for your app in `Info.plist`:

- `NSPhotoLibraryUsageDescription` (`Privacy - Photo Library Usage Description`)

Read about [Configuring `Info.plist`](https://capacitorjs.com/docs/ios/configuration#configuring-infoplist) in the [iOS Guide](https://capacitorjs.com/docs/ios) for more information on setting iOS permissions in Xcode

Selected images are persisted in the users cache (temporary) folder. As mentioned you should move it to the final destination.

## Android Notes

To use this plugin you have to register it in your MainActivity.

```java
import ...
import com.enertrag.plugins.photopicker.Photopicker;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      add(Photopicker.class);
    }});
  }
}
```

On your MainActivity.java file add <code>import com.enertrag.plugins.photopicker.Photopicker;</code> and then inside the init callback <code>add(Photopicker.class);</code>

This API requires the following permissions be added to your `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

The storage permissions are for reading/saving photo files.

Read about [Setting Permissions](https://capacitorjs.com/docs/android/configuration#setting-permissions) in the [Android Guide](https://capacitorjs.com/docs/android) for more information on setting Android permissions.

## Example

```typescript
import { Plugins } from '@capacitor/core';
const { Photopicker } = Plugins;

...

async addPhotos() {

      const result = await Photopicker.getPhotos();
      if (result.selected) {

        for (const url of result.urls) {
            // ... do something with the url if it's not empty
            if(url) {
                // ...
            }
        }
      }
}
```

Alternatively, if the code completion does not work, the import can be formulated as follows:

```typescript
import { EAGPhotopicker } from 'enertrag-photopicker'
const Photopicker = new EAGPhotopicker()
```

## API

### getPhotos()

```typescript
getPhotos(options: PhotopickerOptions) => Promise<PhotopickerResponse>
```

Prompt the user to pick one or more photos from an album.

The method call may fail if the user denies the permission request.

**Returns:** <code>Promise&lt;PhotopickerResponse&gt;</code>

## Interfaces

### PhotopickerOptions

| Prop          | Type                | Description                                                                                                                                                                                         |
| ------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`maxSize`** | <code>number</code> | The maximum length of one side of the photo. The photo is scaled according to the aspect ratio. The value <code>0</code> leaves the photo in its original resolution. The photo is never scaled up. |
| **`quality`** | <code>number</code> | The image quality on a scale from 10 (highest compression) to 100 (best quality).                                                                                                                   |

### PhotopickerResponse

| Prop           | Type                  | Description                                                                                            |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------------------ |
| **`selected`** | <code>boolean</code>  | Shows whether the user has selected photos (<code>true</code>) or not (<code>false</code>).            |
| **`urls`**     | <code>string[]</code> | The URIs of the selected and converted photos. This might contain empty elements for errornous photos. |

## Implementation

The exciting parts of the source code for Android can be found [here](https://github.com/enertrag/photopicker/blob/main/android/src/main/java/com/enertrag/plugins/photopicker/Photopicker.java). The ones for iOS are [here](https://github.com/enertrag/photopicker/blob/main/ios/Plugin/Plugin.swift).

## License

[MIT](https://github.com/enertrag/photopicker/blob/main/LICENSE)

Copyright © 2021 ENERTRAG AG
