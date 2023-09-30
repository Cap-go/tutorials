# Capacitor Fancy Geo

`npm i capacitor-fancy-geo`

## Usage

### TypeScript

```typescript
import 'capacitor-fancy-geo'
import { Plugins } from '@capacitor/core'
const { Geo, FenceTransition } = Plugins

const has = await Geo.hasPermission()
if (has) {
  let notification = { id: 0, title: 'Test', body: 'Test Body' }
  let circle = {
    id: null,
    transition: FenceTransition.ENTER_EXIT,
    notification,
    loiteringDelay: 0,
    points: [lat, lon],
    radius: 1000,
  }

  const result = await Geo.createCircleFence(circle)
} else {
  const got = await Geo.requestPermission({ always: true }) // use location services at any time IOS only
}
```

## Api

| Method                                        | Default | Type                | Description |
| --------------------------------------------- | ------- | ------------------- | ----------- | --- | --- | --- | -------------- | --- |
| setOnMessageListener(listener: Function)      |         |                     |             |
| createCircleFence(options: FenceOptions)      |         | `Promise<string>`   |             |
| hasPermission()                               |         | `Promise<boolean>`  |             |     |
| requestPermission(options: PermissionOptions) |         | `Promise<boolean>`  |             |
| getCurrentLocation(options: LocationOptions)  |         | `Promise<Location>` |             |
| getAllFences()                                |         | `Promise<Fence[]>`  |             |
| getFence(id: string)                          |         | `Promise<Fence>`    |             |
| removeAllFences()                             |         | `Promise<any>`      |             |
| removeFence(id: string)                       |         | `Promise<any>`      |             |     |     |     | `Promise<any>` |     |
