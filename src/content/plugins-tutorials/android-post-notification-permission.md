---
title: "Using the android-post-notification-permission Package"
description: "In this tutorial, we will learn how to use the android-post-notification-permission package to acquire the POST_NOTIFICATIONS permission on Android devices."
created_at: "2022-12-31"
published: true
slug: "android-post-notification-permission"
---

# Using the android-post-notification-permission Package

The `android-post-notification-permission` package is a workaround for acquiring the POST_NOTIFICATIONS permission on Android devices with an Android version equal to or higher than 13. This package can be used as a temporary solution until the issue with the official Capacitor plugins is fixed.

## Installation

To install the `android-post-notification-permission` package, follow these steps:

1. Open your terminal.

2. Run the following command:

   ```
   npm install capacitor-plugin-android-post-notifications-permission
   ```

3. After the installation is complete, sync the plugin with your Capacitor project using the following command:

   ```
   npx cap sync
   ```

## API

The `android-post-notification-permission` package provides the following API methods:

### echo

```typescript
echo(options: { value: string }): Promise<{ value: string }>
```

This method takes an options object with a `value` property and returns a promise that resolves to an object with a `value` property.

### checkPermissions

```typescript
checkPermissions(): Promise<PermissionStatus>
```

This method checks the permission status and returns a promise that resolves to a `PermissionStatus` object.

### requestPermissions

```typescript
requestPermissions(permissions?: AndroidNotificationPermissionPluginPermissions): Promise<PermissionStatus>
```

This method requests the specified permissions and returns a promise that resolves to a `PermissionStatus` object.

## Interfaces

The `android-post-notification-permission` package defines the following interfaces:

### PermissionStatus

```typescript
interface PermissionStatus {
  postNotifications: PermissionState;
}
```

The `PermissionStatus` interface represents the status of the POST_NOTIFICATIONS permission. It has a `postNotifications` property of type `PermissionState`.

### AndroidNotificationPermissionPluginPermissions

```typescript
interface AndroidNotificationPermissionPluginPermissions {
  permissions: AndroidNotificationPermissionType[];
}
```

The `AndroidNotificationPermissionPluginPermissions` interface represents the permissions that can be requested using the `requestPermissions` method. It has a `permissions` property that is an array of `AndroidNotificationPermissionType` values.

## Type Aliases

The `android-post-notification-permission` package provides the following type aliases:

### PermissionState

```typescript
type PermissionState = 'prompt' | 'prompt-with-rationale' | 'granted' | 'denied';
```

The `PermissionState` type aliases represent the possible states of a permission. It can have one of the following values: `prompt`, `prompt-with-rationale`, `granted`, or `denied`.

### AndroidNotificationPermissionType

```typescript
type AndroidNotificationPermissionType = 'postNotifications';
```

The `AndroidNotificationPermissionType` type alias represents the type of permission that can be requested using the `requestPermissions` method. It has the value `'postNotifications'`.

---

Now, you are ready to use the `android-post-notification-permission` package in your Capacitor project to acquire the POST_NOTIFICATIONS permission on Android devices.