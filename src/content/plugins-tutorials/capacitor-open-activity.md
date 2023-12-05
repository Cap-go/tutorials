## Using `capacitor-open-activity` Package

The `capacitor-open-activity` package allows you to open other activities in your Android or iOS app using Capacitor. This can be useful when you want to integrate native functionality or navigate to specific screens within your app.

### Installation

To use the `capacitor-open-activity` package, you need to install it first. Open your terminal and run the following command:

```bash
npm install capacitor-open-activity
```

### Configuration

After installing the package, you need to configure it in your Capacitor project. Open your `capacitor.config.json` file and add the following code to the `plugins` section:

```json
{
  "plugins": {
    "OpenActivity": {
      "packageName": "com.example.myapp",
      "className": "com.example.myapp.MainActivity"
    }
  }
}
```

Make sure to replace `com.example.myapp` with your app's package name and `com.example.myapp.MainActivity` with the main activity class of your app.

### Usage

Once the package is installed and configured, you can use it in your TypeScript code. Import the `Plugins` object from `@capacitor/core` and call the `openActivity()` method:

```typescript
import { Plugins } from '@capacitor/core';

const { OpenActivity } = Plugins;

OpenActivity.openActivity({ activityName: 'com.example.myapp.SecondActivity' });
```

Replace `com.example.myapp.SecondActivity` with the name of the activity you want to open.

### Example

Here's an example of how you can use `capacitor-open-activity` to open a new activity when a button is clicked:

```html
<ion-content>
  <ion-button expand="block" (click)="openNewActivity()">Open Activity</ion-button>
</ion-content>
```

```typescript
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { OpenActivity } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  openNewActivity() {
    OpenActivity.openActivity({ activityName: 'com.example.myapp.SecondActivity' });
  }
}
```

### Recap

In this tutorial, you learned how to use the `capacitor-open-activity` package to open activities in your Capacitor app. We covered the installation, configuration, and usage of the package. Now you can integrate native functionality and navigate to specific screens within your app seamlessly.

---

title: "Using capacitor-open-activity Package"
description: "Learn how to utilize the capacitor-open-activity package to open activities in your Capacitor app."
created_at: "<current date>"
published: true
slug: "capacitor-open-activity"
---