---
title: "Using scandit-capacitor-datacapture-id-aamva-barcode-verification Package"
description: "A tutorial on how to use the scandit-capacitor-datacapture-id-aamva-barcode-verification package to verify AAMVA barcodes"
created_at: "2022-06-07"
published: true
slug: "scandit-capacitor-datacapture-id-aamva-barcode-verification"
---

# Using scandit-capacitor-datacapture-id-aamva-barcode-verification Package

In this tutorial, we will learn how to use the `scandit-capacitor-datacapture-id-aamva-barcode-verification` package to verify AAMVA barcodes. This package provides functionality to capture and validate identification documents such as driver's licenses and ID cards using Scandit's data capture technology.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

1. Capacitor project set up.
2. Scandit SDK license key. If you don't have a license key, you can obtain one from the Scandit website.

## Installation

To install the `scandit-capacitor-datacapture-id-aamva-barcode-verification` package, follow these steps:

1. Open your Capacitor project in your code editor.
2. Open a terminal and navigate to the root directory of your project.
3. Run the following command to install the package:

```bash
npm install scandit-capacitor-datacapture-id-aamva-barcode-verification
```

4. Open the `capacitor.config.json` file and add the following entry under the `plugins` section:

```json
{
  "name": "scandit-capacitor-datacapture-id-aamva-barcode-verification"
}
```

## Usage

Now let's see how to use the `scandit-capacitor-datacapture-id-aamva-barcode-verification` package in your Capacitor project.

1. Import the necessary functions from the package in your component:

```javascript
import { ScanditCapture, ScanditCaptureMode } from 'scandit-capacitor-datacapture-id-aamva-barcode-verification';
```

2. Initialize the ScanditCapture object with your license key:

```javascript
const scanditCapture = new ScanditCapture('YOUR_LICENSE_KEY');
```

3. Set the capture mode to specify the type of data you want to capture. For example, to capture AAMVA barcodes, use the following code:

```javascript
scanditCapture.setCaptureMode(ScanditCaptureMode.DATA_MATRIX);
```

4. Start the capture process:

```javascript
scanditCapture.startCapture();
```

5. Register a callback function to handle the captured data:

```javascript
scanditCapture.onCapture((data) => {
  // Handle the captured data
  console.log(data);
});
```

6. To stop the capture process, use the following code:

```javascript
scanditCapture.stopCapture();
```

That's it! You have successfully integrated the `scandit-capacitor-datacapture-id-aamva-barcode-verification` package into your Capacitor project to capture and verify AAMVA barcodes.

## Conclusion

In this tutorial, we have learned how to use the `scandit-capacitor-datacapture-id-aamva-barcode-verification` package to capture and verify AAMVA barcodes in a Capacitor project. This package provides powerful functionality for identification document verification using Scandit's data capture technology.