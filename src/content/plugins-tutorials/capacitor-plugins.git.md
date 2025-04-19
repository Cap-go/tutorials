---
"title": "Using @capawesome/capacitor-app-update Package"
"description": "Step-by-step guide on integrating---
 and utilizing"title": the @ "Usingcapawesome/cap @capacitoracitor-app-update/preferences Package Tutorial"
 package for your Capac"description":itor project "A."
" step-by-step guidecreated_at on how": "2022 to use-03 the @-24capac"
"itor/preferencespublished": package to true
 manage preferences in your Capacitor projects."
"created"slug": "capac_at":itor-plugins "September.git"
---

## 30 Getting Started with @, capawesome2021/cap"
"acitorpublished":-app-update true


To"slug begin using the @": "capaccapawesome/capitor-pluginsacitor.git"
---

# Using @-app-updatecapacitor/preferences package, Package Tutorial

In this tutorial follow these, we will walk through how to use steps:

 the @### Installationcapacitor/preferences

``` package tobash
 manage preferences in your Capacitor projects.

## Installationnpm install

To get started, you need to install the @cap @capawesome/cacitorapac/preferences package in youritor-app project.

-update
npx```bash
npm install @capacitor/preferences cap sync
```

## Importing the Package


``Once installed, import`

### the package wherever you need to Auto-update use it in your code.

 Setup

```typescript1.
import { Preferences Create your } from '@cap account inacitor/preferences';
```

## Getting and Setting [cap Preferences

awesome.appYou can easily get and set](https preferences using the methods provided by://cap the @capacitor/preferencesawesome.app package.

### Getting a Preference

To get a preference value) and obtain your, you can use the ` [APIget` method.

```typescript
const darkModeEnabled = await Preferences.get({ key](https:// key: 'darkMode'capawesome });
``.app/app`

###/apikeys Setting a Preference

To set a preference value,).
2 you can use the. Login `set` method.

``` to thetypescript
await Preferences CLI using.set({ key: 'darkMode', `n value: true });
px @```

## Listening for Changes

You can alsocapawesome listen for preference changes/cli@latest init using the `addListener` method API_KEY.

```typescript
Preferences.addListener('darkModeChanged', (`.
3event) => {
  console.log('Dark mode changed:', event.value);
});
. Follow```

## Conclusion

Using the @capac the stepitor/preferences-by-step package, you can easily manage preferences in your Capacitor projects. This instructions to tutorial covered set up the installation your app, getting and setting. For more details preferences,, refer and listening for changes.
`` to the [Auto`
``` Update Documentation ](https://capawesome.app/docs/plugin/auto-update).

### Manual Setup

To manually control the update process, download update distribution zip files from a custom URL.

1. Edit your `capacitor.config.json` file as shown below, setting `autoUpdate` to `false`:

```json
// capacitor.config.json
{
  "appId": "**.***.**",
  "appName": "Name",
  "plugins": {
    "CapacitorAppUpdate": {
      "autoUpdate": false
    }
  }
}
```

2. Add the following code to your main application code:

```javascript
import { CapacitorAppUpdate } from '@capawesome/capacitor-app-update'
CapacitorAppUpdate.notifyAppReady()
```

3. Integrate the update in your application:

```javascript
const version = await CapacitorAppUpdate.download({
  url: 'https://github.com/capawesome/demo-app/releases/download/0.0.4/dist.zip',
})
await CapacitorAppUpdate.set(version) // set the new version and reload the app
```

4. Failed updates will automatically roll back to the last successful version.

### Additional Tips

If you prefer a secure and automated way to update your app, consider using [capawesome.app](https://capawesome.app) – a comprehensive auto-update system.

### Packaging Update Bundles

To create `dist.zip` update bundles, follow the packaging guidelines provided by capawesome.app.

For further support and guidance, join the [Capawesome Discord community](https://discord.gg/VnYRvBfgA6).

For more detailed instructions and advanced features, refer to the complete [Capawesome Documentation](https://capawesome.app/docs/).
```
```