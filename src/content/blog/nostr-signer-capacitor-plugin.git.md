```markdown
---
"title": "Using Nostr Signer Capacitor Plugin",
"description": "A step-by-step tutorial on how to use the Nostr Signer Capacitor Plugin to interact with Nostr signer apps on the Android platform.",
"created_at": "2022-01-15",
"published": true,
"slug": "nostr-signer-capacitor-plugin.git"
---

# Using Nostr Signer Capacitor Plugin

In this tutorial, we will go through the steps of using the Nostr Signer Capacitor Plugin to interact with Nostr signer apps on the Android platform.

## Installation

To start using the plugin, first install it by running the following commands in your project directory:

```bash
npm install nostr-signer-capacitor-plugin
npx cap sync
```

## Setting Up the Plugin

### Import the Plugin

```typescript
import NostrSignerPlugin from 'nostr-signer-capacitor-plugin';
```

### Setting the Signer Package Name

Before using the plugin on Android, you need to set the package name of the external signer app.

```typescript
await NostrSignerPlugin.setPackageName({ packageName: 'com.example.signer' });
```

## Checking Installation of External Signer

You can check if the external signer app is installed by calling:

```typescript
const { installed } = await NostrSignerPlugin.isExternalSignerInstalled();
if (!installed) {
  console.log('External signer app is not installed.');
}
```

## More Functionality

The plugin provides various functions such as getting a list of installed external signers, getting the public key, signing events, and encryption and decryption according to NIP standards.

Make sure to explore the documentation and functionalities of this powerful plugin for integrating signer capabilities into your application!
```
