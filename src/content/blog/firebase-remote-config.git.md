```markdown
---
"title": "Using @dghathway/firebase-remote-config Package"
"description": "A step-by-step guide on utilizing the @dghathway/firebase-remote-config package in your project."
"created_at": "2022-11-25"
"published": true
"slug": "firebase-remote-config.git"
---

## Integrating @dghathway/firebase-remote-config Package

### Installation

To get started, install the package using npm:

```bash
npm install @dghathway/firebase-remote-config
```

### Initialization

Import and initialize the remote config service in your project:

```javascript
import remoteConfig from '@dghathway/firebase-remote-config';

remoteConfig.initialize({ /*config initialization properties*/ });
```

### Fetch Remote Config

You can fetch the remote config values using the `get` method:

```javascript
const value = remoteConfig.get("key");
console.log(value);
```

###  Define Default Config

Define default config values using the `defineConfig` method:

```javascript
remoteConfig.defineConfig({
  key: 'value',
  key2: 'value2'
});
```

### Setting Caching Duration

Set the duration for how frequently you want to fetch remote config values:

```javascript
remoteConfig.setConfigSettings({
  minimumFetchIntervalInSeconds: 3600
});
```

### Activate Config Changes

Activate the fetched config changes to take effect:

```javascript
remoteConfig.activate();
```

### Using Remote Config Data

Use the fetched remote config data in your application:

```javascript
const configValue = remoteConfig.get('key');
console.log(configValue);
```

### Refresh Config

Manually refresh the remote config values:

```javascript
remoteConfig.refresh().then(() => {
  console.log('Config refreshed');
});
```

### Error Handling

Handle errors during remote config operations:

```javascript
remoteConfig.onFailure((error) => {
  console.error("Remote Config Error: ", error);
});
```

By following these steps, you can effectively use the @dghathway/firebase-remote-config package in your project.
``` 
