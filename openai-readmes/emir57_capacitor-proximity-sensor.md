``<div align="center">
  <h2>Capacitor Proximity Sensor</h2>
  <h3>proximity-sensor</h3>
  <p>This Proximity Sensor API includes turning the screen on and off with the proximity sensor on the phone.</p>
</div>
<div>
  <h2>Platform Support</h2>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Ios</th>
        <th>Android</th>
        <th>Web</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Availability</td>
        <td>❌</td>
        <td>✔️</td>
        <td>❌</td>
      </tr>
    </tbody>
  </table>
</div>
<div>
  <h2>Installation</h2>

 ```powershell
npm i proximity-sensor
npx cover synchronization
```

</div>
<div>
  <h2>Android</h2>
  <p>
    This API requires the following permission to be added to your AndroidManifest.xml file:
    <pre><span><</span><span>uses-permission </span><span>android:name="android.permission.WAKE_LOCK"</span><span>/></span></pre>
  </p>
</div>
<div>
  <h2>API</h2>
 <ul>
   <li>
     <a href="#activeProximitySensor">activeProximitySensor()</a>
   </li>
   <li>
     <a href="#deActivateProximitySensor">deActivateProximitySensor()</a>
   </li>
   <li>
     <a href="#isActive">isActive()</a>
   </li>
   <li>
     <a href="#interfaces">Interfaces</a>
   </li>
 </ul>
  <div id="#activeProximitySensor">
    
 ```javascript
activeProximitySensor() => Promise<proximityInfos>
 ```
<p>Active proximity sensor</p>
<p>Returns: Promise<proximityInfos></p>
<p>Since: 0.0.5</p>
  </div>

<hr>
  
  <div id="deActivateProximitySensor">
    
 ```javascript
deActivateProximitySensor() => Promise<proximityInfos>
 ```
<p>Deactivate proximity sensor</p>
<p>Returns: Promise<proximityInfos></p>
<p>Since: 0.0.5</p>
  </div>

  <hr>

 <div id="isActive">
    
 ```javascript
isActive() => Promise<proximityInfos>
 ```
<p>Returns sensor active or deactive value</p>
<p>Returns: Promise<proximityInfos></p>
<p>Since: 0.0.5</p>
  </div>

  <hr>

   <div id="interfaces">
    <h2>Interfaces</h2>
     <h3>proximityInfos</h3>
     <table>
       <thead>
         <tr>
           <th>Prop</th>
           <th>Type</th>
           <th>Description</th>
           <th>Since</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>isOpen</td>
           <td>boolean</td>
           <td>Returns whether the sensor is on or off</td>
           <td>0.0.5</td>
         </tr>
       </tbody>
     </table>
  </div>
  
</div>
