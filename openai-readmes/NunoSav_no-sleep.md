# @nunosav/no-sleep

Capacitor 3 plugin to keep mobile device awake.
Based on https://github.com/capacitor-community/keep-awake but with Capacitor 3 support.

## Install

```bash
npm install @nunosav/no-sleep
npx cap sync
```

## API

<docgen-index>

- [`stayAwake()`](#stayawake)
- [`sleep()`](#sleep)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### stayAwake()

```typescript
stayAwake() => Promise<void>
```

Keep mobile device screen on, preventing idle shutdown.

---

### sleep()

```typescript
sleep() => Promise<void>
```

Allow the mobile device screen to go idle.

---

</docgen-api>
