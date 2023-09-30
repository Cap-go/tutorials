# Cap-Feathersjs

---

The Cap-Feathersjs Electron Plugin is for interactive with a embedded Feathersjs Server.

#### Carefully !!

To use it you must generate a [Feathersjs app](https://docs.feathersjs.com/guides/basics/generator.html#generating-the-application) folder in you current **electron** folder of your Cacacitor Application.

This plugin use file **src/app.js** to init your Feathersjs App.

## Sample

```
import {  Plugins, Capacitor } from'@capacitor/core';
const { CapFeathersPlugin } = Plugins;

.......

    if (Capacitor.platform === 'electron')  {

      console.log('Path :',CapFeathersPlugin.Path.resolve('./'));
      console.log('NodeFS :',CapFeathersPlugin.NodeFS); //NodeFS using fs-jetpack

      this.editorContent = CapFeathersPlugin.NodeFS.read(CapFeathersPlugin.Path.resolve('./server/config/default.json'),'utf8');

      console.log('Initialisation du plugin pour Feathersjs...');

      CapFeathersPlugin.setFeathersPath(CapFeathersPlugin.Path.resolve('./server')).then(()=>{
        console.log('Iniliatisation effectuée');
      });

    }

.......

    onIsStart() {
    if (Capacitor.platform == 'electron') {

        CapFeathersPlugin.isStart().then((res)=>{
          console.log('State server :',res);
        })


    }
  }


  onStartSvr() {
    if (Capacitor.platform == 'electron') {

      CapFeathersPlugin.startServer().then(()=>{
        CapFeathersPlugin.isStart().then((res)=>{
          console.log('State server :',res);
        })
      })

    }
  }

  onStopSvr() {
    if (Capacitor.platform == 'electron') {

      CapFeathersPlugin.stopServer().then(()=>{
        CapFeathersPlugin.isStart().then((res)=>{
          console.log('State server :',res);
        })

      });

    }
  }

  onGetPortSvr() {
    if (Capacitor.platform == 'electron') {
      CapFeathersPlugin.getListenPort().then((res)=>{
        console.log("Port d'ecoute : ",res);
        this.presentPort(res);
      });

    }
  }

  onSetPortSvr(p) {
    if (Capacitor.platform == 'electron') {

      CapFeathersPlugin.changePort(p).then(()=>{
        CapFeathersPlugin.getListenPort().then((res)=>{
          console.log("Port d'ecoute : ",res);
        });
      });

    }
  }

........
```

## API

#### setFeathersPath

```
setFeathersPath(chemin:string): Promise<void>;
```

Set and Init the Feathersjs App path.

#### startServer

```
startServer(): Promise<void>;
```

Start Featherjs App Server

#### stopServer

```
stopServer(): Promise<void>;
```

Stop Featherjs App Server

#### changePort

```
changePort(port: number): Promise<void>;
```

#### isStart

```
isStart(): Promise<boolean>;
```

Test if Featherjs App Server is start

#### getFeathersRef

```
getFeathersRef(): any;
```

Ref instance of Featherjs App Server

#### setConfig

```
setConfig(param:string,value:any): Promise<void>;
```

Change setting of value to configure Featherjs App Server

#### getConfig

```
getConfig(param:string): Promise<void>;
```

Get a value of configuration Featherjs App Server

#### getListenPort

```
getListenPort(): Promise<number>;
```

Return the current listen port of Featherjs App Server
