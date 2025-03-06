```markdown
---
"title": "Using @capgo/capacitor-screen-recorder package Tutorial",
"description": "This tutorial will guide you on how to use the @capgo/capacitor-screen-recorder package for recording device's screen in your Capacitor project",
"created_at": "2022-02-14",
"published": true,
"slug": "capacitor-screen-recorder.git"
---

# Using @capgo/capacitor-screen-recorder package Tutorial

In this tutorial, you will learn how to integrate and use the @capgo/capacitor-screen-recorder package in your Capacitor project to record the device's screen.

## Installation

To begin, you need to install the package using npm and then sync the changes to your project.

```bash
npm install @capgo/capacitor-screen-recorder
npx cap sync
```

### IOS

For IOS, make sure to add `NSPhotoLibraryUsageDescription` in your `info.plist`.

### Android

To use the package in Android, you need to increase the project's `minSdk` version to 23, as it is required by the `scrcast` dependency.

### Configuration

There is no additional configuration required for this plugin.

## API Usage

The package provides the following API methods:

1. `start()`: This method starts the recording.

    ```typescript
    start() => any
    ```

2. `stop()`: This method stops the recording.

    ```typescript
    stop() => any
    ```

These API methods allow you to control the screen recording in your Capacitor project efficiently.

---
```
