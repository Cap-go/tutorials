---
title: "Using capacitor-cloudkit package"
description: "A tutorial on how to use the capacitor-cloudkit package to integrate CloudKit with your Capacitor app."
created_at: "2021-10-10"
published: true
slug: "capacitor-cloudkit"
---

# Using capacitor-cloudkit package

In this tutorial, we will explore how to use the capacitor-cloudkit package to integrate CloudKit with your Capacitor app. CloudKit is Apple's cloud backend service that provides scalable storage and efficient data syncing capabilities for iOS, macOS, watchOS, and tvOS apps.

## Installation

First, let's install the capacitor-cloudkit package into your Capacitor project.

```bash
npm install capacitor-cloudkit
npx cap sync
```

## Configuration

To use CloudKit with your Capacitor app, you need to set up the CloudKit container and configure the required settings. Follow these steps to configure CloudKit in your iOS app:

### iOS

1. Open your `App/App/AppDelegate.swift` file.

2. Import the `CloudKit` module:

   ```swift
   import CloudKit
   ```

3. In the `application(_:didFinishLaunchingWithOptions:)` method, initialize CloudKit with your container identifier:

   ```swift
   func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
       // Other code...
       
       let containerIdentifier = "YOUR_CONTAINER_IDENTIFIER"
       CloudKit.configure(containerIdentifier: containerIdentifier)
       
       return true
   }
   ```

   Replace `YOUR_CONTAINER_IDENTIFIER` with your CloudKit container identifier.

4. Save your changes.

### Android

CloudKit is only available for iOS, so there is no specific configuration needed for Android.

## Using CloudKit

Now that you have installed and configured the capacitor-cloudkit package, you can start using CloudKit in your Capacitor app.

### Example: Fetching Records

Here's an example of how to fetch records from a CloudKit database using the capacitor-cloudkit package:

```typescript
import { Plugins } from "@capacitor/core";
const { CloudKit } = Plugins;

async function fetchRecords() {
  try {
    const response = await CloudKit.fetchRecords({
      recordType: "YOUR_RECORD_TYPE",
    });
    
    if (response.success) {
      const records = response.records;
      // Process the fetched records
    } else {
      console.error('Failed to fetch records: ', response.error);
    }
  } catch (error) {
    console.error('Failed to fetch records: ', error);
  }
}
```

Replace `YOUR_RECORD_TYPE` with your CloudKit record type.

### Example: Creating a Record

To create a new record in CloudKit, use the `createRecord` method:

```typescript
import { Plugins } from "@capacitor/core";
const { CloudKit } = Plugins;

async function createRecord() {
  try {
    const response = await CloudKit.createRecord({
      recordName: "YOUR_RECORD_NAME",
      recordType: "YOUR_RECORD_TYPE",
      fields: {
        // Define your record fields here
        field1: "Value 1",
        field2: "Value 2",
      },
    });
    
    if (response.success) {
      const recordId = response.recordId;
      // Process the created record
    } else {
      console.error('Failed to create record: ', response.error);
    }
  } catch (error) {
    console.error('Failed to create record: ', error);
  }
}
```

Replace `YOUR_RECORD_NAME` and `YOUR_RECORD_TYPE` with the appropriate values.

### Example: Modifying a Record

To modify an existing record in CloudKit, use the `modifyRecord` method:

```typescript
import { Plugins } from "@capacitor/core";
const { CloudKit } = Plugins;

async function modifyRecord() {
  try {
    const response = await CloudKit.modifyRecord({
      recordName: "YOUR_RECORD_NAME",
      recordType: "YOUR_RECORD_TYPE",
      fields: {
        // Define the updated record fields here
        field1: "New Value 1",
        field2: "New Value 2",
      },
    });
    
    if (response.success) {
      // Record modified successfully
    } else {
      console.error('Failed to modify record: ', response.error);
    }
  } catch (error) {
    console.error('Failed to modify record: ', error);
  }
}
```

Replace `YOUR_RECORD_NAME` and `YOUR_RECORD_TYPE` with the appropriate values.

### Example: Deleting a Record

To delete a record from CloudKit, use the `deleteRecord` method:

```typescript
import { Plugins } from "@capacitor/core";
const { CloudKit } = Plugins;

async function deleteRecord() {
  try {
    const response = await CloudKit.deleteRecord({
      recordName: "YOUR_RECORD_NAME",
      recordType: "YOUR_RECORD_TYPE",
    });
    
    if (response.success) {
      // Record deleted successfully
    } else {
      console.error('Failed to delete record: ', response.error);
    }
  } catch (error) {
    console.error('Failed to delete record: ', error);
  }
}
```

Replace `YOUR_RECORD_NAME` and `YOUR_RECORD_TYPE` with the appropriate values.

## Conclusion

In this tutorial, you have learned how to integrate CloudKit with your Capacitor app using the capacitor-cloudkit package. You can now fetch, create, modify, and delete records from your CloudKit database. Explore the capacitor-cloudkit documentation for more advanced usage and features.

Happy coding!