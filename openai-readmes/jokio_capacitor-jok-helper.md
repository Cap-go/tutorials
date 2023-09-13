Add this code in `AppDelegate.swift`-> `func application(_ application: UIApplication, supportedInterfaceOrientationsFor window: UIWindow?) -> UIInterfaceOrientationMask`

```swift
    NotificationCenter.default.addObserver(forName: Notification.Name("getPushNotificationsStateRequest"), object: nil, queue: OperationQueue.main) { (notification) in


        let status: OSPermissionSubscriptionState = OneSignal.getPermissionSubscriptionState()

        let hasPrompted = status.permissionStatus.hasPrompted
        let userStatus = status.permissionStatus.status

        let isSubscribed = status.subscriptionStatus.subscribed
        let userSubscriptionSetting = status.subscriptionStatus.userSubscriptionSetting
        let userId = status.subscriptionStatus.userId
        let pushToken = status.subscriptionStatus.pushToken

        NotificationCenter.default.post(name: Notification.Name("getPushNotificationsStateResult"), object: nil, userInfo: [
                "hasPrompted": hasPrompted,
                "userStatus": userStatus.rawValue,
                "isSubscribed": isSubscribed,
                "userSubscriptionSetting": userSubscriptionSetting,
                "userId": userId,
                "pushToken": pushToken
            ]
        )


    }


    NotificationCenter.default.addObserver(forName: Notification.Name("askPushNotificationsPermissionRequest"), object: nil, queue: OperationQueue.main) { (notification) in

        OneSignal.promptForPushNotifications(userResponse: { accepted in

            NotificationCenter.default.post(name: Notification.Name("askPushNotificationsPermissionResult"), object: nil, userInfo: [
                    "accepted": accepted
                ]
            )
        })
    }

    NotificationCenter.default.addObserver(forName: Notification.Name("SET_ORIENTATION_LOCK"), object: nil, queue: OperationQueue.main) { (notification) in

        if let data = notification.userInfo as? [String: Any]
        {
            self.orientationLock = (data["orientationLock"] ?? UIInterfaceOrientationMask.all) as! UIInterfaceOrientationMask

            let preferredOrientation = (data["preferredOrientation"] ?? UIInterfaceOrientation.unknown) as! UIInterfaceOrientation


            var value = preferredOrientation.rawValue

            if (self.orientationLock == UIInterfaceOrientationMask.portrait && preferredOrientation == UIInterfaceOrientation.unknown) {
                value = UIInterfaceOrientation.portrait.rawValue
            }

            if (self.orientationLock == UIInterfaceOrientationMask.landscape && preferredOrientation == UIInterfaceOrientation.unknown) {
                value = UIInterfaceOrientation.landscapeRight.rawValue
            }

            // change orientation also, if preferredOrientation was passed
            if (value != UIInterfaceOrientation.unknown.rawValue) {
                UIDevice.current.setValue(value, forKey: "orientation")
                UINavigationController.attemptRotationToDeviceOrientation()
            }
        }
    }

```

Add variable in `AppDelegate` class

```swift
   public var orientationLock: UIInterfaceOrientationMask = UIInterfaceOrientationMask.portrait
```

Create `CustomCAPBridgeViewController.swift` file

```swift
import Foundation
import Capacitor

public class CustomCAPBridgeViewController : CAPBridgeViewController {

        override public func viewWillTransition(to size: CGSize, with coordinator: UIViewControllerTransitionCoordinator) {

            NotificationCenter.default.post(name: Notification.Name("ORIENTATION_CHANGE"), object: nil, userInfo: [
                "isLandscape": UIDevice.current.orientation.isLandscape,
                "isPortrait": UIDevice.current.orientation.isPortrait,
                "isFlat":UIDevice.current.orientation.isFlat,
                "rawValue": UIDevice.current.orientation.rawValue,
                ]
            )
        }

}
```
