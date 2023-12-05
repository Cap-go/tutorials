---
title: "Capacitor Barcode Scanner Fragment"
description: "A tutorial on how to use the @droponio/capacitor-barcode-scanner-fragment package to implement barcode scanning in a Capacitor project."
created_at: "2021-08-16"
published: true
slug: "capacitor-barcode-scanner-fragment"
---

# Capacitor Barcode Scanner Fragment Tutorial

In this tutorial, we will guide you through the process of implementing barcode scanning functionality in a Capacitor project using the `@droponio/capacitor-barcode-scanner-fragment` package. 

## Installation

To get started, follow these steps to install the package:

1. Open your project's root directory.
2. Run the following command to install the package:

```shell
npm install @droponio/capacitor-barcode-scanner-fragment
```

3. After the installation is complete, run the following command to sync the Capacitor project:

```shell
npx cap sync
```

## Usage

1. Import the necessary components from the `@droponio/capacitor-barcode-scanner-fragment` package:

```javascript
import { BarcodeScannerFragment } from '@droponio/capacitor-barcode-scanner-fragment';
```

2. Create a function to initiate the barcode scanning process:

```javascript
const startBarcodeScanner = async () => {
  try {
    const { barcode } = await BarcodeScannerFragment.scan();
    console.log('Scanned barcode:', barcode);
  } catch (error) {
    console.error('Barcode scanning error:', error);
  }
}
```

3. Add a button or any other UI element to trigger the barcode scanning:

```javascript
<button onClick={startBarcodeScanner}>Scan Barcode</button>
```

4. Run the following command to build and open the project in Android Studio:

```shell
npx cap open android
```

5. In your Android project, open the `MainActivity.java` file located in the `app/src/main/java/***/***` directory.

6. Add the following import statement at the top of the file:

```java
import com.droponio.capacitor.barcodescanner.BarcodeScannerFragment;
```

7. Locate the `onCreate` method in the `MainActivity` class and add the following code inside the method:

```java
BarcodeScannerFragment.register(this.getApplication());
```

8. Build and run the Android project.

9. Enjoy scanning barcodes in your Capacitor application!

## Conclusion

In this tutorial, we learned how to integrate barcode scanning functionality into a Capacitor project using the `@droponio/capacitor-barcode-scanner-fragment` package. Now you can easily scan barcodes and enhance your mobile application with this useful feature.