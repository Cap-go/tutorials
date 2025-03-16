# Capacitor LocalStorage Migration Plugin

A Capacitor plugin designed to help migrate legacy web storage data from UIWebView (iOS) and Crosswalk WebView (Android) to modern WebView implementations.

When transitioning from older hybrid mobile apps to Capacitor, local storage data can become inaccessible due to WebView changes. This plugin provides a safe way to retrieve that data, ensuring no user information is lost during the upgrade process.

Key features:

- Retrieves localStorage data from legacy WebViews
- Preserves original database files for safety
- Supports both iOS (UIWebView) and Android (Crosswalk) platforms
- Enables smooth app transitions without data loss

The plugin maintains the original storage files as a fallback, allowing multiple migration attempts if needed.

## Installation

```bash
npm install capacitor-localstorage-migration
npx cap sync
```

## Usage

```typescript
import { LocalStorageMigration } from 'capacitor-localstorage-migration';

async function migrateLocalStorage() {
  try {
    // Check if migration was already completed
    if (localStorage.getItem('migrationCompleted')) {
      console.log('Migration was already completed');
      return true;
    }

    const data = await LocalStorageMigration.getLegacyData();
    
    if (data && Object.keys(data).length > 0) {
      // Do something with the legacy data!
      console.log(data);

      // Example: Copy legacy localStorage to current localStorage
      Object.entries(data).forEach(([key, value]) => {
        localStorage.setItem(key, value);
      });

      // Mark migration as completed
      localStorage.setItem('migrationCompleted', 'true');
      return true;
    } else {
      // If no legacy data found, mark migration completed to avoid future runs
      localStorage.setItem('migrationCompleted', 'true');
      console.log('No legacy data found');
      return false;
    }
  } catch (err) {
    console.error('Error during localStorage migration:', err);
    return false;
  }
}
```

## API

<docgen-index>

* [`getLegacyData()`](#getlegacydata)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getLegacyData()

```typescript
getLegacyData() => Promise<{ [key: string]: any; }>
```

**Returns:** <code>Promise&lt;{ [key: string]: any; }&gt;</code>

--------------------

</docgen-api>

## Supported Platforms

- Android
  - Retrieves data from Crosswalk WebView localStorage
  - Path: `/data/data/[package-name]/app_xwalkcore/Default/Local Storage/file__0.localstorage`
  - Handles UTF-16LE encoding
  
- iOS
  - Retrieves data from UIWebView localStorage
  - Path: `[Library]/WebKit/LocalStorage/file__0.localstorage`

## Error Handling

The plugin includes comprehensive error handling for common scenarios:

- Database not found
- SQLite reading errors
- Data decoding issues
- Memory constraints

Errors are returned as rejected promises with descriptive messages.

## Requirements

- Capacitor 5.0.0 or higher
- iOS 13.0 or higher
- Android API 21 or higher

## Development

### Building

```bash
npm run build
```

### Running Tests

```bash
npm test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.