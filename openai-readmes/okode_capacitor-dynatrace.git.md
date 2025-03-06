# capacitor-dynatrace

Dynatrace plugin for Capacitor

## Publish NPM package
Ensure you are athenticated in NPM.js using npm login

npm ci
npm run build
npm run release

## Install

```bash
npm install capacitor-dynatrace
npx cap sync
```

## Android

- Añade la dependencia del plugin Dynatrace dentro del bloque `buildscript` en el `build.gradle` de la carpeta principal del proyecto android de tu aplicación (`apps/[project]/android/build.gradle`)

```
buildscript {
    dependencies {
        ...
        classpath 'com.dynatrace.tools.android:gradle-plugin:8.+' // Add this dependency
    }
}
```

- Configura el plugin de Dynatrace dentro del `build.gradle` de la carpeta principal del proyecto android de tu aplicación (`apps/[project]/android/build.gradle`)

```
apply plugin: 'com.dynatrace.instrumentation'
dynatrace {
    configurations {
        preproduction {
            variantFilter "[dD]ebug"
            autoStart {
                applicationId '[YOUR_PRE_APPLICATION_ID]'
                beaconUrl '[YOUR_PRE_BEACON_URL]'
            }
            hybridWebView {
                enabled true
                domains '[YOUR_DOMAINS]'
            }
            agentBehavior.startupLoadBalancing true
        }
        production {
            variantFilter "[rR]elease"
            autoStart {
                applicationId '[YOUR_PROD_APPLICATION_ID]'
                beaconUrl '[YOUR_PROD_BEACON_URL]'
            }
            hybridWebView {
                enabled true
                domains '[YOUR_DOMAINS]'
            }
            agentBehavior.startupLoadBalancing true
        }
    }
}
```

- applicationId: ID de la aplicación de Dynatrace. Valor suministrado por plataforma.
- beaconUrl: Beacon URL de Dynatrace. Valor suministrado por plataforma.
- domains: Listado de nombres de dominio de los servicios de backend a monitorizar. Dynatrace automáticamente monitoriza toda peticion XHR a los servicios de backend desde el webview. Sin embargo, para tener visibilidad *end-to-end* es necesario especificar los nombres de dominio de los servicios de backend. Ejemplo: `'.mapfre.com', '.mapfre.es'`

### iOS

- Añade en el `Info.plist` de la aplicación los siguientes valores:

```
<key>DTXApplicationID</key>
<string>${DYNATRACE_APPLICATION_ID}</string>
<key>DTXBeaconURL</key>
<string>${DYNATRACE_BEACON_URL}</string>
<key>DTXHybridApplication</key>
<string>true</string>
<key>DTXSetCookiesForDomain</key>
<array>
  <string>[YOUR_DOMAIN]</string>
</array>
<key>DTXStartupLoadBalancing</key>
<true/>
```

- DTXApplicationID: ID de la aplicación de Dynatrace. Valor suministrado por plataforma.
- DYNATRACE_BEACON_URL: Beacon URL de Dynatrace. Valor suministrado por plataforma.
- DTXSetCookiesForDomain: Listado de nombres de dominio de los servicios de backend a monitorizar. Dynatrace automáticamente monitoriza toda peticion XHR a los servicios de backend desde el webview. Sin embargo, para tener visibilidad *end-to-end* es necesario especificar los nombres de dominio de los servicios de backend. Ejemplo: `<array><string>.mapfre.es</string><string>.mapfre.com</string></array>`

- Configura los valores de Dynatrace por tipo de construcción

  - Accede a ***Build settings***
  - Añade los ***User-defined setting*** para:
    - DYNATRACE_APPLICATION_ID
    - DYNATRACE_BEACON_URL

## API

<docgen-index>



</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->



</docgen-api>
