---
"title": "Using @jcesarmobile/ssl-skip Plugin in Capacitor",
"description": "A tutorial on utilizing the @jcesarmobile/ssl-skip Capacitor plugin to bypass SSL checks during development.",
"created_at": "2022-01-29",
"published": true,
"slug": "ssl-skip.git"
---

# Using @jcesarmobile/ssl-skip Plugin in Capacitor

When trying to serve a Capacitor app from a local web server with self-signed certificates, the app might fail to load due to the OS considering these certificates insecure. The `@jcesarmobile/ssl-skip` plugin helps skip these SSL checks during development.

## Installation

To install the plugin, run the following commands:

```bash
npm install @jcesarmobile/ssl-skip
npx cap sync
```

**Warning**: Remember to uninstall the plugin and resync before publishing your app to avoid rejections on app stores.

```bash
npm uninstall @jcesarmobile/ssl-skip
npx cap sync
```