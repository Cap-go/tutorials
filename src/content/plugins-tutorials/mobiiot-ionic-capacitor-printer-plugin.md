---
title: "Using capacitor-printer package"
description: "A tutorial on how to use the capacitor-printer package in an Ionic app with Capacitor"
created_at: "2021-12-01"
published: true
slug: mobiiot-ionic-capacitor-printer-plugin
---

# Using capacitor-printer package

In this tutorial, we will learn how to use the `capacitor-printer` package in an Ionic app with Capacitor. The `capacitor-printer` package allows us to print receipts or HTML content directly from our app to connected printers.

## Installation

To install the `capacitor-printer` package, run the following command in your Ionic project:

```bash
npm install capacitor-printer
npx cap sync
```

## Usage

1. Import the `MobiPrint` module from the `capacitor-printer` package into your component:

   ```typescript
   import { MobiPrint } from 'capacitor-printer';
   ```

2. Add a button or an event handler for the print action in your template or component:

   ```html
   <ion-button (click)="printReceipt()">Print Receipt</ion-button>
   ```

3. Implement the `printReceipt` method in your component:

   ```typescript
   async printReceipt() {
     // Prepare the receipt data
     const receiptData = {
       // ...receipt data properties
     };

     // Convert the receipt data to a string
     const receiptDataString = JSON.stringify(receiptData);

     // Call the printReceipt method from the MobiPrint module
     const result = await MobiPrint.printReceipt({ value: receiptDataString });

     // Handle the print result
     if (result.value === 'success') {
       console.log('Receipt printed successfully');
     } else {
       console.error('Failed to print receipt');
     }
   }
   ```

4. Run your app and click the "Print Receipt" button to print the receipt.

That's it! You have successfully integrated the `capacitor-printer` package into your Ionic app using Capacitor.

Remember to make sure your app is connected to a printer before attempting to print.

## Conclusion

In this tutorial, we have learned how to use the `capacitor-printer` package to print receipts or HTML content from an Ionic app with Capacitor. By following the steps outlined in this tutorial, you should now be able to integrate printing functionality into your own Ionic apps.

Happy printing!