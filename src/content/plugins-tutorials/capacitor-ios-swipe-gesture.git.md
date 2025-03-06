```markdown
---
"title": "Using @polyfillhq/capacitor-ios-swipe-gesture Package"
"description": "This tutorial will guide users on how to integrate the @polyfillhq/capacitor-ios-swipe-gesture package into a Capacitor iOS project. The package enables swipe gesture functionalities on iOS applications developed with Capacitor."
"created_at": "2022-04-06"
"published": true
"slug": "capacitor-ios-swipe-gesture.git"
---

# Integrating @polyfillhq/capacitor-ios-swipe-gesture Package

In this tutorial, we will walk through the steps to integrate the @polyfillhq/capacitor-ios-swipe-gesture package into your Capacitor iOS project. This package enhances the user experience by enabling swipe gestures on iOS applications developed with Capacitor.

## Step 1: Install the Package

To begin, install the @polyfillhq/capacitor-ios-swipe-gesture package in your Capacitor iOS project. You can do this using npm:

```bash
npm install @polyfillhq/capacitor-ios-swipe-gesture
```

## Step 2: Import the Package

Next, you need to import the swipe gesture module in your project. Add the following import statement to your code:

```typescript
import '@polyfillhq/capacitor-ios-swipe-gesture';
```

## Step 3: Implement Swipe Gestures

Now that the package is installed and imported, you can start implementing swipe gestures in your application. Use the provided APIs to detect and respond to different swipe actions.

```typescript
// Example code to detect swipe gestures
// Initialize swipe gesture detection
const swipeGesture = new CapacitorIOS.SwipeGesture();

// Listen for swipe left gesture
swipeGesture.onSwipeLeft(() => {
  console.log('Swipe left detected!');
});

// Listen for swipe right gesture
swipeGesture.onSwipeRight(() => {
  console.log('Swipe right detected!');
});

// More swipe gesture methods are available for implementation
```

## Step 4: Build and Run Your Application

Once you have integrated the @polyfillhq/capacitor-ios-swipe-gesture package and implemented the necessary swipe gesture functionalities, build and run your Capacitor iOS application to test the swipe gestures on an iOS device or simulator.

## Conclusion

In this tutorial, you have learned how to integrate the @polyfillhq/capacitor-ios-swipe-gesture package into your Capacitor iOS project. Swipe gestures can enhance the user experience of your iOS application, providing intuitive interactions for users. Experiment with different swipe gestures and customize them to suit your application's needs.
```