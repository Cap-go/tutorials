# capacitor-detect-mobile-services

<p>A capacitor plugin to detect which mobile services are available on the device.</p>
<p>This plugin is used to test whether an android device uses Google Mobile Services (GMS) or Huawei Mobile Services (HMS).</p>
<p>On iOS and web devices the GetMediaService() will return ios/web as the mobile service type.</p>
<p><b>Please note:</b> This plugin is under active development, any and all suggestions are welcome - Please create an <a href="https://github.com/IanCoetzee1/capacitor-detect-mobile-services/issues" target="_blank">issue</a> or feel free to contribute.</p>


## Install

```
npm install capacitor-detect-mobile-services

or

yarn add capacitor-detect-mobile-services
```
## Configure
<p>Open your projects main build.gradle file (usually located at android/build.gradle) and ensure that the Huawei repo is defined i.e :</p>
<p>
allprojects {<br>
&nbsp;&nbsp;&nbsp;&nbsp;repositories {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maven { url 'https://developer.huawei.com/repo/' }<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
}
</p>

## API

<docgen-index>

* [`GetMediaService()`](#getmediaservice)
* [`HasHMS()`](#hashms)
* [`HasGMS()`](#hasgms)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### GetMediaService()

```typescript
GetMediaService() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code><br>
<b>Possible values:</b> GMS, HMS, ios, web or unknown


--------------------


### HasHMS()

```typescript
HasHMS() => Promise<{ value: boolean; }>
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### HasGMS()

```typescript
HasGMS() => Promise<{ value: boolean; }>
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------

### Personal note
<p>This is my first public capacitor plugin, I am sure there is lots that I can learn and to be honest, I was not expecting to get any downloads initially, but was pleasantly surprised by the number of downloads. Though this plugin is functionally sound it requires further testing and feedback is always welcome via the <a href="https://github.com/IanCoetzee1/capacitor-detect-mobile-services/issues" target="_blank">issue tracker</a> on Github.</p>
</docgen-api>
