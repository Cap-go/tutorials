# unicap

Native android Capacitor Plugins for Ionic.

##### Note: Not workig on IOS

## This an Example for using Ts Angular Ionic

#### find more on

https://www.npmjs.com/package/upi-intent

### Install via npm

```bash
npm install upi-intent
```

### Import in Ionic

```bash
import {Upicap} from 'upi-intent';
```

### Use in .ts

```bash
async pay(){
 await Upicap.startPayment({
    vpa:'YOUR_UPI_ID',
    amount:'10.00',
    merchant_code:'UPI_MERCHANT_CODE',
    name:'UPI_MERCHANT_NAME',
    trans_id:'UNIQE_TRANSCATION_ID'
  }).then(res=>{
    console.log(res)
    alert(JSON.stringify(res))
  }).catch(err=>{
    console.log(err.message)
})
  }
```

##### Find your merchant codes

https://www.npci.org.in/what-we-do/rupay/merchant-category-code

### Interfaces

```bash
interface Result{
  status:string,
  amount:string,
  txnId:string,
  txnRef:string,
  responseCode:string,
  approvalRefNo:string
}
```

After

```bash
.then(res=>{
    console.log(res)
    alert(JSON.stringify(res))
  })
// you can call directly
.then(res=>{
    alert(JSON.stringify(res.status))
    .......
  })
```

#### Transaction

| Prop                | Type                | Value                            |
| ------------------- | ------------------- | -------------------------------- |
| **`vpa`**           | <code>string</code> | <code>upiname@upi</code>         |
| **`amount`**        | <code>string</code> | <code>10.00</code>               |
| **`name`**          | <code>string</code> | <code>UPI account name</code>    |
| **`trans_id`**      | <code>string</code> | <code>Id should be unique</code> |
| **`merchant_code`** | <code>string</code> | <code>XXXX</code>                |
