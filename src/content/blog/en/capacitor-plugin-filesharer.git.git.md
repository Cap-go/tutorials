---
title: Using Capacitor-Plugin-Filesharer Package Tutorial
description: >-
  This tutorial will guide you through using the Capacitor-Plugin-Filesharer
  package to share files in your Capacitor application.
created_at: '2022-10-10'
published: true
slug: capacitor-plugin-filesharer.git
locale: en
---

# Using Capacitor-Plugin-Filesharer Package Tutorial

In this tutorial, you will learn how to use the Capacitor-Plugin-Filesharer package to enable file sharing functionality in your Capacitor application.

## Getting Started

To begin, make sure you have installed the Capacitor-Plugin-Filesharer package in your project. You can do this by running the following command:

```bash
npm install capacitor-plugin-filesharer
```

## Setting Up File Sharing

Once the package is installed, you will need to configure it in your project. Import the necessary modules and initialize the file sharing functionality:

```typescript
import { FileSharer } from 'capacitor-plugin-filesharer';

const fileSharer = new FileSharer();
```

## Sharing Files

You can now use the `shareFile` method provided by the Capacitor-Plugin-Filesharer package to share files. Here is an example of how you can share a file:

```typescript
const filePath = 'path/to/your/file.pdf';
fileSharer.shareFile({ filePath });
```

## Conclusion

Congratulations! You have successfully integrated file sharing functionality in your Capacitor application using the Capacitor-Plugin-Filesharer package. Explore the documentation for more advanced features and customization options.
```
