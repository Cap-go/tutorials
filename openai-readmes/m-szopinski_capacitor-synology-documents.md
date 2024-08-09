# capacitor-synology-documents

Capacitor Synology Documents

## Install

```bash
npm install capacitor-synology-documents
npx cap sync
```

## Usage

```ts
import {SynologyDocs} from "capacitor-synology-documents";

SynologyDocs.configure('synology ip');

SynologyDocs.auth('username', 'password', 'otp (optional)');

```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`configure(...)`](#configure)
* [`auth(...)`](#auth)
* [`list(...)`](#list)
* [`rename(...)`](#rename)
* [`delete(...)`](#delete)
* [`createFolder(...)`](#createfolder)
* [`getinfo(...)`](#getinfo)
* [`download(...)`](#download)
* [`upload(...)`](#upload)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### configure(...)

```typescript
configure(url: string) => void
```

| Param     | Type                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |

--------------------


### auth(...)

```typescript
auth(username: string, password: string, otp_code?: string | undefined) => Promise<boolean>
```

| Param          | Type                |
| -------------- | ------------------- |
| **`username`** | <code>string</code> |
| **`password`** | <code>string</code> |
| **`otp_code`** | <code>string</code> |

**Returns:** <code>Promise&lt;boolean&gt;</code>

--------------------


### list(...)

```typescript
list(path: string) => Promise<{ folders: { isdir: boolean; name: string; path: string; }[]; }>
```

| Param      | Type                |
| ---------- | ------------------- |
| **`path`** | <code>string</code> |

**Returns:** <code>Promise&lt;{ folders: { isdir: boolean; name: string; path: string; }[]; }&gt;</code>

--------------------


### rename(...)

```typescript
rename(path: string, newName: string) => Promise<{ isdir: boolean; name: string; path: string; }>
```

| Param         | Type                |
| ------------- | ------------------- |
| **`path`**    | <code>string</code> |
| **`newName`** | <code>string</code> |

**Returns:** <code>Promise&lt;{ isdir: boolean; name: string; path: string; }&gt;</code>

--------------------


### delete(...)

```typescript
delete(path: string) => Promise<boolean>
```

| Param      | Type                |
| ---------- | ------------------- |
| **`path`** | <code>string</code> |

**Returns:** <code>Promise&lt;boolean&gt;</code>

--------------------


### createFolder(...)

```typescript
createFolder(path: string, name: string, force_parent?: boolean | undefined) => Promise<{ isdir: boolean; name: string; path: string; }>
```

| Param              | Type                 |
| ------------------ | -------------------- |
| **`path`**         | <code>string</code>  |
| **`name`**         | <code>string</code>  |
| **`force_parent`** | <code>boolean</code> |

**Returns:** <code>Promise&lt;{ isdir: boolean; name: string; path: string; }&gt;</code>

--------------------


### getinfo(...)

```typescript
getinfo(path: string) => Promise<{ files: { isdir: boolean; name: string; path: string; additional: { size: number; type: string; time: unknown; real_path: string; perm: unknown; owner: { user: string; }; }; }[]; }>
```

| Param      | Type                |
| ---------- | ------------------- |
| **`path`** | <code>string</code> |

**Returns:** <code>Promise&lt;{ files: { isdir: boolean; name: string; path: string; additional: { size: number; type: string; time: unknown; real_path: string; perm: unknown; owner: { user: string; }; }; }[]; }&gt;</code>

--------------------


### download(...)

```typescript
download(path: string) => Promise<unknown>
```

| Param      | Type                |
| ---------- | ------------------- |
| **`path`** | <code>string</code> |

**Returns:** <code>Promise&lt;unknown&gt;</code>

--------------------


### upload(...)

```typescript
upload(path: string, fileName: string, content: string, type?: string | undefined) => Promise<unknown>
```

| Param          | Type                |
| -------------- | ------------------- |
| **`path`**     | <code>string</code> |
| **`fileName`** | <code>string</code> |
| **`content`**  | <code>string</code> |
| **`type`**     | <code>string</code> |

**Returns:** <code>Promise&lt;unknown&gt;</code>

--------------------

</docgen-api>
