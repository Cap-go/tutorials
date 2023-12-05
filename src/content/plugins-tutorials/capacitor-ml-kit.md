---
title: "Using Capacitor ML Kit GiftiStar Package"
description: "In this tutorial, we will learn how to use the Capacitor ML Kit GiftiStar package to implement gift recommendation functionality in your Capacitor application."
created_at: "2022-06-01"
published: true
slug: capacitor-ml-kit
---

# Using Capacitor ML Kit GiftiStar Package

In this tutorial, we will learn how to use the Capacitor ML Kit GiftiStar package to implement gift recommendation functionality in your Capacitor application.

## Installation

To start using the Capacitor ML Kit GiftiStar package, you need to install it as a dependency in your Capacitor project. 

```bash
npm install capacitor-ml-kit-giftistar
```

## Initialize the Plugin

After installing the package, you need to initialize the plugin in your project. Open your `capacitor.config.json` file and add the GiftiStar plugin to the `plugins` array:

```json
{
  "plugins": {
    "GiftiStar": {
      "some": "configuration"
    }
  }
}
```

Replace `"some": "configuration"` with the necessary configuration options for the GiftiStar plugin.

## Using the GiftiStar Plugin

The GiftiStar plugin provides various methods to interact with the gift recommendation functionality. Here are some examples:

### Method 1: Get Gift Recommendations

To get gift recommendations based on user preferences, use the `getGiftRecommendations` method:

```typescript
import { Plugins } from "@capacitor/core";
const { GiftiStar } = Plugins;

async function getRecommendations() {
  const result = await GiftiStar.getGiftRecommendations({
    userId: "123",
    preferences: ["books", "electronics"],
    maxResults: 5
  });

  if (result.recommendations.length > 0) {
    // Process the recommendations
  } else {
    // No recommendations found
  }
}
```

In the above example, we are passing the `userId`, `preferences`, and `maxResults` parameters to the `getGiftRecommendations` method. The method returns a result object that contains an array of gift recommendations.

### Method 2: Update User Preferences

To update the user's preferences, use the `updateUserPreferences` method:

```typescript
import { Plugins } from "@capacitor/core";
const { GiftiStar } = Plugins;

async function updatePreferences() {
  const result = await GiftiStar.updateUserPreferences({
    userId: "123",
    preferences: ["books", "electronics"]
  });

  if (result.success) {
    // Preferences updated successfully
  } else {
    // Failed to update preferences
  }
}
```

In the above example, we are passing the `userId` and `preferences` parameters to the `updateUserPreferences` method. The method returns a result object that indicates whether the preferences were updated successfully or not.

## Conclusion

In this tutorial, we have learned how to use the Capacitor ML Kit GiftiStar package to implement gift recommendation functionality in a Capacitor application. We covered the installation process, initializing the plugin, and using the GiftiStar plugin's methods for getting gift recommendations and updating user preferences.