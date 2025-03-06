```markdown
---
"title": "Using @capacitor-community/security-provider Package Tutorial",
"description": "Learn how to use the @capacitor-community/security-provider package in your Capacitor project.",
"created_at": "2022-01-19",
"published": true,
"slug": "security-provider.git"
---

# Using @capacitor-community/security-provider Package Tutorial

In this blog post, we will guide you through the steps to use the @capacitor-community/security-provider package in your Capacitor project.

## Installation

To get started with the security provider package, you can install it using npm:

```bash
npm install @capacitor-community/security-provider
```

## Usage

After installing the package, you can import and start using it in your project. Here's a basic example of how you can import the security provider:

```javascript
import { SecurityProvider } from '@capacitor-community/security-provider';

// Initialize the security provider
const security = new SecurityProvider();

// Use the security provider functions
security.encrypt('Hello, World!').then((encryptedText) => {
  console.log('Encrypted Text:', encryptedText);
});

security.decrypt(encryptedText).then((decryptedText) => {
  console.log('Decrypted Text:', decryptedText);
});
```

## Conclusion

By following the steps outlined in this tutorial, you should now be able to integrate the @capacitor-community/security-provider package into your Capacitor project successfully.
```
```