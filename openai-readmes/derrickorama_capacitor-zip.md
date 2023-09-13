<h3 align="center">CapacitorZip</h3>
<p align="center"><strong><code>@derrickorama/capacitor-zip</code></strong></p>
<p align="center">
  A simple Capacitor plugin used to zip/unzip files natively.
</p>

### Only unzip and Capacitor 2.x (for now)

This plugin only supports Capacitor v2.x. I have plans to update this in the future, but for my own purposes I need to support v2 first. I also only need the _unzip_ feature at the moment.

## Installation

Install with NPM:

```bash
npm install @derrickorama/capacitor-zip
```

(Android) Add the plugin to your MainActivity.java:

```java
package com.company.app;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import java.util.ArrayList;

import com.derrickorama.capacitorzip.CapacitorZip;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      add(CapacitorZip.class);
    }});
  }
}
```

Then sync:

```bash
npx cap sync
```

## Usage

```javascript
import '@derrickorama/capacitor-zip'
import { FilesystemDirectory, Plugins } from '@capacitor/core'

const { CapacitorZip } = Plugins

const unZip = async () => {
  const { path, directory } = await CapacitorZip.unZip({
    sourcePath: 'path/filename.zip',
    sourceDirectory: FilesystemDirectory.Data,
    destinationPath: 'path',
    destinationDirectory: FilesystemDirectory.Data,
  })

  // will save zip file content to: /<data_directory>/path/
}
```
