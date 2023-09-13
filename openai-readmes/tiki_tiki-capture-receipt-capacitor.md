# TIKI Capture Receipt (Capacitor Plugin)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

The TIKI Capture Receipt Plugin for Capacitor enables the extraction of receipt data from photos, email inboxes, and retailer accounts using [Microblink's](https://microblink.com) OCR technology.

This plugin wraps (and simplifies) Microblink's native [iOS](https://github.com/BlinkReceipt/blinkreceipt-ios) and [Android](https://github.com/BlinkReceipt/blinkreceipt-android) SDKs for use with Capacitor applications.

**Learn more at 🍍 [mytiki.com](https://mytiki.com), or jump right into the 📘 [API reference](https://tiki-capture-receipt-capacitor.mytiki.com).**

## Installing

Install the dependency from NPM

```
npm install @mytiki/tiki-capture-receipt-capacitor
npx cap sync
```

That's it. And yes, it's really that easy.

## Initialization

**IMPORTANT: Requires a valid Microblink BlinkReceipt License Key and Product Intelligence Key. [Reach out to get one →](https://mytiki.com)**

```ts
import { instance } from '@mytiki/tiki-capture-receipt-capacitor'

instance.initialize('<LICENSE KEY>', '<PRODUCT KEY>').then((rsp) => console.log(`initialized`))
```

_NOTE: Only iOS and Android are supported._

# Contributing

- Use [GitHub Issues](https://github.com/tiki/tiki-capture-receipt-capacitor/issues) to report any bugs you find or to request enhancements.
- If you'd like to get in touch with our team or other active contributors, pop in our 👾 [Discord](https://discord.gg/tiki).
- Please use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) if you intend to add code to this project.

## Project Structure

- `/src`: The primary TS interface for the plugin.
- `/android`: The native Android implementation.
- `/ios`: The native iOS implementation.
- `/example`: A simple example project using the plugin

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://mytiki.com"><img src="https://avatars.githubusercontent.com/u/3769672?v=4?s=100" width="100px;" alt="Mike Audi"/><br /><sub><b>Mike Audi</b></sub></a><br /><a href="https://github.com/tiki/tiki-capture-receipt-capacitor/commits?author=mike-audi" title="Code">💻</a> <a href="https://github.com/tiki/tiki-capture-receipt-capacitor/commits?author=mike-audi" title="Documentation">📖</a> <a href="https://github.com/tiki/tiki-capture-receipt-capacitor/pulls?q=is%3Apr+reviewed-by%3Amike-audi" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/ricardolg/"><img src="https://avatars.githubusercontent.com/u/8357343?v=4?s=100" width="100px;" alt="Ricardo Gonçalves"/><br /><sub><b>Ricardo Gonçalves</b></sub></a><br /><a href="https://github.com/tiki/tiki-capture-receipt-capacitor/commits?author=ricardobrg" title="Code">💻</a> <a href="https://github.com/tiki/tiki-capture-receipt-capacitor/pulls?q=is%3Apr+reviewed-by%3Aricardobrg" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Schuler-Gabriel"><img src="https://avatars.githubusercontent.com/u/85256777?v=4?s=100" width="100px;" alt="Gabriel Schuler Barros"/><br /><sub><b>Gabriel Schuler Barros</b></sub></a><br /><a href="https://github.com/tiki/tiki-capture-receipt-capacitor/commits?author=Schuler-Gabriel" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.jessemonteiro.com"><img src="https://avatars.githubusercontent.com/u/8730443?v=4?s=100" width="100px;" alt="Jessé Monteiro"/><br /><sub><b>Jessé Monteiro</b></sub></a><br /><a href="https://github.com/tiki/tiki-capture-receipt-capacitor/commits?author=JesseMonteiro" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
