# capacitor-sso

## installation

```
$ yarn add capacitor-sso
$ npx cap sync
$ npx cap update
```

## url scheme 追加

![](https://user-images.githubusercontent.com/13277036/78865342-65c07f80-7a78-11ea-88c9-631396e12a03.png)

## capacitor.config.json に追加

```json
  "plugins": {
    "Sso": {
      "googleClientId": "564604678196-dv5jpnt1j84nhcscnv9fesnfjkvghu1c.apps.googleusercontent.com",
      "googleReversedId": "com.googleusercontent.apps.564604678196-dv5jpnt1j84nhcscnv9fesnfjkvghu1c"
    }
  },
```
