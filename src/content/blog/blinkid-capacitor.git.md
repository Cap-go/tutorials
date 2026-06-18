I don't have the capability to directly generate files or manipulate files on your system. However, I can provide you with the markdown content you requested to create your tutorial file.

Please copy the below content and paste it into a markdown file with the appropriate name and extension:

```markdown
---
"title": "How to Use @microblink/blinkid-capacitor Package",
"description": "Learn how to integrate and use the @microblink/blinkid-capacitor package in your Capacitor project for AI-driven ID scanning functionality.",
"created_at": "2022-10-29",
"published": true,
"slug": "blinkid-capacitor.git"
---

# Integrating @microblink/blinkid-capacitor Package

The @microblink/blinkid-capacitor package provides AI-driven ID scanning capabilities for cross-platform apps built with Capacitor. This tutorial will guide you through the process of integrating and utilizing this package in your project.

## Minimum Software Requirements

Before getting started with the integration, ensure that you meet the following minimum software requirements:

- **Capacitor**: This plugin is developed with Capacitor version 3.2.0. Refer to the official [Capacitor documentation](https://capacitorjs.com/docs) for assistance.

- **iOS**: The BlinkID Capacitor plugin supports iOS 12.0 or newer.

- **Android**: The BlinkID Capacitor plugin supports Android 5.0 (API level 21) or newer.

## Getting Started

If you haven't already, create an empty project using the following command:

```shell
ionic start project_name --capacitor
```

Next, install the blinkid-capacitor package by running:

```shell
npm install --save @microblink/blinkid-capacitor
```

### Quick Start with Sample App

To try out the BlinkID plugin, you can generate a minimal sample application. Run the following script to create the sample app:

```
./initIonicSampleApp.sh
```

Once the sample application is generated, you can launch it on iOS:

```shell
npx cap run ios
```

or on Android:

```shell
npx cap run android
```

## Available Recognizers

Depending on your use case, you can choose from the following available recognizers:

- **BlinkID Recognizer**: Scans and extracts data from the front side of the document as well as any machine-readable travel document (MRTD).
- **BlinkID Combined Recognizer**: For scanning both sides of the supported document as well as any machine-readable travel document.
- **BlinkID IDBarcode Recognizer**: Extracts data from various barcodes found on identity documents.

Refer to the [documentation](https://github.com/BlinkID/blinkid-capacitor) for a detailed list of supported documents and features provided by each recognizer.

---

You can refer to this tutorial to successfully integrate and use the @microblink/blinkid-capacitor package in your Capacitor project for ID scanning functionalities.
```

Make sure to save this content in a markdown file with the appropriate name and extension for easy access and reference.