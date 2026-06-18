---
"title": "Using @capacitor-community/advertising-id Package",
"description": "A tutorial on how to use the @capacitor-community/advertising-id package to access the Advertising Identifier in a Capacitor app.",
"created_at": "2023-01-16",
"published": true,
"slug": "advertising-id.git"
---

## Introduction

Capacitor provides a native mobile runtime and API layer for web apps, enabling mobile frontend frameworks like Ionic Framework to access native device features. The **Advertising Identifier** (IDFA on iOS, AAID on Android) is a unique ID for advertising that allows developers and marketers to track activity for advertising purposes. In this tutorial, we will explore how to use the @capacitor-community/advertising-id package to access the Advertising Identifier in a Capacitor app.

## Installation

To get started with the @capacitor-community/advertising-id package, you can install it via npm or yarn in your Capacitor project:

```
npm install @capacitor-community/advertising-id
```
or
```
yarn add @capacitor-community/advertising-id
```

## Usage

Import the necessary modules to access the Advertising Identifier in your application:

```typescript
import {
  AdvertisingId,
  AdvertisingIdResponse,
} from '@capacitor-community/advertising-id';
```

Then, use the `get` method provided by the AdvertisingId module to retrieve the Advertising Identifier:

```typescript
// Retrieve the Advertising Identifier
AdvertisingId.get()
  .then((response: AdvertisingIdResponse) => {
    if (response.isLimitAdTrackingEnabled) {
      console.log('Advertising tracking is not allowed by the user.');
    } else {
      console.log('Advertising Identifier: ', response.advertisingId);
    }
  })
  .catch((error: any) => {
    console.error('Failed to fetch Advertising Identifier: ', error);
  });
```

## Conclusion

In this tutorial, we have learned how to use the @capacitor-community/advertising-id package to access the Advertising Identifier in a Capacitor app. This can be useful for tracking user interactions and targeting users with relevant advertising content. Feel free to explore more functionalities provided by the package to enhance your app's advertising capabilities.