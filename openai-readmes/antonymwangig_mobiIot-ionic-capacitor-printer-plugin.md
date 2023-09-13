# capacitor-printer

Use ionic framework capacitor in mobiIot to print receipt

## Install

```bash
npm install capacitor-printer
npx cap sync
```

## Usage

    import { MobiPrint } from 'capacitor-printer';


    export class PrintPage {

        constructor() {}

        async printClicked(){

            var  payload= {
                    "company":"COMPANY X",
                    "address":"P.O.BOX-XXX-XXXXX,NAKURU",
                    "email":"XXX-XXXXX@XXX.COM",
                    "contact":"020-2336234/24732472364",
                    "other_info":"PIN : XXXXXXXXXX",
                    "cashier":"XXXXX XXXX",
                    "total_items":"1",
                    "sub_total":"340",
                    "vat":"20",
                    "total":"360",
                    "qrcode_link":"http://www.google.com",
                    "tax_perc":"18%",
                    "datetime":"10:30 PM JAN 04 2023",
                    "items":[
                        {
                            "name":"item x",
                            "quantity":"1",
                            "price":"1000.50",
                            "amount":"1000.50"
                            }],
                        "payments":[
                            {"name":"CASH","amount":"1000.50","currency":"KSH"}
                            ]

                        };

            var payload_str=JSON.stringify(payload);

            const result = await MobiPrint.printReceipt({value:payload_str});
        }
    }

<img src="https://github.com/antonymwangig/mobiIot-ionic-capacitor-printer-plugin/raw/main/print1.jpg" width="300"/>
<img src="https://github.com/antonymwangig/mobiIot-ionic-capacitor-printer-plugin/raw/main/print2.jpg" width="300"/>
## API

<docgen-index>

- [`printReceipt(...)`](#printreceipt)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### printReceipt(...)

```typescript
printReceipt(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

</docgen-api>
