---
title: Using Falconeta Capacitor Wifi Connect Package
description: >-
  Learn how to use the @falconeta/capacitor-wifi-connect package to manage WiFi
  connections in your Capacitor apps.
created_at: '2023-10-06'
published: true
slug: capacitor-wifi-connect.git
locale: en
---

# Using Falconeta Capacitor Wifi Connect Package

In this tutorial, we will explore how to utilize the @falconeta/capacitor-wifi-connect package to manage WiFi connections in Capacitor applications.

## Installation

To get started, install the package using the following command:

```bash
npm install @falconeta/capacitor-wifi-connect
npx cap sync
```

## API

The package provides the following API methods:

<docgen-index>

- [`connectToWifi(...)`](#connectToWifi)
- [`disconnectFromWifi(...)`](#disconnectFromWifi)
  
</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### connectToWifi(...)

Connects to the specified WiFi network.

```typescript
connectToWifi(options: { ssid: string; password: string; }) => Promise<void>
```

| Param          | Type                              |
| -------------- | --------------------------------- |
| **`options`**  | <code>{ ssid: string, password: string }</code> |

--------------------

### disconnectFromWifi(...)

Disconnects from the current WiFi network.

```typescript
disconnectFromWifi() => Promise<void>
```

--------------------
</docgen-api>
```
