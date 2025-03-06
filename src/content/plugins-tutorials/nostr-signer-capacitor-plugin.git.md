---
"title": "Using Nostr Signer Capacitor Plugin Package",
"description": "Learn how to interact with Nostr signer apps on the Android platform using the Nostr Signer Capacitor Plugin package.",
"created_at": "2023-10-08",
"published": true,
"slug": "nostr-signer-capacitor-plugin.git"
---

# Using Nostr Signer Capacitor Plugin Package

The Nostr Signer Capacitor Plugin package allows your application to interact with Nostr signer apps on the Android platform using intents. This tutorial will guide you through the installation, setting up the package name, checking if the external signer app is installed, getting a list of installed external signers, getting the public key, signing an event, and encrypting/decrypting messages following the NIP-04 and NIP-44 specifications.

## Installation

```bash
npm install nostr-signer-capacitor-plugin
npx cap sync
```

## Usage

### Import the Plugin

```typescript
import NostrSignerPlugin from 'nostr-signer-capacitor-plugin';
```

### Set the Signer Package Name

Before using the plugin on Android, you need to set the package name of the external signer app.

```typescript
await NostrSignerPlugin.setPackageName({ packageName: 'com.example.signer' });
```

### Check if External Signer is Installed

```typescript
const { installed } = await NostrSignerPlugin.isExternalSignerInstalled();
if (!installed) {
  console.log('External signer app is not installed.');
}
```

### Get a List of Installed External Signers

```typescript
try {
  const result = await NostrSignerPlugin.getInstalledSignerApps();
  signerApps = result.apps;
  console.log('Installed Signer Apps:', signerApps);
} catch (error) {
  console.error('Error getting installed signer apps:', error);
}
```

### Get Public Key

```typescript
try {
  const { npub } = await NostrSignerPlugin.getPublicKey();
  console.log('Public Key:', npub);
} catch (error) {
  console.error('Error getting public key:', error);
}
```

### Sign Event

```typescript
const event = {
  kind: 1,
  content: 'Hello, Nostr!',
  tags: [],
  created_at: Math.floor(Date.now() / 1000),
};

try {
  const { event: signedEventJson } = await NostrSignerPlugin.signEvent({
    eventJson: JSON.stringify(event),
  });
  const signedEvent = JSON.parse(signedEventJson);
  console.log('Signed Event:', signedEvent);
} catch (error) {
  console.error('Error signing event:', error);
}
```

### NIP-04 Encrypt

```typescript
try {
  const { result: encryptedText } = await NostrSignerPlugin.nip04Encrypt({
    pubKey: 'recipient_public_key',
    plainText: 'Secret message',
  });
  console.log('Encrypted Text:', encryptedText);
} catch (error) {
  console.error('Error encrypting message:', error);
}
```

### NIP-04 Decrypt

```typescript
try {
  const { result: decryptedText } = await NostrSignerPlugin.nip04Decrypt({
    pubKey: 'sender_public_key',
    encryptedText: 'encrypted_text',
  });
  console.log('Decrypted Text:', decryptedText);
} catch (error) {
  console.error('Error decrypting message:', error);
}
```