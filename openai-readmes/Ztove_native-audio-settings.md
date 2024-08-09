# native-audio-settings

This plugin is designed to provide easy access to native audio settings on both Android and iOS platforms within the Capacitor framework.

## Description
The plugin offers a unified API to retrieve and monitor audio settings, allowing developers to seamlessly integrate audio-related functionalities into their Capacitor applications.

## Install

```bash
npm install native-audio-settings
npx cap sync
```

## API

<docgen-index>

* [`getMainVolume()`](#getmainvolume)
* [`getNotificationVolume()`](#getnotificationvolume)
* [`addListener('notificationVolumeChange', ...)`](#addlistenernotificationvolumechange)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getMainVolume()

```typescript
getMainVolume() => Promise<{ mainVolume: number; maxMainVolume: number; }>
```

**Returns:** <code>Promise&lt;{ mainVolume: number; maxMainVolume: number; }&gt;</code>

--------------------


### getNotificationVolume()

```typescript
getNotificationVolume() => Promise<{ notificationVolume: number; maxNotificationVolume: number; }>
```

**Returns:** <code>Promise&lt;{ notificationVolume: number; maxNotificationVolume: number; }&gt;</code>

--------------------


### addListener('notificationVolumeChange', ...)

```typescript
addListener(eventName: 'notificationVolumeChange', listenerFunc: (info: { notificationVolume: number; maxNotificationVolume: number; }) => void) => Promise<{ remove: () => void; }>
```

| Param              | Type                                                                                           |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'notificationVolumeChange'</code>                                                        |
| **`listenerFunc`** | <code>(info: { notificationVolume: number; maxNotificationVolume: number; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;{ remove: () =&gt; void; }&gt;</code>

--------------------

</docgen-api>

## Contributing
We appreciate your contribution to enhance and expand the project. To ensure a smooth and rewarding collaboration process, please follow these guidelines.

### Creating an Issue
Before starting development work, please create an Issue to discuss the changes you want to implement. This allows for feedback and a shared understanding of the purpose and scope of your proposed contribution.

### Working on a Fork
Create a fork of this repository and work in your fork instead of the main repository. This ensures that your changes can be reviewed before being integrated into the main project.

### Code Convention Compliance
Adhere to existing code conventions and style in the project. A consistent codebase facilitates review and maintenance.

### Creating a Pull Request
Open a pull request against the main repository when your work is ready for review. Please provide a clearly formulated description of your changes and additions.

### Review and Feedback
Expect constructive review of your work. Be prepared to make changes and answer questions during the review process.

### Testing
Ensure that your changes are thoroughly tested.

### Have Fun
Most importantly, have fun! Contributing to open source is a positive experience, and we appreciate your effort.

## Authors and acknowledgment
None yet, but bring it on!

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Project status
Development of the native-audio-settings plugin is ongoing, with regular updates and enhancements. If you are interested in contributing or becoming a maintainer, please reach out.
