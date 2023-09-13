# get-safe-area-capacitor

Retrieves the safe area insets.

This is **EXPERIMENTAL**, and I can not guarantee that it works on all android and ios device and configurations.

## Install

```bash
npm install get-safe-area-capacitor
npx cap sync
```

## API

### GetSafeArea()

```typescript
GetSafeArea() => Promise<{ top: number; bottom: number; left: number; right: number; }>
```

---

## Example

```javascript
import { GetSafeArea } from 'get-safe-area-capacitor'
import { StatusBar } from '@capacitor/status-bar'

if (Capacitor.getPlatform() == 'android') await StatusBar.setOverlaysWebView({ overlay: true })

GetSafeArea().then((e) => {
  document.body.style.marginTop = `${e.top}px`
})
```

## Notes To Ensure the app displays around all cutouts

1. Remember to add `<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">` to your head.
1. Remember to add the style `<item name="android:windowLayoutInDisplayCutoutMode"> shortEdges </item>` to your activity. [More Info](https://developer.android.com/guide/topics/display-cutout)
1. Remember to set the content to go underneath the status bar on android.
