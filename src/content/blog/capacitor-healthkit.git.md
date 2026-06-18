```markdown
---
"title": "Using @perfood/capacitor-healthkit Package Tutorial"
"description": "A tutorial on integrating the @perfood/capacitor-healthkit package into your Capacitor app."
"created_at": "2022-01-01"
"published": true
"slug": "capacitor-healthkit.git"
---

# Using @perfood/capacitor-healthkit Package Tutorial

In this tutorial, we will guide you through the process of integrating the `@perfood/capacitor-healthkit` package into your Capacitor app.

## Step 1: Installation

To get started, install the `@perfood/capacitor-healthkit` package by running the following command:

```bash
npm install @perfood/capacitor-healthkit
```

## Step 2: Importing and Initializing

Next, import the `HealthKit` plugin in your project and initialize it. Make sure you have the necessary permissions set up in your iOS project.

```typescript
import { HealthKit } from '@perfood/health-kit';

const healthKit = new HealthKit();
healthKit.initialize();
```

## Step 3: Reading Health Data

You can now read health data using various methods provided by the `HealthKit` plugin. For example, to read the user's heart rate, you can use the following code snippet:

```typescript
const heartRateData = await healthKit.querySampleType({
  sampleType: 'heartRate',
  startDate: new Date('2022-01-01'),
  endDate: new Date(),
});
console.log(heartRateData);
```

## Step 4: Writing Health Data

Similarly, you can also write health data using the plugin. For instance, to write a heart rate sample, you can use the following code:

```typescript
await healthKit.saveSampleType({
  sampleType: 'heartRate',
  value: 75,
  unit: 'bpm',
  startDate: new Date('2022-01-01T12:00:00'),
  endDate: new Date('2022-01-01T12:01:00'),
});
```

By following these steps, you can successfully integrate the `@perfood/capacitor-healthkit` package into your Capacitor app and start leveraging health data in your application.
```