# send-intent-listener

### Capacitor plugin for receiving data(text/plain) in Ionic applications from Send Intent(Android)

```
npm i send-intent-listener
```

## Usage

```typescript
import { Plugins } from '@capacitor/core'
import { Platform } from '@ionic/angular'

const { SendIntentListener } = Plugins

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      SendIntentListener.addListener('init', (event: any) => {
        // Retrieve text from Send Intent(share)
        console.log(event)
      })
      SendIntentListener.addListener('initError', (error: any) => {
        // Error
        console.error(error)
      })
    })
  }
}
```

# Android setup

## Step 1

Register the plugin in your Activity:

```diff
+ import android.content.Intent;
+ import com.adaslash.send_intent.SendIntentListener;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
+     add(SendIntentListener.class);
    }});
  }

+ @Override
+ protected void onNewIntent(Intent intent) {
+   this.setIntent(intent);
+   super.onNewIntent(intent);
+ }
}
```

## Step 2

Add intent filter to AndroidManifest.xml

```xml
<intent-filter>
   <action android:name="android.intent.action.SEND" />
   <category android:name="android.intent.category.DEFAULT" />
   <data android:mimeType="text/plain" />
</intent-filter>
```

# iOS - comming soon
