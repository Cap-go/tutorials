# Persistent Notification for Capacitor

A Capacitor plugin that allows a continuous background service by using a persistent notification in Android. Your background task/service is written in JavaScript, no need for platform specific code (except that required of enabling a Capacitor plugin.)

Based upon, though not a fork of, the [Cordova Background Mode Plugin](https://github.com/katzer/cordova-plugin-background-mode).

In order to allow an app written in HTML5/Javascript/CSS to continuously run in the background using a [persistent foreground service notification in Android](https://developer.android.com/guide/components/services#Foreground).

This plugin uses the new [Ionic/Capacitor plugin system](https://capacitorjs.com/docs/apis)

Unfortunately, because of system limitations, this plugin _ONLY_ works on Android! The plugin calls are NO-OP on the web platform, and non-existent in iOS and Electron. Further research may allow a persistent background service in Electron. iOS does not have a system that allows a persistent background service. (I understand there are hacky methods to make it work in iOS, but until there is a proper API I plan no updates for iOS.)

_KNOWN ISSUE LIMITATION_: Unfortunately because the JavaScript code used to run a Capacitor app lives in an Android Activity, it is not currently possible to restart a service upon shutdown, crash, or reboot. See [Android limitation](https://developer.android.com/guide/components/activities/background-starts). I am currently researching possible solutions. For now try to keep memory consumption to a minimum while app is in "background" state.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Examples](#example) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [API](#api) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Changelog](#changelog) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Donate](#changelog)

## NPM Repository

[capacitor-persistent-notification](https://www.npmjs.com/package/capacitor-persistent-notification)

## Installation

Ensure Android is added to your Capacitor based project:

```bash
npx cap add android
```

Use NPM in your project directory to install the plugin.

```bash
npm install capacitor-persistent-notification@latest --save
npx cap update
```

## Getting Started

Ensure your project includes the Capacitor plugin code.

Standard HTML import:

```html
<script src="capacitor.js"></script>
```

```javascript
const { Plugins } = Capacitor
const { PersistentNotification } = Plugins
```

or Node Imports:

```javascript
import { Plugins } from '@capacitor/core'

const { PersistentNotification } = Plugins
```

Be sure to add the plugin to your MainActivity in your Android project:

```java
import com.flytesoft.persistent.notification.PersistentNotification;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {
        {
            // Additional plugins you've installed go here
            // Ex: add(TotallyAwesomePlugin.class);
            add(PersistentNotification.class);
        }
    });
  }
}
```

Add the foreground service permission to the AndroidManifest.xml:

```xml
<!-- Permissions -->
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
```

<a name="example"></a>

## Example Code

It is recommended, although not required, to open your notification upon your app closing:

```javascript

const { PersistentNotification, App, BackgroundTask } = Plugins;
...

let listener = null;

App.addListener('appStateChange', (state) => {
    // Listen for user clicks on the notification.
    // OK to listen before opening.
    listener = constPersistentNotification.addListener('notificationclick', ({ action } => {
        console.log("Persistent notification click: ", action);
        if(!action) // A button was NOT clicked.
        {
            // Put the app in the foreground
            // and close the notification, if desired.
            PersistentNotification.appToForeground();
            PersistentNotification.close();
        }
        else // A button was clicked by the user.
        {
            if(action === 'button-click2')
            {
                console.log("Button 2 was clicked!");
            }
        }
    });

    if (!state.isActive) // App has gone inactive or closed
    {
        // Get some work done before the app closes completely.
        const taskId = BackgroundTask.beforeExit(async () => {
            try
            {
                await PersistentNotification.open({
                    title: "Background Forever!",
                    icon: "icons/icon.png",
                    // Icon asset exist in www/icons/icon.png
                    // Icon asset always based upon TLD and
                    // NOT the location of your code.
                    body: "We can run continuously!",
                    actions: [{
                            title: "button",
                            action: "button-click",
                            icon: "icons/icon.png"
                        },
                        {
                            title: "button2",
                            action: "button-click2",
                            icon: "icons/icon.png"
                        }]
                });

                // See if the notification is open.
                const { isOpen } = await PersistentNotification.getState();

                console.log("Is open: ", isOpen);
            }
            catch(e)
            {
                console.log("Unable to start background service: ", e);
            }

            // Let the app close.
            BackgroundTask.finish({
                taskId
            });
        });

        /**
         * It is recommended you stop any code that updates the DOM:
         * The DOM will still be 'awake' but not visible to the user.
         * So save CPU power.
         *
         * stopVisualTasks();
         * */

        // Now do your continuous background task.
        // Update the notification as necessary.
        let interval = 1;
        setInterval(() => {
            PersistentNotification.update({
                body: `Seconds gone by: ${interval}`);
            interval++;
        }, 1000);
    }
    else // App is now opening or resuming.
    {
        // OK to close un-opened notification.
        PersistentNotification.close().
            catch(e => {
                console.log("Trouble closing the persistent notification: ", e);
            });

        // remove the listener.
        if(listener != null)
        {
            listener.remove();
            listener = null;
        }
    }
});

```

<a name="api"></a>

## API

The API is similar to the the standard ES6+ [Notification API](https://developer.mozilla.org/en-US/docs/Web/API/notification). However, the **PersistentNotification** class is completely static and all methods return Promises, as do most of the Capacitor APIs and plugins.

<a name="open"></a>

### PersistentNotification.open([options]) ⇒ <code>Promise</code>

A method to open and configure your persistent notification. Returns success upon notification opening. Configuration options are only optional if you have previously called the [update](#update) method.

**Kind**: Static instance method of [<code>PersistentNotification</code>](#api)  
**Category**: async  
**Fulfil**: <code>undefined</code>  
**Throws**: <code>Error</code>  
<a name="parameters"></a>
| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | Similar to the [Notification API options.](https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification#Parameters:~:text=window.-,options) |
| [options.title] | <code>string</code> | Set the title of the notification. [Limited HTML may be used](https://developer.android.com/guide/topics/resources/string-resource#StylingWithHTML) (Required) |
| [options.body] | <code>string</code> | Set the content or body area of the notification. [Limited HTML may be used](https://developer.android.com/guide/topics/resources/string-resource#StylingWithHTML) (Required)|
| [options.color] | <code>string</code> | Set the highlight color of the notification. [Hex code or color names only](<https://developer.android.com/reference/android/graphics/Color#parseColor(java.lang.String)>). If undefined or invalid, defaults to blue. |
| [options.actions] | <code>Array.&lt;[NotificationAction](#notification-action)&gt;</code> | An array of one or more buttons to be included. |
| [options.icon] | <code>string</code> | Location of the icon to be displayed in the status bar for the notification. Must use a relative path to icon resource from your top level directory. If undefined or invalid, a default icon is provided. |
| [options.badge] | <code>string</code> | Location of a large (badge type) icon to be displayed in the notification. Must use a relative path to the resource from your top level directory. If undefined or invalid, no badge is displayed. |

---

<a name="update"></a>

### PersistentNotification.update([options]) ⇒ <code>Promise</code>

A method to configure and/or update a current notification. If a notification is not already open your configuration will be maintained until [open](#open) is called. Only update options you need to update. See open for [parameters](#parameters).

**Kind**: Static instance method of [<code>PersistentNotification</code>](#api)  
**Category**: async  
**Fulfil**: <code>undefined</code>  
**Throws**: <code>Error</code>

---

<a name="close"></a>

### PersistentNotification.close(void) ⇒ <code>Promise</code>

Closes the notification. If the notification is not open, the method is NO-OP and returns success. If unable to close the notification an error is thrown.

**Kind**: Static instance method of [<code>PersistentNotification</code>](#api)  
**Category**: async  
**Fulfil**: <code>undefined</code>  
**Throws**: <code>Error</code>

---

<a name="appToForeground"></a>

### PersistentNotification.appToForeground(void) ⇒ <code>Promise</code>

Brings the main application view or webview into the foreground. If the app is already in the foreground the method is NO-OP. Useful to call when the user has clicked on the notification.

**Kind**: Static instance method of [<code>PersistentNotification</code>](#api)  
**Category**: async  
**Fulfil**: <code>undefined</code>

---

<a name="get-state"></a>

### PersistentNotification.getState(void) ⇒ <code>Promise</code>

A promise that returns whether the notification is currently open.

**Kind**: Static instance method of [<code>PersistentNotification</code>](#api)  
**Category**: async  
**Fulfil**: <code>[state](#state)</code>

---

<a name="listener"></a>

### PersistentNotification.addListener(eventName: 'notificationclick', listenerFunc: (data: action) => void) : <code>[ListenerHandle](#handle)</code>

**Kind**: Static instance method of [<code>PersistentNotification</code>](#api)  
**Category**: EventListener  
**Returns**: <code>[ListenerHandle](#handle)</code>

Add an event listener when the notification is clicked. The data object is passed to the listener function.
| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | Data object passed to event listener function |
| data.action | <code>string</code> | Actions string value, if a button is clicked the value will be the 'action' or title of that button. An empty string indicates the notification was clicked by the user. |

---

<a name="handle"></a>

### ListenerHandle <code>object</code>

**Category**: object

Object containing the event listener for the notification. Call remove() to delete the event listener.

| Param  | Type                  | Description                |
| ------ | --------------------- | -------------------------- |
| remove | <code>function</code> | Remove the event listener. |

---

<a name="notification-action"></a>

### NotificationAction <code>object</code>

**Category**: object

Object containing the options for a button to be displayed in the notification, similar to the [NotificationAction](https://developer.mozilla.org/en-US/docs/Web/API/NotificationAction) object in ES6+.

| Param    | Type                | Description                                                                                                                                                                                                                      |
| -------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [title]  | <code>string</code> | The title of the button (required).                                                                                                                                                                                              |
| [action] | <code>string</code> | The action data of the button, will be returned upon ['notificationclick'](#notificationclick) event. If undefined, the title will be used.                                                                                      |
| [icon]   | <code>string</code> | Location of the icon to be displayed in the button. Must use a relative path to icon resource from your top level directory. If undefined or invalid, a default icon is provided. The icon is **NOT** displayed in Android 9.0+. |

---

<a name="state"></a>

### state <code>object</code>

**Category**: object

Object containing the state information of the notification

| Param    | Type                 | Description                              |
| -------- | -------------------- | ---------------------------------------- |
| [isOpen] | <code>boolean</code> | Whether the notification is open or not. |

---

## Changelog

<a name="changelog"></a>

**0.9.5**

- Kill some memory leaks.
- Attempt to ready code to handle service crashes/restarts.

**0.9.4**

- Performance improvements.
- Longer text may be used in the body.
- Body and title of notification may use limited HTML markup.
- Readme fixes.

**0.9.3**

- Readme fixes.

**0.9.2**

- Readme fixes.

**0.9.1**

- Readme fixes.
- Distribution file fixes.

**0.9.0**

- Initial commit.

## Donation / Tips

<a name="donate"></a>
If you found this project useful and you would like to help buy me a cup of coffee, consider a [donation via Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=LCFZ7XATYTYLL&item_name=A+tip+for+open+source+development.&currency_code=USD&source=url). (<b>Not</b> tax deductible. Non-charitable.) Either way, I am hoping you find this project useful.

## License

[MIT](https://choosealicense.com/licenses/mit/)
