# Capacitor plugin for SpeedChecker SDK
Integrated solution with Speedchecker SDK for Capacitor applications

## Free speed test features for your own app

SpeedChecker Capacitor plugin allows developers to integrate speed test features into their own Capacitor apps. You can also try our
apps on [Google Play](https://play.google.com/store/apps/details?id=uk.co.broadbandspeedchecker\&hl=en\_US)
and [App Store](https://itunes.apple.com/app/id658790195), they are powered by the latest SpeedChecker SDK versions. More
information about [SpeedChecker SDKs](https://www.speedchecker.com/speed-test-tools/mobile-apps-and-sdks.html)

## Features

* latency, download and upload speed of the user connection
* robust measuring of cellular, wireless and even local network
* testing details like the current speed and progress
* additional information like network type and location (see KPI list below in FAQ)
* included high-capacity servers provided and maintained by [Speedchecker](https://www.speedchecker.com) or custom servers
* detailed statistics and reports by Speedchecker

## Platform Support

| Android | iOS |
|:---:|:---:|
| supported :heavy_check_mark: | supported :heavy_check_mark: |

## Requirements

#### Android

* minSdkVersion 22
* Location permissions (for free users)

#### iOS

* Xcode 13.3.1 or later
* Swift 5
* Development Target 11.0 or later

## Permission requirements

Free version of the plugin requires location permission to be able to perform a speed test. You need to handle location
permission in your app level. When no location permission is given, the app will show a toast message with a warning, so you need to request both Foreground and Background location permissions in your app before starting the speed test.
Check out our [location policy](https://github.com/speedchecker/cordova_plugin/wiki/Privacy-&-consent)

If you are a paid user, no location permission is required but you should set license key before you start test. Please contact us and we will provide you with
licenseKey for your app.

## Table of contents:
* [Installing](#installing)
* [How to use](#how-to-use)
* [Uninstalling](#uninstalling)

## Getting started

>**Note**: Make sure you have completed the [Capacitor - Environment Setup](https://capacitorjs.com/docs/getting-started/environment-setup) instructions till "Create your Android and iOS projects" step, before proceeding.

## Installing

### 1. Create a Capacitor project
```
npm init @capacitor/app
```

### 2. Go to project directory
```
cd your-app-name
```

### 3. Update AppId (for paid version)
If you a paid user, you need to specify your appId, which is linked with your license, in capacitor.config.json, located in root folder of your capacitor app
```
{
  "appId": "your_app_id",
  "appName": "example",
  "bundledWebRuntime": false,
  "webDir": "dist",
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 0
    }
  }
}
```

### 4. Add your platform (Android or iOS)
````
npx cap add ios
````
```
npx cap add android
```
### 5. Install the plugin from npm repository
````
npm install @speedchecker/capacitor-plugin
````

### 6. Project configuration

#### Android:

##### Add custom maven repositories

Speedchecker SDK uses custom Maven repository for android. You need to add this maven credentials to your project build.gradle file. This file is located here: your-capacitor-app/android/build.gradle

```
allprojects {
    repositories {
        google()
        mavenCentral()
        
        //add these repositories for free version
        maven { url "https://jitpack.io" }
        maven {
            url 'https://maven.speedcheckerapi.com/artifactory/libs-demo'
            credentials {
                username = "demo"
                password = "AP85qiz6wYEsCttWU2ZckEWSwJKuA6mSYcizEY"
            }
        }
        
        //add these repositories for paid version
        maven { url "https://jitpack.io" }
        maven {
            url 'https://maven.speedcheckerapi.com/artifactory/libs-release'
            credentials {
                username = "speedchecker"
                password = "AP3Zg8iFoiatscExgkeMHP3ur9EcsNkbxC8e6gXr8QV9PeWtiAVM3pETm8pF"
            }
        }
    }
}

```

#### iOS:

##### License key (paid users)

if you have a license key, you can add it to `Info.plist`:
```
<key>SpeedCheckerLicenseKey</key>
<string>your_ios_key</string>
```

##### Location permission keys

WhenInUse location permission key is required if you are free SDK user. Add to `Info.plist`:
```
<key>NSLocationWhenInUseUsageDescription</key>
<string>your custom text here</string>
```

Always location permission keys are required if you are using background tests. Add to `Info.plist`:
```
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>your custom text here</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>your custom text here</string>
```

##### Background tests setup (paid users)

If you want to use background tests, add following keys to `Info.plist`:

Background modes key
```
<key>UIBackgroundModes</key>
<array>
	<string>location</string>
	<string>processing</string>
</array>
```

BGTaskSchedulerPermittedIdentifiers key
```
<key>BGTaskSchedulerPermittedIdentifiers</key>
<array>
	<string>com.speedchecker.bgtests</string>
</array>
```

Additional background test setup keys
```
<key>SpeedCheckerBackgroundConfigURL</key>
<string>your background config URL</string>
```

You will also have to initialize background tests in `AppDelegate` like this:
```
import SpeedcheckerCapacitorPlugin

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    SpeedChecker.initializeBackgroundTests(launchOptions: launchOptions)
    return true
}
```

### 7. Sync the plugin with the native projects
````
npx cap sync
````

### 8. Run the project
```
npx cap run android   
```
```
npx cap run ios   
```

## How to use

### Import plugin into project file

```
import { SpeedChecker} from '@speedchecker/capacitor-plugin'
```

### Set a license key Android (paid users).

if you have a license key, you can add your key as a String value in the app:

```
SpeedChecker.setAndroidLicenseKey({ key: '_your_android_key' });
```

License should be set _before_ starting the test.
Make sure your package name (for Android) or bundle id (for iOS) is the same as defined in your license agreement.

### To start speed test by event (e.g. button click):
Plugin includes "startTest" function with listener "dataReceived", which you can listen to receive data from Speedchecker servers:
````
      self.shadowRoot.querySelector('#startTestBtn').addEventListener('click', async function (e) {
        try {
          if (!isListenerAdded) {
            const handle = SpeedChecker.addListener('dataReceived', (data) => {
              const event = data.event;
              const ping = data.ping;
              const jitter = data.jitter;
              const progress = data.progress;
              const downloadSpeed = data.downloadSpeed;
              const uploadSpeed = data.uploadSpeed;
              const ip = data.ipAddress;
              const isp = data.ispName;
              const server = data.server;
              const connectionType = data.connectionType;
              
              if (event == 'Test finished') {
              
              // here you can handle the case when test is finished, and remove listeners to prevent memory leaks
              
                isListenerAdded = true;
                handle.remove();
              }
            });
          }
          await SpeedChecker.startTest();
        } catch (error) {
          console.error(error);
        }
      });
````

## To stop the test by event (e.g. button click):
```
      self.shadowRoot.querySelector('#stopTestBtn').addEventListener('click', async function (e) {
        try {
          await SpeedChecker.stopTest();
          SpeedChecker.removeAllListeners();
          isListenerAdded = false;
        } catch (error) {
          console.error(error);
        }
      });
```
>**Note**: Don't forget to run ``` npm run build ``` after modifying your app js file (such as capacitor-welcome.js), to apply the
> changes.

## Uninstalling
To uninstall the plugin, run the following commands
```
npm uninstall @speedchecker/capacitor-plugin
npx cap sync
```

## Demo application

Please check our [demo application](https://github.com/speedchecker/capacitor_plugin/tree/demo) in Capacitor which includes a
sample app with free speed test functionality

## License

SpeedChecker is offering different types of licenses:

| Items                             | Free                          | Basic                                             | Advanced                                                          |
| --------------------------------- | ----------------------------- | ------------------------------------------------- | ----------------------------------------------------------------- |
| Speed Test Metrics                | Download / Upload / Latency   | Download / Upload / Latency / Jitter              | Download / Upload / Latency / Jitter                              |
| Accompanying Metrics              | Device / Network KPIs         | Device / Network KPIs                             | Device / Network KPIs / Advanced Cellular KPIs                    |
| Test Customization                | -                             | test duration, multi-threading, warm-up phase etc | test duration, multi-threading, warm-up phase etc                 |
| Location Permission               | Required location permissions | -                                                 | -                                                                 |
| Data Sharing Requirement          | Required data sharing         | -                                                 | -                                                                 |
| Measurement Servers               | -                             | Custom measurement servers                        | Custom measurement servers                                        |
| Background and passive collection | -                             | -                                                 | Background and Passive data collection                            |
| Cost                              | **FREE**                      | Cost: [**Enquire**](https://www.speedchecker.com/contact-us.html)                       | Cost: [**Enquire**](https://www.speedchecker.com/contact-us.html) |

## FAQ

### **Is the SDK free to use?**

Yes! But the SDK collects data on network performance from your app and shares it with Speedchecker and our clients. The free SDK version requires and
enabled location. Those restrictions are not in the Basic and Advanced versions

### **Do you have also native SDKs?**

Yes, we have both [Android](https://github.com/speedchecker/speedchecker-sdk-android) and [iOS](https://github.com/speedchecker/speedchecker-sdk-ios)
SDKs.

### **Do you provide other types of tests?**

Yes! YouTube video streaming, Voice over IP and other tests are supported by our native SDK libraries. Check out our [Android](https://github.com/speedchecker/speedchecker-sdk-android/wiki/API-documentation) and [iOS](https://github.com/speedchecker/speedchecker-sdk-ios/wiki/API-documentation) API documentation

### **Do you provide free support?**

No, we provide support only on Basic and Advanced plans

### **What are all the metrics or KPIs that you can get using our native SDKs?**

The free version of our plugin allows getting basic metrics which are described in
this [API documentation](https://github.com/speedchecker/cordova_plugin/wiki/API-documentation)

[Full list of our KPIs for Basic and Advanced versions](https://docs.speedchecker.com/measurement-methodology-links/u21ongNGAYLb6eo7cqjY/kpis-and-measurements/list-of-kpis)

### **Do you host all infrastructure for the test?**

Yes, you do not need to run any servers. We provide and maintain a network of high-quality servers and CDNs to ensure the testing is accurate. If you
wish to configure your own server, this is possible on Basic and Advanced plans.

### **How do you measure the speed?**

See
our [measurement methodology](https://docs.speedchecker.com/measurement-methodology-links/u21ongNGAYLb6eo7cqjY/kpis-and-measurements/data-collection-methodologies)

## What's next?

Please contact us for more details and license requirements.

* [More information about SpeedChecker SDKs](https://www.speedchecker.com/speed-test-tools/mobile-apps-and-sdks.html)