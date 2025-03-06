---
"title": "Using Capacitor Gleap Plugin Package",
"description": "This markdown tutorial will guide you through the steps of using the capacitor-gleap-plugin package in your Ionic apps for in-app bug reporting and customer feedback.",
"created_at": "2022-01-25",
"published": true,
"slug": "capacitor-sdk.git"
---

# Using Capacitor Gleap Plugin Package

To integrate the Gleap SDK into your Ionic apps, follow the steps outlined below:

## Install

```bash
npm install capacitor-gleap-plugin
npx cap sync
```

### Capacitor 5

If you are using Capacitor 5, install the plugin version from the capacitor-v5 branch:

```bash
npm install GleapSDK/Capacitor-SDK#capacitor-v5 --save
```

### Capacitor 4 or Earlier

For Capacitor 4 or earlier, use the plugin version from the capacitor-v4 branch:

```bash
npm install GleapSDK/Capacitor-SDK#capacitor-v4 --save
```

## API

The capacitor-gleap-plugin package provides various functions for integrating Gleap features into your app. Here are some of the key API functions available:

- `initialize(...)`: Initialize the Gleap SDK.
- `identify(...)`: Identify a user.
- `updateContact(...)`: Update contact information.
- `clearIdentity()`: Clear the user's identity.
- `getIdentity()`: Get the current user's identity.
- `log(...)`: Log a message.
- `showSurvey(...)`: Display a survey to the user.
- and more...

Refer to the official [Capacitor Gleap Plugin Documentation](https://capacitorjs.com/docs/plugins/gleap) for a comprehensive list of API functions, usage instructions, and examples.