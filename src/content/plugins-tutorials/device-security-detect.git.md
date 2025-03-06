```markdown
---
"title": "Using the @capacitor-community/device-security-detect Package",
"description": "In this tutorial, we will explore how to integrate and use the @capacitor-community/device-security-detect package in your Capacitor project.",
"created_at": "2022-05-02",
"published": true,
"slug": "device-security-detect.git"
---

# Using the @capacitor-community/device-security-detect Package

To get started with the @capacitor-community/device-security-detect package, follow these steps:

## 1. 📦 Installation

First, install the package using npm:

```bash
npm install @capacitor-community/device-security-detect
npx cap sync
```

## 2. ⚙️ Configuration

There is no additional configuration needed for this package.

## 3. 🚀 Implementation

You can now use the package in your project:

```javascript
import { DeviceSecurityDetect } from '@capacitor-community/device-security-detect';

// Example of checking if device has a secure screen lock
const checkSecureLock = async () => {
  const { hasSecureLock } = await DeviceSecurityDetect.isSecure();
  console.log('Device has secure lock:', hasSecureLock);
};

// Call the function
checkSecureLock();
```

## 4. ✨ That's It!

You have successfully integrated and used the @capacitor-community/device-security-detect package in your Capacitor project. Happy coding!
```
```