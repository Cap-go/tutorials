# Youtube Quality Extractor

## _For IONIC 4 (As capacitor plugin)_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

Ionic 4 Angular 8 Capacitor plugin for generating video quality for android.

By using capacitor, I have created a plugin that will take a youtube link and via capacitor bridge and andorid plugins it will fetch youtube qualities which can be used in your player to play live/recorded videos.

- ✨Magic ✨

## Features

- Fetch a youtube link and check if it's live or not
- Send it to the plugin
- Plugin will return all the urls
- Use the qualities win your player.
- Note:By default 360p & 720p will be playable.
- You will need your own logic to run 480p 1080p qualities because the audio and video files are seperated.
- No methods for web/iOS. For web i'll suggest you look for ytdl-core (node js)

## Tech

I used Angular 8.1.1, Ionic 4, Capacitor 2.4.7 for checking the plugin:

## Limitations

Those videos aren't working:

- Age restricted videos
- Everything private (private videos, bought movies, ...)
- Unavailable in your country
- RTMPE urls (very rare)

## Installation

Install the plugin.

```sh
npm i youtube-quality-generator-deva
npx cap sync android
```

Create a service and import the plugin. I have also included a regex to take embed code or short link and convert it to full url by extracting the id. It should look like this =>

```sh
import {Injectable} from '@angular/core';
import {Plugins} from '@capacitor/core';
import 'youtube-quality-generator';

const {DevaYoutubeGenerator} = Plugins;

@Injectable()
export class YoutubeExtractService {
    convertedData: any;
    constructor() {
    }

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

## Plugins

My plugin is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin                    | README            |
| ------------------------- | ----------------- |
| Android-Youtube Extractor | [link here][PlDb] |

## License

MIT

**Free Software, Hell Yeah!**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[PlDb]: https://github.com/HaarigerHarald/android-youtubeExtractor
