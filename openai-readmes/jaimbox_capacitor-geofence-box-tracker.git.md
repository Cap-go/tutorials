# Capacitor Geofence Box Tracker

This plug-in for Capacitor allows you to use the native geofencing functions of iOS.

# Installation
`$ npm i npm i capacitor-geofencing`

# Configuration
```
import { Plugins } from "@capacitor/core";
import { GeofenceTrackerPlugin } from "capacitor-geofence-box-tracker";
let { GeofenceTracker } = Plugins;

GeofenceTracker.setup({
   notifyOnEntry: true, 	// Whether the plugin will notify on entry yes or no.
   notifyOnExit: true,		// Whether the plugin will notify on exit yes or no.
}); // This returns a promise with a success/error message.
```

The promise returned here is important: an error will be returned when supplied invalid parameters, or when the user gave an invalid location authorization status (the only valid status is .alwaysAuthorization).

You also need to add the following keys to your info.plist file:

```
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>Reason for always usage.</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>Reasen for when in usage.</string>
```

# Register a region
```
GeofenceTracker.addRegion({
    latitude: -1.664718,
    longitude: -78.658626,
    identifier: "string-identifier",
    radius: 300
});	// This returns a promise with a success/error message.
```

# Stop monitoring a region
```
GeofenceTracker.stopMonitoring({
    identifier: "string-identifier"
});	// This returns a promise with a success/error message.
```

# List all monitored regions

```
GeofenceTracker.monitoredRegions()
    .then(regions => {
    	// regions is an array of Strings.
    });
```
