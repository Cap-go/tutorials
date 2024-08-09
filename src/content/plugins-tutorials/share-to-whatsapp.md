```md
---
"title": "Tutorial on Using share-to-whatsapp Package"
"description": "This blog post will guide you through using the share-to-whatsapp package to easily share images and PDF files directly to a specified WhatsApp number from your Ionic/Capacitor application."
"created_at": "2022-02-12"
"published": true
"slug": "share-to-whatsapp"
---

# Tutorial on Using share-to-whatsapp Package

In this tutorial, you will learn how to use the `share-to-whatsapp` package to simplify sharing images and PDF files to a specific WhatsApp number from your Ionic/Capacitor application.

## Installation

You can install the `share-to-whatsapp` package via npm by running the following commands:

```bash
npm install share-to-whatsapp
npx cap sync
```

## API

The `share-to-whatsapp` package provides the following API methods:

### shareImage()

The `shareImage()` method allows you to share images via WhatsApp. It takes in the following options:
- `base64`: The base64-encoded image data.
- `fileName`: The name of the image file.
- `phoneNumber`: The WhatsApp number to share the image with.
- `message`: An optional message to include with the shared image.

### sharePdf()

The `sharePdf()` method is similar to `shareImage()` but is used to share PDF files. It takes the same options as `shareImage()`.

## Getting Started

To use the `share-to-whatsapp` package in your application, you can call the `shareImage()` or `sharePdf()` methods with the appropriate options.

```typescript
import { shareImage, sharePdf } from 'share-to-whatsapp';

// Example usage to share an image
shareImage({
  base64: 'YOUR_BASE64_IMAGE_DATA',
  fileName: 'example.jpg',
  phoneNumber: 'RECIPIENT_WHATSAPP_NUMBER',
  message: 'Check out this image!',
});

// Example usage to share a PDF
sharePdf({
  base64: 'YOUR_BASE64_PDF_DATA',
  fileName: 'example.pdf',
  phoneNumber: 'RECIPIENT_WHATSAPP_NUMBER',
  message: 'Here is a PDF for you!',
});
```

This tutorial will help you integrate the `share-to-whatsapp` package into your Ionic/Capacitor application efficiently for seamless sharing of images and PDFs via WhatsApp.
```