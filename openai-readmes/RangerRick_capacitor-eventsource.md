# Native SSE (EventSource) Plugin for Capacitor

Because of the way Capacitor plugins are designed, it does not exactly follow the format/signature of the "real" browser `EventSource` API, but it works similarly.

## Installation

```shell
npm install capacitor-eventsource
npx cap sync
```

On iOS or for pure-web use, no further steps are needed.

### Android Installation

On Android, update your main activity to pull in the `EventSource` plugin:

```java
import com.raccoonfink.plugins.eventsource.EventSource;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(EventSource.class);
    }});
  }
}
```

## Usage

```javascript
EventSource.configure({
  url: 'https://my-sse-url/',
  reconnectTime: 1000,
  maxReconnectTime: 60000,
  idleTimeout: 30000,
})
EventSource.addListener('open', (openResult) => {
  console.debug('Connection opened.')
})
EventSource.addListener('message', (messageResult) => {
  console.info('I got a message: ' + messageResult.message)
})
EventSource.addListener('error', (errorResult) => {
  console.error('Uh-oh: ' + errorResult.error)
})
EventSource.addListener('readyStateChanged', (readyStateChangedResult) => {
  console.debug('Ready state changed: ' + readyStateChangedResult.state)
})
```

## Parameters

_note_: all times are in milliseconds

- url: **required** the URL to connect to
- reconnectTime: time to reconnect after the first failure (iOS/Android)
- maxReconnectTime: maximum amount of time to wait until attempting a reconnect (iOS/Android)
- idleTimeout: maximum amount of time between receiving any data before considering the connection to have timed out (iOS/Android)
