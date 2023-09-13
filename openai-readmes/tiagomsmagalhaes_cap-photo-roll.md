# cap-photo-roll

[![npm version](https://badge.fury.io/js/cap-photo-roll.svg)](https://badge.fury.io/js/cap-photo-roll)

A Capacitor API for retrieving Photos from your device Camera Roll.

It's a Work in Progress. It's published so I thought it would be easier for me to test it. After 0.1.1, I'll branch out to development and publish it more sparsely after remembering that I could install from the repo.

As of 0.1.1, it fetches after second opening of the app the most recent photo on iOS and an encoded image on Android.

Android X support may come after Capacitor 2.0.0 is released.

## Installation

```
npm i --save cap-photo-roll
```

## Usage

### Angular

```typescript
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { Plugins } from '@capacitor/core'

const { PhotoRoll } = Plugins

@Component({
  selector: 'app-gallery',
  template: '<img [src]="domSanitizer.bypassSecurityTrustUrl(lastPhoto)" />',
})
export class GalleryPage {
  private lastPhoto = ''

  async getPhoto() {
    const latestPhoto = await PhotoRoll.getLastPhotoTaken()

    this.lastPhoto = 'data:image/png;base64, ' + result.image
  }
}
```
