# Capacitor File Picker

## Description

Plugin to pick files/images/videos from android or ios.

## Installation

- `npm i filepicker-updated`

for Capacitor v2

- `npm i capacitor2-fle-picker`
- https://github.com/mantosh59/capacitor2-file-picker

## Usage

import { FilePicker } from "filepicker-updated";

FilePicker.showFilePicker({
fileTypes: ["image/*", "video/*"],
}).then(
(fileResult: FilePickerResult) => {
const fileUri = fileResult.uri;
const fileName = fileResult.name;
const fileMimeType = fileResult.mimeType;
const fileExtension = fileResult.extension;
const fileSize = fileResult.size;
},
(error) => {
console.log(error);
}
);

```

```
