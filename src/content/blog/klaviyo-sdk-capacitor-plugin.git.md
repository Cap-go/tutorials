---
"title": "Using Klaviyo SDK Capacitor Plugin",
"description": "Learn how to integrate the Klaviyo SDK Capacitor Plugin into your Capacitor project with ease.",
"created_at": "2023-03-23",
"published": true,
"slug": "klaviyo-sdk-capacitor-plugin.git"
---

# Using Klaviyo SDK Capacitor Plugin

The **klaviyo-sdk-capacitor-plugin** package allows you to seamlessly integrate the Klaviyo SDK into your Capacitor project for streamlined email marketing efforts. Follow the steps below to incorporate the Klaviyo SDK Capacitor Plugin into your project.

## Installation

Ensure you have Node.js and npm installed on your machine. To add the Klaviyo SDK Capacitor Plugin to your project, run the following command within your project's root folder:

```bash
npm install klaviyo-sdk-capacitor-plugin
```

## Additional Settings

### iOS

To use the Klaviyo SDK Capacitor Plugin on iOS, add the following permissions descriptions to your info.plist file:

- `NSCameraUsageDescription`: Describe the use of the camera.
- `NSMicrophoneUsageDescription`: Describe the use of the microphone.

**info.plist**
```xml
"NSCameraUsageDescription" = "This app requires access to the camera for email marketing purposes.";
"NSMicrophoneUsageDescription" = "This app requires access to the microphone for email marketing purposes.";
```

### Android

For Android configuration, ensure that you enable data binding in your project-level gradle file and add necessary repositories for dependencies resolution.

#### Enable Data Binding

Add the following configuration in the android block of your app module's gradle file:

```java
android {
    ...
    buildFeatures {
        dataBinding true
    }
}
```

#### Add Repositories

Include the following repositories in the allprojects block of your project-level gradle file to resolve dependencies:

```java
...
allprojects {

    repositories {
        ...
        maven { url "https://klaviyo.repo.com/maven-public/" }
    }
}
...
```

Once you have completed these additional settings, you are ready to utilize the Klaviyo SDK Capacitor Plugin within your Capacitor project for effective email marketing integration.