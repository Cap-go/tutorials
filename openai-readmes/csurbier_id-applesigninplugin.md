# IDAppleSignInPlugIn

This plugin let's you implement Apple SignIn into your Ionic application.

# iOS plugin only

- You need to add the Apple Signin capabilities to your Ionic project

# Installation

```sh
npm install id-applesigninplugin
```

### Usage example in a Ionic page:

```sh
import { Component } from '@angular/core';
import { Plugins } from "@capacitor/core";
const { IDAppleSignInPlugIn } = Plugins

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
     IDAppleSignInPlugIn.doAppleLogin().then((info)=>{
      if (info){
        console.log("on a info ")
        console.log(info)
        let identityTokenString = info["identityTokenString"]
        if (identityTokenString){
          console.log("on recoit "+identityTokenString)
        }
      }
      else{
        console.log("Pas de info")
      }

     })
}

```

### API

```sh
IDAppleSignInPlugIn.doAppleLogin().then((info)=>{

})
```

You will get the sign in information in the info parameter:

| Variables           | Description      |
| ------------------- | ---------------- |
| user                | user identifier  |
| email               | email user       |
| identityTokenString | Token identifier |

...
Please refer to Apple documentation to know possible values
https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidcredential

## License

MIT

**Free Software, Hell Yeah!**
