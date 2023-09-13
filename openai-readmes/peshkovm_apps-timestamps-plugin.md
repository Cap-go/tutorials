# apps-timestamps-plugin

## Installation

Install:

```
npm i apps-timestamps-plugin
```

Sync:

```
npx cap sync
```

### Android Notes

For Android you have to add the permision in your AndroidManifest.xml. Add the following permission before the closing of the "manifest" tag.

```
<uses-permission android:name="android.permission.QUERY_ALL_PACKAGES"/>
```

Next import the capContacts class to your MainActivity

```
// Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(NumOfActiveAppsPlugin.class)
    }});
```
