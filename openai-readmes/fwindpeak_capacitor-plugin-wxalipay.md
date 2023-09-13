# capacitor-plugin-wxalipay

capacitor 3 plugin for wechatPay and alipay

forked from [veluxa/capacitor-plugin-pay](https://github.com/veluxa/capacitor-plugin-pay)

## 配置

- 修改项目中的配置文件`capacitor.config.json`，增加微信 appid 配置`plugins.wxalipay.wxappId`
- 修改项目中插件的`build.gradle`文件, `def wxPayPackageName = "<your.package.name>"`改为自己的包名

## Install

```bash
npm install capacitor-plugin-wxalipay
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`wxPayRequest(...)`](#wxpayrequest)
- [`aliPayRequest(...)`](#alipayrequest)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => any
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>any</code>

---

### wxPayRequest(...)

```typescript
wxPayRequest(options: WxParams) => any
```

| Param         | Type                                          |
| ------------- | --------------------------------------------- |
| **`options`** | <code><a href="#wxparams">WxParams</a></code> |

**Returns:** <code>any</code>

---

### aliPayRequest(...)

```typescript
aliPayRequest(options: AlipayParams) => any
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#alipayparams">AlipayParams</a></code> |

**Returns:** <code>any</code>

---

### Interfaces

#### WxParams

| Prop            | Type                |
| --------------- | ------------------- |
| **`appId`**     | <code>string</code> |
| **`mchId`**     | <code>string</code> |
| **`prepayId`**  | <code>string</code> |
| **`noncestr`**  | <code>string</code> |
| **`timestamp`** | <code>number</code> |
| **`sign`**      | <code>string</code> |

#### AlipayParams

| Prop            | Type                |
| --------------- | ------------------- |
| **`orderInfo`** | <code>string</code> |

</docgen-api>
