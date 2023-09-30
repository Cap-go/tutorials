# Get App Info Plugin

A Capacitor plugin to get the icon and label of an app based on its package name. Same as [https://github.com/esartor/cordova-plugin-get-app-info](https://github.com/esartor/cordova-plugin-get-app-info) but made for Capacitor. <br/>
Wanna be practical? check it out in usage [here](https://github.com/dotnetdreamer/notifier).

## Install

```
npm i capacitor-plugin-get-app-info
npx cap sync

```

Register this plugin using add(capacitor.plugin.get.app.info.GetAppInfo.class) in your MainActivity.java like in the following example:

```
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Put it here!
    add(capacitor.plugin.get.app.info.GetAppInfo.class);
    }});
```

## Usage

```
import { Plugins } from '@capacitor/core';
const { GetAppInfo } = Plugins;
//import typing
import { GetAppInfoPlugin } from 'capacitor-plugin-get-app-info';

```

and now get the icon(Base64 string) or app name

```
//icon
try {
    const imgRslt = await (<GetAppInfoPlugin>GetAppInfo).getAppIcon({
        packageName: e.package
    });
    if(imgRslt.value) {
        e.image = imgRslt.value;
    }
} catch(e) {
    //ignore...
}

//app name
try {
    const appName = await (<GetAppInfoPlugin>GetAppInfo).getAppLabel({
        packageName: e.package
    });
    if(appName.value) {
        e.appName = appName.value;
    }
} catch(e) {
    //ignore...
}

    //launch app
    try {
        await (<GetAppInfoPlugin>GetAppInfo).launchApp({
            packageName: 'com.packagename.tolaunch'
        });
    } catch(e) {
        //handle error
    }

    let canLaunchApp = true;
    try {
        await (<GetAppInfoPlugin>GetAppInfo).canLaunchApp({
            packageName: 'com.packagename.tolaunch'
        });
    } catch(e) {
        canLaunchApp = false;
    }

    //get all available apps
    try {
      const result = await (<GetAppInfoPlugin>GetAppInfo).getAvailableApps();
      const apps = <any[]>JSON.parse(result.applications);
    } catch(e) {
      this.helperSvc.presentToastGenericError();
    }
```

## Supported platforms

- Android

## License

MIT
