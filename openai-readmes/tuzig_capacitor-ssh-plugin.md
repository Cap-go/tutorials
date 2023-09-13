# capacitor-ssh-plugin

Supporting libssh2 sessions and channels.
Supports both iOS and Android.

## Install

```bash
npm install capacitor-ssh-plugin
npx cap sync
```

## API

<docgen-index>

- [`startSessionByPasswd(...)`](#startsessionbypasswd)
- [`startSessionByKey(...)`](#startsessionbykey)
- [`newChannel(...)`](#newchannel)
- [`startShell(...)`](#startshell)
- [`writeToChannel(...)`](#writetochannel)
- [`closeChannel(...)`](#closechannel)
- [`setPtySize(...)`](#setptysize)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startSessionByPasswd(...)

```typescript
startSessionByPasswd(options: StartByPasswd) => Promise<SSHSessionID>
```

connect to a host using a username & password

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#startbypasswd">StartByPasswd</a></code> |

**Returns:** <code>Promise&lt;string&gt;</code>

---

### startSessionByKey(...)

```typescript
startSessionByKey(options: StartByKey) => Promise<{ session: string; }>
```

connect to a host using an identity key. The pa

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#startbykey">StartByKey</a></code> |

**Returns:** <code>Promise&lt;{ session: string; }&gt;</code>

---

### newChannel(...)

```typescript
newChannel(options: { session: SSHSessionID; pty?: TerminalType; }) => Promise<{ id: number; }>
```

given a connected session and an optional terminal type,
start a new channel

| Param         | Type                                                                              |
| ------------- | --------------------------------------------------------------------------------- |
| **`options`** | <code>{ session: string; pty?: <a href="#terminaltype">TerminalType</a>; }</code> |

**Returns:** <code>Promise&lt;{ id: number; }&gt;</code>

---

### startShell(...)

```typescript
startShell(options: { channel: SSHChannelID; command?: string; }, callback: STDOutCallback) => Promise<string>
```

given a channel, start a login shell.

The function also recieves a callback which is called when messages
arrive on the channel.

| Param          | Type                                                      |
| -------------- | --------------------------------------------------------- |
| **`options`**  | <code>{ channel: number; command?: string; }</code>       |
| **`callback`** | <code><a href="#stdoutcallback">STDOutCallback</a></code> |

**Returns:** <code>Promise&lt;string&gt;</code>

---

### writeToChannel(...)

```typescript
writeToChannel(options: { channel: number; s: string; }) => Promise<void>
```

writes a message to an open channel

| Param         | Type                                         |
| ------------- | -------------------------------------------- |
| **`options`** | <code>{ channel: number; s: string; }</code> |

---

### closeChannel(...)

```typescript
closeChannel(options: { channel: number; }) => Promise<void>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ channel: number; }</code> |

---

### setPtySize(...)

```typescript
setPtySize(options: { channel: number; width: number; height: number; }) => Promise<void>
```

| Param         | Type                                                             |
| ------------- | ---------------------------------------------------------------- |
| **`options`** | <code>{ channel: number; width: number; height: number; }</code> |

---

### Interfaces

#### StartByPasswd

parameters used when opening a session by password

| Prop           | Type                |
| -------------- | ------------------- |
| **`address`**  | <code>string</code> |
| **`port`**     | <code>number</code> |
| **`username`** | <code>string</code> |
| **`password`** | <code>string</code> |

#### StartByKey

parameters used when opening a session by indetity key

| Prop           | Type                |
| -------------- | ------------------- |
| **`address`**  | <code>string</code> |
| **`port`**     | <code>number</code> |
| **`username`** | <code>string</code> |
| **`tag`**      | <code>string</code> |

### Type Aliases

#### SSHSessionID

Session ID

<code>string</code>

#### SSHChannelID

Channel ID

<code>number</code>

#### STDOutCallback

<code>(message: string | null, err?: any): void</code>

### Enums

#### TerminalType

| Members                  | Value          |
| ------------------------ | -------------- |
| **`PtyNone`**            | <code>0</code> |
| **`PtyTerminalVanilla`** |                |
| **`PtyTerminalVT100`**   |                |
| **`PtyTerminalVT102`**   |                |
| **`PtyTerminalVT220`**   |                |
| **`PtyTerminalAnsi`**    |                |
| **`PtyTerminalXterm`**   |                |

</docgen-api>
