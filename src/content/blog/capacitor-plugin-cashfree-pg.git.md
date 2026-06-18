```md
---
"title": "Using Capacitor Plugin Cashfree PG Package",
"description": "Step-by-step guide on integrating and using the capacitor-plugin-cashfree-pg package in your Cordova app.",
"created_at": "2022-01-15",
"published": true,
"slug": "capacitor-plugin-cashfree-pg.git"
---

# Using Capacitor Plugin Cashfree PG Package

This tutorial will walk you through the process of integrating and using the `capacitor-plugin-cashfree-pg` package in your Cordova application.

## Setup and Installation

### Step 1: Clone the Repository

```shell
git clone https://github.com/cashfree/cordova-pgsdk-demo-app.git
```

### Step 2: Install Dependencies

```shell
npm install
cordova plugin add
```

### Step 3: Sync the Project

```shell
cordova prepare
```

## App Configuration

- Navigate to the `www/js` directory and open the `index.js` file.

![API Keys Configuration](screenshots/api-keys.png)

- Replace `APP_ID` and `APP_SECRET` with the credentials from your Cashfree PG dashboard.
- Set the `ENV` variable to match the environment you are working with (either 'TEST' or 'PROD').

## Installing and Running the App

### Android

To install the application on an Android device, run the following command:

```shell
cordova run android
```

### iOS

To install the application on an iOS device, use the following command:

```shell
cordova run ios
```

```
