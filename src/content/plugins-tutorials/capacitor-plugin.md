```markdown
---
title: Using barkoder-capacitor Package Guide
description: A comprehensive tutorial on how to use the barkoder-capacitor package in your Capacitor project, including installation, configuration, and usage.
created_at: 2022-02-28
published: true
slug: capacitor-plugin
---

# Using barkoder-capacitor Package Guide

## Introduction
This guide will walk you through the steps of integrating and utilizing the barkoder-capacitor package in your Capacitor project for barcode scanning.

## Installation
To begin using the barkoder-capacitor package, follow these installation steps:

1. **Install the Package:**
   ```bash
   npm install barkoder-capacitor
   npx cap sync
   ```

2. **Manual Installation:**
   - If you prefer a manual installation from a local folder, follow these steps:
     - Download the zip file from the repository.
     - Unpack the zip file.
     - Rename the folder to your desired name.
     - Paste the folder into your app directory (e.g., `myApp/barkoder-capacitor`).
     - Run the following command:
     ```bash
     npm install "/your-path/myApp/barkoder-capacitor"
     ```

## Usage with Angular
In your Angular project, follow these steps to use the barkoder-capacitor package:

1. **Import and Initialize:**
   In your TypeScript file, import the necessary modules and set up the Barcode listener. For example:
   ```typescript
   import { Barkoder, BarcodeType } from 'barkoder-capacitor'

   @ViewChild('barkoderView') barkoderViewRef!: ElementRef;

   constructor() {
     Barkoder.addListener('barkoderResultEvent', (barkoderResult: any) => {
       console.log('barkoderResultEvent was fired');
       console.log("Result: " + barkoderResult.textualData);
     });
   }

   setActiveBarcodeTypes() {
    Barkoder.setBarcodeTypeEnabled({ type: BarcodeType.code128, enabled: true });
    Barkoder.setBarcodeTypeEnabled({ type: BarcodeType.ean13, enabled: true });
   }
   ```

## Conclusion
With this guide, you should now have a good understanding of how to integrate and leverage the barkoder-capacitor package within your Capacitor project for efficient barcode scanning functionality.
```
```
