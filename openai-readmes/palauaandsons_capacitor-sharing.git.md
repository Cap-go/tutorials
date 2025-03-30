# @palauaandsons/capacitor-sharing

Sharing plugin for capacitor

## Install

```bash
npm install @palauaandsons/capacitor-sharing
npx cap sync
```

# Available methods:

- share(options: ShareOptions): Promise<NativeShareResult>;
- shareTo(options: ShareToOptions): Promise<boolean>;
- canShareTo(options: CanShareToOptions): Promise<boolean>;

# Usage example:

1. In your module (e.g. `app.module.ts`)

```ts
...
import { Sharing } from '@palauaandsons/capacitor-sharing';

@NgModule({
	...
	providers: [
		...
		Sharing,
	],
})
export class AppModule {}

```

2. In your component or service (e.g. `sharing.service.ts`)

```ts
import { Injectable } from '@angular/core';
import { Sharing } from '@palauaandsons/capacitor-sharing';

@Injectable()
export class SharingService {
  constructor(private sharing: Sharing) {}
  private facebookAppId = '123456789'; // your facebook app id

  async shareToInstagramStories() {
    const targets = await this.getAvailableSharingTargets();

    // instagram stories for example
    if (targets.instagramStories) {
      // example image in base64 format
      const stickerImageBase64 = await this.getBase64FromUrl(
        'https://www.example.com/sticker.png',
      );
      // example image in base64 format
      const backgroundImageBase64 = await this.getBase64FromUrl(
        'https://www.example.com/background.png',
      );

      this.sharing.shareTo({
        shareTo: 'instagramStories',
        facebookAppId: this.facebookAppId,
        backgroundTopColor: '#ff0000',
        backgroundBottomColor: '#00ff00',
        stickerImageBase64,
        backgroundImageBase64,
      });
    }
  }

  async getAvailableSharingTargets() {
    // check of all available sharing targets
    const [native, facebookStories, instagramStories] = await Promise.all([
      this.sharing.canShareTo({ shareTo: 'native' }),
      this.sharing.canShareTo({
        shareTo: 'facebookStories',
        facebookAppId: this.facebookAppId,
      }),
      this.sharing.canShareTo({
        shareTo: 'instagramStories',
        facebookAppId: this.facebookAppId,
      }),
    ]);

    return {
      native,
      facebookStories,
      instagramStories,
    };
  }

  async nativeShare() {
    this.sharing.share({
      title: 'Title',
      text: 'Text',
      url: 'https://www.example.com',
    });
  }

  private async getBase64FromUrl(url: string): Promise<string> {
    const response = await fetch(url);
    const blob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise((resolve, reject) => {
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
    });
  }
}
```

# Changes in 1.x.x

- added android support
- added support for sharing to Facebook Stories
- added `shareTo()` method instead of deprecated `shareToInstagramStories()`
- added `canShareTo()` method instead of deprecated `canShareToInstagramStories()`
- share() now returns status and target of the sharing action
- updated to capacitor 5
- ios deployment_target set to 13.0 for compatibility with capacitor 5 (BREAKING CHANGE)
