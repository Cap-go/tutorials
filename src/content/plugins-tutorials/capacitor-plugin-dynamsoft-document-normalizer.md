---
title: "Using capacitor-plugin-dynamsoft-document-normalizer"
description: "Learn how to use the capacitor-plugin-dynamsoft-document-normalizer package to enhance your document processing capabilities in Capacitor."
created_at: "2022-01-01"
published: true
slug: "capacitor-plugin-dynamsoft-document-normalizer"
---

# Using capacitor-plugin-dynamsoft-document-normalizer

The capacitor-plugin-dynamsoft-document-normalizer package provides powerful document processing capabilities to your Capacitor applications. With this plugin, you can easily integrate Dynamsoft Document Normalizer SDK into your project and leverage its features to enhance document recognition, data extraction, and more.

In this tutorial, we will guide you through the process of installing and using the capacitor-plugin-dynamsoft-document-normalizer package in your Capacitor project.

## Prerequisites

Before getting started, make sure you have the following prerequisites:

- Capacitor installed globally on your machine.
- A Capacitor project set up and initialized.

If you haven't installed Capacitor yet, you can do so by running the following command:

```
npm install -g @capacitor/core @capacitor/cli
```

## Installation

To install the capacitor-plugin-dynamsoft-document-normalizer package, follow these steps:

1. Navigate to your Capacitor project's root folder in your terminal.
2. Run the following command:

```
npm install capacitor-plugin-dynamsoft-document-normalizer
```

The package will be installed and added to your project's dependencies.

## Configuration

After installing the package, you need to configure it with your Dynamsoft Document Normalizer SDK license. Here's how:

1. Open the `capacitor.config.json` file in your Capacitor project.
2. Locate the `plugins` section.
3. Add the following configuration object to the `plugins` section:

```json
"capacitor-plugin-dynamsoft-document-normalizer": {
  "licenseKey": "YOUR_LICENSE_KEY"
}
```

Replace `YOUR_LICENSE_KEY` with your actual license key provided by Dynamsoft Document Normalizer.

## Usage

Once the package is installed and configured, you can start using its functionality in your Capacitor project. Here's an example of using the document normalization feature:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorDynamsoftDocNormalizer } = Plugins;

async function normalizeDocument(imageData: string) {
  try {
    const result = await CapacitorDynamsoftDocNormalizer.normalizeDocument({
      imageData,
    });

    console.log('Normalized document:', result.normalizedImageData);
    console.log('Extracted text:', result.extractedText);
  } catch (error) {
    console.error('Error normalizing document:', error);
  }
}
```

In the above example, we import the `Plugins` object from `@capacitor/core` and access the `CapacitorDynamsoftDocNormalizer` plugin. We then use the `normalizeDocument` method to normalize the provided image data. The result contains the normalized image data and extracted text from the document.

You can explore other methods and features provided by the capacitor-plugin-dynamsoft-document-normalizer package in its documentation.

## Conclusion

In this tutorial, we learned how to install and use the capacitor-plugin-dynamsoft-document-normalizer package in your Capacitor project. We also saw an example of normalizing a document and extracting text from it.

With the capacitor-plugin-dynamsoft-document-normalizer package, you can unlock advanced document processing capabilities in your Capacitor applications, enabling you to build powerful document management solutions.

Start incorporating the capacitor-plugin-dynamsoft-document-normalizer package into your projects today and elevate your document processing workflows.