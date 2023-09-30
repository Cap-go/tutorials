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

Capacitor plugin for connecting and using services by Apple Game Center and Google Play Game Services. Features included are access to Sign-In, Leaderboard, and Achievements.

---

| Capacitor Version | Support Status |
| ----------------- | :------------: |
| Capacitor v5      |       🚧       |
| Capacitor v4      |       ✅       |
| Capacitor v3      |       ✅       |
| Capacitor v2      |       🚧       |
| Capacitor v1      |       🚧       |

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

# @openforge/capacitor-game-connect

A native capacitor plugin to connect to Game Services for iOS and Android

# Getting Started

## Install

```bash
npm install @openforge/capacitor-game-connect
npx cap sync
```

## Additional Code Setup

## Android

In order to use the plugin, you need to make sure to include this meta-data tag in your `AndroidManifest.xml` file of your app:

```xml
<meta-data android:name="com.google.android.gms.games.APP_ID" android:value="@string/game_services_project_id"/>
```

Then you need to set your Game Services Project ID in your `strings.xml` file inside your `app/src/main/res/values.xml`:

```xml
<string translatable="false"  name="game_services_project_id">YOU_APP_ID</string>
```

- Then on your `MainActivity.class` file you will need to import and register the plugin in your onCreate method:

```ts
@Override
public void onCreate(Bundle savedInstanceState) {
    registerPlugin(CapacitorGameConnectPlugin.class);
    super.onCreate(savedInstanceState);
}
```

## Setup for Android

Follow this guide to configure correctly your Google Play Console to be able to use the Capacitor Game Connect plugin:

1. Go to your [Google Play Console](https://play.google.com/console)
2. If you don't have an app created, create one as a Game.
3. Go to Play Games Services under Grow section.
   - Cick Configuration
   - Select the option 'No, my game doesn’t use Google APIs', set a name and click Create.
4. Let's create a OAuth consent screen in Google Cloud Platform:
   - Go to your [Google Cloud Platform](https://console.cloud.google.com/). Make sure you have selected the correct app you want to create the OAuth consent screen.
   - Go to APIs & Services section, then in the sidebar click on OAuth consent screen
   - Choose your User Type (External or Internal) and click Create.
   - Fill the App Informationn required filds and then click on Save and Continue button at the bottom.
   - On the Scopes tab, click on Add or remove scopes and in the Search box type the following:
     - `auth/games` and click enter.
     - Select the two options that appears. `.../auth/games` and `./auth/games_lite`
     - Then start a new search and type `drive.appdata` and select the option showed.
     - Click the Update button.
     - Click Save and Continue button at the bottom.
   - Let's add your Test Users. \*\* This will be super important because your Google Play Services will only work with these users while is not into Production
     - Click Add Users button and type your users email.
     - Click Add.
     - Click Save and Continue button.
   - And that's all! Click on Back to Dashboard button and then click on Publish App button to finish creating your OAuth consent screen.
   - If you want to modify you information there, simple click on Back To Testing button and then click on Edit App at the top.
5. Back to your Google Play Console
6. In the Credentials section, click on Add Credential
   - Select the Type "Android"
   - Fill the other options
   - On the Authorization section, click Create OAuth client.
     - In the Popup that has been displayed, click on the `Create OAuth Client ID` link attached. This will be open a new window redirecting to the Google Cloud Platform Credentials section.
     - Select the Application Type. Should be Android.
     - Name your OAuth 2.0 client
     - Type your package name of your application.
     - Run the following command in your terminal:
       - `keytool -keystore path-to-debug-or-production-keystore -list -v`
       - If you don't have your keystore created yet, you can follow [this link](https://developer.android.com/studio/publish/app-signing#generate-key) to create it.
       - Once you get your SHA-1 certificate fingerprint, copy and paste it into the required field.
       - Click Create and then back to your Google Play Console.
   - Now that you have completed created your Credential ID, click in the dropdown option and select the one you have created.
   - Click Save Changes button at the bottom.
7. Back to your configurations and click Review and Publish button at the top.
   - Review if there are Actions Required to complete and fill them.

## Creating Achievements on Android

Before use the `Achievement Methods` of the plugin, you need to setup your Achievements and Leaderboards in your Google Play Console following the next steps:

1. Navigate to your Google Play Console portal and select your app.
2. On the sidebar, go to Grow section and then Setup and management
3. Click Leaderboards and configure it by filling the fields. Then click save and publish your changes
4. Click Achievements and configure it by filling the fields. Then click save and publish your changes
5. Make sure all your changes are published by going to the Publishing section.

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

# Testing Limitations

### Android

In order to fully test the integrated functionality it is required to have a physical Android device. Trying to connect to these specific Google Play Services through Android Studio Emulator/Simulator will not work.
