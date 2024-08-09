# simple-spotify-capacitor

Spotify control capacitor

# Desc
In developement
Simple Capacitor plugin to use Spotify iOS SDK
Se debe ignorar que escribo comentarios en ingles y español, mi cerebro no funciona bien :)

## Install

```bash
npm install simple-spotify-capacitor
npx cap sync
```

## API

<docgen-index>

* [`playSong(...)`](#playsong)
* [`pause()`](#pause)
* [`resume()`](#resume)
* [`skipPrev()`](#skipprev)
* [`skipNext()`](#skipnext)
* [`getPlayerState()`](#getplayerstate)
* [`authorize(...)`](#authorize)
* [`setup(...)`](#setup)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### playSong(...)

```typescript
playSong(song: SpotifySong) => Promise<void>
```

| Param      | Type                                                |
| ---------- | --------------------------------------------------- |
| **`song`** | <code><a href="#spotifysong">SpotifySong</a></code> |

--------------------


### pause()

```typescript
pause() => Promise<void>
```

--------------------


### resume()

```typescript
resume() => Promise<void>
```

--------------------


### skipPrev()

```typescript
skipPrev() => Promise<void>
```

--------------------


### skipNext()

```typescript
skipNext() => Promise<void>
```

--------------------


### getPlayerState()

```typescript
getPlayerState() => Promise<SpotifyPlayerStatus>
```

**Returns:** <code>Promise&lt;<a href="#spotifyplayerstatus">SpotifyPlayerStatus</a>&gt;</code>

--------------------


### authorize(...)

```typescript
authorize(song: SpotifySong) => Promise<void>
```

| Param      | Type                                                |
| ---------- | --------------------------------------------------- |
| **`song`** | <code><a href="#spotifysong">SpotifySong</a></code> |

--------------------


### setup(...)

```typescript
setup(options: SpotifyOptions) => Promise<void>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#spotifyoptions">SpotifyOptions</a></code> |

--------------------


### Interfaces


#### SpotifySong

| Prop      | Type                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |


#### SpotifyPlayerStatus

| Prop                   | Type                 |
| ---------------------- | -------------------- |
| **`paused`**           | <code>boolean</code> |
| **`podcast`**          | <code>boolean</code> |
| **`songId`**           | <code>string</code>  |
| **`songName`**         | <code>string</code>  |
| **`albumName`**        | <code>string</code>  |
| **`artistName`**       | <code>string</code>  |
| **`position`**         | <code>number</code>  |
| **`duration`**         | <code>number</code>  |
| **`title`**            | <code>string</code>  |
| **`coverImageBase64`** | <code>string</code>  |


#### SpotifyOptions

| Prop              | Type                |
| ----------------- | ------------------- |
| **`clientId`**    | <code>string</code> |
| **`redirectUri`** | <code>string</code> |

</docgen-api>
