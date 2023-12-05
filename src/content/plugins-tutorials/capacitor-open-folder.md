---
title: "@morphosis/capacitor-open-folder Tutorial"
description: "A step-by-step tutorial on how to use the @morphosis/capacitor-open-folder package"
created_at: "2022-08-01"
published: true
slug: "capacitor-open-folder"
---

# @morphosis/capacitor-open-folder Tutorial

In this tutorial, we will learn how to use the `@morphosis/capacitor-open-folder` package to open folders in your Capacitor app.

## Installation

Start by installing the `@morphosis/capacitor-open-folder` package using npm or yarn:

```bash
npm install @morphosis/capacitor-open-folder
```

or

```bash
yarn add @morphosis/capacitor-open-folder
```

## Usage

1. Import the `openFolder` function from `@morphosis/capacitor-open-folder`:

```javascript
import { openFolder } from '@morphosis/capacitor-open-folder';
```

2. Call the `openFolder` function with the desired folder path:

```javascript
openFolder('/path/to/folder');
```

3. Handle the response from the `openFolder` function:

```javascript
openFolder('/path/to/folder').then(() => {
  console.log('Folder opened successfully');
}).catch((error) => {
  console.error('Failed to open folder:', error);
});
```

4. Run the app on a device or simulator:

```bash
npx cap open android
```

or

```bash
npx cap open ios
```

5. When the app runs on the device or simulator, calling the `openFolder` function will open the specified folder.

That's it! You have successfully learned how to use the `@morphosis/capacitor-open-folder` package in your Capacitor app.

Remember to refer to the package documentation for additional configuration options and functionality.