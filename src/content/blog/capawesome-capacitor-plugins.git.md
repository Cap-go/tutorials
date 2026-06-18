```markdown
---
"title": "Capacitor File Selector Usage Tutorial",
"description": "This tutorial will guide you through the usage of the @hotend/capacitor-file-picker package for Capacitor apps.",
"created_at": "2022-02-17",
"published": true,
"slug": "capawesome-capacitor-plugins.git"
---

# Capacitor File Selector

For a detailed tutorial on how to enable dark mode using this plugin visit: https://medium.com/@hinddeep.purohit007/picking-files-in-capacitor-apps-a82c67384496.

Demo Application: https://github.com/hinddeep/demo-capacitor-file-picker.

Platforms Supported: Android, iOS, and Web/PWA.

This plugin can be used to conditionally select files from Android/iOS devices and the web.

## Installation

```bash
npm install capacitor-file-selector
```

### Android Configuration:

To configure the package for Android, open MainActivity.java and add the following code inside `this.init()`:

```
add(FileSelector.class);
```

Adding the above-mentioned line will add the following import statement:

```java
import com.bkon.capacitor.fileselector.FileSelector;
```

If you encounter errors, please add both lines manually to MainActivity.java.

To view all the supported file extensions, visit: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types.

### iOS Configuration:

To view all the supported extensions for iOS, please visit the link: https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html.

### Web Configuration:

For web configuration, add the following to your code:

```typescript
import { Plugins } from '@capacitor/core'; 
const { FileSelector } = Plugins; 
import 'capacitor-file-selector'; // Comment out this line when building the Android/iOS app.
```

### Select Files

Supported extensions: all extensions are supported. Please refer to https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types.

Supported Broad Categories: images, videos, and audios.

To allow the selection of all file types, use `*`.

If you wish to allow the user to select more than one file, set the `multiple_selection` variable to `true`, else set it to `false. Use the `ext` array to list out all the permitted extensions/broader file categories. The user will be able to select only the files with extensions/categories outlined in this `ext` array.

Remember that the `ext` array is case-sensitive. If the characters are not in lowercase, you can use TypeScript's `map` function to convert them to lowercase: 
```typescript
ext = ext.map(v => v.toLowerCase());
```

Data returned by the file picker contains:
1. A `paths` array: an array of web accessible URLs.
2. An `original_names` array: the names of the files.
3. An `extensions` array: the extensions corresponding to the selected files.

You can combine the filenames and extensions to rebuild the original file name.

```
```