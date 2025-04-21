---
"title": "Using @adeprez/capacitor-user-agent Package Tutorial"
"description": "A detailed tutorial on how to integrate and use the @adeprez/capacitor-user-agent package in your Capacitor app."
"created_at": "October 25, 2023"
"published": true
"slug": "capacitor-user-agent.git"
---

# How to Use @adeprez/capacitor-user-agent Package

In this tutorial, we will walk through the steps to integrate and utilize the @adeprez/capacitor-user-agent package in your Capacitor application.

## Step 1: Installation

First, install the @adeprez/capacitor-user-agent package in your Capacitor project by running the following command:

```bash
npm install @adeprez/capacitor-user-agent
```

## Step 2: Import the Plugin

After installing the package, import the plugin in your project. Make sure to do the necessary imports at the beginning of your file.

```typescript
import { Plugins } from '@capacitor/core';
const { UserAgent } = Plugins;
```

## Step 3: Retrieve User Agent

You can now use the UserAgent plugin to retrieve information about the user's browser. Here's an example of how to get the user agent string:

```typescript
const { userAgentString } = await UserAgent.getUserAgent();
console.log('User Agent:', userAgentString);
```

## Step 4: Customize User Agent

If you need to customize the user agent string, you can do so using the setUserAgent method. Here's an example:

```typescript
await UserAgent.setUserAgent({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' });
console.log('User Agent set successfully');
```

That's it! You have successfully integrated the @adeprez/capacitor-user-agent package into your Capacitor application. Happy coding!
```
```