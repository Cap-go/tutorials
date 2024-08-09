# hc-capacitor-udp

capacitor udp

## Install

```bash
npm install hc-capacitor-udp
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
* [`addListener('receive', ...)`](#addlistenerreceive)
* [`addListener('receiveError', ...)`](#addlistenerreceiveerror)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### create(...)

```typescript
create(options?: { properties?: { name?: string | undefined; bufferSize?: number | undefined; } | undefined; } | undefined) => Promise<{ socketId: number; ipv4: string; ipv6: string; }>
```

| Param         | Type                                                                   |
| ------------- | ---------------------------------------------------------------------- |
| **`options`** | <code>{ properties?: { name?: string; bufferSize?: number; }; }</code> |

**Returns:** <code>Promise&lt;{ socketId: number; ipv4: string; ipv6: string; }&gt;</code>

--------------------


### update(...)

```typescript
update(options: { socketId: number; properties: { name?: string; bufferSize?: number; }; }) => Promise<any>
```

| Param         | Type                                                                                    |
| ------------- | --------------------------------------------------------------------------------------- |
| **`options`** | <code>{ socketId: number; properties: { name?: string; bufferSize?: number; }; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setPaused(...)

```typescript
setPaused(options: { socketId: number; paused: boolean; }) => Promise<any>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code>{ socketId: number; paused: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### bind(...)

```typescript
bind(options: { socketId: number; address: string; port: number; }) => Promise<any>
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code>{ socketId: number; address: string; port: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### send(...)

```typescript
send(options: { socketId: number; address: string; port: number; buffer: string; }) => Promise<any>
```

| Param         | Type                                                                              |
| ------------- | --------------------------------------------------------------------------------- |
| **`options`** | <code>{ socketId: number; address: string; port: number; buffer: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### closeAllSockets()

```typescript
closeAllSockets() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### close(...)

```typescript
close(options: { socketId: number; }) => Promise<any>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ socketId: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getInfo(...)

```typescript
getInfo(options: { socketId: number; }) => Promise<{ socketId: number; bufferSize: number; name: string | null; paused: boolean; localAddress?: string; localPort?: number; }>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ socketId: number; }</code> |

**Returns:** <code>Promise&lt;{ socketId: number; bufferSize: number; name: string | null; paused: boolean; localAddress?: string; localPort?: number; }&gt;</code>

--------------------


### getSockets()

```typescript
getSockets() => Promise<{ sockets: [{ socketId: number; bufferSize: number; name: string | null; paused: boolean; localAddress?: string; localPort?: number; }]; }>
```

**Returns:** <code>Promise&lt;{ sockets: [{ socketId: number; bufferSize: number; name: string | null; paused: boolean; localAddress?: string; localPort?: number; }]; }&gt;</code>

--------------------


### joinGroup(...)

```typescript
joinGroup(options: { socketId: number; address: string; }) => Promise<any>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code>{ socketId: number; address: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### leaveGroup(...)

```typescript
leaveGroup(options: { socketId: number; address: string; }) => Promise<any>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code>{ socketId: number; address: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setMulticastTimeToLive(...)

```typescript
setMulticastTimeToLive(options: { socketId: number; ttl: number; }) => Promise<any>
```

| Param         | Type                                            |
| ------------- | ----------------------------------------------- |
| **`options`** | <code>{ socketId: number; ttl: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setBroadcast(...)

```typescript
setBroadcast(options: { socketId: number; enabled: boolean; }) => Promise<any>
```

| Param         | Type                                                 |
| ------------- | ---------------------------------------------------- |
| **`options`** | <code>{ socketId: number; enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setMulticastLoopbackMode(...)

```typescript
setMulticastLoopbackMode(options: { socketId: number; enabled: boolean; }) => Promise<any>
```

| Param         | Type                                                 |
| ------------- | ---------------------------------------------------- |
| **`options`** | <code>{ socketId: number; enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getJoinedGroups()

```typescript
getJoinedGroups() => Promise<{ groups: [string]; }>
```

**Returns:** <code>Promise&lt;{ groups: [string]; }&gt;</code>

--------------------


### addListener('receive', ...)

```typescript
addListener(events: "receive", functions: (params: { socketId: number; buffer: string; }) => void) => PluginListenerHandle
```

| Param           | Type                                                                    |
| --------------- | ----------------------------------------------------------------------- |
| **`events`**    | <code>'receive'</code>                                                  |
| **`functions`** | <code>(params: { socketId: number; buffer: string; }) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('receiveError', ...)

```typescript
addListener(events: "receiveError", functions: (params: string) => void) => PluginListenerHandle
```

| Param           | Type                                     |
| --------------- | ---------------------------------------- |
| **`events`**    | <code>'receiveError'</code>              |
| **`functions`** | <code>(params: string) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
