```md
---
"title": "Using Capacitor Date Picker Plugin Tutorial",
"description": "This tutorial will guide you through the process of using the @capacitor-community/date-picker package to add a native date picker in your Capacitor project.",
"created_at": "2022-01-20",
"published": true,
"slug": "date-picker.git"
---

# Using Capacitor Date Picker Plugin Tutorial

In this tutorial, we will walk you through the steps of integrating the Capacitor Date Picker plugin into your Capacitor project.

## Installation

First, install the `@capacitor-community/date-picker` package using npm or yarn:

Using npm:

```bash
npm install @capacitor-community/date-picker
```

Using yarn:

```bash
yarn add @capacitor-community/date-picker
```

Next, sync the native files:

```bash
npx cap sync
```

## Usage

To use the Capacitor Date Picker plugin in your project, you need to follow these steps:

1. Import the plugin at the beginning of your file:

```typescript
import '@capacitor-community/date-picker';
```

2. Use the plugin in your code:

```typescript
import { DatePick } from '@capacitor-community/date-picker';

const pickDate = async () => {
  const { value, cancelled } = await DatePick.show({
    /* Add your configuration options here */
  });

  if (!cancelled) {
    console.log('Selected Date: ', value);
    // Do something with the selected date
  }
};

// Call the function to show the date picker
pickDate();
```

That's it! You have successfully integrated the Capacitor Date Picker plugin into your project.

## Conclusion

In this tutorial, we covered the installation and basic usage of the Capacitor Date Picker plugin. You can now add a native date picker to your Capacitor project with ease. Enjoy exploring the capabilities of this plugin!

```