# capacitor-paytm-allinonesdk

capacitor plugin for paytm payment gateway

# Steps to install capacitor-paytm-allinonesdk plugin for android

1. install plugin using

```
  npm i capacitor-paytm-allinonesdk
```

2. import **in.zimbaroosgeeks.paytmAllinonesdk.AllInOneSDK** and add **add(AllInOneSDK.class)** to the init function of **MainActivity.java** located at project-root/android/app/src/main/java/**your-package-name**

3. Add the line below to ‘repositories’ section of your project-root/android/build.gradle.

```
allprojects {
 repositories {
     ...
     maven {
         url "https://artifactory.paytm.in/libs-release-local"
     }
  }
}
```

4. Add the line below to 'dependencies' section of your project-root/android/app/build.gradle.

```
implementation 'com.paytm.appinvokesdk:appinvokesdk:1.5.3'
```

# Steps to use capacitor-paytm-allinonesdk plugin

```
 import { Plugins } from '@capacitor/core';
 import 'capacitor-paytm-allinonesdk';
 import { PaymentIntentModel } from 'capacitor-paytm-allinonesdk';

 const { AllInOneSDK } = Plugins;
```
