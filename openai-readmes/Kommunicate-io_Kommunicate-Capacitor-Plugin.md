## Kommunicate Capacitor Chat Plugin for Customer Support https://www.kommunicate.io/

Open Source Capacitor Live Chat SDK for Ionic apps

## Overview

Kommunicate provides open source live chat sdk in capacitor which works with both Ionic apps. Kommunicate lets you add real time live chat, in-app messaging and bot integration in your mobile applications and website for customer support.

Signup at [https://dashboard.kommunicate.io/signup](https://dashboard.kommunicate.io/signup?utm_source=github&utm_medium=readme&utm_campaign=cordova) to get the Application ID.

## Installation

Add the plugin as below:

```
npm install capacitor-plugin-kommunicate
```

Since this plugin uses native modules for android and ios, add them as below. Ignore if the android and iOS modules exist in your project:

```
npx cap add android
npx cap add ios
```

### Android

Open the android module in android studio as below:

```
npx cap open android
```

Register the plugin in your `android/app/java/<App-Package>/MainActivity.java` file as below:

```java
@Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    registerPlugin(KommunicateCapacitorPlugin.class);
  }
```

### iOS

Navigate to `<Your-Project>/ios/App` directory and run the below command:

```
pod install
```

Open the iOS project in xcode as below:

```
npx cap open iOS
```

## Import the plugin

Import the plugin in the file where you would like to call the kommunicate functions as below:

```js
import { KommunicateCapacitorPlugin } from 'capacitor-plugin-kommunicate'
```

Now you can start calling the functions from `KommunicateCapacitorPlugin`.

> Note: After any code changes in your project's .ts or .js files, run the below commands:

```
  npm run build
  npx cap sync
```

> For Android and iOS run the project fron Android Studio and Xcode respectively. For web, use the command `ionic serve`.

## Launch conversation

Kommunicate provides conversationBuilder function to create and launch conversation directly saving you the extra steps of authentication, creation, initialization and launch. You can customize the process by building the conversationObject according to your requirements.
To launch the conversation you need to create a conversation object. This object is passed to the `conversationBuilder` function and based on the parameters of the object the conversation is created/launched.

### Launch conversation for visitor:

If you would like to launch the conversation directly without the visiting user entering any details, then use the method as below:

```js
let conversationObject = {
  appId: '<Your-App-Id>',
}

KommunicateCapacitorPlugin.buildConversation(conversationObject)
  .then((res) => {
    console.log('Conversation builder success : ' + JSON.stringify(res))
  })
  .catch((error) => {
    console.log('Conversation builder error : ' + error)
  })
```

### Launch conversation for visitor with lead collection:

If you need the user to fill in details like phone number, emailId and name before starting the support chat then launch the conversation with `withPreChat` flag as `true`. In this case you wouldn't need to pass the kmUser. A screen would open up for the user asking for details like emailId, phone number and name. Once the user fills the valid details (atleast emailId or phone number is required), the conversation would be launched. Use the function as below:

```js
let conversationObject = {
  appId: '<Your-App-Id>',
  withPreChat: true,
}

KommunicateCapacitorPlugin.buildConversation(conversationObject)
  .then((res) => {
    console.log('Conversation builder success : ' + JSON.stringify(res))
  })
  .catch((error) => {
    console.log('Conversation builder error : ' + error)
  })
```

### Launch conversation with existing user:

If you already have the user details then create a KMUser object using the details and launch the conversation. Use the method as below to create KMUser with already existing details:

```js
   let kmUser = {
      userId: "<userId>", //unique userId
      password: "<password>", //optional,
      displayName: "<displayName>" //optional
      imageLink: "" //optional
    };

   let conversationObject = {
      appId: '<Your-App-Id>',
      kmUser: JSON.stringify(kmUser)
    };

    KommunicateCapacitorPlugin.buildConversation(conversationObject).then((res) => {
      console.log("Conversation builder success : " + JSON.stringify(res))
    }).catch((error) => {
      console.log("Conversation builder error : " + error)
    });
```

Make sure to run the below commands after doing the code changes:

```
npm run build
npx cap sync
```

If you have a different use-case and would like to customize the conversation creation, user creation and conversation launch, you can use more parameters in the conversationObject.

Below are all the parameters you can use to customize the conversation according to your requirements:

| Parameter              |      Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------- | :-------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appId                  |     String      | The [APP_ID](https://dashboard.kommunicate.io/settings/install) obtained from kommunicate dashboard                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| kmUser                 |     KMUser      | Optional, Pass the details if you have the user details, ignore otherwise. The details you pass here are used **only the first time**, to login the user. These login details persists until the app is uninstalled or you call [logout](https://docs.kommunicate.io/docs/reactnative-logout).                                                                                                                                                                                                                                                |
| withPreChat            |     boolean     | Optional, Pass true if you would like the user to fill the details before starting the chat. If you have user details then you can pass false or ignore.                                                                                                                                                                                                                                                                                                                                                                                      |
| isSingleConversation   |     boolean     | Optional(true by default), Pass true if you would like to create only one conversation for every user. The next time user starts the chat the same conversation would open, false if you would like to create a new conversation everytime the user starts the chat. True is recommended for single chat                                                                                                                                                                                                                                      |
| metadata               |       Any       | Optional. This metadata if set will be sent with all the messages sent from that device. Also this metadata will be set to the conversations created from that device.                                                                                                                                                                                                                                                                                                                                                                        |
| agentIds               | Array of String | Optional, Pass the list of agents you want to add in this conversation. The agent ID is the email ID with which your agent is registered on Kommunicate. You may use this to add agents to the conversation while creating the conversation. Note that, conversation assignment will be done on the basis of the routing rules set in the [Conversation Rules section](https://dashboard.kommunicate.io/settings/conversation-rules). Adding agent ID here will only add the agents to the conversation and will not alter the routing rules. |
| botIds                 | Array of String | Optional, Pass the list of bots you want to add in this conversation. Go to [bots](https://dashboard.kommunicate.io/bot) -> Manage Bots -> Copy botID . Ignore if you haven't integrated any bots. You may use this to add any number of bots to the conversation while creating the conversation. Note that this has no effect on the conversation assignee, as the [Conversation Rules](https://dashboard.kommunicate.io/settings/conversation-rules) set forth in the Dashboard will prevail.                                              |
| conversationAssignee   |     String      | Optional, Pass either the agentId or botId. The conversation created will skip the routing rules and will be assigned to this agent or bot. You also need to pass the agentId in agentIds array or botId in the botIds array, if you are using the conversationAssignee parameter                                                                                                                                                                                                                                                             |
| teamId                 |     String      | Optional, Pass this teamId so that the conversation created will skip the routing rules and will be assigned to this team.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| clientConversationId   |     String      | Optional, Pass the unique id using which you can recognize the conversation. For e.g If you have a shopping app and each order has its specific conversation, the orderId of the order can be used as a clientConversationId. In this case everyId will have its specific conversation.                                                                                                                                                                                                                                                       |
| conversationTitle      |     String      | Optional, Pass the custom title for a conversation. Use this if you would like to display a custom title instead of the conversation assignee name.                                                                                                                                                                                                                                                                                                                                                                                           |
| createOnly             |     boolean     | Optional. Pass true if you need to create the conversation and not launch it. In this case you will receive the clientChannelKey of the created conversation in the success callback function.                                                                                                                                                                                                                                                                                                                                                |
| launchAndCreateIfEmpty |     boolean     | Optional. Pass true if you need to create the conversation only the first time. The conversation list will also appear to the user.                                                                                                                                                                                                                                                                                                                                                                                                           |

## Send data to bot platform

You can set the data you want to send to the bot platform by calling the `updateChatContext` method as below:

```js
  let chatContext = {
          'key': 'value',
          'objKey': {
            'objKey1' : 'objValue1',
            'objKey2' : 'objValue2'
          }
        };

  KommunicateCapacitorPlugin.updateChatContext(chatContext).then((res) => {
      console.log("Update chat context success : " + JSON.stringify(res))
    }).catch((error) => {
      console.log("Update chat context error : " + error)
    });
  }
```

## Update logged in user's details

You can update some details of the logged in user like displayName, imageUrl, metadata etc. Use the `updateUserDetail` method as below (Remove the fields from the userDetails object below, which you don't want to update):

```js
  let userDetails = {
          'displayName': '<New Name>',
          'imageLink': '<new-image-url>',
          'email': '<New-Email>',
          'contactNumber': '<New-Contact-Number>'
          'metadata': {
            'objKey1' : 'objValue1',
            'objKey2' : 'objValue2'
          }
        };

   KommunicateCapacitorPlugin.updateUserDetails(userDetails).then((res) => {
      console.log("Update user details success : " + JSON.stringify(res))
    }).catch((error) => {
      console.log("Update user details error : " + error)
    });
```

> Note: userId is a unique identifier of a kmUser object. It cannot be updated.

## Logout

You can call the logout method to logout the user from kommunicate. Use the method as below:

```js
KommunicateCapacitorPlugin.logout()
  .then((res) => {
    console.log('Logout success : ' + JSON.stringify(res))
  })
  .catch((error) => {
    console.log('Logout error : ' + error)
  })
```

## Push Notification setup:

### Android:

1.  Create your app on firebase and download the google-services.json file: https://console.firebase.google.com/project
2.  Copy the firebase server key and add it in Kommunicate dashboard under Developer -> Push notifications -> Android -> FCM/GCM Key
3.  Download the google-services.json file from firebase dashboard and paste it under your project/android/app/ directory
4.  Copy the KmFirebaseService file from here: https://github.com/Kommunicate-io/Kommunicate-Capacitor-Plugin/example/android/app/src/main/java/io/ionic/starter/KmFirebaseService.java and paste it under your project/android/app/src/main/java/ directory

5.  Add the below configurations in your AndroidManifest.xml file inside the <application tag:

```xml
        <service
            android:name="com.getcapacitor.CapacitorFirebaseMessagingService"
            tools:node="remove" />

        <service
            android:name="com.applozic.mobicomkit.uiwidgets.KmFirebaseMessagingService"
            tools:node="remove" />

        <service
            android:name=".KmFirebaseService"
            android:stopWithTask="false">
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT" />
            </intent-filter>
        </service>
```

6.  Add the below entry inside the <manifest tag in your AndroidManifest.xml file:
    ```xml
    xmlns:tools="http://schemas.android.com/tools"
    ```

### iOS:

1. Generate your debug and production certificates from your apple developer account and upload on Kommunicate dashboard.
2. Follow the steps from here to upload the certificates and add notification capabilities: https://docs.kommunicate.io/docs/ios-pushnotification#certificates
3. Download the KommunicateWrapper.swift file from here:
4. Add the KommunicateWrapper.swift file to the project target. Click on <YourProject> -> Add files to 'YourProject' -> Select the downloaded KommunicateWrapper.swift file

5. Do the below changes in your AppDelgate.swift file:
   a) Add import for UserNotifications:
   `import UserNotifications`

   b) implement the UNUserNotificationCenterDelegate:

   ```swift
   @UIApplicationMain
   class AppDelegate: UIResponder, UIApplicationDelegate, UNUserNotificationCenterDelegate {
   ```

   c) Call the KommunicateWrapper methods in the respective AppDelegate methods as below:

```swift
 func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
   // Override point for customization after application launch.
   UNUserNotificationCenter.current().delegate = self
   KommunicateWrapper.shared.application(application, didFinishLaunchingWithOptions: launchOptions)
   return true
 }

func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping       (UNNotificationPresentationOptions) -> Void) {
           KommunicateWrapper.shared.userNotificationCenter(center, willPresent: notification, withCompletionHandler: { options in
               completionHandler(options)
           })
   }

func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
           KommunicateWrapper.shared.userNotificationCenter(center, didReceive: response, withCompletionHandler: {
               completionHandler()
           })
       }

func applicationDidEnterBackground(_ application: UIApplication) {
   // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
   // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
   KommunicateWrapper.shared.applicationDidEnterBackground(application: application)
 }

func applicationWillEnterForeground(_ application: UIApplication) {
   // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
   KommunicateWrapper.shared.applicationDidEnterForeground(application: application)
   UIApplication.shared.applicationIconBadgeNumber = 0
 }

func applicationWillTerminate(_ application: UIApplication) {
   // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
   KommunicateWrapper.shared.applicationWillTerminate(application: application)
 }

func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
   NotificationCenter.default.post(name: Notification.Name(CAPNotifications.DidRegisterForRemoteNotificationsWithDeviceToken.name()), object: deviceToken)
   print("DEVICE_TOKEN_DATA :: \(deviceToken.description)") // (SWIFT = 3) : TOKEN PARSING
   KommunicateWrapper.shared.application(application, didRegisterForRemoteNotificationsWithDeviceToken: deviceToken)
 }
```

## Customizations:

### Android:

1. Copy the `applozic-settings.json` file from here: https://github.com/Kommunicate-io/Kommunicate-Capacitor-Plugin/example/android/app/src/main/assets/applozic-settings.json
   and paste it under project/android/app/src/main/assets/ directory.
2. See the customization options here: https://docs.kommunicate.io/docs/android-customization

iOS:

1. Add the KommunicateWrapper.swift file in the project as mentioned under Push notifications iOS steps 3 and 4 (Ignore if already added)
2. Add the call to KommunicateWrapper's didFinishLaunch method in AppDelegate's method as below(Ignore if already added):

```swift
 func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
   // Override point for customization after application launch.
   UNUserNotificationCenter.current().delegate = self
   KommunicateWrapper.shared.application(application, didFinishLaunchingWithOptions: launchOptions)
   return true
 }
```

3. Search for function `useCustomConfigurations()` in `KommunicateWrapper.swift` file and add the settings inside it.
   See the customization options here: https://docs.kommunicate.io/docs/ios-customization
4. Add `Localizable.strings` file in your project and add the below entry to it:
   ```
   ConversationListVCTitle = "Conversations";
   ```
