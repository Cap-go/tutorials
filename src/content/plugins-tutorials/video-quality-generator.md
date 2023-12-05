---
title: "Using youtube-quality-generator-deva package"
description: "This tutorial will guide you on how to use the youtube-quality-generator-deva package to fetch video qualities from YouTube."
created_at: "2021-10-20"
published: true
slug: video-quality-generator
---

# Using youtube-quality-generator-deva package

In this tutorial, we will learn how to use the `youtube-quality-generator-deva` package to fetch video qualities from YouTube. This package is specially designed for Ionic 4 (as capacitor plugin) and allows you to generate video quality options for Android.

## Installation

To install the package, open your terminal and run the following command:

```shell
npm i youtube-quality-generator-deva
npx cap sync android
```

## Creating a Service

Once the installation is complete, you need to create a service to interact with the package. Here's an example of how to create a service and import the plugin:

```typescript
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import 'youtube-quality-generator';

const { DevaYoutubeGenerator } = Plugins;

@Injectable()
export class YoutubeExtractService {
  convertedData: any;

  constructor() {}

  async getDataFromVideo(video: { link: string, isLive: boolean }) {
    console.log(video);

    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = video.link.match(regExp);

    if (match && match[7].length === 11) {
      console.log(match[7]);
      video.link = `http://www.youtube.com/watch?v=${match[7]}`;
    } else {
      alert('Could not extract video ID.');
    }

    try {
      const res = await DevaYoutubeGenerator.getDataFromLink(video);
      console.log('line 27:', res);
      console.log('line 28', JSON.stringify(res));
      console.log('line 29', res['data']);
      window.alert(res['data']);
      this.convertedData = res['data'];
    } catch (e) {
      console.log(e);
    } finally {
      /** your logic for data modelling and sending it to video player***/
    }
  }
}
```

## Fetching Video Qualities

Now that we have our service set up, we can use the `getDataFromVideo` method to fetch the video qualities. Here's an example of how to use it:

```typescript
import { Component } from '@angular/core';
import { YoutubeExtractService } from './youtube-extract.service';

@Component({
  selector: 'app',
  template: `
    <button (click)="fetchVideoQualities()">Fetch Video Qualities</button>
  `,
  providers: [YoutubeExtractService],
})
export class AppComponent {
  constructor(private youtubeService: YoutubeExtractService) {}

  fetchVideoQualities() {
    const video = {
      link: 'YOUR_YOUTUBE_VIDEO_LINK',
      isLive: false, // Set to true if the video is live
    };

    this.youtubeService.getDataFromVideo(video);
  }
}
```

Make sure to replace `'YOUR_YOUTUBE_VIDEO_LINK'` with the actual YouTube video link you want to fetch the qualities for.

## Conclusion

In this tutorial, we have learned how to use the `youtube-quality-generator-deva` package to fetch video qualities from YouTube. We created a service to interact with the package and demonstrated how to fetch the video qualities using the `getDataFromVideo` method. You can now integrate this package into your Ionic 4 project and use it to enhance your video player with quality options.