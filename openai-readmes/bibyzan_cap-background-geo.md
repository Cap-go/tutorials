# cap-background-geo

Capacitor iOS/Android native plugin that currently requests for location permission, and gathers gps updates and sends them across the JS bridge while the app is running in the foreground and background until it is terminated or you call the `stop()` method.

Does NOT run forever.

I'm currently developing this along side a private project but made this open so anyone else who is interested in improving this core concept of GPS updates in background can submit PR's.

Make sure your iOS project `info.plist` has the permissions

```
<key>NSLocationWhenInUseUsageDescription</key>
<string>Allow Geolocation?</string>
```

For android, make sure you import and add the plugin in `android/app/src/java/your/bundle/MainActivity.java`

`import org.m25m.CapBackgroundGeo.CapBackgroundGeo;`

```
public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(CapBackgroundGeo.class); //Add this line
    }});
  }
}
```

Also in `AndroidManifest.xml`

```
<service
    android:name="org.m25m.CapBackgroundGeo.CapBackgroundGeo$BackgroundService"
    android:enabled="true"
    android:exported="true">
</service>
```

# Usage/Functionality

```
CapBackgroundGeo.addListener('geo-update', data => {
    const {lat, lng} = data;
});
CapBackgroundGeo.start(); //starts the service
CapBackgroundGeo.stop(); //stopts the service
```
