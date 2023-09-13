# @coeps/capacitor-plugin-ios-cookie-mover

This capacitor plugin can move cookies back and forth between NSHTTPCookieStorage and WKHTTPCookieStore to solve some iOS cookie issues.

## Install

```bash
npm install @coeps/capacitor-plugin-ios-cookie-mover
npx cap sync
```

## API

<docgen-index>

- [`syncWkCookiesToNsCookieStore(...)`](#syncwkcookiestonscookiestore)
- [`syncNsCookiesToWkCookieStore(...)`](#syncnscookiestowkcookiestore)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### syncWkCookiesToNsCookieStore(...)

```typescript
syncWkCookiesToNsCookieStore(options: CookieMoverPluginOptions) => Promise<CookieMoverPluginSyncResult>
```

| Param         | Type                                                                          |
| ------------- | ----------------------------------------------------------------------------- |
| **`options`** | <code><a href="#cookiemoverpluginoptions">CookieMoverPluginOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#cookiemoverpluginsyncresult">CookieMoverPluginSyncResult</a>&gt;</code>

---

### syncNsCookiesToWkCookieStore(...)

```typescript
syncNsCookiesToWkCookieStore(options: CookieMoverPluginOptions) => Promise<CookieMoverPluginSyncResult>
```

| Param         | Type                                                                          |
| ------------- | ----------------------------------------------------------------------------- |
| **`options`** | <code><a href="#cookiemoverpluginoptions">CookieMoverPluginOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#cookiemoverpluginsyncresult">CookieMoverPluginSyncResult</a>&gt;</code>

---

### Interfaces

#### CookieMoverPluginSyncResult

| Prop                    | Type                  |
| ----------------------- | --------------------- |
| **`preActionCookies`**  | <code>Cookie[]</code> |
| **`postActionCookies`** | <code>Cookie[]</code> |

#### Cookie

| Prop       | Type                |
| ---------- | ------------------- |
| **`name`** | <code>string</code> |

#### CookieMoverPluginOptions

</docgen-api>
