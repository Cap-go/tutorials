# capacitor-webview-cache-cleaner-plugin


**This plugin will not work with Capacitor versions below 6.0.0**  

iOS has its own method of managing cache and cookies at the OS level for different domains and URLs: both your WebViews and in-app browsers can be affected by this.

Even on Android, it can sometimes be beneficial to perform a thorough flush.  

This plugin helps you completely flush all caches and cookies related to your Capacitor application. It's especially useful during a deep logout with third-party URLs, such as Keycloak.

## Install

```bash
npm install capacitor-webview-cache-cleaner-plugin
npx cap sync
```

## Examples


I recommend something like:

```typescript
import { CapacitorWebviewCacheCleaner } from 'capacitor-webview-cache-cleaner-plugin';

// ...

if (/* some custom conditional matching the moment you want to flush */) {
    if (this.capacitor.getPlatform() === 'ios') {
      await CapacitorWebviewCacheCleaner.clearWebViewCache();
    }
}
```

For instance, in my case, an automatically injected Keycloak configuration into the local storage was never cleared between two app versions or between different environments, causing inconvenience for my users.

Here's an excerpt of the code selected to flush the cache only when there's a version or environment change.

```typescript
@Injectable()
export class MyService {
  private currentMobileAppBuildVersion: string =
    environment.envName + '-' + packageJson.version + '-' + packageJson.buildIncrementNumber;

  constructor(
    @Inject(CAPACITOR) private readonly capacitor: CapacitorGlobal,
    @Inject(CAPACITOR_PREFERENCES) private readonly preferences: PreferencesPlugin
  ) {}


  /**
   * Clear all data in different storages available on the device (localStorage, sessionStorage, capacitor preferences, secure storage plugin and cookies)
   *
   */
  async clearAllLocalData(): Promise<[{ value: boolean }, void, void]> {
    if (this.capacitor.isNativePlatform()) {
      await CapacitorWebviewCacheCleaner.clearWebViewCache();
    }
    localStorage.clear(); // web local storage by url
    sessionStorage.clear(); // web local storage by tab, cleared on tab close
    return Promise.all([
      this.preferences.clear(), // Capacitor Preferences clearing
      CapacitorCookies.clearAllCookies() // Cookies clearing
    ]);
  }
}

```


## API

<docgen-index>

* [`clearWebViewCache()`](#clearwebviewcache)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### clearWebViewCache()

```typescript
clearWebViewCache() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------

</docgen-api>


## Dev worklow


`npm run verify:ios`  : builds and tests web and native code
`npm run lint`  : lints web and native code
`npm run fmt`  : autoformats web and native code
`npm run docgen`  : generates documentation from plugin interface (see Documentation)
`npm run build`  : builds web code into ESM and bundle distributions

Whenever you are ready to publish your plugin, just use:

`npm publish`
