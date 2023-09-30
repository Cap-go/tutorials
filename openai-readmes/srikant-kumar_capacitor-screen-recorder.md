# Capacitor Screen Recorder

[![](https://jitpack.io/v/HBiSoft/HBRecorder.svg)](https://jitpack.io/#HBiSoft/HBRecorder)

# Description

The Capacitor Screen Recorder plugin is a powerful tool for mobile app developers looking to enhance their applications with screen recording functionality. Seamlessly integrated with the Capacitor framework, this plugin allows users to effortlessly capture, save, and share video recordings of their app interactions. With customizable settings for video quality and recording controls, developers can provide users with a versatile and user-friendly recording experience. Whether for tutorial creation, bug reporting, or user engagement, the Capacitor Screen Recorder plugin offers a straightforward solution to incorporate screen recording capabilities into Capacitor-powered apps, enhancing their overall utility and user experience

## Credits

This plugin makes use of the [HBRecorder Android library](https://github.com/HBiSoft/HBRecorder) for its screen recording features. Big thanks to the authors of the library for their hard work!

## Supported Native Platform

#### Android : This plugin currently support Android Screen Recording

#### iOS : Coming Soon (No IOS Support)

#### Web : No Support

# Documentation

## Install

```bash
npm install @srikant-kumar/capacitor-screen-recorder
npx cap sync
```

## Add Jitpack

### Add in Main App build.gradle located add your capacitor android folder

```code
allprojects {
    repositories {
        google()
        mavenCentral()
        //Add Here
        maven {
            url "https://jitpack.io"
        }
    }
}
```

```bash
npm install @srikant-kumar/capacitor-screen-recorder
npx cap sync
```

## Add Jitpack

### Add in Main App build.gradle located add your capacitor android folder

```code
allprojects {
    repositories {
        google()
        mavenCentral()
        //Add Here
        maven {
            url "https://jitpack.io"
        }
    }
}
```

## API

<docgen-index>

- [`start(...)`](#start)
- [`stop(...)`](#stop)
- [`recorder_status(...)`](#recorder_status)
- [`addListener('onRecordingStarted', ...)`](#addlisteneronrecordingstarted)
- [`addListener('onRecordingComplete', ...)`](#addlisteneronrecordingcomplete)
- [`addListener('onRecordingError', ...)`](#addlisteneronrecordingerror)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### start(...)

```typescript
start(options: any) => Promise<any>
```

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### stop(...)

```typescript
stop(options: any) => Promise<any>
```

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### recorder_status(...)

```typescript
recorder_status(options: any) => Promise<any>
```

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### addListener('onRecordingStarted', ...)

```typescript
addListener(eventName: 'onRecordingStarted', listenerFunc: (data: any) => { status: true; message: "Recording Started"; }) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                           |
| ------------------ | ------------------------------------------------------------------------------ |
| **`eventName`**    | <code>'onRecordingStarted'</code>                                              |
| **`listenerFunc`** | <code>(data: any) =&gt; { status: true; message: 'Recording Started'; }</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('onRecordingComplete', ...)

```typescript
addListener(eventName: 'onRecordingComplete', listenerFunc: (data: any) => { status: true; message: "Recording Stopped"; file_name: "2023-08-25-10-10-10.mp4"; file_path: "/storage/emulated/0/Movies/ScreenRecordings/2023-08-25-10-10-10.mp4"; }) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`eventName`**    | <code>'onRecordingComplete'</code>                                                                                                                                                                     |
| **`listenerFunc`** | <code>(data: any) =&gt; { status: true; message: 'Recording Stopped'; file_name: '2023-08-25-10-10-10.mp4'; file_path: '/storage/emulated/0/Movies/ScreenRecordings/2023-08-25-10-10-10.mp4'; }</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('onRecordingError', ...)

```typescript
addListener(eventName: 'onRecordingError', listenerFunc: (data: any) => { status: false; message: "Error Message"; }) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                        |
| ------------------ | --------------------------------------------------------------------------- |
| **`eventName`**    | <code>'onRecordingError'</code>                                             |
| **`listenerFunc`** | <code>(data: any) =&gt; { status: false; message: 'Error Message'; }</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
