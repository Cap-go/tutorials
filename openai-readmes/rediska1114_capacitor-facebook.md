# capacitor-facebook

Facebook sdk plugin for capacitor.
iOS only

## Install

```bash
npm install capacitor-facebook
npx cap sync
```

# Available methods:

- logEvent(name: string, params?: LogEventParams): Promise<void>;
- setAdvertiserTracking(enabled: boolean): Promise<void>;
- getAdvertiserTrackingStatus(): Promise<boolean>;
- setAutoLogAppEvents(enabled: boolean): Promise<void>;
- setAdvertiserIDCollection(enabled: boolean): Promise<void>;
- setAudienceNetworkAdvertiserTracking(enabled: boolean): Promise<void>;
- getAnonymousID(): Promise<string>;

# Usage example:

0. Setup your app on facebook developer console and follow the instructions here (except the step 1)
   https://developers.facebook.com/docs/ios/getting-started

1. In your module (e.g. `app.module.ts`)

```ts
...
import { Facebook } from 'capacitor-facebook'

@NgModule({
	...
	providers: [
		...
		Facebook,
	],
})
export class AppModule {}

```

2. In your component or service (e.g. `analytics.service.ts`)

```ts
import {
	AppTrackingTransparency,
	AppTrackingTransparencyStatus,
} from 'capacitor-app-tracking-transparency'
import { Facebook } from 'capacitor-facebook';

@Injectable()
export class AnalyticsService {
  constructor(private facebook: Facebook, private att: AppTrackingTransparency) {}

  async logEvent(name: string, params?: Object) {
    let _params = {
       ...params
      valueToSum: 20,
    }
    return this.facebook.logEvent(name, _params);
  }

  async requestAtt() {
    const attStatus = await this.att.requestPermission()

    const enabled = attStatus === AppTrackingTransparencyStatus.authorized

    await this.facebook.setAdvertiserTracking(enabled);
    await this.facebook.setAudienceNetworkAdvertiserTracking(enabled);
    await this.facebook.setAutoLogAppEvents(enabled);
    await this.facebook.setAdvertiserIDCollection(enabled);
  }

  async getAdvertiserTrackingStatus() {
    return this.facebook.getAdvertiserTrackingStatus();
  }

  async init() {
    const anonymousId = await this.facebook.getAnonymousID();
    console.log('anonymousId', anonymousId);
  }
}
```

## BREAKING CHANGES in 1.x.x

- Add support for capacitor 5
