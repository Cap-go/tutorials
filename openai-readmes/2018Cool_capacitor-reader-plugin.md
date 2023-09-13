# capacitor-reader-plugin

文档阅读器（ Document preview plugin）

#### 支持平台

`iOS&Android`

#### 支持的文档格式与技术说明

```
Android实现使用腾讯x5内核tbs，iOS借助于系统webview实现，
支持预览pdf，excel，ppt，doc，docx，txt等常见文档格式。
```

#### 如何使用

1. 安装插件

```
npm i capacitor-reader-plugin --save
npx cap sync

```

2. Android capacitor工程配置

Android需要特殊设置下，ios无需特殊设置

- APP AndroidManifest.xml 中添加TBS的Activity

```
        <activity
            android:name="com.library.fileviewer.tbs.TBSFileViewActivity"
            android:theme="@style/CustomActionBarTheme">

        </activity>
```

- 工程build.gradle 设置ndk，加到defaultConfig中

```
android {
    compileSdkVersion 28
    defaultConfig {
        ndk {
            abiFilters "armeabi"
        }
    }
}
```

- 在MainActivit中引入插件，并初始化x5内核

```

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;
import com.reader.plugin.ReaderPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      add(ReaderPlugin.class);

    }});
    ReaderPlugin.initX5(getApplicationContext());   //初始化x5内核
  }
}

```

#### 接口描述

```
openFile(options: { url: string,title:string,navbarColor:string }): Promise<any>;

url: 文档的链接如 https://test.abc/abc.pdf
title: 文档标题
navbarColor: 导航栏背景颜色,支持16进制格式颜色
```

#### 使用示例

```
import 'capacitor-reader-plugin'
import { Plugins} from '@capacitor/core'
const { ReaderPlugin } = Plugins

// 打开文件阅读
function openFile(doc) {
    ReaderPlugin.openFile({ url: doc.url, title: doc.name, navbarColor: '#1989fa' })
}
```

#### 注意事项

```
Android是借助于腾讯tbs来实现的，由于Google Play对于动态下发⼆进制代码的限制，
⽆法针对Google Play版本的app动态投放内核，所以需要上架Google Play的APP暂时⽆法使⽤X5内核，
如果您的Android应用是要在Google Play发布上架，请勿使用此插件。
```
