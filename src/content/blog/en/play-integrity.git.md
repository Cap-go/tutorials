---
title: "Using @capacitor-community/play-integrity Package"
description: "A tutorial on how to use the Play Integrity API provided by the @capacitor-community/play-integrity package."
created_at: 2022-02-18
published: true
slug: play-integrity.git
locale: en
---

# PLAY INTEGRITY

The Play Integrity API is a plugin provided by the @capacitor-community/play-integrity package. It allows you to verify that your app is a Genuine App Binary that has not been modified compared to what is available on the Play Store. This tutorial will guide you on how to integrate and use this API in your Capacitor app.

## Installation

To install the @capacitor-community/play-integrity package, run the following command:

```bash
npm install @capacitor-community/play-integrity
npx cap sync
```

## Usage

```typescript
import { PlayIntegrity } from '@capacitor-community/play-integrity';

try {
      // Nonce: See https://developer.android.com/google/play/integrity/classic
      // googleCloudProjectNumber: leave as 0 for the default for the application
      // or get from https://console.firebase.google.com/ Project Settings > General
      const result = await PlayIntegrity.requestIntegrityToken({
        nonce: nonce,
        googleCloudProjectNumber: 0
      });
      // Use result.token and decrypt and verify the integrity verdict
      // https://developer.android.com/google/play/integrity/classic#decrypt-verify
      console.log(`Play Integrity Result`, result);
    } catch (err) {
        // Recommendation: Report to backend and exit the application
    }
```

## API

### requestIntegrityToken

This method is used to request an integrity token from the Play Integrity API.

#### Parameters

- `options { nonce: string, googleCloudProjectNumber: number }`: The options object containing the nonce and the Google Cloud Project Number.

#### Returns

- A Promise that resolves with an object containing the token.

## Errors

When using the @capacitor-community/play-integrity package, the following errors may occur and should be handled appropriately.
