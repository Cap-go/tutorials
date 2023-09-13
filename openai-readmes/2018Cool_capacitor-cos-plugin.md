# capacitor-cos-plugin

腾讯cos上传插件

#### 插件安装

```
npm i capacitor-cos-plugin --save
npx cap sync
```

android工程中需在MainActivity中引入插件

```

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;
import com.plugin.cos.CosPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      add(CosPlugin.class);

    }});
  }
}
```

#### web接口

```
需要服务端提供接口返回一个临时授权信息，具体如何使用参考腾讯cos文档

 CosPlugin.upload(options: {
    signOptions:{
      region:string,    //区域
      secretId:string,   //临时secretId
      secretKey:string,  // 临时key
      sessionToken:string,
      startTime:number,
      expiredTime:number,  //签名过期时间，过期之后要重新请求签名
      sliceSize:number,  //分片大小
      isHttps:boolean   //是否使用https传输
    },
    bucket:string,   //存储桶
    cosUrl:string,   //cos 自定义的cdn访问路径，如果无可传空
    cosPath:string,  //cos上的存储路径
    localPath:string  //本地文件路径
   }): Promise<{usr:string}> ;

   成功返回上传成功后的文件路径
    {url:string}

```

#### 使用示例

```
import 'capacitor-cos-plugin'
import { Plugins} from '@capacitor/core'
const { CosPlugin} = Plugins
import { getCosSign } from '@/api/app'   //获取cos临时签名的接口
let cosSignData = {} // cos签名
export default {

    async uploadToCos(localPath) {
      const filename = `${localPath.slice(localPath.lastIndexOf('/') + 1)}`
      const expiredTime = cosSignData.expiredTime || 0
      try {
        if (expiredTime < Date.now() / 1000) {   //签名过期之后重新获取
          const data = await getCosSign()
          if (data.hasOwnProperty('credentials')) {
            cosSignData = data
          }
        }
      } catch (e) {
        this.$log(e)
      }

      const sign = cosSignData.credentials || {}
      const options = {
        signOptions: {
          region: process.env.NODE_ENV === 'production' ? 'ap-guangzhou' : 'ap-guangzhou',
          secretId: sign.tmpSecretId,
          secretKey: sign.tmpSecretKey,
          sessionToken: sign.sessionToken,
          startTime: cosSignData.startTime,
          expiredTime: cosSignData.expiredTime,
          sliceSize: 1024,
          isHttps: true
        },
        bucket: 'xxxx',
        cosPath: 'test/' + filename,
        localPath
      }
      return new Promise((resolve, reject) => {
        CosPlugin.upload(options).then((data) => {
          console.log('文件路径为：'+data.url)
          resolve()
        }, error => {
          reject()
        })
      })
    }
}
```
