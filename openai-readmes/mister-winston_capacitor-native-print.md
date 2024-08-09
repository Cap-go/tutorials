# @mrwinston/capacitor-native-print

Print the current webview using the native UI

## Install

```bash
npm install capacitor-native-print
npx cap sync
```

## API

<docgen-index>

* [`print(...)`](#print)
* [Type Aliases](#type-aliases)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### print(...)

```typescript
print(options?: PrintOptions | undefined) => any
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#printoptions">PrintOptions</a></code> |

**Returns:** <code>any</code>

--------------------


### Type Aliases


#### PrintOptions

These settings do nothing on the web

<code>{
 /** The name of the printed file */
 name: string;
 /**
 * Determines if the document should be printed in black and white
 * @default false
 * */
 monochrome?: boolean;
 /**
 * @default <a href="#printorientation">PrintOrientation</a>.Portrait
 * */
 orientation?: <a href="#printorientation">PrintOrientation</a>;
 /**
 * @default <a href="#printpagesize">PrintPageSize</a>.A4
 * */
 pageSize?: <a href="#printpagesize">PrintPageSize</a>;
 }</code>


#### PrintResult

<code><a href="#androidprintresult">AndroidPrintResult</a> | <a href="#iosprintresult">IOSPrintResult</a> | <a href="#webprintresult">WebPrintResult</a></code>


#### AndroidPrintResult

<code>{
 isBlocked: boolean;
 isCancelled: boolean;
 isCompleted: boolean;
 isFailed: boolean;
 isQueued: boolean;
 isStarted: boolean;
 copies: number;
 printerId: string;
 label: string;
 creationTime: number;
 state: number;
 pages?: { start: number; end: number }[];
 }</code>


#### IOSPrintResult

<code>{
 printed: boolean;
 }</code>


#### WebPrintResult

<code>void</code>


### Enums


#### PrintOrientation

| Members         | Value                    |
| --------------- | ------------------------ |
| **`Portrait`**  | <code>'portrait'</code>  |
| **`Landscape`** | <code>'landscape'</code> |


#### PrintPageSize

| Members           | Value                        |
| ----------------- | ---------------------------- |
| **`A0`**          | <code>'a0'</code>            |
| **`A1`**          | <code>'a1'</code>            |
| **`A2`**          | <code>'a2'</code>            |
| **`A3`**          | <code>'a3'</code>            |
| **`A4`**          | <code>'a4'</code>            |
| **`A5`**          | <code>'a5'</code>            |
| **`A6`**          | <code>'a6'</code>            |
| **`A7`**          | <code>'a7'</code>            |
| **`A8`**          | <code>'a8'</code>            |
| **`A9`**          | <code>'a9'</code>            |
| **`A10`**         | <code>'a10'</code>           |
| **`B0`**          | <code>'b0'</code>            |
| **`B1`**          | <code>'b1'</code>            |
| **`B2`**          | <code>'b2'</code>            |
| **`B3`**          | <code>'b3'</code>            |
| **`B4`**          | <code>'b4'</code>            |
| **`B5`**          | <code>'b5'</code>            |
| **`B6`**          | <code>'b6'</code>            |
| **`B7`**          | <code>'b7'</code>            |
| **`B8`**          | <code>'b8'</code>            |
| **`B9`**          | <code>'b9'</code>            |
| **`B10`**         | <code>'b10'</code>           |
| **`C0`**          | <code>'c0'</code>            |
| **`C1`**          | <code>'c1'</code>            |
| **`C2`**          | <code>'c2'</code>            |
| **`C3`**          | <code>'c3'</code>            |
| **`C4`**          | <code>'c4'</code>            |
| **`C5`**          | <code>'c5'</code>            |
| **`C6`**          | <code>'c6'</code>            |
| **`C7`**          | <code>'c7'</code>            |
| **`C8`**          | <code>'c8'</code>            |
| **`C9`**          | <code>'c9'</code>            |
| **`C10`**         | <code>'c10'</code>           |
| **`Government`**  | <code>'govt'</code>          |
| **`ThreeByFive`** | <code>'three_by_five'</code> |
| **`FourBySix`**   | <code>'four_by_six'</code>   |
| **`FiveByEight`** | <code>'five_by_eight'</code> |
| **`JuniorLegal`** | <code>'junior_legal'</code>  |
| **`Ledger`**      | <code>'ledger'</code>        |
| **`Legal`**       | <code>'legal'</code>         |
| **`Letter`**      | <code>'letter'</code>        |
| **`Monarch`**     | <code>'monarch'</code>       |
| **`Tabloid`**     | <code>'tabloid'</code>       |

</docgen-api>
