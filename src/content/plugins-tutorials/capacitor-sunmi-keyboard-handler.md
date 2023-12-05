---
title: "Using @kduma-autoid/capacitor-sunmi-keyboard-handler Package"
description: "A tutorial on how to use the @kduma-autoid/capacitor-sunmi-keyboard-handler package to handle input from Sunmi hardware barcode scanners and programmable keyboard."
created_at: "2022-01-01"
published: true
slug: "capacitor-sunmi-keyboard-handler"
---

# Using @kduma-autoid/capacitor-sunmi-keyboard-handler Package

The `@kduma-autoid/capacitor-sunmi-keyboard-handler` package provides a convenient way to handle input from Sunmi hardware barcode scanners and external programmable keyboards in Capacitor projects. This tutorial will guide you through the installation and usage of this package.

## Installation

To install the `@kduma-autoid/capacitor-sunmi-keyboard-handler` package, simply run the following command in your project directory:

```bash
npm install @kduma-autoid/capacitor-sunmi-keyboard-handler
npx cap sync
```

## Setting Up the Handler

In order to handle input from Sunmi hardware barcode scanners and programmable keyboards, you need to modify your `MainActivity.java` file. Here's how you can do it:

1. Open your project's `MainActivity.java` file.
2. Import the required classes:

```java
package com.example.plugin;

import android.view.KeyEvent;
import com.getcapacitor.BridgeActivity;
import dev.duma.capacitor.sunmikeyboardhandler.HasKeyHandlersInterface;
import dev.duma.capacitor.sunmikeyboardhandler.KeyHandlerInterface;
```

3. Modify the `MainActivity` class to implement the `HasKeyHandlersInterface` interface:

```java
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

## Handling Keys

To set up a callback for a specific key press event, you can use the `setKeyHandler` method provided by the `@kduma-autoid/capacitor-sunmi-keyboard-handler` package. Here's how you can do it:

```typescript
import { Plugins } from '@capacitor/core';

const { SunmiKeyboardHandler } = Plugins;

// Set a callback for the 'ENTER' key press event
SunmiKeyboardHandler.setKeyHandler({ key: 'ENTER' }, (event) => {
  // Handle the key press event here
  console.log('ENTER key pressed');
});
```

To remove a previously set key handler callback, you can use the `removeKeyHandler` method:

```typescript
import { Plugins } from '@capacitor/core';

const { SunmiKeyboardHandler } = Plugins;

// Remove the callback for the 'ENTER' key press event
SunmiKeyboardHandler.removeKeyHandler({ key: 'ENTER' });
```

## Handling Barcodes

To set up a callback for when a barcode is scanned, you can use the `setBarcodeHandler` method provided by the `@kduma-autoid/capacitor-sunmi-keyboard-handler` package. Here's how you can do it:

```typescript
import { Plugins } from '@capacitor/core';

const { SunmiKeyboardHandler } = Plugins;

// Set a callback for barcode scanning
SunmiKeyboardHandler.setBarcodeHandler((barcode) => {
  // Handle the scanned barcode here
  console.log('Barcode scanned:', barcode);
});
```

To remove the barcode handler callback, you can use the `removeBarcodeHandler` method:

```typescript
import { Plugins } from '@capacitor/core';

const { SunmiKeyboardHandler } = Plugins;

// Remove the callback for barcode scanning
SunmiKeyboardHandler.removeBarcodeHandler();
```

## Conclusion

In this tutorial, we learned how to use the `@kduma-autoid/capacitor-sunmi-keyboard-handler` package to handle input from Sunmi hardware barcode scanners and programmable keyboards in Capacitor projects. We covered the installation process, setting up the handler in `MainActivity.java`, and handling key presses and barcode scanning. With this package, you can easily integrate Sunmi hardware peripherals into your Capacitor app and provide a seamless user experience.

Happy coding!