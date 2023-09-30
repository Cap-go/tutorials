<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="128" height="128" /></p>

<h3 align="center">Metadata Config</h3>
<p align="center"><strong><code>capacitor-metadata-config</code></strong></p>
<p align="center">
  Capacitor plugin to read custom settings from AndroidManifest.xml and Info.plist
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2021?style=flat-square" />
  <a href="https://github.com/uioporqwerty/capacitor-metadata-config/actions?query=workflow%3A%22Plugin-CI%22"><img src="https://img.shields.io/github/workflow/status/uioporqwerty/capacitor-metadata-config/Plugin-CI?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/capacitor-metadata-config"><img src="https://img.shields.io/npm/l/capacitor-metadata-config?style=flat-square" /></a>
<br>
  <a href="https://www.npmjs.com/package/capacitor-metadata-config"><img src="https://img.shields.io/npm/dw/capacitor-metadata-config?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/capacitor-metadata-config"><img src="https://img.shields.io/npm/v/capacitor-metadata-config?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors-"><img src="https://img.shields.io/badge/all%20contributors-1-orange?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
</p>

## Maintainers

| Maintainer    | GitHub                                          | Social                                            |
| ------------- | ----------------------------------------------- | ------------------------------------------------- |
| Nitish Sachar | [uioporqwerty](https://github.com/uioporqwerty) | [LinkedIn](https://linkedin.com/in/nitish-sachar) |

## Installation

```bash
npm install capacitor-metadata-config
npx cap sync
```

## Configuration

There is no configuration required to setup this plugin. However, if you have custom key value pairs for a platform you'd like to read, the per platform instructions are as follows:

Android:
In `<application>` of `AndroidManifest.xml` add a `<meta-data android:name="myCustomKey" android:value="your-value"></meta-data>`.

iOS:
In `Info.plist` add your custom entry: `<key>myCustomKey</key><string>your-value</string>`.

## Usage

See the Metadata Config page in the following repo:

https://github.com/uioporqwerty/capacitor-testapp

tldr;

```
import { MetadataConfig } from 'capacitor-metadata-config'

const { value } = await MetadataConfig.read({ key: 'myCustomKey' })
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/uioporqwerty"><img src="https://avatars.githubusercontent.com/u/4053751?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nitish Sachar</b></sub></a><br /><a href="#maintenance-uioporqwerty" title="Maintenance">🚧</a> <a href="https://github.com/uioporqwerty/capacitor-metadata-config/commits?author=uioporqwerty" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
