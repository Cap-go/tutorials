---
title: "Using @adeprez/capacitor-user-agent Package"
description: "This tutorial will guide you on how to use the @adeprez/capacitor-user-agent package in your Capacitor project."
created_at: "2021-12-01"
published: true
slug: "capacitor-user-agent"
---

# Using @adeprez/capacitor-user-agent Package

The `@adeprez/capacitor-user-agent` package provides a convenient way to retrieve the user agent string from the device in Capacitor projects. This tutorial will guide you through the process of installing and using this package in your project.

## Installation

To begin, make sure you have a Capacitor project set up. If not, you can create a new Capacitor project using the following command:

```bash
npx @capacitor/cli create
```

Next, install the `@adeprez/capacitor-user-agent` package using npm or yarn:

```bash
npm install @adeprez/capacitor-user-agent
```

or

```bash
yarn add @adeprez/capacitor-user-agent
```

## Usage

Once the package is installed, you can use it in your Capacitor project.

First, import the `getUserAgent` function from `@adeprez/capacitor-user-agent`:

```javascript
import { Plugins } from '@capacitor/core';
import { getUserAgent } from '@adeprez/capacitor-user-agent';

const { UserAgent } = Plugins;
```

To retrieve the user agent string, call the `getUserAgent` function:

```javascript
const userAgent = getUserAgent();
console.log('User Agent:', userAgent);
```

You can then use the `userAgent` variable to access the user agent string.

## Example

Here is a simple example demonstrating how to use the `@adeprez/capacitor-user-agent` package in a Capacitor project:

```javascript
import { Plugins } from '@capacitor/core';
import { getUserAgent } from '@adeprez/capacitor-user-agent';

const { UserAgent } = Plugins;

const getUserAgentString = async () => {
  try {
    const userAgent = await getUserAgent();
    console.log('User Agent:', userAgent);
  } catch (error) {
    console.error('Error:', error);
  }
};

getUserAgentString();
```

## Conclusion

In this tutorial, we learned how to install and use the `@adeprez/capacitor-user-agent` package in a Capacitor project. The package provides a simple way to retrieve the user agent string from the device. You can use this information to customize your app's behavior based on the user's device or browser.