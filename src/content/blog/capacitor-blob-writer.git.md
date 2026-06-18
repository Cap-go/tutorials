---
title: "Using Capacitor Blob Writer Package"
description: "A tutorial on how to utilize the capacitor-blob-writer package to efficiently write Blobs to the filesystem."
created_at: "2022-03-21"
published: true
slug: capacitor-blob-writer.git
---

# Capacitor Blob Writer Tutorial

The `capacitor-blob-writer` package provides a faster and more stable alternative to `@capacitor/filesystem`'s `Filesystem.writeFile` for writing Blobs to the filesystem.

## Writing with Capacitor Blob Writer

To write a Blob to disk using Capacitor Blob Writer, follow these steps:

1. Import the necessary modules:
   ```javascript
   import { Directory } from "@capacitor/filesystem";
   import { Capacitor } from "@capacitor/core";
   import write_blob from "capacitor-blob-writer";
   ```

2. Get a reference to the Blob you want to write, such as `my_video_blob`.

3. Use the `write_blob` function with the following options:
   - `path`: Specify the file path where the Blob will be written.
   - `directory`: Define the directory where the file will be located.
   - `blob`: Provide the Blob data to be written.
   - `fast_mode`: Optionally set to true to improve read and write speeds on the web platform.
   - `recursive`: Optionally set to true to create intermediate directories if needed.
   - `on_fallback`: Optional callback function to handle failures.

4. Handle the promise returned by `write_blob` to confirm the successful writing of the Blob to disk.

## Reading Files from Disk

Reading a file written with Capacitor Blob Writer involves accessing the file via a URL.

1. Create a `<video>` element to stream the video file.
   ```javascript
   const video_element = document.createElement("video");
   document.body.append(video_element);
   ```

2. Read the file using `Filesystem.readFile` with the appropriate path and directory.

3. Access the file data as a Blob and create a URL with `URL.createObjectURL(data)`.

By following these steps, you can effectively write and read Blob files using the Capacitor Blob Writer package in your applications.