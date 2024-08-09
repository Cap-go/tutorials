
<h3 align="center">Android Image Picker</h3>
<p align="center">
  Capacitor plugin that allows the user to select multiple images on android and also retrieve geo data
</p>

## Installation

```bash
npm install androidimagepicker
npx cap sync
```

## Configuration

No configuration required for this plugin.

## Usage

```typescript
import { Plugins } from  "@capacitor/core";
const { AndroidImagePicker } =  Plugins;

const pickImages = async () => {
  const { files } =  await  AndroidImagePicker.pickImages();
};
```
