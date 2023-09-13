# Capacitor Text-To-Speech plugin

Capacitor plugin for text to speech for iOS and Android.

[![NPM Version][npm-image]][npm-url]

## Platforms

iOS 12+
Android 11+

Other versions may also work, but these two are the only ones that have been tested.

## Installation

Different versions of the plugin support different versions of Capacitor:

| Capacitor | Plugin |
| --------- | ------ |
| v2        | v0.1.2 |
| v3        | v1     |

### To install for Capacitor v3

```bash
npm install capacitor-tts-plugin
```

### To install for Capacitor v2

```bash
npm install capacitor-tts-plugin@0.1.2
```

## Usage (Capacitor v3)

```typescript
import { Options, CapacitorTts } from 'capacitor-tts-plugin';

options = {
	text: 'Hello world', // Text to be said
	locale?: 'en-GB', // Language, en-GB is default (optional)
	rate?: 0.5, // Rate of speech, 0.5 is default (optional)
	cancel?: true // If true, cancels earlier speak commands. True is default (optional)
}

CapacitorTtsPlugin.speak(options).then(() => {
	// Do stuff when speaking has finished
	console.log('Speaking finished!');

}).catch((error) => {
	// Something went wrong while speaking
	console.log(error);
})

CapacitorTtsPlugin.stopSpeaking().then(() => {
	// Do stuff when speaking has been stopped
	console.log('Speaking stopped!');
}).catch((error) => {
	// Could not stop speaking
	console.log(error);
})
```

## Usage (Capacitor v2)

Read the documentation for v0.1.2 [here](https://github.com/tvgb/capacitor-tts-plugin/tree/0.1.2).

## Extra step for Android

After install plugin with npm install, the plugin must be imported and added to android\app\src\main\java\YourProjectName\MainActivity.java.

```java
import com.tvgb.cpt.CapacitorTtsPlugin;

public class MainActivity extends BridgeActivity {

	@Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

		// Additional plugins you've installed go here
      	// Ex: registerPlugin(TotallyAwesomePlugin.class);
        registerPlugin(CapacitorTtsPlugin.class);
    }
}
```

## Available function calls

```typescript
/** Promise resolves when speaking has finished */
function speak(options: Options): Promise<void>;

/** Promise resolves when current speaking has been stopped or if no current speaking was detected. */
function stopSpeaking(): Promise<void>:
```

## Issues?

Feature requests? Missing documentation? Something not working as intended or any other issues? Post a new issue on [Github][github-issues-url]!

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/capacitor-tts-plugin.svg
[npm-url]: https://www.npmjs.com/package/capacitor-tts-plugin
[github-issues-url]: https://github.com/tvgb/capacitor-tts-plugin/issues
