# capacitor-plugin-toggle-fullscreen

## Install

Using npm:

```
npm install --save capacitor-plugin-toggle-fullscreen
```

or using yarn:

```
yarn add capacitor-plugin-toggle-fullscreen
```

## Use

### Register the plugin in your Activity:

```java
// Other imports...
import com.lianlf.capacitoryfullscreen.ToggleFullScreen;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(ToggleFullScreen.class);
    }});
  }
}
```

### In JS code:

```react
<button
    onClick={() => ToggleFullScreen.toggle()}
>
    Toggle Screen
</button>
<button
    onClick={() => ToggleFullScreen.toggle({ orientation: 'LANDSCAPE' })}
>
    Set Landscape
</button>
<button
    onClick={() => ToggleFullScreen.toggle({ orientation: 'PORTRAIT' })}
>
    Set Portrait
</button>
```

### Run

```sh
npx cap sync && npx cap open android
```
