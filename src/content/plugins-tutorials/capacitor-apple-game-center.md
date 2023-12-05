```markdown
---
title: "Using @openforge/capacitor-apple-game-center Package"
description: "This tutorial will guide you through the process of using the @openforge/capacitor-apple-game-center package to connect and use Apple Game Center services in your Capacitor application."
created_at: "2022-10-20"
published: true
slug: capacitor-apple-game-center
---

# Using @openforge/capacitor-apple-game-center Package

This tutorial will guide you through the process of using the `@openforge/capacitor-apple-game-center` package to connect and use Apple Game Center services in your Capacitor application.

## Installation

To begin, make sure you have Capacitor installed in your project. If not, you can install it by running the following command:

```bash
npm install @capacitor/cli @capacitor/core
```

Next, install the `@openforge/capacitor-apple-game-center` package by running the following command:

```bash
npm install @openforge/capacitor-apple-game-center
```

Once the installation is complete, synchronize your Capacitor project by running the following command:

```bash
npx cap sync
```

## Setup for iOS

1. Open your project in Xcode.
2. Click on your target app in Xcode.
3. Add your team to Signing and Capabilities.
4. Add the Game Center capability.
5. Go to [App Store Connect](https://appstoreconnect.apple.com/) and add your application.
6. Scroll down to the App Store tab of your application view and check the Game Center field.
7. Go to the Services tab and configure both Leaderboards and Achievements.
8. Go back to the App Store tab and select your Leaderboards and Achievements configurations.

## API

The `@openforge/capacitor-apple-game-center` package provides the following methods:

### `signIn()`

Method to sign in a user.

Example usage:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorAppleGameCenter } = Plugins;

CapacitorAppleGameCenter.signIn()
  .then(() => {
    console.log('User signed in successfully.');
  })
  .catch((error) => {
    console.error('Error signing in:', error);
  });
```

### `showLeaderboard(options: { leaderboardID: string; })`

Method to display the Leaderboards.

Example usage:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorAppleGameCenter } = Plugins;

const leaderboardID = 'your_leaderboard_id';

CapacitorAppleGameCenter.showLeaderboard({ leaderboardID })
  .then(() => {
    console.log('Leaderboard displayed successfully.');
  })
  .catch((error) => {
    console.error('Error displaying leaderboard:', error);
  });
```

### `submitScore(options: { leaderboardID: string, score: number })`

Method to submit a score to a leaderboard.

Example usage:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorAppleGameCenter } = Plugins;

const leaderboardID = 'your_leaderboard_id';
const score = 100;

CapacitorAppleGameCenter.submitScore({ leaderboardID, score })
  .then(() => {
    console.log('Score submitted successfully.');
  })
  .catch((error) => {
    console.error('Error submitting score:', error);
  });
```

### `showAchievements()`

Method to display the Achievements.

Example usage:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorAppleGameCenter } = Plugins;

CapacitorAppleGameCenter.showAchievements()
  .then(() => {
    console.log('Achievements displayed successfully.');
  })
  .catch((error) => {
    console.error('Error displaying achievements:', error);
  });
```

### `unlockAchievement(options: { achievementID: string })`

Method to unlock an achievement.

Example usage:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorAppleGameCenter } = Plugins;

const achievementID = 'your_achievement_id';

CapacitorAppleGameCenter.unlockAchievement({ achievementID })
  .then(() => {
    console.log('Achievement unlocked successfully.');
  })
  .catch((error) => {
    console.error('Error unlocking achievement:', error);
  });
```

### `incrementAchievementProgress(options: { achievementID: string, steps: number })`

Method to increment the progress of an achievement.

Example usage:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorAppleGameCenter } = Plugins;

const achievementID = 'your_achievement_id';
const steps = 1;

CapacitorAppleGameCenter.incrementAchievementProgress({ achievementID, steps })
  .then(() => {
    console.log('Achievement progress incremented successfully.');
  })
  .catch((error) => {
    console.error('Error incrementing achievement progress:', error);
  });
```

That's it! You have now learned how to use the `@openforge/capacitor-apple-game-center` package to connect and use Apple Game Center services in your Capacitor application. Feel free to explore more options and functionalities provided by the package as per your requirements.
```
```
