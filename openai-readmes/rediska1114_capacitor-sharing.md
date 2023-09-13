# @rediska1114/capacitor-sharing

Sharing plugin for capacitor

## Install

```bash
npm install @rediska1114/capacitor-sharing
npx cap sync
```

# Available methods:

- share(options: ShareOptions): Promise<void>;
- shareToInstagramStories(options: ShareToInstagramStoriesOptions): Promise<void>;
- canShareToInstagramStories(): Promise<boolean>;

# Usage example:

1. In your module (e.g. `app.module.ts`)

```ts
...
import { Sharing } from '@rediska1114/capacitor-sharing';

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
import { Injectable } from '@angular/core'
import { Sharing } from '@rediska1114/capacitor-sharing'

@Injectable()
export class AnalyticsService {
  constructor(private sharing: Sharing) {}

  async shareToInstagramStories() {
    const canShare = await this.sharing.canShareToInstagramStories()
    if (canShare) {
      const stickerImageBase64 = await this.getBase64FromUrl('https://www.example.com/sticker.png')
      const backgroundImageBase64 = await this.getBase64FromUrl('https://www.example.com/background.png')

      this.sharing.shareToInstagramStories({
        facebookAppId: '123456789',
        backgroundTopColor: '#ff0000',
        backgroundBottomColor: '#00ff00',
        stickerImageBase64,
        backgroundImageBase64,
      })
    }
  }

  async share() {
    this.sharing.share({
      title: 'Title',
      text: 'Text',
      url: 'https://www.example.com',
    })
  }

  private async getBase64FromUrl(url: string): Promise<string> {
    const response = await fetch(url)
    const blob = await response.blob()
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    return new Promise((resolve, reject) => {
      reader.onloadend = () => {
        resolve(reader.result as string)
      }
    })
  }
}
```

```

```
