---
"title": "Using @capacitor-community/date-picker Package Tutorial",
"description": "A step-by-step guide on how to use the @capacitor-community/date-picker package for Capacitor apps.",
"created_at": "2023-10-17",
"published": true,
"slug": "date-picker.git"
---

# Using @capacitor-community/date-picker Package Tutorial

In this tutorial, we will walk through the process of integrating and using the `@capacitor-community/date-picker` package in your Capacitor application for implementing a native Date Picker. 

### Step 1: Installation

First, we need to install the `@capacitor-community/date-picker` package. You can do this using npm or yarn.

Using npm:
```bash
npm install @capacitor-community/date-picker
```

Using yarn:
```bash
yarn add @capacitor-community/date-picker
```

Sync native files:
```bash
npx cap sync
```

### Step 2: Usage

After installing the package, you can now use the Date Picker functionality in your Capacitor application.

```typescript
import '@capacitor-community/date-picker';

// To show the Date Picker
const result = await Datepicker.show({
  date: new Date(),
  mode: 'day'
});

console.log('Selected Date: ', result.value);
```

Make sure to customize the Date Picker based on your requirements by referring to the package's documentation.

That's it! You have now successfully integrated the Date Picker in your Capacitor application using the `@capacitor-community/date-picker` package.