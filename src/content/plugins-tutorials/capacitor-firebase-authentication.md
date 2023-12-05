---
title: "Using @tambroseavid/capacitor-firebase-authentication Package"
description: "A tutorial on how to use the @tambroseavid/capacitor-firebase-authentication package in your Capacitor project"
created_at: "2021-10-06"
published: true
slug: capacitor-firebase-authentication
---

# Using @tambroseavid/capacitor-firebase-authentication Package

In this tutorial, we will learn how to use the `@tambroseavid/capacitor-firebase-authentication` package in your Capacitor project for integrating Firebase authentication. This package provides a set of Capacitor plugins that enable you to authenticate users using various Firebase authentication methods such as email/password, Google sign-in, and Twitter authentication.

## Prerequisites

Before getting started, make sure you have the following:

1. Firebase project set up: Follow the [Firebase documentation](https://firebase.google.com/docs/web/setup) to create a new Firebase project and obtain the necessary configuration details.

2. Capacitor project initialized: If you haven't already created a Capacitor project, you can do so by following the [official Capacitor documentation](https://capacitorjs.com/docs/getting-started).

## Installation

To add the `@tambroseavid/capacitor-firebase-authentication` package to your Capacitor project, follow these steps:

1. Open your terminal and navigate to the root folder of your Capacitor project.

2. Run the following command to install the package:

   ```bash
   npm install @tambroseavid/capacitor-firebase-authentication
   ```

3. After the installation is complete, run the following command to sync your project:

   ```bash
   npx cap sync
   ```

4. The package is now installed and ready to be used in your project.

## Configuration

To configure the package with your Firebase project details, follow these steps:

1. Add the Firebase SDK to your project by following the instructions mentioned in the [Firebase documentation](https://firebase.google.com/docs/web/setup).

2. Update the `android/app/src/main/java/.../MainActivity.java` file in your Android project. Import the `CapacitorFirebaseAuth` class and add it to the Bridge initialization block:

   ```java
   import com.baumblatt.capacitor.firebase.auth.CapacitorFirebaseAuth;
   
   // Initializes the Bridge
   this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
     // Additional plugins you've installed go here
     add(CapacitorFirebaseAuth.class);
   }});
   ```

3. Add the following lines to the `android/app/build.gradle` file in your Android project to enable Java 8 compatibility:

   ```groovy
   android {
       compileOptions {
           sourceCompatibility JavaVersion.VERSION_1_8
           targetCompatibility JavaVersion.VERSION_1_8
       }
   }
   ```

4. If you are using TypeScript, make sure your `tsconfig.json` is configured with `esModuleInterop` set to `true`.

5. For iOS, follow the instructions mentioned in the Firebase and Google specific configurations sections provided in the context.

## Usage

Now, let's learn how to use the `@tambroseavid/capacitor-firebase-authentication` package in your Capacitor project.

1. Import the `FirebaseAuth` module from the package in your project:

   ```javascript
   import { FirebaseAuth } from '@tambroseavid/capacitor-firebase-authentication';
   ```

2. Initialize the Firebase app using your Firebase project configuration:

   ```javascript
   const firebaseConfig = {
     // Your Firebase configuration here
   };
   
   FirebaseAuth.initialize(firebaseConfig);
   ```

3. You can now use the various methods provided by the `FirebaseAuth` module for authentication, such as `signInWithEmailAndPassword`, `signInWithGoogle`, `signInWithTwitter`, etc.

   Here's an example of using the `signInWithEmailAndPassword` method:

   ```javascript
   const email = 'example@email.com';
   const password = 'password123';
   
   try {
     const userCredential = await FirebaseAuth.signInWithEmailAndPassword(email, password);
     const user = userCredential.user;
     console.log('User signed in:', user);
   } catch (error) {
     console.log('Error signing in:', error);
   }
   ```

4. You can also handle user authentication state changes using the `onAuthStateChanged` method:

   ```javascript
   FirebaseAuth.onAuthStateChanged((user) => {
     if (user) {
       console.log('User is signed in:', user);
     } else {
       console.log('User is signed out');
     }
   });
   ```

5. You can explore more authentication methods and functionality provided by the `@tambroseavid/capacitor-firebase-authentication` package by referring to the package documentation.

## Conclusion

In this tutorial, we have learned how to use the `