# Android Intent Plugin for Capacitor

![npm](https://img.shields.io/npm/v/@vinit_poojary/capacitor-intent)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@vinit_poojary/capacitor-intent)
![NPM](https://img.shields.io/npm/l/@vinit_poojary/capacitor-intent)

Capacitor Plugin for android intent

## Install

```bash
npm install @vinit_poojary/capacitor-intent
npx cap sync
```

```bash
yarn add @vinit_poojary/capacitor-intent
yarn cap sync
```

## Configuration

```xml
<intent-filter>
  <action android:name="android.intent.action.SEND" />
  <category android:name="android.intent.category.DEFAULT" />
  <data android:mimeType="text/plain" />
</intent-filter>
```

## Usage/Examples

```javascript
import { CapacitorIntent } from '@vinit_poojary/capacitor-intent'
```

```javascript
CapacitorIntent.addListener('getSentIntent', async ({ extraData, type }) => {
  console.log('type', type)
  console.log('extraData', extraData)
})
```

## API

<docgen-index>

- [`addListener('getSentIntent', ...)`](#addlistenergetsentintent)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener('getSentIntent', ...)

```typescript
addListener(eventName: 'getSentIntent', listenerFunc: (data: IntentData) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| **`eventName`**    | <code>'getSentIntent'</code>                                         |
| **`listenerFunc`** | <code>(data: <a href="#intentdata">IntentData</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

#### IntentData

| Prop            | Type             |
| --------------- | ---------------- |
| **`extraData`** | <code>any</code> |
| **`type`**      | <code>any</code> |

</docgen-api>
