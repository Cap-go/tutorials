```markdown
---
title: "Using capacitor-read-native-setting package"
description: "A tutorial on how to use the capacitor-read-native-setting package for Capacitor apps."
created_at: "2022-01-01"
published: true
slug: capacitor-read-native-setting.git
---

# Using capacitor-read-native-setting Package

To utilize the `capacitor-read-native-setting` package in your Capacitor project, follow these steps:

1. Install the package via npm:
   ```bash
   npm install capacitor-read-native-setting
   ```

2. Import the package in your project:
   ```typescript
   import { CapacitorReadNativeSetting } from 'capacitor-read-native-setting';
   ```

3. Use the `CapacitorReadNativeSetting` methods to access native settings:
   ```typescript
   const value = await CapacitorReadNativeSetting.getValue('settingKey');
   console.log('Setting Value:', value);
   ```

4. Ensure your Capacitor version is compatible:
   - Use v0.0.8 with Capacitor 2
   - Use v0.0.10 with Capacitor 3
   - Use v5.0.0 with Capacitor 5

5. Follow the official Capacitor documentation for more information on integrating native functionality.

That's it! You can now access native settings in your Capacitor app using the `capacitor-read-native-setting` package.
```