```markdown
---
"title": "How to Use MetaMap Capacitor Plugin Package"
"description": "A step-by-step tutorial on utilizing the MetaMap Capacitor Plugin package in your Ionic applications."
"created_at": "2023-03-07"
"published": true
"slug": "mati-capacitor-plugin.git"
---

# MetaMap Capacitor Plugin Tutorial

To use the MetaMap Capacitor Plugin package in your Ionic application, follow these steps:

1. Install the MetaMap Capacitor Plugin package by running the command:
   ```
   npm install metamap-capacitor-plugin
   ```

2. Import the MetaMap Capacitor Plugin in your Ionic project's main file:
   ```typescript
   import 'metamap-capacitor-plugin';
   ```

3. Initialize the plugin in your project by calling the following method:
   ```typescript
   import { Plugins } from '@capacitor/core';
   const { MetaMap } = Plugins;

   MetaMap.initialize();
   ```

4. Now you can use the MetaMap Capacitor Plugin's functionality in your application.

For more details and advanced usage, refer to the [MetaMap Capacitor Plugin Usage Guide](https://github.com/matiasfic/metamap-capacitor-plugin/blob/main/docs/metaMap-capacitor.md).

Don't forget to check out the [MetaMap Capacitor Plugin Changelog](https://github.com/matiasfic/metamap-capacitor-plugin/blob/main/docs/metamap-capacitor-changelog.md) for any updates or new features.
```