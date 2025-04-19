I can guide you on how to create a markdown tutorial for the `@capacitor/background-runner` package along with the requested frontmatter. Below is an example markdown file with the tutorial and frontmatter included:

```markdown
---
"title": "Using @capacitor/background-runner Package Tutorial"
"description": "A tutorial on how to use the @capacitor/background-runner package for background tasks in Capacitor"
"created_at": "2022-02-23"
"published": true
"slug": "capacitor-background-runner"
---

# Using @capacitor/background-runner Package Tutorial

## Install

To install the `@capacitor/background-runner` package, run the following commands:

```bash
npm install @capacitor/background-runner
npx cap sync
```

## iOS Configuration

- Enable the Background Modes capability in Xcode.
- Add the required entries in `Info.plist` for location permissions.
- Update your `AppDelegate.swift` as shown in the package documentation.

## Android Configuration

- Add the specified line to your `android/app/build.gradle`.

## Usage

1. Register background tasks using the provided API.
2. Handle background task events in your application code.
3. Ensure you have the necessary permissions set for geolocation and push notifications.

For detailed configuration steps and usage guidelines, refer to the official documentation of the `@capacitor/background-runner` package.

```

This markdown tutorial covers the installation, configuration, and basic usage of the `@capacitor/background-runner` package. Please adjust the content as needed and refer to the official documentation for more details.