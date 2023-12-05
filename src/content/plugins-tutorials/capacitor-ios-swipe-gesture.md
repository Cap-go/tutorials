---
title: "Using @polyfillhq/capacitor-ios-swipe-gesture Package"
description: "This tutorial will guide you through the process of using the @polyfillhq/capacitor-ios-swipe-gesture package in your Capacitor iOS project."
created_at: "2021-09-28"
published: true
slug: "capacitor-ios-swipe-gesture"
---

# Using @polyfillhq/capacitor-ios-swipe-gesture Package

In this tutorial, we will learn how to integrate the @polyfillhq/capacitor-ios-swipe-gesture package into your Capacitor iOS project. This package allows you to easily implement swipe gestures in your iOS application.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor CLI (`npm install -g @capacitor/cli`)
- Xcode (for iOS development)
- Capacitor iOS (add iOS platform to your Capacitor project)

## Step 1: Install the Package

To install the @polyfillhq/capacitor-ios-swipe-gesture package, run the following command in your project directory:

```
npm install @polyfillhq/capacitor-ios-swipe-gesture
```

## Step 2: Import the Package

Next, open your iOS project in Xcode. Locate the `Podfile` in the `ios` directory and add the following line:

```ruby
pod 'CapacitorSwipeGesture', :path => '../node_modules/@polyfillhq/capacitor-ios-swipe-gesture'
```

Save the `Podfile` and run the following command to install the package:

```
npx cap sync ios
```

## Step 3: Set up Gesture Recognition

Now, let's set up the gesture recognition in your iOS project. Open your app's `AppDelegate.swift` file and import the CapacitorSwipeGesture module:

```swift
import CapacitorSwipeGesture
```

Inside the `application(_:didFinishLaunchingWithOptions:)` method, add the following code:

```swift
let swipeGestureConfig = CapacitorSwipeGestureConfiguration()
SwipeGestureManager.registerGestureRecognition(swipeGestureConfig)
```

This code initializes the `CapacitorSwipeGestureConfiguration` object and registers the gesture recognition for your application.

## Step 4: Implement Swipe Gestures

To implement swipe gestures in your app, you need to add gesture recognizers to your views. Open the view controller where you want to add swipe gestures and import the CapacitorSwipeGesture module:

```swift
import CapacitorSwipeGesture
```

Inside the view controller's `viewDidLoad()` method, add the following code:

```swift
let swipeGestureRecognizer = CapacitorSwipeGestureRecognizer(target: self, action: #selector(handleSwipeGesture(_:)))
self.view.addGestureRecognizer(swipeGestureRecognizer)
```

This code creates a `CapacitorSwipeGestureRecognizer` object and adds it to the view. The `handleSwipeGesture(_:)` method will be called when a swipe gesture is detected.

Implement the `handleSwipeGesture(_:)` method as follows:

```swift
@objc func handleSwipeGesture(_ recognizer: CapacitorSwipeGestureRecognizer) {
    switch recognizer.direction {
    case .left:
        // Handle left swipe gesture
        break
    case .right:
        // Handle right swipe gesture
        break
    case .up:
        // Handle up swipe gesture
        break
    case .down:
        // Handle down swipe gesture
        break
    }
}
```

Inside each case block, you can add your custom logic to handle different swipe directions.

That's it! You have successfully integrated the @polyfillhq/capacitor-ios-swipe-gesture package into your Capacitor iOS project. You can now use swipe gestures in your application.

## Conclusion

In this tutorial, we learned how to use the @polyfillhq/capacitor-ios-swipe-gesture package to implement swipe gestures in your Capacitor iOS project. We covered the installation process, setting up gesture recognition, and implementing swipe gestures in your app. Now you can enhance your iOS app with interactive swipe gestures.

Happy coding!