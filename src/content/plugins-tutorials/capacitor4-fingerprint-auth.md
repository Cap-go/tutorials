---
title: "Using Capacitor4-Fingerprint-Auth Package"
description: "This tutorial will guide you on how to use the Capacitor4-Fingerprint-Auth package in your Capacitor app."
created_at: "2022-01-01"
published: true
slug: "capacitor4-fingerprint-auth"
---

# Using Capacitor4-Fingerprint-Auth Package

In this tutorial, we will learn how to use the Capacitor4-Fingerprint-Auth package to add fingerprint authentication functionality to your Capacitor app.

## Prerequisites

Before we get started, make sure you have the following installed:

- Capacitor (v4.x.x or higher)
- Capacitor4-Fingerprint-Auth package

## Installation

To install the Capacitor4-Fingerprint-Auth package, run the following command in your project's root directory:

```bash
npm install capacitor4-fingerprint-auth
```

## Configuration

Once the package is installed, you need to configure it for your project. Follow the steps below:

1. Open the `capacitor.config.json` file in your project's root directory.

2. Add the following code snippet inside the `plugins` section:

```json
"FingerprintAuth": {
  "disableBackup": true
}
```

The `disableBackup` option ensures that the fingerprint data is not backed up to the user's cloud account.

3. Save the changes and close the file.

## Adding Fingerprint Authentication

Now that the Capacitor4-Fingerprint-Auth package is installed and configured, let's add fingerprint authentication to our app.

1. Open the file where you want to add fingerprint authentication.

2. Import the `FingerprintAuth` class from the Capacitor4-Fingerprint-Auth package:

```typescript
import { FingerprintAuth } from 'capacitor4-fingerprint-auth';
```

3. Add the following code snippet to handle the fingerprint authentication process:

```typescript
const authResult = await FingerprintAuth.authenticate();
if (authResult.success) {
  // Authentication successful
  console.log('Fingerprint authentication successful!');
} else {
  // Authentication failed
  console.error('Fingerprint authentication failed:', authResult.error);
}
```

4. Run your app and test the fingerprint authentication feature.

## Conclusion

In this tutorial, we learned how to use the Capacitor4-Fingerprint-Auth package to integrate fingerprint authentication into a Capacitor app. By following the installation, configuration, and implementation steps, you can easily add this security feature to your app.

Remember to check the official Capacitor4-Fingerprint-Auth documentation for more advanced options and customization possibilities.

That's it! Enjoy building secure and user-friendly apps with fingerprint authentication using Capacitor4-Fingerprint-Auth package.