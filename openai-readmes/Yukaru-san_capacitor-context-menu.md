# capacitor-context-menu

Allows catching context-menu events (PROCESS_TEXT) from android intentions

## Install

```bash
npm install capacitor-context-menu
npx cap sync
```

## Manifest
To use this plugin you need to add the following to your AndroidManifest.xml inside your MainActivity

```xml
<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.PROCESS_TEXT" />
    <category android:name="android.intent.category.DEFAULT" />
    <data android:mimeType="text/plain" />
</intent-filter>
``

## API

<docgen-index>

* [`checkProcessTextIntentReceived()`](#checkprocesstextintentreceived)
* [`addListener('processTextReceived', ...)`](#addlistenerprocesstextreceived)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### checkProcessTextIntentReceived()

```typescript
checkProcessTextIntentReceived() => Promise<{ text: string; }>
```

**Returns:** <code>Promise&lt;{ text: string; }&gt;</code>

--------------------


### addListener('processTextReceived', ...)

```typescript
addListener(eventName: 'processTextReceived', listenerFunc: ListenerCallback) => void
```

| Param              | Type                                                          |
| ------------------ | ------------------------------------------------------------- |
| **`eventName`**    | <code>'processTextReceived'</code>                            |
| **`listenerFunc`** | <code><a href="#listenercallback">ListenerCallback</a></code> |

--------------------


### Type Aliases


#### ListenerCallback

<code>(err: any, ...args: any[]): void</code>

</docgen-api>
