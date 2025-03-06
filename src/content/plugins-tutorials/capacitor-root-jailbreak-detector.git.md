## Tutorial: Using the capacitor-root-jailbreak-detector Package

### Introduction
This tutorial will guide you on how to use the capacitor-root-jailbreak-detector package to detect root or jailbreak on your Capacitor project.

### Steps

1. Install the capacitor-root-jailbreak-detector package:
```bash
npm install capacitor-root-jailbreak-detector
```

2. Import the detector in your code:
```javascript
import { rootJailbreakDetector } from 'capacitor-root-jailbreak-detector';
```

3. Use the detector to check for root/jailbreak:
```javascript
const isRooted = await rootJailbreakDetector.isRooted();
if (isRooted) {
  console.log('Device is rooted/jailbroken');
} else {
  console.log('Device is not rooted/jailbroken');
}
```

### Conclusion
By following these steps, you can easily integrate root/jailbreak detection in your Capacitor project using the capacitor-root-jailbreak-detector package.

---

frontmatter:
"title": "Using the capacitor-root-jailbreak-detector Package",
"description": "Guide on integrating root/jailbreak detection in Capacitor using capacitor-root-jailbreak-detector package",
"created_at": "2023-10-26",
"published": true,
"slug": "capacitor-root-jailbreak-detector.git"