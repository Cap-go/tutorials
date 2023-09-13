# capacitor-storage-realm

Capacitor Plugin for iOS/Android that uses Realm as the backend for storing simple key/value pairs.

'This product includes software developed by the "Marcin Krzyzanowski" (http://krzyzanowskim.com/).' - https://github.com/krzyzanowskim/CryptoSwift#swift-versions-support - leave 'by the' in this attribution as per the instructions on the GitHub link.

```
import {StorageRealm, StringValueResults} from 'capacitor-pm-storage-realm';
...
private _realm: StorageRealm;
...
const r = new StorageRealm();
await r.initialize('realmOGoodness', 'r3å¬Â').then(() => {
    r.set({name: 'thing', value: 'amabob'}).then(() => {
        r.get({name: 'thing'}).then(val => {
            if (val === undefined
                || val == null
                || (val as StringValueResults).value == null
                || (val as StringValueResults).value.length === 0) {
                console.error(`failed to get value for key 'thing'`);
                return;
            }
            console.log(`got value '{(val as StringValueResults).value}'`);
        }).catch(reason => {
              console.error(`Failed to get 'thing':'${JSON.stringify(reason)}'`);
          });
    }).catch(reason => {
        console.error(`Failed to update 'thing':'${JSON.stringify(reason)}'`);
    });

}, async reason => {
    console.error(`Failed to initialize StorageRealm: ${JSON.stringify(reason)}`);
    return;
});

```
