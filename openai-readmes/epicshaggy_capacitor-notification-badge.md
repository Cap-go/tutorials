# Capacitor Notification Badge

## Description

Set the app icon's notification badge count.

## Installation

### Capacitor 2

- `npm i capacitor-notification-badge@0.0.1`

### Capacitor 3

- `npm i capacitor-notification-badge`

## Usage

```ts
import { Plugins } from '@capacitor/core'

const { NotificationBadge } = Plugins

NotificationBadge.setBadgeCount({
  count: 2,
}).then(
  () => {},
  (error) => {
    console.log(error)
  },
)
```

## Methods

| Method                                           | Default | Type           | Description          |
| ------------------------------------------------ | ------- | -------------- | -------------------- |
| setBadgeCount(options: NotificationBadgeOptions) |         | `Promise<any>` | Sets the badge count |

## Interfaces

NotificationBadgeOptions

| Properties | Default | Type     | Description                           |
| ---------- | ------- | -------- | ------------------------------------- |
| count      |         | `number` | Number to set on the app icon's badge |
