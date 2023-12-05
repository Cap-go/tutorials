---
title: "Using capacitor-plugin-ecies"
description: "A tutorial on how to use the capacitor-plugin-ecies package in your Capacitor project."
created_at: "2021-10-15"
published: true
slug: "capacitor-plugin-ecies"
---

# Using capacitor-plugin-ecies

The capacitor-plugin-ecies package allows you to implement ECIES (Elliptic Curve Integrated Encryption Scheme) in your Capacitor project. This tutorial will guide you through the steps of installing and using this plugin.

## Installation

To get started with capacitor-plugin-ecies, you need to install it into your Capacitor project. 

```bash
npm install capacitor-plugin-ecies
```

## Usage

### Import the Plugin

Before using the capacitor-plugin-ecies functions, you need to import the plugin into your project.

```ts
import { Plugins } from '@capacitor/core';
const { CapacitorPluginEcies } = Plugins;
```

### Generate Key Pair

To use ECIES encryption, you need a key pair. You can generate a new key pair using the `generateKeyPair` function.

```ts
const result = await CapacitorPluginEcies.generateKeyPair();
const publicKey = result.publicKey;
const privateKey = result.privateKey;
```

### Encrypt a Message

To encrypt a message using ECIES, you can use the `encrypt` function.

```ts
const encryptedData = await CapacitorPluginEcies.encrypt({
  publicKey: publicKey,
  message: 'Hello, World!'
});
const ciphertext = encryptedData.ciphertext;
const iv = encryptedData.iv;
```

### Decrypt a Message

To decrypt an ECIES-encrypted message, you can use the `decrypt` function.

```ts
const decryptedData = await CapacitorPluginEcies.decrypt({
  privateKey: privateKey,
  ciphertext: ciphertext,
  iv: iv
});
const decryptedMessage = decryptedData.message;
```

## Conclusion

In this tutorial, you learned how to install and use the capacitor-plugin-ecies package in your Capacitor project. You can now implement ECIES encryption in your app and securely transmit sensitive data.