---
title: "Using the TIKI SDK for Capacitor"
description: "A tutorial on how to use the TIKI SDK for Capacitor to create monetizable zero-party data assets."
created_at: "2022-10-04"
published: true
slug: "publish-sdk-capacitor"
---

# Using the TIKI SDK for Capacitor

In this tutorial, we will learn how to use the TIKI SDK for Capacitor to create monetizable zero-party data assets. The TIKI SDK allows you to create a digitally signed, immutable audit trail with Title, License, Payable, and Receipt records. Additionally, it enables you to build Data Reward programs that profit you and your users.

## Installation

To get started, we need to install the `@mytiki/tiki-sdk-capacitor` package. Open your terminal and run the following command:

```bash
npm install @mytiki/tiki-sdk-capacitor
npx cap sync
```

This will install the required dependencies and synchronize the plugin with your Capacitor project.

## Initialization

Before we can start using the TIKI SDK, we need to initialize it with our user ID and publishing ID. Please note that you will need a Publishing ID, which you can obtain by logging in to the TIKI Developer Console and creating a new project.

In your code, import the `instance` object from the `@mytiki/tiki-sdk-capacitor` package. Then, call the `initialize` method with your user ID and publishing ID. Here's an example:

```typescript
import { instance } from '@mytiki/tiki-sdk-capacitor'

instance.initialize('<YOUR USER ID>', '<YOUR PUBLISHING ID>')
        .then((rsp) => console.log(`${rsp.address} initialized`))
```

Make sure to replace `<YOUR USER ID>` and `<YOUR PUBLISHING ID>` with your actual IDs.

## Usage

Once the SDK is initialized, you can start using its features to create and manage your data assets. Please refer to the [TIKI SDK API reference](http://tiki-sdk-capacitor.mytiki.com) for detailed instructions on how to use each method and class provided by the SDK.

## Conclusion

In this tutorial, we have learned how to use the TIKI SDK for Capacitor to create monetizable zero-party data assets. We covered the installation process, initialization with user and publishing IDs, and a brief overview of the SDK's features.

Feel free to explore the [TIKI SDK API reference](http://tiki-sdk-capacitor.mytiki.com) for more detailed information on each feature and class provided by the SDK. Happy coding!