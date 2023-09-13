# cordova-plugin-advanced-websocket-types

Typescript additional types package for the cordova plugin [cordova-plugin-advanced-websocket](https://www.npmjs.com/package/cordova-plugin-advanced-websocket)

### Installation

```console
ionic cordova plugin add cordova-plugin-advanced-websocket
npm i --save-dev cordova-plugin-advanced-websocket-types
```

### Typescript / Ionic Example

```typescript
import { CordovaWebsocketOptions } from 'cordova-plugin-advanced-websocket-types'

const wsOptions: CordovaWebsocketOptions = {
  url: 'wss://echo.websocket.org',
  timeout: 5000,
  pingInterval: 10000,
  headers: { Authorization: `Bearer ${accessToken}` },
  acceptAllCerts: false,
}

window.CordovaWebsocketPlugin.wsConnect(
  wsOptions,
  (event) => {
    // CordovaWebsocketEvent
    console.log(`Received callback from WebSocket: ${event?.callbackMethod}`)
  },
  (success) => {
    // CordovaWebsocketSuccess
    console.log(`Connected to WebSocket with id: ${success.webSocketId}`)
  },
  (error) => {
    // CordovaWebsocketError
    console.log(`Failed to connect to WebSocket: code: ${error?.code}, reason: ${error?.reason}`, error?.exception)
  },
)
```
