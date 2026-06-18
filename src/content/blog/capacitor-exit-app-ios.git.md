## Capacitor Exit App iOS Plugin Tutorial

This tutorial will guide you through using the `capacitor-exit-app-ios` package to force quit an app on iOS.

### Prerequisites
Before starting, make sure you have Cocoapods installed on your machine.

```bash
sudo gem install cocoapods
```

### Installation
1. Create a new Capacitor project.
```bash
ionic start my-cap-app --capacitor
cd my-cap-app
```

2. Add the iOS platform.
```bash
mkdir www && touch www/index.html
npx cap add ios
```

3. Install the `capacitor-exit-app-ios` package.
```bash
npm i capacitor-exit-app-ios
```

4. Sync the Capacitor project.
```bash
npx cap sync ios
```

5. Open the iOS project in Xcode.
```bash
npx cap open ios
```

6. Sign your app in Xcode under the "General" tab.

### Usage
After the installation and setup, you can now use the plugin to force quit the app.

```javascript
import {Plugins} from '@capacitor/core';
const { ExitAppIosPlugin } = Plugins;

if (this.platform.is('android')) {
  navigator['app'].exitApp();
} else {
  ExitAppIosPlugin.killApp().then();
}
```

### GitHub Repository
Find the plugin on GitHub: [Capacitor Exit App iOS](https://github.com/tienmanh94hbk/capacitor-exit-app-ios)

---

**Cheers 🍻**

Follow me on [Facebook](https://www.facebook.com/manh.do.186)

---

```yaml
---
title: "Capacitor Exit App iOS Plugin Tutorial"
description: "Guide to using the capacitor-exit-app-ios package to force quit an app on iOS"
created_at: "2021-10-27"
published: true
slug: "capacitor-exit-app-ios.git"
---
```
