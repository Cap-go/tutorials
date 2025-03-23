# capacitor-plugin-speaker-toggle-ios-android

Capacitor plugin for switching between speaker, earpiece and bluetooth headset when playing audio.

## Install

```bash
npm install capacitor-plugin-speaker-toggle-ios-android
npx cap sync
```

### Import the plugin in your ts file

```typescript
import { AudiotoggleBluetooth } from 'capacitor-plugin-speaker-toggle-ios-android';
```
### In Android, If you face sound is not toggling, please check permission in your AndroidManifest.xml file
```
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>
    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT"/>
```
## API

<docgen-index>

* [`setAudioMode(...)`](#setaudiomode)
* [`isHeadsetConnected()`](#isheadsetconnected)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setAudioMode(...)

```typescript
setAudioMode(data: { mode: AudioMode; }) => any
```

| Param      | Type                              |
| ---------- | --------------------------------- |
| **`data`** | <code>{ mode: AudioMode; }</code> |

**Returns:** <code>any</code>

--------------------

### AudioMode
```typescript
AudioMode = 'EARPIECE' | 'SPEAKER' | 'NORMAL' | 'RINGTONE' | 'BLUETOOTH';
```

### Example Function 
```typescript
  async toggleAudio() {
    try {
      this.IsSpeaker = !this.IsSpeaker;
      await AudiotoggleBluetooth.setAudioMode({
        mode: this.IsSpeaker === true ? "SPEAKER" : "EARPIECE"
      });
    } catch (error) {
      console.error("Error toggling speaker:", error);
    }
  }
```
### isHeadsetConnected()

```typescript
isHeadsetConnected() => any
```

**Returns:** <code>any</code>

--------------------

</docgen-api>
