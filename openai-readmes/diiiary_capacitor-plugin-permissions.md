# capacitor-plugin-permissions

Capacitor permissions request and management plugin

Supported Permissions:

- Camera
- Photo Library
- Notification
- Location \*
- Location Always \*

## Process:

- ✅[ios] requestPermission(options: {permission: string}), checkStatus(options: {permission: string})
- ☑️[Android] need your help! please submit your changes, I will merge and publish

## Install

```
npm install capacitor-plugin-permissions
npx cap sync
```

## contants

```javascript
const PERMISSIONS = [
  'CAMERA',
  'PHOTO_LIBRARY',
  'NOTIFICATION',
  'LOCATION_WHEN_IN_USE',
  'LOCATION_ALWAYS'
];

const PERMISSION_STATUS = []
  "CAMERA/AUTHORIZED",
  "CAMERA/DENIED",
  "CAMERA/NOT_DETERMINED",
  'PHOTO_LIBRARY/AUTHORIZED',
  'PHOTO_LIBRARY/DENIED',
  'PHOTO_LIBRARY/NOT_DETERMINED',
  'NOTIFICATION/AUTHORIZED',
  'NOTIFICATION/DENIED',
  'NOTIFICATION/NOT_DETERMINED',
  'LOCATION/AUTHORIZED_WHEN_IN_USE',
  'LOCATION/AUTHORIZED_ALWAY',
  'LOCATION/DENIED',
  'LOCATION/NOT_DETERMINED'
];
```

## Methods

### requestPermission

Request permissions

```javascript
const response: {
  status: string
} = await Capacitor.Plugins.PhotoLibrary.requestPermission({
  permission: "CAMERA"
});
```

### checkStatus

Request permissions

```javascript
const response: {
  status: string
} = await Capacitor.Plugins.PhotoLibrary.checkStatus({
  permission: "CAMERA"
});
```

## Licence

MIT

## Thank you!
