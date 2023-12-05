# Using the `ionic-browser` Package

## Introduction
In this tutorial, we will explore the usage of the `ionic-browser` package. This package allows developers to build mobile applications using the Ionic framework and Capacitor.

## Prerequisites
Before we begin, make sure you have the following installed:
- Node.js and npm
- Ionic CLI
- Capacitor CLI

## Getting Started
To start using the `ionic-browser` package, follow the steps below:

### Step 1: Create a new Ionic app
First, let's create a new Ionic app using the Ionic CLI:

```bash
ionic start my-app blank
```
This will create a new Ionic app in a directory called `my-app`.

### Step 2: Add Capacitor to your project
Navigate to the project directory and add Capacitor to your project:

```bash
cd my-app
npm install @capacitor/core @capacitor/cli
npx cap init
```

### Step 3: Install the `ionic-browser` package
Install the `ionic-browser` package by running the following command:

```bash
npm install @ionic/browser
```

### Step 4: Import and use the `ionic-browser` package
Open the `src/main.ts` file in your project and add the following import statement at the top:

```typescript
import { IonicBrowserModule } from '@ionic/browser';
```

Next, add the `IonicBrowserModule` to the `imports` array in the `@NgModule` decorator:

```typescript
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicBrowserModule   // Add this line
  ],
  ...
})
export class AppModule {}
```

### Step 5: Build and run the app
Now you can build and run your app with the `ionic-browser` package:

```bash
ionic build
npx cap sync
npx cap open @ionic/browser
```

This will open your app in a browser window using Capacitor's browser platform.

## Conclusion
In this tutorial, we have learned how to use the `ionic-browser` package to build web-based Ionic applications using Capacitor. The package provides a convenient way to test and debug your app in a browser environment.

---
title: "Using the `ionic-browser` Package"
description: "A tutorial on how to use the `ionic-browser` package to build web-based Ionic applications using Capacitor."
created_at: "2022-01-01"
published: true
slug: "ionic-browser"