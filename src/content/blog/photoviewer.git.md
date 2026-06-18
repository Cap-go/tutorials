```markdown


---
"title": "Using @capacitor-community/photoviewer package"
"description": "This markdown tutorial provides instructions for using the @capacitor-community/photoviewer package in your Capacitor project."
"created_at": "October 25, 2021"
"published": true
"slug": photoviewer
---

## Installation

```bash
npm install @capacitor-community/photoviewer
npx cap sync
```

Since version 3.0.4, modify the `capacitor.config.ts` to add the image location to save the image downloaded from an HTTP request to the internal disk.

```ts
const config: CapacitorConfig = {
  ...
  plugins: {
    PhotoViewer: {
      iosImageLocation: 'Library/Images',
      androidImageLocation: 'Files/Images',
    }
  }
  ...
};

export default config;


```
### iOS

- in Xcode, open `Info.plist` and add a new Information Property like `Privacy - Photo Library Usage Description` and set a value to `We need to write photos`. This is required to have the `Share`of images and the `create Movie` working.

### Android

- on the `res` project folder open the `file_paths.xml` file and add

```xml
    <files-path name="files" path="."/>
```

- open the `build.gradle (Project:android)` and make sure that `kotlin` is declared

```js
...
buildscript {
    ext.kotlin_version = '1.8.20'
    dependencies {
        ...
        classpath 'com.android.tools.build:gradle:8.0.0'
        classpath 'com.google.gms:google-services:4.3.15'
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
    }
}
...
```

- open the `build.gradle (Module: android.app)` and do the following

    - after `apply plugin: 'com.android.application'` add
        ```
        apply plugin: 'kotlin-android'
        apply plugin: 'kotlin-kapt'
        ```

    - in the `android` block add
        ```
        buildFeatures {
            dataBinding = true
        }
        ```

    - in the `repositories` block add
        ```
        maven { url 'https://jitpack.io' }
        ```
    - in the `dependencies` block add
        ```
        implementation "androidx.core:core-ktx:1.10.0"
        implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlin_version"
        ```

- Now run `Sync Project with Gradle Files` and you are ready.

### Web, PWA

The plugin works with the companion Stencil component `jeep-photoviewer`.
It is mandatory to install it

```
npm install --save-dev jeep-photoviewer@latest
```


### Build your App

When your app is ready

```bash
npm run build
npx cap copy
npx cap copy web
npx cap open android   // Android
npx cap open ios       // iOS
npm run serve          // Web
```

## Supported methods

| Name                        | Android | iOS  | Electron | Web  |
| :-------------------------- | :------ | :--- | :------- | :--- |
| echo                        | ✅       | ✅    | ❌        | ✅    |
| show                        | ✅       | ✅    | ❌        | ✅    |
| saveImageFromHttpToInternal | ❌       | ✅    | ❌        | ❌    |
| getInternalImagePaths       | ❌       | ✅    | ❌        | ❌    |


## Documentation

[API_Documentation](https://github.com/capacitor-community/photoviewer/blob/master/docs/API.md)

## Applications demonstrating the use of the plugin

### Ionic/Angular

- [angular-photoviewer-app](https://github.com/jepiqueau/angular-photoviewer-app)

### Ionic/Vue

- [vue-photoviewer-app](https://github.com/jepiqueau/vue-photoviewer-app)

```