# capacitor-google-game-services

An android only capacitor plugin for Googles Play game services.

Credits to [Google Play game services - Android Samples](https://github.com/playgameservices/android-basic-samples) and [OpenForge](https://github.com/openforge/capacitor-game-services)

## Supported Versions

- Capacitor v6
- Google Play Game Services SDK v2:17.0.0

## Install

```bash
npm install capacitor-google-game-services
npx cap sync
```

## Using the plugin

You will first need to setup your app project with Google Play Game Services. Please follow the steps from their [documentation here](https://developers.google.com/games/services/console/enabling).
If you are using additional features such as saved games, achievements, leaderboards, or translations; there are additional steps to [conduct here](https://developers.google.com/games/services/console/configuring).

Once all the steps are done, you just need to import the plugin.

```ts
import { GoogleGameServices } from 'capacitor-google-game-services'
const isAuthenticated = await GoogleGameServices.isAuthenticated()
console.log('User is authenticated: ', isAuthenticated)
```

## API

<docgen-index>

- [`signIn()`](#signin)
- [`isAuthenticated()`](#isauthenticated)
- [`showSavedGamesUI()`](#showsavedgamesui)
- [`saveGame(...)`](#savegame)
- [`loadGame()`](#loadgame)
- [`getCurrentPlayer()`](#getcurrentplayer)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### signIn()

```typescript
signIn() => Promise<{ isAuthenticated: boolean; }>
```

Attempts to sign in and returns isAuthenticated as true if succeeded. Sign in is automatically attempted upon plugin load. This is only needed if the automatic sign in failed or was logged out.

**Returns:** <code>Promise&lt;{ isAuthenticated: boolean; }&gt;</code>

---

### isAuthenticated()

```typescript
isAuthenticated() => Promise<{ isAuthenticated: boolean; }>
```

Returns if the player is authenticated with Google Play Games.

**Returns:** <code>Promise&lt;{ isAuthenticated: boolean; }&gt;</code>

---

### showSavedGamesUI()

```typescript
showSavedGamesUI() => Promise<any>
```

Attempts to display Google's default saved games screen, returning the saved game object if selected or saving a new game object if player clicked add.

**Returns:** <code>Promise&lt;any&gt;</code>

---

### saveGame(...)

```typescript
saveGame(options: { title: string; data: string; }) => Promise<any>
```

Uses Google Play Game services snapshot feature to save a JSON Object as bytes.

| Param         | Type                                          | Description                                                              |
| ------------- | --------------------------------------------- | ------------------------------------------------------------------------ |
| **`options`** | <code>{ title: string; data: string; }</code> | The title (key) and data (can be json object) to save to the game object |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### loadGame()

```typescript
loadGame() => Promise<{ title: string; data: string; }>
```

Loads the last selected game with the 'savenameTemp' snapshot.

**Returns:** <code>Promise&lt;{ title: string; data: string; }&gt;</code>

---

### getCurrentPlayer()

```typescript
getCurrentPlayer() => Promise<{ player: Player; }>
```

Returns a player object of the currently signed in player

**Returns:** <code>Promise&lt;{ player: <a href="#player">Player</a>; }&gt;</code>

---

### Interfaces

#### Player

| Prop               | Type                |
| ------------------ | ------------------- |
| **`displayName`**  | <code>string</code> |
| **`iconImageUrl`** | <code>string</code> |

</docgen-api>
