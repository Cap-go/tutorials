# Capacitor Google Analytics

A Capacitor plugin that enables the new data streams in Google Analytics and Firebase analytics.

:warning: This plugin is still under development. Use at your own risk. I am actively developing it. Check back for updates or feel free to contribute.

## Special Thanks

A special thanks to philmerrell as a starting point for this plugin. It appears that they are no longer able to maintain their plugin https://github.com/philmerrell/capacitor-firebase-analytics this is why I create this.

## Compatability

Currently compatible with Android. Will be compatible with iOS and Web/PWA on or about 10/29/2019.

#### Android

Available - Testing

#### iOS

Available - Testing

#### Web/PWA

Available - Testing

## Getting Started

### Create Google/Firebase Analytics Account

To get started visit https://analytics.google.com.

1. Create new account.
2. Set Account Details.
3. Select Apps and Web.
4. Select Next
5. After the account is created you should see "Setup data stream to start collecting data".

### Android Setup

#### Google Analytics Setup

1. Select Android app.
2. Add package name.
3. Add app name.
4. Agree to terms.
5. Register app.
6. After registering the app Google Analytics will configure a Firebase/Google Cloud project associated with your app.
7. Once this is complete select next.
8. Download the google-services.json

#### Ionic 4 Setup

1. Add the Capacitor Google Analytics plugin to your project.
   ```javascript
   npm install capacitor-google-analytics
   ```
2. Add the plugin to any components or services you want to expose the the methods.

   ```typescript
   import { CapacitorGoogleAnalytics } from 'capacitor-google-analytics'

   @Component({
     selector: 'app-root',
     templateUrl: 'app.component.html',
     styleUrls: ['app.component.scss'],
   })
   export class AppComponent {
     constructor() {}

     public async logEvent() {
       try {
         const event = { someLabel: 'someValue' }
         const didLogEvent = await CapacitorGoogleAnalytics.logEvent('someEvent', event)
       } catch (err) {
         throw new Error(err)
       }
     }
   }
   ```

3. Build your project.
   ```javascript
   ionic build --platform=android
   ```
4. Add Android to your project.
   ```javascript
   ionic cap add android
   ```
5. Sync Android with your project (This will actually run on step three. If you already added Android you can skip three and just run this.)
   ```javascript
   ionic cap sync android
   ```
6. Open your project in Android Studio
   ```javascript
   ionic cap open android
   ```

#### Android Studio Setup

7. Once you are in Android Studio switch to Project view.
8. In the Project level build.gradle add the following to dependencies
   ```java
   classpath 'com.google.gms:google-services:4.2.0'
   ```
9. a) In the App level build.gradle add the following to dependencies

   ```java
   implementation 'com.google.firebase:firebase-core:17.0.0'
   ```

10. b) Ionic 4 notes. If you're using Ionic 4 change the snippets versions to:

    ```java
    implementation 'com.google.firebase:firebase-core:16.0.7'
    implementation 'com.google.firebase:firebase-analytics:16.3.0'
    ```

11. In the same file add the following to the bottom of the file.

    ```java
    apply plugin: 'com.google.gms.google-services'
    ```

12. Sync Project

### iOS Setup

#### Google Analytics Setup

1. Select iOS app.
2. Add package name.
3. Add app name.
4. Agree to terms.
5. Register app.
6. After registering the app Google Analytics will configure a Firebase/Google Cloud project associated with your app.
7. Once this is complete select next.
8. Download the google-services.json

#### Ionic 4 Setup

1. Add the Capacitor Google Analytics plugin to your project.
   ```javascript
   npm install capacitor-google-analytics
   ```
2. Add the plugin to any components or services you want to expose the the methods.

   ```typescript
   import { CapacitorGoogleAnalytics } from 'capacitor-google-analytics'

   @Component({
     selector: 'app-root',
     templateUrl: 'app.component.html',
     styleUrls: ['app.component.scss'],
   })
   export class AppComponent {
     constructor() {}

     public async logEvent() {
       try {
         const event = { someLabel: 'someValue' }
         const didLogEvent = await CapacitorGoogleAnalytics.logEvent('someEvent', event)
       } catch (err) {
         throw new Error(err)
       }
     }
   }
   ```

3. Build your project.
   ```javascript
   ionic build --platform=ios
   ```
4. Add iOS to your project.
   ```javascript
   ionic cap add ios
   ```
5. Sync iOS with your project (This will actually run on step three. If you already added Android you can skip three and just run this.)
   ```javascript
   ionic cap sync ios
   ```
6. Open your project in Xcode
   ```javascript
   ionic cap open ios
   ```

#### Xcode Setup

7. Once you are in Xcode select the Project Navigator Icon
8. Expand App then right click the App Folder beneath the first App
9. Select Add Files to "App"
10. Select the GoogleService-Info.plist file and then select App below.
11. You should now be able to build the app as normal.

### Web/PWA Setup

Documentation coming soon. In order to get web working add a firebaseConfig in the AppComponent and call the initializeApp method. You can find the config values after you create a web project in Google Analytics then visiting Firebase -> Project Setup.

I will provide more detailed information soon. Below is an example.

```typescript
import { CapacitorGoogleAnalytics } from 'capacitor-google-analytics';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  private firebaseConfig: any = {
    apiKey: "xxxx",
    authDomain: "xxxx",
    databaseURL: "xxxx",
    projectId: "xxxx",
    storageBucket: "xxxx",
    messagingSenderId: "xxxx",
    appId: "xxxx",
    measurementId: "xxxx"
  };

  constructor() {}

  async initializeApp() {
    CapacitorGoogleAnalytics.initializeApp({ config: this.firebaseConfig });
  }

```

## Usage

**logEvent()** - Events provide insight on what is happening in your app, such as user actions, system events, or errors.

Parameters

| key        | value  | example                 |
| ---------- | ------ | ----------------------- |
| name       | string | 'goal_completion'       |
| parameters | object | { name: 'lever_puzzle'} |

```typescript
logEvent(options: { name: string, parameters: object }): Promise<void>;
```

**setUserProperty()** - User properties are attributes you define to describe segments of your user base, such as language preference or geographic location.

Parameters

| key   | value  | example       |
| ----- | ------ | ------------- |
| name  | string | favorite_food |
| value | string | 'apples'      |

```typescript
setUserProperty(options: { value: string, name: string }): Promise<void>;
```

**setUserId()** - Google Analytics has a setUserID call, which allows you to store a user ID for the individual using your app.

Parameters

| key    | value  | example  |
| ------ | ------ | -------- |
| userId | string | '123456' |

```typescript
setUserId(options: { userId: string }): Promise<void>;
```

**setCurrentScreen()** - Google Analytics tracks screen transitions and attaches information about the current screen to events, enabling you to track metrics such as user engagement or user behavior per screen.

Parameters

| key                 | value  | example |
| ------------------- | ------ | ------- |
| screenName          | string | 'login' |
| screenClassOverride | string | null    |

```typescript
setCurrentScreen(options: { screenName: string, screenClassOverride?: string }): Promise<void>;
```

**getAppInstanceId()**

```typescript
getAppInstanceId(): Promise<{appInstanceId: string}>;
```

**resetAnalyticsData()**

```typescript
resetAnalyticsData(): Promise<void>;
```
