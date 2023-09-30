# capacitor-shell

android shell capacitor plugin.
you need to have adb binary in your app

## Install

```bash
npm install capacitor-shell
npx cap sync
```

## API

<docgen-index>

- [`executeNormalCommand(...)`](#executenormalcommand)
- [`executeAdbCommand(...)`](#executeadbcommand)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### executeNormalCommand(...)

```typescript
executeNormalCommand(options: { command: string; }) => Promise<{ output: string; exitCode: number; errorOutput: string; }>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ command: string; }</code> |

**Returns:** <code>Promise&lt;{ output: string; exitCode: number; errorOutput: string; }&gt;</code>

---

### executeAdbCommand(...)

```typescript
executeAdbCommand(options: { command: string; }) => Promise<{ output: string; exitCode: number; errorOutput: string; }>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ command: string; }</code> |

**Returns:** <code>Promise&lt;{ output: string; exitCode: number; errorOutput: string; }&gt;</code>

---

</docgen-api>
