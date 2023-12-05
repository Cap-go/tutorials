# Capacitor Remote Config Tutorial

## Introduction 

In this tutorial, we will learn how to use the `capacitor-remote-config` package in your Capacitor app. `capacitor-remote-config` allows you to remotely configure the behavior and appearance of your app without needing to release a new version. Let's get started!

## Prerequisites

Before we begin, make sure you have the following installed:

- [Node.js](https://nodejs.org)
- [Capacitor](https://capacitorjs.com)

## Installation

To install `capacitor-remote-config` in your Capacitor app, run the following command:

```bash
npm install capacitor-remote-config
```

## Setup

### Android Configuration

For Android, open your `android/app/build.gradle` file and add the following lines:

```groovy
dependencies {
  // ...

  implementation project(':capacitor-remote-config')
}
```

Next, open your `android/app/src/main/java/{YOUR_PACKAGE_NAME}/MainActivity.java` file, and add the following import:

```java
import com.baumblatt.capacitor.remoteconfig.CapacitorRemoteConfig;
```

### iOS Configuration

For iOS, navigate to your project directory and run the following command:

```bash
npx cap open ios
```

This command will open your Xcode project. In Xcode, go to `File > Add Files to '[YourProjectName]'` and add the `CapacitorRemoteConfig` folder found in `node_modules/capacitor-remote-config/ios`.

Next, open your `App/AppDelegate.swift` file and add the following import:

```swift
import CapacitorRemoteConfig
```

## Usage

### Initializing the Plugin

To initialize the `capacitor-remote-config` plugin, open your `src/main.ts` (or `src/index.ts` for Ionic Angular) file and add the following code:

```typescript
import { Plugins } from '@capacitor/core';
const { CapacitorRemoteConfig } = Plugins;

async function initializeRemoteConfig() {
  await CapacitorRemoteConfig.initialize();
  console.log('Remote Config initialized');
}

initializeRemoteConfig();
```

### Fetching Remote Config Values

To fetch the remote config values, use the `fetch()` method. Here's an example of how to fetch a boolean value:

```typescript
async function fetchRemoteConfigValue() {
  const value = await CapacitorRemoteConfig.fetchBoolean({ key: 'your_key_here', defaultValue: true });
  console.log('Fetched value:', value);
}

fetchRemoteConfigValue();
```

### Applying Remote Config Values

To apply the fetched remote config values to your app, use the `apply()` method. Here's an example:

```typescript
async function applyRemoteConfigValues() {
  await CapacitorRemoteConfig.apply();
  console.log('Remote Config values applied');
}

applyRemoteConfigValues();
```

## Conclusion

In this tutorial, we learned how to use the `capacitor-remote-config` package to remotely configure our Capacitor app. We covered the installation, setup for both Android and iOS, and basic usage of the plugin. Now you can easily update your app's behavior and appearance without needing to release a new version!

---

Frontmatter:
- Title: "Capacitor Remote Config Tutorial"
- Description: "Learn how to use the capacitor-remote-config package to remotely configure your Capacitor app."
- Created_at: "2022-05-25"
- Published: true
- Slug: "capacitor-remote-config"