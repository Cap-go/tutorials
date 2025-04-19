### @whiteguru/capacitor-plugin-file-picker Tutorial

To use the `@whiteguru/capacitor-plugin-file-picker` package in your Capacitor project, follow these steps:

#### Step 1: Installation

First, install the package using npm:

```bash
npm install @whiteguru/capacitor-plugin-file-picker
```

#### Step 2: Configure Android

To configure the plugin for Android, open `MainActivity.java` and add the following code inside the `init()` method:

```java
add(FileSelector.class);
```

#### Step 3: Configure iOS

For iOS configuration, refer to the supported extensions and categories in the Apple Developer documentation.

#### Step 4: Web Configuration

For web configuration, import the plugin and make sure to comment out the line that registers the web implementation when building for Android/iOS:

```javascript
import { Plugins } from '@capacitor/core';
const { FileSelector } = Plugins;
// import ‘@whiteguru/capacitor-plugin-file-picker’; // Comment out this line when building for Android/iOS
```

#### Step 5: Select Files

- Supported Extensions: All extensions are supported. Refer to the MIME types documentation for more details.
- Supported Broad Categories: Include "images", "videos", and "audios" for different file types.
- To select all file types, use "*".
- Set `multiple_selection` to `true` to allow multiple file selection.
- Use the `ext` array to list permitted extensions or broader file categories in lowercase.

The data returned by the file picker includes an array of web accessible URLs, file names, and extensions.

#### Step 6: Build and Run

After configuring the plugin, build and run your Capacitor project for different platforms.

---

**Frontmatter:**
```yaml
title: "Using @whiteguru/capacitor-plugin-file-picker"
description: "Tutorial on integrating the @whiteguru/capacitor-plugin-file-picker package in Capacitor projects."
created_at: "2022-09-28"
published: true
slug: capacitor-plugin-file-picker.git
```