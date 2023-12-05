---
title: "Using capacitor-adid-idfa Package"
description: "This tutorial will guide you on how to use the capacitor-adid-idfa package to get the advertising ID (AdID) and Identifier for Advertisers (IDFA) on Android and iOS devices."
created_at: "2022-06-20"
published: true
slug: "capacitor-adid-idfa"
---

# Using capacitor-adid-idfa Package

The capacitor-adid-idfa package provides a simple way to retrieve the advertising ID (AdID) on Android devices and the Identifier for Advertisers (IDFA) on iOS devices using the Capacitor framework. This tutorial will guide you through the process of installing the package and using its API to retrieve the AdID or IDFA on different platforms.

## Installation

To install the capacitor-adid-idfa package, run the following command in your project directory:

```bash
npm install capacitor-adid-idfa
```

After installing the package, you need to syncronize your project with Capacitor:

```bash
npx cap sync
```

## Usage

To start using the capacitor-adid-idfa package, import the `AdId` class from the package in your project file:

```typescript
import { AdId } from 'capacitor-adid-idfa';
```

### Getting the AdID or IDFA

After importing the `AdId` class, you can use the `getAdId()` method to retrieve the AdID or IDFA. Here's an example of how to use it:

```typescript
import { AdId } from 'capacitor-adid-idfa';

export class AppComponent {
  constructor(private platform: Platform){
    this.platform.ready().then(async () => {
      const adid = await AdId.getAdId();
      console.log('adid=', JSON.stringify(adid));
    })
  }
}
```

The `getAdId()` method returns a promise that resolves with an object containing the advertising ID or 'none' if the ID could not be retrieved.

## Sample Result

If the retrieval of the AdID or IDFA is successful, the result will be an object with the ID value. Here's an example:

```json
{
  "id": "xxxx-xxxx-xxx-xxxxx-xxx"
}
```

If the retrieval fails or the device does not have an AdID or IDFA, the result will be an object with the ID value set to 'none'. Here's an example:

```json
{
  "id": "none"
}
```

## Conclusion

In this tutorial, you learned how to use the capacitor-adid-idfa package to retrieve the advertising ID (AdID) or Identifier for Advertisers (IDFA) on Android and iOS devices. You also saw how to install the package, import the necessary class, and use the `getAdId()` method to retrieve the ID. Use this package to integrate AdID or IDFA functionality into your Capacitor apps with ease.
