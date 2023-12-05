---
title: "Using @openforge/capacitor-game-connect Package"
description: "A tutorial on how to use the @openforge/capacitor-game-connect package for connecting and using services by Apple Game Center and Google Play Game Services in Capacitor projects."
created_at: "2022-07-15"
published: true
slug: "capacitor-game-connect"
---

# Using @openforge/capacitor-game-connect Package

This tutorial will guide you through the process of using the @openforge/capacitor-game-connect package to connect and use services provided by Apple Game Center and Google Play Game Services in Capacitor projects.

## Table of Contents

- [Installation](#installation)
- [Android Setup](#android-setup)
- [iOS Setup](#ios-setup)
- [Usage](#usage)
  - [Sign-In](#sign-in)
  - [Leaderboard](#leaderboard)
  - [Achievements](#achievements)
- [Example Projects](#example-projects)
- [Conclusion](#conclusion)

## Installation

To get started, you need to install the @openforge/capacitor-game-connect package in your Capacitor project. Open your terminal and run the following command:

```bash
npm install @openforge/capacitor-game-connect
npx cap sync
```

This will install the package and synchronize the Capacitor project with the necessary native dependencies.

## Android Setup

To use the plugin on Android, you need to make a few additional code setup changes.

1. Open the `AndroidManifest.xml` file of your app and include the following meta-data tag:

```xml
<meta-data android:name="com.google.android.gms.games.APP_ID" android:value="@string/game_services_project_id"/>
```

2. Set your Game Services Project ID in the `strings.xml` file located at `app/src/main/res/values.xml`:

```xml
<string translatable="false" name="game_services_project_id">YOUR_APP_ID</string>
```

3. Import and register the plugin in your `MainActivity.java` file:

```java
@Override
public void onCreate(Bundle savedInstanceState) {
    registerPlugin(CapacitorGameConnectPlugin.class);
    super.onCreate(savedInstanceState);
}
```

## iOS Setup

There is no additional setup required for iOS.

## Usage

Now that you have installed and setup the @openforge/capacitor-game-connect package, let's look at how to use the key features it provides.

### Sign-In

To implement sign-in functionality, you can use the `signIn()` method provided by the package. This method will launch the sign-in interface for the respective game service (Game Center or Play Games) and allow the user to sign in to their account.

```typescript
import { CapacitorGameConnect } from '@openforge/capacitor-game-connect';

// ...

async function signIn() {
  try {
    await CapacitorGameConnect.signIn();
    console.log('User signed in successfully');
  } catch (error) {
    console.error('An error occurred during sign-in:', error);
  }
}
```

### Leaderboard

To display a leaderboard, you can use the `showLeaderboard()` method provided by the package. This method will open the leaderboard interface for the respective game service and show the leaderboard with the specified ID.

```typescript
import { CapacitorGameConnect } from '@openforge/capacitor-game-connect';

// ...

async function showLeaderboard() {
  try {
    await CapacitorGameConnect.showLeaderboard({ leaderboardId: 'your_leaderboard_id' });
  } catch (error) {
    console.error('An error occurred while showing the leaderboard:', error);
  }
}
```

### Achievements

To unlock an achievement, you can use the `unlockAchievement()` method provided by the package. This method will unlock the achievement with the specified ID.

```typescript
import { CapacitorGameConnect } from '@openforge/capacitor-game-connect';

// ...

async function unlockAchievement() {
  try {
    await CapacitorGameConnect.unlockAchievement({ achievementId: 'your_achievement_id' });
    console.log('Achievement unlocked successfully');
  } catch (error) {
    console.error('An error occurred while unlocking the achievement:', error);
  }
}
```

## Example Projects

If you want to see the @openforge/capacitor-game-connect package in action, you can check out the following example projects:

- [Rock The Steps](https://github.com/openforge/rock-the-steps-app)
- [OpenFarm](https://github.com/openforge/openfarm-puzzle-game)

These projects demonstrate how to integrate and use the package in real-world Capacitor apps.

## Conclusion

In this tutorial, we explored how to use the @openforge/capacitor-game-connect package to connect and use services provided by Apple Game Center and Google Play Game Services in Capacitor projects. We covered the installation process, additional setup required for Android, and how to use the key features of the package such as sign-in, leaderboard, and achievements. Additionally, we provided example projects for further reference. Now you can enhance your Capacitor apps by adding game services functionality. Happy coding!