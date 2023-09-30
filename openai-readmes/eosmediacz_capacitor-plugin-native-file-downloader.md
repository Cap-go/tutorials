# capacitor-plugin-native-file-downloader

Capacitor plugin for downloading files using native apis. Currently available only on web and Android.

## Install

```bash
npm install @eoscz/capacitor-plugin-native-file-downloader
npx cap sync
```

## API

<docgen-index>

- [`scheduleFileDownload(...)`](#schedulefiledownload)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### scheduleFileDownload(...)

```typescript
scheduleFileDownload(options: ScheduleFileDownloadOptions) => Promise<ScheduleFileDownloadResult>
```

Schedule file to be downloaded.
Returned Promise resolves when the download is scheduled (not when download completes).

| Param         | Type                                                                                |
| ------------- | ----------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#schedulefiledownloadoptions">ScheduleFileDownloadOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#schedulefiledownloadresult">ScheduleFileDownloadResult</a>&gt;</code>

---

### Interfaces

#### ScheduleFileDownloadResult

| Prop             | Type                | Description                                            |
| ---------------- | ------------------- | ------------------------------------------------------ |
| **`downloadId`** | <code>string</code> | The internal identifier of scheduled download process. |

#### ScheduleFileDownloadOptions

| Prop           | Type                | Description                                                                   |
| -------------- | ------------------- | ----------------------------------------------------------------------------- |
| **`url`**      | <code>string</code> | Url of the file to be downloaded. e.g. https://example.com/downloads/file.pdf |
| **`fileName`** | <code>string</code> | Name of the downloaded file (including extension). e.g. my-file.pdf           |

</docgen-api>
