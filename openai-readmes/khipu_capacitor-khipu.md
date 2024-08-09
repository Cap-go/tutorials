# capacitor-khipu

Capacitor plugin for Khipu

## Install

```bash
npm install capacitor-khipu
npx cap sync
```

## iOS setup

No need for aditional steps

## Android setup

### Main Khipu repository

For Android to be able to locate the khenshin aar you need to add the maven repository of khenshin to the allproyects section of the android/build.gradle file.

Something like:

```
allprojects {
    repositories {
        google()
        mavenCentral()
        maven { url 'https://dev.khipu.com/nexus/content/repositories/khenshin' }
    }
}
```

Note that google() and mavenCentral() repos are usually already added.

### Jetpack compose and Kotlin

Khipu client for Android use Jetpack Compose technology, in order to do that the kotlin plugin must be enabled.

In the android/build.gradle file add the classpath for the `org.jetbrains.kotlin:kotlin-gradle-plugin:<version>` artifact

```
buildscript {
    
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:8.2.1'
        classpath 'com.google.gms:google-services:4.4.0'
        classpath 'org.jetbrains.kotlin:kotlin-gradle-plugin:1.9.0'

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}
```

Note that the classpath for `com.android.tools.build:gradle:<version>` and `com.google.gms:google-services:<version>` are usually already there.

Then in the android/app/build.gradle file add the plugin at the top of the file

```
apply plugin: 'com.android.application'
apply plugin: 'org.jetbrains.kotlin.android'
```

Note that the `com.android.application` plugin is usually already there.


## API

<docgen-index>

* [`startOperation(...)`](#startoperation)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startOperation(...)

```typescript
startOperation(options: StartOperationOptions) => Promise<KhipuResult>
```

| Param         | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| **`options`** | <code><a href="#startoperationoptions">StartOperationOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#khipuresult">KhipuResult</a>&gt;</code>

--------------------


### Interfaces


#### KhipuResult

| Prop                | Type                                                    |
| ------------------- | ------------------------------------------------------- |
| **`operationId`**   | <code>string</code>                                     |
| **`exitTitle`**     | <code>string</code>                                     |
| **`exitMessage`**   | <code>string</code>                                     |
| **`exitUrl`**       | <code>string</code>                                     |
| **`result`**        | <code>'OK' \| 'ERROR' \| 'WARNING' \| 'CONTINUE'</code> |
| **`failureReason`** | <code>string</code>                                     |
| **`continueUrl`**   | <code>string</code>                                     |
| **`events`**        | <code>KhipuEvent[]</code>                               |


#### KhipuEvent

| Prop            | Type                |
| --------------- | ------------------- |
| **`name`**      | <code>string</code> |
| **`timestamp`** | <code>string</code> |
| **`type`**      | <code>string</code> |


#### StartOperationOptions

| Prop              | Type                                                  |
| ----------------- | ----------------------------------------------------- |
| **`operationId`** | <code>string</code>                                   |
| **`options`**     | <code><a href="#khipuoptions">KhipuOptions</a></code> |


#### KhipuOptions

| Prop                | Type                                                |
| ------------------- | --------------------------------------------------- |
| **`locale`**        | <code>string</code>                                 |
| **`title`**         | <code>string</code>                                 |
| **`titleImageUrl`** | <code>string</code>                                 |
| **`skipExitPage`**  | <code>boolean</code>                                |
| **`theme`**         | <code>'light' \| 'dark' \| 'system'</code>          |
| **`colors`**        | <code><a href="#khipucolors">KhipuColors</a></code> |
| **`showFooter`**    | <code>boolean</code>                                |


#### KhipuColors

| Prop                         | Type                |
| ---------------------------- | ------------------- |
| **`lightBackground`**        | <code>string</code> |
| **`lightOnBackground`**      | <code>string</code> |
| **`lightPrimary`**           | <code>string</code> |
| **`lightOnPrimary`**         | <code>string</code> |
| **`lightTopBarContainer`**   | <code>string</code> |
| **`lightOnTopBarContainer`** | <code>string</code> |
| **`darkBackground`**         | <code>string</code> |
| **`darkOnBackground`**       | <code>string</code> |
| **`darkPrimary`**            | <code>string</code> |
| **`darkOnPrimary`**          | <code>string</code> |
| **`darkTopBarContainer`**    | <code>string</code> |
| **`darkOnTopBarContainer`**  | <code>string</code> |

</docgen-api>
