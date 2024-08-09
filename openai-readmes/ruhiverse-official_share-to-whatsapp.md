# share-to-whatsapp

The share-to-whatsapp plugin allows you to easily share images and PDF files directly to a specified WhatsApp number from your Ionic/Capacitor application.

## Install

```bash
npm install share-to-whatsapp
npx cap sync
```

## API

<docgen-index>

* [`shareImage(...)`](#shareimage)
* [`sharePdf(...)`](#sharepdf)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### shareImage(...)

```typescript
shareImage(options: { base64?: string; fileName?: string; phoneNumber?: string; message?: string; }) => Promise<void>
```

| Param         | Type                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ base64?: string; fileName?: string; phoneNumber?: string; message?: string; }</code> |

--------------------


### sharePdf(...)

```typescript
sharePdf(options: { base64?: string; fileName?: string; phoneNumber?: string; message?: string; }) => Promise<void>
```

| Param         | Type                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ base64?: string; fileName?: string; phoneNumber?: string; message?: string; }</code> |

--------------------

</docgen-api>
