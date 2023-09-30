# background-volume-buttons

This capacitor.js plugin listens for and reacts to volume button presses when the app is in the background

```
import { App } from '@capacitor/app';
import { BackgroundVolumeButtonListener } from "background-volume-buttons";

App.addListener('appStateChange', ({ isActive }) => {
    console.log('App state changed. Is active?', isActive);
    if (!isActive) {
        console.debug("App going inactive / background")
        BackgroundVolumeButtonListener.startListening({
            timeout: 1000,
            triggerCount: 3,
            listenerName: "volumeEventTriggered"
        })
    } else {
        BackgroundVolumeButtonListener.stopListening()
    }
});

// Later
BackgroundVolumeButtonListener.addListener("volumeEventTriggered", async () => {
    // do stuff
}
```

## Install

```bash
npm install background-volume-buttons
npx cap sync
```

## API

<docgen-index>

- [`startListening(...)`](#startlistening)
- [`stopListening()`](#stoplistening)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startListening(...)

```typescript
startListening(options: BackgroundVolumeButtonListenerOptions) => Promise<void>
```

Adds a listener to the volume buttons and fires an event when the volume is changed.

| Param         | Type                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#backgroundvolumebuttonlisteneroptions">BackgroundVolumeButtonListenerOptions</a></code> |

---

### stopListening()

```typescript
stopListening() => Promise<void>
```

Removes above listener

---

### Interfaces

#### BackgroundVolumeButtonListenerOptions

| Prop               | Type                | Description                                                                                               |
| ------------------ | ------------------- | --------------------------------------------------------------------------------------------------------- |
| **`triggerCount`** | <code>number</code> | The number of times the volume should be changed before the event is fired. Defaults to 3                 |
| **`timeout`**      | <code>number</code> | The max time in milliseconds before the `triggerCount` resets. Defaults to 1000                           |
| **`listenerName`** | <code>string</code> | Required. The string name of the listener you would like the event to broadcast to i.e. `volumeTriggered` |

</docgen-api>
