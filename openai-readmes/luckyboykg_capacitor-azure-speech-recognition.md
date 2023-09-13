# Capacitor Speech Recognition Plugin Combined With Pronunciation Assessment from Azure SDK

Capacitor community plugin for speech recognition combined with Pronunciation Assessment from Azure SDK

## Installation

To use npm

```bash
npm install @trieutulong/speech-recognition
```

Sync native files

```bash
npx cap sync
```

iOS Platform: No further action required.

Android Platform: Register the plugin in your main activity:

```java
import com.getcapacitor.community.speechrecognition.SpeechRecognition;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    registerPlugin(SpeechRecognition.class);
  }
}

```

## Pronunciation Assessment

Pronunciation assessment with the Speech SDK: https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/how-to-pronunciation-assessment?pivots=programming-language-java

## Supported methods

| Name              | Android | iOS | Web |
| :---------------- | :------ | :-- | :-- |
| start             | ✅      | ✅  | ❌  |
| hasPermission     | ✅      | ✅  | ❌  |
| requestPermission | ✅      | ✅  | ❌  |
