```markdown
---
"title": "Using @evikadar/imagemetadata Package",
"description": "Tutorial on how to use the @evikadar/imagemetadata package to retrieve image metadata and creation dates from images stored on your phone.",
"created_at": "2021-11-15T10:45:00",
"published": true,
"slug": "imagemetadata"
---

# Using @evikadar/imagemetadata Package

In this tutorial, we will learn how to use the @evikadar/imagemetadata package to retrieve image metadata and specifically the creation dates from images stored on your phone.

## Installation

To install the package, you can use npm:

```bash
npm install @evikadar/imagemetadata
npx cap sync
```

## API Functions

### `getMetadata(options)`

The `getMetadata` function allows you to retrieve the creation date of a specific image file.

```typescript
import { getMetadata } from '@evikadar/imagemetadata';

const filePath = 'path/to/your/image.jpg';
const metadata = await getMetadata({ filePath });
console.log('Creation Date:', metadata.creationDate);
```

### `getImagesBetweenDates(options)`

If you need to get a list of image paths that fall between two specific dates, you can use the `getImagesBetweenDates` function.

```typescript
import { getImagesBetweenDates } from '@evikadar/imagemetadata';

const validFrom = new Date('2021-01-01').getTime();
const validTo = new Date('2021-12-31').getTime();
const imagePaths = await getImagesBetweenDates({ validFrom, validTo });
console.log('Images Between Dates:', imagePaths);
```

### Logging to Crashlytics

You can log messages to Crashlytics using the following function:

### `logCrashlyticsMessage(options)`

```typescript
import { logCrashlyticsMessage } from '@evikadar/imagemetadata';

const message = 'An error occurred while retrieving image metadata';
await logCrashlyticsMessage({ message });
console.log('Message logged to Crashlytics:', message);
```

This concludes the tutorial on using the @evikadar/imagemetadata package to work with image metadata in your Capacitor project.
```