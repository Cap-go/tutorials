# Capacitor MSAL Plugin

This is an OAuth 2 client plugin for Capacitor. It uses the Microsoft Authentication Library (MSAL) to authenticate the user and acquire access tokens.

## Installing

```bash
npm install capacitor-msal
```

## Configuration

The `capacitor-msal` plugin needs to be imported into your application to register the plugin with Capacitor. In your app's entry point (such as `main.ts` in Angular applications), add the following line:

```ts
import 'capacitor-msal'
```

Once imported, the plugin needs to be initialized with app-specific values. In your initialization logic (such as `APP_INTIALIZER` in Angular), call the `Msal.init()` method. For example:

```ts
import { Plugins } from '@capacitor/core'
const { Msal } = Plugins

await Msal.init({
  auth: {
    clientId: 'YOUR_CLIENT_ID',
  },
})
```

The `init` method accepts all configuration options from [MSAL.js](https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options). Note that some options may not be supported on all platforms. The only required parameter is `clientId`.

### Web

The Web platform is implemented as a passthrough to MSAL.js. No extra configuration is needed.

### Electron

Once this plugin has been installed in your application, the Electron implementation needs to be installed into your Electron app as a dependency. Assuming your Electron app is one level below your root `package.json`, use the following command.

```bash
npm install ../node_modules/capacitor-msal/capacitor-msal-electron-<version>.tgz
```

The Electron plugin uses the native module `keytar` to securely store user refresh tokens. You will need a module that rebuilds native dependencies, such as `electron-rebuild` or `electron-builder`.

Next, the Electron implementation needs to be imported into your application as a preload script. This implementation is exported as ES Modules. The `esm` package is recommended to import this module.

Create a script (e.g. `preload.js`) with the following content.

```js
require = require('esm')(module, {
  mainFields: ['module'],
})

require('@capacitor/electron/dist/electron-bridge')
require('capacitor-msal-electron')
```

This will run in the renderer process to add Msal to the Capacitor Plugins proxy.

Add the newly created script to the main window as a preload script. For example,

```js
mainWindow = new BrowserWindow({
  height: 920,
  width: 1600,
  show: false,
  webPreferences: {
    nodeIntegration: true,
    preload: path.join(__dirname, 'preload.js'),
  },
})
```

Finally, the plugin needs to be added to the main process. A custom logger can be used to capture debug information from the plugin. The module `electron-log` is recommended.

```js
const logger = require('electron-log')
const { CapacitorMsal } = require('capacitor-msal-electron')

const msal = new CapacitorMsal(logger)
msal.init()
```

The configuration file `capacitor.config.json` is required to use this plugin. The `appId` specified in this file will be used as the storage key for refresh tokens. Additionally,`auth` configuration options can be specified in this file. Options specified here will override the options specified in the `init` method. For example:

```json
{
  "appId": "YOUR_APP_ID",
  "plugins": {
    "Msal": {
      "redirectUri": "https://login.microsoftonline.com/common/oauth2/nativeclient"
    }
  }
}
```

#### Proxy Settings

This plugin internally uses `electron-fetch` to access the token endpoint, and an Electron `BrowserWindow` is used to access the authorize endpoint. Both of these components use Chromium and its underlying network operations. As a result, this plugin will automatically use system-wide proxy settings without any additional configuration.

### Android

Coming soon&trade;

### iOS

Coming soon&trade;
