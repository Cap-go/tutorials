# custom

Android native plugin for Ionic (Capacitor)

## Install

```bash
npm install @brahmaesolutions/native
yarn add @brahmaesolutions/native
npx cap sync
```

```diff
package io.ionic.starter;
+ import com.brahma.plugins.custom.CustomPlugin;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Initializes the Bridge
        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
            // Additional plugins you have installed go here
+           add(CustomPlugin.class);
        }});
    }

}
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`getContacts(...)`](#getcontacts)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => any
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>any</code>

---

### getContacts(...)

```typescript
getContacts(filter: string) => any
```

| Param        | Type                |
| ------------ | ------------------- |
| **`filter`** | <code>string</code> |

**Returns:** <code>any</code>

---

## Example

```bash
import { Contacts } from '@brahmaesolutions/native';
Contacts.getContacts("").then((result: any) => {
    console.log(result['results']);
})
```

</docgen-api>
