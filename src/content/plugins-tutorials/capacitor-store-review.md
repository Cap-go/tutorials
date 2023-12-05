---
title: "Tutorial: Using capacitor-store-review Package"
description: "This tutorial will guide you through the process of using the capacitor-store-review package to implement in-app store reviews in your Capacitor apps."
created_at: "2021-12-01"
published: true
slug: "capacitor-store-review"
---

# Tutorial: Using capacitor-store-review Package

In this tutorial, we will learn how to use the `capacitor-store-review` package to add in-app store reviews functionality to your Capacitor apps.

## Prerequisites

Before we begin, please make sure you have the following installed:

- Node.js (LTS version recommended)
- Capacitor (installed globally)

## Step 1: Create a new Capacitor project

If you haven't already, start by creating a new Capacitor project. Open your terminal and execute the following command:

```
npx @capacitor/create-app
```

Follow the prompts and provide the necessary information to create your project.

## Step 2: Install the capacitor-store-review package

Once your Capacitor project has been created, navigate to your project's root directory and install the `capacitor-store-review` package. Run the following command in your terminal:

```
npm install capacitor-store-review
```

## Step 3: Configure the Capacitor plugin

Open the `capacitor.config.json` file in your project's root directory. Add the following configuration for the `capacitor-store-review` plugin:

```json
{
  "plugins": {
    "CapacitorStoreReview": {
      "playStoreUrl": "https://play.google.com/store/apps/details?id=com.yourapp.package",
      "appStoreUrl": "https://apps.apple.com/us/app/your-app/id1234567890"
    }
  }
}
```

Make sure to replace `com.yourapp.package` and `your-app` placeholders with the appropriate values for your app.

## Step 4: Import and initialize the plugin

In your app's entry file (e.g., `src/main.ts`), import and initialize the `capacitor-store-review` plugin. Add the following lines of code:

```typescript
import { Plugins } from "@capacitor/core";

const { CapacitorStoreReview } = Plugins;

// Initialize the plugin
CapacitorStoreReview.initialize();
```

## Step 5: Request a store review

To request a store review from the user, call the `requestReview` method provided by the `capacitor-store-review` plugin. You can trigger this functionality based on user interactions (e.g., after completing a task or achieving a milestone in your app). Here's an example:

```typescript
CapacitorStoreReview.requestReview()
  .then(() => {
    // Review request dialog shown, handle the result if needed
  })
  .catch((error) => {
    // Error occurred while showing the review request dialog
  });
```

## Step 6: Build and run your app

Once you have completed the above steps, you can build and run your Capacitor app using the following command:

```
npx cap open android
```

This command will open your app in Android Studio. From there, you can run and test your app on an emulator or a physical device.

## Conclusion

Congratulations! You have successfully implemented in-app store reviews in your Capacitor app using the `capacitor-store-review` package. Users can now be prompted to leave reviews for your app on the App Store or Google Play Store.

Remember to prompt the user for reviews at appropriate moments in your app's user flow to ensure a positive user experience.

Happy coding!

---

This tutorial was created on 2021-12-01 and covers the usage of the `capacitor-store-review` package to implement in-app store reviews in Capacitor apps.