# App Tracking Transparency Capacitor Ionic Plugin

<a href="https://www.npmjs.com/package/app-tracking-transparency-capacitor-ionic"><img src="https://img.shields.io/npm/l/app-tracking-transparency-capacitor-ionic?style=flat-square" /></a>
<a href="https://www.npmjs.com/package/app-tracking-transparency-capacitor-ionic"><img src="https://img.shields.io/npm/dw/app-tracking-transparency-capacitor-ionic?style=flat-square" /></a>
<a href="https://www.npmjs.com/package/app-tracking-transparency-capacitor-ionic"><img src="https://img.shields.io/npm/v/app-tracking-transparency-capacitor-ionic?style=flat-square" /></a>

Capacitor plugin to request user authorization to access app-related data for tracking the user or the device. iOS only.

Read more about Apple's App Tracking Transparency framework [here](https://developer.apple.com/documentation/apptrackingtransparency). Also [this](https://developer.apple.com/app-store/user-privacy-and-data-use/) might be a good read.

## Platform support

iOS only but with web fallback for development purposes.

## Plugin versions

| Capacitor version | Plugin version                                    |
| ---------- | ----------------------------------------- |
| 5.x | >= 2.0.2 |
| 4.x | >= 2.0.2 |
| 3.x | >= 2.0.0 |
| < 3.0.0 | 1.x.x |

 
 
## Install

```bash
npm install app-tracking-transparency-capacitor-ionic
npx cap sync
```

## Configuration

Add this to your app's Info.plist and update the message according to your needs:

```xml
<key>NSUserTrackingUsageDescription</key>
<string>Your data will be used to deliver personalized ads to you.</string>
```

This message can be provided in multiple languages by using a `InfoPlist.strings` file. See the [Apple docs](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/AboutInformationPropertyListFiles.html) or [this stack overflow answer](https://stackoverflow.com/a/25736915) for help.

## Usage
# In Vue >

```typescript
<script>
import {
  AppTrackingTransparency,
  AppTrackingStatusResponse,
} from 'app-tracking-transparency-capacitor-ionic';

export default {
  async mounted() {
    requestPermission(); 
  },
};

async function requestPermission() {
  try {
    const response = await AppTrackingTransparency.requestPermission();
    console.log(response); // { status: 'authorized' } for example
    status.value = response;
  } catch (error) {
    console.error('Error requesting permission:', error);
  }
}



async function getStatus() {
  try {
    const response = await AppTrackingTransparency.getStatus();
    console.log(response); // { status: 'authorized' } for example
    status.value = response;
  } catch (error) {
    console.error('Error getting status:', error);
  }
}
</script>
```

# In Angular 

```typescript
import {
  AppTrackingTransparency,
  AppTrackingStatusResponse,
} from 'app-tracking-transparency-capacitor-ionic';

...

public async getStatus(): Promise<AppTrackingStatusResponse> {
  const response = await AppTrackingTransparency.getStatus();

  console.log(response);
  // { status: 'authorized' } for example

  return response;
}

public async requestPermission(): Promise<AppTrackingStatusResponse> {
  const response = await AppTrackingTransparency.requestPermission();

  console.log(response);
  // { status: 'authorized' } for example

  return response;
}
```

Both available methods return `AppTrackingStatusResponse` with `status: AppTrackingStatus`, which will be one of the following: `authorized`, `denied`, `notDetermined` or `restricted`. See [Apple's docs](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/authorizationstatus) for reference.

## API

<docgen-index>

* [`getStatus()`](#getstatus)
* [`requestPermission()`](#requestpermission)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getStatus()

```typescript
getStatus() => Promise<AppTrackingStatusResponse>
```

**Returns:** <code>Promise&lt;<a href="#apptrackingstatusresponse">AppTrackingStatusResponse</a>&gt;</code>

--------------------


### requestPermission()

```typescript
requestPermission() => Promise<AppTrackingStatusResponse>
```

**Returns:** <code>Promise&lt;<a href="#apptrackingstatusresponse">AppTrackingStatusResponse</a>&gt;</code>

--------------------


### Type Aliases


#### AppTrackingStatusResponse

<code>{ status: <a href="#apptrackingstatus">AppTrackingStatus</a> }</code>


#### AppTrackingStatus

<code>'authorized' | 'denied' | 'notDetermined' | 'restricted'</code>

</docgen-api>
