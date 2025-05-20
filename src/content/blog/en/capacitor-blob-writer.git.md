---
title: Using capacitor-blob-writer Package
description: >-
  This tutorial demonstrates how to utilize the capacitor-blob-writer package
  for writing Blobs to the filesystem in a more efficient manner.
created_at: '2022-03-10'
published: true
slug: capacitor-blob-writer.git
locale: en
---

## Getting Started with capacitor-blob-writer

The `capacitor-blob-writer` package is a useful tool for quickly and securely writing Blobs to the filesystem. Follow the steps below to start using this package in your projects:

### 1. Installation

Begin by installing the `capacitor-blob-writer` package using npm or yarn:

```bash
npm install capacitor-blob-writer
# or
yarn add capacitor-blob-writer
```

### 2. Writing a Blob

To write a Blob to the filesystem, you need to follow these key steps:

1. Import the necessary modules:
   ```javascript
   import { Directory } from "@capacitor/filesystem";
   import { Capacitor } from "@capacitor/core";
   import write_blob from "capacitor-blob-writer";
   ```

2. Get a reference to the Blob you want to write:
   ```javascript
   let my_video_blob = ...; // Initialize your Blob here
   ```

3. Write the Blob to the disk with the `write_blob` function:
   ```javascript
   write_blob({
       path: "media/videos/funny.mp4",
       directory: Directory.Data,
       blob: my_video_blob,
       fast_mode: true, // Set to true for better read and write speeds on the web platform
       recursive: true, // Ensure intermediate directories are created if needed
       on_fallback(error) { 
           console.error(error); 
       }
   }).then(function () {
       console.log("Video written.");
   });
   ```

### 3. Reading a Blob

Reading a file or Blob back from the filesystem is a bit more complex due to platform variations. Here's how you can stream a video file using the Blob retrieved:

1. Create a `<video>` element to display the video:
   ```javascript
   const video_element = document.createElement("video");
   document.body.append(video_element);
   ```

2. Read the video file back using Filesystem.readFile and display it in the video element:
   ```javascript
   if (Capacitor.getPlatform() === "web") {
       Filesystem.readFile({
           path: "media/videos/funny.mp4",
           directory: Directory.Data
       }).then(function ({data}) {
           const url = URL.createObjectURL(data);
           video_element.src = url;
       });
   }
   ```

By following these steps, you'll be able to efficiently write and read Blobs to the filesystem using the `capacitor-blob-writer` package.
