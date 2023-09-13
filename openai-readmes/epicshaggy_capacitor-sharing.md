# Capacitor Sharing

## Description

Provides a way to share one or more files at a time.

## Installation

### Capacitor 2

- `npm i capacitor-sharing@1.0.3`

### Capacitor 3

- `npm i capacitor-sharing`

## Usage

```ts
import { Plugins } from '@capacitor/core'

const { Sharing } = Plugins

Sharing.share({
  fileNames: ['myImage.jpg', 'myDocument.pdf', 'myOtherImag.png'],
  base64Values: ['...'],
  contentType: '*/*',
}).then(
  () => {
    //your code
  },
  (error) => {
    console.log(error)
  },
)
```

## Methods

| Method                         | Default | Type           | Description                                                    |
| ------------------------------ | ------- | -------------- | -------------------------------------------------------------- |
| share(options: SharingOptions) |         | `Promise<any>` | Prompts the user with sharing options for the provided file(s) |

## Interfaces

SharingOptions

| Properties   | Default | Type       | Description                                                            |
| ------------ | ------- | ---------- | ---------------------------------------------------------------------- |
| fileNames    |         | `string[]` | Array containing the names of the files.                               |
| base64Values |         | `string[]` | Array containing the corresponding bas64 strings of the files.         |
| mimeType?    | "\*/\*" | `string`   | MIME type of the provided file. Define only when one file is provided. |

## Android

### Gradle

Decalre AndroidX Core Library dependency in your apps build.gradle if not already declared:

```gradle
dependencies {
  implementation "androidx.appcompat:appcompat:$androidxAppCompatVersion"
}
```

or

```gradle
dependencies {
  implementation "androidx.core:core:$core_version"
}
```

### Manifest

Make sure you have the following provider in your app's Manifest.xml:

```xml
<application>
  <provider
    android:name="androidx.core.content.FileProvider"
    android:authorities="${applicationId}.fileprovider"
    android:exported="false"
    android:grantUriPermissions="true">
      <meta-data
          android:name="android.support.FILE_PROVIDER_PATHS"
          android:resource="@xml/file_paths">
        </meta-data>
  </provider>
</application>
```

### File Paths

If you not already created, create an xml folder with a file_paths.xml witht he following content:

```xml
<paths xmlns:android="http://schemas.android.com/apk/res/android">
  <files-path
    name="sharing_tmp"
    path="sharing_tmp/"/>
</paths>
```
