# capacitor-udp

UDP Plugin for CapacitorJS based on the UDP Plugin of https://github.com/unitree-czk/capacitor-udp which is no longer maintained. So a new repo to push the plugin to be suitable for CapacitorJS 3+.
## Install

```bash
npm install @frontall/capacitor-udp
npx cap sync
```

## API

<docgen-index>

* [`create(...)`](#create)
* [`update(...)`](#update)
* [`setPaused(...)`](#setpaused)
* [`bind(...)`](#bind)
* [`send(...)`](#send)
* [`closeAllSockets()`](#closeallsockets)
* [`close(...)`](#close)
* [`getInfo(...)`](#getinfo)
* [`getSockets()`](#getsockets)
* [`joinGroup(...)`](#joingroup)
* [`leaveGroup(...)`](#leavegroup)
* [`setMulticastTimeToLive(...)`](#setmulticasttimetolive)
* [`setBroadcast(...)`](#setbroadcast)
* [`setMulticastLoopbackMode(...)`](#setmulticastloopbackmode)
* [`getJoinedGroups()`](#getjoinedgroups)
* [`addListener(...)`](#addlistener)
* [`addListener(...)`](#addlistener)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### create(...)

```typescript
create(options?: { properties?: { name?: string | undefined; bufferSize?: number | undefined; } | undefined; } | undefined) => any
```

| Param         | Type                                                                   |
| ------------- | ---------------------------------------------------------------------- |
| **`options`** | <code>{ properties?: { name?: string; bufferSize?: number; }; }</code> |

**Returns:** <code>any</code>

--------------------


### update(...)

```typescript
update(options: { socketId: number; properties: { name?: string; bufferSize?: number; }; }) => any
```

| Param         | Type                                                                                    |
| ------------- | --------------------------------------------------------------------------------------- |
| **`options`** | <code>{ socketId: number; properties: { name?: string; bufferSize?: number; }; }</code> |

**Returns:** <code>any</code>

--------------------


### setPaused(...)

```typescript
setPaused(options: { socketId: number; paused: boolean; }) => any
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code>{ socketId: number; paused: boolean; }</code> |

**Returns:** <code>any</code>

--------------------


### bind(...)

```typescript
bind(options: { socketId: number; address: string; port: number; }) => any
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code>{ socketId: number; address: string; port: number; }</code> |

**Returns:** <code>any</code>

--------------------


### send(...)

```typescript
send(options: { socketId: number; address: string; port: number; buffer: string; }) => any
```

| Param         | Type                                                                              |
| ------------- | --------------------------------------------------------------------------------- |
| **`options`** | <code>{ socketId: number; address: string; port: number; buffer: string; }</code> |

**Returns:** <code>any</code>

--------------------


### closeAllSockets()

```typescript
closeAllSockets() => any
```

**Returns:** <code>any</code>

--------------------


### close(...)

```typescript
close(options: { socketId: number; }) => any
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ socketId: number; }</code> |

**Returns:** <code>any</code>

--------------------


### getInfo(...)

```typescript
getInfo(options: { socketId: number; }) => any
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ socketId: number; }</code> |

**Returns:** <code>any</code>

--------------------


### getSockets()

```typescript
getSockets() => any
```

**Returns:** <code>any</code>

--------------------


### joinGroup(...)

```typescript
joinGroup(options: { socketId: number; address: string; }) => any
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code>{ socketId: number; address: string; }</code> |

**Returns:** <code>any</code>

--------------------


### leaveGroup(...)

```typescript
leaveGroup(options: { socketId: number; address: string; }) => any
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code>{ socketId: number; address: string; }</code> |

**Returns:** <code>any</code>

--------------------


### setMulticastTimeToLive(...)

```typescript
setMulticastTimeToLive(options: { socketId: number; ttl: number; }) => any
```

| Param         | Type                                            |
| ------------- | ----------------------------------------------- |
| **`options`** | <code>{ socketId: number; ttl: number; }</code> |

**Returns:** <code>any</code>

--------------------


### setBroadcast(...)

```typescript
setBroadcast(options: { socketId: number; enabled: boolean; }) => any
```

| Param         | Type                                                 |
| ------------- | ---------------------------------------------------- |
| **`options`** | <code>{ socketId: number; enabled: boolean; }</code> |

**Returns:** <code>any</code>

--------------------


### setMulticastLoopbackMode(...)

```typescript
setMulticastLoopbackMode(options: { socketId: number; enabled: boolean; }) => any
```

| Param         | Type                                                 |
| ------------- | ---------------------------------------------------- |
| **`options`** | <code>{ socketId: number; enabled: boolean; }</code> |

**Returns:** <code>any</code>

--------------------


### getJoinedGroups()

```typescript
getJoinedGroups() => any
```

**Returns:** <code>any</code>

--------------------


### addListener(...)

```typescript
addListener(events: 'receive', functions: (params: { socketId: number; buffer: string; }) => void) => PluginListenerHandle
```

| Param           | Type                                                                    |
| --------------- | ----------------------------------------------------------------------- |
| **`events`**    | <code>"receive"</code>                                                  |
| **`functions`** | <code>(params: { socketId: number; buffer: string; }) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener(...)

```typescript
addListener(events: 'receiveError', functions: (params: string) => void) => PluginListenerHandle
```

| Param           | Type                                     |
| --------------- | ---------------------------------------- |
| **`events`**    | <code>"receiveError"</code>              |
| **`functions`** | <code>(params: string) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |

</docgen-api>
