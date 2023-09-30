# New Document

# capacitor-navigationbar

Programmatically change the navigation bar color on android devices. This is a fork of nikosdouvlis/capacitor-navigationbar and adds the following support:

- Migrated to AndroidX
- Automatically detect color brightness and use dark UI buttons on bright colors
- Changing the UI button colors is only available on Android O+. Older devices will blend the light color slightly so UI elements will still be visible

## install

```
npm install capacitor-navigationbarnx
```

MainActivity.java:

```
import com.nikosdouvlis.navigationbar.NavigationBar;
...
...
add(NavigationBar.class);
```

## import

```
import { NavigationBarPlugin } from 'capacitor-navigationbarnx';
...
...
const NavigationBar = Plugins.NavigationBar as NavigationBarPlugin;
```

## use

```
NavigationBar.setBackgroundColor({color: '#FF1F1F1F'});
```
