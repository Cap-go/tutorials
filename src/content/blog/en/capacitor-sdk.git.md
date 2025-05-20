---
title: Using Capacitor Gleap Plugin Package
description: >-
  A tutorial on how to use the capacitor-gleap-plugin package for integrating
  Gleap into Ionic apps.
created_at: '2022-01-12'
published: true
slug: capacitor-sdk.git
locale: en
---

# Using Capacitor Gleap Plugin Package

The Capacitor Gleap Plugin allows you to easily integrate Gleap into your Ionic apps for efficient in-app bug reporting and customer feedback. Follow the steps below to get started with using the package.

## Installation

```bash
npm install capacitor-gleap-plugin
npx cap sync
```

### For Capacitor 5

If you are using Capacitor 5, install the plugin version from the capacitor-v5 branch:

```bash
npm install GleapSDK/Capacitor-SDK#capacitor-v5 --save
```

### For Capacitor 4 or Earlier

For Capacitor 4 or earlier versions, install the plugin version from the capacitor-v4 branch:

```bash
npm install GleapSDK/Capacitor-SDK#capacitor-v4 --save
```

## API

Below are the available API methods provided by the Capacitor Gleap Plugin package for your usage:

- **initialize**: Initialize the Gleap plugin.
- **identify**: Identify a user.
- **updateContact**: Update contact information.
- **clearIdentity**: Clear the identified user.
- **getIdentity**: Get the identity information.
- **isUserIdentified**: Check if a user is identified.
- **log**: Log messages.
- **showSurvey**: Show a survey.
- ... (and more)

Refer to the plugin documentation for detailed information on each API method and how to use them in your Ionic app.

```

```
