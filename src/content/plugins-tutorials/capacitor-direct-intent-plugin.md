```markdown
---
"title": "Tutorial: Using cap-android-intents Package",
"description": "This tutorial will guide you through using the cap-android-intents package in Capacitor for both Android and iOS platforms.",
"created_at": "2022-01-03",
"published": true,
"slug": "capacitor-direct-intent-plugin"
---

# Tutorial: Using cap-android-intents Package

This tutorial will guide you on how to use the `cap-android-intents` package in your Capacitor applications to handle direct intents on both Android and iOS platforms.

## Installation

```bash
npm install cap-android-intents
npx cap sync
```

## Usage

To make use of the `cap-android-intents` package, you can follow the sample usage code below:

```javascript
import { CapAndroidIntents } from "cap-android-intents";

CapAndroidIntents.checkDirectIntent().then((data) => {
    if (data) {
        console.log('Direct Intent Received');
        console.log(data);
    }

    // Handle the data as needed
}).catch((error) => {
    console.error('Error in handling direct intent: ', error);
});
```

## **Android Configuration**

### Register the Plugin in your MainActivity.java

First, you must register the `cap-android-intents` plugin in your Android capacitor app. This step involves modifying the `MainActivity.java` file in your Android project.

```java
import com.capacitor.plugin.capandroidintents.CapAndroidIntents;
```

### Configure AndroidManifest.xml

You need to register the `cap-android-intents` package to handle direct intents by configuring your `AndroidManifest.xml` file. Below is an example of how this configuration can be done:

```xml
<activity
    android:name="your.package.name.DirectIntentActivity"
    android:label="App Name"
    android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.BROWSABLE" />
        <category android:name="android.intent.category.DEFAULT" />
        <data android:scheme="your_scheme_here" />
    </intent-filter>
</activity>
```

Remember to replace `your.package.name` and `your_scheme_here` with your actual package details.

## **iOS Configuration**

### Handling Direct Intents on iOS

For handling direct intents on iOS using the `cap-android-intents` package, refer to the official documentation for setting up URL schemes and handling incoming URLs in your iOS application.

By following this tutorial, you will be able to effectively use the `cap-android-intents` plugin in Capacitor to manage direct intents across both Android and iOS platforms. Enjoy!
```