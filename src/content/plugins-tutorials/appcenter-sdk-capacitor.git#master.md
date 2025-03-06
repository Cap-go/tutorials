```markdown
---
"title": "Using @capacitor-community/appcenter-crashes Package Tutorial",
"description": "A step-by-step guide on how to integrate and use the @capacitor-community/appcenter-crashes package in your Capacitor project.",
"created_at": "2023-10-03",
"published": true,
"slug": "appcenter-sdk-capacitor.git#master"
---

# Using @capacitor-community/appcenter-crashes Package

In this tutorial, we will walk through the process of integrating and utilizing the @capacitor-community/appcenter-crashes package in your Capacitor project to handle crashes effectively.

## Installation

First, install the @capacitor-community/appcenter-crashes package by running the following command in your project directory:

```bash
npm i @capacitor-community/appcenter-crashes --save-exact
npx cap sync
```

## Configuration

You need to configure the App Center SDK with your project app secret before you can use the @capacitor-community/appcenter-crashes package in your Capacitor project. Follow these steps to configure the SDK:

1. For iOS:
   - Create a new file named `AppCenter-Config.plist` with your app secret. Add this file to the Xcode project.

   Example `AppCenter-Config.plist`:

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">
   <plist version="1.0">
   <dict>
       <key>AppSecret</key>
       <string>{YOUR_APP_SECRET}</string>
   </dict>
   </plist>
   ```

2. For Android:
   - Create a new file named `appcenter-config.json` in the `android/app/src/main/assets/` directory. Replace `{YOUR_APP_SECRET}` with your actual app secret.

   Example `appcenter-config.json`:

   ```json
   {
       "app_secret": "{YOUR_APP_SECRET}",
       "start_automatically": true
   }
   ```

## Usage

With the @capacitor-community/appcenter-crashes package installed and configured, you can now start using it in your Capacitor project to monitor and handle crashes efficiently.

```typescript
import { AppCenterCrashes } from '@capacitor-community/appcenter-crashes';

// Register error listener
AppCenterCrashes.addErrorListener().subscribe((error) => {
   console.log("App Center Error: ", error);
});

// Trigger a manual crash
AppCenterCrashes.generateTestCrash();

// Handle crash report
AppCenterCrashes.hasCrashedInLastSession()
   .then((crashed) => {
      if (crashed) {
         AppCenterCrashes.lastSessionCrashReport()
            .then((report) => {
               const crashTime = new Date(report.appStartTime);
               console.log("Last Crash Report: ", report, "Crash Time: ", crashTime);
            });
   }
});

```

By following these steps, you can successfully integrate and utilize the @capacitor-community/appcenter-crashes package in your Capacitor project to effectively manage crashes.
```