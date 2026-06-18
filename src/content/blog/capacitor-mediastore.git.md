```markdown
---
"title": "Using @agorapulse/capacitor-mediastore Package Tutorial",
"description": "Learn how to use the @agorapulse/capacitor-mediastore package to manage media files in your Capacitor app.",
"created_at": "2023-10-25",
"published": true,
"slug": "capacitor-mediastore.git"
---

# Getting Started with @agorapulse/capacitor-mediastore Package

In this tutorial, you will learn how to utilize the @agorapulse/capacitor-mediastore package to handle media files within your Capacitor application.

## Installation

To get started with the @agorapulse/capacitor-mediastore package, you can install it via npm:

```bash
npm install @agorapulse/capacitor-mediastore
```

## Usage

### Importing the Package

You can import the @agorapulse/capacitor-mediastore package in your Capacitor project as follows:

```typescript
import { MediaStore } from '@agorapulse/capacitor-mediastore';
```

### Using MediaStore Methods

The @agorapulse/capacitor-mediastore package provides various methods to interact with media files. Here is an example of how you can use the `saveMedia` method:

```typescript
const mediaData = {
  path: 'path/to/media/file.jpg',
  album: 'My Album',
  type: 'image/jpeg'
};

MediaStore.saveMedia(mediaData)
  .then(result => {
    console.log('Media saved successfully:', result);
  })
  .catch(error => {
    console.error('Error saving media:', error);
  });
```

## Conclusion

In this tutorial, you've learned how to integrate the @agorapulse/capacitor-mediastore package in your Capacitor project to manage media files effectively. Explore the package further to leverage its full potential in your app development.
```
