# capacitor-plugin-check-overlay

This plugin is an Android plugin that checks for any installed overlay apps on the device. It can be used to enhance user's security by providing a warning if any apps are granted permission to draw overlay layers above other apps on the screen.

## Install

```bash
npm install capacitor-plugin-check-overlay
npx cap sync
```

## Example

```typescript
import { CheckOverlay } from 'capacitor-plugin-check-overlay';


constructor(private platfrom: Platform) {
    this.platfrom.ready().then(() => {
        // Add blacklist
        const blacklist = [
            'com.urbandroid.lux:Twilight',
            'com.paget96.bluelightfilter:Blue Light Filter - Night Light',
            'com.ascendik.eyeshield:Night Shift',
            'com.sisomobile.android.brightness:sFilter',
            'com.mlhg.screenfilter:Darker',
            'com.digipom.nightfilter:Night Filter',
            'com.github.ericytsang.screenfilter.app.android:Screen Dimmer',
            'com.yaojian.protecteye:Eye Protect',
            'jp.snowlife01.android.bluelightfilter0:Blue light filter',
            'jp.ne.hardyinfinity.bluelightfilter.free:Bluelight Filter',
        ];

        this.checkOverlayApps(blacklist);

        // without blacklist, detect all app that request Overlay Permission
        this.checkOverlayApps([]);
        }
    )
}

checkOverlayApps = async (blackList: Array<string>) => {
    const checkResult = await CheckOverlay.checkOverlayApps({ blackList });

    console.log('checkOverlayApps Result:');
    console.log('Has Overlay: ', checkResult.hasOverlay);
    console.log('Messages: ', checkResult.message);
    console.log('Overlay Apps: ', checkResult.overlayApps.join("\n"));

};
```

## API

<docgen-index>

- [`checkOverlayApps(...)`](#checkoverlayapps)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### checkOverlayApps(...)

```typescript
checkOverlayApps(options: { blackList: Array<string>; }) => Promise<CheckOverlayAppsResult>
```

| Param         | Type                                  | Description                                  |
| ------------- | ------------------------------------- | -------------------------------------------- |
| **`options`** | <code>{ blackList: string[]; }</code> | : <a href="#array">Array</a>&lt;string&gt; } |

**Returns:** <code>Promise&lt;<a href="#checkoverlayappsresult">CheckOverlayAppsResult</a>&gt;</code>

---

### Interfaces

#### CheckOverlayAppsResult

| Prop              | Type                                                  |
| ----------------- | ----------------------------------------------------- |
| **`hasOverlay`**  | <code>boolean</code>                                  |
| **`message`**     | <code>string</code>                                   |
| **`overlayApps`** | <code><a href="#array">Array</a>&lt;string&gt;</code> |

</docgen-api>
