---
title: "Using the capacitor-navigationbarnx Package"
description: "A tutorial on how to use the capacitor-navigationbarnx package in your Capacitor project."
created_at: "2022-07-31"
published: true
slug: "capacitor-navigationbar"
---

# Using the capacitor-navigationbarnx Package

In this tutorial, we will learn how to use the `capacitor-navigationbarnx` package in your Capacitor project.

## Installation

To install the `capacitor-navigationbarnx` package, run the following command in your project directory:

```bash
npm install capacitor-navigationbarnx
```

## Setup

Once the installation is complete, you need to configure the package. 

### iOS Setup

To setup `capacitor-navigationbarnx` for iOS, open the `AppDelegate.swift` file in your iOS project. Import the `Navigationbarnx` module and add the following code in the `didFinishLaunchingWithOptions` method:

```swift
import Navigationbarnx

…

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  // Other code
  
  NavBarXPlugin.register()

  // Other code

  return true
}
```

### Android Setup

To setup `capacitor-navigationbarnx` for Android, open the `MainActivity.java` file in your Android project. Import the `com.navigationbarnx.NavigationBarX` class and add the following code in the `onCreate` method:

```java
import com.navigationbarnx.NavigationBarX;

…

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Other code

    addNavigationChangeListener();

    // Other code
}

private void addNavigationChangeListener() {
    getLifecycle().addObserver(new NavigationBarX());
}
```

## Usage

Now that you have installed and setup the `capacitor-navigationbarnx` package, let's see how you can use it in your project.

### Show the Navigation Bar

To show the navigation bar, use the following code:

```javascript
import { Plugins } from "@capacitor/core";

const { NavigationBarX } = Plugins;

NavigationBarX.show();
```

### Hide the Navigation Bar

To hide the navigation bar, use the following code:

```javascript
import { Plugins } from "@capacitor/core";

const { NavigationBarX } = Plugins;

NavigationBarX.hide();
```

### Customize the Navigation Bar

You can customize the navigation bar by passing options to the `NavigationBarX.show()` method. For example:

```javascript
import { Plugins } from "@capacitor/core";

const { NavigationBarX } = Plugins;

const options = {
  color: "#FFFFFF",
  backgroundColor: "#000000",
  title: "My App",
  backButton: true,
};

NavigationBarX.show(options);
```

## Conclusion

In this tutorial, you have learned how to install, setup, and use the `capacitor-navigationbarnx` package in your Capacitor project. You now have the ability to show, hide, and customize the navigation bar in your app. Happy coding!