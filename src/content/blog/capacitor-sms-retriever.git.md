---
"title": "Using @aalzehla/capacitor-sms-retriever Package",
"description": "Learn how to use the @aalzehla/capacitor-sms-retriever package to retrieve SMS in your Capacitor applications without needing any permission. The package supports both Android and iOS.",
"created_at": "2021-11-06",
"published": true,
"slug": "capacitor-sms-retriever.git"
---

# Using @aalzehla/capacitor-sms-retriever Package

The @aalzehla/capacitor-sms-retriever package is a useful tool for retrieving SMS in Capacitor applications without requiring any permissions. This tutorial will guide you through the process of using this package for both Android and iOS platforms.

## Installation

To get started, you need to install the package using npm:

```bash
npm install @aalzehla/capacitor-sms-retriever
```

## Usage

### For Android

You can start listening for SMS messages on Android using the following code snippet:

```javascript
import { CapacitorSmsRetriever } from "@aalzehla/capacitor-sms-retriever";

CapacitorSmsRetriever.startListening()
  .then((res) => {
    console.log("SMS Content", res.body);
  })
  .catch((err) => {
    console.log("Failed", err);
  });
```

### For iOS

For iOS, you can retrieve the OTP from the SMS using the `present` method:

```javascript
import { CapacitorSmsRetriever } from "@aalzehla/capacitor-sms-retriever";

CapacitorSmsRetriever.present()
  .then((code) => {
    console.log("OTP", code);
  })
  .catch((err) => {
    console.log("Failed", err);
  });
```

By following these simple steps, you can easily integrate SMS retrieval functionality into your Capacitor apps using the @aalzehla/capacitor-sms-retriever package.