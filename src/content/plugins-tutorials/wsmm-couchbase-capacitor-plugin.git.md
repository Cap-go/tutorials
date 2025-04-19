```markdown
---
"title": "Using Wsmm Couchbase Capacitor Plugin",
"description": "This tutorial will guide you through the installation and usage of the wsmm-couchbase-capacitor-plugin package in your Capacitor project.",
"created_at": "October 19, 2021",
"published": true,
"slug": "wsmm-couchbase-capacitor-plugin.git"
---

# Using Wsmm Couchbase Capacitor Plugin

In this tutorial, we will walk through the steps of installing and utilizing the wsmm-couchbase-capacitor-plugin package in your Capacitor project.

## Installation

To get started with the wsmm-couchbase-capacitor-plugin, you need to follow these steps:

1. Install the package using npm:
   ```
   npm install wsmm-couchbase-capacitor-plugin
   ```

2. Once the installation is complete, add the plugin to your main `capacitor.config.json` file.

```ts
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jeep.app.ionic7.couchbase',
  appName: 'ionic7-couchbase-starter',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    WsmmCouchbase: {
      androidStorageType: 'WAL',
      androidFlushInterval: 60,
      iosFlushInterval: 3600
    }
  }
};
export default config;
```

## Usage

Now that you have installed the plugin, you can start using it in your project. Here is an example of how you can interact with the plugin in your code.

```typescript
import { Plugins } from '@capacitor/core';

const { WsmmCouchbase } = Plugins;

// Example of using the WsmmCouchbase plugin
WsmmCouchbase.openDatabase({
  databaseName: 'my_database',
  password: 'securepassword'
}).then(() => {
  console.log('Database opened successfully!');
}).catch((error) => {
  console.error('Error opening database:', error);
});
```

This is a basic example of how you can make use of the Wsmm Couchbase Capacitor Plugin in your project. Make sure to refer to the official documentation for more detailed usage instructions and advanced features.
```