```markdown
---
"title": "Using capacitor-plugin-useragent Package Tutorial",
"description": "A step-by-step guide on how to utilize the capacitor-plugin-useragent package in your Capacitor project.",
"created_at": "2022-04-10",
"published": true,
"slug": "capacitor-plugin-useragent.git"
---

# Using capacitor-plugin-useragent Package Tutorial

The `capacitor-plugin-useragent` package allows you to access user agent information for different platforms in your Capacitor app.

## Installation

To start using the `capacitor-plugin-useragent` package, you need to first install it in your project.

```bash
npm install capacitor-plugin-useragent
npx cap sync
```

## Initializing the Plugin

After installing the plugin, you need to initialize it in your code.

```typescript
import { UserAgent } from 'capacitor-plugin-useragent';

const userAgent = new UserAgent();
```

## Getting User Agent Information

You can now access the user agent information using the following method.

```typescript
const info = await userAgent.getUserAgentInfo();
console.log(info);
```

## Example Output

The `getUserAgentInfo()` method will provide you with details about the user agent such as the browser, version, platform, and more.

That's it! You have successfully integrated the `capacitor-plugin-useragent` package into your project.
```
```