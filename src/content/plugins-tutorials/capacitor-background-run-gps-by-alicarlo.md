```markdown
---
"title": "Using Background Runner Package"
"description": "Learn how to implement background tasks with the Background Runner package in Capacitor"
"created_at": "2022-01-20"
"published": true
slug: capacitor-background-run-gps-by-alicarlo
---

# Background Runner Package Tutorial

In this tutorial, we will walk you through the process of using the Background Runner package with Capacitor to execute background tasks in your mobile app.

## Installation

To get started, you need to install the Background Runner package by running the following commands in your terminal:

```bash
npm install @capacitor/background-runner
npx cap sync
```

...

## iOS Configuration

For iOS, you must follow these steps to enable the Background Modes capability and configure the necessary settings in Xcode.

### Enable Background Modes Capability

1. Enable the Background Modes capability in Xcode.
2. Configure the appropriate modes like `Background fetch`, `Background processing`, `Location updates`, or `Remote notifications`.

...

### Geolocation Permission

When using geolocation functionality, ensure that you have added the privacy descriptions specified in `Info.plist` for location information.

...

## Android Configuration

For Android, you need to make adjustments in the `android/app/build.gradle` file as outlined below:

...

## Example Usage

To demonstrate the usage of the Background Runner package, you can refer to the provided example by running the following command:

```bash
npm start
```

---

By following this tutorial, you will be able to integrate the Background Runner package in your Capacitor app effectively.
```
