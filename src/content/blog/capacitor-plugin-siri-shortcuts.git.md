---
"title": "Using capacitor-plugin-siri-shorts Package",
"description": "Learn how to integrate Siri Shortcuts functionality using the capacitor-plugin-siri-shorts package in your Capacitor project.",
"created_at": "2022-01-15",
"published": true,
"slug": "capacitor-plugin-siri-shortcuts.git"
---

# Integrate Siri Shortcuts with Capacitor Plugin

In this tutorial, we will explore how to leverage the `capacitor-plugin-siri-shorts` package to enable Siri Shortcuts in your Capacitor project. Siri Shortcuts allow users to perform specific actions within your app by voice command. Let's get started!

## Getting Started

First, ensure you have XCode 10 and iOS 12 platform set up for your project.

### Installation

```bash
npm i @msepena/capacitor-plugin-sirishortcuts
```

### Usage

Include the necessary imports in your component file:

```typescript
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  constructor() {
    // Initialize the app
    this.initializeApp();
  }

  initializeApp() {
    // Add listener for app launch by Siri Shortcuts
    Plugins.SiriShortcuts.addListener('appLaunchBySirishortcuts', (resp) => {
      // Show the deep link using a Toast
      // Toast.show({text: resp['deeplink']});
    });
  }

  donate() {
    const data = {
      persistentIdentifier: 'open-my-app',
      title: 'Open my app',
      suggestedInvocationPhrase: 'Open my app',
      isEligibleForSearch: true,
      userInfo: {deeplink: "home"},
      isEligibleForPrediction: true,
    };

    Plugins.SiriShortcuts.donate(data).then(resp => {
      // Show success message using a Toast
      // Toast.show({text: "successfully donated"});
    }, error => {
      // Show error message using a Toast
      // Toast.show({text: error['message']});
    });
  }
}
```

## Conclusion

By following this tutorial, you have learned how to integrate Siri Shortcuts into your Capacitor project using the `capacitor-plugin-siri-shorts` package. Enhance the user experience of your app by enabling voice-activated shortcuts. Have fun coding!