# capacitor-signal-strength

Plugin use to get Android device signal strength

## Install

```bash
npm install capacitor-signal-strength
npx cap sync
```

## API

<docgen-index>

* [`getdBm()`](#getdbm)
* [`getPercentage(...)`](#getpercentage)
* [`getLevel()`](#getlevel)
* [`checkPermissions()`](#checkpermissions)
* [`requestPermissions()`](#requestpermissions)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getdBm()

```typescript
getdBm() => Promise<DBm>
```

**Returns:** <code>Promise&lt;<a href="#dbm">DBm</a>&gt;</code>

--------------------


### getPercentage(...)

```typescript
getPercentage(options: { connection: ConnectionType; }) => Promise<Percentage>
```

| Param         | Type                                                                       |
| ------------- | -------------------------------------------------------------------------- |
| **`options`** | <code>{ connection: <a href="#connectiontype">ConnectionType</a>; }</code> |

**Returns:** <code>Promise&lt;<a href="#percentage">Percentage</a>&gt;</code>

--------------------


### getLevel()

```typescript
getLevel() => Promise<Level>
```

**Returns:** <code>Promise&lt;<a href="#level">Level</a>&gt;</code>

--------------------


### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

--------------------


### requestPermissions()

```typescript
requestPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

--------------------


### Interfaces


#### DBm

| Prop      | Type                |
| --------- | ------------------- |
| **`dBm`** | <code>number</code> |


#### Percentage

| Prop             | Type                |
| ---------------- | ------------------- |
| **`percentage`** | <code>string</code> |


#### Level

| Prop        | Type                |
| ----------- | ------------------- |
| **`level`** | <code>number</code> |


#### PermissionStatus

| Prop       | Type                                                        |
| ---------- | ----------------------------------------------------------- |
| **`info`** | <code><a href="#permissionstate">PermissionState</a></code> |


### Type Aliases


#### ConnectionType

The type of network connection that a device might have.

<code>'wifi' | 'cellular' | 'none' | 'unknown'</code>


#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>

</docgen-api>
