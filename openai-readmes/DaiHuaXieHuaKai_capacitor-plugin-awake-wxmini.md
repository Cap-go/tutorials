# capacitor-plugin-awake-wxmini

capacitor-plugin-awake-wxmini可以让用户在App中唤起微信小程序，并在操作完成后返回到App中的一个插件。

### 支持平台

- Android

### 使用方法

```markdown
npm install capacitor-plugin-awake-wxmini --save

/_ 在android的MainActivity.java中添加插件 _/

// 引入插件
import com.brainy.awakewxmini.AwakeWxMiniPlugin;
// 添加插件
add(AwakeWxMiniPlugin.class);
```

### API

### awake

```
awake(options:AwakeOptions):void
```

App中调用改方法唤起微信小程序。

options:AwakeOptions

return:void

### Interface Used

#### AwakeOptions

```javascript

interface AwakeOptions {
    appId: string;
    // 应用id,微信开放平台申请的
    miniId:string;
    // 微信小程序原始Id，gh_开头
    path:string;
    // 小程序打开路径，不填则为小程序默认打开路径，可通过路径传参。如："/path?a=1&b=2"
    type:number;
    // 小程序打开类型，0：正式版，1：开发版，2:体验版
}

```

### Example

```markdown
    import { Plugins } from '@capacitor/core';

    Plugins.AwakeWxMiniPlugin.awake({
        appId: "",
        miniId: "",
        path: "",
        type: 0
    })
```

#### Tips:

如果需要实现小程序执行完成回到app中，需要做以下操作：

1.在项目的MainActivity同级目录中新建文件夹wxapi，并在wxapi中新建WXEntryActivity类，并填入以下内容

```markdown
package com.brainy.manager.wxapi;//注意更改为自己的包名路径

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.brainy.awakewxmini.AwakeWxMiniPlugin;
import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;
import com.tencent.mm.opensdk.constants.ConstantsAPI;
import com.tencent.mm.opensdk.modelbase.BaseReq;
import com.tencent.mm.opensdk.modelbase.BaseResp;
import com.tencent.mm.opensdk.modelbiz.WXLaunchMiniProgram;
import com.tencent.mm.opensdk.openapi.IWXAPI;
import com.tencent.mm.opensdk.openapi.IWXAPIEventHandler;

public class WXEntryActivity extends Activity implements IWXAPIEventHandler {
@Override
public void onCreate(Bundle savedInstanceState) {
super.onCreate(savedInstanceState);

        IWXAPI api = AwakeWxMiniPlugin.getWxApi(this);

        if (api == null) {
            startMainActivity();
        } else {
            api.handleIntent(getIntent(), this);
        }
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);

        setIntent(intent);

        IWXAPI api = AwakeWxMiniPlugin.getWxApi(this);
        if (api == null) {
            startMainActivity();
        } else {
            api.handleIntent(intent, this);
        }

    }

    @Override
    public void onResp(BaseResp resp) {
        Log.d("WX", resp.toString());

        PluginCall call = AwakeWxMiniPlugin.getCall();

        if (call == null) {
            startMainActivity();
            return ;
        }

        switch (resp.errCode) {
            case BaseResp.ErrCode.ERR_OK:
                switch (resp.getType()) {
                    case ConstantsAPI.COMMAND_LAUNCH_WX_MINIPROGRAM:
                        Log.d("WX", "miniprogram back;");
                        WXLaunchMiniProgram.Resp miniProResp = (WXLaunchMiniProgram.Resp) resp;
                        launchMiniProResp(miniProResp);
                        break;
                    default:
                        call.success();
                        break;
                }
                break;
            case BaseResp.ErrCode.ERR_USER_CANCEL:
                call.error("用户取消");
                break;
            case BaseResp.ErrCode.ERR_AUTH_DENIED:
                call.error("授权失败");
                break;
            case BaseResp.ErrCode.ERR_SENT_FAILED:
                call.error("发送请求失败");
                break;
            case BaseResp.ErrCode.ERR_UNSUPPORT:
                call.error("微信不支持");
                break;
            case BaseResp.ErrCode.ERR_COMM:
                call.error("普通错误");
                break;
            default:
                call.error("未知错误");
                break;
        }

        finish();
    }

    @Override
    public void onReq(BaseReq req) {
        finish();
    }

    protected void startMainActivity() {
        Intent intent = new Intent();
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        intent.setPackage(getApplicationContext().getPackageName());
        getApplicationContext().startActivity(intent);
    }

    protected void launchMiniProResp(WXLaunchMiniProgram.Resp launchMiniProResp){
        PluginCall call = AwakeWxMiniPlugin.getCall();
        String extraData =launchMiniProResp.extMsg; //对应小程序组件 <button open-type="launchApp"> 中的 app-parameter 属性
        JSObject response = new JSObject();
        try {
            response.put("extMsg", extraData);
        }catch (Exception e){
            Log.e("WX", e.getMessage());
        }
        call.success(response);
    }

}
```

2.在AndroidManifest.xml中加入新建的activity

```markdown
        <activity android:name=".wxapi.WXEntryActivity" android:label="@string/app_name" android:exported="true" android:taskAffinity="com.brainy.manager" android:launchMode="singleTask">
        </activity>
```

3.实现小程序回到app的回调

```markdown
    Plugins.AwakeWxMiniPlugin.awake({
        appId: "",
        miniId: "",
        path: "",
        type: 0
    }).then(res=>{

    })
```
