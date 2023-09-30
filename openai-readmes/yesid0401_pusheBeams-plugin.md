pasos <br>
1 git clone https://github.com/yesid0401/pusheBeams-plugin .git <br>
2 cd pusheBeams-plugin <br>
3 npm i <br>
4 poner la carpeta pusheBeams-plugin en el mismo directorio que tu proyecto capacitor <br>
5 en tu proyecto capacitor ejecutar npm i ./pusheBeams-plugin <br>
6 ejecutar npx cap sync <br>
7 importar pusheBeams-plugin en el archivo que lo vayas a utilizar <b>import 'pusherBeams-plugin'<b> y <b>const {PusherBeamsPlugin} = Plugins<b><br>
8 ir a tu clase MainActivity.java e importar import app.tissini.pusherBeams.PusherBeamsPlugin; <br>
9 en la clase MainActivity.java dentro del metodo this.init() colocar add(PusherBeamsPlugin.class);<br>

<h1>Metodos</h1> <br>
PusherBeamsPlugin.addDeviceInterest({interest: 'aqui escribe tu interes a crear'}) <br>
PusherBeamsPlugin.removeDeviceInterest({interest: 'aqui escribe tu interes a eliminar'})
PusherBeamsPlugin.getDeviceInterests(): // obtener todos los intereses a los que el dispositivo esta subscrito <br>
PusherBeamsPlugin.clearDeviceInterests(): // Anula la suscripción del dispositivo a todos los intereses. <br>
