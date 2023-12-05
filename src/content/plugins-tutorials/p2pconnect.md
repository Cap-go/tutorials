---
title: "Using the @enertrag/p2pconnect Package"
description: "This tutorial will guide you through the process of using the @enertrag/p2pconnect package to enable file exchange between devices."
created_at: "2021-10-13"
published: true
slug: p2pconnect
---

# Using the @enertrag/p2pconnect Package

The @enertrag/p2pconnect package is a Capacitor plugin that allows file exchange between two devices without the need for an internet connection or being on the same network. This tutorial will guide you through the installation process and provide examples of how to send and retrieve files using this package.

## Installation

To install the @enertrag/p2pconnect package, you need to run the following commands:

```bash
npm install @enertrag/p2pconnect
npx cap sync
```

## Examples

### Sending Files

To send a file to another device, you need to follow these steps:

1. Use the Capacitor Filesystem plugin to get the file URI of the file you want to send.
2. Define the service ID and transfer ID, which will be used to identify the transfer.
3. Create a resource descriptor object, specifying the ID (filename) and URI of the file.
4. Call the `P2pConnect.send()` method passing the service ID, transfer ID, and an array of resource descriptors.
5. The method will return after the resource was sent to the client or the user cancelled the process.

Here's an example of how to send a file:

```typescript
import { Filesystem, Directory } from '@capacitor/filesystem';
import { P2pConnect, ResourceDescriptor } from '@enertrag/p2pconnect';

async function sendFile() {
  // Use Capacitor Filesystem plugin to get file URI
  const fileUri = await Filesystem.getUri({
    directory: Directory.Data,
    path: 'path/to/file.txt',
  });

  // Define IDs
  const serviceId = 'p2p-test';
  const transferId = 'share.txt';

  // Create resource descriptor
  const resource: ResourceDescriptor = {
    id: 'file.txt',
    uri: fileUri.uri,
  };

  // Call P2pConnect.send() method
  const result = await P2pConnect.send({
    serviceId,
    transferId,
    resources: [resource],
  });
}
```

### Retrieving Files

To retrieve files sent from another device, you need to follow these steps:

1. Register a listener for the `transferComplete` event, which will be triggered when the transfer is complete.
2. Within the listener, you can access the sent resources using the `result.resources` array.
3. Use the Capacitor Filesystem plugin to move the received file to the desired location.

Here's an example of how to retrieve files:

```typescript
import { Filesystem, Directory } from '@capacitor/filesystem';
import { P2pConnect, ResourceDescriptor } from '@enertrag/p2pconnect';

// Register listener for transferComplete event
P2pConnect.addListener('transferComplete', async (result) => {
  const resource = result.resources[0];
  const fileTargetPath = '/path/to/save/' + resource.id;

  // Move the file to the final target
  await Filesystem.rename({
    from: resource.uri,
    toDirectory: Directory.Data,
    to: fileTargetPath,
  });
});

async function startReceive() {
  // Must be equal for sender and receiver
  const serviceId = 'p2p-test';

  // Start receiving files
  const result = await P2pConnect.startReceive({
    serviceId,
  });
}
```

### Accepting Transfers (Receiver)

If you want to accept or reject transfers based on custom conditions, you can register a listener for the `acceptTransfer` event. Within the listener, you can check the `request.transferId` and any other data provided to decide whether to accept or reject the transfer.

Here's an example of accepting transfers:

```typescript
import { P2pConnect } from '@enertrag/p2pconnect';

// Register callback for acceptTransfer event
P2pConnect.addListener('acceptTransfer', (request) => {
  const transferId = request.transferId;
  let result = false;

  if (transferId.startsWith('share.')) {
    // Custom check logic
    result = true;
  }

  // Accept or reject the transfer
  P2pConnect.acceptTransfer({
    transferId,
    accept: result,
  });
});
```

## Summary

In this tutorial, you learned how to use the @enertrag/p2pconnect package to enable file exchange between devices. You learned how to send files to other devices, retrieve files sent from other devices, and accept or reject transfers based on custom conditions. This package provides a convenient way to exchange files between devices without the need for an internet connection or being on the same network.