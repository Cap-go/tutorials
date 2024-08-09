```md
---
"title": "Using @biso_gmbh/capacitor-plugin-rest-information-from-image Package",
"description": "A step-by-step tutorial on how to use the @biso_gmbh/capacitor-plugin-rest-information-from-image package to get information from an image via a REST API in a Capacitor app.",
"created_at": "2022-01-15",
"published": true,
"slug": "capacitor-plugin-rest-information-from-image"
---

# Using @biso_gmbh/capacitor-plugin-rest-information-from-image Package

In this tutorial, we will walk through the process of using the @biso_gmbh/capacitor-plugin-rest-information-from-image package in a Capacitor app to retrieve information from an image via a REST API.

## Installation

First, install the package using npm:

```bash
npm install @biso_gmbh/capacitor-plugin-rest-information-from-image
npx cap sync
```

## Configuration

The next step is to configure the plugin. The image information will be returned in JSON format through POST calls. The image will be sent as part of the body as a base64 string, with configurable keys. The image type is currently hardcoded as JPEG, but the key can be configured.

## Usage

To use the plugin to get information from an image, you can make a call to the `scan` function. Here is how you can do it:

```typescript
import { scan } from '@biso_gmbh/capacitor-plugin-rest-information-from-image';

const imageBase64 = 'your_base64_encoded_image_string_here';
const imageType = 'jpeg';

const result = await scan({ 
  image: imageBase64, 
  type: imageType 
});

console.log(result);
```

Make sure to check the documentation for any additional configuration options or features provided by the package.

And that's it! You have successfully learned how to use the @biso_gmbh/capacitor-plugin-rest-information-from-image package in your Capacitor app.
```
