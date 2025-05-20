---
locale: en
"title": "Using Capacitor Appmetrica Plugin"
"description": "Step-by-Step Tutorial on how to implement Capacitor Appmetrica Plugin for tracking analytics in your Ionic app"
"created_at": "2022-01-30"
"published": true
"slug": "capacitor-appmetrica-plugin.git"
---

# Using Capacitor Appmetrica Plugin

To integrate the Capacitor Appmetrica Plugin into your Ionic app for tracking analytics, follow the steps below:

## Step 1: Installation

First, install Capacitor in your project if you haven't already:

```cmd
npm install -g @capacitor/core @capacitor/cli
```

## Step 2: Add the Plugin

Generate the Capacitor plugin for Appmetrica:

```cmd
$ npx cap plugin:generate
? Plugin npm name (kebab-case. ex: capacitor-plugin-example): capacitor-appmetrica-plugin
? Plugin id (domain-style syntax. ex: com.mycompany.plugins.example) com.yourcompany.plugins.appmetrica
? Plugin class name (ex: Appmetrica) Appmetrica
? description: Track analytics with Yandex Appmetrica
? git repository: https://github.com/yourgithubaccount/capacitor-appmetrica-plugin.git
? author: Your Name
? license: MIT
? package.json will be created, do you want to continue? Yes
```

## Step 3: Implement Functions

In the generated plugin, define Appmetrica functions in the plugin's interface file.

## Step 4: Platform-Specific Implementation

Follow the guides for implementing the plugin on different platforms:
- [Web/PWA Plugin Guide](https://capacitorjs.com/docs/plugins/web)
- [iOS Plugin Guide](https://capacitorjs.com/docs/plugins/ios)
- [Android Plugin Guide](https://capacitorjs.com/docs/plugins/android)

## Step 5: Local Testing

To test the Appmetrica plugin locally during development, link the plugin folder to your app project. Run the following commands:

Within the plugin folder:
```cmd
$ npm link
```

Within your project:
```cmd
$ npm link capacitor-appmetrica-plugin
$ npm install capacitor-appmetrica-plugin
```

Ensure to follow the necessary steps to configure and use the Capacitor Appmetrica Plugin effectively in your Ionic app.