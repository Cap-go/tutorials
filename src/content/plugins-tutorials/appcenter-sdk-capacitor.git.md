---
"title": "Using @capacitor-community/appcenter Package in Your Capacitor Project"
"description": "Learn how to integrate the @capacitor-community/appcenter package in your Capacitor project for analytics and crash reporting."
"created_at": "2022-04-01"
"published": true
"slug": "appcenter-sdk-capacitor.git"
---

# Using @capacitor-community/appcenter Package in Your Capacitor Project

In this tutorial, we will walk you through the steps to integrate the **@capacitor-community/appcenter** package in your Capacitor project. This package allows you to leverage App Center services for analytics and crash reporting in your mobile applications.

## Installation

To get started, add the App Center plugin(s) that fit your needs directly from the CLI:

```bash
npm i @capacitor-community/appcenter @capacitor-community/appcenter-analytics @capacitor-community/appcenter-crashes --save-exact
npx cap sync
```

## Configure the SDK

Before you can use the App Center SDK in your Capacitor project, you need to configure the project with your App Center project app secret. This is necessary for both iOS and Android platforms.

### iOS Configuration

Create a new file named `AppCenter-Config.plist` with the following content and replace `{APP_SECRET_VALUE}` with your actual app secret value. Don't forget to add this file to your Xcode project.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>AppSecret</key>
    <string>{APP_SECRET_VALUE}</string>
    <!-- below are optional -->
    <key>LogLevel</key>
    <integer>2</integer>
    <key>AnalyticsEnableInJs</key>
    <false/>
    <key>AnalyticsTransmissionInterval</key>
    <integer>3</integer>
    <key>CrashesEnableInJs</key>
    <false/>
    <key>CrashesAlwaysSend</key>
    <false/>
</dict>
</plist>
```

### Android Configuration

Create a new file named `appcenter-config.json` in `android/app/src/main/assets/` with the following content and replace {APP_SECRET_VALUE} with your app secret value.

```json
{
    "app_secret": "{APP_SECRET_VALUE}",
    "start_automatically": true
}
```

## Contributors

This tutorial was made possible thanks to the following contributors:

- [John Borges](http://johnborg.es)
- [Hrafnkell Baldursson](https://hrafnkellbaldurs.com/)
```