```markdown
---
"title": "Tutorial on using app-tracking-transparency-capacitor-ionic package"
"description": "This tutorial covers the integration and usage of the app-tracking-transparency-capacitor-ionic package in an Ionic app."
"created_at": "2022-02-18"
"published": true
"slug": "app-tracking-transparency-capacitor-ionic.git"
---

# Tutorial: Using app-tracking-transparency-capacitor-ionic Package

In this tutorial, we will learn how to integrate and utilize the app-tracking-transparency-capacitor-ionic package within an Ionic application.

## Installation

First, install the app-tracking-transparency-capacitor-ionic package using npm:

```bash
npm install app-tracking-transparency-capacitor-ionic
```

## Usage

Next, you can integrate the package into your Ionic project and start using its features.

### Step 1: Import the Necessary Module

Import the module into your project:

```typescript
import { AppTrackingTransparency } from 'app-tracking-transparency-capacitor-ionic';
```

### Step 2: Request Tracking Authorization

Request user permission for tracking:

```typescript
AppTrackingTransparency.requestTrackingAuthorization().then(result => {
  console.log("Authorization request result: ", result);
});
```

### Step 3: Check Tracking Authorization Status

Check the current authorization status:

```typescript
AppTrackingTransparency.getTrackingAuthorizationStatus().then(status => {
  console.log("Tracking authorization status: ", status);
});
```

By following these steps, you can successfully integrate the app-tracking-transparency-capacitor-ionic package into your Ionic app and utilize its capabilities for managing tracking authorization.

Happy coding!
```
```