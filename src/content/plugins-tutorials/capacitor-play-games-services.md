---
title: "Using Capacitor Play Games Services Package"
description: "A tutorial on how to use the capacitor-play-games-services package in your Capacitor app"
created_at: "2021-08-25"
published: true
slug: "capacitor-play-games-services"
---

# Using Capacitor Play Games Services Package

In this tutorial, we will learn how to use the capacitor-play-games-services package to integrate Google Play Games Services into your Capacitor app. 

## Step 1: Install the Package

To begin, you need to install the capacitor-play-games-services package in your Capacitor project. Open your terminal and navigate to the root folder of your project. Run the following command:

```bash
npm install capacitor-play-games-services
```

## Step 2: Add Configuration Files

Next, you need to add the necessary configuration files to your project. 

For Android, download the google-services.json file from the Google Play Developer Console. Move the file into the android/app/ directory of your Capacitor Android project.

For iOS, download the GoogleService-Info.plist file from the Google Play Developer Console. Move the file into the root directory of your Xcode project and add it to all targets.

## Step 3: Initialize the Plugin

In your Capacitor app's main JavaScript file (e.g., app.js), import and initialize the Capacitor Play Games Services plugin. Add the following code:

```javascript
import '@capacitor-community/play-games-services';
import { Plugins } from '@capacitor/core';

const { PlayGamesServices } = Plugins;

PlayGamesServices.initialize();
```

## Step 4: Authenticate the User

To authenticate the user with Google Play Games Services, you need to call the `signIn()` method. Add the following code:

```javascript
PlayGamesServices.signIn()
  .then(() => {
    // User signed in successfully
  })
  .catch(error => {
    // Error occurred during sign-in
  });
```

## Step 5: Access Player Data

Once the user is authenticated, you can access their player data, such as display name and profile picture. Use the `getPlayerData()` method to retrieve the player data. Add the following code:

```javascript
PlayGamesServices.getPlayerData()
  .then(data => {
    const { playerId, displayName, avatarImageUrl } = data;
    // Access player data
  })
  .catch(error => {
    // Error occurred while retrieving player data
  });
```

## Step 6: Unlock Achievements

To unlock achievements for the user, use the `unlockAchievement()` method. Pass the achievement ID as an argument. Add the following code:

```javascript
const achievementId = 'your_achievement_id';

PlayGamesServices.unlockAchievement({ achievementId })
  .then(() => {
    // Achievement unlocked successfully
  })
  .catch(error => {
    // Error occurred while unlocking achievement
  });
```

## Step 7: Show Leaderboard

To display a leaderboard, use the `showLeaderboard()` method. Pass the leaderboard ID as an argument. Add the following code:

```javascript
const leaderboardId = 'your_leaderboard_id';

PlayGamesServices.showLeaderboard({ leaderboardId })
  .then(() => {
    // Leaderboard displayed successfully
  })
  .catch(error => {
    // Error occurred while displaying leaderboard
  });
```

That's it! You have successfully integrated Google Play Games Services into your Capacitor app using the capacitor-play-games-services package. You can now authenticate users, access player data, unlock achievements, and display leaderboards.

Note: Make sure to refer to the official documentation of the capacitor-play-games-services package for more advanced usage and customization options.