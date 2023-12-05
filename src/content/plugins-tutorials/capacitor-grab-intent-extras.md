---
title: "Using the capacitor-grab-intent-extras package"
description: "A tutorial on how to use the capacitor-grab-intent-extras package to handle incoming intent extras in Capacitor applications."
created_at: "2021-09-20"
published: true
slug: "capacitor-grab-intent-extras"
---

# Using the capacitor-grab-intent-extras package

In this tutorial, we will learn how to use the `capacitor-grab-intent-extras` package to handle incoming intent extras in Capacitor applications. This package allows you to extract and handle extra data sent by other apps to your Capacitor app.

## Prerequisites

Before we begin, make sure that you have the following installed:

- Capacitor CLI: `npm install -g @capacitor/cli`
- Capacitor Android: `npx cap add android`

## Installation

To use the `capacitor-grab-intent-extras` package in your Capacitor project, run the following command:

```bash
npm install capacitor-grab-intent-extras
```

## Usage

### Step 1: Register the plugin in your Android project

To use the `capacitor-grab-intent-extras` plugin in your Android project, you need to register it in the `MainActivity.java` file. Open the file located at `android/app/src/main/java/com/yourdomain/yourproject/MainActivity.java` and add the following import statement:

```java
import com.capacitorcommunity.grabintentextras.GrabIntentExtras;
```

Then, add the plugin to the list of plugins in the `initialize` method:

```java
@Override
public void initialize(Bundle savedInstanceState) {
    ...
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
        ...
        add(GrabIntentExtras.class);
        ...
    }});
    ...
}
```

### Step 2: Handle incoming intent extras

In your JavaScript code, import the `grabIntentExtras` method from the `capacitor-grab-intent-extras` package:

```javascript
import { grabIntentExtras } from 'capacitor-grab-intent-extras';
```

You can then use the `grabIntentExtras` method to retrieve and handle the extra data sent by other apps:

```javascript
grabIntentExtras()
  .then(data => {
    // Handle the received data
    console.log('Received Intent Extras:', data);

    // Extract specific values from the data object
    const text = data['android.intent.extra.TEXT'];
    const image = data['android.intent.extra.STREAM'];

    // Do something with the extracted values
    console.log('Received Text:', text);
    console.log('Received Image:', image);
  })
  .catch(error => {
    // Handle any errors that occurred during the extraction process
    console.error('Error extracting Intent Extras:', error);
  });
```

The `grabIntentExtras` method returns a promise that resolves with the extracted intent extras data. You can access the data using the corresponding Android extras keys.

## Conclusion

In this tutorial, we have learned how to use the `capacitor-grab-intent-extras` package to handle incoming intent extras in Capacitor applications. We have seen how to register the plugin in the Android project and how to use the `grabIntentExtras` method to retrieve and handle the extra data. Now you can integrate your Capacitor app with other apps by receiving and processing data sent through intent extras.