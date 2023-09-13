# capacitor-plugin-barcodescanner

[Capacitor Plugin](https://capacitor.ionicframework.com/docs/basics/using-plugins) to add barcode scanner capabilities to your capacitor app.

_Note_ it only supports the android platform at the moment.

## Installation

Install the plugin package by calling

```CLI
npm install capacitor-plugin-barcodescanner
```

then call

```CLI
npx cap update
```

to update the android platfrom.

### Android

Open the android project and the `MainActivity.java` to register the plugin

```JAVA
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(BarcodeScanner.class);
    }});

    // some other code
  }
```

## Usage

In your web app, to consume the plugin you have to register for a barcode scanner notifications:

```TypeScript
import { Plugins, Capacitor } from '@capacitor/core';
import {
  BarcodeScannerPlugin,
  EVENT_BARCODE_SCANNED,
  IBarcodeScannerEventPayload,
} from 'capacitor-plugin-barcodescanner';

// can be used later to remove BarcodeScanner listener
let removeScannerHandler?: (() => void) = undefined;

const barcodeScanned = (state: IBarcodeScannerEventPayload): void => {
  console.log("BarcodeScanned - ",state.cancelled, state.barcode, state.error)
}
// Get the BarcodeScanner plugin
    const BarcodeScanner = Plugins.BarcodeScanner as BarcodeScannerPlugin;
// Register listener
    removeScannerHandler = BarcodeScanner.addListener(
      EVENT_BARCODE_SCANNED,
      barcodeScanned
    ).remove;

// call to start scanning....
BarcodeScanner.scan();
// this will call the plugin's scan method which starts scanning activity, after finishing the `EVENT_BARCODE_SCANNED` will be issued.


// when not needed
if(removeScannerHandler) {
  removeScannerHandler();
  removeScannerHandler = undefined;
}
```
