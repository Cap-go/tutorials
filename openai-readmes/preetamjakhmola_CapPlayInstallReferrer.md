# cap-play-install-referrer

Only android support this time --Anyone can help with iOS
This capacitor plugin captures the referrer value passed when an android app is installed using Play Install Referrer API.

## Install

```bash
npm install cap-play-install-referrer
npx cap sync
```

## API

<docgen-index>

- [`GetReferrer()`](#getreferrer)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### GetReferrer()

```typescript
GetReferrer() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

---

</docgen-api>
 ## EXAMPLE
  // Only android support this time  --Anyone can help with iOS
  
    import { CapPlayInstallReferrer } from 'cap-play-install-referrer';
  
  
   
    CapPlayInstallReferrer.GetReferrer().then((resp) => {

      try {
        let data = JSON.stringify(resp);

        //data = '{ "referrer": "preetamjakhmolaReferrerCode", "clickTimestamp": 1642830058, "installBeginTimestamp": 1642830060 }';

      } catch (e) {
        console.log(e);
      }
    })
