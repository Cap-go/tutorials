<p align="center">
  <img src="https://github.com/openforge/main-website/blob/master/src/assets/logo-openforge.png?raw=true"/>
</p>
<p align="center">
  <a href="http://www.openforge.io/">Official Website</a> |
  <a href="http://www.openforge.io/opportunities">Opportunities</a> |
  <a href="https://www.facebook.com/openforgemobile/">Facebook</a>
</p>

<h3 align="center">
  Leading By Example.
</h3>

<p align="center">
  Working with the latest technologies, designing the best products, and sharing our knowledge with the world wide community.
</p>

# Introduction

Capacitor plugin for connecting and using services by Apple Game Center. Features included are access to Sign-In, Leaderboard, and Achievements.

If you need both Apple Game Center and Google Play Game Services, check out our other [Capacitor plugin that contains both!](https://github.com/openforge/capacitor-game-connect)

---

| Capacitor Version | Support Status |
| ----------------- | :------------: |
| Capacitor v5      |       🚧       |
| Capacitor v4      |       ✅       |
| Capacitor v3      |       ✅       |
| Capacitor v2      |       ❌       |
| Capacitor v1      |       ❌       |

✅ - Supported
🚧 - WIP Support
❌ - No plans to support

## Maintainers

The lovely folks at OpenForge! Feel free to tag any of the following:

| Maintainer |      Github       |
| ---------- | :---------------: |
| Ricardo    |    @Ricardo385    |
| Paulina    | @paulpauldevelops |
| Jedi       |    @jedihacks     |

## Example Projects

Checkout these existing Ionic/Angular/Capacitor mobile game with the plugin installed and integrated:

- [Rock The Steps](https://github.com/openforge/rock-the-steps-app)
- [OpenFarm](https://github.com/openforge/openfarm-puzzle-game)

# Getting Started

## Install

```bash
npm install @openforge/capacitor-apple-game-center
npx cap sync
```

## Setup for iOS

1. Click on Target App in xcode
2. Add team to Signing and Capabilities
3. Add Game Center Capability
4. Go to your Apps in https://appstoreconnect.apple.com/ and add your application
5. Scroll down in your App Store tab from your application view and check the Game Center field
6. Go to Services tab and configure both Leaderboards and Achievements
7. Go back to App Store tab and select you Leaderboards and Achievements configurations

## API

<docgen-index>

- [`signIn()`](#signin)
- [`showLeaderboard(...)`](#showleaderboard)
- [`submitScore(...)`](#submitscore)
- [`showAchievements()`](#showachievements)
- [`unlockAchievement(...)`](#unlockachievement)
- [`incrementAchievementProgress(...)`](#incrementachievementprogress)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### signIn()

```typescript
signIn() => Promise<void>
```

- Method to sign-in a user

---

### showLeaderboard(...)

```typescript
showLeaderboard(options: { leaderboardID: string; }) => Promise<void>
```

- Method to display the Leaderboards

| Param         | Type                                    |
| ------------- | --------------------------------------- |
| **`options`** | <code>{ leaderboardID: string; }</code> |

---

### submitScore(...)

```typescript
submitScore(options: { leaderboardID: string; totalScoreAmount: number; }) => Promise<void>
```

- Method to submit a score to the Google Play Services SDK

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code>{ leaderboardID: string; totalScoreAmount: number; }</code> |

---

### showAchievements()

```typescript
showAchievements() => Promise<void>
```

- Method to display the Achievements view

---

### unlockAchievement(...)

```typescript
unlockAchievement(options: { achievementID: string; }) => Promise<void>
```

- Method to unlock an achievement

| Param         | Type                                    |
| ------------- | --------------------------------------- |
| **`options`** | <code>{ achievementID: string; }</code> |

---

### incrementAchievementProgress(...)

```typescript
incrementAchievementProgress(options: { achievementID: string; pointsToIncrement: number; }) => Promise<void>
```

- Method to increment the progress of an achievement

| Param         | Type                                                               |
| ------------- | ------------------------------------------------------------------ |
| **`options`** | <code>{ achievementID: string; pointsToIncrement: number; }</code> |

---

</docgen-api>
