# @leolovesmile/capacitor-mapnavigation introduction

This [capacitorjs](https://capacitorjs.com/) plugin is to add the mapbox map navigation capability to hybrid applications.

该capacitorjs的插件主要是用于支撑在**android** app内提供内建的实时导航能力。导航能力的建设是基于mapbox的移动端sdk实现的。

目前暂时仅支持通过`startNavigation`方法的参数的`directions`字段，传入兼容mapbox directions API的路径结果来启动实时导航。

## Install/安装

```bash
npm install @leolovesmile/capacitor-mapnavigation
npx cap sync
```

### 注意事项

插件使用到了mapbox的android sdk，虽然该sdk是开源的，但是仍然要依赖一些库和插件，根据mapbox的说明，需要做如下配置，才能使得您的capacitorjs插件在android studio内可以正常开发和运行。

- 首先，您要在mapbox的官网注册用户并[申请token](https://account.mapbox.com/access-tokens)，分别获得一个public access token和一个secret access token(MAPBOX_DOWNLOADS_TOKEN)。此处的方法可以搜索相关文章作为参考，或者查看mapbox的官网说明，比较详细，此处不赘述。
- 在你的ionic工程生成的android项目的gradle.properties文件中新建一个配置项，其取值应为上一步创建的 secret access token 的值，类似如下配置（注意，取值应该使用你自己获取的token值）

```properties
MAPBOX_DOWNLOADS_TOKEN=YOUR_MAPBOX_DOWNLOADS_TOKEN
```

- 在你的app模块的strings.xml文件中增加下面的配置项，取值应为之前创建的 public access token：

```xml
<string name="mapbox_access_token">MAPBOX_ACCESS_TOKEN</string>
```

- 在AndroidManifest.xml文件中增加权限配置

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```

- 在工程的 **build.gradle** 文件中增加maven仓库，参考如下（主要是*maven*部分的内容）

```gradle
allprojects {
    repositories {
        google()
        jcenter()
        maven {
            url 'https://api.mapbox.com/downloads/v2/releases/maven'
            authentication {
                basic(BasicAuthentication)
            }
            credentials {
                // Do not change the username below.
                // This should always be `mapbox` (not your username).
                username = "mapbox"
                // Use the secret token you stored in gradle.properties as the password
                password = project.properties['MAPBOX_DOWNLOADS_TOKEN'] ?: ""
            }
        }
    }
}
```

- 确保您的app模块的build.gradle配置的jdk是1.8、并且minSdkVersion为21或更高
- 接下来，就可以使用本插件了。参考调用代码如下：

```typescript
import { Plugins } from '@capacitor/core'

const { MapNavigation } = Plugins

await MapNavigation.startNavigation({
  startLatitude: startLatitude,
  startLongitude: startLongitude,
  endLatitude: endLatitude,
  endLongitude: endLongitude,
  enableSimulate: true,
  directions: responseText,
})
```

## API

<docgen-index>

- [`startNavigation(...)`](#startnavigation)
- [`checkPermissions()`](#checkpermissions)
- [`requestPermissions()`](#requestpermissions)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startNavigation(...)

```typescript
startNavigation(options: NavigationOptions) => any
```

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#navigationoptions">NavigationOptions</a></code> |

**Returns:** <code>any</code>

---

### checkPermissions()

```typescript
checkPermissions() => any
```

**Returns:** <code>any</code>

---

### requestPermissions()

```typescript
requestPermissions() => any
```

**Returns:** <code>any</code>

---

### Interfaces

#### NavigationOptions

| Prop                 | Type                 |
| -------------------- | -------------------- |
| **`startLatitude`**  | <code>number</code>  |
| **`startLongitude`** | <code>number</code>  |
| **`endLatitude`**    | <code>number</code>  |
| **`endLongitude`**   | <code>number</code>  |
| **`enableSimulate`** | <code>boolean</code> |
| **`directions`**     | <code>string</code>  |

#### PermissionStatus

| Prop                | Type                                                                      |
| ------------------- | ------------------------------------------------------------------------- |
| **`mapNavigation`** | <code>"prompt" \| "prompt-with-rationale" \| "granted" \| "denied"</code> |

</docgen-api>
