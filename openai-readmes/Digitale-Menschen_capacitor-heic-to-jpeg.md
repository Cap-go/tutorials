# capacitor-heic-to-jpeg

A streamlined plugin designed to convert HEIC images to JPEG format. Compatible with both iOS and Android platforms.
Simply provide a URI (either an absolute path or an Android content URI) pointing to a HEIC/HEIF image. The plugin will
process the conversion and return a new URI for the JPEG output.

Converted JPEGs are stored in the **applications cache directory**, and must either be cleaned manually or just let the
operating system do its job.

## Contributing

Please don't hesitate to contribute by creating pull requests.

## Install

```bash
npm install @digitalemenschen/capacitor-heic-to-jpeg
npx cap sync
```

## API

<docgen-index>

* [`convertToJpeg(...)`](#converttojpeg)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### convertToJpeg(...)

```typescript
convertToJpeg(options: { path: string; }) => Promise<{ path: string; }>
```

Provide the path (either an absolute path or an Android content URI) pointing to the HEIC/HEIF image you'd like to convert.
If you provide an Android content URI, the plugin will also return an Android content URI in exchange.

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ path: string; }</code> |

**Returns:** <code>Promise&lt;{ path: string; }&gt;</code>

--------------------

</docgen-api>

## License

Released under MIT license, see [LICENSE](LICENSE).
