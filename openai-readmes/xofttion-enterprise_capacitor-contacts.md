### iOS

For iOS you need to set a usage description in your info.plist file. (Privacy Setting)
Open xCode search for your info.plist file and press the tiny "+". Add the following entry:

```
Privacy - Contacts Usage Description
```

Give it a value like:

```
"We need access to your contacts in order to do something."
```

### Android Notes

For Android you have to add the permissions in your AndroidManifest.xml. Add the following permissions before the closing of the "manifest" tag.

```xml
<uses-permission android:name="android.permission.READ_CONTACTS" />
```

Next import the capContacts class to your MainActivity

```java
// Initializes the Bridge
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  // Additional plugins you've installed go here
  // Ex: add(TotallyAwesomePlugin.class);
  add(Contacts.class);
}});
```

Make sure to import it properly as well.

```java
import com.xofttion.capacitor.plugins.Contacts;

```

**NOTE**: On Android you have to ask for permission first, before you can fetch the contacts. Use the `getPermissions()` method before you try to fetch contacts using `getContacts()`.
