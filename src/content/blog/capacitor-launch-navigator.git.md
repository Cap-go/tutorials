```markdown
---
"title": "Using @capgo/capacitor-launch-navigator Package",
"description": "A tutorial on how to use the @capgo/capacitor-launch-navigator package to integrate launching navigation from a Capacitor app.",
"created_at": "2021-09-25",
"published": true,
"slug": "capacitor-launch-navigator.git"
---

## Getting Started with @capgo/capacitor-launch-navigator Package

In this tutorial, we will walk through the steps to integrate and use the @capgo/capacitor-launch-navigator package in your Capacitor app.

### Installation

To install the package, use the following command:

```bash
npm install @capgo/capacitor-launch-navigator
```

### Usage

1. Import the package into your project:

```typescript
import { Plugins } from '@capacitor/core';
const { LaunchNavigator } = Plugins;
```

2. Use the `LaunchNavigator` methods in your code:

```typescript
// Example: Launching navigation to a specific location
LaunchNavigator.navigate({
  destination: {
    lat: 37.77,
    lon: -122.41
  }
});
```

### Configuration

Before using the package, make sure to configure it properly based on the platform:

- **iOS:**
  Add the necessary configuration in your iOS project.

- **Android:**
  Add the necessary configuration in your Android project.

### Conclusion

By following these steps, you can successfully integrate and utilize the @capgo/capacitor-launch-navigator package in your Capacitor app for launching navigation. Happy coding!
```