# @falconeta/capacitor-aws-amplify

plugin that handle amplify features

## Install

```bash
npm install @falconeta/capacitor-aws-amplify
npx cap sync
```

## android config

Inside MainActivity

```java
@Override
  protected void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    .
    .
    .
    if (data == null){
      Amplify.Auth.handleWebUISignInResponse(null);
    }

  }
```
Inside gradle

```gradle
    // Amplify core dependency
    implementation 'com.amplifyframework:core:1.38.7'

    // AWS Cognito dependency
    implementation 'com.amplifyframework:aws-auth-cognito:1.38.7'
```


## API

<docgen-index>

* [`load(...)`](#load)
* [`signIn(...)`](#signin)
* [`federatedSignIn(...)`](#federatedsignin)
* [`fetchAuthSession()`](#fetchauthsession)
* [`getUserAttributes()`](#getuserattributes)
* [`updateUserAttributes(...)`](#updateuserattributes)
* [`signOut()`](#signout)
* [`deleteUser()`](#deleteuser)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### load(...)

```typescript
load(options: { cognitoConfig: AWSCognitoConfig; }) => Promise<void>
```

| Param         | Type                                                                              |
| ------------- | --------------------------------------------------------------------------------- |
| **`options`** | <code>{ cognitoConfig: <a href="#awscognitoconfig">AWSCognitoConfig</a>; }</code> |

--------------------


### signIn(...)

```typescript
signIn(options: { email: string; password: string; }) => Promise<CognitoAuthSession>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ email: string; password: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#cognitoauthsession">CognitoAuthSession</a>&gt;</code>

--------------------


### federatedSignIn(...)

```typescript
federatedSignIn(options: { provider: CognitoHostedUIIdentityProvider; }) => Promise<CognitoAuthSession>
```

| Param         | Type                                                                                                       |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ provider: <a href="#cognitohosteduiidentityprovider">CognitoHostedUIIdentityProvider</a>; }</code> |

**Returns:** <code>Promise&lt;<a href="#cognitoauthsession">CognitoAuthSession</a>&gt;</code>

--------------------


### fetchAuthSession()

```typescript
fetchAuthSession() => Promise<CognitoAuthSession>
```

**Returns:** <code>Promise&lt;<a href="#cognitoauthsession">CognitoAuthSession</a>&gt;</code>

--------------------


### getUserAttributes()

```typescript
getUserAttributes() => Promise<{ status: AwsAmplifyPluginResponseStatus; userAttributes: Record<string, string>; }>
```

**Returns:** <code>Promise&lt;{ status: <a href="#awsamplifypluginresponsestatus">AwsAmplifyPluginResponseStatus</a>; userAttributes: <a href="#record">Record</a>&lt;string, string&gt;; }&gt;</code>

--------------------


### updateUserAttributes(...)

```typescript
updateUserAttributes(options: { attributes: { name: AuthUserAttributeKey | string; value: string; }[]; }) => Promise<{ status: AwsAmplifyPluginResponseStatus; userAttributes: Record<string, string>; }>
```

| Param         | Type                                                             |
| ------------- | ---------------------------------------------------------------- |
| **`options`** | <code>{ attributes: { name: string; value: string; }[]; }</code> |

**Returns:** <code>Promise&lt;{ status: <a href="#awsamplifypluginresponsestatus">AwsAmplifyPluginResponseStatus</a>; userAttributes: <a href="#record">Record</a>&lt;string, string&gt;; }&gt;</code>

--------------------


### signOut()

```typescript
signOut() => Promise<{ status: AwsAmplifyPluginResponseStatus; }>
```

**Returns:** <code>Promise&lt;{ status: <a href="#awsamplifypluginresponsestatus">AwsAmplifyPluginResponseStatus</a>; }&gt;</code>

--------------------


### deleteUser()

```typescript
deleteUser() => Promise<{ status: AwsAmplifyPluginResponseStatus; }>
```

**Returns:** <code>Promise&lt;{ status: <a href="#awsamplifypluginresponsestatus">AwsAmplifyPluginResponseStatus</a>; }&gt;</code>

--------------------


### Interfaces


#### AWSCognitoConfig

| Prop                               | Type                                                                                                                     |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **`aws_cognito_region`**           | <code>string</code>                                                                                                      |
| **`aws_user_pools_id`**            | <code>string</code>                                                                                                      |
| **`aws_user_pools_web_client_id`** | <code>string</code>                                                                                                      |
| **`aws_cognito_identity_pool_id`** | <code>string</code>                                                                                                      |
| **`aws_mandatory_sign_in`**        | <code>string</code>                                                                                                      |
| **`oauth`**                        | <code>{ domain: string; scope: string[]; redirectSignIn: string; redirectSignOut: string; responseType: 'code'; }</code> |


#### CognitoAuthSession

| Prop               | Type                                                                                      |
| ------------------ | ----------------------------------------------------------------------------------------- |
| **`accessToken`**  | <code>string</code>                                                                       |
| **`idToken`**      | <code>string</code>                                                                       |
| **`identityId`**   | <code>string</code>                                                                       |
| **`refreshToken`** | <code>string</code>                                                                       |
| **`deviceKey`**    | <code>string \| null</code>                                                               |
| **`status`**       | <code><a href="#awsamplifypluginresponsestatus">AwsAmplifyPluginResponseStatus</a></code> |


### Type Aliases


#### Record

Construct a type with a set of properties K of type T

<code>{ [P in K]: T; }</code>


### Enums


#### AwsAmplifyPluginResponseStatus

| Members         | Value           |
| --------------- | --------------- |
| **`Ok`**        | <code>0</code>  |
| **`Ko`**        | <code>-1</code> |
| **`Cancelled`** | <code>-2</code> |
| **`SignedOut`** | <code>-3</code> |


#### CognitoHostedUIIdentityProvider

| Members        | Value                          |
| -------------- | ------------------------------ |
| **`Cognito`**  | <code>'COGNITO'</code>         |
| **`Google`**   | <code>'Google'</code>          |
| **`Facebook`** | <code>'Facebook'</code>        |
| **`Amazon`**   | <code>'LoginWithAmazon'</code> |
| **`Apple`**    | <code>'SignInWithApple'</code> |


#### AuthUserAttributeKey

| Members                 | Value                            |
| ----------------------- | -------------------------------- |
| **`address`**           | <code>'address'</code>           |
| **`birthDate`**         | <code>'birthDate'</code>         |
| **`email`**             | <code>'email'</code>             |
| **`familyName`**        | <code>'familyName'</code>        |
| **`gender`**            | <code>'gender'</code>            |
| **`givenName`**         | <code>'givenName'</code>         |
| **`locale`**            | <code>'locale'</code>            |
| **`middleName`**        | <code>'middleName'</code>        |
| **`name`**              | <code>'name'</code>              |
| **`nickname`**          | <code>'nickname'</code>          |
| **`phoneNumber`**       | <code>'phoneNumber'</code>       |
| **`picture`**           | <code>'picture'</code>           |
| **`preferredUsername`** | <code>'preferredUsername'</code> |

</docgen-api>
