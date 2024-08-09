# TIKI SDK (Capacitor Plugin)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

The TIKI SDK for Capacitor makes it easy to create monetizable zero-party data assets. Create a digitally signed, immutable audit trail with Title, License, Payable, and Receipt records. 

Build Data Reward programs that profit you and your users. 


**Learn more at 🍍 [mytiki.com](https://mytiki.com), or jump right into the 📘 [API reference](http://tiki-sdk-capacitor.mytiki.com).**


## Installing

Install the dependency from NPM

```
npm install @mytiki/tiki-sdk-capacitor
npx cap sync
```

That's it. And yes, it's really that easy.

### iOS only:

Add TikiSdk dependencies in Podfile
```
source 'https://github.com/tiki/PodspecRepo.git' # Add this

platform :ios, '14.0'

def capacitor_pods
  use_frameworks!
  pod 'Capacitor', :path => '../node_modules/@capacitor/ios'
  pod 'CapacitorCordova', :path => '../node_modules/@capacitor/ios'
end

target 'Plugin' do
  capacitor_pods
  use_frameworks! # Add this
  
  pod 'TikiSdkRelease', '3.0.0', :configurations => 'Release' # Add this
  pod 'TikiSdkDebug', '3.0.0', :configurations => 'Debug' # Add this
  
end

target 'PluginTests' do
  capacitor_pods
end
```

If Cocoapods can't find TikiSdk automatically, run `pod install --repo-update`.

## Initialization

_Note: Before you get started, you will need a Publishing ID. It's free to create one; simply log in to our 🧑‍💻 [Developer Console](https://console.mytiki.com) and create a new Project._


```ts
import { instance } from '@mytiki/tiki-sdk-capacitor'

instance.initialize('<YOUR USER ID>', '<YOUR PUBLISHING ID>')
        .then((rsp) => console.log(`${rsp.address} initialized`))
```

_NOTE: Currently only iOS and Android are supported, not Web. If you'd like to use TIKI for web see our [JS SDK](https://github.com/tiki/tiki-sdk-js) or open a new Issue (it's easy to add)._

# Contributing

- Use [GitHub Issues](https://github.com/tiki/tiki-sdk-capacitor/issues) to report any bugs you find or to request enhancements.
- If you'd like to get in touch with our team or other active contributors, pop in our 👾 [Discord](https://discord.gg/tiki).
- Please use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) if you intend to add code to this project.

## Project Structure
- `/src`: The primary TS interface for the plugin.
- `/android`: The native Android implementation.
- `/ios`: The native iOS implementation.
- `/example`: A simple example project using the plugin

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://mytiki.com"><img src="https://avatars.githubusercontent.com/u/3769672?v=4?s=100" width="100px;" alt="Mike Audi"/><br /><sub><b>Mike Audi</b></sub></a><br /><a href="https://github.com/tiki/tiki-sdk-capacitor/commits?author=mike-audi" title="Code">💻</a> <a href="https://github.com/tiki-bar/tiki-sdk-capacitor/commits?author=mike-audi" title="Documentation">📖</a> <a href="https://github.com/tiki/tiki-sdk-capacitor/pulls?q=is%3Apr+reviewed-by%3Amike-audi" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/ricardolg/"><img src="https://avatars.githubusercontent.com/u/8357343?v=4?s=100" width="100px;" alt="Ricardo Gonçalves"/><br /><sub><b>Ricardo Gonçalves</b></sub></a><br /><a href="https://github.com/tiki/tiki-sdk-capacitor/commits?author=ricardobrg" title="Code">💻</a> <a href="https://github.com/tiki/tiki-sdk-capacitor/pulls?q=is%3Apr+reviewed-by%3Aricardobrg" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.jessemonteiro.com"><img src="https://avatars.githubusercontent.com/u/8730443?v=4?s=100" width="100px;" alt="Jessé Monteiro"/><br /><sub><b>Jessé Monteiro</b></sub></a><br /><a href="https://github.com/tiki/tiki-sdk-capacitor/commits?author=JesseMonteiro" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Schuler-Gabriel"><img src="https://avatars.githubusercontent.com/u/85256777?v=4?s=100" width="100px;" alt="Gabriel Schuler Barros"/><br /><sub><b>Gabriel Schuler Barros</b></sub></a><br /><a href="https://github.com/tiki/tiki-sdk-capacitor/commits?author=Schuler-Gabriel" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
