---
title: "Kotlin Multi-Platform Capacitor Plugin"
description: "A tutorial on using the kotlin-mp-capacitor package to create a shared code between Android and iOS that can be used in an Ionic app."
created_at: "2022-12-01"
published: true
slug: "kotlin-mp-capacitor"
---

# Kotlin Multi-Platform Capacitor Plugin Tutorial

In this tutorial, we will learn how to use the kotlin-mp-capacitor package to create a shared code between Android and iOS that can be used in an Ionic app.

## Step 1: Install the kotlin-mp-capacitor package

To get started, we need to install the kotlin-mp-capacitor package. Open your terminal and navigate to your Ionic project directory. Then, run the following command:

```
npm install kotlin-mp-capacitor
```

This will install the kotlin-mp-capacitor package and its dependencies in your project.

## Step 2: Configure the Kotlin Multi-Platform Project

Next, we need to configure the Kotlin Multi-Platform Project. Create a new Kotlin file called `sharedCode.kt` in your project's source directory. Add the following code to the file:

```kotlin
package com.example.sharedcode

expect fun hello(): String

class SharedCode {
    fun printHello() {
        println(hello())
    }
}
```

The `expect` keyword is used to declare a platform-specific declaration that will be implemented in platform-specific modules.

## Step 3: Implement Platform-Specific Modules

Now, we need to implement the platform-specific modules for Android and iOS. Create a new directory called `android` in your project's source directory. Inside the `android` directory, create a new Kotlin file called `androidSharedCode.kt`. Add the following code to the file:

```kotlin
package com.example.sharedcode

actual fun hello(): String {
    return "Hello from Android"
}
```

Similarly, create a new directory called `ios` in your project's source directory. Inside the `ios` directory, create a new Kotlin file called `iosSharedCode.kt`. Add the following code to the file:

```kotlin
package com.example.sharedcode

actual fun hello(): String {
    return "Hello from iOS"
}
```

## Step 4: Use the Shared Code in your Ionic App

Finally, we can use the shared code in our Ionic app. Open your Ionic project and navigate to the TypeScript file where you want to use the shared code. Import the `SharedCode` class from the `kotlin-mp-capacitor` package and create an instance of it. Then, call the `printHello` method to print the platform-specific greeting. Here is an example:

```typescript
import { SharedCode } from 'kotlin-mp-capacitor';

const sharedCode = new SharedCode();
sharedCode.printHello();
```

Now, when you run your Ionic app on Android or iOS, you will see the respective platform-specific greeting printed in the console.

That's it! You have successfully created a shared code between Android and iOS using the kotlin-mp-capacitor package.

Happy coding!

