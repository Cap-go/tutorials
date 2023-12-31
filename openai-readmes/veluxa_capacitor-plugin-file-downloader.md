# capacitor-plugin-file-downloader

file download for capacitor

中文 ｜ [English](#english)

![android](https://img.shields.io/badge/android-pass-green)
![ios](https://img.shields.io/badge/ios-pass-green)

一个简单的ionic capacitor 文件下载 native 插件，支持android、ios

> **安装**：

```
npm install capacitor-plugin-file-downloader
ionic capacitor sync
```

> **配置**：

Android配置方法：

在根目录下找到 android 目录 ，依次找到 android/src/main/java/\*\*\*\* (嵌套包名文件夹)/activities/MainActivity.java，修改：

```
......
import com.veluxa.plugins.FileDownloader;

public class MainActivity extends BridgeActivity {
    ......
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
        ......
        add(FileDownloader.class);
    }});
    ......
}
```

IOS配置方法：
无需配置

> **调用**：

在需要使用到插件的文件，添加：

```ts
......
import 'capacitor-plugin-file-downloader';
import { Plugins } from '@capacitor/core';
const { FileDownloader } = Plugins

......

FileDownloader.download({
    url: fileUrl, //下载地址
    filename: filename //包含后缀的文件名
}).then(doc => {
    //下载成功回调
    console.log(doc.path);
}).catch(e => {
    //下载失败回调
})
......
```

---

<span id="english">file download for capacitor</span>

A simple ionic capacitor file download native plug-in, support android, ios

> **Install**：

```
npm install capacitor-plugin-file-downloader
ionic capacitor sync
```

> **Configuration**：

Android：

Find the android directory in the root directory, and then find android/src/main/java/\*\*\*\* (nested package name folder)/activities/MainActivity.java, Do the following changes:

```
......
import com.veluxa.plugins.FileDownloader;

public class MainActivity extends BridgeActivity {
    ......
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
        ......
        add(FileDownloader.class);
    }});
    ......
}
```

IOS: Don't need to configure

> **Use**：

In the files that need to use the plug-in:

```ts
......
import 'capacitor-plugin-file-downloader';
import { Plugins } from '@capacitor/core';
const { FileDownloader } = Plugins

......

FileDownloader.download({
    url: fileUrl, //download link
    filename: filename //The file name that contains the suffix
}).then(doc => {
    //success
    console.log(doc.path);
}).catch(e => {
    //error
})
......
```
