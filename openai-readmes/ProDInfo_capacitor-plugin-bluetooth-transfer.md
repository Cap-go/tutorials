# capacitor-plugin-bluetooth-transfer

plugin for transfer file to device android

# Example

- For sending raw json data:

```
import 'capacitor-plugin-bluetooth-transfer';
import { Plugins } from '@capacitor/core';

const result = await BluetoothFileTransfer.sendObject(
        { filename: 'file.txt', data: 'data to send' }
      );
```
