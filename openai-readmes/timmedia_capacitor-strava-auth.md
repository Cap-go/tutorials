# @timmedia/capacitor-strava-auth

Use the Strava authentication API in your capacitor app. Works on iOS, Android and Web. On native platforms, the Strava app is opened if installed. If it is not installed, the web authorization page is opened instead. This plugin does not make use of a custom callback URL scheme. Instead, the page specified with `redirectUri` is opened in all cases after authorization is granted. Ensure that this URL is a deep link and handle the parameters accordingly (`state`, `code` and `scope` are passed).

For iOS, add `strava` in `Info.plist` under `LSApplicationQueriesSchemes` (array) to allow your app to open Strava.

More information is found in the [Strava Authentication Developer guide](https://developers.strava.com/docs/authentication/). Do note that after successful authorization you still need to exchange the authorization code for an access token.

## Install

```bash
npm install @timmedia/capacitor-strava-auth
npx cap sync
```

## API

<docgen-index>

- [`authorize(...)`](#authorize)
- [Interfaces](#interfaces)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### authorize(...)

```typescript
authorize(options: StravaAuthOptions) => Promise<void>
```

Authorize using the Strava API to receive an authorization code.

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#stravaauthoptions">StravaAuthOptions</a></code> |

---

### Interfaces

#### StravaAuthOptions

| Prop                 | Type                                                        | Description                                                                                                  |
| -------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **`clientId`**       | <code>string</code>                                         | Your App ID, found in the Strava settings.                                                                   |
| **`redirectUri`**    | <code>string</code>                                         | URL to redirect to after authorization.                                                                      |
| **`responseType`**   | <code>'code'</code>                                         | Must be `code`, accorind to Strava docs.                                                                     |
| **`approvalPrompt`** | <code>'force' \| 'auto'</code>                              | Force prompt again even if already authorized earlier.                                                       |
| **`scope`**          | <code><a href="#stravaauthscope">StravaAuthScope</a></code> | See Strava Docs: {@link https://developers.strava.com/docs/authentication/#details-about-requesting-access}. |
| **`state`**          | <code>string</code>                                         | Returned as a parameter when redirected to `redirectUri`.                                                    |

### Enums

#### StravaAuthScope

| Members                 | Value                            |
| ----------------------- | -------------------------------- |
| **`READ`**              | <code>'read'</code>              |
| **`READ_ALL`**          | <code>'read_all'</code>          |
| **`PROFILE_READ_ALL`**  | <code>'profile:read_all'</code>  |
| **`PROFILE_WRITE`**     | <code>'profile:write'</code>     |
| **`ACTIVITY_READ`**     | <code>'activity:read'</code>     |
| **`ACTIVITY_READ_ALL`** | <code>'activity:read_all'</code> |
| **`ACTIVITY_WRITE`**    | <code>'activity:write'</code>    |

</docgen-api>
