# cap-nfc-plugin

## Installing

---

    $ npm i cap-nfc-plugin

## Methods

---

- 监听读取NFC信息: `NFCPlugin.addListener('readNFCResult',callback)`
- 监听开始写入NFC: `NFCPlugin.addListener('beginWriteNFC',callback)`
- 监听写入NFC成功或失败的结果: `NFCPlugin.addListener('writeNFCResult',callback)`
- NFC开始读写后,向android发送任务信息: `NFCPlugin.sendTaskInfo({taskInfo: Object})`

## Usage

---

Import the plugin you want to use into your x.component.ts file .

    import { Plugins, Capacitor } from '@capacitor/core';
    const { NFCPlugin } = Plugins;
    @Component({
      selector: 'x',
      templateUrl: './x.component.html'
    })

    export class AppComponent implements AfterViewInit {
        ngAfterViewInit(): void {
            NFCPlugin.addListener('readNFCResult', (info: any) => {
              console.log('readNFCResult was fired', info);
            });
            NFCPlugin.addListener('beginWriteNFC', (info: any) => {
              console.log('beginWriteNFC was fired', info);
            });
            NFCPlugin.addListener('writeNFCResult', (info: any) => {
              console.log('writeNFCResult was fired', info);
            });
        }

         sendTaskInfo() {
            NFCPlugin.sendTaskInfo({
              taskInfo: {
                id: 1,
                taskNumber: "111111",
                process: "joy",
              },
            });
        }
    }

## Update Your Project

---

just running command

    npm run android

## Upgrade Plugin

---

1.  `delete current project's node_modules folder and android folder`
2.  `npm i`
3.  `npm i cap-nfc-plugin@latest`
4.  `npx cap add android`
5.  `npm run android`
6.  到此步骤会自动打开Android studio, 找到`MainActivity.java`文件
7.  将Plugin添加到mainActivity中

        public class MainActivity extends BridgeActivity {
          @Override
          public void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);

            // Initializes the Bridge
            this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
              // Additional plugins you've installed go here
              // Ex: add(TotallyAwesomePlugin.class);
              add(NFCPlugin.class);
            }});
          }
        }

8.  找到`app/manifests/AndroidManifest.xml`文件，将`android:usesCleartextTraffic="true"`添加到`application`中

        <application
            android:allowBackup="true"
            android:icon="@mipmap/ic_launcher"
            android:label="@string/app_name"
            android:roundIcon="@mipmap/ic_launcher_round"
            android:supportsRtl="true"
            android:usesCleartextTraffic="true"
            android:theme="@style/AppTheme">

9.  现在可以打包出来啦，Finished

## Debugger In Chrome

---

open url `chrome://inspect/#devices` in chrome, you can find device in it
