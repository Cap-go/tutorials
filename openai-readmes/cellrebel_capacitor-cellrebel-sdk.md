# capacitor-cellrebel-sdk

Capacitor plugin for CellRebelSDK

## Install

To install CellRebelSDK run `npm install` and `npm cap sync` command at the root of your Ionic project

```bash
npm install capacitor-cellrebel-sdk
npx cap sync
```

## Usage

In your application entry point import CellRebelSDK module and run `init` method using your unique CLIENT_KEY string as clientKey value:

```js
import { CellRebelSDK } from 'capacitor-cellrebel-sdk'

// ...

CellRebelSDK.init({ clientKey: 'CLIENT_KEY' })
```

Use `startTracking` to start measurement. On the first launch it's best to call this method after user response on location permission dialog. During the next sessions this method should be called when application finished launching:

```js
CellRebelSDK.startTracking()
```

In some (rare) cases, if very high load tasks need to be performed, `stopTracking` can be used to abort an ongoing measurement sequence:

```js
CellRebelSDK.stopTracking()
```

Calling `clearUserData` will deinitialize CellRebelSDK and remove all local data. `init` method should be called before using CellRebelSDK again.

## Demo project

https://github.com/cellrebel/capacitor-cellrebel-sdk/tree/main/example
