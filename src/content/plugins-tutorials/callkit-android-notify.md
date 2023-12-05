---
title: "Using CallKit-Android-Notify"
description: "A tutorial on how to use the CallKit-Android-Notify package"
created_at: "2021-10-20"
published: true
slug: "callkit-android-notify"
---

# Using CallKit-Android-Notify

In this tutorial, we will learn how to use the CallKit-Android-Notify package to implement CallKit functionality in an Android application. The CallKit-Android-Notify package provides a simple and convenient way to integrate CallKit features, such as call management and call notifications, into your Android app.

## Installation

To get started, you need to install the CallKit-Android-Notify package. Open your terminal and run the following command:

```bash
npm install callkit-android-notify
```

## Configuration

Once the package is installed, you need to configure your Android project to enable the CallKit functionality. Follow the steps below:

1. Open your Android project in Android Studio.

2. Add the necessary permissions to the `AndroidManifest.xml` file:

   ```xml
   <uses-permission android:name="android.permission.USE_FULL_SCREEN_INTENT" />
   <uses-permission android:name="android.permission.ANSWER_PHONE_CALLS" />
   ```

3. Add the required dependencies to the `build.gradle` file:

   ```groovy
   implementation 'androidx.appcompat:appcompat:1.4.0'
   implementation 'androidx.media:media:1.4.3'
   implementation 'com.google.android.material:material:1.4.0'
   ```

4. Implement the necessary code in your activity class to handle incoming calls and display call notifications. Here's an example:

   ```java
   import com.callkitandroid.notify.CallKitNotify;
   import com.callkitandroid.notify.CallNotification;

   public class MainActivity extends AppCompatActivity {
       private CallKitNotify callKitNotify;

       @Override
       protected void onCreate(Bundle savedInstanceState) {
           super.onCreate(savedInstanceState);
           setContentView(R.layout.activity_main);

           callKitNotify = new CallKitNotify(this);
           callKitNotify.setListener(new CallKitNotify.Listener() {
               @Override
               public void onIncomingCall(CallNotification notification) {
                   // Handle the incoming call notification here
               }

               @Override
               public void onMissedCall(CallNotification notification) {
                   // Handle the missed call notification here
               }
           });

           callKitNotify.prepare();
       }

       @Override
       protected void onDestroy() {
           callKitNotify.release();
           super.onDestroy();
       }
   }
   ```

5. Build and run your Android app to test the CallKit functionality.

## Conclusion

In this tutorial, we have learned how to use the CallKit-Android-Notify package to implement CallKit features in an Android application. With the help of this package, you can easily manage incoming calls and display call notifications in your Android app. Feel free to explore the package documentation for advanced usage and customization options.

Remember to refer to the official documentation and the package repository for the latest updates and additional features.

Happy coding!