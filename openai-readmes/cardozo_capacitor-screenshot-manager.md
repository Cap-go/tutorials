# capacitor-screenshot-manager

Plugin to manage screenshot on Ios ( detect event ) and Android ( block screenshot )

## Install

```bash
npm install capacitor-screenshot-manager
npx cap sync
```

## Usage Android
```bash
import { Plugins } from '@capacitor/core';

const { ScreenshotManager } = Plugins;

async function disableScreenshots() {
  await ScreenshotManager.blockScreenshots();
}

async function enableScreenshots() {
  await ScreenshotManager.allowScreenshots();
}
```

## Usage IOS
```bash
import { ScreenshotManager } from 'capacitor-screenshot-manager';

ScreenshotManager.addListener('screenshotEvent', (info: any) => {
      console.log(' ---- Screenshot event received:', info);
});
```


## API

<docgen-index>

* [`echo(...)`](#echo)
* [`ping(...)`](#ping)
* [`addScreenshotListener(...)`](#addscreenshotlistener)
* [`addListener('screenshotEvent', ...)`](#addlistenerscreenshotevent-)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### ping(...)

```typescript
ping(options: { message: string; }) => Promise<{ response: string; }>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ message: string; }</code> |

**Returns:** <code>Promise&lt;{ response: string; }&gt;</code>

--------------------


### addScreenshotListener(...)

```typescript
addScreenshotListener(callback: (info: any) => void) => Promise<void>
```

| Param          | Type                                |
| -------------- | ----------------------------------- |
| **`callback`** | <code>(info: any) =&gt; void</code> |

--------------------


### addListener('screenshotEvent', ...)

```typescript
addListener(eventName: 'screenshotEvent', listenerFunc: (info: any) => void) => Promise<PluginListenerHandle>
```

| Param              | Type                                |
| ------------------ | ----------------------------------- |
| **`eventName`**    | <code>'screenshotEvent'</code>      |
| **`listenerFunc`** | <code>(info: any) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>

