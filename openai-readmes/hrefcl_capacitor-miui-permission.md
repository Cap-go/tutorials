# Capacitor MiUI Permission Plugin

Este plugin para Capacitor permite manejar y verificar permisos específicos de MIUI en dispositivos Xiaomi con la capa de personalización MIUI. La utilidad de este plugin radica en la capacidad de verificar y solicitar permisos que no se encuentran disponibles en la API estándar de Android.

### Características

El plugin Capacitor MIUI Permission ofrece las siguientes funcionalidades:

Verificar si la aplicación tiene permiso para "Abrir nueva ventana mientras se ejecuta en segundo plano" (permiso específico de MIUI).
Solicitar al usuario que habilite el permiso "Abrir nueva ventana mientras se ejecuta en segundo plano" en la configuración de la aplicación, si no está habilitado.

Verificar si la aplicación tiene permiso para "Mostrar ventana emergente" (permiso de Android ACTION_MANAGE_OVERLAY_PERMISSION).
Solicitar al usuario que habilite el permiso "Mostrar ventana emergente" en la configuración de la aplicación, si no está habilitado.
Este plugin es útil en situaciones donde las aplicaciones necesitan ejecutar funcionalidades específicas que requieren estos permisos. La compatibilidad con MIUI es esencial, ya que es una capa de personalización popular en dispositivos Xiaomi y puede tener configuraciones de permisos diferentes a las de la API de Android estándar.

Al utilizar este plugin, los desarrolladores pueden garantizar que sus aplicaciones funcionen correctamente en dispositivos Xiaomi con MIUI y proporcionar una experiencia de usuario más fluida al solicitar permisos específicos de MIUI cuando sea necesario.

## Install

```bash
npm install capacitor-miui-permission
npx cap sync
```

## Uso

#### Primero, importa `CapacitorMiuiPermission` del paquete del plugin:

```typescript
import { CapacitorMiuiPermission } from 'capacitor-miui-permission'
```

A continuación, puedes utilizar las funciones proporcionadas por el plugin en tu aplicación.

#### Solicitar permiso MIUI

```typescript
async function requestMIUIPermission() {
  try {
    await CapacitorMiuiPermission.requestMIUIPopupPermission()
    console.log('Permiso MIUI solicitado correctamente')
  } catch (error) {
    console.error('Error al solicitar el permiso MIUI', error)
  }
}
```

#### Verificar y solicitar un permiso específico

```typescript
async function checkAndRequestPermission(permission) {
  const permissionStatus = await CapacitorMiuiPermission.checkMIUIPermission({ permission })
  console.log('Estado del permiso MIUI:', permissionStatus.granted ? 'Concedido' : 'Denegado')

  const canDrawOverlays = await CapacitorMiuiPermission.canDrawOverlays()
  console.log('Permiso de superposición:', canDrawOverlays.value ? 'Concedido' : 'Denegado')

  if (!permissionStatus.granted) {
    await CapacitorMiuiPermission.requestMIUIPopupPermission()
  } else {
    console.log('Permiso ya concedido')
  }
}

// Llama a la función requestMIUIPermission() en el lugar apropiado de tu aplicación
```

## API

<docgen-index>

- [`requestMIUIPopupPermission()`](#requestmiuipopuppermission)
- [`checkMIUIPermission(...)`](#checkmiuipermission)
- [`canDrawOverlays()`](#candrawoverlays)
- [`requestOverlayPermission()`](#requestoverlaypermission)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### requestMIUIPopupPermission()

```typescript
requestMIUIPopupPermission() => Promise<void>
```

---

### checkMIUIPermission(...)

```typescript
checkMIUIPermission(options: { permission: string; }) => Promise<{ granted: boolean; }>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ permission: string; }</code> |

**Returns:** <code>Promise&lt;{ granted: boolean; }&gt;</code>

---

### canDrawOverlays()

```typescript
canDrawOverlays() => Promise<{ value: boolean; }>
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

---

### requestOverlayPermission()

```typescript
requestOverlayPermission() => Promise<void>
```

---

</docgen-api>
