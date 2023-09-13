# capacitor-share-with-plugin

[![NPM Version](https://img.shields.io/npm/v/capacitor-share-with-plugin.svg?style=for-the-badge)](https://npmjs.org/package/capacitor-share-with-plugin)
[![NPM Downloads](https://img.shields.io/npm/dt/capacitor-share-with-plugin.svg?style=for-the-badge)](https://www.npmjs.com/package/capacitor-share-with-plugin)

This plugin allows you to share files from the device's file explorer to any capacitor app.

## Install

```bash
npm install capacitor-share-with-plugin
npx cap sync android
```

## Initial setup

### Android

Inside `AndroidManifest.xml`, in the `activity` element, add a `intent-filter` to allow the app to receive images and pdfs from the file explorer and/or other apps.

```xml
   <intent-filter>
      <action android:name="android.intent.action.SEND" />
      <action android:name="android.intent.action.SEND_MULTIPLE" />
      <category android:name="android.intent.category.DEFAULT" />
      <data android:mimeType="image/*" />
      <data android:mimeType="application/pdf" />
    </intent-filter>
```

### IOS

**_This plugin currently supports only Android devices. Support for IOS will be added soon._**

## API

<docgen-index>

- [`addListener('FILE_SINGLE', ...)`](#addlistenerfile_single)
- [`addListener('FILE_MULTIPLE', ...)`](#addlistenerfile_multiple)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener('FILE_SINGLE', ...)

```typescript
addListener(eventName: 'FILE_SINGLE', listenerFunc: (event: FileDetails) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                    | Description                                    |
| ------------------ | ----------------------------------------------------------------------- | ---------------------------------------------- |
| **`eventName`**    | <code>'FILE_SINGLE'</code>                                              | Name of the event to listen.                   |
| **`listenerFunc`** | <code>(event: <a href="#filedetails">FileDetails</a>) =&gt; void</code> | Callback to be executed when the event occurs. |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('FILE_MULTIPLE', ...)

```typescript
addListener(eventName: 'FILE_MULTIPLE', listenerFunc: (event: FileDetails[]) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                           | Description                                    |
| ------------------ | ---------------------------------------------- | ---------------------------------------------- |
| **`eventName`**    | <code>'FILE_MULTIPLE'</code>                   | Name of the event to listen.                   |
| **`listenerFunc`** | <code>(event: FileDetails[]) =&gt; void</code> | Callback to be executed when the event occurs. |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

#### FileDetails

| Prop      | Type                | Description            |
| --------- | ------------------- | ---------------------- |
| **`uri`** | <code>string</code> | URI of the file.       |
| **`ext`** | <code>string</code> | Extension of the file. |

</docgen-api>
