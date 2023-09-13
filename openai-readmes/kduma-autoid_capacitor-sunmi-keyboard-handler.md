# @kduma-autoid/capacitor-sunmi-keyboard-handler

Handler for processing input from Sunmi hardware barcode scanners (builtin and external) and external Sunmi programmable keyboard.

## Install

```bash
npm install @kduma-autoid/capacitor-sunmi-keyboard-handler
npx cap sync
```

Modify your `MainActivity.java` file to include the following:

```java
package com.example.plugin;

import android.view.KeyEvent;

import com.getcapacitor.BridgeActivity;

import dev.duma.capacitor.sunmikeyboardhandler.HasKeyHandlersInterface;
import dev.duma.capacitor.sunmikeyboardhandler.KeyHandlerInterface;

public class MainActivity extends BridgeActivity implements HasKeyHandlersInterface {
    private KeyHandlerInterface keyHandler = null;

    public KeyHandlerInterface getKeyHandler() {
        return keyHandler;
    }

    public void setKeyHandler(KeyHandlerInterface keyHandler) {
        this.keyHandler = keyHandler;
    }

    @Override
    public boolean dispatchKeyEvent(KeyEvent event) {
        KeyHandlerInterface handler = getKeyHandler();

        if (handler != null && handler.handle(event)) return true;

        return super.dispatchKeyEvent(event);
    }
}
```

## API

<docgen-index>

- [`setKeyHandler(...)`](#setkeyhandler)
- [`removeKeyHandler(...)`](#removekeyhandler)
- [`setBarcodeHandler(...)`](#setbarcodehandler)
- [`removeBarcodeHandler()`](#removebarcodehandler)
- [`setDebugHandler(...)`](#setdebughandler)
- [`removeDebugHandler()`](#removedebughandler)
- [Type Aliases](#type-aliases)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setKeyHandler(...)

```typescript
setKeyHandler(options: { key: HandleableKey; }, callback: KeyHandlerCallback) => Promise<CallbackID>
```

Set a callback to be called when a key specified in `key` parameter is pressed.

| Param          | Type                                                              |
| -------------- | ----------------------------------------------------------------- |
| **`options`**  | <code>{ key: <a href="#handleablekey">HandleableKey</a>; }</code> |
| **`callback`** | <code><a href="#keyhandlercallback">KeyHandlerCallback</a></code> |

**Returns:** <code>Promise&lt;string&gt;</code>

---

### removeKeyHandler(...)

```typescript
removeKeyHandler(options: { key: HandleableKey; }) => Promise<void>
```

Remove a callback set by `setKeyHandler` for a key specified in `key` parameter.

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code>{ key: <a href="#handleablekey">HandleableKey</a>; }</code> |

---

### setBarcodeHandler(...)

```typescript
setBarcodeHandler(callback: BarcodeHandlerCallback) => Promise<CallbackID>
```

Set a callback to be called when a barcode is scanned.

| Param          | Type                                                                      |
| -------------- | ------------------------------------------------------------------------- |
| **`callback`** | <code><a href="#barcodehandlercallback">BarcodeHandlerCallback</a></code> |

**Returns:** <code>Promise&lt;string&gt;</code>

---

### removeBarcodeHandler()

```typescript
removeBarcodeHandler() => Promise<void>
```

Remove a callback set by `setBarcodeHandler`.

---

### setDebugHandler(...)

```typescript
setDebugHandler(callback: DebugHandlerCallback) => Promise<CallbackID>
```

Set a callback to be called when any unhandled key is pressed.

| Param          | Type                                                                  |
| -------------- | --------------------------------------------------------------------- |
| **`callback`** | <code><a href="#debughandlercallback">DebugHandlerCallback</a></code> |

**Returns:** <code>Promise&lt;string&gt;</code>

---

### removeDebugHandler()

```typescript
removeDebugHandler() => Promise<void>
```

Remove a callback set by `setDebugHandler`.

---

### Type Aliases

#### KeyHandlerCallback

<code>(data: { key: <a href="#handleablekey">HandleableKey</a>; modifiers: ModifierKey[]; type: <a href="#keyevent">KeyEvent</a>; }): void</code>

#### CallbackID

<code>string</code>

#### BarcodeHandlerCallback

<code>(data: { barcode: string; device: { type: string; id: number; }; }): void</code>

#### DebugHandlerCallback

<code>(data: any): void</code>

### Enums

#### HandleableKey

| Members            | Value                       |
| ------------------ | --------------------------- |
| **`Esc`**          | <code>"ESC"</code>          |
| **`F1`**           | <code>"F1"</code>           |
| **`F2`**           | <code>"F2"</code>           |
| **`F3`**           | <code>"F3"</code>           |
| **`F4`**           | <code>"F4"</code>           |
| **`F5`**           | <code>"F5"</code>           |
| **`F6`**           | <code>"F6"</code>           |
| **`F7`**           | <code>"F7"</code>           |
| **`F8`**           | <code>"F8"</code>           |
| **`F9`**           | <code>"F9"</code>           |
| **`F10`**          | <code>"F10"</code>          |
| **`Delete`**       | <code>"DELETE"</code>       |
| **`Home`**         | <code>"HOME"</code>         |
| **`End`**          | <code>"END"</code>          |
| **`PgUp`**         | <code>"PGUP"</code>         |
| **`PgDn`**         | <code>"PGDN"</code>         |
| **`Cash`**         | <code>"CASH"</code>         |
| **`L2s_Shortcut`** | <code>"L2S_SHORTCUT"</code> |
| **`L2k_Shortcut`** | <code>"L2K_SHORTCUT"</code> |
| **`RFID`**         | <code>"RFID"</code>         |

#### ModifierKey

| Members     | Value                |
| ----------- | -------------------- |
| **`Alt`**   | <code>"ALT"</code>   |
| **`Ctrl`**  | <code>"CTRL"</code>  |
| **`Shift`** | <code>"SHIFT"</code> |

#### KeyEvent

| Members       | Value                   |
| ------------- | ----------------------- |
| **`KeyDown`** | <code>"KEY_DOWN"</code> |
| **`KeyUp`**   | <code>"KEY_UP"</code>   |

</docgen-api>
