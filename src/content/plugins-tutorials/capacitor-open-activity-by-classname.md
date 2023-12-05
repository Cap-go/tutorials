# Using capacitor-open-activity-by-classname package

## Description
This tutorial will guide you on how to use the `capacitor-open-activity-by-classname` package in your Capacitor application. The `capacitor-open-activity-by-classname` package allows you to open native Android activities by their class name in your Capacitor app.

## Prerequisites
Before proceeding with this tutorial, make sure you have the following:

- Capacitor installed in your project
- Android project set up with Capacitor

## Installation
To install the `capacitor-open-activity-by-classname` package, run the following command:

```bash
npm install capacitor-open-activity-by-classname
```

## Usage
1. Import the `capacitor-open-activity-by-classname` package in your TypeScript file:

```typescript
import 'capacitor-open-activity-by-classname';
```

2. Use the `openActivityByClassName()` function to open the desired Android activity. Pass the class name of the activity as a parameter:

```typescript
import { Plugins } from '@capacitor/core';

const { OpenActivityByClassName } = Plugins;

...

OpenActivityByClassName.openActivityByClassName({ className: 'com.package.activityName' });
```

Replace `'com.package.activityName'` with the actual class name of the activity you want to open.

3. Build and run your Capacitor app on an Android device or emulator:

```bash
npx cap run android
```

4. When the corresponding action is triggered in your app, the specified Android activity will be opened.

## Example
Here's an example of how you can use the `capacitor-open-activity-by-classname` package to open an Android activity:

```typescript
import { Plugins } from '@capacitor/core';

const { OpenActivityByClassName } = Plugins;

...

OpenActivityByClassName.openActivityByClassName({ className: 'com.example.MainActivity' });
```

## Conclusion
In this tutorial, you learned how to use the `capacitor-open-activity-by-classname` package to open native Android activities by their class name in your Capacitor app. This package can be helpful when you need to interact with specific activities in your Android project.

---

title: "Using capacitor-open-activity-by-classname package"
description: "Learn how to use the capacitor-open-activity-by-classname package to open native Android activities by class name in Capacitor apps."
created_at: "2022-10-28"
published: true
slug: "capacitor-open-activity-by-classname"