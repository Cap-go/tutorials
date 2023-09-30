# Capacitor Plugin Demo

An example of a Capacitor plugin which make native Swift and Java code available for use in Typescript for an Ionic project

## TypeScript Interface

Open [src/definitions.ts](src/definitions.ts)

```
declare module "@capacitor/core" {
  interface PluginRegistry {
    DemoPlugin: DemoPluginPlugin;
  }
}

export interface DemoPluginPlugin {
  sum(options: { first: number, second: number}): Promise<{value: number}>;
}
```

## Example of exposing native code

### iOS

Open [ios/Plugin/Plugin.swift](ios/Plugin/Plugin.swift)

A Capacitor plugin for iOS is a simple Swift class that extends CAPPlugin and has some exported methods that will be callable from Typescript.

```
@objc(DemoPlugin)
public class DemoPlugin: CAPPlugin {

    @objc func sum(_ call: CAPPluginCall) {
        guard let first = call.getInt("first"),
            let second = call.getInt("second") else {
            call.reject("Received invalid input")
            return
        }
        let sum = first + second
        call.success(["sum": sum])
    }
}
```

Each plugin method receives an instance of CAPPluginCall containing all the information of the plugin method invocation from the client.

#### Export to Capacitor

Open [ios/Plugin/Plugin.m](ios/Plugin/Plugin.m)

To make sure Capacitor can see your plugin, you must do two things: export your Swift class to Objective-C, and register it using the provided Capacitor Objective-C Macros.

```
CAP_PLUGIN(DemoPlugin, "DemoPlugin",
           CAP_PLUGIN_METHOD(sum, CAPPluginReturnPromise);
```

### Android

Open [android/src/main/java/com/louisdebaere/demo/plugin/DemoPlugin.java](android/src/main/java/com/louisdebaere/demo/plugin/DemoPlugin.java)

A Capacitor plugin for Android is a simple Java class that extends com.getcapacitor.Plugin and have a @NativePlugin annotation. It has some methods with @PluginMethod() annotation that will be callable from Typescript.

```
@NativePlugin()
public class DemoPlugin extends Plugin {

    @PluginMethod()
    public void sum(PluginCall call) {
        Integer first = call.getInt("first");
        Integer second = call.getInt("second");
        Integer sum = first + second;
        JSObject ret = new JSObject();
        ret.put("sum", sum);
        call.success(ret);
    }
}
```

Each plugin method receives an instance of com.getcapacitor.PluginCall containing all the information of the plugin method invocation from the client.

#### Export to Capacitor

By using the @NativePlugin and @PluginMethod() annotations in your plugins, you make them available to Capacitor, but you still need an extra step in your application to make Capacitor aware of the plugins.

This is done in your apps MainActivity, where you add it in e.g. `src/main/java/com/example/myapp/MainActivity.java` like so:

```
public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(DemoPlugin.class);
    }});
  }
}
```
