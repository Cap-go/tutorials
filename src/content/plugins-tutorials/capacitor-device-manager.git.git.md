```markdown
---
"title": "Using @rolster/capacitor-device-manager Package"
"description": "A tutorial on how to use the @rolster/capacitor-device-manager package in Capacitor apps."
"created_at": "November 26, 2021"
"published": true
"slug": "capacitor-device-manager.git.git"
---

# Using @rolster/capacitor-device-manager Package

To get started with the @rolster/capacitor-device-manager package, follow these steps:

1. Install the package using npm or yarn:
```bash
npm install @rolster/capacitor-device-manager
```

2. Import the package in your code:
```javascript
import { DeviceManager } from '@rolster/capacitor-device-manager';
```

3. Start using the DeviceManager methods in your application. Here's an example of getting the device model:
```javascript
const model = await DeviceManager.getModel();
console.log('Device Model:', model);
```

4. Explore the other available methods provided by DeviceManager to manage device information in your app.

That's it! You are now ready to use the @rolster/capacitor-device-manager package in your Capacitor project.
```
```