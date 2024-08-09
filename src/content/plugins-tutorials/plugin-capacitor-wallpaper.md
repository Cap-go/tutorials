```markdown
---
title: Using the Wallpaper Project Package in Capacitor
description: This tutorial will guide you through the steps of using the wallpaper-project package in a Capacitor project to manipulate the wallpaper on a user's device.
created_at: 2022-01-10
published: true
slug: plugin-capacitor-wallpaper
---

# Using the Wallpaper Project Package in Capacitor

This tutorial will guide you through the steps of using the wallpaper-project package in a Capacitor project to manipulate the wallpaper on a user's device.

## Installation

To install the wallpaper-project package, run the following command in your terminal:

```bash
npm install wallpaper-project
npx cap sync
```

## API

### `setBase64(options: { base64Image: string; }) => Promise<void>`

This API allows you to set a base64 image as the wallpaper.

#### Parameters

- `options`: An object that contains the base64 image as a string.

```typescript
setBase64(options: { base64Image: string; }) => Promise<void>
```

## Conclusion

After following the installation steps and utilizing the API provided by wallpaper-project, you can easily manipulate the wallpaper on the user's device in your Capacitor project.
```
