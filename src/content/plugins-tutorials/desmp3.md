---
title: "Using desmp3 Package"
description: "This tutorial will guide you through the process of using the desmp3 package to perform various audio operations."
created_at: "2022-09-23"
published: true
slug: "desmp3"
---

# Using desmp3 Package

The desmp3 package is a plugin that allows you to work with MP3 files in your JavaScript applications. This tutorial will walk you through the installation process and demonstrate how to use the main functions provided by the package.

## Install

To begin using the desmp3 package, you need to install it using npm. Open your terminal and run the following command:

```bash
npm install desmp3
```

After the installation is complete, you also need to sync the package with your project. Run the following command:

```bash
npx cap sync
```

Now you're ready to start using the desmp3 package in your project!

## API

The desmp3 package provides the following API functions:

### start

```typescript
start(options: { value: string; }) => any
```

This function is used to start playing an MP3 file. It takes an options parameter with a value property, which should be the path to the MP3 file you want to play.

### pause

```typescript
pause(options: { value: string; }) => any
```

This function is used to pause the playback of an MP3 file. It takes an options parameter with a value property, which should be the path to the MP3 file you want to pause.

### echo

```typescript
echo(options: { value: string; }) => any
```

This function is used to echo a message. It takes an options parameter with a value property, which should be the message you want to echo.

These are the main functions provided by the desmp3 package. You can use them to perform various audio operations in your JavaScript applications.

Please refer to the package documentation for more details on how to use each function and its parameters.

That's it! You now know how to use the desmp3 package in your projects. Happy coding!