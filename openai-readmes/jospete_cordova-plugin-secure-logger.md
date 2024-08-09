# cordova-plugin-secure-logger

Cordova plugin to capture both webview and native log events and store them securely on disk.

**Also works out-the-box with [Capacitor](https://capacitorjs.com/)!**

## Features / Goals

- Ability to capture logs both from the webview and native side into a common **local** recording outlet
- Encrypt data before it hits the disk to protect sensitive user data
- Automatically prune oldest logs to prevent infinitely expanding log data storage
- Ability to load logs from disk, combined and unencrypted, so they can be uploaded to a server as needed

## Why make this plugin?

The most secure solution when dealing with sensitive user data is to not log anything at all.

However, when it comes to tracking down nefarious bugs that only happen in the field, the next
best thing is to capture logs in a secure sandbox - which is the aim of this plugin.

## Installation

Github:

```bash
npm i -P -E git+https://github.com/jospete/cordova-plugin-secure-logger.git#1.4.17
```

NPM / Capacitor:

```bash
npm i -P -E cordova-plugin-secure-logger
```

Cordova:

```bash
cordova plugin add cordova-plugin-secure-logger
```

## Usage

### Documentation

Source documentation can be found [here](https://jospete.github.io/cordova-plugin-secure-logger/)

### Plugin Initialization

```typescript
/* In your app initialize logic */
import { SecureLogger, SecureLogLevel, enableWebviewListener } from 'cordova-plugin-secure-logger';

// Wire up the primary rx-console transport with secure logger webview proxy.
enableWebviewListener();

// after platform ready event
await SecureLogger.configure({
    minLevel: SecureLogLevel.DEBUG,
    // See documentation for other available options
});
```

### Logging Events

You can produce logs for this plugin on both the webview and native side

#### TypeScript / JavaScript (webview)

This plugin uses [@obsidize/rx-console](https://www.npmjs.com/package/@obsidize/rx-console)
for webview log capture / filtering. See [rx-console docs](https://jospete.github.io/obsidize-rx-console/)
for proper usage of this module.

```typescript
import { Logger } from '@obsidize/rx-console';

const logger = new Logger('ExampleService');

// Log events from rx-console will automatically get buffered and 
// sent to the plugin on a fixed interval.
logger.debug(`This will be stored in an encrypted log file`);

const someError = {error: `transfunctioner stopped combobulating`};
logger.warn(`Something bad happened! ->`, someError);
```

#### Android:

This plugin uses [Timber](https://github.com/JakeWharton/timber) for Android native log capture.
Replace `Log.xxx()` calls from `android.util.Log` with `Timber.xxx()` from `timber.log.Timber`
in other plugins, and those logs will automatically be captured by this plugin.

In `plugin.xml`:

```xml
<platform name="android">
    ...
    <framework src="com.jakewharton.timber:timber:5.0.1" />
</platform>
```

In Kotlin / Java:

```kotlin
import timber.log.Timber

...

Timber.d("Logging stuff on native android for the secure logger plugin! Yay native logs!")
```

#### iOS:

This plugin uses [CocoaLumberjack](https://github.com/CocoaLumberjack/CocoaLumberjack) for iOS native log capture.
Replace `print()` / `NSLog()` calls with `DDLogXXXX()`
in other plugins, and those logs will automatically be captured by this plugin.

In `plugin.xml`:

```xml
<platform name="ios">
    ...
    <podspec>
        <config>
            <source url="https://cdn.cocoapods.org/" />
        </config>
        <pods use-frameworks="true">
            <pod name="CocoaLumberjack/Swift" spec="~> 3.8" />
        </pods>
    </podspec>
</platform>
```

In Swift:

```swift
import CocoaLumberjack

...

DDLogDebug("Logging stuff on native ios for the secure logger plugin! Yay native logs!")
```

In Objective-C:

```objective-c
#import <CocoaLumberjack/CocoaLumberjack.h>
#define ddLogLevel DDLogLevelAll

...

DDLogDebug("Logging stuff on native ios for the secure logger plugin! Yay native logs!");
```

### Gathering Logs to Report

To grab a snapshot of the current log cache:

```typescript
import { SecureLogger } from 'cordova-plugin-secure-logger';

async function uploadLogs(): Promise<void> {
    const logCacheData = await SecureLogger.getCacheBlob();
    const bodyBlob = new Blob([logCacheData], { type: 'application/octet-stream' });
    // upload / share it somewhere
    await http.post('/log-capture', bodyBlob);
}
```

### Examples

- [Capacitor Mobile App](https://github.com/jospete/ionic-native-file-logging-example)