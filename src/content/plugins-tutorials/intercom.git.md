---
"title": "Using @capacitor-community/intercom Package Tutorial"
"description": "A step-by-step guide on how to integrate and use the @capacitor-community/intercom package in your Capacitor project."
"created_at": "2022-01-28"
"published": true
"slug": "intercom-git"
---

## Configurations

### iOS setup

- `ionic start my-cap-app --capacitor`
- `cd my-cap-app`
- `npm install --save @foodello/intercom`
- `mkdir www && touch www/index.html`
- `npx cap add ios`
- add intercom keys to capacitor's configuration file

```
{
  "plugins": {
    "Intercom": {
      "iosApiKey": "ios_sdk-xxx",
      "iosAppId": "yyy"
    }
  }
}
```

- `npx cap open ios`
- sign your app at Xcode (general tab)

### Android setup

- `ionic start my-cap-app --capacitor`
- `cd my-cap-app`
- `npm install --save @foodello/intercom`
- `mkdir www && touch www/index.html`
- `npx cap add android`
- add intercom keys to capacitor's configuration file

```
{
  "plugins": {
    "Intercom": {
      "androidApiKey": "android_sdk-xxx",
      "androidAppId": "yyy"
    }
  }
}
```

- `npx cap open android`

Now you should be set to go. Try to run your client using `ionic cap run android --livereload`.

> Tip: every time you change a native code, you may need to clean up the cache and then run the app again.

## License

MIT

## Original repository's maintainers and sponsors

This repository is based on the wonderful work of the official `@capacitor-community/intercom` plugin. Here we want to acknowledge the mastermind and sponsors behind that work.

### Sponsors

<table>
  <tr>
    <td align="center">
      <a href="https://intenseloop.com">
      <img src="https://static.intenseloop.com/assets/logo-512x512.png" width="40" />
      </a>
    </td>
    <td>
      <a href="https://intenseloop.com">
      Intenseloop
      </a>
    </td>
  </tr>
</table>

### Maintainers

| Maintainer   | GitHub                                  | Social                                    |
| ------------ | --------------------------------------- | ----------------------------------------- |
| Stewan Silva | [stewones](https://github.com/stewones) | [@stewones](https://twitter.com/stewones) |

## Future plans

If you have any ideas on what we should include, please open a new issue for it.

## Contributors ✨

Thanks go to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

```