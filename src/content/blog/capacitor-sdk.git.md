```md
---
"title": "Using capacitor-gleap-plugin Package Tutorial"
"description": "Step-by-step guide on how to use the capacitor-gleap-plugin package in your Ionic apps."
"created_at": "2022-01-10"
"published": true
"slug": "capacitor-sdk.git"
---

# Using capacitor-gleap-plugin Package Tutorial

The capacitor-gleap-plugin package provides an easy way to integrate Gleap into your Ionic apps for in-app bug reporting and customer feedback. Follow the steps below to get started:

## Installation

```bash
npm install capacitor-gleap-plugin
npx cap sync
```

### For Capacitor 5

If you are using Capacitor 5, install the plugin version from our capacitor-v5 branch:
```bash
npm install GleapSDK/Capacitor-SDK#capacitor-v5 --save
```

### For Capacitor 4 or Earlier

For Capacitor 4 or earlier, install the plugin version from our capacitor-v4 branch:
```bash
npm install GleapSDK/Capacitor-SDK#capacitor-v4 --save
```

## API Reference

Below are some of the available methods and functionalities provided by the capacitor-gleap-plugin package:

- `initialize(...)`: Initialize the Gleap plugin.
- `identify(...)`: Identify the user.
- `updateContact(...)`: Update contact information.
- `clearIdentity()`: Clear the user identity.
- `getIdentity()`: Get user identity.
- `log(...)`: Log events.
- `showSurvey(...)`: Show a feedback survey.
- And many more...

Make sure to refer to the plugin documentation for a full list of available APIs and how to use them in your app.

Happy coding with capacitor-gleap-plugin!
```
```