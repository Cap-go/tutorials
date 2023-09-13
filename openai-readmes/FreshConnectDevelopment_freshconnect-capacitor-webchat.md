# freshconnect-capacitor-webchat

## 插件使用示例

- 安装插件
  ```
  cd src-capacitor
  npm i -S freshconnect-capacitor-webchat
  ```
- android代码修改

  - 将manifest中的org.capacitor.quasar.app字符串全部替换为当前app的包路径
  - 修改/src-capacitor/app工程下的build.gradle的google源为https://maven.aliyun.com/repository/google
  - quasar build -m capacitor -T android // 工程根目录执行
  - 启动android IDE
    ```
    cd src-capacitor // 进入android子工程
    npx cap update android
    npx cap open android //如果android工程未加载插件代码，可以通过Android IDE执行File/Invalidate Caches / Restart重启IDE
    ```
  - 将插件注册到capacitor

    ```
    public class MainActivity extends BridgeActivity {
      @Override
      public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Initializes the Bridge
        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
          // Additional plugins you've installed go here
          // Ex: add(TotallyAwesomePlugin.class);

          //注册插件代码
          add(FreshconnectWebChat.class);
        }});
      }
    }
    ```

  - 修改/src-capacitor/app/res/values/strings.xml
    ```
    新增如下配置
    <string name="app_id">微信开发平台申请的APP ID</string>
    ```

- JS代码
  - 引入插件
    ```
    import { Plugins } from "@capacitor/core";
    ```
  - 获取微信插件实例
    ```
    const { FreshconnectWebChat } = Plugins;
    ```
  - 业务调用
    ```
    var request = {
      text:"测试",
      description:"测试描述",
      scene:1
    }
    FreshconnectWebChat.shareText(request);
    ```

## 插件功能列表

- 分享文本

  ```
  var request = {
    text:string, // 文本内容
    description:string, // 文本描述
    scene:number //0:分享到会话 1:分享到朋友圈 2:分享到收藏
  }
  FreshconnectWebChat.shareText(request);
  ```

- 分享图片

  ```
  var request = {
    imgData:string, // 图片路径或者base64编码图片或者手机相对路径
    description:string,  // 文本描述
    scene:number //0:分享到会话 1:分享到朋友圈 2:分享到收藏
  }
  FreshconnectWebChat.sharePicture(request);
  ```

- 分享小程序

  ```
  var request = {
    webpageUrl:string, // 兼容低版本的网页链接
    userName:string, // 小程序原始 ID 获取方法：登录小程序管理后台-设置-基本设置-帐号信息
    path:string, //小程序页面路径；对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"
    title:string, // 小程序消息标题
    description:string, // 小程序描述
    thumbData:string, // 小程序缩略图
    miniprogramType:number //0:正式版小程序 1:测试版小程序 2:预览版小程序
  };
  FreshconnectWebChat.shareMiniProgram(request);
  ```

- 拉起小程序

  ```
  var request = {
    userName:string,  // 小程序原始 ID 获取方法：登录小程序管理后台-设置-基本设置-帐号信息
    path:string, //小程序页面路径；对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"
    miniprogramType:number //0:正式版小程序 1:测试版小程序 2:预览版小程序
  };
  FreshconnectWebChat.launchMiniProgram(request);
  ```

- 消息订阅

  ```
  var request = {
    templateID:string, // 消息模板ID
    scene:number //重定向后会带上 scene 参数，开发者可以填 0-10000 的整形值，用来标识订阅场值
  };
  FreshconnectWebChat.subscribeMessage(request).then(function (e) {
    console.info("subscribeMessage:" + JSON.stringify(e));
  });
  ```

- 微信认证
  ```
  FreshconnectWebChat.authLogin().then(function (e) {
    console.info("authLogin:" + JSON.stringify(e));
  });
  ```

## 本地插件测试

- 运行 sudo npm link

  在需要添加插件的工程运行下面的命令

- 运行 sudo npm link freshconnect-capacitor-webchat
- 运行 sudo npm install freshconnect-capacitor-webchat

## 插件开发注意的事情

- 在android studio中debug的时候会在node_modules中新增xml文件，如果之前已经debug过生成的文件后面会增加数字，当数字增加到3之后debug会出现报错，提示文件名校验失败。需要根据Android studio报错路径删除带数字的文件，删除后需要rebuild一下才会起效。
- 发布的时候需要切换npm源为官方源
  npm config set registry https://registry.npmjs.org

npm config set registry https://registry.npm.taobao.org
