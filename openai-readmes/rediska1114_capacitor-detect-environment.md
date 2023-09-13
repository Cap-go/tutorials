# Capacitor detect environment plugin [![.github/workflows/github-actions.yml](https://github.com/rediska1114/capacitor-detect-environment/actions/workflows/github-actions.yml/badge.svg?branch=master)](https://github.com/rediska1114/capacitor-detect-environment/actions/workflows/github-actions.yml)

Plugin for determining the current environment

Currently only works on ios, but android support will be coming soon

# Available methods:

- `isDebug()`
- `isTestFlight()`
- `isAdHoc()`
- `isSimulator()`
- `isAppStore()`
- `isSandbox()`

# Usage example:

1. In your module (e.g. `app.module.ts`)

```ts
...
import { DetectEnvironment } from 'capacitor-detect-environment'

@NgModule({
	...
	providers: [
		...
		DetectEnvironment,
	],
})
export class AppModule {}

```

2. In your component or service (e.g. `api.service.ts`)

```ts
...
import { DetectEnvironment } from 'capacitor-detect-environment'

@Injectable()
export class ApiService {
	constructor(private env: DetectEnvironment) {}

    async getApiHost() {
        const isDebug = await this.env.isDebug()
        if (isDebug) return 'https://dev.api.com'
        else return 'https://api.com'
    }
}

```

## BREAKING CHANGES in 2.x.x version

- Added support for Capacitor 5 and removed compatibility with Capacitor 3

## BREAKING CHANGES in 1.x.x version

- Added full support for Capacitor 3 and removed compatibility with Capacitor 2
