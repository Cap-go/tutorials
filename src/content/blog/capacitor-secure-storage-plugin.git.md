```markdown
---
"title": "Using Capacitor Secure Storage Plugin",
"description": "This tutorial will guide you through using the capacitor-secure-storage-plugin package to implement secure storage in Capacitor apps.",
"created_at": "2022-03-24",
"published": true,
"slug": "capacitor-secure-storage-plugin.git"
---

# Using Capacitor Secure Storage Plugin

The Capacitor Secure Storage Plugin allows you to securely store sensitive information in your Capacitor applications. This tutorial will walk you through the steps of setting up and using this plugin in your project.

## Installation

```bash
npm install capacitor-secure-storage-plugin
npx cap sync
```

## Usage

1. **Initialize the Plugin:**

```javascript
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';

const secureStorage = new SecureStoragePlugin();
```

2. **Store Data:**

```javascript
const data = { key: 'SECRET_KEY', value: 'myPassword123' };

secureStorage.set(data)
  .then(() => {
    console.log('Data stored securely.');
  })
  .catch((error) => {
    console.error('Error storing data:', error);
  });
```

3. **Retrieve Data:**

```javascript
secureStorage.get('SECRET_KEY')
  .then((storedData) => {
    console.log('Retrieved Data:', storedData);
  })
  .catch((error) => {
    console.error('Error retrieving data:', error);
  });
```

4. **Delete Data:**

```javascript
secureStorage.remove('SECRET_KEY')
  .then(() => {
    console.log('Data deleted successfully.');
  })
  .catch((error) => {
    console.error('Error deleting data:', error);
  });
```

## Conclusion

By following this tutorial, you can easily integrate the Capacitor Secure Storage Plugin into your Capacitor projects to securely manage sensitive data.
```