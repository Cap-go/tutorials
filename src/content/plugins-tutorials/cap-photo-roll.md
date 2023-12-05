---
title: "Using cap-photo-roll Package"
description: "A tutorial on how to use the cap-photo-roll package to retrieve photos from the device's camera roll."
created_at: "2022-01-28"
published: true
slug: "cap-photo-roll"
---

# Using cap-photo-roll Package

This tutorial will guide you through the process of using the cap-photo-roll package, which is a Capacitor API for retrieving photos from your device's camera roll.

## Installation

To install the cap-photo-roll package, run the following command in your project directory:

```
npm i --save cap-photo-roll
```

## Usage

### Angular

In an Angular project, you can make use of cap-photo-roll as follows:

1. Import the necessary dependencies:

```typescript
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins } from '@capacitor/core';
```

2. Access the PhotoRoll plugin from the Plugins object:

```typescript
const { PhotoRoll } = Plugins;
```

3. Create a component and implement the necessary logic. For example, in a GalleryPage component:

```typescript
@Component({
    selector: 'app-gallery',
    template: '<img [src]="domSanitizer.bypassSecurityTrustUrl(lastPhoto)" />'
})
export class GalleryPage {
    private lastPhoto = '';

    async getPhoto() {
        const latestPhoto = await PhotoRoll.getLastPhotoTaken();

        this.lastPhoto = 'data:image/png;base64, ' + result.image;
    }
}
```

4. Use the `getPhoto()` method to retrieve the most recent photo's data and assign it to the `lastPhoto` property.

5. Bind the `lastPhoto` property to an `img` element in your template using Angular's `[src]` attribute.

Now, whenever the `getPhoto()` method is called, it will fetch the most recent photo from the camera roll and display it in the template.

## Conclusion

In this tutorial, you learned how to install and use the cap-photo-roll package in an Angular project to retrieve photos from the device's camera roll. This can be useful in various scenarios where you need to work with photos in your app.

Feel free to explore the cap-photo-roll package further and leverage its capabilities to enhance your app's functionality.