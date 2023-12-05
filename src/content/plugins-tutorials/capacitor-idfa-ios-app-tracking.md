---
title: "Using capacitor-idfa-ios-app-tracking Package"
description: "A tutorial on how to use the capacitor-idfa-ios-app-tracking package to implement native AppTrackingTransparency in iOS 14 using Ionic Capacitor."
created_at: "2021-09-20"
published: true
slug: capacitor-idfa-ios-app-tracking
---

# Using capacitor-idfa-ios-app-tracking Package

The capacitor-idfa-ios-app-tracking package is a native implementation of the AppTrackingTransparency framework for iOS 14. This package can be used in conjunction with Ionic Capacitor to enable and manage the user's app tracking preferences on iOS devices.

In this tutorial, we will go through the installation process, usage, and code examples for the capacitor-idfa-ios-app-tracking package.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and NPM (Node Package Manager)
- Ionic Capacitor CLI
- Xcode (for iOS development)

## Installation

To install the capacitor-idfa-ios-app-tracking package, open your terminal and navigate to your Ionic project's root directory. Then run the following command:

```shell
npm install --save capacitor-idfa-ios-app-tracking
ionic cap update
```

This command will install the package and update your Capacitor project configuration.

## iOS Configuration

### Info.plist Update

To use the AppTrackingTransparency framework, you need to add a key-value pair to your Info.plist file. Open the `App/App/Info.plist` file in your project and add the following lines:

```xml
<key>NSUserTrackingUsageDescription</key>
<string>Message to Users. Replace this with your customized message.</string>
```

Replace the message with a personalized description explaining why the app requires tracking permissions. This message will be displayed to the user when they are prompted to allow or deny tracking.

## Usage

To use the capacitor-idfa-ios-app-tracking package in your Ionic project, follow these steps:

### Import the Plugin

Open the file where you want to use the plugin in your project and add the following import statement at the top:

```typescript
import { Plugins } from "@capacitor/core";
import { Response } from 'capacitor-idfa-ios-app-tracking';

const { IOSAppTracking } = Plugins;
```

### Get Tracking Status

To check the user's tracking status, you can use the `getTrackingStatus` method provided by the capacitor-idfa-ios-app-tracking package. This method returns a promise with a `Response` object containing the status and value.

```typescript
const getTrackingStatus = async () => {
  const response: Response = await IOSAppTracking.getTrackingStatus();
  console.log(response);
};
```

The `Response` object has the following structure:

```typescript
interface Response {
  value: string;
  status: Status;
}
```

The `value` property contains the tracking status value, and the `status` property represents the status as a string. The `status` can be one of the following values: 'authorized', 'denied', 'unrequested', 'restricted'.

### Request Permission

To request the user's permission for app tracking, use the `requestPermission` method. This method also returns a promise with a `Response` object.

```typescript
const requestTrackingPermission = async () => {
  const response: Response = await IOSAppTracking.requestPermission();
  console.log(response);
};
```

### Example

Here is an example of how you can use the capacitor-idfa-ios-app-tracking package in your Ionic project.

```typescript
import React, { useEffect } from "react";
import { Plugins } from "@capacitor/core";
import { Response } from 'capacitor-idfa-ios-app-tracking';

const { IOSAppTracking } = Plugins;

const App: React.FC = () => {
  const [response, setResponse] = useState<Response>();

  useEffect(() => {
    IOSAppTracking.getTrackingStatus().then((res: Response) => setResponse(res));
  }, []);

  const requestPermission = async () => {
    if (response.status === "unrequested") {
      const res: Response = await IOSAppTracking.requestPermission();
      console.log(res);
    }
  };

  return (
    <div>
      <button onClick={requestPermission}>Request Tracking Permission</button>
    </div>
  );
};
```

In this example, we check the current tracking status when the component mounts and display a button that requests permission only if the status is 'unrequested'.

## Conclusion

In this tutorial, we learned how to use the capacitor-idfa-ios-app-tracking package to implement native AppTrackingTransparency in an Ionic Capacitor project. We covered the installation process, iOS configuration, and provided code examples for checking the tracking status and requesting permission from the user.

By using the capacitor-idfa-ios-app-tracking package, you can ensure that your app complies with the AppTrackingTransparency requirements introduced in iOS 14 and manage the user's app tracking preferences effectively.