# capacitor-ionic-plugin-amap

Amap Capacitor

基于https://github.com/yilifangteam/capacitor-ionic-plugin-amap修改最新版本

大版本跟<a href="https://github.com/ionic-team/capacitor">@capacitor</a>  

> v7.x support `Capacitor 7`

## Install

```bash
npm install capacitor-ionic-plugin-amap
npx cap sync
```

### IOS
配置IOS_KEY
IOS安装插件后，需在项目的capacitor.config.ts/capacitor.config.json中为项目配置IOS_KEY
```typescript
const config: CapacitorConfig = {
    plugins: {
        AMap: {
            iosKey: "your key",
        },
    }
};
```
xcode16,需要安装Rosetta2
```
# 安装 Rosetta, 模拟器运行需要选择rosetta版本

/usr/sbin/softwareupdate --install-rosetta --agree-to-license
```


IOS安装插件后，需在XCODE的info.plist中为项目配置以下内容
```
    <key>NSLocationWhenInUseUsageDescription</key>
    <string>此应用需要定位权限才能正常使用</string>
```
<img width="1026" alt="image" src="./ios-setting.png">

### Android


add the following to your app's `build.gradle`:

```bash
// 这里sdk获取方式不能用这种填充，可以忽略这步，内部实现会自动处理appkey
manifestPlaceholders = [
  AMAP_APPKEY: "map key",
]
```

<img width="1384" alt="image" src="./android-setting.png">

## API

<docgen-index>

