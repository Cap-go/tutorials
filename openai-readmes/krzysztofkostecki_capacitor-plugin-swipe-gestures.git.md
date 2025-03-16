# capacitor-plugin-swipe-gestures

Capacitor plugin supporting iOS-style swipe back navigation and pull-to-refresh on both iOS and Android. For Capacitor v3, v4, v5, v6, and v7.

## Install

```bash
npm install capacitor-plugin-swipe-gestures
npx cap sync
```

## API

<docgen-index>

* [`enable()`](#enable)
* [`disable()`](#disable)
* [`enablePullToRefresh()`](#enablepulltorefresh)
* [`disablePullToRefresh()`](#disablepulltorefresh)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### enable()

Enable swipe back navigation on iOS. For Android, this enables a custom edge swipe gesture that mimics iOS behavior.

```typescript
enable() => Promise<{ status: 'enable'; }>
```

**Returns:** <code>Promise&lt;{ status: 'enable'; }&gt;</code>

--------------------


### disable()

Disable swipe back navigation.

```typescript
disable() => Promise<{ status: 'disable'; }>
```

**Returns:** <code>Promise&lt;{ status: 'disable'; }&gt;</code>

--------------------

### enablePullToRefresh()

Enable pull-to-refresh functionality on both iOS and Android.
This adds a refresh control that triggers page reload when pulled down.
Listen to the 'onRefresh' event to know when refresh is triggered.

```typescript
enablePullToRefresh() => Promise<{ status: 'enable'; }>
```

**Returns:** <code>Promise&lt;{ status: 'enable'; }&gt;</code>

--------------------

### disablePullToRefresh()

Disable pull-to-refresh functionality.

```typescript
disablePullToRefresh() => Promise<{ status: 'disable'; }>
```

**Returns:** <code>Promise&lt;{ status: 'disable'; }&gt;</code>

--------------------

### Interfaces

#### PullToRefreshListenerEvent

| Property  | Type    | Description                       |
| --------- | ------- | --------------------------------- |
| **`refreshed`** | <code>boolean</code> | True when refresh is triggered |

</docgen-api>

## Usage Example

```typescript
import { CapacitorSwipeGesturesPlugin } from 'capacitor-plugin-swipe-gestures';

// Enable swipe back navigation (iOS-style edge swipe)
await CapacitorSwipeGesturesPlugin.enable();

// Enable pull-to-refresh functionality (both iOS and Android)
await CapacitorSwipeGesturesPlugin.enablePullToRefresh();

// Listen for refresh events
window.addEventListener('capacitorswipegesturesplugin:onRefresh', () => {
  console.log('Page was refreshed via pull-to-refresh gesture');
  // You can do custom refresh logic here instead of full page reload
});

// Disable features when no longer needed
await CapacitorSwipeGesturesPlugin.disable();
await CapacitorSwipeGesturesPlugin.disablePullToRefresh();
```
# capacitor-plugin-swipe-gestures
