# capacitor-sound-effect

This plugin provides the ability to natively play sound effects in Capacitor based projects.

## Install

### General

```bash
npm install capacitor-sound-effect
npx cap sync
```

### Ionic

```bash
npm install capacitor-sound-effect
ionic cap sync
```

## API

<docgen-index>

- [`loadSound(...)`](#loadsound)
- [`play(...)`](#play)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### loadSound(...)

```typescript
loadSound(options: { id: string; path: string; }) => any
```

| Param         | Type                                       |
| ------------- | ------------------------------------------ |
| **`options`** | <code>{ id: string; path: string; }</code> |

**Returns:** <code>any</code>

---

### play(...)

```typescript
play(options: { id: string; }) => any
```

| Param         | Type                         |
| ------------- | ---------------------------- |
| **`options`** | <code>{ id: string; }</code> |

**Returns:** <code>any</code>

---

</docgen-api>

## Usage Example

This example is based on an Ionic (Vue) project, but is generally applicable to other scenarios

#### Import the plugin

```javascript
import { SoundEffect } from 'capacitor-sound-effect'
```

#### Load the sounds

In Ionic, the path is relative to your 'public' directory. So for a file located in /public/assets/sounds/, the below is applicable:

```javascript
loadSounds() {
    SoundEffect.loadSound({id:'message', path:'assets/sounds/message.mp3'});
    SoundEffect.loadSound({id:'status', path:'assets/sounds/status.mp3'});
}
```

You must pass an object, as illustrated above, to the loadSound() method. The 'id' must be unique as it is used to reference the sound when you come to playing.

#### Play a sound

When playing a sound, you must reference the 'id' you provided during loadSound().

```javascript
SoundEffect.play({ id: 'message' })
```
