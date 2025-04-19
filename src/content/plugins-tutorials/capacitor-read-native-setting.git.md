```markdown
---
title: "Using capacitor-read-native-setting package"
description: "Learn how to utilize the capacitor-read-native-setting package in your Capacitor project."
created_at: "2022-02-02"
published: true
slug: capacitor-read-native-setting.git
---

# Using capacitor-read-native-setting package

To get started with the `capacitor-read-native-setting` package in your Capacitor project, follow these steps:

1. Install the package by running:
   ```bash
   npm install capacitor-read-native-setting
   ```

2. Import the package where you want to use it in your project:
   ```javascript
   import { CapacitorReadNativeSetting } from 'capacitor-read-native-setting';
   ```

3. Now you can use the functionalities provided by the package. For example, to read a native setting, you can use:
   ```javascript
   CapacitorReadNativeSetting.readSetting('settingName').then((setting) => {
       console.log('Setting Value:', setting);
   }).catch((error) => {
       console.error('Error reading setting:', error);
   });
   ```

4. Remember to handle any errors that may occur during the reading of native settings.

That's it! You are now ready to use the `capacitor-read-native-setting` package in your Capacitor project.
```
```