---
title: "Using the ionic-share-to-instagram-stories Package"
description: "Learn how to use the ionic-share-to-instagram-stories package to share content to Instagram Stories in Ionic apps."
created_at: "2022-02-15"
published: true
slug: "ionic-share-to-instagram-stories"
---

# Using the ionic-share-to-instagram-stories Package

In this tutorial, we will learn how to use the `ionic-share-to-instagram-stories` package to share content to Instagram Stories in Ionic apps. This package is a Capacitor plugin that provides methods for sharing content to Instagram Stories.

## Installation

First, we need to install the `ionic-share-to-instagram-stories` package and sync Capacitor.

```bash
npm install @rediska1114/capacitor-sharing
npx cap sync
```

## Adding the Plugin to Your App

To use the `ionic-share-to-instagram-stories` plugin, we need to add it to our Ionic app.

1. In your module file (e.g., `app.module.ts`), import the `Sharing` class from the `@rediska1114/capacitor-sharing` package:

```ts
import { Sharing } from '@rediska1114/capacitor-sharing';
```

2. Add the `Sharing` class to the providers array in the `@NgModule` decorator:

```ts
@NgModule({
  ...
  providers: [
    ...
    Sharing,
  ],
})
export class AppModule {}
```

## Sharing Content to Instagram Stories

To share content to Instagram Stories, we can use the `shareToInstagramStories` method provided by the `ionic-share-to-instagram-stories` package.

1. Create a component or service file (e.g., `sharing.service.ts`) and import the `Sharing` class:

```ts
import { Injectable } from '@angular/core';
import { Sharing } from '@rediska1114/capacitor-sharing';

@Injectable()
export class SharingService {
  constructor(private sharing: Sharing) {}

  async shareToInstagramStories() {
    const canShare = await this.sharing.canShareToInstagramStories();
    if (canShare) {
      // Get sticker image base64
      const stickerImageBase64 = await this.getBase64FromUrl('https://www.example.com/sticker.png');

      // Get background image base64
      const backgroundImageBase64 = await this.getBase64FromUrl('https://www.example.com/background.png');

      // Share to Instagram Stories
      this.sharing.shareToInstagramStories({
        facebookAppId: '123456789',
        backgroundTopColor: '#ff0000',
        backgroundBottomColor: '#00ff00',
        stickerImageBase64,
        backgroundImageBase64,
      });
    }
  }

  private async getBase64FromUrl(url: string): Promise<string> {
    // Fetch the image
    const response = await fetch(url);
    const blob = await response.blob();

    // Convert blob to base64
    const reader = new FileReader();
    reader.readAsDataURL(blob);

    return new Promise<string>((resolve, reject) => {
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
    });
  }
}
```

2. In your component or service, call the `shareToInstagramStories` method when you want to share content to Instagram Stories:

```ts
async shareToInstagramStories() {
  await this.sharingService.shareToInstagramStories();
}
```

## Sharing Content with the `share` Method

In addition to sharing to Instagram Stories, the `ionic-share-to-instagram-stories` package also provides a `share` method for sharing content generally. Here's how you can use it:

```ts
async share() {
  await this.sharing.share({
    title: 'Title',
    text: 'Text',
    url: 'https://www.example.com',
  });
}
```

That's it! You have learned how to use the `ionic-share-to-instagram-stories` package to share content to Instagram Stories in your Ionic app.

Remember to properly handle errors and check for platform support before using the sharing methods.

Happy coding!