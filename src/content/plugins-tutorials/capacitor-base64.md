---
title: "Using capacitor-base64 Package"
description: "A tutorial on how to use the capacitor-base64 package in your Capacitor app."
created_at: "2021-11-08"
published: true
slug: "capacitor-base64"
---

# Using capacitor-base64 Package

In this tutorial, we will learn how to use the capacitor-base64 package in a Capacitor app. The capacitor-base64 package provides utility functions to encode and decode data as Base64 in a Capacitor project.

## Installation

To begin, make sure you have a Capacitor project set up. If you don't, you can create one by following the Capacitor documentation.

1. Open your terminal or command prompt.
2. Navigate to your Capacitor project directory.
3. Run the following command to install the capacitor-base64 package:

```bash
npm install capacitor-base64
```

## Importing the Package

Once the package is installed, you need to import it into your project. Here's how you can do it:

1. Open the file where you want to use the capacitor-base64 package.
2. Add the following import statement at the top of the file:

```typescript
import { CapacitorBase64 } from 'capacitor-base64';
```

## Encoding Data as Base64

To encode a data string as Base64, you can use the `encode` method provided by the capacitor-base64 package. Here's an example:

```typescript
const data = 'Hello, World!';
const encodedData = await CapacitorBase64.encode(data);
console.log(encodedData);
```

In the example above, the `encode` method takes a data string as input and returns the corresponding Base64 encoded string. You can store the encoded data in a variable or perform any further operations as needed.

## Decoding Base64 Data

Similarly, you can use the `decode` method provided by the capacitor-base64 package to decode a Base64 encoded string. Here's an example:

```typescript
const encodedData = 'SGVsbG8sIFdvcmxkIQ==';
const decodedData = await CapacitorBase64.decode(encodedData);
console.log(decodedData);
```

In the example above, the `decode` method takes a Base64 encoded string as input and returns the corresponding decoded data string. You can store the decoded data in a variable or use it as required.

## Conclusion

In this tutorial, we have learned how to use the capacitor-base64 package in a Capacitor app. We explored how to encode data as Base64 using the `encode` method and decode Base64 data using the `decode` method. Incorporating Base64 encoding and decoding capabilities can be useful in scenarios such as working with media files in a Capacitor app.

Remember to refer to the capacitor-base64 documentation for more information on additional methods and usage options.

Happy coding!