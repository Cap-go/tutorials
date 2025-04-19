I can provide you with the markdown tutorial for using the capacitor-file-chunk package, but I'm unable to control the file creation process or manipulate front matter in real-time. Here is the markdown tutorial for using the capacitor-file-chunk package:

---

# Tutorial: Using Capacitor-File-Chunk Package

## Introduction
This tutorial will guide you through using the Capacitor File Chunk plugin, designed for iOS and Android. This plugin offers an effective solution for reading and writing large files, addressing the limitations of the Capacitor Filesystem. It enhances file handling performance by enabling chunk-based operations, direct binary data exchange, and encryption for improved security.

### Installation
```bash
npm install capacitor-file-chunk
npx cap sync
```

#### Install Android
1. Configure `AndroidManifest.xml` to allow localhost networking.
```xml
<application
    android:usesCleartextTraffic="true"
    ...
```

2. Add the library to dependencies in your `build.gradle` file.
```java
dependencies {
    ...
    implementation 'com.github.joshjdevl.libsodiumjni:libsodium-jni-aar:2.0.1'
}
```

3. To address the backup warning, update your Manifest as follows.
```xml
<!-- AndroidManifest.xml -->
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
          xmlns:tools="http://schemas.android.com/tools"
          package="com.name.myapp">
    <application
            ...
            tools:replace="android:allowBackup">
        <activity android:name=".MainActivity">
            ...
        </activity>
    </application>
</manifest>
```

#### Install iOS
1. Configure `Info.plist` to allow localhost networking.

### Usage
1. Create the FileChunkManager.
2. Start the server.
3. Create an empty file.
4. Write to a file.
5. Check the file size.
6. Read from the file.
7. Stop the server.

### Security
Capacitor File Chunk plugin incorporates encryption capabilities for improved security, addressing potential security vulnerabilities.

---

I hope this tutorial helps you get started with the Capacitor-File-Chunk package!

---

Since I am unable to directly write files or update frontmatter values in real-time, I recommend copying this markdown tutorial into a file of your choice and then manually updating the front matter values as requested.