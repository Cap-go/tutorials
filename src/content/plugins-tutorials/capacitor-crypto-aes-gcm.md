---
title: "Using capacitor-crypto-aes-gcm Package"
description: "In this tutorial, we will learn how to use the capacitor-crypto-aes-gcm package to encrypt and decrypt data using AES-GCM 256 algorithm in iOS using CryptoKit."
created_at: "2022-05-27"
published: true
slug: capacitor-crypto-aes-gcm
---

# Using capacitor-crypto-aes-gcm Package

In this tutorial, we will learn how to use the capacitor-crypto-aes-gcm package to encrypt and decrypt data using AES-GCM 256 algorithm in iOS using CryptoKit.

## Installation

To get started, we need to install the `capacitor-crypto-aes-gcm` package. Open your terminal and run the following command:

```bash
npm install capacitor-crypto-aes-gcm
npx cap sync
```

This will install the package and synchronize the Capacitor configuration.

## API

The `capacitor-crypto-aes-gcm` package provides the following API methods:

### encrypt(options)

This method is used to encrypt data using AES-GCM 256 algorithm.

**Parameters:**

- `options`: An object containing the following properties:
  - `text` (string): The text to be encrypted.
  - `base64Encoded` (string): The base64 encoded secret key.
  - `encodedIV` (optional string): The base64 encoded initialization vector (IV).

**Returns:** The encrypted data.

### decrypt(options)

This method is used to decrypt data using AES-GCM 256 algorithm.

**Parameters:**

- `options`: An object containing the following properties:
  - `text` (string): The text to be decrypted.
  - `base64Encoded` (string): The base64 encoded secret key.
  - `encodedIV` (optional string): The base64 encoded initialization vector (IV).

**Returns:** The decrypted data.

### generateSymmetricKey()

This method is used to generate a symmetric key.

**Returns:** The generated symmetric key.

### generateIV()

This method is used to generate an initialization vector (IV).

**Returns:** The generated initialization vector.

## Example Usage

Here's an example of how to use the `capacitor-crypto-aes-gcm` package in an iOS app:

```typescript
import { Plugins } from '@capacitor/core';
const { CryptoAesGcm } = Plugins;

async function encryptData() {
  const text = 'Hello, World!';
  const base64Encoded = 'base64-encoded-secret-key';
  const encodedIV = 'base64-encoded-iv';

  const encryptedData = await CryptoAesGcm.encrypt({ text, base64Encoded, encodedIV });

  console.log('Encrypted Data:', encryptedData);
}

async function decryptData() {
  const text = 'encrypted-data';
  const base64Encoded = 'base64-encoded-secret-key';
  const encodedIV = 'base64-encoded-iv';

  const decryptedData = await CryptoAesGcm.decrypt({ text, base64Encoded, encodedIV });

  console.log('Decrypted Data:', decryptedData);
}

async function generateKey() {
  const symmetricKey = await CryptoAesGcm.generateSymmetricKey();

  console.log('Generated Symmetric Key:', symmetricKey);
}

async function generateIV() {
  const IV = await CryptoAesGcm.generateIV();

  console.log('Generated IV:', IV);
}

encryptData();
decryptData();
generateKey();
generateIV();
```

In this example, we import the `CryptoAesGcm` plugin from the `@capacitor/core` package. We then use the `encrypt` method to encrypt data, the `decrypt` method to decrypt data, the `generateSymmetricKey` method to generate a symmetric key, and the `generateIV` method to generate an initialization vector.

That's it! Now you know how to use the `capacitor-crypto-aes-gcm` package to encrypt and decrypt data using AES-GCM 256 algorithm in iOS using CryptoKit.

