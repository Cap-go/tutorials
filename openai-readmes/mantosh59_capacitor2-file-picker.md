# Capacitor File Picker

## Description

Presents the device's native file picking ui and returns the selected file's uri.

## Installation

- `npm i capacitor2-file-picker --save`

For Capacitor V3

- `npm i filepicker-updated --save`
- `https://github.com/mantosh59/capacitor-file-picker`

## Usage

```ts
import { Plugins } from '@capacitor/core'

const { FilePicker } = Plugins

FilePicker.showFilePicker({
  fileTypes: ['image/*', 'application/pdf'],
}).then(
  (fileResult: FilePickerResult) => {
    const fileUri = fileResult.uri
    const fileName = fileResult.name
    const fileMimeType = fileResult.mimeType
    const fileExtension = fileResult.extension
    const fileSize = fileResult.size
  },
  (error) => {
    console.log(error)
  },
)
```

## Android

Register the plugin by adding it to your MainActivity's onCreate:

```java
import com.devmantosh.filepicker.FilePicker;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(FilePicker.class);
    }});
  }
}
```
