# Gallery Video Picker

It is capacitor plugin that will help you to pick video path (duration, type, name, size) from gallery. You can also record video.

### Android only support!

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install plugin.

```bash
npm install gallery-video-picker
```

## Usage

```typescript
import 'gallery-video-picker';
import { Plugins } from '@capacitor/plugin';

const { Camera } = Plugins;

const takeVideo = async () => {
  const options = {
      sizeLimit: 10, // Maximum size of file in megabytes (Only PickerVideoType.GALLERY)
      source: PickerVideoType.CAMERA, // PickerVideoType.CAMERA, PickerVideoType.GALLERY
      duration: 30,  // Maximum duration (Only PickerVideoType.CAMERA)
      quality: number, // Quality from 0 to 1. 0 - Bad quality, 1 - Good, 0.5 - So so
  };

  const videoMetadata = Plugins.GalleryVideoPicker.getVideoFromGallery(options).then((result) => {
    // result
    {
        type: "video/mp4",
        name: "example.mp4",
        path: "file:///storage/**",
        duration: 30, // seconds
        size: 1277125 // bytes
    }
  });
};
```

```typescript
const requestPermission = async () => {
  const options = {
      // Request access to record video - PickerVideoType.CAMERA, Request access to video gallery - PickerVideoType.GALLERY
      permissionType: PickerVideoType.CAMERA,
  };

  const videoMetadata = Plugins.GalleryVideoPicker.getPermissions(options).then(
      (res) => // { granted: true, permission: PickerVideoType.CAMERA },
      (err) => // { message: "Permission denied" }
  );
};
```

```typescript
const openSettings = async () => {
  const videoMetadata = await Plugins.GalleryVideoPicker.openSettings() // Just open app settings
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
