# capacitor-calendario

Plugin para agregar eventos al calendario del sistema.

## Install

```bash
npm install capacitor-calendario
npx cap sync
```

## API

<docgen-index>

* [`crearEvento(...)`](#crearevento)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### crearEvento(...)

```typescript
crearEvento(evento: Evento) => Promise<{ resultado: Resultado; }>
```

| Param        | Type                                      |
| ------------ | ----------------------------------------- |
| **`evento`** | <code><a href="#evento">Evento</a></code> |

**Returns:** <code>Promise&lt;{ resultado: <a href="#resultado">Resultado</a>; }&gt;</code>

--------------------


### Interfaces


#### Evento

| Prop                    | Type                |
| ----------------------- | ------------------- |
| **`eventoID`**          | <code>string</code> |
| **`titulo`**            | <code>string</code> |
| **`mseInicio`**         | <code>number</code> |
| **`mseFin`**            | <code>number</code> |
| **`timezone`**          | <code>string</code> |
| **`organizadorNombre`** | <code>string</code> |
| **`organizadorEmail`**  | <code>string</code> |
| **`lugar`**             | <code>string</code> |
| **`direccion`**         | <code>string</code> |
| **`descripcion`**       | <code>string</code> |
| **`url`**               | <code>string</code> |


### Type Aliases


#### Resultado

<code>'creado' | 'cancelado' | 'error'</code>

</docgen-api>
