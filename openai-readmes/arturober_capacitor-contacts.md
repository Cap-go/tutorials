# Capacitor Contacts plugin

This plugin retrieves all your phone contacts: name and phones (Only works in Android)

## Installation

```bash
npm install @arturober/capacitor-contacts@latest
```

## Necessary permissions

```xml
<uses-permission android:name="android.permission.READ_CONTACTS" />
```

## Usage

```TypeScript
import { Plugins } from '@capacitor/core';
const { ContactsPlugin } = Plugins;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss']
})
export class ContactsPage implements OnInit {
  constructor() {}

  async ngOnInit() {
    const result = await ContactsPlugin.getContacts();
    console.log(result);
  }
}
```
