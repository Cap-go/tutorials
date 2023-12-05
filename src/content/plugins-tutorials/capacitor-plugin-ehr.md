---
title: "Using the capacitor-plugin-ehr Package"
description: "A tutorial on how to use the capacitor-plugin-ehr package for electronic health record integration."
created_at: "2022-10-03"
published: true
slug: "capacitor-plugin-ehr"
---

# Using the capacitor-plugin-ehr Package

In this tutorial, we will learn how to use the capacitor-plugin-ehr package to integrate electronic health record functionality into your Capacitor app. The capacitor-plugin-ehr package provides a convenient way to interact with EHR systems and retrieve patient information, medical records, and more.

Let's get started!

## Installation

To begin, make sure you have Capacitor installed globally. If not, you can install it by running the following command:

```bash
npm install -g @capacitor/cli
```

Once Capacitor is installed, you can install the capacitor-plugin-ehr package into your project by running the following command:

```bash
npm install capacitor-plugin-ehr
```

## Configuration

Before using the capacitor-plugin-ehr package, you need to configure it with the necessary credentials and settings. Follow these steps:

1. Open the `capacitor.config.json` file in your project.
2. Add the `ehr` property under the `plugins` section:

```json
"plugins": {
  "ehr": {
    "property1": "value1",
    "property2": "value2"
  }
}
```

Replace `"property1"` and `"property2"` with the specific configuration properties required by your EHR system. Refer to the documentation of your EHR system or the capacitor-plugin-ehr package for the available configuration options.

## Usage

Once the capacitor-plugin-ehr package is installed and configured, you can start using its functionality in your app. Here are some examples of common use cases:

### Retrieving Patient Information

To retrieve patient information from the EHR system, use the `getPatientInfo` method. This method accepts a patient ID or other identifier as a parameter and returns the patient's information.

```typescript
import { Plugins } from '@capacitor/core';

const { EhrPlugin } = Plugins;

const patientId = "123456";

EhrPlugin.getPatientInfo({ patientId })
  .then((result) => {
    // Handle the retrieved patient information
    const patient = result.patient;
    console.log(patient);
  })
  .catch((error) => {
    // Handle any errors
    console.error(error);
  });
```

### Creating a New Medical Record

To create a new medical record in the EHR system, use the `createMedicalRecord` method. This method accepts the necessary data for the medical record as parameters and returns the created record.

```typescript
import { Plugins } from '@capacitor/core';

const { EhrPlugin } = Plugins;

const recordData = {
  patientId: "123456",
  doctorId: "7890",
  description: "Medical record description",
  // Add additional data properties as needed
};

EhrPlugin.createMedicalRecord(recordData)
  .then((result) => {
    // Handle the created medical record
    const record = result.record;
    console.log(record);
  })
  .catch((error) => {
    // Handle any errors
    console.error(error);
  });
```

### Updating an Existing Medical Record

To update an existing medical record in the EHR system, use the `updateMedicalRecord` method. This method accepts the updated data for the record as parameters and returns the updated record.

```typescript
import { Plugins } from '@capacitor/core';

const { EhrPlugin } = Plugins;

const updatedRecordData = {
  recordId: "987654",
  description: "Updated medical record description",
  // Add additional updated data properties as needed
};

EhrPlugin.updateMedicalRecord(updatedRecordData)
  .then((result) => {
    // Handle the updated medical record
    const record = result.record;
    console.log(record);
  })
  .catch((error) => {
    // Handle any errors
    console.error(error);
  });
```

These are just a few examples of how you can use the capacitor-plugin-ehr package in your Capacitor app. Refer to the documentation and API reference of the package for more information on available methods and options.

## Conclusion

In this tutorial, we have learned how to use the capacitor-plugin-ehr package to integrate electronic health record functionality into your Capacitor app. We covered the installation process, configuration steps, and demonstrated how to use the package for common EHR-related tasks such as retrieving patient information and managing medical records.

Start exploring the capabilities of the capacitor-plugin-ehr package and enhance your app with powerful EHR integration features!

Remember to consult the official documentation of the capacitor-plugin-ehr package for in-depth explanations and usage guidelines.