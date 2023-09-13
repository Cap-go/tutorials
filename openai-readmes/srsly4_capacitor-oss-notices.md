[![Node version](https://img.shields.io/node/v/capacitor-oss-notices.svg?style=flat)](https://www.npmjs.com/package/capacitor-oss-notices)

# capacitor-oss-notices

Provides native bridge for displaying Open Source licenses from Gradle and Pod dependencies

## Install

```bash
npm install capacitor-oss-notices
npx cap sync
```

## Android setup

Add to your Android root's build.gradle a buildscript dependency:

```
classpath 'com.google.android.gms:oss-licenses-plugin:0.10.4'
```

And at the end of the app's build.gradle:

```
apply plugin: 'com.google.android.gms.oss-licenses-plugin'
```

## iOS setup

Add at the end of your Podfile a post install hook:

```
post_install do |installer|
  pods_dir = File.dirname(installer.pods_project.path)
  at_exit { `ruby #{pods_dir}/Carte/Sources/Carte/carte.rb configure` }
end
```

## API

<docgen-index>

- [`showNotices()`](#shownotices)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### showNotices()

```typescript
showNotices() => any
```

**Returns:** <code>any</code>

---

</docgen-api>
