# capacitor-store-review

Store Review capacitor plugin

Currently only works on ios, but android support will be coming soon

# Available methods:

- `navigateToAppStore(): Promise<void>`
- `promtForRating(): Promise<void>`

# Usage example:

0. In `capacitor.config.ts` (or `capacitor.config.json`)

```ts
plugins: {
  StoreReview: {
    appId: '1545567249' // iTunes App ID.
  }
}
```

1. In your module (e.g. `app.module.ts`)

```ts
...
import { StoreReview } from 'capacitor-store-review'

@NgModule({
	...
	providers: [
		...
		StoreReview,
	],
})
export class AppModule {}

```

2. In your main component (e.g. `app.component.ts`)

```ts
...
import { StoreReview } from 'capacitor-store-review'

@Component()
export class AppComponent {
	constructor(private storeReview: StoreReview) {}

    someUserAction() {
        this.storeReview.promtForRating()
    }
}

```

// TODO docs
