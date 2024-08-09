# learn-helloworld-capacitor

Learn how to create and publish a capacitor plugin

## Install

```bash
npm install learn-helloworld-capacitor
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)

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

</docgen-api>


### Paso 1: Inicialización de un Plugin Capacitor

### Creación del Plugin

1. **Prompt: npm init @capacitor/plugin@latest**
    - Inicia la creación de un nuevo plugin Capacitor utilizando la última versión disponible.

### Configuración Adicional

1. **Prompt: What should be the Package ID for your plugin?**
    - Define el identificador único del paquete para el plugin (ej. `com.example.learnhelloworldcapacitor`).
2. **Prompt: What should be the class name for your plugin?**
    - Define el nombre de la clase principal del plugin (ej. `LearnHelloworldCapacitorPlugin`).
3. **Prompt: What is the repository URL for your plugin?**
    - Especifica la URL del repositorio donde se alojará el código del plugin (ej. `https://github.com/username/learn-helloworld-capacitor`).
4. **Prompt: Who is the author of this plugin?**
    - Indica la información del autor del plugin (ej. `Juan Pérez <juan@example.com>`).
5. **Prompt: What license should be used for your plugin?**
    - Selecciona la licencia bajo la cual se distribuirá el plugin (ej. `MIT`).
6. **Prompt: Enter a short description of plugin features.**
    - Proporciona una descripción breve de las características del plugin (ej. `A Capacitor plugin to demonstrate basic plugin creation with a simple 'Hello World' feature.`).

### Paso 2: Ejecución de Comandos Automáticos

Después de la configuración inicial, se ejecutaron los siguientes comandos de manera automática:

- **Comandos Automáticos:**
    
    ```perl
    perlCopy code
    npm install --no-package-lock
    npm run fmt
    
    ```
    

### Paso 3: Construcción y Configuración Final

### Construcción del Plugin

- **Comandos de Construcción:**
    
    ```arduino
    
    npm run build
    
    ```
    
    - Se limpian los archivos, se genera documentación, se compila TypeScript y se ejecuta Rollup para la configuración de construcción.

### Configuración Final

- **Configuración de Capacitor:**
    
    ```go
    
    npx cap copy
    npx cap add iOS
    npx cap add android
    
    ```
    
    - Se realiza la configuración inicial de Capacitor para iOS y Android.

### Inicialización de Git

- **Inicialización de Git:**
    
    ```css
    cssCopy code
    git init
    git checkout -b main
    git add -A
    git commit -m "Initial commit" --no-gpg-sign
    
    ```
    
    - Se inicia un repositorio Git, se crea la rama principal (`main`), se añaden los archivos y se realiza el primer commit.

### Paso 4: Finalización y Recomendaciones

- **Finalización:**
    
    ```
    Copy code
    🎉 Capacitor plugin generated! 🎉
    
    ```
    
    - El plugin ha sido generado exitosamente.

### Siguientes Pasos Recomendados

- **Siguientes Pasos:**
    - Navegar al directorio del plugin (`cd custom-capacitor-plugins/learn-helloworld-capacitor/`).
    - Abrir `CONTRIBUTING.md` para aprender sobre los scripts npm disponibles.
    - Continuar siguiendo la documentación para el desarrollo de plugins: [Documentación de Capacitor](https://capacitorjs.com/docs/plugins/workflow).
    - Para preguntas o discusiones, abrir un hilo de discusión en GitHub: [Discussions](https://github.com/ionic-team/capacitor/discussions).
    - Conocer más sobre la Comunidad Capacitor: [Capacitor Community](https://github.com/capacitor-community/welcome) 💖.
    
    # Creación de Plugins de Capacitor
    
    ## Paso 1: Inicialización de un Plugin Capacitor
    
    Para crear el Plugin:
    
    1. Ejecute el comando: `npm init @capacitor/plugin@latest`
        - Inicia la creación de un nuevo plugin Capacitor utilizando la última versión disponible.
    
    ## Configuración Adicional
    
    1. Cuando se le pregunte: `What should be the Package ID for your plugin?`
        - Defina el identificador único del paquete para el plugin (ej. `com.example.learnhelloworldcapacitor`).
    2. Cuando se le pregunte: `What should be the class name for your plugin?`
        - Defina el nombre de la clase principal del plugin (ej. `LearnHelloworldCapacitorPlugin


#How to use in ionic APP 
    ```
import { Component, OnInit } from '@angular/core';
import { LearnHelloworldCapacitorPlugin } from 'learn-helloworld-capacitor';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor() {
    console.log('>>>>>>>>>>>>> edward iniciado app');
  }
  ngOnInit(): void {
    LearnHelloworldCapacitorPlugin.echo({ value: 'edward' }).then(
      (data: any) => {
        console.log('>>>>>>>>>>>>> edward data desde plugin', data);
      }
    );
  }
}

    ```
