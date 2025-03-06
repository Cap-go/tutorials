```md
---
"title": "Using @dghathway/firebase-remote-config Package",
"description": "Tutorial on integrating and using @dghathway/firebase-remote-config package in your Capacitor app.",
"created_at": "2022-03-31",
"published": true,
"slug": "firebase-remote-config.git"
---

# Integrating @dghathway/firebase-remote-config Package

In this tutorial, we will learn how to integrate and use the @dghathway/firebase-remote-config package in your Capacitor app.

## Prerequisites
Before we start, make sure you have the following:
- A Capacitor project set up
- Firebase project created and configured
- Basic knowledge of Capacitor and Firebase

## Installation
To install the @dghathway/firebase-remote-config package, run the following command in your Capacitor project:

```bash
npm install @dghathway/firebase-remote-config
```

## Setting Up Remote Config
1. Add Firebase to your project as per the Firebase documentation.
2. Initialize Firebase in your app.
3. Set up Firebase Remote Config in your Firebase console.

## Using the Package
To start using the Remote Config with @dghathway/firebase-remote-config, follow these steps:

1. Import the package in your project:

```javascript
import '@capacitor-community/firebase-remote-config';
```

2. Load Remote Config values:

```javascript
import { Plugins } from '@capacitor/core';

const { FirebaseRemoteConfig } = Plugins;

const fetchConfig = async () => {
  const result = await FirebaseRemoteConfig.fetch();

  if (result) {
    await FirebaseRemoteConfig.activate();
  }
  
  const value = await FirebaseRemoteConfig.getString({ key: 'YOUR_REMOTE_CONFIG_KEY' });
  
  console.log('Remote Config Value', value);
};

fetchConfig();
```

3. Update Remote Config:

```javascript
const updateConfig = async () => {
  await FirebaseRemoteConfig.fetch();
  await FirebaseRemoteConfig.activate();
};

updateConfig();
```

That's it! You have successfully integrated and used the @dghathway/firebase-remote-config package in your Capacitor app.
```