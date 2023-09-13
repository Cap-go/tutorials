# [Capacitor-iOS-IDFA-App-Tracking](https://github.com/Mindcurv/capacitor-idfa-ios-app-tracking.git)

Capacitor-IDFA-iOS-App-Tracking is a native AppTrackingTransparency implementation for iOS 14. Now you can use this package as a [Ionic Capacitor](https://capacitor.ionicframework.com) Plugin in your App.

<!-- Badges -->
<a href="https://npmjs.com/package/capacitor-idfa-ios-app-tracking">
  <img src="https://badgen.net/npm/v/capacitor-idfa-ios-app-tracking">
</a>
<a href="https://npmjs.com/package/capacitor-idfa-ios-app-tracking">
  <img src="https://badgen.net/npm/dt/capacitor-idfa-ios-app-tracking">
</a>
<a href="https://www.npmjs.com/package/capacitor-idfa-ios-app-tracking">
  <img src="https://badgen.net/npm/license/capacitor-idfa-ios-app-tracking">
</a>

## Release Note:

### v1.0.2

- Implemented iOS 14 IDFA AppTrackingTransparency.

## Supported Platform:

- [x] iOS

## Supported methods

| Name              |
| :---------------- |
| getTrackingStatus |
| requestPermission |

## Installation

Use **Capacitor-IDFA-iOS-App-Tracking** plugins in your app.

```console
 npm install --save capacitor-idfa-ios-app-tracking
 ionic cap update
```

## iOS

### Update **Info.plist**

Open your **App/App/Info.plist** file and add this `plist value` line at the right spot (and replace the value with the message for the user!):

```xml
<key>NSUserTrackingUsageDescription</key>
<!-- replace this value with your message-->
<string>Message to Users.</string>
```

## Example

```typescript
import React, { useEffect } from "react"
import { Plugins } from "@capacitor/core";
import { Response } from 'capacitor-idfa-ios-app-tracking'

const { IOSAppTracking } = Plugins;

const App: React.FC = () => {
  const [ response, setResponse ] = useState<Response>()

  useEffect(() => {
    IOSAppTracking.getTrackingStatus().then((res: Response ) => setResponse(res))
  }, [])

  useEffect(() => {
    if(response.status === 'unrequested') {
      IOSAppTracking.requestPermission().then((res: Response) => console.log(res))
    }
  }, [response])

 ...
}
```

### getTrackingStatus()

```typescript
IOSAppTracking.getTrackingStatus().then((res: Response) => console.log(res))
```

### requestPermission()

```typescript
IOSAppTracking.requestPermission().then((res: Response) => console.log(res))
```

### Response

```typescript
interface Response {
  value: string
  status: Status
}
```

### Status

```typescript
type Status = 'authorized' | 'denied' | 'unrequested' | 'restricted'
```

## License

Capacitor-IDFA-iOS-App-Tracking is MIT licensed.
