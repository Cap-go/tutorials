# capacitor-adid-idfa

Get advertise id: adid(android), idfa(ios)

## Install

```bash
npm install capacitor-adid-idfa
npx cap sync
```

## API

```typescript
import { AdId } from 'capacitor-adid-idfa'

export class AppComponent {
  constructor(private platform: Platform) {
    this.platform.ready().then(async () => {
      const adid = await AdId.getAdId()
      console.log('adid=', JSON.stringify(adid))
    })
  }
}
```

## Result

```
if success
{id: 'xxxx-xxxx-xxx-xxxxx-xxx'}

if fail
{id: 'none'}
```