* [`init()`](#init)
* [`locate()`](#locate)
* [`weather(...)`](#weather)
* [`calculate(...)`](#calculate)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### init()

```typescript
init() => void
```

--------------------


### locate()

```typescript
locate() => Promise<Location | undefined>
```

**Returns:** <code>Promise&lt;<a href="#location">Location</a>&gt;</code>

--------------------


### weather(...)

```typescript
weather(param: { adCode: string; }) => Promise<WeatherInfo | undefined>
```

| Param       | Type                             |
| ----------- | -------------------------------- |
| **`param`** | <code>{ adCode: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#weatherinfo">WeatherInfo</a>&gt;</code>

--------------------


### calculate(...)

```typescript
calculate(params: { startLatitude: number; startLongitude: number; endLatitude: number; endLongitude: number; }) => Promise<{ distance: number; } | undefined>
```

| Param        | Type                                                                                                       |
| ------------ | ---------------------------------------------------------------------------------------------------------- |
| **`params`** | <code>{ startLatitude: number; startLongitude: number; endLatitude: number; endLongitude: number; }</code> |

**Returns:** <code>Promise&lt;{ distance: number; }&gt;</code>

--------------------


### Interfaces


#### Location

| Prop               | Type                                  | Description |
| ------------------ | ------------------------------------- | ----------- |
| **`accuracy`**     | <code>number</code>                   | 定位精度        |
| **`adCode`**       | <code>string</code>                   | 区域编码        |
| **`address`**      | <code>string</code>                   | 地址          |
| **`city`**         | <code>string</code>                   | 城市\|区       |
| **`cityCode`**     | <code>string</code>                   | 城市编码        |
| **`latitude`**     | <code>number</code>                   | 精度          |
| **`longitude`**    | <code>number</code>                   | 纬度          |
| **`aoiName`**      | <code>string</code>                   | 当前定位点的AOI信息 |
| **`country`**      | <code>string</code>                   | 国家          |
| **`district`**     | <code>string</code>                   | 城区信息        |
| **`poiName`**      | <code>string</code>                   | 当前定位点的POI信息 |
| **`province`**     | <code>string</code>                   | 省份          |
| **`street`**       | <code>string</code>                   | 街道          |
| **`streetNum`**    | <code>string</code>                   | 街道号         |
| **`locationTime`** | <code><a href="#date">Date</a></code> | 定位时间        |


#### Date

Enables basic storage and retrieval of dates and times.

| Method                 | Signature                                                                                                    | Description                                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| **toString**           | () =&gt; string                                                                                              | Returns a string representation of a date. The format of the string depends on the locale.                                              |
| **toDateString**       | () =&gt; string                                                                                              | Returns a date as a string value.                                                                                                       |
| **toTimeString**       | () =&gt; string                                                                                              | Returns a time as a string value.                                                                                                       |
| **toLocaleString**     | () =&gt; string                                                                                              | Returns a value as a string value appropriate to the host environment's current locale.                                                 |
| **toLocaleDateString** | () =&gt; string                                                                                              | Returns a date as a string value appropriate to the host environment's current locale.                                                  |
| **toLocaleTimeString** | () =&gt; string                                                                                              | Returns a time as a string value appropriate to the host environment's current locale.                                                  |
| **valueOf**            | () =&gt; number                                                                                              | Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.                                                      |
| **getTime**            | () =&gt; number                                                                                              | Gets the time value in milliseconds.                                                                                                    |
| **getFullYear**        | () =&gt; number                                                                                              | Gets the year, using local time.                                                                                                        |
| **getUTCFullYear**     | () =&gt; number                                                                                              | Gets the year using Universal Coordinated Time (UTC).                                                                                   |
| **getMonth**           | () =&gt; number                                                                                              | Gets the month, using local time.                                                                                                       |
| **getUTCMonth**        | () =&gt; number                                                                                              | Gets the month of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                             |
| **getDate**            | () =&gt; number                                                                                              | Gets the day-of-the-month, using local time.                                                                                            |
| **getUTCDate**         | () =&gt; number                                                                                              | Gets the day-of-the-month, using Universal Coordinated Time (UTC).                                                                      |
| **getDay**             | () =&gt; number                                                                                              | Gets the day of the week, using local time.                                                                                             |
| **getUTCDay**          | () =&gt; number                                                                                              | Gets the day of the week using Universal Coordinated Time (UTC).                                                                        |
| **getHours**           | () =&gt; number                                                                                              | Gets the hours in a date, using local time.                                                                                             |
| **getUTCHours**        | () =&gt; number                                                                                              | Gets the hours value in a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                       |
| **getMinutes**         | () =&gt; number                                                                                              | Gets the minutes of a <a href="#date">Date</a> object, using local time.                                                                |
| **getUTCMinutes**      | () =&gt; number                                                                                              | Gets the minutes of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                           |
| **getSeconds**         | () =&gt; number                                                                                              | Gets the seconds of a <a href="#date">Date</a> object, using local time.                                                                |
| **getUTCSeconds**      | () =&gt; number                                                                                              | Gets the seconds of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                           |
| **getMilliseconds**    | () =&gt; number                                                                                              | Gets the milliseconds of a <a href="#date">Date</a>, using local time.                                                                  |
| **getUTCMilliseconds** | () =&gt; number                                                                                              | Gets the milliseconds of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                      |
| **getTimezoneOffset**  | () =&gt; number                                                                                              | Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).                             |
| **setTime**            | (time: number) =&gt; number                                                                                  | Sets the date and time value in the <a href="#date">Date</a> object.                                                                    |
| **setMilliseconds**    | (ms: number) =&gt; number                                                                                    | Sets the milliseconds value in the <a href="#date">Date</a> object using local time.                                                    |
| **setUTCMilliseconds** | (ms: number) =&gt; number                                                                                    | Sets the milliseconds value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                              |
| **setSeconds**         | (sec: number, ms?: number \| undefined) =&gt; number                                                         | Sets the seconds value in the <a href="#date">Date</a> object using local time.                                                         |
| **setUTCSeconds**      | (sec: number, ms?: number \| undefined) =&gt; number                                                         | Sets the seconds value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                   |
| **setMinutes**         | (min: number, sec?: number \| undefined, ms?: number \| undefined) =&gt; number                              | Sets the minutes value in the <a href="#date">Date</a> object using local time.                                                         |
| **setUTCMinutes**      | (min: number, sec?: number \| undefined, ms?: number \| undefined) =&gt; number                              | Sets the minutes value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                   |
| **setHours**           | (hours: number, min?: number \| undefined, sec?: number \| undefined, ms?: number \| undefined) =&gt; number | Sets the hour value in the <a href="#date">Date</a> object using local time.                                                            |
| **setUTCHours**        | (hours: number, min?: number \| undefined, sec?: number \| undefined, ms?: number \| undefined) =&gt; number | Sets the hours value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                     |
| **setDate**            | (date: number) =&gt; number                                                                                  | Sets the numeric day-of-the-month value of the <a href="#date">Date</a> object using local time.                                        |
| **setUTCDate**         | (date: number) =&gt; number                                                                                  | Sets the numeric day of the month in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                        |
| **setMonth**           | (month: number, date?: number \| undefined) =&gt; number                                                     | Sets the month value in the <a href="#date">Date</a> object using local time.                                                           |
| **setUTCMonth**        | (month: number, date?: number \| undefined) =&gt; number                                                     | Sets the month value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                     |
| **setFullYear**        | (year: number, month?: number \| undefined, date?: number \| undefined) =&gt; number                         | Sets the year of the <a href="#date">Date</a> object using local time.                                                                  |
| **setUTCFullYear**     | (year: number, month?: number \| undefined, date?: number \| undefined) =&gt; number                         | Sets the year value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                      |
| **toUTCString**        | () =&gt; string                                                                                              | Returns a date converted to a string using Universal Coordinated Time (UTC).                                                            |
| **toISOString**        | () =&gt; string                                                                                              | Returns a date as a string value in ISO format.                                                                                         |
| **toJSON**             | (key?: any) =&gt; string                                                                                     | Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. |


#### WeatherInfo

| Prop                | Type                              | Description |
| ------------------- | --------------------------------- | ----------- |
| **`type`**          | <code>'live' \| 'forecast'</code> |             |
| **`weather`**       | <code>string</code>               | 天气          |
| **`temperature`**   | <code>string</code>               | 温度          |
| **`city`**          | <code>string</code>               | 城市\|区       |
| **`province`**      | <code>string</code>               | 省份          |
| **`windDirection`** | <code>string</code>               | 风向          |
| **`windPower`**     | <code>string</code>               | 风力          |
| **`humidity`**      | <code>string</code>               | 湿度          |

</docgen-api>


DEMO 

// location.service.ts
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Helper } from '../helper';
import { AMap } from 'capacitor-ionic-plugin-amap';
@Injectable({
    providedIn: 'root'
})
export class LocationService {
    constructor(private platform: Platform, private helper: Helper) {
        AMap.init();
    }

    async getCurrentPosition() {
        await this.platform.ready();
        try {
            const position = await AMap.locate();
            return position;
        } catch (err) {
            console.error('获取位置失败:', err);
            throw err;
        }
    }

    async getWeather(adCode: string) {
        await this.platform.ready();
        try {
            const position = await AMap.weather({ adCode });
            return position;
        } catch (err) {
            console.error('获取位置失败:', err);
            throw err;
        }
    }
}