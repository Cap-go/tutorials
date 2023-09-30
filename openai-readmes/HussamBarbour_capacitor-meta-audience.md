# capacitor-meta-audience

⛔ The Plugin is under development ⛔

Meta Audience integration for Capacitor apps.

## Installation

```
npm install capacitor-meta-audience
npx cap sync
```

## API

- `showBanner(...)`
- `hideBanner(...)`
- `resumeBanner(...)`
- `removeBanner(...)`
- `showInterstitial(...)`

### `showBanner(...)`

Display a banner ad in your app.

```typescript
showBanner(options: AdOptions) => Promise<void>
```

| Param         | Type                       |
| ------------- | -------------------------- |
| **`options`** | `{ placementId: string; }` |

**Returns:** `Promise<void>`

### `hideBanner(...)`

Hide a currently displayed banner ad without removing it.

```typescript
hideBanner() => Promise<void>
```

**Returns:** `Promise<void>`

### `resumeBanner(...)`

Resume or show a previously hidden banner ad.

```typescript
resumeBanner() => Promise<void>
```

**Returns:** `Promise<void>`

### `removeBanner(...)`

Completely remove the banner ad from the view.

```typescript
removeBanner() => Promise<void>
```

**Returns:** `Promise<void>`

### `showInterstitial(...)`

Display an interstitial ad in your app.

```typescript
showInterstitial(options: AdOptions) => Promise<void>
```

| Param         | Type                       |
| ------------- | -------------------------- |
| **`options`** | `{ placementId: string; }` |

**Returns:** `Promise<void>`
