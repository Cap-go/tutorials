```markdown
---
"title": "How to Use the SMS-Retriever Package with Capacitor",
"description": "Learn how to integrate and use the sms-retriever package in your Capacitor app to retrieve SMS messages without the need for permissions. This tutorial will guide you through the process step by step.",
"created_at": "2022-02-24",
"published": true,
"slug": "sms-retriever-capacitor"
---

# Using the SMS-Retriever Package with Capacitor

In this tutorial, we will explore how to use the `sms-retriever` package in your Capacitor app to retrieve SMS messages efficiently and securely without the need for explicit permissions.

## Prerequisites

Before we begin, make sure you have your Capacitor project set up and ready to go. If you haven't installed the `sms-retriever` package yet, you can do so by running the following command:

```bash
npm install @skmd87/capacitor-sms-retriever
```

## Getting Started

To start listening for incoming SMS messages and retrieve their content, you can use the following code snippet:

```typescript
import { CapacitorSmsRetriever } from "@skmd87/capacitor-sms-retriever";

async function retrieveSMS() {
  try {
    const smsResult = await CapacitorSmsRetriever.startListening();
    console.log('SMS Content:', smsResult.body);
  } catch (error) {
    console.error('Failed to retrieve SMS:', error);
  }
}

retrieveSMS();
```

By following these simple steps, you can easily integrate the `sms-retriever` package into your Capacitor app and begin efficiently retrieving SMS messages.

Feel free to customize the implementation further based on your app's specific requirements and take advantage of this convenient functionality.
```
```