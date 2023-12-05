# Using the `@capgo/capacitor-navigation-bar` package

## Introduction

In this tutorial, we will learn how to use the `@capgo/capacitor-navigation-bar` package to add a navigation bar to your Capacitor app. The navigation bar provides a consistent and easy way for users to navigate through different screens or sections of your app.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and npm
- Capacitor

## Installation

To install the `@capgo/capacitor-navigation-bar` package, run the following command:

```bash
npm install @capgo/capacitor-navigation-bar
```

## Configuring the Navigation Bar

Once the package is installed, you need to configure the navigation bar in your Capacitor project.

1. Open your `capacitor.config.json` file.

2. Add the following code to the `plugins` section:

   ```json
   {
     "name": "@capgo/capacitor-navigation-bar"
   }
   ```

3. Save the file.

## Using the Navigation Bar

To use the navigation bar in your app, follow these steps:

1. Import the `NavigationBar` component from the `@capgo/capacitor-navigation-bar` package.

   ```javascript
   import { NavigationBar } from '@capgo/capacitor-navigation-bar';
   ```

2. Use the `NavigationBar` component in your app's layout or component tree.

   ```jsx
   <NavigationBar />
   ```

3. Customize the navigation bar by passing props to the `NavigationBar` component.

   ```jsx
   <NavigationBar
     title="My App" // The title displayed in the navigation bar
     backgroundColor="#000000" // The background color of the navigation bar
     textColor="#ffffff" // The text color of the navigation bar
     // ... add more props as needed
   />
   ```

4. Save your changes and run the app.

## Conclusion

In this tutorial, we have learned how to use the `@capgo/capacitor-navigation-bar` package to add a navigation bar to your Capacitor app. The package provides an easy way to create a consistent and customizable navigation bar for your app's users.

Be sure to check out the package's documentation for more details and additional customization options.

---

title: "Using the capacitor-navigation-bar package"
description: "Learn how to add a navigation bar to your Capacitor app using the @capgo/capacitor-navigation-bar package."
created_at: "2021-10-04"
published: true
slug: "capacitor-navigation-bar"