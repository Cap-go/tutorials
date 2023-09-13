# CapBrowser

This [capacitor](https://capacitor.ionicframework.com/) plugin looks similar to [Browser](https://capacitor.ionicframework.com/docs/apis/browser) core plugin but with additional features like

- Http header support (iOS & Android)
- Browser url change event (iOS & Android)
- Can show LaunchImage as privacy screen (iOS only)
- Support for plain browser (iOS & Android)
- Custom configuration for browser UI (iOS & Android)

**API**

**_open_**

```javascript
CapBrowser.open({
  url: 'http://google.com/',
  headers: { one: '1', two: '2' },
  isPresentAfterPageLoad: true,
}).then(() => {
  console.log('showing the window')
})
```

**_openWebView - Opens a plain webView instance without navBar_**

```javascript
CapBrowser.openWebView({
  url: 'https://www.google.com/',
  headers: { one: '1', two: '2' },
  title: 'Custom Title',
  toolbarType: 'navigation',
  shareDisclaimer: {
    title: 'Disclaimer',
    message: 'Some Content',
    confirmBtn: 'Proceed',
    cancelBtn: 'No',
  },
  shareSubject: 'Some subject',
  isPresentAfterPageLoad: true,
}).then(() => {
  console.log('showing the window')
})
```

**_Close_**

```javascript
CapBrowser.close().then(() => {
  console.log('browser closed')
})
```

**_Available Events - Works for both android (on webView) and iOS_**

```javascript
CapBrowser.addListener("urlChangeEvent", (info:  any) => {
    console.log(info.url)
})

CapBrowser.addListener("confirmBtnClicked", (info:  any) => {
    // will be triggered when user clicks on confirm button when disclaimer is required, works only on iOS
    console.log(info.url)
})
```

**_Options_**

**toobarType**

```javascript
export enum ToolBarType {
    ACTIVITY = "activity",
    NAVIGATION = "navigation",
    BLANK = "blank",
    DEFAULT = ""
}
```

**TODO**

[ ] XXX

**Credits**

- [WKWebViewController](https://github.com/Meniny/WKWebViewController) - for iOS
