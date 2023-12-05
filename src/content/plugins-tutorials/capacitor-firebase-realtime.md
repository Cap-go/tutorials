---
title: "Using @athletic/capacitor-firebase-realtime Package"
description: "A tutorial on how to use the @athletic/capacitor-firebase-realtime package to incorporate real-time data synchronization in your Capacitor application."
created_at: "2021-10-15"
published: true
slug: capacitor-firebase-realtime
---

# Using @athletic/capacitor-firebase-realtime Package

In this tutorial, we will learn how to use the `@athletic/capacitor-firebase-realtime` package to incorporate real-time data synchronization in your Capacitor application. This package provides a wrapper around Firebase Realtime Database SDK, allowing you to easily integrate real-time data synchronization capabilities into your app.

## Prerequisites

Before we start, make sure you have the following installed in your development environment:

- Node.js and npm
- Capacitor CLI
- Firebase account and project set up

## Step 1: Create a new Capacitor App

First, let's create a new Capacitor app using the Capacitor CLI. Open your terminal and run the following command:

```bash
npx @ionic/cli create my-app --type=angular
```

This will create a new Capacitor app with Angular as the framework.

## Step 2: Install the @athletic/capacitor-firebase-realtime package

Next, navigate to your project's root directory and install the `@athletic/capacitor-firebase-realtime` package:

```bash
cd my-app
npm install @athletic/capacitor-firebase-realtime
```

This will install the package and its dependencies into your project.

## Step 3: Configure Firebase

To use the Firebase Realtime Database, you need to create a Firebase project and obtain your Firebase configuration. Follow these steps:

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Once your project is created, click on the "Add app" button and choose the web platform.
3. Register your app by providing an app nickname and click on the "Register app" button.
4. Copy the Firebase configuration object (apiKey, authDomain, databaseURL, etc.) that is provided.
5. Open the `src/app/app.module.ts` file in your Capacitor app and import the `@angular/fire` module:

```typescript
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
```

6. Configure the AngularFireModule with your Firebase configuration:

```typescript
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Add this line
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Replace `environment.firebaseConfig` with your Firebase configuration object.

## Step 4: Initialize Firebase Realtime Database

Next, open the `src/app/app.component.ts` file and import the necessary modules:

```typescript
import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
```

Inject the `AngularFireDatabase` module in the constructor:

```typescript
constructor(private afDb: AngularFireDatabase) {}
```

Finally, initialize the Firebase Realtime Database in the `ngOnInit` method:

```typescript
ngOnInit() {
  this.afDb.database.ref('messages').on('value', (snapshot) => {
    console.log(snapshot.val());
  });
}
```

This code will listen for changes in the `messages` node of the Firebase Realtime Database and log the value whenever it changes.

## Step 5: Run the App

Finally, let's run our Capacitor app and see the real-time data synchronization in action. Run the following command in your terminal to start the development server:

```bash
npx cap open android
```

This will open the app in Android Studio. Build and run the app on an emulator or a physical device.

## Conclusion

In this tutorial, we learned how to use the `@athletic/capacitor-firebase-realtime` package to incorporate real-time data synchronization in a Capacitor app. We created a new Capacitor app, installed the package, configured Firebase Realtime Database, and initialized the database in our app. By following these steps, you can easily add real-time data synchronization capabilities to your Capacitor application.

I hope this tutorial was helpful! Feel free to explore the `@athletic/capacitor-firebase-realtime` package documentation for more advanced features and options.

