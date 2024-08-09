```markdown
---
"title": "Using abbas-capacitor-electron-filesystem Package"
"description": "Tutorial on how to use the abbas-capacitor-electron-filesystem package with Capacitor"
"created_at": "2022-02-16"
"published": true
"slug": "abbas-capacitor-electron-filesystem"
---

# Using abbas-capacitor-electron-filesystem Package

The abbas-capacitor-electron-filesystem package is designed to provide file system functionalities for Electron and Capacitor v5. Below is a guide on how to integrate and utilize this package in your project.

## Installation

To get started, install the abbas-capacitor-electron-filesystem package by running the following command:

```bash
npm install abbas-capacitor-electron-filesystem
npx cap sync
```

## API

The package exposes the following API method:

### echo

The `echo` method allows you to send a value to the file system. Here is how you can use it:

```typescript
import { echo } from 'abbas-capacitor-electron-filesystem';

// Call the echo method
const response = await echo({ value: 'Hello, File System!' });

console.log(response); // Output: { value: 'Hello, File System!' }
```


```