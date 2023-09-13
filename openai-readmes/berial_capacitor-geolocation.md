# capacitor-geolocation

https://capacitorjs.com/docs/apis/geolocation

## Installation

Using npm:

```bash
npm i capacitor-geolocation
```

Sync native files:

```bash
npx cap sync
```

## Usage steps (TypeScript)

### Import plugin and types

```ts
import 'capacitor-geolocation'
import { Plugins } from '@capacitor/core'
const { BerialGeolocation } = Plugins
```

### Add listner(s) for location updates

```ts
const id = await BerialGeolocation.watchPosition((data) => {
  const coords = data.coords
  console.log('berial: lat: ', coords.latitude + ', lon: ', coords.longitude)
})

await BerialGeolocation.clearWatch(id)
```

### Android

### Notice

Remember to add this plugin to your app main acctivity:

```java
// Initializes the Bridge
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  // Additional plugins you've installed go here

  // <Your other plugins if any>

 add(BerialGeolocation.class);
}});
```

The `AndroidManifest.xml` should be automaticcaly filled with the right permissions through a `cap sync` command but sometimes it doesn't...<br/>
Check that there are `FOREGROUND_SERVICE` and `ACCESS_FINE_LOCATION` permissions. in your App Manifest.

## License

capacitor-background-geolocation is 100% free and open-source, under the [MIT license](LICENSE). Use it however you want.
