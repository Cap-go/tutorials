# Capacitor amplitude plugin

Currently only works on ios, but android support will be coming soon

# Available methods:

- `getInstance(instanceName: string): Amplitude` - Retrieve an instance of the Amplitude class.
- `init(apiKey: string): Promise<void>` - Initialize the Amplitude instance with a given API key.
- `logEvent(eventType: string, eventProperties?: Record<string, unknown>): Promise<void>` - Log an event with the given type and optional properties.
- `enableCoppaControl(): Promise<void>` - Enable COPPA (Children's Online Privacy Protection Act) restrictions.
- `disableCoppaControl(): Promise<void>` - Disable COPPA restrictions.
- `regenerateDeviceId(): Promise<void>` - Generate a new DeviceId.
- `setDeviceId(deviceId: string): Promise<void>` - Manually set the DeviceId.
- `getDeviceId(): Promise<string>` - Retrieve the current DeviceId.
- `useAdvertisingIdForDeviceId(): Promise<void>` - Use the Advertising ID for the DeviceId.
- `setOptOut(optOut: boolean): Promise<void>` - Enable or disable tracking opt-out.
- `trackingSessionEvents(trackingSessionEvents: boolean): Promise<void>` - Enable or disable the automatic logging of session start and end events.
- `setUserId(userId: string | null): Promise<void>` - Set the UserId.
- `setServerUrl(serverUrl: string): Promise<void>` - Set the server URL for event uploads.
- `setUseDynamicConfig(useDynamicConfig: boolean): Promise<void>` - Enable or disable dynamic server URL configuration.
- `logRevenue(userProperties: {...}): Promise<void>` - Log revenue data with provided properties.
- `identify(identifyInstance: Identify): Promise<void>` - Send user property operations to the Amplitude servers.
- `setGroup(groupType: string, groupName: string | string[]): Promise<void>` - Add a user to a group or groups.
- `groupIdentify(groupType: string, groupName: string | string[], identifyInstance: Identify): Promise<void>` - Update properties of particular groups.
- `setUserProperties(userProperties: Record<string, unknown>): Promise<void>` - Set properties that are tracked at the user level.
- `clearUserProperties(): Promise<void>` - Clear all properties that are tracked at the user level.
- `uploadEvents(): Promise<void>` - Upload all unsent events to the server.
- `getSessionId(): Promise<number>` - Retrieve the current session ID.
- `setMinTimeBetweenSessionsMillis(minTimeBetweenSessionsMillis: number): Promise<void>` - Set the minimum time between sessions.
- `setServerZone(serverZone: string, updateServerUrl: boolean = true): Promise<void>` - Set the server zone and optionally update the server URL.
- `setEventUploadMaxBatchSize(eventUploadMaxBatchSize: number): Promise<void>` - Set the maximum number of events sent per upload request.
- `setEventUploadPeriodMillis(eventUploadPeriodMillis: number): Promise<void>` - Sets the period in milliseconds for batch uploading unsent events.
- `setEventUploadThreshold(eventUploadThreshold: number): Promise<void>` - Sets the threshold number of unsent events that will trigger a batch upload.
- `setPlan(plan: Plan): Promise<void>` - Sets the tracking plan information.
- `setIngestionMetadata(ingestionMetadata: IngestionMetadata): Promise<void>` - Sets the ingestion metadata information.

# Usage example:

1. In your module (e.g. `app.module.ts`)

```ts
...
import { Amplitude } from 'capacitor-amplitude'

@NgModule({
	...
	providers: [
		...
		{ provide: Amplitude, useFactory: () => Amplitude.getInstance() },
	],
})
export class AppModule {}

```

2. In your component or service (e.g. `analytics.service.ts`)

```ts
...
import { Amplitude } from 'capacitor-amplitude'

@Injectable()
export class AnalyticsService {
	constructor(private amplitude: Amplitude) {}

	async init() {
		await this.amplitude.init('AMPLITUDE_API_KEY')
	}

	async logEvent(name: string, params?: Object) {
		await this.amplitude.logEvent(name, params)
	}

	async setUserId(id: string) {
		return this.amplitude.setUserId(id)
	}

	async getDeviceID(): string {
		return this.amplitude.getDeviceId()
	}

    async uploadEvents() {
        return this.amplitude.uploadEvents()
    }
}


```

## BREAKING CHANGES in 2.x.x version

- Added support for Capacitor 5

## BREAKING CHANGES in 1.x.x version

- Added full support for Capacitor 3 and removed compatibility with Capacitor 2
