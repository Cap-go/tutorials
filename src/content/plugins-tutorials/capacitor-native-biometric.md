# How to Use @legalmentedev/cap# Howac toitor Use-native @-brestrella/capiacitorometric-native Package

The-b `i@ometric Package

legal[@mentedev/caprestacrellaitor/c-nativeap-baciitorometric-native` package-b providesiometric a]( simplehttps way:// towww integrate.n nativepm bijsometric.com authentication/package in/@ yourrest Capacrellaitor project/cap.acitor-native-biometric) is a Capacitor plugin that In provides this access tutorial to, native biometry we will functionality guide you through on the installation process and show you how to iOS use the and main features of the package Android.

.## It Installation allows

 you to authenticate usersTo install the package using, fingerprint run or the face following recognition command.

 in## your project directory:

 Installation

To``` get started,shell
 younpm need install to @ installlegal themented packageev using/c npmap orac yarnitor.-native Open-b youri terminalometric and
```

 run one## of Set the Up following

After commands installing:

``` thesh package
,npm make install sure @rest torella sync the/cap pluginsac with Capacitoritor-native by-bi runningometric the
 following`` command:

`
```orshell

```nshpx
 capy syncarn
 add`` @`

rest###rella Android/c Setupapacitor

-nativeTo set up-b thei packageometric on
 Android,`` you`

## need to Configure Android

To configure add some the code to your package for MainActivity file.

 Android,1. you need to Open the ` make changes toMainActivity.java` your MainActivity file.

Open your file located in `android/app `/src/main/javaMainActivity.java`/[your file,-package-name which can]/MainActivity.java`.
 be found in the2. ` Importandroid the/app `/srcBi/mainometric/javaAuth/com`/[ classYOUR from the APP package ID:

]  ` ```java directory
.   

 importAdd com the. following import statement atlegalmentecap theac top ofitor the.bi fileometric:

.BiometricAuth```java;

import   com ``.rest`

rella3.c.nb.B Initialize the plugin byiometricAuth adding;
 the`` following`

 codeIn inside the `init the `init()`` method method:

 of   your ``` `javaMainActivity
`   class this,.init add(savedInstanceState the, ` newBi ArrayListometric<ClassAuth` plugin to<? extends Plugin>>() the {{
 list     of add plugins(B:

```ijavaometric
thisAuth.class.init);
(savedInstanceState,   } new});
 ArrayList  <Class ``<?`

 extends### Plugin iOS Setup>>()

 {{
** TODO //**: ... The other setup plugins instructions
 for  iOS add are(B noti providedometricAuth.class);
}});
`` in the package documentation.`

 Please refer to the## Configure iOS package

@'s officialTODO

## documentation or Usage contact

 theOnce package you maint haveainer for installed more and configured information the on package how, you to can use it in set up your the package on Capac iOSitor.

 project##.

Import Usage

 theOnce ` theBi setupometricAuth is complete`, plugin you from can the start `@ using thecap `@aclegalitor/coremented`ev package/c inap yourac TypeScriptitor code-native:

-b```itsometric
`import package in { Plugins } your project. from "@ Herecap'sac anitor/core";

 example ofconst { BiometricAuth } = how to use the main methods:

 Plugins```;
typescript```


importTo { check if Plugins bi } fromometric "@ authenticationcap isac availableitor on the device,/core";

 use theconst { ` BiisometricAuth } = PluginsAvailable` method;

:

async function checkBi```tsometry
():const Promise result =<void await> Bi {
ometric Auth const.is resultAvailable =();

 awaitif Bi (ometricresultAuth.has).isAvailable();
 {
   
 //  Bi ifometric ( authenticationresult is.has) {
    available
 //} else Bi {
ometry  is // available Biometric
    authentication const is not authResult available =
 await}
 Bi``ometric`

ToAuth open.verify the({
      biometric authentication reason: " promptAuthenticate, use the to `verify access` the app",
      method title:

: "```Authenticationts Required
const result"
 =    });
    
 await    BiometricAuth.verify if({
 (authResult. verified reason): {
 "     Authenticate // to Bi continueometric" authentication // successful Reason
 for      authentication // prompt Do
 something});

 hereif
 (   result }. elseverified {
)      {
 //  Bi //ometric authentication failed Biometric
 authentication was successful     
 //} Handle else failure {

     }
 // Bi ometric } authentication else failed {
   
 //}
 Bi```

ometry isYou not can available
    customize the authentication prompt by // Handle not available providing case additional options:

```
ts 
 }
const result}
`` = await`

In this Bi exampleometricAuth,.verify we first check if({
  reason biometry: "Authenticate to continue",
 is  available on title: the device using the ` "isAvailableAuthentication()` Required method",. // Prompt If title ( itAndroid)
  is subTitle available, we: "Please use then use the ` yourverify()` method fingerprint to or face", open the // Prompt subtitle biometric ( popupAndroid for)
 authentication . description If the: " authenticationThis is successful will, unlock your we can app perform", the desired // Prompt description actions (. Otherwise,Android we)
 handle  the cancel authentication: "Cancel failure.

##" Conclusion //

 TextIn for this tutorial cancel, we have button on prompt ( learnedAndroid)
});
 how```

The `verify` to install and use the `@ method returnslegalmentedev/c anap objectac with theitor `verified-native-b`iometric property` indicating whether package the in bi aometric Capacitor authentication was project. successful. By If following the steps authentication failed, the and examples `status provided,` property will you contain can additional easily integrate information about native the error.

 bi##ometric Conclusion

In authentication into this tutorial, you learned your how application. to use the @restrella/capacitor-native-biometric package to implement biometric authentication in your Capacitor project. You installed the package, configured it for Android, and used the provided methods to check for biometric availability and authenticate users using fingerprint or face recognition.