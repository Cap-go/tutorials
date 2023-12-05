```
---
title: "Using @whiteguru/capacitor-plugin-video-editor Package"
description: "A tutorial on how to use the @whiteguru/capacitor-plugin-video-editor package for video editing in Capacitor"
created_at: "2022-09-28"
published: true
slug: capacitor-plugin-video-editor
---

# Using @whiteguru/capacitor-plugin-video-editor Package

This tutorial will guide you through the process of using the @whiteguru/capacitor-plugin-video-editor package in your Capacitor project.

## Step 1: Install the Package

To begin, install the @whiteguru/capacitor-plugin-video-editor package by running the following command:

```bash
npm install @whiteguru/capacitor-plugin-video-editor
```

## Step 2: Configure Capacitor

Next, make sure to configure Capacitor to include the video editor plugin. Depending on the version of Capacitor you are using, follow the appropriate steps:

- For Capacitor 2: Use version v0.0.8 of the @whiteguru/capacitor-plugin-video-editor package.
- For Capacitor 3: Use version v0.0.10 of the @whiteguru/capacitor-plugin-video-editor package.
- For Capacitor 5: Use version v5.0.0 of the @whiteguru/capacitor-plugin-video-editor package.

Update your `package.json` file with the appropriate version:

```json
"dependencies": {
  "@whiteguru/capacitor-plugin-video-editor": "v0.0.8" // Use the appropriate version here
}
```

## Step 3: Import and Use the Video Editor Plugin

Import the video editor plugin in your project by adding the following import statement to your code:

```javascript
import { CapacitorVideoEditor } from '@whiteguru/capacitor-plugin-video-editor';
```

You can now use the `CapacitorVideoEditor` object to access the video editing functionalities provided by the plugin. Refer to the plugin's documentation for detailed usage instructions.

## Conclusion

Congratulations! You have learned how to install and use the @whiteguru/capacitor-plugin-video-editor package in your Capacitor project. Enjoy editing videos with this powerful plugin!
```
```