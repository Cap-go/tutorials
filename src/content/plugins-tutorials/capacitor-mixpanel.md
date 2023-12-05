# Using @legalmentedev/capacitor-mixpanel Package

## Introduction

In this tutorial, we will learn how to use the `@legalmentedev/capacitor-mixpanel` package in a Capacitor app. The `@legalmentedev/capacitor-mixpanel` package allows us to integrate Mixpanel analytics into our Capacitor project.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and npm
- Capacitor CLI
- Capacitor project set up

## Installation

To install the `@legalmentedev/capacitor-mixpanel` package, open your project directory in the terminal and run the following command:

```bash
npm install @legalmentedev/capacitor-mixpanel
```

## Integration with Capacitor

### Android Integration

To integrate `@legalmentedev/capacitor-mixpanel` with Android, follow these steps:

1. Open your `android/app/src/main/java/<YOUR_PACKAGE_NAME>/MainActivity.java` file.

2. Import the `com.legalmentedev.capacitormixpanel.CapacitorMixpanelPlugin` package:

   ```java
   import com.legalmentedev.capacitormixpanel.CapacitorMixpanelPlugin;
   ```

3. Add the `CapacitorMixpanelPlugin` to the list of plugins:

   ```java
   this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
       // Other plugins...
       add(CapacitorMixpanelPlugin.class);
   }});
   ```

4. Save your changes and rebuild the Android project:

   ```bash
   npx cap sync android
   ```

### iOS Integration

To integrate `@legalmentedev/capacitor-mixpanel` with iOS, follow these steps:

1. Open your `ios/App/AppDelegate.swift` file.

2. Import the `CapacitorMixpanelPlugin` module:

   ```swift
   import CapacitorMixpanelPlugin
   ```

3. Add the `CapacitorMixpanelPlugin` to the list of plugins:

   ```swift
   override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
       // Other plugins...
       add(CapacitorMixpanelPlugin.self)
       return true
   }
   ```

4. Save your changes and rebuild the iOS project:

   ```bash
   npx cap sync ios
   ```

## Usage

With the `@legalmentedev/capacitor-mixpanel` package integrated, you can now use Mixpanel analytics in your Capacitor app. Here's how you can track events:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorMixpanelPlugin } = Plugins;

// Track an event
CapacitorMixpanelPlugin.track('Event Name', {
  param1: 'value1',
  param2: 'value2',
});

// Set user properties
CapacitorMixpanelPlugin.set({
  name: 'John Doe',
  age: 25,
});

// Identify a user
CapacitorMixpanelPlugin.identify('user-id');
```

## Conclusion

In this tutorial, we learned how to integrate and use the `@legalmentedev/capacitor-mixpanel` package in a Capacitor app. We covered the installation process and how to track events, set user properties, and identify users using Mixpanel analytics.

Start analyzing user behavior and improving your app with Mixpanel and Capacitor!

---
title: "Using @legalmentedev/capacitor-mixpanel Package"
description: "Learn how to integrate Mixpanel analytics into your Capacitor app using @legalmentedev/capacitor-mixpanel package."
created_at: "2022-05-20"
published: true
slug: "capacitor-mixpanel"
---