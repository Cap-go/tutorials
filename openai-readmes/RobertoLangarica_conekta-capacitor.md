# conekta-capacitor

A Capacitor plugin for Conekta, that supports Capacitor 2.0

## Supported platforms

The plugin supports **JS**, **Android** and **iOS** exposing the Conekta SDK functionalities. Here is the official [Conekta](https://developers.conekta.com/libraries) documentation for the SDK's.

## Installation

```
npm install -s conekta-capacitor
```

If you are working on a framework like Quasar, the package should be installed in the Quasar project and installed again in the capacitor project (inside src-capacitor), so you could use the JS implementation within Quasar and the native version within Capacitor's project. Here is a [Quasar example](https://github.com/RobertoLangarica/conekta-capacitor/tree/master/examples/Quasar/quasar-capacitor2)

_Note:_ Remember that after installation an `npx cap sync` call could be needed.

### Extra steps for Android

As per the [Capacitor docs](https://capacitorjs.com/docs/plugins/android#export-to-capacitor) the plugin should be added to the app MainActivity.

The next line should be added to your app `MainActivity`

```javascript
add(com.villavanilla.conekta.capacitor.ConektaPlugin.class)
```

The full code should look something like this:

```
// Other imports...

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(com.villavanilla.conekta.capacitor.ConektaPlugin.class);
    }});
  }
}
```

## Usage

```javascript
import { Plugins } from '@capacitor/core'
const { ConektaPlugin } = Plugins
import 'conekta-capacitor' /* This last import import is needed for web support */

/* Your code goes here */
```

Exposed methods:

```javascript
ConektaPlugin.setPublicKey({ key: string }): Promise<void>;

ConektaPlugin.getPublicKey(): Promise<{ key: string }>;

ConektaPlugin.setLanguage({ language: string }): Promise<void>;

ConektaPlugin.getLanguage(): Promise<{ language: string }>;

ConektaPlugin.createToken({ number: string, name: string, cvc: string, exp_month: string, exp_year: string }): Promise<any>;

ConektaPlugin.setApiVersion({ api_version: string }): Promise<void>;

ConektaPlugin.getApiVersion(): Promise<{ api_version: string }>;

ConektaPlugin.deviceFingerPrint(): Promise<{ fingerprint: string }>

ConektaPlugin.getBaseUri(): Promise<{ uri: string }>;
```

### The most important action is the token creation

Here is an example:

```javascript
import { Plugins } from '@capacitor/core'
const { ConektaPlugin } = Plugins
import 'conekta-capacitor'

/**Some function body**/
ConektaPlugin.setPluginKey({ key: '[YOUR_CONEKTA_KEY]' })
let card = {
  number: 'Card number',
  name: 'Card name',
  cvc: 'Card CVC',
  exp_month: 'Card expiration month',
  exp_year: 'Card expiration year',
}

try {
  let result = await ConektaPlugin.createToken(card)
  /* Result schema
{
  id:String,
  livemode:Boolean,
  object: String | 'token',
  used: boolean
}
*/
  console.log(`Here is your token: ${result.id}`)
} catch (error) {
  /* Error schema
{
  code:String
  message:String,
  message_to_purchaser:String,
  object:"error",
  type:String,
  validation_error:String
}
*/
  console.log(error)
}
```
