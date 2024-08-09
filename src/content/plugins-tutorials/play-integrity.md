---
"title": "Using @capacitor-community/play-integrity Package",
"description": "Tutorial on how to use the Play Integrity API with @capacitor-community/play-integrity package to verify the integrity of your app",
"created_at": "2022-01-19",
"published": true,
"slug": "play-integrity"
---

# Using @capacitor-community/play-integrity Package

The Play Integrity API is a helpful tool to ensure that your app maintains its integrity and security by verifying that it has not been tampered with and that the current user account is licensed. This tutorial will guide you through using the @capacitor-community/play-integrity package to implement this functionality in your app.

## Installation

To begin using the Play Integrity API, you first need to install the @capacitor-community/play-integrity package. You can do this by running the following command:

```bash
npm install @capacitor-community/play-integrity
npx cap sync
```

## Usage

After installing the package, you can start using the Play Integrity API in your app. Here is an example of how you can integrate it into your code:

```typescript
import { PlayIntegrity } from '@capacitor-community/play-integrity';
...
try {
    // Nonce: See https://developer.android.com/google/play/integrity/classic
    // googleCloudProjectNumber: leave as 0 for the default for the application
    // or get from https://console.firebase.google.com/ Project Settings > General
    const result = await PlayIntegrity.requestIntegrityToken({
        nonce: nonce,
        googleCloudProjectNumber: 0
    });
    // Use result.token and decrypt and verify the integrity verdict
    // For more details, see: https://developer.android.com/google/play/integrity/classic#decrypt-verify
    console.log(`Play Integrity Result`, result);
} catch (err) {
    // Recommendation: Report to backend and exit the application
}
```

## API

The `requestIntegrityToken` method is available for implementing the Play Integrity API. It accepts the following parameters:

### `requestIntegrityToken(options: { nonce: string; googleCloudProjectNumber: number; }) => Promise<{ token: string; }>`

- `nonce`: A unique value for verification.
- `googleCloudProjectNumber`: The Google Cloud Project Number.

This method returns a Promise that resolves to an object containing the `token` for further processing and verification.

## Errors

It's essential to handle errors that may occur during the verification process to ensure the security and integrity of your app.

This tutorial has provided an overview of using the @capacitor-community/play-integrity package to integrate the Play Integrity API into your app. By following these steps, you can enhance the security of your app and verify its authenticity.