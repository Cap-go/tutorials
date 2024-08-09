```markdown
---
"title": "Tutorial: Using the Capacitor Plugin ASAM Package"
"description": "Learn how to integrate Autonomous Single App Mode in your iOS app using the Capacitor Plugin ASAM package."
"created_at": "2022-01-31"
"published": true
slug: capacitor-plugin-asam
---

# Tutorial: Using the Capacitor Plugin ASAM Package

The Capacitor Plugin ASAM package allows you to easily integrate Autonomous Single App Mode in your iOS app. This feature is useful for creating focused, distraction-free user experiences in educational, testing, or kiosk applications.

## 📍 Install

To install the Capacitor Plugin ASAM package, run the following commands:

```bash
npm install capacitor-plugin-asam
npx cap sync
```

## ⚙️ Configuration

To enable Autonomous Single App Mode (ASAM) on iOS devices, administrators must utilize a Mobile Device Management (MDM) system or Apple Configurator. These tools are essential for setting up and managing ASAM, providing the ability to create and deploy specific configuration profiles to iOS devices.

## 🕹️ Usage

Here is how you can use the Capacitor Plugin ASAM package in your app:

```typescript
import { Asam } from "capacitor-plugin-asam";

// Enable ASAM using setASAM
let r = await Asam.setASAM({ enable: true });
if (!r.success) {
    console.error("Failed to enable ASAM");
}

let isEnabled = (await Asam.isASAMEnabled()).enabled;
console.log("ASAM is enabled: " + isEnabled);

// Enable ASAM using enableASAM
r = await Asam.enableASAM();
if (!r.success) {
    console.error("Failed to enable ASAM");
}

isEnabled = (await Asam.isASAMEnabled()).enabled;
console.log("ASAM is enabled: " + isEnabled);

// Disable ASAM using disableASAM
r = await Asam.disableASAM();
if (!r.success) {
    console.error("Failed to disable ASAM");
}

isEnabled = (await Asam.isASAMEnabled()).enabled;
console.log("ASAM is enabled: " + isEnabled);

// Disable ASAM using setASAM
r = await Asam.setASAM({ enable: false });
if (!r.success) {
    console.error("Failed to disable ASAM");
}
```

## 🧮 API

The Capacitor Plugin ASAM package provides the following functions:

- `setASAM()`
- `enableASAM()`
- `disableASAM()`
- `isASAMEnabled()`

```  
