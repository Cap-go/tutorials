---
"title": "Using Capacitor iOS App Tracking Package",
"description": "This tutorial will guide you through incorporating the capacitor-ios-app-tracking package into your iOS project step by step.",
"created_at": "2023-09-02",
"published": true,
"slug": "capacitor-ios-app-tracking.git"
---

## Step-by-Step Tutorial: Using Capacitor iOS App Tracking Package

### Step 1

First, add the capacitor-ios-app-tracking package to your project by running the following command:

```bash
npm install @capacitor/ios-app-tracking
```

### Step 2

Next, open your iOS project in Xcode and navigate to the project's General settings tab. Under the 'Frameworks, Libraries, and Embedded Content' section, add the `AppTrackingTransparency.framework` if it's not already added.

### Step 3

Add the necessary usage description for App Tracking Transparency in your `Info.plist` file. Include the following key-value pair:

```xml
<key>NSUserTrackingUsageDescription</key>
<string>We need your permission to track your activity for personalized ads.</string>
```

### Step 4

In the iOS project, import the capacitor-ios-app-tracking package to use its functionalities:

```swift
import {your app name} // Import Capacitor at the top of your file
import CapacitorAppTracking
```

### Step 5

To request the user's permission for tracking, call the following method:

```swift
CapacitorAppTracking.requestPermission { (status) in
    switch status {
    case .authorized:
        print("Tracking authorized")
    case .denied:
        print("Tracking denied")
    case .notDetermined:
        print("Tracking not determined")
    case .restricted:
        print("Tracking restricted")
    case .translucent:
        print("Tracking translucent")
    @unknown default:
        print("Unknown tracking status")
    }
}
```

### Step 6

Handle the permission response based on the different cases provided by the `requestPermission` method.

### Step 7

You have now successfully integrated the capacitor-ios-app-tracking package into your iOS project for tracking purposes.

Happy coding!