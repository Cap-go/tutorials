# capacitor file choose

Open native browser selector to check file(s)/folder(s) at filesystem. **Only in android.**

## Import

Install the library with `npm install -s capacitor-file-chooser`

To launch de plugin, add:

```
import { Plugins } from '@capacitor/core';
import 'capacitor-file-chooser';
const { CapacitorFileChooser } = Plugins;

...
let result = await CapacitorFileChooser.picker({mode: "showFolderpicker", initPath: "/storage/emulated/0/"});
console.log(result);
...
```

**Note**: It isn't need update `app.component.ts`

Update `styles.xml` adding

```
<item name="windowActionBar">false</item>
<item name="windowNoTitle">true</item>
```

in the section `<style name="AppTheme"`

## Usage

- `mode` How the browser will be opened;
  - `showPicker` Select a single file.
  - `showMultiFilepicker` Select several files.
  - `showFolderpicker` Select a single folder.
  - `showMultiFolderpicker` Select several folders.
  - `showMixedPicker` Select several folders and files.
  - `showCreatefile` Select to create a new file.
- `initPath` Path where the plugin open

## Thanks

- Plugin based on the magnificent work of https://github.com/ourcodeworld/cordova-ourcodeworld-filebrowser
- Original Android intent: https://github.com/spacecowboy/NoNonsense-FilePicker
