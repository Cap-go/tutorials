# Capacitor pdf

El propósito del plugin es tener una alternativa a un lector de pdf nativo para capacitor. En este momento se encuentra funcional solo para andriod pero, no en mucho tiempo, tenemos la version actualizada para ios. En las siguientes secciones vamos a documentar como utilizar el plugin y las entradas que tiene el mismo.

## Contribución

<a href="https://www.buymeacoffee.com/jhonarlexo" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## Instalación

npm i capacitor-pdf

## Utilización en javascript

### Anotaciones en pdf

En este momento solo se tiene anotaciones de tipo link, que se insertan como un boton en el pdf. Cuando se da click en el este, abre un navegador interno que muestra la página del enlace enviado.

Se debe enviar al método del plugin, un dato tipo json que incluyes los siguientes parámetros:
page: 1, // no funcionan por ahora
point_x: 500,
point_y: 500,
point_link: "Enlace del link",
point_icon: 'ic_info',// no funcionan por ahora
point_color_icon: 'white',// no funcionan por ahora
point_background_icon: 'blue' // no funcionan por ahora

Por ahora está funcionando la los items point_x, point_y y point_link. Los demas parámetros irán funcionando poco a poco.

### Integración javascript

En el ejemplo se está utilizando angular, pero puede funcionar con cualquier aplicacion hecha en javascript.

```Javascript
import { Plugins } from '@capacitor/core';
const { PdfPlugin } = Plugins;
...
    viewPdf() {
        const annotations: any[] = [
        {
            page: 1, // no funcionan por ahora
            point_x: 500,
            point_y: 500,
            point_link: "https://www.elpais.com.co",
            point_icon: 'ic_info',// no funcionan por ahora
            point_color_icon: 'white',// no funcionan por ahora
            point_background_icon: 'blue' // no funcionan por ahora
        }
        ]
            const options: any  = {
            linkPdf: "enlace del pdf",
            annotations
        }
        PdfPlugin.viewPdf({...options});
    }
```

## Integración en android

Pasos para integrar el plugin en android:

- ionic capacitor run android
- En el MainActivity.java, debes añadir el siguiente código:

  ```Java
      public class MainActivity extends BridgeActivity {
          @Override
          public void onCreate(Bundle savedInstanceState) {
              super.onCreate(savedInstanceState);

              // Initializes the Bridge
              this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
                  // Additional plugins you've installed go here
                  // Ex: add(TotallyAwesomePlugin.class);
                  add(PdfPlugin.class);
              }});
          }
      }
  ```

- Correr aplicación en un dispositivo

## Integración en ios

Primer version de ios lanzada. Solo esta funcionando el pdf. Ya tenemos soporte para ios!! 🥳🥳🥳🥳🥳
