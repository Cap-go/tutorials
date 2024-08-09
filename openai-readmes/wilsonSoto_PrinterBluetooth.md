# capacitor-plugin-print-bluetooth

Printer Blueetooth

## Install

```bash
npm install capacitor-plugin-print-bluetooth
npx cap sync
```
**In the build.gradle in the repositories part of your app code you must enter the following code:**

repositories {

  ```
  maven { url 'https://jitpack.io' }
```
   
}

## How to Use
 **The printer must be connected to the device via Bluetooth **

**you must import the library where you want:**

 import { PrintBluetooth } from 'capacitor-plugin-print-bluetooth'


## Definitions
 "\n it's a line break"
 
 "[L] It is used to position the text to the left"
 
 "[C] It is used to position the text in the center"
 
 "[R] Used to position the text to the right" 

## Example

               let textToPrint=   "[L]\n" +
 
               "[L] <b>bold text</b>\n\n" +
               
                "[C] <b>I am a text in the center</b>\n" +
                
                "[R] I am a text to the right\n" +     
                
                "[L] I am a text to the left\n" +
                
                "[L] <b>inserting text</b>\n" ,
                
                let dataPrinter = textToPrint;

**" Information is sent to the printer"**

 PrintBluetooth.blPrint({ value: dataPrinter });

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`blPrint(...)`](#blprint)
* [`testingMessage()`](#testingmessage)
* [`getNotifications()`](#getnotifications)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### blPrint(...)

```typescript
blPrint(options: { value: string; }) => boolean
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>boolean</code>

--------------------


### testingMessage()

```typescript
testingMessage() => boolean
```

**Returns:** <code>boolean</code>

--------------------


### getNotifications()

```typescript
getNotifications() => any
```

**Returns:** <code>any</code>

--------------------

</docgen-api>
