# @snewbie/capacitor-amap

<a href="https://www.npmjs.com/package/@snewbie/capacitor-amap"><img src="https://img.shields.io/npm/v/@snewbie/capacitor-amap.svg?sanitize=true" alt="Version"></a> <a href="https://www.npmjs.com/package/@snewbie/capacitor-amap"><img src="https://img.shields.io/npm/l/@snewbie/capacitor-amap.svg?sanitize=true" alt="License"></a>

参考 [Capacitor Community Google Maps](https://github.com/capacitor-community/google-maps) 实现方式完成使用 [高德开放平台 Android 地图 SDK](https://lbs.amap.com/api/android-sdk/gettingstarted) 开发的 Capacitor 插件（短期内仅维护安卓端）。

## Install

```bash
npm install @snewbie/capacitor-amap
npx cap sync
```

## API Keys

要在安卓平台上使用高德地图 SDK，需要申请一个 API Key。请参考 [高德地图 SDK 文档](https://lbs.amap.com/api/android-sdk/guide/create-project/get-key) 。

## Android（详细配置说明请参考 [高德地图 SDK 文档](https://lbs.amap.com/api/android-sdk/guide/create-project/dev-attention)）

Android 版高德地图 SDK 要求您将 API 密钥添加到项目中的 AndroidManifest.xml 文件中。

```xml
<meta-data android:name="com.amap.api.v2.apikey" android:value="请输入您的用户 Key"/>
```

要使用某些功能，还需要将以下权限添加到项目中的 AndroidManifest.xml 文件中：

```xml
<?xml version='1.0' encoding='utf-8'?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
  <application>
      <meta-data android:name="com.amap.api.v2.apikey" android:value="请输入您的用户 Key"/>
      <!-- 若使用到了定位能力则需要在此声明，并且需要在项目中引入：implementation 'com.amap.api:3dmap:latest.integration' -->
      <service android:name="com.amap.api.location.APSService" />
  </application>
  <!--允许访问网络，必选权限-->
  <uses-permission android:name="android.permission.INTERNET" />  

  <!--允许获取粗略位置，若用GPS实现定位小蓝点功能则必选-->
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" /> 

  <!--允许获取网络状态，用于网络定位，若无gps但仍需实现定位小蓝点功能则此权限必选-->
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />    

  <!--允许获取wifi网络信息，用于网络定位，若无gps但仍需实现定位小蓝点功能则此权限必选-->
  <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" /> 

  <!--允许获取wifi状态改变，用于网络定位，若无gps但仍需实现定位小蓝点功能则此权限必选-->
  <uses-permission android:name="android.permission.CHANGE_WIFI_STATE" /> 

  <!--允许写入扩展存储，用于数据缓存，若无此权限则写到私有目录-->
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" /> 

  <!--允许写设备缓存，用于问题排查-->
  <uses-permission android:name="android.permission.WRITE_SETTINGS" />  

  <!--允许读设备等信息，用于问题排查-->
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" /> 
</manifest>
```

## Usage

> 在 Android 上，地图在整个网络视图下呈现，并使用该组件在滚动事件期间管理其位置。这意味着，作为开发人员，您必须确保 Web 视图在所有层到最底层都是透明的。在典型的 Ionic 应用程序中，这意味着对 IonContent 和根 HTML 标记等元素设置透明度，以确保它可以被看到。如果你在 Android 上看不到你的地图，这应该是你检查的第一件事。

高德地图元素本身没有样式，所以你应该根据页面结构的布局对其进行样式设置。因为我们将视图渲染到这个槽中，所以元素本身没有宽度或高度，所以一定要明确设置这些宽度或高度。

```html
<div id="map" class="capacitor-map"></div>
```

```css
.capacitor-map {
  display: inline-block;
  width: 275px;
  height: 400px;
}
```

接下来，我们应该创建地图引用。这是通过从 Capacitor 插件导入 AMap 类并调用 create 方法，然后传入所需的参数来完成的。

```typescript
import { AMap } from '@snewbie/capacitor-amap';

const mapRef = document.getElementById('map');

const newMap = await AMap.create({
  id: 'my-map', // Unique identifier for this map instance
  element: mapRef, // reference to the capacitor-google-map element
  config: {
    center: {
      // The initial position to be rendered by the map
      lat: 33.6,
      lng: -117.9,
    },
    zoom: 8, // The initial zoom level to be rendered by the map
  },
});
```

## Full Examples

### Vue

```html
<template>
    <div id="map" ref="mapRef" :style="{ display: 'inline-block', width: '275px', height: '400px' }"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { AMap } from '@snewbie/capacitor-amap';

const mapRef = ref<HTMLElement | null>(null)
let newMap: Amap;

onMounted(async () => {
    if (!mapRef.value) { return; }

    newMap = await AMap.create({
        id: 'main',
        element: mapRef.value, 
        config: {
            center: {
                // The initial position to be rendered by the map
                lat: 33.6,
                lng: -117.9,
            },
            zoom: 8, // The initial zoom level to be rendered by the map
        },
    });
});

onUnmounted(() => {
  if (map) {
    map.destroy()
  }
})
</script>
```

## API

<docgen-index>

* [`updatePrivacyShow(...)`](#updateprivacyshow)
* [`updatePrivacyAgree(...)`](#updateprivacyagree)
* [`setTerrainEnable(...)`](#setterrainenable)
* [`create(...)`](#create)
* [`showIndoorMap(...)`](#showindoormap)
* [`setMapType(...)`](#setmaptype)
* [`setTrafficEnabled(...)`](#settrafficenabled)
* [`destroy()`](#destroy)
* [`enableTouch()`](#enabletouch)
* [`disableTouch()`](#disabletouch)
* [`enableMyLocation()`](#enablemylocation)
* [`disableMyLocation()`](#disablemylocation)
* [`setMyLocationStyle(...)`](#setmylocationstyle)
* [`setUiSettings(...)`](#setuisettings)
* [`cameraUpdatePosition(...)`](#cameraupdateposition)
* [`cameraZoomTo(...)`](#camerazoomto)
* [`setMapStatusLimits(...)`](#setmapstatuslimits)
* [`setOnCameraChangeListener(...)`](#setoncamerachangelistener)
* [`setOnIndoorBuildingActiveListener(...)`](#setonindoorbuildingactivelistener)
* [`setOnInfoWindowClickListener(...)`](#setoninfowindowclicklistener)
* [`setOnMapClickListener(...)`](#setonmapclicklistener)
* [`setOnMapLoadedListener(...)`](#setonmaploadedlistener)
* [`setOnMapLongClickListener(...)`](#setonmaplongclicklistener)
* [`setOnMapTouchListener(...)`](#setonmaptouchlistener)
* [`setOnMarkerClickListener(...)`](#setonmarkerclicklistener)
* [`setOnMarkerDragListener(...)`](#setonmarkerdraglistener)
* [`setOnMultiPointClickListener(...)`](#setonmultipointclicklistener)
* [`setOnMyLocationChangeListener(...)`](#setonmylocationchangelistener)
* [`setOnPOIClickListener(...)`](#setonpoiclicklistener)
* [`setOnPolylineClickListener(...)`](#setonpolylineclicklistener)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

高德地图 SDK 的 JavaScript 接口。

### updatePrivacyShow(...)

```typescript
updatePrivacyShow(isContains: boolean, isShow: boolean) => Promise<void>
```

更新隐私合规状态，需要在初始化地图之前完成

| Param            | Type                 | Description                |
| ---------------- | -------------------- | -------------------------- |
| **`isContains`** | <code>boolean</code> | 隐私权政策是否包含高德开平隐私权政策 true是包含 |
| **`isShow`**     | <code>boolean</code> | 隐私权政策是否弹窗展示告知用户 true是展示    |

**Since:** 0.0.2

--------------------


### updatePrivacyAgree(...)

```typescript
updatePrivacyAgree(isAgree: boolean) => Promise<void>
```

更新同意隐私状态，需要在初始化地图之前完成

| Param         | Type                 | Description             |
| ------------- | -------------------- | ----------------------- |
| **`isAgree`** | <code>boolean</code> | 隐私权政策是否取得用户同意 true是用户同意 |

**Since:** 0.0.2

--------------------


### setTerrainEnable(...)

```typescript
setTerrainEnable(isTerrainEnable: boolean) => Promise<void>
```

是否打开地形图, 打开地形图之后，底图会变成3D模式，添加的点线面等覆盖物也会自动带有高程。注意：需要在MapView创建之前调用。

| Param                 | Type                 | Description     |
| --------------------- | -------------------- | --------------- |
| **`isTerrainEnable`** | <code>boolean</code> | true为打开，默认false |

**Since:** 0.0.5

--------------------


### create(...)

```typescript
create(options: CreateMapArgs, callback?: MapListenerCallback<MapReadyCallbackData> | undefined) => Promise<AMap>
```

创建地图实例。

| Param          | Type                                                                                                                                | Description |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **`options`**  | <code><a href="#createmapargs">CreateMapArgs</a></code>                                                                             | - 创建地图的参数。  |
| **`callback`** | <code><a href="#maplistenercallback">MapListenerCallback</a>&lt;<a href="#mapreadycallbackdata">MapReadyCallbackData</a>&gt;</code> |             |

**Returns:** <code>Promise&lt;AMap&gt;</code>

**Since:** 0.0.1

--------------------


### showIndoorMap(...)

```typescript
showIndoorMap(enable: boolean) => Promise<void>
```

设置是否显示室内地图，默认不显示。注：如果打开了室内地图，会显示3D建筑物，即如果之前有设置不显示3D建筑物，3D建筑物也会被显示出来。

| Param        | Type                 | Description           |
| ------------ | -------------------- | --------------------- |
| **`enable`** | <code>boolean</code> | true：显示室内地图；false：不显示 |

**Since:** 0.0.5

--------------------


### setMapType(...)

```typescript
setMapType(type: MapType) => Promise<void>
```

设置地图模式。

| Param      | Type                                        |
| ---------- | ------------------------------------------- |
| **`type`** | <code><a href="#maptype">MapType</a></code> |

**Since:** 0.0.5

--------------------


### setTrafficEnabled(...)

```typescript
setTrafficEnabled(enable: boolean) => Promise<void>
```

设置是否打开交通路况图层。

| Param        | Type                 | Description |
| ------------ | -------------------- | ----------- |
| **`enable`** | <code>boolean</code> | 是否打开交通路况图层。 |

**Since:** 0.0.5

--------------------


### destroy()

```typescript
destroy() => Promise<void>
```

销毁地图实例。

**Since:** 0.0.1

--------------------


### enableTouch()

```typescript
enableTouch() => Promise<void>
```

设置地图允许被触控。

**Since:** 0.0.1

--------------------


### disableTouch()

```typescript
disableTouch() => Promise<void>
```

设置地图禁止被触控。

**Since:** 0.0.1

--------------------


### enableMyLocation()

```typescript
enableMyLocation() => Promise<void>
```

设置启动显示定位蓝点。

**Since:** 0.0.5

--------------------


### disableMyLocation()

```typescript
disableMyLocation() => Promise<void>
```

设置隐藏定位蓝点并不进行定位。

**Since:** 0.0.5

--------------------


### setMyLocationStyle(...)

```typescript
setMyLocationStyle(style: MyLocationStyle) => Promise<void>
```

设置定位蓝点的Style。

| Param       | Type                                                        |
| ----------- | ----------------------------------------------------------- |
| **`style`** | <code><a href="#mylocationstyle">MyLocationStyle</a></code> |

**Since:** 0.0.5

--------------------


### setUiSettings(...)

```typescript
setUiSettings(args: UiSettings) => Promise<void>
```

设置地图内置UI及手势控制器。

| Param      | Type                                              |
| ---------- | ------------------------------------------------- |
| **`args`** | <code><a href="#uisettings">UiSettings</a></code> |

**Since:** 0.0.5

--------------------


### cameraUpdatePosition(...)

```typescript
cameraUpdatePosition(args: CameraPosition) => Promise<void>
```

给地图设置一个新的状态。

| Param      | Type                                                      | Description |
| ---------- | --------------------------------------------------------- | ----------- |
| **`args`** | <code><a href="#cameraposition">CameraPosition</a></code> | 新的地图状态。     |

**Since:** 0.0.6

--------------------


### cameraZoomTo(...)

```typescript
cameraZoomTo(zoom: Number) => Promise<void>
```

设置地图缩放级别。

| Param      | Type                                      | Description                                       |
| ---------- | ----------------------------------------- | ------------------------------------------------- |
| **`zoom`** | <code><a href="#number">Number</a></code> | 地图缩放级别。地图的缩放级别一共分为 17 级，从 3 到 19。数字越大，展示的图面信息越精细。 |

**Since:** 0.0.6

--------------------


### setMapStatusLimits(...)

```typescript
setMapStatusLimits(args: MapStatusLimits) => Promise<void>
```

设置地图显示范围，无论如何操作地图，显示区域都不能超过该矩形区域。

| Param      | Type                                                        |
| ---------- | ----------------------------------------------------------- |
| **`args`** | <code><a href="#mapstatuslimits">MapStatusLimits</a></code> |

**Since:** 0.0.6

--------------------


### setOnCameraChangeListener(...)

```typescript
setOnCameraChangeListener(callback?: MapListenerCallback<any> | undefined) => Promise<void>
```

设置地图状态的监听接口。

| Param          | Type                                                                           |
| -------------- | ------------------------------------------------------------------------------ |
| **`callback`** | <code><a href="#maplistenercallback">MapListenerCallback</a>&lt;any&gt;</code> |

**Since:** 0.0.2

--------------------


### setOnIndoorBuildingActiveListener(...)

```typescript
setOnIndoorBuildingActiveListener(callback?: MapListenerCallback<any> | undefined) => Promise<void>
```

设置室内地图状态监听接口。

| Param          | Type                                                                           |
| -------------- | ------------------------------------------------------------------------------ |
| **`callback`** | <code><a href="#maplistenercallback">MapListenerCallback</a>&lt;any&gt;</code> |

**Since:** 0.0.2

--------------------


### setOnInfoWindowClickListener(...)

```typescript
setOnInfoWindowClickListener(callback?: MapListenerCallback<any> | undefined) => Promise<void>
```

设置marker的信息窗口点击事件监听接口。

| Param          | Type                                                                           |
| -------------- | ------------------------------------------------------------------------------ |
| **`callback`** | <code><a href="#maplistenercallback">MapListenerCallback</a>&lt;any&gt;</code> |

**Since:** 0.0.2

--------------------


### setOnMapClickListener(...)

```typescript
setOnMapClickListener(callback?: MapListenerCallback<any> | undefined) => Promise<void>
```

设置地图点击事件监听接口。

| Param          | Type                                                                           |
| -------------- | ------------------------------------------------------------------------------ |
| **`callback`** | <code><a href="#maplistenercallback">MapListenerCallback</a>&lt;any&gt;</code> |

**Since:** 0.0.2

--------------------


### setOnMapLoadedListener(...)

```typescript
setOnMapLoadedListener(callback?: MapListenerCallback<any> | undefined) => Promise<void>
```

设置地图加载完成监听接口。

| Param          | Type                                                                           |
| -------------- | ------------------------------------------------------------------------------ |
| **`callback`** | <code><a href="#maplistenercallback">MapListenerCallback</a>&lt;any&gt;</code> |

**Since:** 0.0.2

--------------------


### setOnMapLongClickListener(...)

```typescript
setOnMapLongClickListener(callback?: MapListenerCallback<any> | undefined) => Promise<void>
```

设置地图长按事件监听接口。

| Param          | Type                                                                           |
| -------------- | ------------------------------------------------------------------------------ |
| **`callback`** | <code><a href="#maplistenercallback">MapListenerCallback</a>&lt;any&gt;</code> |

**Since:** 0.0.2

--------------------


### setOnMapTouchListener(...)

```typescript
setOnMapTouchListener(callback?: MapListenerCallback<any> | undefined) => Promise<void>
```

设置地图触摸事件监听接口。

| Param          | Type                                                                           |
| -------------- | ------------------------------------------------------------------------------ |
| **`callback`** | <code><a href="#maplistenercallback">MapListenerCallback</a>&lt;any&gt;</code> |

**Since:** 0.0.2

--------------------


### setOnMarkerClickListener(...)

```typescript
setOnMarkerClickListener(callback?: MapListenerCallback<any> | undefined) => Promise<void>
```

设置marker点击事件监听接口。

| Param          | Type                                                                           |
| -------------- | ------------------------------------------------------------------------------ |
| **`callback`** | <code><a href="#maplistenercallback">MapListenerCallback</a>&lt;any&gt;</code> |

**Since:** 0.0.2

--------------------


### setOnMarkerDragListener(...)

```typescript
setOnMarkerDragListener(callback?: MapListenerCallback<any> | undefined) => Promise<void>
```

marker拖动事件监听接口。

| Param          | Type                                                                           |
| -------------- | ------------------------------------------------------------------------------ |
| **`callback`** | <code><a href="#maplistenercallback">MapListenerCallback</a>&lt;any&gt;</code> |

**Since:** 0.0.2

--------------------


### setOnMultiPointClickListener(...)

```typescript
setOnMultiPointClickListener(callback?: MapListenerCallback<any> | undefined) => Promise<void>
```

设置海量点单击事件监听。

| Param          | Type                                                                           |
| -------------- | ------------------------------------------------------------------------------ |
| **`callback`** | <code><a href="#maplistenercallback">MapListenerCallback</a>&lt;any&gt;</code> |

**Since:** 0..2

--------------------


### setOnMyLocationChangeListener(...)

```typescript
setOnMyLocationChangeListener(callback?: MapListenerCallback<any> | undefined) => Promise<void>
```

设置用户定位信息监听接口。

| Param          | Type                                                                           |
| -------------- | ------------------------------------------------------------------------------ |
| **`callback`** | <code><a href="#maplistenercallback">MapListenerCallback</a>&lt;any&gt;</code> |

**Since:** 0.0.2

--------------------


### setOnPOIClickListener(...)

```typescript
setOnPOIClickListener(callback?: MapListenerCallback<any> | undefined) => Promise<void>
```

设置底图poi点击事件监听接口。

| Param          | Type                                                                           |
| -------------- | ------------------------------------------------------------------------------ |
| **`callback`** | <code><a href="#maplistenercallback">MapListenerCallback</a>&lt;any&gt;</code> |

**Since:** 0.0.2

--------------------


### setOnPolylineClickListener(...)

```typescript
setOnPolylineClickListener(callback?: MapListenerCallback<any> | undefined) => Promise<void>
```

设置polyline点击事件监听接口。

| Param          | Type                                                                           |
| -------------- | ------------------------------------------------------------------------------ |
| **`callback`** | <code><a href="#maplistenercallback">MapListenerCallback</a>&lt;any&gt;</code> |

**Since:** 0.0.2

--------------------


### Interfaces


#### CreateMapArgs

| Prop              | Type                                              | Description                                                                                        | Default            | Since |
| ----------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------ | ----- |
| **`id`**          | <code>string</code>                               | 地图实例的唯一标识符。                                                                                        |                    | 0.0.1 |
| **`config`**      | <code><a href="#amapconfig">AMapConfig</a></code> | 地图的初始配置设置。                                                                                         |                    | 0.0.1 |
| **`element`**     | <code>HTMLElement</code>                          | The DOM element that the Google Map View will be mounted on which determines size and positioning. |                    | 0.0.1 |
| **`forceCreate`** | <code>boolean</code>                              | 如果已经存在具有提供的`id`的地图，则销毁并重新创建地图实例。                                                                   | <code>false</code> | 0.0.1 |


#### AMapConfig

| Prop                        | Type                                                      | Description                                             | Default                                | Since |
| --------------------------- | --------------------------------------------------------- | ------------------------------------------------------- | -------------------------------------- | ----- |
| **`width`**                 | <code>number</code>                                       | Override width for native map.                          |                                        | 0.0.1 |
| **`height`**                | <code>number</code>                                       | Override height for native map.                         |                                        | 0.0.1 |
| **`x`**                     | <code>number</code>                                       | Override absolute x coordinate position for native map. |                                        | 0.0.1 |
| **`y`**                     | <code>number</code>                                       | Override absolute y coordinate position for native map. |                                        | 0.0.1 |
| **`devicePixelRatio`**      | <code>number</code>                                       | Override pixel ratio for native map.                    | <code>1.00f</code>                     | 0.0.1 |
| **`logoPosition`**          | <code><a href="#logoposition">LogoPosition</a></code>     | 设置“高德地图”Logo的位置。                                        | <code>LOGO_POSITION_BOTTOM_LEFT</code> | 0.0.5 |
| **`mapType`**               | <code><a href="#maptype">MapType</a></code>               | 设置地图模式，默认普通地图。                                          | <code>MAP_TYPE_NORMAL</code>           | 0.0.5 |
| **`scaleControlsEnabled`**  | <code>boolean</code>                                      | 设置地图是否显示比例尺，默认为false。                                   | <code>false</code>                     | 0.0.5 |
| **`zoomControlsEnabled`**   | <code>boolean</code>                                      | 设置地图是否允许缩放。默认为true。                                     | <code>true</code>                      | 0.0.5 |
| **`compassEnabled`**        | <code>boolean</code>                                      | 设置指南针是否可用。默认为启用。                                        | <code>true</code>                      | 0.0.5 |
| **`scrollGesturesEnabled`** | <code>boolean</code>                                      | 设置地图是否可以手势滑动。默认为true。                                   | <code>true</code>                      | 0.0.5 |
| **`zoomGesturesEnabled`**   | <code>boolean</code>                                      | 设置地图是否可以通过手势进行缩放。默认为true。                               | <code>true</code>                      | 0.0.5 |
| **`tiltGesturesEnabled`**   | <code>boolean</code>                                      | 设置地图是否可以通过手势倾斜（3D效果），默认为true。                           | <code>true</code>                      | 0.0.5 |
| **`rotateGesturesEnabled`** | <code>boolean</code>                                      | 设置地图是否可以通过手势进行旋转。默认为true.                               | <code>true</code>                      | 0.0.5 |
| **`cameraOptions`**         | <code><a href="#cameraposition">CameraPosition</a></code> | 设置地图初始化时的地图状态， 默认地图中心点为北京天安门，缩放级别为 10.0f。               |                                        |       |


#### CameraPosition

相机位置，这个类包含了所有的可视区域的位置参数。

| Prop          | Type                                      | Description                              |
| ------------- | ----------------------------------------- | ---------------------------------------- |
| **`target`**  | <code><a href="#latlng">LatLng</a></code> | 目标位置的屏幕中心点经纬度坐标。                         |
| **`zoom`**    | <code>number</code>                       | 目标可视区域的缩放级别。                             |
| **`tilt`**    | <code>number</code>                       | 目标可视区域的倾斜度，以角度为单位。                       |
| **`bearing`** | <code>number</code>                       | 可视区域指向的方向，以角度为单位，从正北向逆时针方向计算，从0 度到360 度。 |


#### LatLng

存储经纬度坐标值的类，单位角度。

| Prop            | Type                | Description |
| --------------- | ------------------- | ----------- |
| **`latitude`**  | <code>number</code> | 纬度 (垂直方向)   |
| **`longitude`** | <code>number</code> | 经度 (水平方向)   |


#### MapReadyCallbackData

| Prop        | Type                |
| ----------- | ------------------- |
| **`mapId`** | <code>string</code> |


#### MyLocationStyle

| Prop                 | Type                                                      | Description                                                             |
| -------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------- |
| **`interval`**       | <code>number</code>                                       | 设置连续定位模式下的定位间隔，只在连续定位模式下生效，单次定位模式下不会生                                   |
| **`myLocationType`** | <code><a href="#mylocationtype">MyLocationType</a></code> | 设置定位蓝点展现模式。                                                             |
| **`showMyLocation`** | <code>boolean</code>                                      | 设置是否显示定位小蓝点，用于满足只想使用定位，不想使用定位小蓝点的场景，设置false以后图面上不再有定位蓝点的概念，但是会持续回调位置信息。 |


#### UiSettings

地图内置UI及手势控制器。

| Prop                          | Type                 | Description | Default            |
| ----------------------------- | -------------------- | ----------- | ------------------ |
| **`myLocationButtonEnabled`** | <code>boolean</code> | 设置定位按钮是否可见。 | <code>false</code> |


#### Number

An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.

| Method            | Signature                                           | Description                                                                                                                       |
| ----------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **toString**      | (radix?: number \| undefined) =&gt; string          | Returns a string representation of an object.                                                                                     |
| **toFixed**       | (fractionDigits?: number \| undefined) =&gt; string | Returns a string representing a number in fixed-point notation.                                                                   |
| **toExponential** | (fractionDigits?: number \| undefined) =&gt; string | Returns a string containing a number represented in exponential notation.                                                         |
| **toPrecision**   | (precision?: number \| undefined) =&gt; string      | Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits. |
| **valueOf**       | () =&gt; number                                     | Returns the primitive value of the specified object.                                                                              |


#### MapStatusLimits

通过指定的两个经纬度坐标（左下、右上）构建的一个矩形区域

| Prop            | Type                                      | Description |
| --------------- | ----------------------------------------- | ----------- |
| **`southwest`** | <code><a href="#latlng">LatLng</a></code> | 西南角坐标。      |
| **`northeast`** | <code><a href="#latlng">LatLng</a></code> | 东北角坐标。      |


### Type Aliases


#### MapListenerCallback

The callback function to be called when map events are emitted.

<code>(data: T): void</code>


### Enums


#### LogoPosition

| Members                           | Value          | Description |
| --------------------------------- | -------------- | ----------- |
| **`LOGO_POSITION_BOTTOM_LEFT`**   | <code>0</code> | 左下          |
| **`LOGO_POSITION_BOTTOM_CENTER`** | <code>1</code> | 底部居中        |
| **`LOGO_POSITION_BOTTOM_RIGHT`**  | <code>2</code> | 右下          |


#### MapType

| Members                   | Value          | Description |
| ------------------------- | -------------- | ----------- |
| **`MAP_TYPE_NORMAL`**     | <code>1</code> | 普通地图        |
| **`MAP_TYPE_SATELLITE`**  | <code>2</code> | 卫星地图        |
| **`MAP_TYPE_NIGHT`**      | <code>3</code> | 黑夜地图        |
| **`MAP_TYPE_NAVI`**       | <code>4</code> | 导航地图        |
| **`MAP_TYPE_BUS`**        | <code>5</code> | 公交地图        |
| **`MAP_TYPE_NAVI_NIGHT`** | <code>6</code> | 导航黑夜地图      |


#### MyLocationType

| Members                                       | Value          | Description                                               |
| --------------------------------------------- | -------------- | --------------------------------------------------------- |
| **`LOCATION_TYPE_SHOW`**                      | <code>0</code> | 只定位一次。                                                    |
| **`LOCATION_TYPE_LOCATE`**                    | <code>1</code> | 定位一次，且将视角移动到地图中心点。                                        |
| **`LOCATION_TYPE_FOLLOW`**                    | <code>2</code> | 连续定位、且将视角移动到地图中心点，定位蓝点跟随设备移动。（1秒1次定位）                     |
| **`LOCATION_TYPE_MAP_ROTATE`**                | <code>3</code> | 连续定位、且将视角移动到地图中心点，地图依照设备方向旋转，定位点会跟随设备移动。（1秒1次定位）          |
| **`LOCATION_TYPE_LOCATION_ROTATE`**           | <code>4</code> | 连续定位、且将视角移动到地图中心点，定位点依照设备方向旋转，并且会跟随设备移动。（1秒1次定位）默认执行此种模式。 |
| **`LOCATION_TYPE_LOCATION_ROTATE_NO_CENTER`** | <code>5</code> | 连续定位、蓝点不会移动到地图中心点，定位点依照设备方向旋转，并且蓝点会跟随设备移动。                |
| **`LOCATION_TYPE_FOLLOW_NO_CENTER`**          | <code>6</code> | 连续定位、蓝点不会移动到地图中心点，并且蓝点会跟随设备移动。                            |
| **`LOCATION_TYPE_MAP_ROTATE_NO_CENTER`**      | <code>7</code> | 连续定位、蓝点不会移动到地图中心点，地图依照设备方向旋转，并且蓝点会跟随设备移动。                 |

</docgen-api>
