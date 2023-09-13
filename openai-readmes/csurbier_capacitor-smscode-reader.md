# Capacitor SmsCode reader

iOS (only) Capacitor plugin to read incoming SMS code. Since iOS 12 when receiving a code from SMS, the code automatically appears above the keyboard.
See [Apple reference](https://support.apple.com/guide/iphone/automatically-fill-in-sms-passcodes-on-iphone-iphc89a3a3af/ios)

Then you just need to click on password and the UITextField will be fill automatically.

### Installation

```sh
$ npm install capacitor-smscode-reader
```

### Use

```sh
import { Plugins } from "@capacitor/core";
const { SmsCodeReader } = Plugins;

  async openSmsCode(){
       let codeReceived = await SmsCodeReader.present({"numberOfCharacters":4})
       console.log("Code received ",codeReceived)
   }
 }
```

### Parameters

numberOfCharacters : The lenght of the desired Pin code

### Credits:

See [KAPinField](https://github.com/kirualex/KAPinField) for managing UITextField with SMS code
See [SnapKit](https://github.com/SnapKit/SnapKit) for managing the UIViewController autolayout
