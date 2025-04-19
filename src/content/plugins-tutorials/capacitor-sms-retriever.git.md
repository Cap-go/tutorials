---
"title": "How to Use @aalzehla/capacitor-sms-retriever Package"
"description": "This tutorial will guide you through the process of using the @aalzehla/capacitor-sms-retriever package to retrieve SMS without the need for any permission. It includes setup instructions and code snippets for both Android and iOS."
"created_at": "2022-02-20"
"published": true
"slug": "capacitor-sms-retriever.git"
---

To get started with the @aalzehla/capacitor-sms-retriever package, follow these steps:
1. Install the package by running `npm install @aalzehla/capacitor-sms-retriever`.
2. Import the package in your code using `import { CapacitorSmsRetriever } from "@aalzehla/capacitor-sms-retriever";`.
3. For Android SMS retrieval, use the following code snippet:
```javascript
CapacitorSmsRetriever.startListening().then((res) => {
    console.log("SMS Content", res.body);
}).catch((err) => {
    console.log("Failed", err);
});
```
4. For iOS SMS retrieval, you can present the SMS directly. Here's the code snippet:
```javascript
CapacitorSmsRetriever.present().then((code) => {
    console.log("OTP", code);
}).catch((err) => {
    console.log("Failed", err);
});
```

By following these steps, you will be able to integrate the @aalzehla/capacitor-sms-retriever package into your Capacitor project and retrieve SMS without having to request any permission.