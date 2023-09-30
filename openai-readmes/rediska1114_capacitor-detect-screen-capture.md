# capacitor-detect-screen-capture

iOS only

# Available events:

- didScreenshot
- didScreenRecording

# Usage example:

1. In your module (e.g. `app.module.ts`)

```ts
...
import { DetectScreenCapture } from 'capacitor-detect-screen-capture'

@NgModule({
	...
	providers: [
		...
		DetectScreenCapture,
	],
})
export class AppModule {}

```

2. In your component or service (e.g. `analytics.service.ts`)

```ts
...
import { DetectScreenCapture } from 'capacitor-detect-screen-capture'

@Injectable()
export class AnalyticsService {
	constructor(private detectScreenCapture: DetectScreenCapture, private zone: NgZone) {}

    init() {
       	this.detectScreenCapture.addListener('didScreenshot', () => {
			this.zone.run(() => {this.logEvent('didScreenshot') })
		})

		this.detectScreenCapture.addListener('didScreenRecording', () => {
			this.zone.run(() => { this.logEvent('didScreenRecording')  })
		})
    }

	async logEvent(name: string, params?: Object) {
        ...
    }


}

```
