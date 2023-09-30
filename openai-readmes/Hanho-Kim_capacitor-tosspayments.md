# capacitor-tosspayments

[ ![alt text](https://img.shields.io/badge/capacitor-latest-orange.svg?longCache=true&style=flat-square) ](https://github.com/ionic-team/capacitor)

토스페이먼츠를 Ionic / Capacitor 환경에서 사용할 수 있도록 만든 플러그인입니다

## 지원정보

- 현재 이 플러그인은 Capacitor v2만 지원합니다.
- 현재 이 플러그인은 토스페이먼츠의 일반결제 내 `requestPayment()` 기능만 제공합니다.

## 설치하기

아래 명령어를 통해 아임포트 캐패시터 모듈을 귀하의 캐패시터 프로젝트에 추가할 수 있습니다.

```
$ npm install capacitor-tosspayments --save
```

앱을 빌드하고 빌드한 내용을 네이티브 코드에 카피합니다.

```
$ npm run build 또는 ionic build
$ npx cap copy
```

## 설정하기

카드사 앱(서드파티앱)을 열기 위한 설정이 필요합니다. 아임포트 캐퍼시터 플러그인과 동일한 방식으로 돌아가므로 해당 설정을 참고해주세요.

#### 안드로이드 설정하기

### 1. Plugin 모듈 추가하기

```java
import glit.capacitor.tosspayments.TossPaymentsPlugin;

public class MainActivity extends BridgeActivity {
    ...
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
        ...
        add(TossPaymentsPlugin.class);
    });
}
```

### 2. Webview를 위한 액티비티 추가하기

`AndroidManifest.xml` 파일(android/app/src/main에 위치)에 아임포트 액티비티를 아래와 같이 추가해주세요.

```html
<manifest>
  <application>
    ...
    <activity android:name="glit.capacitor.tosspayments.TossPaymentsActivity" android:label="TossPaymentsActivity"> </activity>
    ...
  </application>
</manifest>
```

#### iOS 설정하기

### 1. 외부 앱 URL 스킴 등록 (info.plist)

```html
...
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>itms-appss</string>
  <string>supertoss</string>
  <string>kb-acp</string>
  <string>liivbank</string>
  <string>nhappcardansimclick</string>
  <string>nhallonepayansimclick</string>
  <string>nonghyupcardansimclick</string>
  <string>lottesmartpay</string>
  <string>lotteappcard</string>
  <string>mpocket.online.ansimclick</string>
  <string>ansimclickscard</string>
  <string>tswansimclick</string>
  <string>ansimclickipcollect</string>
  <string>vguardstart</string>
  <string>samsungpay</string>
  <string>scardcertiapp</string>
  <string>shinhan-sr-ansimclick</string>
  <string>smshinhanansimclick</string>
  <string>com.wooricard.wcard</string>
  <string>newsmartpib</string>
  <string>citispay</string>
  <string>citicardappkr</string>
  <string>citimobileapp</string>
  <string>cloudpay</string>
  <string>hanawalletmembers</string>
  <string>hdcardappcardansimclick</string>
  <string>smhyundaiansimclick</string>
  <string>shinsegaeeasypayment</string>
  <string>payco</string>
  <string>lpayapp</string>
  <string>ispmobile</string>
  <string>tauthlink</string>
  <string>ktauthexternalcall</string>
  <string>upluscorporation</string>
</array>
```

### 2. App Transport Security 설정 (info.plist)

```html
...
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSAllowsArbitraryLoadsInWebContent</key>
  <true />
  <key>NSAllowsArbitraryLoads</key>
  <true />
</dict>
```

#### 참고

https://github.com/iamport/iamport-capacitor/blob/master/manuals/SETTING_IOS.md
https://github.com/iamport/iamport-capacitor/blob/master/manuals/SETTING_ANDROID.md

## 사용방법

```typescript
import { TossPayments } from 'capacitor-tosspayments';
...
const clientKey = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq';
const tossPayments = new TossPayments(clientKey);

await tossPayments.requestPayment('카드', {
      amount: 15000,
      orderId: 'WyzNriVXGrKJOZHx-g2ks',
      orderName: '토스 티셔츠 외 2건',
      customerName: '박토스',
      successCallback: (url:string)=>{
        console.log('결제 성공: ' + decodeURIComponent(url));
      },
      failCallback: (url:string)=>{
        console.log('결제 실패: ' + decodeURIComponent(url));
      },
    });

```

## 주의사항

- iOS / Android 환경에서 플러그인 웹뷰와 Ionic 웹뷰간의 소통을 위해, 토스페이먼츠 SDK의 `successUrl`과 `failUrl` 파라미터가 `successCallback`과 `failCallback` 형태의 콜백함수(필수)로 대체됩니다.
- Web 환경(Unimplemented)에서는, 토스페이먼츠 JS SDK와 동일하게, `successUrl`과 `failUrl` 파라미터로 작동되며, `successCallback`과 `failCallback`은 무시됩니다.
