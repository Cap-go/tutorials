```markdown
---
"title": "Using @lihbr/capacitor-camera2 Package Tutorial"
"description": "Learn how to use the @lihbr/capacitor-camera2 package with Capacitor for your mobile app development."
"created_at": "2023-10-30"
"published": true
"slug": "capacitor-camera2"
---

# Using @lihbr/capacitor-camera2 Package Tutorial

The `@lihbr/capacitor-camera2` package is a useful plugin for Capacitor that allows you to work with the camera functionalities in your mobile app.

## Installation

To install the `@lihbr/capacitor-camera2` package, follow these steps:

1. Make sure you have Node.js and npm installed on your machine.
2. Navigate to your Capacitor project directory.
3. Run the following command:

```bash
npm install @lihbr/capacitor-camera2
```

## Configuration

### iOS

To configure the package for iOS, you need to add entries in the info.plist file for camera and microphone usage.

1. Add the following entries to the `info.plist` file:

```xml
<key>NSCameraUsageDescription</key>
<string>This app needs access to the camera for video consultations.</string>
<key>NSMicrophoneUsageDescription</key>
<string>This app needs access to the microphone for video consultations.</string>
```

### Android

For Android, you might need to enable data binding and add repositories.

1. Enable data binding in your project's gradle file.

```gradle
android {
    ...
    buildFeatures {
        dataBinding true
    }
}
```

2. Add the following repositories to your app's top-level gradle file:

```gradle
allprojects {
    repositories {
        maven { url "https://nexus.docline.com/repository/maven-public/" }
        maven { url 'https://tokbox.bintray.com/maven' }
    }
}
```

## Usage

Once the package is installed and configured, you can start using it in your Capacitor project.

Here is a basic example of how to use the `@lihbr/capacitor-camera2` package in your code:

```typescript
import { CameraPreview } from '@lihbr/capacitor-camera2';

// Start the camera preview
CameraPreview.start();
```

This is a simple tutorial to get you started with the `@lihbr/capacitor-camera2` package. Explore the package's documentation for more advanced features and options.
```