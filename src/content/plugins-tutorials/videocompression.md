---
title: "Using the video-compressor-android Package"
description: "A tutorial on how to use the video-compressor-android package to compress videos before upload."
created_at: "2021-05-10"
published: true
slug: "videocompression"
---

# Using the video-compressor-android Package

The video-compressor-android package is a convenient tool that allows you to compress videos before uploading them. In this tutorial, we will go through the steps to install and use this package in your Android project.

## Installation

To get started, you need to install the video-compressor-android package. Open your terminal and run the following command:

```bash
npm install video-compressor-android
npx cap sync
```

## Usage

Once the package is installed, you can start using it in your project.

First, import the `VideoCompressor` class from the `video-compressor-android` package:

```java
import { VideoCompressor } from 'video-compressor-android';
```

### Compressing a Video

To compress a video, you need to provide the file path of the video file. You can use the `compressVideo` method to compress the video.

```java
const result = await VideoCompression.compressVideo({filePath: '/path/to/video.mp4'});
console.log(result.value);
```

Make sure to replace `/path/to/video.mp4` with the actual file path of the video you want to compress.

The `compressVideo` method returns a result object that contains the compressed video file. You can access the compressed video file path using `result.value`.

## License

The video-compressor-android package is licensed under the MIT License.

**Free Software, Hell Yeah!**

Now you have learned how to use the video-compressor-android package to compress videos before upload in your Android project. Enjoy compressing your videos and have a great development experience!